export type ResultTypeId =
  | "affection"
  | "communication"
  | "gentleBond"
  | "passion"
  | "stable"
  | "independent"
  | "support"
  | "selfTime"
  // 以下、追加した7タイプ
  | "partialEmbrace"
  | "footTouch"
  | "backToBackParallel"
  | "faceDown"
  | "headCloseTogether"
  | "armPillow"
  | "diagonalCrossing";

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
    description: "ふたりの距離はとても近く、安心感を強く求める関係。スキンシップが愛情表現の中心になりやすいタイプです。",
    tendencies: ["不安はすぐ共有する", "一緒にいる時間が多い", "離れると少し寂しい"],
    caution: "依存が強くなりすぎると、相手の自由を奪ってしまうことも。",
    advice: "たまに“ひとり時間”を意識的に作ると、もっと健全に続きます。",
    sleepingPosition: "密着寝",
    imageUrl: "/images/sleeping-positions/affection.png",
    // 互換性データ
    summary: "ふたりの距離はとても近く、安心感を強く求める関係。スキンシップが愛情表現の中心になりやすいタイプです。",
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
    reasons: ["向き合うことで相手の表情や反応をダイレクトに感じられるため", "対話を大切にするふたりのスタイルに合っているため"],
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
  partialEmbrace: {
    id: "partialEmbrace",
    title: "非対称バランス型",
    description: "片方が愛情を求め、もう片方が受け止める非対称な関係。",
    tendencies: ["愛情表現に少し差がある", "自立と甘えの役割が分かれている", "お互いの違いを認識している"],
    caution: "求める側が寂しさを、受け止める側が負担を感じるすれ違いに注意。",
    advice: "言葉で愛情を伝え合う時間を作ると、バランスが保ちやすくなります。",
    sleepingPosition: "片方だけ向いて寝る",
    imageUrl: "/images/sleeping-positions/pos_09.png",
    summary: "片方が愛情を求め、もう片方が受け止める非対称な関係。",
    cautions: "求める側が寂しさを、受け止める側が負担を感じるすれ違いに注意。",
    recommendedPositionName: "片方だけ向いて寝る",
    relationshipTrend: "向いている側が相手への関心や愛情を強く求め、仰向け側は自立心と精神的な安定感を持つ状態。お互いの違いを受け入れている成熟した関係です。",
    reasons: ["愛情を注ぐ側と、それを受け止めて安定感を提供する側でバランスが取れているため", "精神的な自立度に違いがあっても、うまく噛み合っているため"],
  },
  footTouch: {
    id: "footTouch",
    title: "本音の愛情型",
    description: "体は離れていても、無意識の部分で深く繋がっている関係。",
    tendencies: ["言葉での愛情表現は少ない", "長く付き合っている", "見えない信頼がある"],
    caution: "日常生活の中でコミュニケーション不足になることがあります。",
    advice: "休日は意識して一緒の時間を作ると、より絆が深まります。",
    sleepingPosition: "足だけ触れる寝方",
    imageUrl: "/images/sleeping-positions/pos_10.png",
    summary: "体は離れていても、無意識の部分で深く繋がっている関係。",
    cautions: "日常生活の中でコミュニケーション不足になることがあります。",
    recommendedPositionName: "足だけ触れる寝方",
    relationshipTrend: "つながっていたい気持ちと、それぞれの空間も大切にしたいというバランス感覚。無意識の感情が出やすい足で触れ合う、本音の愛情表現ができる長く付き合ったカップルです。",
    reasons: ["意識せずに足が触れ合うのは、根底に強い愛情と安心感がある証拠であるため", "パーソナルスペースを保ちつつも、つながりを必要としているため"],
  },
  backToBackParallel: {
    id: "backToBackParallel",
    title: "共存独立型",
    description: "並んで歩くように、お互いの個を強く尊重している関係。",
    tendencies: ["干渉を好まない", "お互いの仕事や趣味を尊重", "精神的に非常に自立している"],
    caution: "急にこの関係になった場合は、心に壁ができている可能性があります。",
    advice: "意識的に共有できる話題（映画や食事など）を見つけると良いでしょう。",
    sleepingPosition: "仰向け並び寝",
    imageUrl: "/images/sleeping-positions/pos_11.png",
    summary: "並んで歩くように、お互いの個を強く尊重している関係。",
    cautions: "急にこの関係になった場合は、心に壁ができている可能性があります。",
    recommendedPositionName: "仰向け並び寝",
    relationshipTrend: "お互いの個を強く尊重している自立した心理。「一緒にいるけれど干渉しない」という信頼関係の表れです。",
    reasons: ["個人の空間や睡眠の質を最大限に尊重し合えているため", "精神的な自立があり、物理的な接触がなくても不安を感じないため"],
  },
  faceDown: {
    id: "faceDown",
    title: "シェルター型",
    description: "無意識に自分の心を守りたい、あるいはストレスを感じている状態。",
    tendencies: ["外部からのプレッシャーがある", "自分の世界に閉じこもりがち", "無意識に自己防衛している"],
    caution: "相手にも自分にも、心の余裕がなくなっている可能性があります。",
    advice: "原因を聞き出そうとせず、ただ美味しいものを食べるなどリラックスできる時間を共有しましょう。",
    sleepingPosition: "うつ伏せ寝",
    imageUrl: "/images/sleeping-positions/pos_12.png",
    summary: "無意識に自分の心を守りたい、あるいはストレスを感じている状態。",
    cautions: "相手にも自分にも、心の余裕がなくなっている可能性があります。",
    recommendedPositionName: "うつ伏せ寝",
    relationshipTrend: "自分の世界を守りたいという防衛本能の表れ。プレッシャーを感じている可能性があり、さりげない思いやりや声かけが求められる状態です。",
    reasons: ["心の不安やストレスから自分を守り、安心感を得ようとする防衛本能が働いているため", "現在の生活に何らかのプレッシャーを感じているサインであるため"],
  },
  headCloseTogether: {
    id: "headCloseTogether",
    title: "精神的シンクロ型",
    description: "体の距離は保ちつつ、思考や価値観の繋がりを重視する関係。",
    tendencies: ["価値観が似ている", "会話のリズムが合う", "思いやりが深い"],
    caution: "頭で考えすぎて、感情的なぶつかり合いを避けすぎる傾向があります。",
    advice: "たまには論理的な会話だけでなく、感情をストレートに表現してみましょう。",
    sleepingPosition: "枕元に寄り添う寝方",
    imageUrl: "/images/sleeping-positions/pos_13.png",
    summary: "体の距離は保ちつつ、思考や価値観の繋がりを重視する関係。",
    cautions: "頭で考えすぎて、感情的なぶつかり合いを避けすぎる傾向があります。",
    recommendedPositionName: "枕元に寄り添う寝方",
    relationshipTrend: "「あなたの存在を感じたいけれど、窮屈にはしたくない」という思いやりのある愛情表現。非常にバランス感覚の良いカップルです。",
    reasons: ["物理的な束縛を避けつつ、精神的な一番近い部分（頭）を近づけているため", "相手の睡眠を妨げない配慮と、愛情を伝えるバランスが絶妙であるため"],
  },
  armPillow: {
    id: "armPillow",
    title: "ロマンチック保護型",
    description: "守りたい・守られたいという欲求が強く満たされている関係。",
    tendencies: ["恋愛の熱量が高い", "独占欲や保護欲がある", "絶対的な安心感がある"],
    caution: "関係が長くなると物理的な負担（腕のしびれ等）で自然と減少し、寂しさを感じる原因に。",
    advice: "寝相が変わっていくのは自然なこと。別の形のスキンシップを見つけましょう。",
    sleepingPosition: "腕枕寝",
    imageUrl: "/images/sleeping-positions/pos_14.png",
    summary: "守りたい・守られたいという欲求が強く満たされている関係。",
    cautions: "関係が長くなると物理的な負担（腕のしびれ等）で自然と減少し、寂しさを感じる原因に。",
    recommendedPositionName: "腕枕寝",
    relationshipTrend: "差し出す側は強い保護欲と独占欲、委ねる側は絶対的な信頼と安心感を持つロマンチックな関係性です。",
    reasons: ["付き合いたてなど、愛情と保護欲が最高潮に達している時期によく見られるため", "互いの役割（守る・委ねる）が明確で、強い安心感を生んでいるため"],
  },
  diagonalCrossing: {
    id: "diagonalCrossing",
    title: "フリースタイル型",
    description: "型にはまらず、ゆるやかな繋がりと圧倒的な自由を楽しむ関係。",
    tendencies: ["束縛が嫌い", "風通しが良い", "マイペース"],
    caution: "自由すぎて、カップルというより同居人のようになってしまうことも。",
    advice: "記念日など、時々は「恋人らしい」特別なイベントを楽しむとメリハリが出ます。",
    sleepingPosition: "対角線寝",
    imageUrl: "/images/sleeping-positions/pos_15.png",
    summary: "型にはまらず、ゆるやかな繋がりと圧倒的な自由を楽しむ関係。",
    cautions: "自由すぎて、カップルというより同居人のようになってしまうことも。",
    recommendedPositionName: "対角線寝",
    relationshipTrend: "自分の快適さを優先しながらも、どこかでつながりを求めている自由な精神。お互いのスタイルを尊重できる風通しの良い関係です。",
    reasons: ["それぞれが最もリラックスできる独自の体勢を確保しているため", "ルーズな交差が、自由でありながらも切れない絆を示しているため"],
  },
};
