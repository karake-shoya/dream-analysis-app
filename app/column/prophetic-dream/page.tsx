import { Metadata } from 'next';
import { Brain, Eye, Zap, CheckCircle, HelpCircle, Infinity } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '正夢とは？本当にある？なる方法まで心理学で解説',
  description: '正夢とは何か、なぜ起きるのか、本当にあるのかを心理学・脳科学で解説。正夢になりやすい方法（夢日記・イメージング）も紹介。よくある疑問をFAQ形式でまとめました。',
  alternates: { canonical: '/column/prophetic-dream' },
  openGraph: {
    title: '正夢とは？本当にある？なる方法まで心理学で解説 | Yume Insight',
    description: '正夢とは何か、なぜ起きるのか、本当にあるのかを心理学・脳科学で解説。正夢になりやすい方法（夢日記・イメージング）も紹介。よくある疑問をFAQ形式でまとめました。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// FAQ構造化データ（リッチリザルト対応）
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '正夢とは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '正夢（まさゆめ）とは、夢で見た出来事がその後現実に起こる現象のことです。心理学的には、脳の予測機能・無意識の洞察・選択的記憶などのメカニズムによって説明されます。ユング心理学では「共時性（シンクロニシティ）」という概念でも捉えられます。',
      },
    },
    {
      '@type': 'Question',
      name: '正夢は本当にあるのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '科学的に「予知能力」として証明された事例はありませんが、脳が過去の情報をもとに未来を予測したり、無意識が微細なサインを拾うことで夢が現実と一致することはあります。体験として感じること自体は本物です。',
      },
    },
    {
      '@type': 'Question',
      name: 'なぜ正夢を見るのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '主な理由は3つあります。①脳が睡眠中に情報を整理して未来をシミュレーションする、②無意識が日常の微細なサインをキャッチして夢に反映させる、③「当たった夢」だけが印象に残る選択的記憶の働きです。',
      },
    },
    {
      '@type': 'Question',
      name: '正夢になりやすくする方法はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夢日記をつけて夢を意識する習慣をつける、就寝前に意識したいテーマを明確に思い描く（認知的プライミング）、睡眠の質を上げてレム睡眠を増やす、感情と記憶の統合を深めて夢の定着率を高めるといった方法が効果的とされています。',
      },
    },
    {
      '@type': 'Question',
      name: '正夢の意味は何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '正夢は、あなたの脳が環境の変化を感じ取っているサイン、または無意識が現実への備えを整えていたと考えられます。ユング心理学では「共時性（意味のある偶然の一致）」として捉えることもできます。直感や観察力が鋭くなっているタイミングとして受け取ることができます。',
      },
    },
  ],
};

