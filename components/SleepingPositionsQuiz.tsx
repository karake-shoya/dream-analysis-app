"use client";

import { useMemo, useState } from "react";
import { Share2, CheckCircle2, Clipboard, ClipboardCheck, RefreshCcw } from "lucide-react";
import { toPositionId } from "@/lib/utils";
import { RESULTS, ResultTypeId, ScoreMap, QuizQuestion, Option, ResultType } from "@/lib/data/sleepingPositions";


export interface QuizPosition {
  name: string;
  imageUrl: string;
  dreamTendency: string;
}



const RESULT_PRIORITY: ResultTypeId[] = [
  "stable",
  "protective",
  "independent",
  "passionate",
  "close",
  "recovery",
];



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
}


export default function SleepingPositionsQuiz({ positions }: SleepingPositionsQuizProps) {
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
    const target = document.getElementById(toPositionId(result.recommendedPositionName));
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

  const handleShareX = () => {
    if (!result) return;

    const text = `あなたたちにおすすめの寝相は「${result.recommendedPositionName}」！\n【${result.title}】\nカップルの深層心理をチェック 🌙\n\n#カップル寝相診断 #YumeInsight\n`;
    // URLに結果IDを付与（メタデータがこれを読み取る）
    const url = `${window.location.origin}${window.location.pathname}?res=${result.id}`;

    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
  };


  return (
    <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
      <div className="space-y-3">
        <p className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-pink-500/15 text-pink-200 border border-pink-500/30">
          寝相診断（5問）
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">まずは相性タイプをチェック</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          5つの質問に答えると、今のふたりに合いやすい寝方と、関係性・夢の傾向を確認できます。<br />
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
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 flex flex-col items-center md:items-start md:flex-row gap-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10 p-0.5 bg-linear-to-b from-white/10 to-transparent shrink-0">
                <img
                  src={recommendedPosition.imageUrl}
                  alt={result.recommendedPositionName}
                  className="w-full h-full object-cover rounded-full opacity-90 transition-opacity"
                />
              </div>
              <div>
                <p className="text-xs text-purple-200 mb-1">おすすめ寝相</p>
                <p className="text-lg font-semibold text-white">{result.recommendedPositionName}</p>
              </div>
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
            <button
              type="button"
              onClick={handleShareX}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Xでシェアする
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
