import { Metadata } from 'next';
import { Brain, Eye, Heart, Sparkles, CheckCircle, HelpCircle } from 'lucide-react';
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
        text: '正夢（まさゆめ）とは、夢で見た出来事がその後現実に起こる現象のことです。心理学的には、脳の予測機能・無意識の洞察・選択的記憶などのメカニズムによって説明されます。',
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
        text: '夢日記をつけて夢を意識する習慣をつける、就寝前に実現させたいシーンを鮮明にイメージする、睡眠の質を上げてレム睡眠を増やす、強い感情を持ちながら眠るといった方法が効果的とされています。',
      },
    },
    {
      '@type': 'Question',
      name: '正夢の意味は何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '正夢は、あなたの脳が環境の変化を感じ取っているサイン、または心の深層にある強い願いや不安が反映されたものと考えられます。「直感が鋭くなっている」「本当の気持ちに気づくタイミング」として受け取ることができます。',
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
              予知能力のように感じられるかもしれませんが、心理学や脳科学の視点から見ると、これは私たちの<span className="text-purple-300 font-bold">脳の働きや心のメカニズム</span>として説明ができる、とても興味深い現象なんです。
            </p>
            <p className="mt-4">
              このページでは、正夢の意味・なぜ起きるのか・本当にあるのかという疑問に答えたうえで、<span className="text-purple-300 font-bold">正夢になりやすくする方法</span>まで詳しく解説します。
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
                「科学的に説明できる＝信じなくていい」ではありません。正夢を体験したとき、それはあなたの<span className="text-purple-300 font-bold">直感や観察力が高まっているサイン</span>かもしれないのです。
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
              この<span className="text-purple-300 font-bold">脳内シミュレーションの結果が、偶然現実の出来事とピタリと一致したとき</span>、私たちはそれを「正夢」として認識するのです。つまり、あなたの脳が優秀な予測器として働いた証拠とも言えるかもしれませんね。
            </p>
          </section>

          {/* セクション2: 無意識の洞察 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-purple-400" />
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

          {/* セクション4: 感情と願望 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              あなたの願いや不安が映し出される
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              また、正夢はあなたの強い「願い」や「不安」を反映していることもよくあります。<span className="hidden md:inline"><br /></span>
              「試験に合格したい」「あの人に会いたい」といった強い思いや、「失敗したらどうしよう」という不安は、夢のシナリオを作り出す強力な材料になります。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              その願いが叶ったり、心配事が現実になったりした時、それは予知というよりも、あなたの<span className="text-purple-300 font-bold">心の深層にある思いが現実に引き寄せられた</span>、あるいはその心の準備ができていた、と捉えることもできるでしょう。
            </p>
          </section>

          {/* 正夢になる方法 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-purple-400" />
              正夢になりやすくする方法
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              正夢は「たまたま起こるもの」ではなく、<span className="text-purple-300 font-bold">意識的に起きやすくすることができる</span>と言われています。夢と現実をつなぐ脳のメカニズムをうまく活用してみましょう。
            </p>

            <div className="space-y-6">
              {/* 方法1 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle className="w-7 h-7 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">夢日記をつける</h3>
                  <p className="text-gray-300 leading-relaxed">
                    起きたらすぐにその日の夢をノートやスマホにメモする習慣をつけましょう。夢を「記録する対象」として意識することで、脳が夢の内容をより鮮明に覚えようとするようになります。続けることで、夢と現実のつながりを自分で発見しやすくなります。
                  </p>
                </div>
              </div>

              {/* 方法2 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle className="w-7 h-7 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">就寝前に鮮明にイメージする</h3>
                  <p className="text-gray-300 leading-relaxed">
                    眠る前に、実現させたい場面や出来事を目を閉じて映像として思い浮かべてみましょう。五感（音・香り・触感）を加えるほど効果的です。脳はその情報を材料として夢のシナリオを作りやすくなります。スポーツ選手がイメージトレーニングを行うのと同じ原理です。
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
                  <h3 className="text-xl font-bold text-white mb-2">強い感情・願いを持って眠る</h3>
                  <p className="text-gray-300 leading-relaxed">
                    脳は感情と結びついた記憶・情報を優先して処理します。「どうしても叶えたい」「絶対に会いたい」といった強い気持ちを持って眠ることで、その思いが夢の素材として使われやすくなります。感謝の気持ちや高揚感を感じながら眠りにつくのが効果的です。
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
              正夢は、決して怖い現象や単なるオカルトではありません。<span className="hidden md:inline"><br /></span>
              それは、あなたの脳が情報を処理する過程や、無意識が感じ取っている世界、そしてあなたの心の奥底にある願いが織りなす、とても人間らしい現象です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              もし正夢のような体験をしたら、それは自分の直感や観察力が冴えているサインかもしれませんし、自分の本当の気持ちに気づくチャンスかもしれません。<span className="hidden md:inline"><br /></span>
              夢を記録し、イメージを磨くことで、正夢はより身近な体験になっていくでしょう。
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
                  a: '正夢（まさゆめ）とは、夢で見た出来事がその後現実に起こる現象のことです。心理学的には、脳の予測機能・無意識の洞察・選択的記憶などのメカニズムによって説明されます。',
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
                  a: '夢日記をつけて夢を意識する習慣をつける、就寝前に実現させたいシーンを鮮明にイメージする、睡眠の質を上げてレム睡眠を増やす、強い感情を持ちながら眠るといった方法が効果的とされています。',
                },
                {
                  q: '正夢の意味は何ですか？',
                  a: '正夢は、あなたの脳が環境の変化を感じ取っているサイン、または心の深層にある強い願いや不安が反映されたものと考えられます。「直感が鋭くなっている」「本当の気持ちに気づくタイミング」として受け取ることができます。',
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