export default function PropheticDreamPage() {
  return (
    <ContentPageLayout>
      {/* FAQ構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <PageHero
        title="正夢とは？"
        subtitle="本当にある？なる方法まで心理学で解説"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-6">
              「今のシーン、夢で見たことがある気がする…」
            </p>
            <p>
              そんな不思議な体験をしたことはありませんか？<span className="hidden md:inline"><br /></span>
              夢で見た出来事がその後現実に起こる現象は「正夢（まさゆめ）」と呼ばれ、古くから多くの人を惹きつけてきました。
            </p>
            <p className="mt-4">
              予知能力のように感じられるかもしれませんが、心理学や脳科学の視点から見ると、これは私たちの<span className="text-purple-300 font-bold">脳の働きや心のメカニズム</span>として説明ができる、とても興味深い現象です。
            </p>
            <p className="mt-4">
              このページでは、正夢の意味・なぜ起きるのか・本当にあるのかという疑問に答えたうえで、ユング心理学が提唱した「共時性」という視点も加えて深く解説します。さらに、<span className="text-purple-300 font-bold">正夢になりやすくする方法</span>まで詳しく紹介します。
            </p>
          </div>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* 正夢は本当にあるのか */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              正夢は本当にあるのか？
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              結論からいうと、「予知能力による正夢」は科学的には証明されていません。しかし、<span className="text-purple-300 font-bold">夢が現実と一致する体験そのものは本物</span>です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢と現実が一致するのは、脳の高度な予測機能・無意識の情報処理・記憶のフィルタリングといった、心理学や脳科学で説明できる仕組みによるものです。
            </p>
            <div className="mt-6 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20">
              <p className="text-gray-200 leading-relaxed text-lg">
                「科学的に説明できる＝信じなくていい」ではありません。正夢を体験したとき、それはあなたの<span className="text-purple-300 font-bold">直感や無意識の観察力が機能しているサイン</span>かもしれないのです。
              </p>
            </div>
          </section>

          {/* セクション1: 脳の予測機能 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400" />
              脳が生み出す「未来のシミュレーション」
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              私たちは眠っている間、ただ休んでいるわけではありません。脳は起きている間に取り込んだ膨大な情報を整理整頓し、記憶として定着させる作業を行っています。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              この時、脳は過去のデータをもとにして「これから何が起こるか？」という予測も行っています。まるで高度なシミュレーションを行っているような状態です。<span className="hidden md:inline"><br /></span>
              この<span className="text-purple-300 font-bold">脳内シミュレーションの結果が、偶然現実の出来事とピタリと一致したとき</span>、私たちはそれを「正夢」として認識するのです。あなたの脳が精緻な予測器として働いた結果とも言えます。
            </p>
          </section>

          {/* セクション2: 無意識の洞察 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-8 h-8 mr-3 text-purple-400" />
              無意識がキャッチした「小さなサイン」
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              日々の生活の中で、私たちは意識していないけれど、無意識のうちに多くの情報を感じ取っています。<span className="hidden md:inline"><br /></span>
              例えば、友人のわずかな表情の変化、季節の変わり目の空気感、体調の小さな違和感などです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              こうした<span className="text-purple-300 font-bold">言葉にならない微細なサイン</span>が夢の中で統合され、具体的な形となって現れることがあります。その後、現実に変化が起きた時、「夢で見た通りになった！」と驚くことになりますが、実はあなたの無意識が現状を鋭く分析していた結果なのです。
            </p>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 選択的記憶 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 mr-3 text-purple-400" />
              「当たったこと」だけを覚えている？
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              心理学には「選択的記憶」という言葉があります。人間は、<span className="text-purple-300 font-bold">印象に残ったことや都合の良いことだけを強く記憶し、それ以外を忘れてしまう</span>傾向があります。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              私たちは毎晩たくさんの夢を見ていますが、そのほとんどは忘れてしまいます。しかし、たまたま現実と一致した夢だけは、「驚き」という感情とともに強烈に記憶に残ります。<span className="hidden md:inline"><br /></span>
              「外れた夢」は忘れ去られ、「当たった夢」だけスポットライトが当たることで、まるで不思議な力で予知したかのように感じられるのです。
            </p>
          </section>

          {/* セクション4: ユングの共時性（新設） */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Infinity className="w-8 h-8 mr-3 text-purple-400" />
              ユング心理学が捉える正夢：共時性という視点
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              正夢を心理学的に最も深く論じたのが、スイスの心理学者カール・グスタフ・ユングです。ユングは「共時性（Synchronicity：シンクロニシティ）」という概念を提唱しました。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-5">
              <h3 className="text-xl font-bold text-purple-200 mb-3">共時性（Synchronicity）とは</h3>
              <p className="text-gray-300 leading-relaxed">
                共時性とは、「因果関係はないが、意味のある偶然の一致」として起きる現象のことです。夢で見た出来事が翌日現実に起きる、誰かのことを考えていたら突然連絡が来る——これらをユングは「意味を持つ偶然の一致」として捉え、心の深層と外界との不思議なつながりとして論じました。
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mb-5">
              共時性は、スピリチュアルな「予知」ではありません。ユングは心理学者として、この現象を「無意識が外界の変化を先取りして知覚している」状態、あるいは「心と外界の間に意味のある連関が生じている」現象として考察しました。
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">正夢を「共時性」として受け取るとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  正夢のような体験をしたとき、ユング的な見方では「あなたの無意識が、意識より先に何かを感じ取っていた」と解釈できます。それは直感が冴えているサインであり、心の深層と日常の現実がつながっている瞬間とも言えます。「なぜこの夢を見て、こんなことが起きたのか」を考えることが、自己理解の入口になります。
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">正夢が続くときのユング的解釈</h3>
                <p className="text-gray-300 leading-relaxed">
                  正夢のような体験が続くとき、それはあなたの無意識が特定の何か——人間関係、仕事の変化、体調の変化——を鋭く察知しているサインかもしれません。夢日記をつけて記録しておくと、どんなテーマに無意識が敏感に反応しているかが見えてきます。
                </p>
              </div>
            </div>
          </section>

          {/* 正夢になる方法 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              正夢になりやすくする方法
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              正夢は「たまたま起こるもの」ではなく、<span className="text-purple-300 font-bold">夢と現実のつながりに気づきやすくする状態を整えること</span>で、体験しやすくなると言われています。脳の情報処理と無意識の観察力を高めるアプローチを紹介します。
            </p>

            <div className="space-y-6">
              {/* 方法1 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle className="w-7 h-7 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">夢日記をつける</h3>
                  <p className="text-gray-300 leading-relaxed">
                    起きたらすぐにその日の夢をノートやスマホにメモする習慣をつけましょう。夢を「記録する対象」として意識することで、脳が夢の内容をより鮮明に覚えようとするようになります。続けることで、夢と現実のつながりを自分で発見しやすくなります。ユングも夢日記を生涯続け、無意識との対話を深めました。
                  </p>
                </div>
              </div>

              {/* 方法2 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle className="w-7 h-7 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">認知的プライミング（脳への予告）を活用する</h3>
                  <p className="text-gray-300 leading-relaxed">
                    眠る前に、意識したいテーマや解決したい問いを明確に思い描いてみましょう。「この問題についてのヒントが欲しい」と意識して眠ることで、脳はその情報を材料として夢のシナリオに組み込みやすくなります。これは「プライミング効果」と呼ばれる心理学的な仕組みで、スポーツ選手のメンタルトレーニングでも活用されています。
                  </p>
                </div>
              </div>

              {/* 方法3 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle className="w-7 h-7 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">睡眠の質を高めてレム睡眠を増やす</h3>
                  <p className="text-gray-300 leading-relaxed">
                    夢を見るのは主にレム睡眠（浅い眠り）の時間帯です。就寝・起床の時間を一定にし、寝る前のスマホやカフェインを控えることで、睡眠の質が上がり夢を見やすくなります。睡眠時間が長いほどレム睡眠の割合が増えるため、十分な睡眠を取ることも大切です。
                  </p>
                </div>
              </div>

              {/* 方法4 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle className="w-7 h-7 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">感情と記憶の統合を深める</h3>
                  <p className="text-gray-300 leading-relaxed">
                    脳は感情と結びついた情報を優先して処理します。眠る前に、その日の出来事を振り返り、感情をしっかり言語化することで、脳内の情報整理が深まります。日記に感情を書き出したり、深呼吸でその日の緊張を解いてから眠ることが、夢の定着率と質の向上につながります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 広告（下部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* 結論・まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">おわりに</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              正夢は、単なるオカルトでも、科学的に否定すべき迷信でもありません。<span className="hidden md:inline"><br /></span>
              それは、あなたの脳が情報を処理する過程、無意識が感じ取っている世界、そしてユングが「共時性」と呼んだ心と外界のつながりが織りなす、非常に人間らしい現象です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              もし正夢のような体験をしたら、それは自分の直感や無意識の観察力が機能しているサインかもしれません。<span className="hidden md:inline"><br /></span>
              夢を記録し、無意識が何に反応しているかを観察することで、正夢はより身近で意味のある体験になっていくでしょう。
            </p>
          </section>

          {/* FAQセクション */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-purple-400" />
              よくある質問
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: '正夢とは何ですか？',
                  a: '正夢（まさゆめ）とは、夢で見た出来事がその後現実に起こる現象のことです。心理学的には、脳の予測機能・無意識の洞察・選択的記憶などのメカニズムによって説明されます。ユング心理学では「共時性（シンクロニシティ）」という概念でも捉えられます。',
                },
                {
                  q: '正夢は本当にあるのですか？',
                  a: '科学的に「予知能力」として証明された事例はありませんが、脳が過去の情報をもとに未来を予測したり、無意識が微細なサインを拾うことで夢が現実と一致することはあります。体験として感じること自体は本物です。',
                },
                {
                  q: 'なぜ正夢を見るのですか？',
                  a: '主な理由は3つあります。①脳が睡眠中に情報を整理して未来をシミュレーションする、②無意識が日常の微細なサインをキャッチして夢に反映させる、③「当たった夢」だけが印象に残る選択的記憶の働きです。',
                },
                {
                  q: '正夢になりやすくする方法はありますか？',
                  a: '夢日記をつけて夢を意識する習慣をつける、就寝前に意識したいテーマを明確に思い描く（認知的プライミング）、睡眠の質を上げてレム睡眠を増やす、感情と記憶の統合を深めて夢の定着率を高めるといった方法が効果的とされています。',
                },
                {
                  q: '正夢の意味は何ですか？',
                  a: '正夢は、あなたの脳が環境の変化を感じ取っているサイン、または無意識が現実への準備を整えていたと考えられます。ユング心理学では「共時性（意味のある偶然の一致）」として捉えることもできます。直感や観察力が鋭くなっているタイミングとして受け取ることができます。',
                },
              ].map(({ q, a }, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-bold text-lg hover:bg-white/5 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-purple-400 font-mono text-sm">Q</span>
                      {q}
                    </span>
                    <span className="text-purple-400 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                    <span className="text-purple-400 font-mono text-sm font-bold mr-2">A</span>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 免責事項 */}
          <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページで扱う「正夢」は、心理的な体験や記憶の解釈として語られる概念であり、未来を予測・保証するものではありません。
            </p>
          </div>
        </div>
      </article>

      <DreamAnalysisCTA />
    </ContentPageLayout>
  );
}
