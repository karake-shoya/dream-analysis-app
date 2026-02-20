"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Share2, CheckCircle2, RefreshCcw, ArrowRight, Sparkles } from "lucide-react";
import { toPositionId } from "@/lib/utils";
import { RESULTS, ResultTypeId, ScoreMap, QuizQuestion, Option, ResultType } from "@/lib/data/sleepingPositions";
import DreamAnalysisCTA from "./DreamAnalysisCTA";
import AdModal from "./AdModal";
import { siteConfig } from "@/lib/config";

export interface QuizPosition {
  name: string;
  imageUrl: string;
  dreamTendency: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "Q1. 眠っているときの、理想的な距離感は？",
    options: [
      { value: "a", label: "ずっとくっついていたい", weights: { affection: 2, passion: 1 } },
      { value: "b", label: "どこか一部が触れていたい", weights: { stable: 2, support: 1 } },
      { value: "c", label: "指先や手足だけでOK", weights: { gentleBond: 2 } },
      { value: "d", label: "それぞれの空間を確保したい", weights: { independent: 2, selfTime: 1 } },
    ],
  },
  {
    id: "q2",
    question: "Q2. 普段の生活でのふたりの雰囲気（温度感）は？",
    options: [
      { value: "a", label: "お互いへの想いが深く、とても親密", weights: { passion: 2, affection: 1 } },
      { value: "b", label: "穏やかで安定している", weights: { stable: 2, gentleBond: 1 } },
      { value: "c", label: "少し距離やマンネリを感じる", weights: { independent: 1, selfTime: 1 } },
      { value: "d", label: "今は自分のペースや時間を優先したい", weights: { independent: 2 } },
    ],
  },
  {
    id: "q3",
    question: "Q3. 心理的な不安があるとき、お互いにどう接したい？",
    options: [
      { value: "a", label: "すぐに話し合って解決したい", weights: { affection: 2 } },
      { value: "b", label: "言葉よりも、ただそばにいてほしい", weights: { support: 2, stable: 1 } },
      { value: "c", label: "まずは自分一人で整理したい", weights: { independent: 2 } },
      { value: "d", label: "あまり踏み込まずにいてほしい", weights: { selfTime: 2 } },
    ],
  },
  {
    id: "q4",
    question: "Q4. 眠るときの、スキンシップの好みは？",
    options: [
      { value: "a", label: "しっかり抱きしめたい / 抱かれたい", weights: { affection: 2 } },
      { value: "b", label: "寄りかかったり、支えられたい", weights: { support: 2 } },
      { value: "c", label: "安心できる程度の軽い接触で十分", weights: { gentleBond: 2 } },
      { value: "d", label: "眠るときは基本的に不要", weights: { selfTime: 2 } },
    ],
  },
  {
    id: "q5",
    question: "Q5. 寝室に入ってから眠りにつくまでのコミュニケーションは？",
    options: [
      { value: "a", label: "今日あったことを毎日たくさん話す", weights: { communication: 2 } },
      { value: "b", label: "「おやすみ」など、短い挨拶で満足", weights: { stable: 1 } },
      { value: "c", label: "その時の気分や疲れ具合による", weights: { gentleBond: 1 } },
      { value: "d", label: "静かに自分のペースで過ごしたい", weights: { independent: 1 } },
    ],
  },
];

