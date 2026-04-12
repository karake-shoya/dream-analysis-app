import type { SupabaseClient } from "@supabase/supabase-js";
import type { AnalysisResult } from "@/lib/types";

type SaveDreamParams = {
  userId: string | null;
  content: string;
  analysis: AnalysisResult;
};

type SaveDreamResult = {
  id: string | null;
  shareToken: string | null;
};

/**
 * 夢の分析結果を Supabase に保存し、ID と共有トークンを返す
 */
export async function saveDream(
  supabase: SupabaseClient,
  { userId, content, analysis }: SaveDreamParams
): Promise<SaveDreamResult> {
  const { data, error } = await supabase
    .from("dreams")
    .insert({
      user_id: userId,
      content,
      diagnosis_result: analysis,
    })
    .select("id, share_token")
    .single();

  if (error) {
    console.error("Failed to save to Supabase:", error);
    return { id: null, shareToken: null };
  }

  return { id: data.id, shareToken: data.share_token };
}
