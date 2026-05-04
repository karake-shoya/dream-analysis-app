import { Metadata } from 'next';
import { Smile, Brain, Search, AlertCircle, BookOpen } from 'lucide-react';
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
      name: '歯が抜ける夢は不吉なサインですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '必ずしも不吉ではありません。歯が抜ける夢は、自信の揺らぎや変化への不安、コミュニケーションへの緊張が高まっているときに見やすい夢です。「今の自分の状態を見直すサイン」として受け取ることで、日常の何かに気づくきっかけになることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '歯が次々と抜ける夢と1本だけ抜ける夢では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '心理学的には、抜け方の規模が「不安の強度」と関連しやすいと言われます。1本だけ抜ける夢は局所的な緊張や小さな自信の揺らぎを、次々と抜ける夢はより広い範囲での喪失感や大きな変化への不安を象徴することがあります。ただし夢の解釈は夢全体の雰囲気や目覚めたときの感情も重要です。',
      },
    },
    {
      '@type': 'Question',
      name: '繰り返し歯が抜ける夢を見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、繰り返す夢はその象徴するテーマがまだ解消されていないサインとされています。自信の喪失・コミュニケーションへの不安・大きな変化への恐れといった課題が、意識の上では処理されていても、深層心理では残り続けているときに繰り返されることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '歯が抜ける夢を見た翌日にできることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目覚めたとき感じた感情（怖かった、痛かった、意外と平気だったなど）を短くメモしておくのがおすすめです。次に「最近自信が揺らいでいることや、避けているコミュニケーションはないか」を静かに問いかけてみてください。答えが出なくても、問い自体が深層心理に働きかけます。',
      },
    },
    {
      '@type': 'Question',
      name: '歯が抜ける夢を見やすい人はどんな人ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '人生の転換期（就職・転職・引越・進学・離別など）を迎えている人、対人関係で気を遣いすぎている人、完璧主義で失敗を恐れやすい人がこの夢を見やすい傾向があります。また、日中に抑圧したストレスが睡眠中に表れやすいため、感受性が高く物事を深く考えるタイプにも多く見られます。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '歯が抜ける夢の意味とは？心理学が示す不安・自信・変化の深層心理',
  description:
    '歯が抜ける夢を見た意味を心理学的に解説。自信の喪失・コミュニケーションへの不安・人生の変化期のサインとして現れやすい理由、ユング心理学の観点、歯が折れる・次々と抜けるなどシーン別の意味まで詳しく紹介します。',
  alternates: { canonical: '/column/falling-teeth-dream' },
  openGraph: {
    title: '歯が抜ける夢の意味とは？心理学が示す不安・自信・変化の深層心理 | Yume Insight',
    description:
      '歯が抜ける夢を見た意味を心理学的に解説。自信の喪失・コミュニケーションへの不安・人生の変化期のサインとして現れやすい理由、ユング心理学の観点、歯が折れる・次々と抜けるなどシーン別の意味まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function FallingTeethDreamPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        title="歯が抜ける夢の意味とは"
        subtitle="自信・変化・コミュニケーション——深層心理が映し出すもの"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              目が覚めたとき、口の中に手を当てて確認してしまった——歯が抜ける夢を見た後、そんな経験をした人は少なくないはずです。あの妙にリアルな感触と、目覚めてからもしばらく残る後味の悪さは、夢の中でも特に強く印象に残る体験のひとつです。
            </p>
            <p className="mb-4">
              歯が抜ける夢は、世界中で非常に多くの人が見る夢のひとつとして知られています。日本でも「夢占い」として最もよく検索されるテーマのひとつです。なぜこれほど多くの人が同じような夢を見るのか——その背景には、<span className="text-purple-300 font-bold">歯が持つ深い心理的な象徴性</span>があります。
            </p>
            <p>
              本記事では、歯が抜ける夢が示す心理学的な意味を、ユング心理学の視点を軸にしながらわかりやすく解説します。シーン別の読み解き方や、夢を日常のセルフケアに活かすヒントまでまとめました。
            </p>
          </div>

          {/* セクション1: 基本的な意味 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Smile className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              歯が抜ける夢が示す3つの心理テーマ
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              夢に登場する「歯」は、心理学的にいくつかの重要なテーマと結びついています。歯が抜けるという体験は、それらのテーマが揺らいでいることを示すサインとして解釈されます。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 自信・自己評価の揺らぎ</h3>
                <p className="text-gray-300 leading-relaxed">
                  歯は「噛む力」「食べる力」として、生命力や積極性のシンボルとして機能します。歯が抜けるということは、その力が失われるイメージです。心理学的には、<span className="text-purple-300 font-bold">自信の喪失や自己評価の低下</span>と関連しやすいとされています。プレゼンや試験、面接など「評価される場面」を前に見やすいのも、このためです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② コミュニケーションへの不安</h3>
                <p className="text-gray-300 leading-relaxed">
                  口と歯は言葉を発するための器官です。夢の中で歯が抜けると、言葉がうまく出なくなる感覚を伴うことがあります。これは<span className="text-purple-300 font-bold">「うまく伝えられないかもしれない」「誰かを傷つけてしまうかもしれない」</span>という対人コミュニケーションへの緊張や恐れを反映していることがあります。言いたいことを我慢していたり、言葉の選び方に気を遣いすぎているときに見やすい夢です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 変化・移行期への不安</h3>
                <p className="text-gray-300 leading-relaxed">
                  乳歯から永久歯への生え変わりは、人生における大きな「変化」の体験です。歯が抜ける夢は、転職・引越し・結婚・別れといった<span className="text-purple-300 font-bold">ライフステージの移行期</span>に見やすいとも言われます。古いものが終わり、新しいものが始まる前の過渡期——そのざわめきを夢が映し出しているのかもしれません。
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
              ユング心理学から読み解く「歯」の象徴
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              スイスの心理学者カール・グスタフ・ユングは、夢に登場するイメージはすべて何らかの象徴として機能すると考えました。「歯」という身体的なパーツが夢に現れるとき、そこにはどのような深層心理のメッセージが込められているのでしょうか。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">歯は「力」と「攻撃性」の元型的シンボル</h3>
              <p className="text-gray-300 leading-relaxed">
                ユング心理学では、歯は「食いつく力」「噛み砕く力」として、自我の強さや積極的なエネルギーを象徴することがあります。特に「噛む」という行為は、何かを消化し、自分のものにしていく力を意味します。歯が抜けるということは、そのような力が使えなくなっている、あるいは失われていく感覚を無意識が表現しているとも解釈できます。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">シャドウと歯が抜ける夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユングが提唱した「シャドウ」とは、自分が意識的に認めたくない側面——弱さ、不安、怒り——が無意識に抑圧されたものです。自信を持てない自分、うまくやれない自分を認めたくないとき、その抑圧されたシャドウが「歯が抜ける」という夢のイメージとなって現れることがあります。夢は「否定している自分の一面」を映す鏡でもあるのです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">個性化プロセスと「喪失」の意味</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユングの「個性化（Individuation）」のプロセスでは、古い自己像を手放すことが成長の一部とされています。歯が抜ける夢を「喪失」のみとして捉えず、<span className="text-purple-300 font-bold">「何かが終わり、新しい段階へ向かう前触れ」</span>として受け取ることもできます。乳歯が抜けて永久歯が生えてくるように、古い自己の一部が終わることは次の成長を意味するかもしれません。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: シーン別 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き——どんな状況で抜けたか
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              歯が抜ける夢といっても、そのシーンはさまざまです。「どのように抜けたか」「どんな感情だったか」によって、夢が伝えようとしているメッセージは変わってきます。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">歯が1本だけ抜ける夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  局所的な緊張や、特定の場面での自信の揺らぎを反映しやすいパターンです。「この仕事の件だけ」「あの人との関係だけ」といった、ピンポイントな不安が夢に現れていることが多いです。深刻に受け止めすぎず、「どの場面で自信がなかったか」を静かに振り返ってみましょう。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">歯が次々と抜け落ちる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  より広い範囲での喪失感や、複数の不安が積み重なっているサインと解釈されることが多いです。生活全体にわたる大きな変化や、長期間抑圧されてきたストレスが一気に表れているかもしれません。夢の後に感じた感情（恐怖・絶望・諦め）も、今の心理状態を探るヒントになります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">歯が折れる・欠ける夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  「完全に失う」のではなく「欠けた状態になる」という点で、完全な喪失より手前の緊張を示すことがあります。完璧主義な傾向がある人が、「少しミスをしてしまった」「自分に欠点がある」という感覚から見やすいパターンです。完璧でない自分を許せているかどうかを、この夢が問いかけているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">歯が抜けて血が出る夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  血は生命エネルギーや感情の強度を象徴することがあります。血が出る夢は、その喪失感や変化への不安がより感情的に強く体験されていることを示すかもしれません。ただし、夢の中の血が必ずしも「悪いこと」を意味するわけではなく、エネルギーの放出や感情の解放として中立的に解釈されることもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">歯が抜けても痛くない・すっきりした夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で「痛みがない」「むしろ解放された感覚がある」という場合、ユング的には個性化プロセスの一部として肯定的に解釈できることがあります。古い何かを手放したことへの安堵や、変化を受け入れ始めている内面の動きが表れているかもしれません。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション4: 見やすい時期・心理状態 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <AlertCircle className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              歯が抜ける夢を見やすい時期・心理状態
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              特定の状況にあるとき、歯が抜ける夢を見やすくなると言われています。自分の状況と照らし合わせてみてください。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">人生の転換期・変化が重なっているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  就職・転職・引越し・進学・結婚・離別など、生活の大きな変化が訪れる時期は、歯が抜ける夢を見やすくなります。変化は喜ばしいことであっても、深層心理はその不確実性に敏感に反応します。未知の状況への緊張が、夢の中で「喪失」のイメージとして現れるのです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">評価される場面を前に緊張しているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  試験・面接・プレゼン・発表会など、他者から評価される場面を控えているとき、この夢を見やすいと言われています。「うまくできるだろうか」「失敗したらどうしよう」という緊張が、自信（歯）が抜けるイメージとして夢に出てきます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">人間関係でストレスを抱えているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  言いたいことが言えない関係、気を遣いすぎている状況、誰かとうまくコミュニケーションできていない感覚があるとき、歯（=言葉を出す器官）が抜ける夢として現れることがあります。「本音を伝えられていない」という深層心理のフラストレーションが夢に出ているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">長期間のストレスや疲労が続いているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  慢性的なストレスや睡眠不足・疲労が続くと、夢の内容がネガティブになりやすいことがわかっています。歯が抜ける夢が繰り返し出てくる場合、それは「そろそろ立ち止まって休む必要がある」というシグナルである可能性があります。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに——夢のメッセージを受け取るために
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              歯が抜ける夢は、世界中の多くの人が体験する夢です。それは、自信・コミュニケーション・変化という、人間が誰でも向き合うテーマと深く結びついているからかもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              この夢を見たとき、「縁起が悪い」と決めつけるより、<span className="text-purple-300 font-bold">「今の自分の状態を確認するきっかけ」</span>として使えると、夢との付き合い方が変わります。目覚めたときの感情をそのまま受け取り、「何に自信をなくしているか」「何を言えずにいるか」「今どんな変化の中にいるか」を静かに問いかけてみてください。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢は問いを投げかけるが、答えを押しつけるものではありません。ユング的に言えば、夢に注意を向け、その問いと向き合うこと自体が、内面の成長につながっていきます。
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
          href="/column/nightmare"
          className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">😰</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">怖い夢・悪夢が続くときの読み解き方も確認しませんか？</p>
              <p className="text-xs text-gray-400 mt-0.5">深層心理が示す不安のサインと対処法</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA
        title="歯が抜ける夢の内容をより詳しく分析したい方へ"
        description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。シーンや感情も含めて入力してみてください。"
      />
    </ContentPageLayout>
  );
}
