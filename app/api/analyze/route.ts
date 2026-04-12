import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { consumeRateLimit } from "@/lib/rate-limit";
import { analyzeWithGemini } from "@/lib/gemini";
import { saveDream } from "@/lib/dreams";
import { ERROR_MESSAGES } from "@/lib/constants";

export const runtime = "nodejs";

const MAX_DREAM_LENGTH = 2000;

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    // ① 入力バリデーション
    const payload = await req.json();
    const dream = typeof payload?.dream === "string" ? payload.dream : "";

    if (!dream.trim()) {
      return NextResponse.json({ error: ERROR_MESSAGES.DREAM_EMPTY }, { status: 400 });
    }
    if (dream.length > MAX_DREAM_LENGTH) {
      return NextResponse.json(
        { error: `夢の内容は${MAX_DREAM_LENGTH}文字以内で入力してください。` },
        { status: 400 }
      );
    }

    // ② レート制限
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const rateLimitResult = await consumeRateLimit({
      key: user ? `analyze:user:${user.id}` : `analyze:ip:${getClientIp(req)}`,
      limit: user ? 60 : 20,
      windowMs: 10 * 60 * 1000,
    });

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "リクエストが多すぎます。しばらく待ってから再試行してください。" },
        { status: 429, headers: { "Retry-After": String(rateLimitResult.retryAfterSeconds) } }
      );
    }

    // ③ AI 分析
    const analysis = await analyzeWithGemini(dream);

    if (analysis.isDiagnosable === false) {
      return NextResponse.json(
        { error: (analysis as { errorReason?: string }).errorReason || ERROR_MESSAGES.NOT_A_DREAM },
        { status: 400 }
      );
    }

    // ④ DB 保存
    const { id: dreamId, shareToken } = await saveDream(supabase, {
      userId: user?.id ?? null,
      content: dream,
      analysis,
    });

    return NextResponse.json({ ...analysis, id: dreamId, shareToken });
  } catch (error) {
    console.error("Analysis Error:", error);
    return NextResponse.json({ error: ERROR_MESSAGES.ANALYSIS_ERROR }, { status: 500 });
  }
}
