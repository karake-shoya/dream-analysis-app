import { Metadata } from 'next';
import { Waves, Brain, Search, Sparkles, BookOpen } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '水の夢は良い夢ですか？悪い夢ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '水の夢はどちらとも決まりません。澄んだ穏やかな水は感情の安定・浄化を、濁った荒れた水は感情的な混乱・抑圧された感情を象徴することが多いです。水の状態・色・自分がどう感じたかが解釈の重要な手がかりになります。',
      },
    },
    {
      '@type': 'Question',
      name: '溺れる夢はどんな意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '溺れる夢は、感情的に「溺れている」状態——処理しきれないほどの感情・情報・ストレスに押しつぶされそうになっている状態——を反映することが多いです。また無意識の深みに引きずり込まれる恐怖として解釈されることもあります。',
      },
    },
    {
      '@type': 'Question',
      name: '洪水・津波が出てくる夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '洪水や津波は、コントロールできないほどの感情的な力・大きな変化・無意識からの圧倒的なエネルギーを象徴します。長い間抑圧してきた感情が一気に溢れ出しそうな状態、または人生の大きな転換期に見やすい夢です。',
      },
    },
    {
      '@type': 'Question',
      name: '澄んだ海・川を泳ぐ夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '澄んだ水の中を自由に泳ぐ夢は、感情の流れに乗れている状態・無意識との調和・自己実現へのエネルギーが高まっているサインとして解釈されます。感情的に安定していて、人生の流れを受け入れられている状態を示します。',
      },
    },
    {
      '@type': 'Question',
      name: '水の夢を繰り返し見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '水は感情・無意識と深く結びついているため、感情的なテーマが解消されないまま続いているとき繰り返し出やすくなります。どんな種類の水が・どんな状態で出てくるかを記録することで、今自分の感情の中で何が動いているかを探るヒントが得られます。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '水の夢・溺れる夢の意味とは？感情・無意識を示す深層心理をユング心理学で解説',
  description:
    '水の夢・溺れる夢の意味を心理学的に解説。水が感情と無意識の象徴である理由、溺れる夢・洪水・津波・澄んだ海を泳ぐ夢など状況別の意味、水の色や状態による読み解き方まで詳しく紹介します。',
  alternates: { canonical: '/column/water-dream' },
  openGraph: {
    title: '水の夢・溺れる夢の意味とは？感情・無意識を示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '水の夢・溺れる夢の意味を心理学的に解説。水が感情と無意識の象徴である理由、溺れる夢・洪水・津波・澄んだ海を泳ぐ夢など状況別の意味、水の色や状態による読み解き方まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function WaterDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="水の夢・溺れる夢の意味とは" subtitle="感情と無意識——水が映し出す深層心理" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">夢の中に現れる水——穏やかな海、濁った川、怒涛の洪水、深い湖。水の夢は人類が古代から夢に見てきた最も普遍的なテーマのひとつです。</p>
            <p className="mb-4">ユング心理学において水は、<span className="text-purple-300 font-bold">感情・無意識・変容の可能性</span>を象徴する最も重要なシンボルのひとつとされています。水の状態（澄んでいるか濁っているか）・動き（穏やかか荒れているか）・自分との関係（泳いでいるか溺れているか）が、今の感情状態を映し出します。</p>
            <p>本記事では、水の夢の意味をユング心理学の視点から、状況・種類別に丁寧に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Waves className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              水の夢が示す3つの心理テーマ
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 感情の状態——水は感情を映す鏡</h3>
                <p className="text-gray-300 leading-relaxed">水の状態は感情の状態と対応します。澄んだ穏やかな水は感情的な安定・明晰さを、濁った荒れた水は感情的な混乱・未処理の感情を象徴します。今の感情状態を水のイメージに置き換えると、「どんな水だったか」が直接的な手がかりになります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 無意識の深さ——水の深みへの接近</h3>
                <p className="text-gray-300 leading-relaxed">ユング心理学では、水は無意識の象徴でもあります。深い湖・海の底への潜水は、無意識の深みへの探索を象徴します。深みが怖い場合は無意識と向き合うことへの抵抗が、深みを探索している場合は内省が深まっているサインとして解釈されます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 浄化と変容——水が洗い流すもの</h3>
                <p className="text-gray-300 leading-relaxed">水は浄化のシンボルでもあります。雨・滝・シャワーなどが印象的な夢は、古い感情・思考パターン・罪悪感などが洗い流されていくプロセスを示すことがあります。変容の段階にいるときに見やすいパターンです。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">溺れる夢</h3>
                <p className="text-gray-300 leading-relaxed">感情的に「溺れている」状態——処理しきれないストレス・感情・情報に圧倒されている状態を反映します。「もう限界」という深層心理のSOSとして受け取り、現実の負荷を見直すサインとして活用しましょう。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">洪水・津波の夢</h3>
                <p className="text-gray-300 leading-relaxed">コントロールできないほどの感情的な力・人生の大きな変化の予感を象徴します。抑圧してきた感情が一気に溢れ出しそうな状態、または大きな外的変化（引越し・転職・関係の変化）が迫っているときに見やすい夢です。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">澄んだ海・川を泳ぐ夢</h3>
                <p className="text-gray-300 leading-relaxed">感情の流れに乗れている・無意識と調和している状態のポジティブなサインです。人生の流れを受け入れ、自分らしく進んでいる感覚が高まっているときに出やすいパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">深い湖・海の底に潜る夢</h3>
                <p className="text-gray-300 leading-relaxed">無意識の深みへの探索・自己理解の深化を象徴します。内省・カウンセリング・自己探求が進んでいるときに出やすく、怖くても好奇心がある場合は探索を続ける準備ができているサインです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">雨・滝・清流の夢</h3>
                <p className="text-gray-300 leading-relaxed">浄化・感情の解放・古いものが洗い流されていくプロセスを示します。特に目覚めたときにすっきりした感覚がある場合、感情的な浄化が進んでいるポジティブなサインです。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">水の夢を見たとき、「今の自分の感情の状態はどんな水に似ているか」を問いかけてみてください。澄んでいるか、濁っているか、静かか、荒れているか——その答えが今の内面状態を映しています。</p>
            <p className="text-gray-300 leading-relaxed text-lg">水は流れるもの。今どんな状態であっても、感情は変化し続けます。</p>
          </section>

          <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <BookOpen className="w-7 h-7 mr-3 text-purple-400 shrink-0" />よくある質問
            </h2>
            <div className="space-y-4">
              {faqStructuredData.mainEntity.map((item) => (
                <details key={item.name} className="rounded-2xl border border-white/10 bg-black/20 p-4 group">
                  <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                    {item.name}
                    <span className="transition-transform group-open:rotate-180 text-purple-400 shrink-0 ml-3">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-400">参考文献</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>▸ C.G. Jung, <em>Dreams</em>, Princeton University Press</li>
              <li>▸ C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/nightmare" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">😰</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">怖い夢・悪夢が続くときの対処法</p>
              <p className="text-xs text-gray-400 mt-0.5">深層心理が示す不安のサインと向き合い方</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="水の夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。水の状態・色・自分がどう感じたかも含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
