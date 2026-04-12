'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import DreamMemo from '@/components/DreamMemo';
import type { DreamRecord } from '@/lib/types';

type Props = {
  dream: DreamRecord;
};

export default function DashboardDreamCard({ dream }: Props) {
  const [memoOpen, setMemoOpen] = useState(false);
  const result = dream.diagnosis_result;
  const resultUrl = `/result/${dream.id}${dream.share_token ? `?token=${encodeURIComponent(dream.share_token)}` : ''}`;
  const hasContent = !!(dream.notes || (dream.user_tags?.length ?? 0) > 0);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg shadow-black/20 overflow-hidden transition-all hover:border-purple-500/20">
      {/* カード本体（結果ページへのリンク） */}
      <Link href={resultUrl} className="block p-5 hover:bg-white/5 transition-colors group">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
          <div className="flex items-center text-sm text-purple-300">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(dream.created_at)}
          </div>
          <div className="flex flex-wrap gap-2">
            {result.keywords?.slice(0, 3).map((k: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-200 border border-purple-500/30">
                #{k}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-indigo-200 mb-2 group-hover:text-purple-300 transition-colors">
          {result.title || result.interpretations?.[0]?.summary || result.summary || "夢占い結果"}
        </h3>

        <p className="text-gray-400 text-sm italic line-clamp-2">&quot;{dream.content}&quot;</p>

        {/* マイタグ */}
        {dream.user_tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {dream.user_tags.map((tag: string, i: number) => (
              <span key={i} className="text-xs px-2 py-0.5 bg-emerald-500/15 rounded-full text-emerald-300 border border-emerald-500/20">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* メモプレビュー */}
        {dream.notes && !memoOpen && (
          <p className="text-gray-500 text-xs mt-2 line-clamp-1 italic">
            メモ: {dream.notes}
          </p>
        )}

        <div className="mt-3 text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
          詳細を見る →
        </div>
      </Link>

      {/* メモ・タグ 展開トグル */}
      <div className="border-t border-white/5">
        <button
          onClick={() => setMemoOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-5 py-2.5 text-xs text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            メモ・マイタグ
            {hasContent && !memoOpen && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            )}
          </span>
          {memoOpen
            ? <ChevronUp className="w-3.5 h-3.5" />
            : <ChevronDown className="w-3.5 h-3.5" />
          }
        </button>

        {memoOpen && (
          <div className="px-5 pb-5 pt-1">
            <DreamMemo
              dreamId={dream.id}
              initialNotes={dream.notes ?? ''}
              initialTags={dream.user_tags ?? []}
            />
          </div>
        )}
      </div>
    </div>
  );
}
