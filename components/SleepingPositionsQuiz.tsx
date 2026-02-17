"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clipboard, ClipboardCheck, RefreshCcw } from "lucide-react";

export interface QuizPosition {
  name: string;
  dreamTendency: string;
}

type ResultTypeId =
  | "stable"
  | "independent"
  | "passionate"
  | "close"
  | "recovery"
  | "protective";

type ScoreMap = Record<ResultTypeId, number>;

interface Option {
  value: string;
  label: string;
  weights: Partial<ScoreMap>;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: Option[];
}

interface ResultType {
  id: ResultTypeId;
  title: string;
  summary: string;
  cautions: string;
  advice: string;
  recommendedPositionName: string;
  reasons: string[];
  relationshipTrend: string;
}

const RESULT_PRIORITY: ResultTypeId[] = [
  "stable",
  "protective",
  "independent",
  "passionate",
  "close",
  "recovery",
];

const RESULTS: Record<ResultTypeId, ResultType> = {
  stable: {
    id: "stable",
    title: "安定共鳴タイプ",
    summary: "穏やかな安心感を育てやすく、無理なく寄り添えるバランス型です。",
    cautions: "慣れから会話が単調になると、気持ちの共有が減る場合があります。",
    advice: "寝る前のひとこと感謝を続けると、安心感がさらに深まります。",
    recommendedPositionName: "背中合わせ（触れ合って）",
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
    reasons: [
      "支える側と委ねる側の安心感が同時に得られやすい姿勢のため。",
      "ケアの気持ちを行動で示しやすく、信頼の確認につながるため。",
      "疲れている時でも心理的な落ち着きを作りやすいため。",
    ],
    relationshipTrend: "ケアし合う関係が強みなので、互いの負担バランスを確認するとより長続きしやすくなります。",
  },
};

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "Q1. ふたりの距離感は？",
    options: [
      { value: "a", label: "ずっとくっつきたい", weights: { close: 2, passionate: 1 } },
      { value: "b", label: "触れていたい", weights: { protective: 2, stable: 1 } },
      { value: "c", label: "手だけでOK", weights: { independent: 2, stable: 1 } },
      { value: "d", label: "それぞれの空間が大事", weights: { recovery: 2, independent: 1 } },
    ],
  },
  {
    id: "q2",
    question: "Q2. 最近の関係の温度感は？",
    options: [
      { value: "a", label: "かなり熱い", weights: { passionate: 2, close: 1 } },
      { value: "b", label: "安定して心地いい", weights: { stable: 2, protective: 1 } },
      { value: "c", label: "ちょい停滞", weights: { independent: 1, recovery: 2 } },
      { value: "d", label: "すれ違い気味", weights: { recovery: 2, independent: 1 } },
    ],
  },
  {
    id: "q3",
    question: "Q3. 不安を感じる時の反応は？",
    options: [
      { value: "a", label: "すぐ確認したい", weights: { close: 2, passionate: 1 } },
      { value: "b", label: "そばにいたい", weights: { protective: 2, stable: 1 } },
      { value: "c", label: "ひとりで整理する", weights: { independent: 2, recovery: 1 } },
      { value: "d", label: "距離を取る", weights: { recovery: 2, independent: 1 } },
    ],
  },
  {
    id: "q4",
    question: "Q4. スキンシップの好みは？",
    options: [
      { value: "a", label: "抱きしめたい / 抱かれたい", weights: { passionate: 2, close: 1 } },
      { value: "b", label: "寄りかかる・支える", weights: { protective: 2, stable: 1 } },
      { value: "c", label: "軽い接触で十分", weights: { stable: 2, independent: 1 } },
      { value: "d", label: "ほぼ不要", weights: { recovery: 2, independent: 1 } },
    ],
  },
  {
    id: "q5",
    question: "Q5. 眠る前の会話は？",
    options: [
      { value: "a", label: "毎日いっぱい話す", weights: { passionate: 2, close: 1 } },
      { value: "b", label: "ちょこっとで満足", weights: { stable: 2, protective: 1 } },
      { value: "c", label: "気分による", weights: { independent: 2, stable: 1 } },
      { value: "d", label: "あまり話さない", weights: { recovery: 2, independent: 1 } },
    ],
  },
];

const INITIAL_SCORE: ScoreMap = {
  stable: 0,
  independent: 0,
  passionate: 0,
  close: 0,
  recovery: 0,
  protective: 0,
};

function calculateScores(answers: string[]): ScoreMap {
  return answers.reduce<ScoreMap>((acc, answer, index) => {
    const option = QUIZ_QUESTIONS[index].options.find((item) => item.value === answer);
    if (!option) return acc;

    Object.entries(option.weights).forEach(([key, value]) => {
      const typedKey = key as ResultTypeId;
      acc[typedKey] += value ?? 0;
    });

    return acc;
  }, { ...INITIAL_SCORE });
}

