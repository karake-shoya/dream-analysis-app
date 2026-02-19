import { Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import DictionarySearch from '@/components/DictionarySearch';
import { DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';
import { getAllIndexItems, getIndexByCategory } from '@/lib/data/dreamDictionaryIndex';
import GradientBackground from '@/components/GradientBackground';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/lib/config';

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

// 人気・代表的な記事をピックアップ
const POPULAR_ARTICLES = [
  { category: 'animals', slug: 'snake', title: '蛇の夢' },
  { category: 'animals', slug: 'cat', title: '猫の夢' },
  { category: 'actions', slug: 'chased', title: '追いかけられる夢' },
  { category: 'actions', slug: 'falling', title: '落ちる夢' },
  { category: 'actions', slug: 'flying', title: '空を飛ぶ夢' },
  { category: 'emotions', slug: 'crying', title: '泣く夢' },
  { category: 'person', slug: 'deceased', title: '亡くなった人の夢' },
  { category: 'nature', slug: 'sea', title: '海の夢' },
];

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

  // 人気記事の中から実際に存在するもののみフィルタ
  const popularArticles = POPULAR_ARTICLES.filter((pa) =>
    allItems.some((item) => item.category === pa.category && item.slug === pa.slug)
  );

  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <Breadcrumb
            items={[
              { label: 'ホーム', href: '/' },
              { label: '夢占い辞典' },
            ]}
          />

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

            {/* 人気の夢占い記事 */}
            {popularArticles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
                  人気の夢占い
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {popularArticles.map((article) => (
                    <Link
                      href={`/dictionary/${article.category}/${article.slug}`}
                      key={`${article.category}-${article.slug}`}
                      className="group p-4 rounded-xl bg-linear-to-br from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 border border-purple-500/20 hover:border-purple-500/40 transition-all text-center"
                    >
                      <p className="font-bold text-white group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

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

            {/* 全記事一覧への導線 */}
            <div className="text-center py-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-gray-400 mb-4">すべての夢占い記事を一覧で探したい方はこちら</p>
              <Link
                href="/sitemap"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-purple-600 text-white font-semibold rounded-full transition-all border border-white/10 hover:border-purple-500"
              >
                <BookOpen className="w-5 h-5" />
                全記事一覧を見る（{totalCount}件）
                <ArrowRight className="w-4 h-4" />
              </Link>
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

            {/* 夢占い辞典について（解説テキスト 1000-1500字） */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                夢占い辞典について
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Yume Insightの夢占い辞典は、夢に登場するシンボルやキーワードの意味を体系的にまとめた夢占いの専門辞典です。
                  心理学やユング心理学の象徴理論をベースに、日本の夢占い文化も取り入れながら、一つひとつの夢のシンボルを丁寧に解説しています。
                </p>
                <h3 className="text-lg font-bold text-white pt-2">辞典の使い方</h3>
                <p>
                  夢占い辞典では、気になるキーワードを上部の検索バーに入力して記事を探すか、7つのカテゴリから興味のあるテーマを選んで閲覧できます。
                  「動物・生き物」「自然・天候」「場所・建物」「行動・出来事」「感情」「人物・関係」「状況・イベント」の各カテゴリには、
                  よく見られる夢のシンボルが数十件ずつ収録されています。
                </p>
                <h3 className="text-lg font-bold text-white pt-2">各記事の構成</h3>
                <p>
                  各記事では、まず夢の結論（暗示のまとめ）を提示し、その後に詳しい心理的背景や状況別の解説を展開しています。
                  「猫が甘えてくる夢」「蛇に追いかけられる夢」のように、同じシンボルでも状況が異なれば意味が変わることがあるため、
                  できるだけ多くのパターンをカバーしています。記事末尾には「吉夢・凶夢の判断基準」「具体的なアクション」「よくある質問（FAQ）」など、
                  実生活に活かすためのアドバイスも掲載しています。
                </p>
                <h3 className="text-lg font-bold text-white pt-2">夢占いを活用するポイント</h3>
                <p>
                  夢占いは「未来を予言する」ものではなく、今のあなたの心の状態を映し出す鏡のようなものです。
                  夢の内容が気になるときは、まず夢の中で感じた感情を思い出すことが大切です。同じ「蛇の夢」でも、恐怖を感じたか、
                  美しいと感じたかで解釈が大きく異なります。
                </p>
                <p>
                  辞典の解説はあくまでも一般的な象徴の解釈です。あなた自身の体験や感覚を大切にしながら、夢が伝えようとしているメッセージに耳を傾けてみてください。
                  より個人的で精密な分析が必要な場合は、AI夢占い機能もご活用いただけます。夢の内容を文章で入力するだけで、AIがあなた専用の分析レポートを作成します。
                </p>
                <h3 className="text-lg font-bold text-white pt-2">継続的な更新について</h3>
                <p>
                  夢占い辞典は定期的に新しい記事を追加・更新しています。「こんな夢の意味も知りたい」というリクエストがあれば、
                  お問い合わせフォームからお気軽にご連絡ください。皆さまの夢に寄り添い、日常をより豊かにするヒントをお届けしてまいります。
                </p>
              </div>
            </div>

            <DreamAnalysisCTA />
          </div>
        </main>
      </div>
    </div>
  );
}