const INITIAL_SCORE: ScoreMap = {
  affection: 0,
  communication: 0,
  gentleBond: 0,
  passion: 0,
  stable: 0,
  independent: 0,
  support: 0,
  selfTime: 0,
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

function getBestType(scores: ScoreMap, answers: string[]): ResultTypeId {
  const maxScore = Math.max(...Object.values(scores));
  const tied = (Object.keys(scores) as ResultTypeId[]).filter((id) => scores[id] === maxScore);

  if (tied.length === 1) return tied[0];

  // 同点処理 1: Q4の回答で優先決定
  const q4Index = 3;
  const q4Answer = answers[q4Index];
  if (q4Answer) {
    const q4Option = QUIZ_QUESTIONS[q4Index].options.find(o => o.value === q4Answer);
    if (q4Option) {
      const q4Tied = tied.filter(id => (q4Option.weights[id] ?? 0) > 0);
      if (q4Tied.length === 1) return q4Tied[0];
      if (q4Tied.length > 1) {
        // さらに同点なら Q3 を見る
        const q3Index = 2;
        const q3Answer = answers[q3Index];
        const q3Option = QUIZ_QUESTIONS[q3Index].options.find(o => o.value === q3Answer);
        if (q3Option) {
          const q3Tied = q4Tied.filter(id => (q3Option.weights[id] ?? 0) > 0);
          if (q3Tied.length === 1) return q3Tied[0];
        }
      }
    }
  }

  // 同点処理 2: Q3の回答で優先決定 (Q4で絞れなかった場合)
  const q3Index = 2;
  const q3Answer = answers[q3Index];
  if (q3Answer) {
    const q3Option = QUIZ_QUESTIONS[q3Index].options.find(o => o.value === q3Answer);
    if (q3Option) {
      const q3Tied = tied.filter(id => (q3Option.weights[id] ?? 0) > 0);
      if (q3Tied.length === 1) return q3Tied[0];
    }
  }

  // 同点処理 3: それでも同点なら stable を優先
  if (tied.includes("stable")) return "stable";

  return tied[0];
}



interface SleepingPositionsQuizProps {
  positions: QuizPosition[];
}

export default function SleepingPositionsQuiz({ positions }: SleepingPositionsQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(QUIZ_QUESTIONS.length).fill(""));
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const actionAreaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const allAnswered = answers.every(Boolean);

  const result = useMemo(() => {
    if (!allAnswered) return null;
    const scores = calculateScores(answers);
    const bestType = getBestType(scores, answers);
    return RESULTS[bestType];
  }, [answers, allAnswered]);

  const recommendedPosition = useMemo(
    () => positions.find((position) => position.name === result?.sleepingPosition),
    [positions, result],
  );

  const selectOption = (value: string) => {
    if (isMoving || isGenerating) return;

    setAnswers((prev) => {
      const next = [...prev];
      next[currentStep] = value;
      return next;
    });

    // 最後の質問でなければ自動で次へ
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setIsMoving(true);
      timerRef.current = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsMoving(false);
        timerRef.current = null;
      }, 400);
    } else {
      // 最後の質問に回答したら、生成ボタンまでスクロール
      setTimeout(() => {
        if (actionAreaRef.current) {
          const yOffset = -200;
          const y = actionAreaRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const goNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setIsGenerating(true);
    // モーダル（広告）部分が見えるように少し下げる
    setTimeout(() => {
      if (actionAreaRef.current) {
        const yOffset = -100;
        const y = actionAreaRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleShowResult = () => {
    setIsCompleted(true);
  };

  // アンマウント時にタイマーをクリア
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // 結果が表示されたら自動スクロール
  useEffect(() => {
    if (isCompleted && resultRef.current) {
      const yOffset = -100;
      const element = resultRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [isCompleted]);

  const handleReset = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(""));
    setCurrentStep(0);
    setIsGenerating(false);
    setIsMoving(false);
    setIsCompleted(false);
  };

  const scrollToRecommended = () => {
    if (!result) return;
    const target = document.getElementById(toPositionId(result.sleepingPosition));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };



  const handleShare = async () => {
    if (!result) return;

    const shareText = `ふたりの寝相タイプは「${result.sleepingPosition}」タイプでした！\n【${result.title}】\nカップルの深層心理をチェック 🌙\n\n#カップル寝相診断 #YumeInsight`;
    const shareUrl = `${window.location.origin}${window.location.pathname}?res=${result.id}`;

    if (navigator.share) {
      // Web Share API が使用可能な場合（主にモバイル）
      try {
        await navigator.share({
          title: "カップル寝相診断の結果 | Yume Insight",
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // ユーザーがキャンセルした場合は何もしない
        if ((err as Error).name !== "AbortError") {
          console.error("共有に失敗しました:", err);
        }
      }
    } else {
      // API非対応の場合（PCなど）は、既存のX（Twitter）シェアへのフォールバック
      const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + "\n")}&url=${encodeURIComponent(shareUrl)}`;
      window.open(xUrl, "_blank", "noopener,noreferrer");
    }
  };

  const answeredCount = answers.filter(Boolean).length;

  return (
    <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-white">まずは相性タイプをチェック</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          5つの質問に答えると、今のふたりに合いやすい寝方と、関係性・夢の傾向を確認できます。<span className="hidden md:inline"><br /></span>
          診断はローカルで完結し、入力内容は保存されません。
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
          <span>進捗</span>
          <span className="font-semibold text-white">{answeredCount} / {QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-pink-500 to-purple-500 transition-all duration-300"
            style={{ width: `${(answeredCount / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {currentQuestion && (
        <div className={`space-y-4 transition-all duration-500 ${isGenerating ? 'opacity-40 grayscale pointer-events-none scale-95' : 'opacity-100'}`}>
          <h3 className="text-lg font-semibold text-white">{currentQuestion.question}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => {
              const selected = answers[currentStep] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  disabled={isGenerating || isMoving}
                  onClick={() => selectOption(option.value)}
                  className={`text-left rounded-2xl border p-4 transition-all ${
                    selected
                      ? "border-pink-400/70 bg-pink-500/20 text-pink-100 ring-2 ring-pink-500/30"
                      : "border-white/10 bg-white/5 text-gray-200 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    {selected && <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div ref={actionAreaRef} className="space-y-6">
        <div className={`flex flex-wrap gap-3 transition-opacity ${isGenerating ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <button
            type="button"
            onClick={goPrev}
            disabled={currentStep === 0}
            className="px-4 py-2 rounded-xl border border-white/20 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
          >
            戻る
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={currentStep === QUIZ_QUESTIONS.length - 1 || !answers[currentStep]}
            className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
          >
            次へ
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-6 py-2 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-pink-500/20 hover:scale-105 transition-all outline-none ring-offset-2 ring-pink-500/50 focus:ring-2"
          >
            結果を生成する
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center px-4 py-2 rounded-xl border border-white/20 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            やり直す
          </button>
        </div>

        {isGenerating && result && recommendedPosition && (
          <div className="mt-4">
            <AdModal
              slot={siteConfig.adsenseSlot}
              title="診断結果がまとまりました！"
              description="ふたりの関係性と、今のふたりを象徴する寝相タイプをお伝えします"
              onReveal={handleShowResult}
            >
              <div 
                ref={resultRef}
                className="rounded-3xl border border-purple-400/30 bg-linear-to-br from-purple-900/40 via-indigo-900/30 to-pink-900/30 p-6 md:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-1000"
              >
                <div className="flex items-center gap-2 text-pink-200">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-semibold">診断結果</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{result.title}</h3>
                <p className="text-gray-200 leading-relaxed">{result.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 flex flex-col items-center md:items-start md:flex-row gap-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10 p-0.5 bg-linear-to-b from-white/10 to-transparent shrink-0">
                      <img
                        src={result.imageUrl}
                        alt={result.sleepingPosition}
                        className="w-full h-full object-cover rounded-full opacity-90 transition-opacity"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-purple-200 mb-1">ふたりの寝相タイプ</p>
                      <p className="text-lg font-semibold text-white">{result.sleepingPosition}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-purple-200 mb-1">見やすい夢の傾向</p>
                    <p className="text-sm text-gray-200 leading-relaxed">{recommendedPosition.dreamTendency}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold mb-2">ふたりの傾向</p>
                    <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside">
                      {result.tendencies.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2 text-sm text-gray-200 leading-relaxed">
                    <p><span className="text-white font-semibold">注意点：</span>{result.caution}</p>
                    <p><span className="text-white font-semibold">一言アドバイス：</span>{result.advice}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={scrollToRecommended}
                    className="px-4 py-2 rounded-xl bg-pink-500/80 hover:bg-pink-500 text-white font-medium transition-colors"
                  >
                    詳細カードへ移動
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    診断結果をシェアする
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center px-4 py-2 rounded-xl border border-white/20 text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    もう一度診断する
                  </button>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <DreamAnalysisCTA 
                    description={
                      <>
                        カップルの寝相には、日々の感情や潜在的な想いが現れています。
                        <span className="hidden md:inline"><br /></span>
                        昨夜見た夢も、実はあなたへの大切なメッセージかもしれません。
                      </>
                    }
                  />
                </div>
              </div>
            </AdModal>
          </div>
        )}
      </div>
    </section>
  );
}