function getBestType(scores: ScoreMap): ResultTypeId {
  const maxScore = Math.max(...Object.values(scores));
  const tied = RESULT_PRIORITY.filter((id) => scores[id] === maxScore);
  return tied[0];
}

function buildCopyText(result: ResultType, dreamTendency: string) {
  return [
    `【カップル寝相診断】${result.title}`,
    `おすすめ寝相: ${result.recommendedPositionName}`,
    `関係性の傾向: ${result.relationshipTrend}`,
    `注意点: ${result.cautions}`,
    `アドバイス: ${result.advice}`,
    `見やすい夢の傾向: ${dreamTendency}`,
  ].join("\n");
}

interface SleepingPositionsQuizProps {
  positions: QuizPosition[];
  getPositionId: (name: string) => string;
}

export default function SleepingPositionsQuiz({ positions, getPositionId }: SleepingPositionsQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(QUIZ_QUESTIONS.length).fill(""));
  const [isCompleted, setIsCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const allAnswered = answers.every(Boolean);

  const result = useMemo(() => {
    if (!isCompleted || !allAnswered) return null;
    const bestType = getBestType(calculateScores(answers));
    return RESULTS[bestType];
  }, [answers, allAnswered, isCompleted]);

  const recommendedPosition = useMemo(
    () => positions.find((position) => position.name === result?.recommendedPositionName),
    [positions, result],
  );

  const selectOption = (value: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentStep] = value;
      return next;
    });
  };

  const goNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setIsCompleted(true);
  };

  const handleReset = () => {
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(""));
    setCurrentStep(0);
    setIsCompleted(false);
    setCopied(false);
  };

  const scrollToRecommended = () => {
    if (!result) return;
    const target = document.getElementById(getPositionId(result.recommendedPositionName));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCopy = async () => {
    if (!result || !recommendedPosition) return;

    try {
      await navigator.clipboard.writeText(buildCopyText(result, recommendedPosition.dreamTendency));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
      <div className="space-y-3">
        <p className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-pink-500/15 text-pink-200 border border-pink-500/30">
          寝相診断（5問）
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">まずは相性タイプをチェック</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          5つの質問に答えると、今のふたりに合いやすい寝方と、関係性・夢の傾向を確認できます。
          診断はローカルで完結し、入力内容は保存されません。
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
          <span>進捗</span>
          <span className="font-semibold text-white">{currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-pink-500 to-purple-500 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">{currentQuestion.question}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentQuestion.options.map((option) => {
            const selected = answers[currentStep] === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => selectOption(option.value)}
                className={`text-left rounded-2xl border p-4 transition-all ${
                  selected
                    ? "border-pink-400/70 bg-pink-500/20 text-pink-100"
                    : "border-white/10 bg-white/5 text-gray-200 hover:bg-white/10"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded-xl border border-white/20 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          戻る
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={currentStep === QUIZ_QUESTIONS.length - 1 || !answers[currentStep]}
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white disabled:opacity-40 disabled:cursor-not-allowed"
        >
          次へ
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="px-4 py-2 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          結果を見る
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center px-4 py-2 rounded-xl border border-white/20 text-gray-200"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          リセットしてやり直す
        </button>
      </div>

      {result && recommendedPosition && (
        <div className="rounded-3xl border border-purple-400/30 bg-linear-to-br from-purple-900/40 via-indigo-900/30 to-pink-900/30 p-6 md:p-8 space-y-5">
          <div className="flex items-center gap-2 text-pink-200">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-semibold">診断結果</span>
          </div>
          <h3 className="text-2xl font-bold text-white">{result.title}</h3>
          <p className="text-gray-200 leading-relaxed">{result.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-purple-200 mb-1">おすすめ寝相</p>
              <p className="text-lg font-semibold text-white">{result.recommendedPositionName}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-purple-200 mb-1">見やすい夢の傾向</p>
              <p className="text-sm text-gray-200 leading-relaxed">{recommendedPosition.dreamTendency}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-200 leading-relaxed">
            <p><span className="text-white font-semibold">関係性の傾向：</span>{result.relationshipTrend}</p>
            <p><span className="text-white font-semibold">注意点：</span>{result.cautions}</p>
            <p><span className="text-white font-semibold">一言アドバイス：</span>{result.advice}</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">マッチ理由</p>
            <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside">
              {result.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={scrollToRecommended}
              className="px-4 py-2 rounded-xl bg-pink-500/80 hover:bg-pink-500 text-white"
            >
              おすすめ寝相へ移動
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center px-4 py-2 rounded-xl border border-white/20 text-gray-100"
            >
              {copied ? <ClipboardCheck className="w-4 h-4 mr-2" /> : <Clipboard className="w-4 h-4 mr-2" />}
              結果をコピー
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
