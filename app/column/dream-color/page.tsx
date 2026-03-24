import { Metadata } from 'next';
import { Palette, BookOpen, Brain, Eye, HelpCircle } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '夢の中の色が持つ心理的な意味——色夢と無色夢の違いも解説',
  description:
    '夢の中で印象的な色を見たことはありますか？赤・青・黒・白など、夢に現れる色には心理学的な意味があります。カラー夢とモノクロ夢の違いから各色の象徴まで詳しく解説します。',
  alternates: { canonical: '/column/dream-color' },
  openGraph: {
    title: '夢の中の色が持つ心理的な意味 | Yume Insight',
    description:
      '夢の中で印象的な色を見たことはありますか？赤・青・黒・白など、夢に現れる色には心理学的な意味があります。カラー夢とモノクロ夢の違いから各色の象徴まで詳しく解説します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '夢はカラーで見るものですか、白黒で見るものですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '研究によると、現代人の多くはカラーで夢を見ています。1940〜50年代はモノクロ夢の報告が多かったですが、カラーテレビの普及とともにカラー夢が増加しました。どちらが普通ということはなく、睡眠のタイミングや夢を想起するタイミングによっても異なります。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の中でよく見る色に心理的な意味はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学や色彩心理学では、夢に繰り返し現れる色は現在の感情状態や無意識のテーマを象徴していると考えられています。ただし色の象徴は文化や個人的な経験によって異なるため、「その色がどう感じられたか」という主観的な印象も大切にしながら解釈することが重要です。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の中で赤いものを見たのですが、悪い意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '必ずしも悪い意味ではありません。赤は情熱・生命力・怒りなど強度の高い感情を象徴しますが、夢の中でどう感じたかによって解釈が変わります。温かく感じた赤なら活力や自信の回復を、怖かった赤なら緊張や抑えきれない感情を映しているかもしれません。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の色を覚えていないのですが問題ありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '問題ありません。夢の細部（色・音・触感など）は特に記憶に残りにくいものです。目覚めた直後に「印象的な色はあったか？」と意識的に問いかける習慣をつけると、少しずつ気づきやすくなります。夢日記に「色」の記録欄を設けると効果的です。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の色と現実の気分に関係はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '心理学的には、感情状態が夢の内容（色を含む）に影響するとされています。ストレスが高い時期には赤や黒などの強い色が印象に残りやすく、気持ちが安定しているときには青や緑の穏やかな色が現れやすいという傾向があります。夢日記で色を記録すると、自分の感情サイクルと夢の色の相関が見えてくることがあります。',
      },
    },
  ],
};

