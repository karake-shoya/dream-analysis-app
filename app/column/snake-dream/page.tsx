import { Metadata } from 'next';
import { Zap, Brain, Search, AlertCircle, BookOpen } from 'lucide-react';
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
      name: '蛇の夢は不吉なサインですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '必ずしも不吉ではありません。ユング心理学では蛇は変容・再生・本能的エネルギーの象徴とされており、単純に良い・悪いと決まるものではありません。夢の中で蛇がどう行動していたか、どんな感情を感じたかによって解釈が大きく変わります。',
      },
    },
    {
      '@type': 'Question',
      name: '蛇に噛まれる夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '蛇に噛まれる夢は、抑圧されたエネルギーや感情が「もう無視できない」と強く訴えている状態を示すことがあります。ユング的には、シャドウが意識化を強く求めているサインとも解釈されます。噛まれた部位や感情も解釈の手がかりになります。',
      },
    },
    {
      '@type': 'Question',
      name: '大きな蛇と小さな蛇では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '大きな蛇は影響力の大きい変化・エネルギー・課題を、小さな蛇は局所的な変化や小さな警告を象徴することがあります。ただし蛇のサイズより「どう感じたか」の方が解釈において重要です。',
      },
    },
    {
      '@type': 'Question',
      name: '蛇が脱皮する夢を見ました。どんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '蛇の脱皮は変容・再生・成長の最も明確なシンボルです。古い自己像や習慣・役割を脱ぎ捨てて新しい自分へ移行しているプロセスを象徴します。個性化プロセスの進行中を示す、ポジティブな意味合いを持つ夢として解釈されることが多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '複数の蛇が出てくる夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '複数の蛇が出てくる場合、複数の変化・葛藤・エネルギーが同時に動いている状態を示すことがあります。蛇が絡み合っている場合は複雑な問題が絡み合っているサインとも取れます。それぞれの蛇に対してどう感じたかを振り返ることが手がかりになります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '蛇が出てくる夢の意味とは？変容・本能・シャドウを示す深層心理をユング心理学で解説',
  description:
    '蛇が出てくる夢の意味を心理学的に解説。変容・再生・本能的エネルギーを象徴する理由、蛇に噛まれる・追いかけられる・脱皮するなどシーン別の意味、ユング心理学のシャドウとの関係まで詳しく紹介します。',
  alternates: { canonical: '/column/snake-dream' },
  openGraph: {
    title: '蛇が出てくる夢の意味とは？変容・本能・シャドウを示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '蛇が出てくる夢の意味を心理学的に解説。変容・再生・本能的エネルギーを象徴する理由、蛇に噛まれる・追いかけられる・脱皮するなどシーン別の意味、ユング心理学のシャドウとの関係まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function SnakeDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="蛇が出てくる夢の意味とは" subtitle="変容・本能・再生——蛇が告げる深層心理のメッセージ" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">蛇が夢に出てきたとき、多くの人は不安を感じます。不吉な予兆では、と思う人も少なくないはずです。しかし心理学的に見ると、蛇は夢の世界で最も豊かな象徴性を持つ存在のひとつです。</p>
            <p className="mb-4">古代から蛇は世界中の神話・宗教・医療のシンボルに登場し、「変容」「再生」「知恵」「本能的エネルギー」を体現してきました。ユング心理学においても蛇は特別な元型的イメージとして扱われています。</p>
            <p>夢に蛇が現れたとき、<span className="text-purple-300 font-bold">恐怖で終わらせず、何を告げているのかを読み解く視点</span>を持つことが、この夢を活かす第一歩です。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              蛇の夢が示す3つの心理テーマ
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 変容と再生——脱皮するように自分が変わるとき</h3>
                <p className="text-gray-300 leading-relaxed">蛇は脱皮という行動から、古い自己を脱ぎ捨てて新しい自分になる「変容と再生」の象徴として世界中で認識されています。大きな変化の時期・何かを手放そうとしているとき・新しいステージへ移行中のときに、蛇が夢に現れやすくなります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 本能的エネルギー——抑圧された力が動き出す</h3>
                <p className="text-gray-300 leading-relaxed">蛇は爬虫類として人間の「爬虫類脳」（本能・衝動・生存本能）と結びついたシンボルです。長い間抑圧してきた感情・欲求・怒り・性的エネルギーが動き出しているとき、それを象徴する形で蛇が夢に現れることがあります。蛇の活発さや攻撃性が、そのエネルギーの強度を表します。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 危険と警戒——見落としているリスクへの気づき</h3>
                <p className="text-gray-300 leading-relaxed">蛇の夢が「警告」として機能することもあります。現実の人間関係や状況に潜むリスク・不誠実さ・自分が気づいていない危険への無意識のアラートが、蛇という形を借りて夢に出ることがあります。蛇が近づいてくる・隠れている夢はこのパターンに多いです。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学における蛇の象徴
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">ユングは蛇を「集合的無意識」の最も強力な元型的シンボルのひとつとして位置づけました。蛇はシャドウ・リビドー（生命エネルギー）・個性化プロセスと深く結びついています。</p>
            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">ウロボロス——蛇が自分の尾を食べる元型</h3>
              <p className="text-gray-300 leading-relaxed">ユングが重視した「ウロボロス」（自分の尾を食べる蛇の円）は、<span className="text-purple-300 font-bold">永遠の循環・自己完結・統合</span>を象徴します。夢の中で蛇が円を描く・自分を食べるイメージは、内面の統合プロセスが進んでいるサインとして解釈されることがあります。</p>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">蛇とシャドウの関係</h3>
                <p className="text-gray-300 leading-relaxed">夢の中で蛇が恐ろしく・攻撃的に見える場合、それはシャドウ（抑圧された感情・衝動）の象徴かもしれません。蛇が近づいてくるのに逃げようとする夢は、認めたくない自分の一面から逃げている状態を反映することがあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">医療の蛇（アスクレピオスの杖）と癒しの象徴</h3>
                <p className="text-gray-300 leading-relaxed">医療のシンボルでもある蛇は、古代から「治癒・知恵・再生」と結びついてきました。穏やかな蛇が夢に出てくる場合、心や体の癒しが進んでいる・あるいは知恵や洞察が育ちつつあるサインとして解釈されることがあります。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">蛇に噛まれる夢</h3>
                <p className="text-gray-300 leading-relaxed">抑圧されていたエネルギーや感情が「もう無視できない」と意識を刺激している状態を示すことが多いです。ユング的にはシャドウが強く意識化を求めているサインとも解釈されます。噛まれて痛い感覚は、その感情の強度を表します。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">蛇に追いかけられる・追われる夢</h3>
                <p className="text-gray-300 leading-relaxed">向き合うことを避けている感情・課題・変化から逃げている状態を反映します。蛇（象徴されるもの）と向き合う必要が高まっているサインかもしれません。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">蛇が脱皮する夢</h3>
                <p className="text-gray-300 leading-relaxed">変容・再生・成長を最も直接的に示すパターンです。古い自己を脱ぎ捨てて新しいステージへ向かっているプロセスの表れ。個性化プロセスが順調に進んでいるサインとして解釈されます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">蛇を観察している・平和に共存する夢</h3>
                <p className="text-gray-300 leading-relaxed">蛇を恐れず観察・共存している夢は、内なるエネルギーや本能的側面を受け入れられている状態を示します。シャドウを統合しつつある、比較的ポジティブなパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">カラフルな蛇・白い蛇の夢</h3>
                <p className="text-gray-300 leading-relaxed">日本では白い蛇は特に「吉兆」「弁財天の使い」として縁起が良いとされます。心理学的にも白は純粋さ・統合を象徴し、白い蛇の夢は内面の浄化・精神的な高まりを反映することがあります。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">蛇の夢は恐ろしいイメージを持つことが多いですが、ユング心理学ではむしろ「内なるエネルギーが動いているサイン」として重要視されます。変容・再生・本能の声——これらは成長に不可欠なものです。</p>
            <p className="text-gray-300 leading-relaxed text-lg">夢の中の蛇がどう行動していたか、自分がどう感じたかを振り返ることで、今の自分が何と向き合おうとしているかが見えてきます。</p>
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
              <li>▸ David Fontana, <em>The Secret Language of Dreams</em>, Chronicle Books</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/chased-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">😰</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">追いかけられる夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">逃げる夢の深層心理とシャドウの関係</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="蛇の夢の内容をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。蛇の様子や感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
