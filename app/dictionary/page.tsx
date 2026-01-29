import { BookOpen, Search, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import { DREAM_DICTIONARY } from '@/lib/data/dreamDictionary';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '夢占い辞典',
  description: '夢占いの意味を50音・カテゴリ別に検索。追いかけられる夢、落ちる夢、動物の夢など、よく見る夢のシンボルを詳しく解説。AI夢診断で個別分析も可能。',
};

// 人気のキーワード（将来的にはアクセス数などで動的に）
const POPULAR_KEYWORDS = [
  { label: '追いかけられる', href: '/dictionary/actions/chased' },
  { label: '落ちる', href: '/dictionary/actions/falling' },
  { label: '犬', href: '/dictionary/animals/dog' },
  { label: '空を飛ぶ', href: '/dictionary/nature/flying' },
  { label: '猫', href: '/dictionary/animals/cat' },
  { label: '海', href: '/dictionary/nature/sea' },
  { label: '蛇', href: '/dictionary/animals/snake' },
  { label: '家', href: '/dictionary/places/house' },
  { label: '学校', href: '/dictionary/places/school' },
  { label: '走る', href: '/dictionary/actions/running' },
];

// 最近追加された記事を取得
function getRecentArticles(limit: number = 6) {
  const allItems: { keyword: string; slug: string; categorySlug: string; createdAt?: string }[] = [];
  
  Object.values(DREAM_DICTIONARY).forEach((category) => {
    category.items.forEach((item) => {
      allItems.push({
        keyword: item.keyword,
        slug: item.slug,
        categorySlug: category.slug,
        createdAt: item.createdAt,
      });
    });
  });

  return allItems
    .filter((item) => item.createdAt)
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, limit);
}

export default function Dictionary() {
  const recentArticles = getRecentArticles();
  const categories = Object.values(DREAM_DICTIONARY);
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(88, 28, 135, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 90% 90%, rgba(30, 58, 138, 0.1) 0%, transparent 40%),
            #0f172a
          `
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 text-purple-300">
            <BookOpen className="w-6 h-6 mr-2" />
            <span className="font-semibold">Dream Dictionary</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">夢占い辞典</h1>
          <p className="text-gray-400">
            キーワードから夢の意味を探してみましょう。<br />
            よく見られる夢のシンボルをカテゴリー別にまとめています。
          </p>
        </div>

        {/* Search Mock - To be implemented */}
        <div className="max-w-xl mx-auto mb-16">
           <div className="relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
             <input 
               type="text" 
               placeholder="キーワードで検索 (例: 猫, 飛ぶ, 泣く...)" 
               className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
             />
           </div>
        </div>

        {/* よく検索される夢TOP10 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-purple-400" />
            よく検索される夢TOP10
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {POPULAR_KEYWORDS.map((item, index) => (
              <Link 
                href={item.href} 
                key={item.label}
                className="group relative text-center p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white transition-all cursor-pointer border border-white/5 hover:border-purple-500/30"
              >
                <span className="absolute top-2 left-3 text-xs font-bold text-purple-400/60">
                  {index + 1}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* カテゴリ別一覧 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
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
                  {category.items.length}件の夢占い
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* 最近追加された夢占い */}
        {recentArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-purple-400" />
              最近追加された夢占い
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recentArticles.map((item) => (
                <Link 
                  href={`/dictionary/${item.categorySlug}/${item.slug}`} 
                  key={`${item.categorySlug}-${item.slug}`}
                  className="group p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <p className="font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.keyword}
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

        {/* AI診断への導線 */}
        <div className="p-8 rounded-2xl bg-linear-to-r from-purple-900/50 to-indigo-900/50 border border-purple-500/30 text-center">
          <p className="text-lg text-gray-300 mb-6">
            辞典で見つからない夢や、もっと詳しく知りたい場合は<br />
            <span className="text-white font-bold">AI夢診断で個別に分析できます。</span>
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-purple-900/20 hover:scale-105 transition-transform"
          >
            AIで夢を診断する
          </Link>
        </div>
      </div>
    </div>
  );
}
