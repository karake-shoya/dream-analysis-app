import { Sparkles } from 'lucide-react';
import { UPDATES } from '@/lib/data/updates';
import GradientBackground from '@/components/GradientBackground';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '更新情報 | Yume Insight',
  description: 'Yume Insight の機能追加・改善履歴をまとめた更新情報ページです。',
};

export default function UpdatesPage() {
  return (
    <main className="min-h-screen text-white">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-2xl">
        <div className="mb-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest">
            <Sparkles className="w-3 h-3" />
            UPDATES
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">更新情報</h1>
          <p className="text-gray-400 text-sm">機能追加・改善の履歴です</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10">
          <ol className="relative border-l border-white/10 ml-1 space-y-7">
            {UPDATES.map((item, index) => (
              <li key={index} className="pl-6 relative">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500/60 border border-purple-400/40" />
                <time className="text-xs text-gray-500 font-mono">{item.date}</time>
                <p className="mt-1 text-base text-gray-200 leading-relaxed">{item.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