export default function DreamColorPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <PageHero
        title="夢の中の色が持つ心理的な意味"
        subtitle="印象に残った色は、心の深層からのメッセージかもしれない"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              「夢の中で、なぜかその色だけが鮮やかに見えた」——夢の記憶が薄れても、ある特定の色の印象だけが残ることがあります。真っ赤な空、深い青い海、白く光る存在、不吉に感じた黒い影……。
            </p>
            <p className="mb-4">
              夢の中の色は、単なる視覚的な情報ではなく、<span className="text-purple-300 font-bold">無意識が感情や心理状態を象徴的に表現したもの</span>と心理学では考えられています。どの色がどんな意味を持つのか、そしてカラーで夢を見る人とモノクロで見る人の違いは何かを、このコラムで解説します。
            </p>
            <p>
              ただし、色の象徴は文化・個人的な経験によって変わります。ここで紹介するのはあくまでも一般的な心理学的解釈の傾向です。「自分にはどう感じられたか」を大切にしながら読んでみてください。
            </p>
          </div>

          {/* セクション1: カラーとモノクロ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              カラーの夢とモノクロの夢——何が違うのか
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              「夢は白黒で見る」と思っている人も多いですが、研究によると実際の割合は時代によって変化しています。1940〜50年代の調査ではモノクロ夢が多かったのに対し、現代ではカラーテレビやスマートフォンの普及とともに、カラーの夢を見る人が大幅に増加しました。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">カラーで夢を見るとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢がカラーで鮮明に見えるときは、一般的に感情的な関与が強い状態とされています。特に特定の色が際立って印象に残る夢は、その色が象徴する感情や心理状態が、今の自分に強く関係しているサインとして読み解けることがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">モノクロの夢を見るとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  白黒の夢はしばしば過去の記憶の再生や、感情が整理されている状態を反映することがあります。また、モノクロの夢を見る人の方が夢の記憶が曖昧なことも多く、睡眠の深さや夢想起のタイミングとも関連していると考えられています。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">「色に気づく」こと自体の意味</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で特定の色が強く印象に残っているなら、それは無意識が「この色（が象徴するもの）に注目してほしい」というサインかもしれません。ユング心理学では、夢の中で際立つ要素ほど、無意識のメッセージとして重要であると考えます。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: 色の意味 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Palette className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢に現れる色の心理的な意味
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              以下は心理学・色彩心理学・ユング心理学などを参考にした、夢の中の色の一般的な象徴的意味です。「感じた印象」との合わせ技で読み解くと、自分の心に近い解釈に近づきます。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">赤——情熱・怒り・生命力</h3>
                <p className="text-gray-300 leading-relaxed">
                  赤は感情の中でも最も強度が高い色とされます。情熱・恋愛・性的エネルギー・怒りなど、抑えきれない感情を象徴することが多いです。夢の中の赤い炎・赤い部屋・赤く染まった空は、今の自分が強い感情エネルギーを持てあましているサインかもしれません。一方で「赤が温かく感じた」なら、生命力や自信の回復を意味することもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">青——静けさ・孤独・内省</h3>
                <p className="text-gray-300 leading-relaxed">
                  青は心理学的に「内向」「静寂」「思慮」と結びつくことが多い色です。夢の中の深い青い海・空・部屋は、内省や孤独感、あるいは冷静に考えたいという無意識の欲求を表すことがあります。明るく澄んだ青は精神的な安定や自由、暗い青は孤独や悲しみと関連することが多いとされます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">黒——恐怖・未知・変容</h3>
                <p className="text-gray-300 leading-relaxed">
                  黒は「闇」「未知」「死」「無意識の深部」を象徴します。夢の中の黒い影・黒い存在・漆黒の空間は、恐怖や不安、あるいは「まだ意識化されていない自分の側面（シャドウ）」を表すことがあります。ユング的には、黒い存在と向き合うことがシャドウの統合への第一歩とも言えます。ただし黒が「心地よい闇」として感じられた場合は、休息・内省・自己との対話を求めているサインとも読めます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">白——純粋・空白・新たな始まり</h3>
                <p className="text-gray-300 leading-relaxed">
                  白は「純粋」「清潔」「空白」「終わりと始まり」を象徴します。夢の中で白い光に包まれる体験や、白い空間に立つシーンは、浄化・解放・新しいスタートへの準備という意味を持つことがあります。一方で、白が「冷たく無機質」に感じられた場合は、孤立感や感情の枯渇を反映していることもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">緑——成長・癒し・均衡</h3>
                <p className="text-gray-300 leading-relaxed">
                  緑は自然・成長・再生・心身のバランスと結びつく色です。夢の中の緑豊かな森・野原・草は、回復を求める無意識の欲求や、精神的な均衡への渇望を表すことがあります。色彩心理学の知見では、ストレスが高まっているときや疲れているとき、緑の夢を見る傾向があるとされています。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">黄色・金色——知性・希望・高揚</h3>
                <p className="text-gray-300 leading-relaxed">
                  黄色は明るさ・知的好奇心・軽快さ、金色は価値・達成・精神的な輝きを象徴します。夢の中に黄金色の光が差し込んだり、金色に輝くものが現れたりする夢は、希望や自己実現のエネルギーの高まりとして読まれます。ユング心理学では「金」は個性化のプロセスにおける自己（セルフ）の象徴としても扱われます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">紫——神秘・変容・直感</h3>
                <p className="text-gray-300 leading-relaxed">
                  紫は精神性・直感・変容・神秘と深く結びつく色です。夢の中の紫色の光・空・衣服は、精神的な探求や直感の高まり、あるいは変容のプロセスにある心理状態を象徴することがあります。日常の合理的な思考から離れ、内面を深く見つめたいという無意識の欲求を映していることもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">オレンジ——創造性・活力・社交性</h3>
                <p className="text-gray-300 leading-relaxed">
                  オレンジは赤の情熱と黄色の明るさが組み合わさった色で、創造的エネルギー・活気・社交性と結びつきます。夢の中のオレンジ色の光・炎・物体は、創造的な意欲が高まっているサインや、新しい人間関係・コミュニティへの渇望を表すことがあります。一方でオレンジが「眩しすぎる」「落ち着かない」と感じられた場合は、刺激過多や外向きのエネルギーが過負荷になっていることを反映しているかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">ピンク——愛情・優しさ・感受性</h3>
                <p className="text-gray-300 leading-relaxed">
                  ピンクは愛情・温かさ・繊細な感受性と深く結びつく色です。夢の中のピンク色の空・花・光は、愛情への渇望、自己への優しさ、または誰かへの強い好意を表すことがあります。ユング的には、ピンクはアニマ（男性の中の女性的側面）やインナーチャイルド（内なる子ども）の象徴として現れることがあります。心が傷ついているときや、誰かとのつながりを強く求めているときに見やすい色とされています。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">グレー——不確かさ・中立・移行期</h3>
                <p className="text-gray-300 leading-relaxed">
                  グレーは白と黒の間に位置する色で、不確かさ・曖昧さ・移行・中立を象徴します。夢の中に広がるグレーの空・霧・空間は、決断を迷っている状態、感情が整理されている状態、または「まだどちらでもない」移行期にあることを示すことがあります。グレーが「静かで穏やか」と感じられた場合は、過剰な刺激から距離を置きたいという欲求を映しています。くすんだ重いグレーは停滞感や憂鬱と関連することもあります。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: ユング的読み方 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              色の夢をユング的に読み解くヒント
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              ユングは「夢の象徴は個人的な連想と集合的な象徴の両方から読み解く必要がある」と述べています。色の夢を解釈するときも、一般的な象徴意味だけでなく、「自分にとってその色はどんな感情を呼び起こすか」を優先することが重要です。
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">色の感情的な質感を確認する</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中の色が「暖かかった」「冷たかった」「明るかった」「暗かった」「心地よかった」「不安だった」——こうした質感が、象徴の正負を決める重要な手がかりです。例えば「赤い夢を見て気持ちよかった」なら情熱・活力、「赤い夢を見て怖かった」なら怒りや緊張感といった解釈が自然に浮かびます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">その色を纏っていたのは誰か・何か</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で色が印象的だったのが「人物」であれば、その人物が象徴しているものとセットで解釈します。「黒い服を着た知らない人物」は自分のシャドウかもしれませんし、「白い服の子ども」は自分の純粋な側面や「内なる子ども（インナーチャイルド）」を象徴しているかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">夢日記に「色」の欄を設ける</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢日記に「印象的な色」という記録欄を設けると、数週間後に見返したときに自分のテーマが浮かび上がります。特定の色が繰り返し現れる時期と、実生活の感情的な変化を照らし合わせると、夢が自分の心の状態を映す「鏡」として機能し始めます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">色の変化にも注目する</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で色が変わるシーン——暗闇から光が差し込む、モノクロだったものが急にカラーになる——は、心の状態の転換点を象徴することがあります。ユング的には、こうした色の変容は「意識が何かを受け入れ始めている」サインとして読めます。夢の中の色の変化も積極的に記録しておく価値があります。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢の中の色は、言葉ではなく感覚で届く無意識のメッセージです。「なんとなく印象に残った色」を手がかりに、今の自分の感情や心理状態を問い直してみると、夢が自己理解のツールとして動き始めます。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              色の象徴に正解はありません。大切なのは「この色がどう感じられたか」という自分自身の感覚です。夢日記に色の印象も書き残しながら、自分だけの色の辞書を少しずつ積み上げていってください。
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
                  q: '夢はカラーで見るものですか、白黒で見るものですか？',
                  a: '研究によると、現代人の多くはカラーで夢を見ています。1940〜50年代はモノクロ夢の報告が多かったですが、カラーテレビの普及とともにカラー夢が増加しました。どちらが普通ということはなく、睡眠のタイミングや夢を想起するタイミングによっても異なります。',
                },
                {
                  q: '夢の中でよく見る色に心理的な意味はありますか？',
                  a: 'ユング心理学や色彩心理学では、夢に繰り返し現れる色は現在の感情状態や無意識のテーマを象徴していると考えられています。ただし色の象徴は文化や個人的な経験によって異なるため、「その色がどう感じられたか」という主観的な印象も大切にしながら解釈することが重要です。',
                },
                {
                  q: '夢の中で赤いものを見たのですが、悪い意味がありますか？',
                  a: '必ずしも悪い意味ではありません。赤は情熱・生命力・怒りなど強度の高い感情を象徴しますが、夢の中でどう感じたかによって解釈が変わります。温かく感じた赤なら活力や自信の回復を、怖かった赤なら緊張や抑えきれない感情を映しているかもしれません。',
                },
                {
                  q: '夢の色を覚えていないのですが問題ありますか？',
                  a: '問題ありません。夢の細部（色・音・触感など）は特に記憶に残りにくいものです。目覚めた直後に「印象的な色はあったか？」と意識的に問いかける習慣をつけると、少しずつ気づきやすくなります。夢日記に「色」の記録欄を設けると効果的です。',
                },
                {
                  q: '夢の色と現実の気分に関係はありますか？',
                  a: '心理学的には、感情状態が夢の内容（色を含む）に影響するとされています。ストレスが高い時期には赤や黒などの強い色が印象に残りやすく、気持ちが安定しているときには青や緑の穏やかな色が現れやすいという傾向があります。夢日記で色を記録すると、自分の感情サイクルと夢の色の相関が見えてくることがあります。',
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
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学・色彩心理学の一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <DreamAnalysisCTA
        title="夢の色が気になるときは"
        description="AI夢占いで、夢の詳細な意味を読み解いてみましょう。色・場所・人物など、夢の要素をまとめて入力することで、より深い分析が得られます。"
      />
    </ContentPageLayout>
  );
}
