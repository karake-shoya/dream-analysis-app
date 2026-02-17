export type ResultTypeId =
  | "stable"
  | "independent"
  | "passionate"
  | "close"
  | "recovery"
  | "protective";

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
  summary: string;
  cautions: string;
  advice: string;
  recommendedPositionName: string;
  reasons: string[];
  relationshipTrend: string;
  imageUrl: string;
}

export const RESULTS: Record<ResultTypeId, ResultType> = {
  stable: {
    id: "stable",
    title: "安定共鳴タイプ",
    summary: "穏やかな安心感を育てやすく、無理なく寄り添えるバランス型です。",
    cautions: "慣れから会話が単調になると、気持ちの共有が減る場合があります。",
    advice: "寝る前のひとこと感謝を続けると、安心感がさらに深まります。",
    recommendedPositionName: "背中合わせ（触れ合って）",
    imageUrl: "/images/sleeping-positions/back-touching.png",
    reasons: [
      "近すぎず遠すぎない距離を選びやすく、お互いのペースを尊重できるため。",
      "接触を残しつつ自分の体勢も確保でき、日常的な心地よさを保ちやすいため。",
      "安定した関係のリズムと相性がよく、無理のない継続につながりやすいため。",
    ],
    relationshipTrend: "安定と自立のバランスが取りやすく、長期的な信頼を育てやすい傾向です。",
  },
  independent: {
    id: "independent",
    title: "自立尊重タイプ",
    summary: "互いの空間を大切にしながら、必要な時に自然に支え合える関係です。",
    cautions: "忙しい時期は意思表示が少なくなり、誤解が生まれることがあります。",
    advice: "週に1回だけでも“最近どう？”の確認時間を作るのがおすすめです。",
    recommendedPositionName: "手だけ繋いで",
    imageUrl: "/images/sleeping-positions/hand-holding.png",
    reasons: [
      "体の距離は保ちつつ、手を繋いで心理的なつながりを確認しやすいため。",
      "自分の眠りやすさを守りながら、相手への安心サインも残せるため。",
      "適度な独立性と愛情表現の両立がしやすい姿勢のため。",
    ],
    relationshipTrend: "干渉しすぎないぶん、約束したコミュニケーションがあると関係がより安定します。",
  },
  passionate: {
    id: "passionate",
    title: "情熱共有タイプ",
    summary: "感情の熱量が高く、ふたりの時間を濃く楽しむエネルギーがあります。",
    cautions: "勢いが強い時ほど、生活リズムや睡眠の快適さを置き去りにしないのが大切です。",
    advice: "“今日は心地よさ重視でいこう”と一言合わせると、熱量を良い方向に使えます。",
    recommendedPositionName: "向かい合って寝る",
    imageUrl: "/images/sleeping-positions/facing.png",
    reasons: [
      "向き合う姿勢は表情や反応を感じやすく、親密さを高めやすいため。",
      "会話や触れ合いを重視するふたりのテンポと自然に合いやすいため。",
      "互いの存在を強く実感でき、恋愛初期の高揚感とも相性が良いため。",
    ],
    relationshipTrend: "気持ちを言葉にする力が高く、関係を前向きに動かしやすい傾向です。",
  },
  close: {
    id: "close",
    title: "密着安心タイプ",
    summary: "触れ合いが安心材料になりやすく、ぬくもりでつながりを実感するタイプです。",
    cautions: "密着が続くと、体勢の負担や依存感に気づきにくいことがあります。",
    advice: "“今日は密着・明日は少しゆるめ”など、日ごとの調整を試してみましょう。",
    recommendedPositionName: "絡み合い（タングル）",
    imageUrl: "/images/sleeping-positions/tangle.png",
    reasons: [
      "全身で触れ合うことで安心感を得やすく、気持ちを落ち着けやすいため。",
      "不安時にも“そばにいる感覚”を得やすく、情緒的な満足につながるため。",
      "短期的な親密さを高めたい時に選びやすい姿勢のため。",
    ],
    relationshipTrend: "相手の存在が心の安定に直結しやすいので、安心の言語化がカギになります。",
  },
  recovery: {
    id: "recovery",
    title: "距離回復タイプ",
    summary: "まずは休息を優先し、コンディションを整えてから関係を整える実務派タイプです。",
    cautions: "距離を取り続けると“気持ちが離れた”と受け取られる場合があります。",
    advice: "距離を取る日は“今日は回復モード”と共有しておくと安心です。",
    recommendedPositionName: "背中合わせ（離れて）",
    imageUrl: "/images/sleeping-positions/back-far.png",
    reasons: [
      "睡眠の質を優先しやすく、心身を落ち着ける時間を確保しやすいため。",
      "それぞれの空間を保つことで、翌日のコミュニケーション余力を作れるため。",
      "一時的なストレス期にも無理なく続けられる姿勢のため。",
    ],
    relationshipTrend: "休息を優先できる強みがある一方、安心のサインを意識するとすれ違いを減らせます。",
  },
  protective: {
    id: "protective",
    title: "保護と甘えタイプ",
    summary: "支えたい気持ちと委ねたい気持ちが噛み合い、役割分担が自然に生まれやすい関係です。",
    cautions: "役割が固定化しすぎると、片方が我慢しやすくなることがあります。",
    advice: "“守る側・甘える側”を時々入れ替えると、心地よい対等感が保てます。",
    recommendedPositionName: "仰向け＆頭を胸に",
    imageUrl: "/images/sleeping-positions/chest.png",
    reasons: [
      "支える側と委ねる側の安心感が同時に得られやすい姿勢のため。",
      "ケアの気持ちを行動で示しやすく、信頼の確認につながるため。",
      "疲れている時でも心理的な落ち着きを作りやすいため。",
    ],
    relationshipTrend: "ケアし合う関係が強みなので、互いの負担バランスを確認するとより長続きしやすくなります。",
  },
};
