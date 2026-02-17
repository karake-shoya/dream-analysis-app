export type ResultTypeId =
  | "affection"
  | "communication"
  | "gentleBond"
  | "passion"
  | "stable"
  | "independent"
  | "support"
  | "selfTime";

export type ScoreMap = Record<ResultTypeId, number>;

export interface Option {
  value: string;
  label: string;
  weights: Partial<ScoreMap>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: Option[];
}

export interface ResultType {
  id: ResultTypeId;
  title: string;
  description: string;
  tendencies: string[];
  caution: string;
  advice: string;
  sleepingPosition: string;
  imageUrl: string;
  // 以下は既存のUIとの互換性のために残す（または必要に応じてマッピング）
  summary?: string;
  cautions?: string;
  recommendedPositionName?: string;
  relationshipTrend?: string;
  reasons?: string[];
}

export const RESULTS: Record<ResultTypeId, ResultType> = {
  affection: {
    id: "affection",
    title: "愛情密着型",
    description: "二人の距離はとても近く、安心感を強く求める関係。スキンシップが愛情表現の中心になりやすいタイプです。",
    tendencies: ["不安はすぐ共有する", "一緒にいる時間が多い", "離れると少し寂しい"],
    caution: "依存が強くなりすぎると、相手の自由を奪ってしまうことも。",
    advice: "たまに“ひとり時間”を意識的に作ると、もっと健全に続きます。",
    sleepingPosition: "密着寝",
    imageUrl: "/images/sleeping-positions/affection.png",
    // 互換性データ
    summary: "二人の距離はとても近く、安心感を強く求める関係。スキンシップが愛情表現の中心になりやすいタイプです。",
    cautions: "依存が強くなりすぎると、相手の自由を奪ってしまうことも。",
    recommendedPositionName: "密着寝",
    relationshipTrend: "不安を共有し、多くの時間を共に過ごす、親密度の高い関係です。",
    reasons: ["スキンシップを重視し、安心感を共有しているため", "お互いのぬくもりを直接感じたいという欲求が強いため"],
  },
  communication: {
    id: "communication",
    title: "心通じ合い型",
    description: "感情や考えを言葉で伝え合うことを大切にする関係。",
    tendencies: ["会話が多い", "目を見て話すタイプ", "気持ちを確認し合う"],
    caution: "相手の反応に敏感になりすぎると疲れることも。",
    advice: "沈黙も安心の証だと受け止めると、さらに深まります。",
    sleepingPosition: "向き合い寝",
    imageUrl: "/images/sleeping-positions/communication.png",
    summary: "感情や考えを言葉で伝え合うことを大切にする関係。",
    cautions: "相手の反応に敏感になりすぎると疲れることも。",
    recommendedPositionName: "向き合い寝",
    relationshipTrend: "言葉によるコミュニケーションを重視し、常に意思疎通を図る安定した関係です。",
    reasons: ["向き合うことで相手の表情や反応をダイレクトに感じられるため", "対話を大切にする二人のスタイルに合っているため"],
  },
  gentleBond: {
    id: "gentleBond",
    title: "そっと繋がる型",
    description: "距離はあるけれど、絆はしっかりある大人な関係。",
    tendencies: ["ベタベタはしない", "でも繋がりは確認したい", "安定感がある"],
    caution: "愛情表現が控えめすぎると誤解される可能性も。",
    advice: "時々ストレートな言葉も添えると安心感アップ。",
    sleepingPosition: "手つなぎ寝",
    imageUrl: "/images/sleeping-positions/gentleBond.png",
    summary: "距離はあるけれど、絆はしっかりある大人な関係。",
    cautions: "愛情表現が控えめすぎると誤解される可能性も。",
    recommendedPositionName: "手つなぎ寝",
    relationshipTrend: "お互いの自立を尊重しつつ、最小限の接触で絆を確認し合える成熟した関係です。",
    reasons: ["適度な距離感を保ちながら信頼を維持しているため", "さりげない接触が心地よい安心感を生むため"],
  },
  passion: {
    id: "passion",
    title: "ときめき一体型",
    description: "情熱的で一体感の強い関係。",
    tendencies: ["盛り上がりやすい", "感情表現が豊か", "恋愛初期や復縁期に多い"],
    caution: "感情の波が激しくなりがち。",
    advice: "落ち着く時間も大事にすると長続き。",
    sleepingPosition: "絡み合い寝",
    imageUrl: "/images/sleeping-positions/passion.png",
    summary: "情熱的で一体感の強い関係。",
    cautions: "感情の波が激しくなりがち。",
    recommendedPositionName: "絡み合い寝",
    relationshipTrend: "非常に情熱的で、お互いを強く求め合う、エネルギーに満ちた関係です。",
    reasons: ["体全体で密着することで、強い一体感と情熱を確認できるため", "今の高い熱量をそのまま表現しているため"],
  },
  stable: {
    id: "stable",
    title: "信頼安定型",
    description: "くっつかなくても安心できる成熟した関係。",
    tendencies: ["お互い自立している", "信頼ベース", "安定志向"],
    caution: "マンネリ化しやすい。",
    advice: "たまに新しい刺激を取り入れると◎",
    sleepingPosition: "背中接触寝",
    imageUrl: "/images/sleeping-positions/stable.png",
    summary: "くっつかなくても安心できる成熟した関係。",
    cautions: "マンネリ化しやすい。",
    recommendedPositionName: "背中接触寝",
    relationshipTrend: "長年のパートナーのような、言葉にしなくても伝わる深い信頼と安定感があります。",
    reasons: ["それぞれのパーソナルスペースを確保しつつ、存在を感じられるため", "落ち着いた関係のリズムに最適な距離感であるため"],
  },
  independent: {
    id: "independent",
    title: "自由尊重型",
    description: "それぞれの空間を大切にする独立型。",
    tendencies: ["干渉しすぎない", "自分時間が必要", "落ち着いた距離感"],
    caution: "距離が広がりすぎると心も離れる可能性。",
    advice: "意識的に触れ合う時間を作るとバランスが取れる。",
    sleepingPosition: "背中きょり寝",
    imageUrl: "/images/sleeping-positions/independent.png",
    summary: "それぞれの空間を大切にする独立型。",
    cautions: "距離が広がりすぎると心も離れる可能性。",
    recommendedPositionName: "背中きょり寝",
    relationshipTrend: "自慢のパートナーでありつつ、一人の人間としての時間を尊重し合える関係です。",
    reasons: ["お互いの睡眠の質と、個人の空間を最優先にしているため", "自立した精神性が反映された合理的な姿勢であるため"],
  },
  support: {
    id: "support",
    title: "支え合い型",
    description: "守る・守られるのバランスがある関係。",
    tendencies: ["相手の不安を受け止める", "安心基地になっている", "ケア意識が高い"],
    caution: "どちらかが疲れてしまう可能性。",
    advice: "役割を固定しすぎないこと。",
    sleepingPosition: "胸まくら寝",
    imageUrl: "/images/sleeping-positions/support.png",
    summary: "守る・守られるのバランスがある関係。",
    cautions: "どちらかが疲れてしまう可能性。",
    recommendedPositionName: "胸まくら寝",
    relationshipTrend: "困った時はお互い様、という強いサポート意識と慈愛に満ちた関係です。",
    reasons: ["一方が他方を優しく包み込むことで、絶対的な安心感が生まれるため", "ケアの精神が目に見える形となって現れているため"],
  },
  selfTime: {
    id: "selfTime",
    title: "自分時間重視型",
    description: "自由と自分のペースを大切にする関係。",
    tendencies: ["依存しない", "干渉しない", "友達のような安心感"],
    caution: "愛情確認が不足しがち。",
    advice: "たまに意識的なスキンシップを。",
    sleepingPosition: "スペース大きめ寝",
    imageUrl: "/images/sleeping-positions/selfTime.png",
    summary: "自由と自分のペースを大切にする関係。",
    cautions: "愛情確認が不足しがち。",
    recommendedPositionName: "スペース大きめ寝",
    relationshipTrend: "お互いに縛られず、共通の趣味や個別の時間を楽しむ友達親子のような軽やかな関係です。",
    reasons: ["広々とした空間を好む、自由闊達な性格の表れであるため", "形式にこだわらず、お互いの快適さを一番に考えているため"],
  },
};
