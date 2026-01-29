import { DREAM_DICTIONARY } from '@/lib/data/dreamDictionary';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AdsenseAd from '@/components/AdsenseAd';
import FaqSchema from '@/components/FaqSchema';

const AD_SLOT_ARTICLE_TOP = "6378422969";
const AD_SLOT_ARTICLE_MIDDLE = "6378422969";

type Props = {
  params: Promise<{ category: string; item: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, item } = await params;
  const categoryData = DREAM_DICTIONARY[category];
  if (!categoryData) return {};

  const itemData = categoryData.items.find((i) => i.slug === item);
  if (!itemData) return {};

  return {
    title: `【夢占い】${itemData.keyword}の夢の意味｜心理・暗示・状況別解釈`,
    description: `${itemData.keyword}の夢の意味を徹底解説。${itemData.summary}。心理的な意味や状況別の解釈、よくある質問まで詳しく紹介します。`,
    openGraph: {
      title: `【夢占い】${itemData.keyword}の夢の意味｜心理・暗示・状況別解釈`,
      description: `${itemData.keyword}の夢の意味を徹底解説。${itemData.summary}。`,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const params: { category: string; item: string }[] = [];
  
  Object.values(DREAM_DICTIONARY).forEach((category) => {
    category.items.forEach((item) => {
      params.push({
        category: category.slug,
        item: item.slug,
      });
    });
  });

  return params;
}

export default async function ItemPage({ params }: Props) {
  const { category, item } = await params;
  const categoryData = DREAM_DICTIONARY[category];
  if (!categoryData) notFound();

  const itemData = categoryData.items.find((i) => i.slug === item);
  if (!itemData) notFound();

  return (
    <>
      {'faqs' in itemData && itemData.faqs && <FaqSchema faqs={itemData.faqs} />}
      <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
        <div className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(139, 92, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 90% 90%, rgba(79, 70, 229, 0.1) 0%, transparent 40%),
            #0f172a
          `
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <Link href={`/dictionary/${categoryData.slug}`} className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {categoryData.name}の一覧に戻る
          </Link>
        </div>

        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20 mb-6">
              <span>{categoryData.emojis}</span>
              <span>{categoryData.name}の夢</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              夢占い：{itemData.keyword}
            </h1>
            <div className="p-6 rounded-2xl bg-linear-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-md shadow-xl">
              <h2 className="text-lg font-bold text-purple-200 mb-2 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                暗示のまとめ
              </h2>
              <p className="text-xl text-white font-medium">
                {itemData.summary}
              </p>
            </div>
          </header>

          {/* 記事上広告 */}
          <div className="mb-10 bg-white/5 rounded-2xl p-4 border border-white/10">
            <AdsenseAd slot={AD_SLOT_ARTICLE_TOP} />
          </div>

          <div className="space-y-10 leading-relaxed text-lg text-gray-300">
            {/* 結論セクション */}
            {'conclusion' in itemData && itemData.conclusion && (
              <section className="p-6 rounded-2xl bg-linear-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20">
                <h2 className="text-xl font-bold text-white mb-3">結論</h2>
                <p className="text-white/90">{itemData.conclusion}</p>
              </section>
            )}

            {/* 夢の意味・診断 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">
                夢の意味・診断
              </h2>
              <p>{itemData.description}</p>
            </section>

            {/* 心理的な意味 */}
            {'psychology' in itemData && itemData.psychology && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">
                  心理的な意味
                </h2>
                <p>{itemData.psychology}</p>
              </section>
            )}

            {/* 記事中広告 */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={AD_SLOT_ARTICLE_MIDDLE} />
            </div>

            {/* 状況別の解釈 */}
            {'situations' in itemData && itemData.situations && itemData.situations.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                  状況別の解釈
                </h2>
                <div className="space-y-4">
                  {itemData.situations.map((situation, index) => (
                    <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg font-bold text-purple-300 mb-2">{situation.title}</h3>
                      <p className="text-gray-300">{situation.meaning}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* よくある質問 */}
            {'faqs' in itemData && itemData.faqs && itemData.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                  よくある質問
                </h2>
                <div className="space-y-4">
                  {itemData.faqs.map((faq, index) => (
                    <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-2">Q. {faq.question}</h3>
                      <p className="text-gray-300">A. {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ワンポイントアドバイス */}
            <section className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-sm text-gray-400 leading-relaxed">
              <div className="flex items-center gap-2 mb-3 text-purple-400 not-italic font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>ワンポイントアドバイス</span>
              </div>
              夢占いの結果は、その時のあなたの感情やシチュエーションによっても変化します。
              もっと詳しい意味を知りたい場合は、トップページのAI夢診断に具体的な内容を入力してみてくださいね。
            </section>
          </div>

          {/* AI夢診断CTA - 最重要導線 */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="p-8 rounded-2xl bg-linear-to-r from-purple-900/50 to-indigo-900/50 border border-purple-500/30 text-center">
              <p className="text-lg text-gray-300 mb-6">
                この夢を見た理由や、あなた個人の状況を踏まえた意味は<br />
                <span className="text-white font-bold">AI夢診断で詳しく分析できます。</span>
              </p>
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-purple-900/20 hover:scale-105 transition-transform"
              >
                AIで今の夢を詳しく診断する
              </Link>
            </div>
          </div>
        </article>
      </div>
      </div>
    </>
  );
}
