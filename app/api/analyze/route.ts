import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { consumeRateLimit } from "@/lib/rate-limit";
import { cleanJsonText } from "@/lib/utils";
import { ERROR_MESSAGES, AI_CONFIG, getDreamAnalysisPrompt } from "@/lib/constants";

export const runtime = "nodejs";

const MAX_DREAM_LENGTH = 2000;

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const dream = typeof payload?.dream === "string" ? payload.dream : "";

    if (!dream.trim()) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.DREAM_EMPTY },
        { status: 400 }
      );
    }

    if (dream.length > MAX_DREAM_LENGTH) {
      return NextResponse.json(
        { error: `夢の内容は${MAX_DREAM_LENGTH}文字以内で入力してください。` },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const rateLimitResult = consumeRateLimit({
      key: user ? `analyze:user:${user.id}` : `analyze:ip:${getClientIp(req)}`,
      limit: user ? 60 : 20,
      windowMs: 10 * 60 * 1000,
    });

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "リクエストが多すぎます。しばらく待ってから再試行してください。" },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfterSeconds),
          },
        }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        { error: ERROR_MESSAGES.SERVER_CONFIG_ERROR },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: AI_CONFIG.MODEL_NAME,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });

    const prompt = getDreamAnalysisPrompt(dream);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const cleanText = cleanJsonText(text);
    const analysis = JSON.parse(cleanText);

    if (analysis.isDiagnosable === false) {
      return NextResponse.json(
        { error: analysis.errorReason || ERROR_MESSAGES.NOT_A_DREAM },
        { status: 400 }
      );
    }

    let dreamId: string | null = null;
    let shareToken: string | null = null;

    const { data: insertedData, error: dbError } = await supabase
      .from("dreams")
      .insert({
        user_id: user?.id || null,
        content: dream,
        diagnosis_result: analysis,
      })
      .select("id, share_token")
      .single();

    if (dbError) {
      console.error("Failed to save to Supabase:", dbError);
    } else if (insertedData) {
      dreamId = insertedData.id;
      shareToken = insertedData.share_token;
    }

    return NextResponse.json({ ...analysis, id: dreamId, shareToken });
  } catch (error) {
    console.error("Analysis Error:", error);
    return NextResponse.json(
      { error: ERROR_MESSAGES.ANALYSIS_ERROR },
      { status: 500 }
    );
  }
}
