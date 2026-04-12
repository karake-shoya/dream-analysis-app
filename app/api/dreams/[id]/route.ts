import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const MAX_NOTES_LENGTH = 2000;
const MAX_TAGS = 10;
const MAX_TAG_LENGTH = 20;

interface PatchBody {
  notes?: string;
  userTags?: unknown;
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
  }

  const { id } = await params;
  const body: PatchBody = await req.json();

  const notes =
    typeof body.notes === "string"
      ? body.notes.slice(0, MAX_NOTES_LENGTH)
      : "";

  const rawTags = Array.isArray(body.userTags) ? body.userTags : [];
  const userTags: string[] = rawTags
    .filter((t): t is string => typeof t === "string" && t.trim().length > 0)
    .map((t) => t.trim().slice(0, MAX_TAG_LENGTH))
    .slice(0, MAX_TAGS);

  const { error } = await supabase
    .from("dreams")
    .update({ notes, user_tags: userTags })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    console.error("Dream update error:", error);
    return NextResponse.json({ error: "保存に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
