import { Metadata } from 'next';
import { Heart, Brain, Search, HelpCircle, BookOpen } from 'lucide-react';
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
      name: '元カレ・元カノが夢に出てくるのはまだ好きだからですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '必ずしもそうではありません。ユング心理学では、夢に登場する元恋人は「その人自身」ではなく、その人が象徴する感情・関係パターン・未解決の心理テーマを反映していることが多いとされています。未練がなくても、関係から学んだ何かが夢として現れることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '別れて何年も経つのに元恋人が夢に出てくるのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '時間が経っても夢に出てくる場合、「その元恋人との関係から生まれた感情パターン」が現在の自分の中でまだ生きているサインかもしれません。特に、現在の人間関係や感情面で似たようなテーマ（孤独・信頼・見捨てられ恐怖など）が再び動いているときに、過去の象徴として現れることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '夢で元恋人と仲直りする・抱き合う夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '元恋人と和解・再接触する夢は、その人への未練よりも「その関係で傷ついた部分が癒え始めている」または「自分の中の何かを受け入れようとしている」プロセスを示すことがあります。ユング的には、自分の中のアニマ・アニムスとの和解として解釈されることもあります。',
      },
    },
    {
      '@type': 'Question',
      name: '元恋人が夢に出てきた後、連絡してもいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夢は「連絡すべきかどうか」を教えてくれるものではありません。夢の中の相手は自分の深層心理が作り出した象徴です。連絡を取るかどうかは、夢ではなく現実の状況と自分の意思で判断してください。夢を「衝動の根拠」にするのは避けることをおすすめします。',
      },
    },
    {
      '@type': 'Question',
      name: '今のパートナーがいるのに元恋人の夢を見るのは罪悪感を感じてしまいます',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '罪悪感を持つ必要はありません。夢は意識的に選べるものではなく、深層心理の自然な処理プロセスです。今のパートナーへの愛情と、過去の記憶が夢に出ることは矛盾しません。大切なのは夢の内容ではなく、目覚めているときの現実の行動と気持ちです。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '元カレ・元カノが夢に出てくる意味とは？未練・心理パターン・アニマを心理学で解説',
  description:
    '元恋人が夢に出てくる意味を心理学的に解説。未練とは限らない理由、ユング心理学のアニマ・アニムス、よりを戻す夢・喧嘩する夢など状況別の意味、繰り返し出てくる場合の対処法まで詳しく紹介します。',
  alternates: { canonical: '/column/ex-dream' },
  openGraph: {
    title: '元カレ・元カノが夢に出てくる意味とは？未練・心理パターン・アニマを心理学で解説 | Yume Insight',
    description:
      '元恋人が夢に出てくる意味を心理学的に解説。未練とは限らない理由、ユング心理学のアニマ・アニムス、よりを戻す夢・喧嘩する夢など状況別の意味、繰り返し出てくる場合の対処法まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ExDreamPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        title="元カレ・元カノが夢に出てくる意味とは"
        subtitle="未練だけではない——深層心理が映し出す過去との対話"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              目が覚めたとき、もう会わないはずの元恋人が夢に出てきていた——気持ちが整理できているつもりでも、こんな朝は少し戸惑います。「まだ好きなのかな」「なぜ今さら」と自分を問い詰めてしまう人も少なくないはずです。
            </p>
            <p className="mb-4">
              しかし心理学的には、元恋人が夢に出てくることは「まだその人に未練がある」とは限りません。夢に登場する元恋人は、<span className="text-purple-300 font-bold">「その人自身」ではなく、その関係が象徴する感情や心理パターン</span>のことが多いのです。
            </p>
            <p>
              本記事では、ユング心理学の視点を軸に、元恋人が夢に出てくる心理的な意味を、シーン別に丁寧に解説します。
            </p>
          </div>

          {/* セクション1: 基本的な意味 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              元恋人が夢に出てくる3つの心理的な理由
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              「また夢に出てきた」という体験の背景には、単なる未練以外の心理的なメカニズムが働いていることがほとんどです。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 未処理の感情——まだ整理しきれていないもの</h3>
                <p className="text-gray-300 leading-relaxed">
                  別れ際に感じた後悔、言えなかった言葉、解消しきれなかった怒りや悲しみ——こうした感情が完全に処理されていない場合、夢は「まだここにあるよ」と知らせることがあります。未練（またつき合いたい）とは別の話で、<span className="text-purple-300 font-bold">感情的な完了ができていない</span>状態のサインとして現れます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 関係パターンの再演——今の状況が過去を呼ぶ</h3>
                <p className="text-gray-300 leading-relaxed">
                  現在の人間関係や感情の動きが、過去の恋愛と似た構造になっているとき、深層心理は過去の象徴として元恋人を呼び出すことがあります。「また同じような関係に入っている」「同じ感情のパターンが繰り返されている」という無意識の認識が、元恋人を夢に引き寄せているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 懐かしさと時間の処理——脳の記憶整理</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢は脳が記憶を整理・統合するプロセスとも関連しています。強い感情を伴った過去の体験は記憶に残りやすく、睡眠中にその記憶が処理・再編されるとき、夢として浮かび上がることがあります。必ずしも「今の気持ち」の反映ではなく、<span className="text-purple-300 font-bold">単なる記憶の処理</span>としての側面もあります。
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
              ユング心理学で読み解く——アニマ・アニムスとしての元恋人
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              ユング心理学の最も興味深い観点のひとつは、夢に登場する異性を「その人そのもの」ではなく、自分の内なる異性的側面の象徴として解釈することです。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">アニマ（Anima）とアニムス（Animus）</h3>
              <p className="text-gray-300 leading-relaxed">
                ユングは、男性の無意識には「アニマ」（内なる女性像）、女性の無意識には「アニムス」（内なる男性像）が存在すると考えました。夢の中の元恋人は、その人自身というより、<span className="text-purple-300 font-bold">自分の内なる異性的側面（感情・直感・論理・意志）が人格化されたもの</span>かもしれません。元恋人が夢の中で穏やかだったり攻撃的だったりする場合、それは自分の感情的な状態を映している可能性があります。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">元恋人は「自分の一部」を象徴している</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユング的な夢解析では、夢の登場人物は全員「自分の心の一部」として解釈します。元恋人が夢に出てきたとき、「その人に対して自分は何を感じていたか」「その関係で自分のどんな部分が育ったか・傷ついたか」を問い直すことが、夢を活かす読み方になります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">個性化プロセスと過去の関係</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユングの「個性化（Individuation）」のプロセスでは、過去の関係で経験した感情を統合することが、自己成長の一部とされています。元恋人が夢に繰り返し出てくる場合、その関係から学ぶべきことや統合すべき感情がまだ残っているサインかもしれません。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: シーン別 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き——どんな夢だったか
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">よりを戻す・再会する夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  復縁する夢は、必ずしも「また付き合いたい」という気持ちではなく、「その関係にあった何か（安心感・刺激・自分らしさ）をもう一度感じたい」という欲求を反映することがあります。今の生活で何かが物足りないとき、過去の充実感を象徴する形で元恋人が夢に出ることがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">喧嘩する・責められる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  元恋人と言い争う夢は、その関係で感じた怒り・不満・後悔がまだ完全に消化されていないことを示すことがあります。「あのとき言いたかったこと」「納得できなかったこと」が、夢の中での言い合いとして現れているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">仲良く話す・穏やかな夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  元恋人と穏やかに話す夢は、過去の関係と内面的に和解できてきているサインとして解釈されることがあります。怒りや悲しみが落ち着き、その経験を自分の一部として受け入れられるようになってきた段階かもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">元恋人が別の人と一緒にいる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  元恋人が誰かと付き合っている・幸せそうにしている夢は、嫉妬・喪失感・自己価値の問い直しを反映することがあります。その感情は今の自分の状態を映している可能性も。「自分は幸せになれているか」「自分の価値を認めているか」という問いを夢が立てているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">元恋人と別れる夢（夢の中でまた別れる）</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で再び別れを経験する場合、現実の別れの痛みがまだ処理中である可能性があります。ただし繰り返し別れる夢を見る場合、深層心理がその感情をしっかり消化しようとしているプロセスの表れとも解釈できます。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション4: 繰り返す場合の対処 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              繰り返し出てくる場合——夢との向き合い方
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">夢の中の感情を記録する</h3>
                <p className="text-gray-300 leading-relaxed">
                  元恋人が出てくる夢を見たとき、「夢の中でどんな感情だったか」をメモしておきましょう。嬉しかった・怖かった・悲しかった・怒っていた——その感情が、今の自分の内面状態を映しています。夢日記として記録することで、「いつ」「どんな状況のとき」に出やすいかのパターンも見えてきます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">「その関係から何を学んだか」を問い直す</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユング的なアプローチとして、夢に出てきた元恋人を「自分の内なる象徴」として問いかけてみましょう。「あの人は、私のどんな部分を引き出してくれていたか」「あの関係でどんな感情パターンを学んだか」を振り返ることが、過去の統合につながります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">今の生活で「不足しているもの」を探す</h3>
                <p className="text-gray-300 leading-relaxed">
                  元恋人が繰り返し夢に出る場合、「今の自分の生活で何かが欠けているサイン」として受け取ることもできます。その元恋人との関係で感じていた安心感・ときめき・自由さ・深いつながり——今の生活でそれに似た何かを求めているのかもしれません。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに——過去は心の教材
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              元恋人が夢に出てきても、それはあなたが弱いわけでも、未練がましいわけでもありません。深層心理はその関係から学んだ感情や体験を、丁寧に処理しようとしているだけです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              ユング心理学的には、<span className="text-purple-300 font-bold">過去の関係は「教材」</span>です。元恋人が夢に現れるとき、「あの人ともう一度会いたい」ではなく「あの経験から私はどう成長したか、何をまだ統合できていないか」という問いを立てることが、夢を活かす本来の使い方です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢の中の元恋人は、過去ではなく「今のあなた」を映す鏡です。
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
            </ul>
          </section>

          {/* 免責事項 */}
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。心理的なサポートが必要と感じる場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a
          href="/column/dream-self-care"
          className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">💜</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">夢をセルフケアに活かす方法も読んでみませんか？</p>
              <p className="text-xs text-gray-400 mt-0.5">悪夢・繰り返す夢の心理的な向き合い方</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA
        title="元恋人が出てくる夢の内容をより詳しく分析したい方へ"
        description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんなシーンだったか、どんな感情だったかも含めて入力してみてください。"
      />
    </ContentPageLayout>
  );
}
