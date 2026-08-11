import Link from 'next/link';
import { getColumnArticle } from '@/lib/data/columnArticles';

export type NextColumn = {
  /** 遷移先のパス。/column/<slug> の場合は registry に存在するか検証する */
  href: string;
  emoji: string;
  /** カードの主見出し（読者への問いかけ） */
  heading: string;
  /** 補足の1行 */
  sub: string;
  /** 上部の小見出し。既定は「関連コラム」 */
  eyebrow?: string;
  /** アクセント色。コラム以外への導線は pink を使う */
  accent?: 'purple' | 'pink';
};

/**
 * アクセント色ごとのクラスを literal で持つ。
 * Tailwind は文字列連結で組んだクラスを検出できないため、動的生成はしない。
 */
const ACCENT = {
  purple: {
    link: 'bg-purple-500/5 border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40',
    eyebrow: 'text-purple-300',
    arrow: 'text-purple-300',
  },
  pink: {
    link: 'bg-pink-500/5 border-pink-500/20 hover:bg-pink-500/10 hover:border-pink-500/40',
    eyebrow: 'text-pink-300',
    arrow: 'text-pink-300',
  },
} as const;

/** 記事末尾に置く「次に読むコンテンツ」カード */
export default function NextColumnCard({
  href,
  emoji,
  heading,
  sub,
  eyebrow = '関連コラム',
  accent = 'purple',
}: NextColumn) {
  const columnSlug = href.startsWith('/column/') ? href.slice('/column/'.length) : null;
  if (columnSlug && !getColumnArticle(columnSlug)) return null;

  const c = ACCENT[accent];

  return (
    <div className="px-0">
      <Link
        href={href}
        className={`group flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all ${c.link}`}
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{emoji}</span>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${c.eyebrow}`}>{eyebrow}</p>
            <p className="font-bold text-white text-sm md:text-base">{heading}</p>
            <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
          </div>
        </div>
        <svg className={`w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform ${c.arrow}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </Link>
    </div>
  );
}
