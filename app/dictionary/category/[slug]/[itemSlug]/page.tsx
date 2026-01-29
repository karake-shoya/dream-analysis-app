import { DREAM_DICTIONARY } from '@/lib/data/dreamDictionary';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdsenseAd from '@/components/AdsenseAd';

// 広告スロットID
const AD_SLOT_ARTICLE_TOP = "6378422969";    // 記事上広告
const AD_SLOT_ARTICLE_MIDDLE = "6378422969"; // 記事中広告

export default async function ItemPage({ params }: { params: Promise<{ slug: string; itemSlug: string }> }) {
  const { slug, itemSlug } = await params;
  const category = DREAM_DICTIONARY[slug];
  if (!category) notFound();

  const item = category.items.find((i) => i.slug === itemSlug);
  if (!item) notFound();

  return (
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
          <Link href={`/dictionary/category/${category.slug}`} className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {category.name}の一覧に戻る
          </Link>
        </div>

        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20 mb-6">
              <span>{category.emojis}</span>
              <span>{category.name}の夢</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              夢占い：{item.keyword}
            </h1>
            <div className="p-6 rounded-2xl bg-linear-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-md shadow-xl">
              <h2 className="text-lg font-bold text-purple-200 mb-2 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                暗示のまとめ
              </h2>
              <p className="text-xl text-white font-medium">
                {item.summary}
              </p>
            </div>
          </header>

          {/* 記事上広告 */}
          <div className="mb-10 bg-white/5 rounded-2xl p-4 border border-white/10">
            <AdsenseAd slot={AD_SLOT_ARTICLE_TOP} />
          </div>

          <div className="space-y-10 leading-relaxed text-lg text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">
                夢の意味・診断
              </h2>
              <p>
                {item.description}
              </p>
            </section>

            {/* 記事中広告 */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={AD_SLOT_ARTICLE_MIDDLE} />
            </div>

            <section className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-sm text-gray-400 leading-relaxed">
              <div className="flex items-center gap-2 mb-3 text-purple-400 not-italic font-bold">
                 <AlertCircle className="w-4 h-4" />
                 <span>ワンポイントアドバイス</span>
              </div>
              夢占いの結果は、その時のあなたの感情やシチュエーションによっても変化します。
              もっと詳しい意味を知りたい場合は、トップページのAI夢診断に具体的な内容を入力してみてくださいね。
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-purple-900/20 hover:scale-105 transition-transform"
            >
              AIで今の夢を詳しく診断する
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
