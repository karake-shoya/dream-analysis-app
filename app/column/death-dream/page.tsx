import { Metadata } from 'next';
import { Moon, Brain, Search, Sparkles, BookOpen } from 'lucide-react';
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
      name: '死ぬ夢は不吉なサインですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '心理学的には不吉な予兆ではありません。死ぬ夢は「何かが終わり、新しいものが始まる」変化のシンボルとしてユング心理学では解釈されます。古い自己像・習慣・関係パターンが終わりを迎えるタイミングに見やすく、変容・再生のプロセスを示すことが多い夢です。',
      },
    },
    {
      '@type': 'Question',
      name: '自分が死ぬ夢と、誰かが死ぬ夢では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自分が死ぬ夢は自己変容・古い自分の終わりを、誰かが死ぬ夢はその人が象徴するもの（関係・感情・役割）の終わりや変化を示すことがあります。夢の中で誰かが死んでも、現実のその人への予言ではなく、自分の内面にあるその人への感情や関係性の変化を映していることが多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '死んだ後に別の場所で生きている夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '死後も別の形で生き続ける夢は、再生・変容・新しいステージへの移行を象徴することが多く、ユング的には個性化プロセスにおける「古い自己の死と新しい自己の誕生」として肯定的に解釈されます。',
      },
    },
    {
      '@type': 'Question',
      name: '死ぬことへの恐怖を感じる夢と、安らかな死の夢では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夢の中の感情は重要な手がかりです。恐怖を感じる死の夢は、変化への抵抗・失う恐れ・コントロールを手放せない状態を、安らかな死の夢は変化を受け入れる準備ができている・古いものへの執着を手放せる状態を示すことがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '死ぬ夢を見て目が覚めた後、何かすべきことはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目覚めた直後の感情（恐怖・安堵・混乱など）と、夢のシーンを短くメモしておきましょう。次に「今の自分の生活で何かが終わろうとしているか」「変えたいと思っているのに変えられていないことはあるか」を静かに問いかけてみてください。死の夢は「終わり」だけでなく「始まり」のメッセージであることが多いです。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '死ぬ夢の意味とは？不吉ではない理由と変容・再生を示す深層心理をユング心理学で解説',
  description:
    '死ぬ夢を見た意味を心理学的に解説。不吉な予兆ではない理由、ユング心理学における「死と再生」の象徴、自分が死ぬ夢・誰かが死ぬ夢・死後に生きている夢など状況別の意味まで詳しく紹介します。',
  alternates: { canonical: '/column/death-dream' },
  openGraph: {
    title: '死ぬ夢の意味とは？不吉ではない理由と変容・再生を示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '死ぬ夢を見た意味を心理学的に解説。不吉な予兆ではない理由、ユング心理学における「死と再生」の象徴、自分が死ぬ夢・誰かが死ぬ夢・死後に生きている夢など状況別の意味まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function DeathDreamPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        title="死ぬ夢の意味とは"
        subtitle="終わりではなく変容のサイン——深層心理が告げること"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              夢の中で自分が死ぬ——目が覚めたとき、しばらく現実かどうかわからないような感覚が残る。こんな夢を見た後、「縁起が悪い」「何か悪いことが起きる前触れでは」と不安になる人は多いかもしれません。
            </p>
            <p className="mb-4">
              しかし心理学的に見ると、死ぬ夢は最も頻繁に誤解される夢のひとつです。<span className="text-purple-300 font-bold">ユング心理学において「夢の中の死」は終わりではなく変容のシンボル</span>であり、新しいステージへの移行を告げることが多いとされています。
            </p>
            <p>
              本記事では、死ぬ夢・死の夢が持つ心理学的な意味を、ユング心理学の視点から丁寧に解説します。シーン別の読み解き方や、この夢を自己理解に活かすヒントもまとめました。
            </p>
          </div>

          {/* セクション1: 基本的な意味 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Moon className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              死ぬ夢が示す3つの心理テーマ
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              死ぬ夢は怖い体験ですが、その意味は「現実の死の予兆」ではありません。心理学的に見ると、この夢にはいくつかの共通するテーマが見えてきます。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 変化・移行——古いものが終わり、新しいものが始まる</h3>
                <p className="text-gray-300 leading-relaxed">
                  死ぬ夢が最もよく示すのは、<span className="text-purple-300 font-bold">人生における大きな変化や移行期</span>のサインです。転職・卒業・別れ・引越し・ライフスタイルの変容など、「これまでの自分が終わり、次の自分が始まる」タイミングに見やすい夢です。「古い自己の死」は「新しい自己の誕生」と表裏一体なのです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 手放しと解放——何かへの執着を終わらせるタイミング</h3>
                <p className="text-gray-300 leading-relaxed">
                  古い習慣・思考パターン・人間関係・役割への執着を手放す必要があるとき、深層心理はそれを「死」というイメージとして表現することがあります。「もうそれに縛られなくていい」という無意識のメッセージが、夢の中の死として現れているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 過負荷・燃え尽き——限界に達しているサイン</h3>
                <p className="text-gray-300 leading-relaxed">
                  強いストレス・慢性的な疲労・燃え尽き感が続いているとき、「このままでは限界だ」という深層心理のSOSが「死ぬ夢」として現れることもあります。この場合は変容のメッセージというより、<span className="text-purple-300 font-bold">今の自分を立ち止まらせるシグナル</span>として受け取ることが大切です。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: ユング心理学 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学における「死と再生」の象徴
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              カール・グスタフ・ユングは、夢の中の「死」を文字通りの死として解釈せず、<span className="text-purple-300 font-bold">心理的な変容・脱皮・再生</span>の象徴として捉えました。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">死は個性化プロセスの一部</h3>
              <p className="text-gray-300 leading-relaxed">
                ユングの「個性化（Individuation）」のプロセスでは、「古い自己像の死」が成長には不可欠とされています。子どもの自己が死んで大人になる、社会的役割に縛られた自己が死んでより本質的な自分になる——これらは文字通りの死ではなく、<span className="text-purple-300 font-bold">心理的な脱皮</span>のプロセスです。夢の中の死は、そのプロセスが今まさに進んでいるサインかもしれません。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">神話と元型における「死と再生」</h3>
                <p className="text-gray-300 leading-relaxed">
                  世界中の神話・宗教・物語には、「死んで生き返る」「地下世界を旅して戻る」元型的なテーマが繰り返し登場します（オシリス、イザナミ、キリスト等）。ユングはこれを集合的無意識に刻まれた人類共通の変容のパターンと考えました。死ぬ夢には、この普遍的な「死と再生」の元型が宿っている可能性があります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">「何が死んでいるか」を問う</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユング派のアプローチでは、死ぬ夢を見たとき「誰が（何が）死んだか」「それは自分のどんな側面を象徴しているか」を問います。古い職業アイデンティティ・過去の人間関係の形・特定の思い込みや役割——「死んだもの」を特定することで、今自分のどの部分が変化しようとしているかが見えてきます。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: シーン別 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き——どんな死の夢だったか
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">自分が死ぬ夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  最も多いパターンです。現在の自己像・役割・生き方が変化しようとしているサインとして解釈されます。怖い感情を伴う場合は変化への抵抗が強く、穏やかな感情を伴う場合は変化を受け入れる準備ができていることを示します。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">誰かが死ぬ夢（知人・家族・友人）</h3>
                <p className="text-gray-300 leading-relaxed">
                  現実のその人への予言や悪い予兆ではありません。ユング的には、死んだ人物が象徴するもの（関係・感情・自分の中のある側面）の変化を示します。親が死ぬ夢は親への依存からの自立を、友人が死ぬ夢はその関係の変質や友人が体現する価値観との別れを示すことがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">死んだ後も別の場所で生きている夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  死後に別の世界・別の形で生き続ける夢は、変容と再生を最もストレートに示すパターンです。「古い自分が終わり、新しい自分が始まる」プロセスの只中にいることを深層心理が告げているのかもしれません。ユング的には個性化プロセスの重要な局面を示すことがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">事故・病気・殺されるなど、原因がある死</h3>
                <p className="text-gray-300 leading-relaxed">
                  「何によって死ぬか」も解釈の手がかりになります。事故による死は予期せぬ変化への恐れを、病気による死は慢性的な消耗や長期的なストレスを、誰かに殺される死はシャドウ（自分の否定している側面）との衝突を反映することがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">亡くなった人が夢に出てくる</h3>
                <p className="text-gray-300 leading-relaxed">
                  現実ですでに亡くなっている人（祖父母・知人など）が夢に出てくる場合は、「死ぬ夢」とは少し異なるテーマです。その人への思いがまだ整理されていない場合や、その人が象徴していた価値観・関係を今の自分が必要としているサインとして解釈されることがあります。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション4: 見やすい時期 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              死ぬ夢を見やすい時期・心理状態
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">人生の大きな転換点</h3>
                <p className="text-gray-300 leading-relaxed">
                  就職・転職・卒業・結婚・離婚・引越し・出産など、「これまでの生活が終わり、新しい生活が始まる」タイミングに死ぬ夢は出やすくなります。変化への期待と不安が交差するこの時期に、深層心理は「変容」を夢の中の死として表現します。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">強いストレス・燃え尽き感が続くとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  長期間にわたるストレス・疲労・燃え尽き感が解消されないとき、深層心理が「このままでは限界だ」とSOSを発することがあります。この場合の死ぬ夢は、「立ち止まって休む必要がある」というシグナルとして受け取ることが大切です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">自分を変えようとしているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  新しい習慣を始めようとしている・古い価値観を見直そうとしている・自分らしさを取り戻そうとしているとき、「古い自分の死」が夢として現れることがあります。変化に向けて動いているポジティブな状態のサインとして解釈できます。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに——死の夢は変容の予告
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              死ぬ夢は怖い体験ですが、ユング心理学の視点ではむしろ「変化が訪れているサイン」として捉えられます。古い自分が終わり、新しい自分が生まれようとしているプロセスを、夢が最も直接的なイメージで表現しているのです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              <span className="text-purple-300 font-bold">夢の中の死を恐れるより、「今の自分の何が変わろうとしているか」に目を向けてみてください。</span>変化を受け入れることへの不安は自然なことですが、その変化の先に成長と新しいステージが待っていることを、夢が伝えようとしているのかもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢は終わりを告げるのではなく、始まりを準備しています。
            </p>
          </section>

          {/* FAQセクション */}
          <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <BookOpen className="w-7 h-7 mr-3 text-purple-400 shrink-0" />
              よくある質問
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

          {/* 参考文献 */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-400">参考文献</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>▸ C.G. Jung, <em>Dreams</em>, Princeton University Press</li>
              <li>▸ C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</li>
              <li>▸ Sigmund Freud, <em>The Interpretation of Dreams</em></li>
              <li>▸ David Fontana, <em>The Secret Language of Dreams</em>, Chronicle Books</li>
            </ul>
          </section>

          {/* 免責事項 */}
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。睡眠や心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a
          href="/column/repeating-dreams"
          className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">🔄</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">同じ夢を繰り返し見ることが気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">繰り返す夢の心理学的な理由と止め方</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA
        title="死ぬ夢の内容をより詳しく分析したい方へ"
        description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな状況で死んだか、目覚めたときの感情も含めて入力してみてください。"
      />
    </ContentPageLayout>
  );
}
