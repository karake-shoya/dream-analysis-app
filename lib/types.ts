/**
 * 夢診断結果の型定義
 */
export interface AnalysisResult {
  /** 診断可能かどうか */
  isDiagnosable: boolean;
  /** 追加情報が必要かどうか */
  needsMoreInfo: boolean;
  /** 追加で確認したい質問（最大4つまで）とその回答ヒント（ボタン用） */
  missingInfoQuestions: {
    question: string;
    options: string[];
  }[];
  /** 解析に関する補足事項（情報不足時の注意点など） */
  analysisNote?: string;
  /** 夢を象徴するキーワード */
  keywords: string[];
  /** 夢を象徴するキャッチーなタイトル */
  title?: string;
  /** 旧形式の診断要約（互換用） */
  summary?: string;
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
  /** 前向きなアドバイス（夢の内容に対する助言） */
  advice: string;
  /** 具体的な行動提案（夢のメッセージを活かすための日常のアクション） */
  nextActions: string[];
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
