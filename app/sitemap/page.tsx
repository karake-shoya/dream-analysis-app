import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { getAllIndexItems } from '@/lib/data/dreamDictionaryIndex';
import { DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';
import GradientBackground from '@/components/GradientBackground';
import Breadcrumb from '@/components/Breadcrumb';
import SitemapFilter from '@/components/SitemapFilter';

export const metadata: Metadata = {
  title: '全記事一覧（サイトマップ）',
  description: 'Yume Insightの夢占い辞典に収録されている全記事の一覧ページです。動物・自然・場所・行動・感情・人物・状況の7カテゴリに分類された約100件の夢占い記事をご覧いただけます。',
  openGraph: {
    title: '全記事一覧（サイトマップ）| Yume Insight',
    description: 'Yume Insightの夢占い辞典に収録されている全記事の一覧ページです。約100件の夢占い記事をカテゴリ別にご覧いただけます。',
    type: 'website',
  },
};

// カテゴリごとの短い説明文（120-200字）
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  animals: '動物の夢は、あなたの本能的な欲求や抑圧された感情を象徴します。犬や猫などの身近なペットから、蛇やライオンなどの野生動物まで、夢に現れた生き物の意味を解説しています。それぞれの動物が示す深層心理のメッセージを読み解いてみましょう。',
  nature: '自然や天候の夢は、あなたの心の状態やこれから訪れる変化の予兆を表します。海、山、雨、太陽といった自然のシンボルが何を意味するのか、スピリチュアルな解釈とともに解説します。感情のバイオリズムを知る手がかりになるかもしれません。',
  places: '場所や建物の夢は、あなたの置かれている環境や心の居場所を象徴しています。学校、職場、家など日常的な場所から不思議な空間まで、それぞれの場所が持つメッセージを紐解きます。夢の中でどう感じたかも重要なヒントです。',
  actions: '行動や出来事の夢は、現実世界でのあなたの意欲や課題への取り組み方を反映しています。走る、飛ぶ、逃げるなどの動作に隠された心理を解説。エネルギーの向かう先や現状打破のためのヒントが見つかるかもしれません。',
  emotions: '感情の夢は、普段抑えている気持ちがストレートに現れるものです。恐怖、悲しみ、喜び、怒りなど、夢の中で感じた感情が何を意味するのか、そして日常生活でどう心をケアすべきかを優しく解説しています。',
  person: '人物が登場する夢は、その人本人を表すこともあれば、あなた自身の一側面を投影していることもあります。好きな人、家族、知らない人など、登場人物別に夢が伝える対人関係のヒントや成長のメッセージを解説します。',
  situation: '状況やイベントの夢は、人生の転機やプレッシャー、変化への願望を象徴的に示しています。試験、遅刻、結婚式など、様々なシチュエーションの意味と、夢が示唆する未来への指針を解説。逆夢の可能性も含めてお伝えします。',
};

export default function SitemapPage() {
  const allItems = getAllIndexItems();

  // カテゴリ別にグループ化
  const groupedByCategory = DICTIONARY_CATEGORIES.map((cat) => ({
    category: cat,
    items: allItems.filter((item) => item.category === cat.slug),
  })).filter((group) => group.items.length > 0);

  const totalCount = allItems.length;

  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <Breadcrumb
            items={[
              { label: 'ホーム', href: '/' },
              { label: '全記事一覧' },
            ]}
          />

          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* ヘッダー */}
            <div className="text-center space-y-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                <span>全{totalCount}件の夢占い記事</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 leading-[1.12]">
                全記事一覧
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Yume Insightに収録されている全ての夢占い記事を
                <span className="hidden md:inline"><br /></span>
                カテゴリ別にご覧いただけます。
              </p>
            </div>

            {/* 辞典トップへのリンク */}
            <div className="text-center">
              <Link
                href="/dictionary"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors text-sm"
              >
                <span>カテゴリ別の詳しい解説は夢占い辞典へ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* フィルタUI */}
            <SitemapFilter categories={DICTIONARY_CATEGORIES.map((c) => ({ slug: c.slug, name: c.name, emojis: c.emojis }))} />

            {/* カテゴリ別記事一覧 */}
            <div className="space-y-12">
              {groupedByCategory.map(({ category, items }) => (
                <section
                  key={category.slug}
                  data-category-section={category.slug}
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-white mb-3 border-l-4 border-purple-500 pl-4 flex items-center">
                    <span className="mr-2">{category.emojis}</span>
                    {category.name}
                    <span className="ml-3 text-base font-normal text-purple-300">
                      （{items.length}件）
                    </span>
                  </h2>

                  {/* カテゴリ説明文 */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-5 border-l-4 border-transparent">
                    {CATEGORY_DESCRIPTIONS[category.slug] || `${category.name}に関する夢占い記事の一覧です。`}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {items.map((item) => (
                      <Link
                        key={`${item.category}-${item.slug}`}
                        href={`/dictionary/${item.category}/${item.slug}`}
                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="min-w-0">
                          <p className="font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 mt-1 truncate">
                            {item.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* 辞典トップへの誘導 */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-4">カテゴリ別の詳しい解説や検索機能をご利用いただけます</p>
              <Link
                href="/dictionary"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                夢占い辞典を見る
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
