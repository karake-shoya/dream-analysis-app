import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const COLUMN_LINKS = [
  { href: '/column/repeating-dreams', label: '同じ夢を何度も見る意味とは？' },
  { href: '/column/nightmare', label: '怖い夢・悪夢を見やすい人の特徴と対処法' },
  { href: '/column/dream-diary', label: '夢日記の始め方と効果的な続け方' },
];

export default function ColumnLinks() {
  return (
    <section className="mt-12 rounded-2xl border border-purple-500/20 bg-white/5 p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-purple-400" />
        関連コラム
      </h2>
      <ul className="space-y-1">
        {COLUMN_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center justify-between px-4 py-3 rounded-xl border border-transparent hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
            >
              <span className="text-gray-200 group-hover:text-purple-200 transition-colors">{label}</span>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
