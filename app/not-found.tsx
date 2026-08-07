import Link from 'next/link';
import type { Metadata } from 'next';
import { Home, BookOpen, Newspaper, Compass } from 'lucide-react';
import GradientBackground from '@/components/GradientBackground';

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  description: 'お探しのページは見つかりませんでした。夢占い辞典やコラムから、お探しの夢の意味を探せます。',
  robots: { index: false, follow: true },
};

const LINKS = [
  {
    href: '/',
    icon: Home,
    title: 'AI夢占いを試す',
    description: '見た夢を入力すると、AIが深層心理を分析します。',
  },
  {
    href: '/dictionary',
    icon: BookOpen,
    title: '夢占い辞典',
    description: '動物・自然・場所・行動など、カテゴリ別に夢の意味を調べる。',
  },
  {
    href: '/column',
    icon: Newspaper,
    title: '夢分析コラム',
    description: '追いかけられる夢・歯が抜ける夢など、よく見る夢の解説記事。',
  },
  {
    href: '/sitemap',
    icon: Compass,
    title: '全記事一覧',
    description: '公開中のすべての記事をカテゴリ別に一覧で確認できます。',
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen text-white">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400 mb-4">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ページが見つかりませんでした
          </h1>
          <p className="text-gray-400 leading-relaxed">
            お探しのページは移動または削除された可能性があります。
            <br className="hidden sm:block" />
            以下から、お探しの夢の意味を探してみてください。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {LINKS.map(({ href, icon: Icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-purple-400 shrink-0" />
                <h2 className="font-bold text-white group-hover:text-purple-200 transition-colors">
                  {title}
                </h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
