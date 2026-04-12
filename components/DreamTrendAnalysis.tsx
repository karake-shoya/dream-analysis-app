'use client';

import { TrendingUp, Heart, BarChart2 } from 'lucide-react';

type Props = {
  topKeywords: { keyword: string; count: number }[];
  topEmotions: { emotion: string; count: number }[];
  monthlyCounts: { month: string; label: string; count: number }[];
};

function HorizontalBar({
  label,
  count,
  max,
  colorClass,
}: {
  label: string;
  count: number;
  max: number;
  colorClass: string;
}) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-300 w-16 shrink-0 truncate" title={label}>
        {label}
      </span>
      <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${colorClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-gray-400 w-5 text-right shrink-0">{count}</span>
    </div>
  );
}

export default function DreamTrendAnalysis({ topKeywords, topEmotions, monthlyCounts }: Props) {
  const maxKeyword = topKeywords[0]?.count ?? 1;
  const maxEmotion = topEmotions[0]?.count ?? 1;
  const maxMonthly = Math.max(...monthlyCounts.map((m) => m.count), 1);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* よく見るテーマ */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          よく見るテーマ
        </h3>
        {topKeywords.length === 0 ? (
          <p className="text-xs text-gray-500">データがありません</p>
        ) : (
          <div className="space-y-3">
            {topKeywords.map(({ keyword, count }) => (
              <HorizontalBar
                key={keyword}
                label={keyword}
                count={count}
                max={maxKeyword}
                colorClass="bg-purple-500/60"
              />
            ))}
          </div>
        )}
      </div>

      {/* 感情の傾向 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
          <Heart className="w-4 h-4 text-rose-400" />
          感情の傾向
        </h3>
        {topEmotions.length === 0 ? (
          <p className="text-xs text-gray-500">データがありません</p>
        ) : (
          <div className="space-y-3">
            {topEmotions.map(({ emotion, count }) => (
              <HorizontalBar
                key={emotion}
                label={emotion}
                count={count}
                max={maxEmotion}
                colorClass="bg-rose-500/60"
              />
            ))}
          </div>
        )}
      </div>

      {/* 月別記録数 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
          <BarChart2 className="w-4 h-4 text-indigo-400" />
          月別記録数
        </h3>
        <div className="flex items-end justify-between gap-1 h-28">
          {monthlyCounts.map(({ month, label, count }) => {
            const pct = maxMonthly > 0 ? (count / maxMonthly) * 100 : 0;
            return (
              <div key={month} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-[10px] text-gray-400">{count > 0 ? count : ''}</span>
                <div className="w-full flex items-end" style={{ height: '72px' }}>
                  <div
                    className="w-full rounded-t-sm bg-indigo-500/60 transition-all duration-700 min-h-[2px]"
                    style={{ height: `${Math.max(pct, count > 0 ? 4 : 0)}%` }}
                  />
                </div>
                <span className="text-[10px] text-gray-500">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
