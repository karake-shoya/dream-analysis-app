/**
 * 夢診断結果の型定義
 */
export interface AnalysisResult {
  /** 夢を象徴するキーワード */
  keywords: string[];
  /** 夢を象徴するキャッチーなタイトル */
  title?: string;
  /** 夢が教えてくれる今の状態 */
  summary: string;
  /** 前向きなアドバイス */
  advice: string;
}

/**
 * 夢診断結果（API レスポンス用、IDを含む）
 */
export interface AnalysisResultWithId extends AnalysisResult {
  id?: string;
}

/**
 * 夢の記録データ（Supabase からの取得用）
 */
export interface DreamRecord {
  id: string;
  user_id: string | null;
  content: string;
  diagnosis_result: AnalysisResult;
  created_at: string;
}
