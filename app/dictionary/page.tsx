import { Clock } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import DictionarySearch from '@/components/DictionarySearch';
import { DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';
import { getAllIndexItems, getIndexByCategory } from '@/lib/data/dreamDictionaryIndex';
import GradientBackground from '@/components/GradientBackground';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '夢占い辞典',
  description: '夢占いの意味を50音・カテゴリ別に検索。追いかけられる夢、落ちる夢、動物の夢など、よく見る夢のシンボルを詳しく解説。AI夢占いで個別分析も可能。',
  alternates: { canonical: '/dictionary' },
  openGraph: {
    title: '夢占い辞典 | Yume Insight',
    description: '夢占いの意味を50音・カテゴリ別に検索。追いかけられる夢、落ちる夢、動物の夢など、よく見る夢のシンボルを詳しく解説。AI夢占いで個別分析も可能。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Dictionary() {
  const allItems = getAllIndexItems();
  const totalCount = allItems.length;

  const recentArticles = allItems
    .filter((item) => item.createdAt)
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, 6);

  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-center space-y-8 pt-8 relative">
              {/* 背景アイコン */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-3xl" />
                  <img 
                    src="/icon.png" 
                    alt="" 
                    className="w-40 h-40 opacity-10"
                  />
                </div>
              </div>
              <div className="relative space-y-4">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 leading-[1.12]">
                  夢占い辞典
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  キーワードから夢の意味を探してみましょう。<span className="hidden md:inline"><br /></span>
                  よく見られる夢のシンボルをカテゴリー別にまとめています。
                </p>
              </div>
            </div>

            {/* キーワード検索 */}
            <DictionarySearch items={allItems} />

            {/* カテゴリ別一覧 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                カテゴリから探す
                <span className="ml-3 text-base font-normal text-purple-300">（全{totalCount}件）</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DICTIONARY_CATEGORIES.map((category) => {
                  const itemCount = getIndexByCategory(category.slug).length;
                  return (
                    <Link 
                      href={`/dictionary/${category.slug}`} 
                      key={category.slug}
                      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                        {category.emojis}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-gray-400">
                        {itemCount}件の夢占い
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 最近追加された夢占い */}
            {recentArticles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-purple-400" />
                  最近追加された夢占い
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {recentArticles.map((item) => (
                    <Link 
                      href={`/dictionary/${item.category}/${item.slug}`} 
                      key={`${item.category}-${item.slug}`}
                      className="group p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/5 hover:border-purple-500/30 transition-all"
                    >
                      <p className="font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </p>
                      {item.createdAt && (
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(item.createdAt).toLocaleDateString('ja-JP')}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <DreamAnalysisCTA />
          </div>
        </main>
      </div>
    </div>
  );
}
