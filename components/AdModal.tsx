"use client";

import { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import AdsenseAd from "./AdsenseAd";

type Props = {
  slot: string;
  children: React.ReactNode;
};

export default function AdModal({ slot, children }: Props) {
  const [isRevealed, setIsRevealed] = useState(false);

  if (isRevealed) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-purple-500/20 border border-purple-500/30 mb-2">
            <Sparkles className="w-8 h-8 text-purple-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            診断が完了しました！
          </h2>
          <p className="text-gray-400">
            あなたの深層心理の解析結果をお届けします
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <AdsenseAd slot={slot} />
        </div>

        <button
          onClick={() => setIsRevealed(true)}
          className="group inline-flex flex-col items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-purple-900/30 hover:scale-105 hover:shadow-purple-900/50 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            結果を見る
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </div>
  );
}
