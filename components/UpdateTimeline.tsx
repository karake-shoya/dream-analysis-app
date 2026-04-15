import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { UPDATES } from '@/lib/data/updates';

type Props = {
  limit?: number;
};

export default function UpdateTimeline({ limit = 5 }: Props) {
  const items = UPDATES.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl px-5 py-4 border border-white/10 mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <h2 className="text-xs font-bold text-purple-200 tracking-widest uppercase">最近の更新</h2>
        </div>
        <Link
          href="/updates"
          className="inline-flex items-center gap-0.5 text-xs text-purple-400 hover:text-purple-300 transition-colors group"
        >
          すべて見る
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <ol className="divide-y divide-white/5">
        {items.map((item, index) => (
          <li key={index} className="flex items-baseline gap-3 py-2">
            <time className="shrink-0 text-[11px] text-gray-500 font-mono">{item.date}</time>
            <p className="text-xs text-gray-300 leading-relaxed">{item.label}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
