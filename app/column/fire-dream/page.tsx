import { Metadata } from 'next';
import { Flame, Brain, Search, Zap, BookOpen } from 'lucide-react';
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
      name: '火の夢は良い夢ですか？悪い夢ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '火の夢はどちらとも決まりません。炎は破壊と創造の両面を持つシンボルです。穏やかな焚き火・ろうそくの炎は温もり・情熱・光を、制御不能な火事・燃え広がる炎は消費しきれないほどのエネルギー・怒り・急激な変化を象徴します。夢の中の火の状態と感情が解釈の鍵です。',
      },
    },
    {
      '@type': 'Question',
      name: '家が燃える夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '家は自己・家族・安全基盤の象徴です。家が燃える夢は、自分の基盤や大切なものが失われることへの恐怖・または大きな変化によってこれまでの自分が変容していくプロセスを反映することがあります。破壊的変化の後に新しい自己が生まれるという再生のサインとして解釈されることもあります。',
      },
    },
    {
      '@type': 'Question',
      name: '火を見ている夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '火を観察している夢は、情熱・欲求・変化を自分の内側で感じながら、まだそれと距離をおいている状態を示します。関わりたいが関わることへの迷いや、変化の入り口に立っている状態として解釈されます。',
      },
    },
    {
      '@type': 'Question',
      name: '火を消す夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '情熱・怒り・感情の過剰なエネルギーを鎮めようとしている状態を反映します。感情をコントロールしようとする意志や、激しい状況を収束させようとする心の動きとして読み解けます。',
      },
    },
    {
      '@type': 'Question',
      name: 'ユング心理学で火はどんな象徴ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、火は変容・情熱・精神的エネルギー（リビドー）のシンボルです。錬金術における火は「変容の媒介」として重要な役割を持ちます。夢の中の火は、今の自分を「溶かして再鋳造するような変容プロセス」が進んでいることを示すことがあります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '火の夢の意味とは？情熱・変容・破壊と再生をユング心理学で解説',
  description:
    '火の夢の意味を心理学的に解説。火が象徴する情熱・変容・破壊と再生、家が燃える夢・火を見る夢・火を消す夢など状況別の読み解き方、ユング心理学の錬金術的変容との関係まで詳しく紹介します。',
  alternates: { canonical: '/column/fire-dream' },
  openGraph: {
    title: '火の夢の意味とは？情熱・変容・破壊と再生をユング心理学で解説 | Yume Insight',
    description:
      '火の夢の意味を心理学的に解説。火が象徴する情熱・変容・破壊と再生、家が燃える夢・火を見る夢・火を消す夢など状況別の読み解き方、ユング心理学の錬金術的変容との関係まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function FireDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="火の夢の意味とは" subtitle="情熱・変容・破壊と再生——炎が映す深層心理" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">夢の中に現れる炎——静かに揺れるろうそくの火、燃え盛る家事、荒野を焼き尽くす山火事。火は人類が古代から敬い恐れてきた最も原初的な元素のひとつです。</p>
            <p className="mb-4">ユング心理学において火は、<span className="text-purple-300 font-bold">情熱・変容・精神的エネルギー・破壊と再生</span>の象徴です。ユングの錬金術的変容の概念では、火は古いものを溶かし新しいものへと変える「変容の媒介」として重要な役割を担います。火の状態・大きさ・自分との距離が、今の心理状態を映しています。</p>
            <p>本記事では、火の夢の意味をユング心理学の視点から、状況別に丁寧に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Flame className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              火の夢が示す3つの心理テーマ
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 情熱とエネルギー——燃えているもの</h3>
                <p className="text-gray-300 leading-relaxed">ユング心理学ではリビドー（心的エネルギー）が火として象徴されることがあります。穏やかに燃える火は情熱・意欲・創造的エネルギーが適切に流れている状態を、激しく燃え盛る火は抑えきれないほどのエネルギー（怒り・欲求・情動）が溢れている状態を示します。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 変容の錬金術——古いものを燃やして新しくなる</h3>
                <p className="text-gray-300 leading-relaxed">錬金術では金属を火で溶かして精製するように、ユング心理学の変容も「古い自己が一度溶け崩れ、新しい自己として再鋳造される」プロセスとして描かれます。火の夢は、こうした深い変容の只中にいることを象徴していることがあります。焼き尽くされた後には、より純粋なものが残ります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 浄化と再生——フェニックスのように</h3>
                <p className="text-gray-300 leading-relaxed">多くの神話・伝承において、火には浄化の力があります。フェニックス（不死鳥）が炎の中から蘇るように、火の夢は「今の困難・古いパターンが焼き尽くされることで、次の段階が始まる」という再生のサインとして読み解けることがあります。</p>
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
                <h3 className="text-lg font-bold text-purple-200 mb-2">家が燃える夢</h3>
                <p className="text-gray-300 leading-relaxed">家（自己・家族・安全基盤の象徴）が燃える夢は、これまでの自分の基盤が変容していくプロセス、または大切なものを失うことへの恐怖を反映します。破壊的に見えますが、古い基盤が崩れることで新しい自己が立ち上がるという再生のプロセスを象徴することもあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">焚き火・暖炉の炎を見ている夢</h3>
                <p className="text-gray-300 leading-relaxed">制御された穏やかな火は、温もり・安全・適切に扱われた情熱を象徴します。心地よい焚き火の夢は、感情的なエネルギーが適切に流れている、または誰かとの温かいつながりへの欲求を示します。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">火事から逃げる夢</h3>
                <p className="text-gray-300 leading-relaxed">制御不能な感情・状況・変化から逃れようとしている状態を反映します。現実で「今の状況が手に負えない」「逃げ出したい」という感覚があるときに出やすいパターンです。何から逃げているのかを振り返ることが大切です。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">自分が火を使う・火をつける夢</h3>
                <p className="text-gray-300 leading-relaxed">変化を起こす主体としての自分を象徴します。何かを始める・変えることへの意志・または「燃やして一新したい」という欲求が夢として現れています。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">火の中にいるが傷つかない夢</h3>
                <p className="text-gray-300 leading-relaxed">変容・試練の只中にいながらも乗り越えられるという内なる確信を象徴します。困難な状況に置かれても自己が傷つかないという強さ・または「これを乗り越えられる」という直感的な確信を示す力強いパターンです。</p>
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
            <p className="text-gray-300 leading-relaxed text-lg mb-4">火の夢を見たとき、「今の自分の中で何が燃えているか——または何を燃やして新しく始めたいと思っているか」を問いかけてみてください。</p>
            <p className="text-gray-300 leading-relaxed text-lg">火は破壊しながら同時に光と温もりを与えます。夢の中の炎が何を照らし出しているか——それが今の内面への問いかけです。</p>
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
              <li>▸ C.G. Jung, <em>Psychology and Alchemy</em>, Princeton University Press</li>
              <li>▸ C.G. Jung, <em>Dreams</em>, Princeton University Press</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/water-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🌊</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">水の夢・溺れる夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">感情と無意識——水が映す深層心理</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="火の夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。火の大きさ・場所・感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
