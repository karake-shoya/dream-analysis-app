/**
 * 夢診断結果の型定義
 */
export interface AnalysisResult {
  /** 診断可能かどうか */
  isDiagnosable: boolean;
  /** 追加情報が必要かどうか */
  needsMoreInfo: boolean;
  /** 追加で確認したい質問（最大3つ） */
  missingInfoQuestions: string[];
  /** 夢を象徴するキーワード */
  keywords: string[];
  /** 夢を象徴するキャッチーなタイトル */
  title?: string;
  /** 夢の事実（解釈抜き） */
  facts: string[];
  /** 夢の中での感情 */
  emotions: string[];
  /** 象徴とその意味候補 */
  symbols: {
    symbol: string;
    meaningCandidates: string[];
  }[];
  /** 解釈（有力なものと代替案） */
  interpretations: {
    summary: string;
    confidence: number;
    evidence: string[];
  }[];
  /** 前向きなアドバイス */
  advice: string;
  /** 具体的な行動提案 */
  nextActions: string[];
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
