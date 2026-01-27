import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import Link from 'next/link';

const DICTIONARY_CATEGORIES = [
  { name: '動物・生き物', slug: 'animals', emojis: '🦊' },
  { name: '自然・天候', slug: 'nature', emojis: '⛈️' },
  { name: '場所・建物', slug: 'places', emojis: '🏰' },
  { name: '人物・関係', slug: 'people', emojis: '👥' },
  { name: '行動・出来事', slug: 'actions', emojis: '🏃' },
  { name: '感情・感覚', slug: 'feelings', emojis: '💭' },
];

export default function Dictionary() {
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
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            トップページに戻る
          </Link>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DICTIONARY_CATEGORIES.map((category) => (
            <Link 
              href={`/dictionary/category/${category.slug}`} 
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
                {category.name}に関連する夢の意味一覧
              </p>
            </Link>
          ))}
        </div>

        {/* Example Content Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">
            人気の夢キーワード
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['追いかけられる', '落ちる', '空を飛ぶ', '歯が抜ける', '遅刻する', '迷子になる', 'お金', '元彼・元カノ'].map((keyword) => (
              <Link 
                href={`/dictionary/search?q=${keyword}`} 
                key={keyword}
                className="text-center p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
