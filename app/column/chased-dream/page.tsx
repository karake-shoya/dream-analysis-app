import { Metadata } from 'next';
import { AlertTriangle, Brain, Search, RefreshCw, BookOpen } from 'lucide-react';
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
      name: '追いかけられる夢は悪い意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '必ずしも悪い意味ではありません。追いかけられる夢は、向き合えていない感情・課題・ストレスが無意識から意識化を求めているサインとして解釈されます。怖い体験ではありますが、「今の自分が何を避けているか」に気づくきっかけになることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '追いかけてくる存在が人間の場合と怪物の場合では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学的には、どちらもシャドウ（抑圧された感情や自己像）の象徴ですが、人間の場合は現実の人間関係や具体的な状況との関連が強く、怪物・正体不明の存在の場合はより深い無意識のテーマ（漠然とした恐怖・実体のない不安）を反映しやすいと言われています。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の中で逃げきれた場合と捕まった場合では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '逃げきれた場合は、現実でも回避や先送りが続いている状態を、捕まった場合は「もう逃げられない」という限界点・向き合わざるを得ない局面に来ていることを示す可能性があります。ただし捕まった後の感情（恐怖・安堵・諦め）も解釈の重要な手がかりです。',
      },
    },
    {
      '@type': 'Question',
      name: '追いかけられる夢を繰り返し見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、繰り返す夢はその象徴するテーマが未解決のまま残っているサインです。回避し続けている感情・状況・人間関係が解消されないため、無意識が繰り返し意識化を求めています。そのテーマに意識的に向き合えたとき、繰り返しが止まることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '追いかけられる夢を見た後にできることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目覚めたとき感じた感情（恐怖・焦り・疲労感など）と、追いかけてきた存在の特徴を短くメモしておきましょう。次に「最近何を先送りしているか」「向き合うのが怖いことは何か」を静かに問いかけてみてください。夢日記に記録し続けると、パターンが見えてきます。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '追いかけられる夢の意味とは？心理学が示す回避・恐怖・シャドウの深層心理',
  description:
    '追いかけられる夢を見た意味を心理学的に解説。逃げる夢が繰り返される理由、追いかけてくる存在の正体、ユング心理学のシャドウと回避の関係、逃げきれた場合と捕まった場合の違いまで詳しく紹介します。',
  alternates: { canonical: '/column/chased-dream' },
  openGraph: {
    title: '追いかけられる夢の意味とは？心理学が示す回避・恐怖・シャドウの深層心理 | Yume Insight',
    description:
      '追いかけられる夢を見た意味を心理学的に解説。逃げる夢が繰り返される理由、追いかけてくる存在の正体、ユング心理学のシャドウと回避の関係、逃げきれた場合と捕まった場合の違いまで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ChasedDreamPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        title="追いかけられる夢の意味とは"
        subtitle="逃げ続けるとき、深層心理は何を伝えようとしているのか"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              何かに追いかけられて必死に逃げている——目が覚めたとき、まだ心臓がどきどきしていることがある。追いかけられる夢は、歯が抜ける夢と並んで世界中で最も多く報告される夢のひとつです。
            </p>
            <p className="mb-4">
              追いかけてくる相手は、見知らぬ人間のこともあれば、怪物や動物のこともある。必死に走っているのに足が思うように動かない、叫ぼうとしても声が出ない——そんなもどかしい体験をした人も多いはずです。
            </p>
            <p>
              この夢が繰り返し出てくるとき、ユング心理学は「逃げていること自体に意味がある」と捉えます。追いかけてくる存在は外から来る脅威ではなく、<span className="text-purple-300 font-bold">自分の内側から向き合いを求めているものの象徴</span>かもしれません。本記事では、追いかけられる夢の心理学的な意味を、具体的なシーン別に丁寧に解説します。
            </p>
          </div>

          {/* セクション1: 心理テーマ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              追いかけられる夢が示す3つの心理テーマ
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              追いかけられる夢は、単なる恐怖体験ではありません。夢の中で「逃げる」という行動が繰り返されるとき、そこには共通する心理的なテーマが見え隠れしています。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 回避と先送り——向き合えていないものがある</h3>
                <p className="text-gray-300 leading-relaxed">
                  追いかけられる夢の最も一般的な解釈は、<span className="text-purple-300 font-bold">現実で避けている何か</span>との関係です。解決できていない問題、先送りし続けているタスク、誰かとの関係で避けている会話——こういった「向き合えていないもの」が、夢の中で追いかけてくる存在として現れることがあります。夢が「もうそろそろ逃げていられないよ」とメッセージを送っているのかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② ストレスと過負荷——追い詰められている感覚</h3>
                <p className="text-gray-300 leading-relaxed">
                  仕事や人間関係のプレッシャーが強い時期、「常に何かに追われている」感覚を持ちながら生活していると、それが夢の中でそのままイメージとして出てくることがあります。締め切り・責任・他者の期待——これらが「追いかけてくる存在」として具現化されます。夢の後の疲労感が強い場合、現実の負荷も限界に近い可能性があります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 変化への恐れ——新しいステージへの抵抗</h3>
                <p className="text-gray-300 leading-relaxed">
                  人生の大きな変化（転職・引越し・関係の変容）が近づいているとき、その変化自体を「脅威」として無意識が捉えることがあります。変化は望んでいることであっても、深層心理はその不確かさに反応します。「変化から逃げたい」という感情が、追いかけられる夢として表れることがあります。
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
              ユング心理学で読み解く「追いかけてくる存在」の正体
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              カール・グスタフ・ユングは、夢に登場する人物や存在はすべて自分の内面の一部を象徴すると考えました。追いかけてくる存在は「外敵」ではなく、自分自身の無意識から生まれたイメージです。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">シャドウ（Shadow）——追いかけてくるのは「自分の一部」</h3>
              <p className="text-gray-300 leading-relaxed">
                ユングが提唱した「シャドウ」とは、自分が認めたくない感情・衝動・弱さが無意識に押し込められた人格の一部です。怒り、嫉妬、恐れ、羞恥心——「こんな自分はいない」と否定し続けた部分がシャドウとして積み重なっていきます。追いかけられる夢においてシャドウは、追いかけてくる存在として現れます。それは外から来る敵ではなく、<span className="text-purple-300 font-bold">「向き合ってくれ」と訴えている自分の一側面</span>なのです。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">逃げることは「否定」を続けること</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で逃げ続けるということは、心理学的には「そのシャドウを見ない・向き合わないという選択」を続けていることの反映です。ユングは、シャドウを否定し続けることはエネルギーの消耗であり、長期的には精神的な疲労や無力感につながると考えました。逆に言えば、追いかけてくる存在に向き合い、それを受け入れる勇気が、解放への道になります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">夢の中で「立ち止まる」という選択</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユング派のセラピーでは、繰り返す追いかけられる夢に対して「次に同じ夢を見たら、逃げずに立ち止まって振り返ってみてください」と伝えることがあります。これは、明晰夢（ルシッドドリーム）でなくとも、目覚めた後にその場面を想像し直す「積極的想像法（Active Imagination）」でも試せます。夢の中の存在に「あなたは何者か」と問いかけることが、シャドウの統合につながります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">アニマ・アニムスが追いかけてくる場合</h3>
                <p className="text-gray-300 leading-relaxed">
                  追いかけてくるのが異性の人物である場合、ユング心理学では「アニマ（男性の内なる女性像）」または「アニムス（女性の内なる男性像）」との関係が示唆されることがあります。自分の中の感情的な側面（アニマ）や論理的・意志的な側面（アニムス）が、未統合のまま「押しつけてくる存在」として夢に現れるのです。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: シーン別 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き——誰に・どう追われたか
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              追いかけてくる存在の種類や、夢の結末によって、深層心理が伝えようとしているメッセージは変わってきます。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">知らない人間に追いかけられる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  「誰かわからない人」に追いかけられる場合、それは特定の人物ではなく漠然とした脅威や不安の象徴であることが多いです。正体がわからないぶん恐怖は大きくなりやすく、「何から逃げているのかよくわからないまま追い詰められている」という状態を反映しているかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">知っている人に追いかけられる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  現実で知っている人（上司・親・元交際相手など）に追いかけられる場合、その人との関係でプレッシャーや未解決の問題を感じている可能性があります。ユング的には、その人は問題そのものではなく、自分の中にある「その人に対する感情（怒り・恐れ・期待）」を象徴していることが多いです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">怪物・動物に追いかけられる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  怪物や巨大な動物（クマ、ライオン、得体のしれない生き物）に追いかけられる場合、より原始的・本能的な恐怖や、コントロールできない衝動が象徴されることがあります。ユング的には「集合的無意識」から来る元型（アーキタイプ）的なイメージである可能性も。長期間の強いストレス・抑圧が続いているときに出やすいパターンです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">逃げきれた夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の中で無事に逃げきれた場合、現実でも「まだ回避を続けられる」と感じているか、あるいは問題から一時的に距離を置くことに成功している状態を反映することがあります。ただし逃げることが「解決」ではないため、現実で回避が続いている場合は繰り返し同様の夢を見やすくなります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">捕まった・追い詰められた夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  捕まったり、行き止まりに追い詰められたりした場合、「もうこれ以上逃げられない」という限界点にいることを深層心理が感じているサインかもしれません。ユング的には、これをネガティブに捉えるより、「向き合う準備ができてきた」段階として解釈することもできます。捕まった後の感情（恐怖・安堵・諦め）も重要な手がかりです。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション4: 繰り返す理由と向き合い方 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <RefreshCw className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              繰り返し見る理由と、夢との向き合い方
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              追いかけられる夢が何度も続く場合、深層心理が特に強くそのテーマを訴えている状態です。繰り返しを止めるためのアプローチを紹介します。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">夢の内容と感情を記録する</h3>
                <p className="text-gray-300 leading-relaxed">
                  目覚めた直後に、追いかけてきた存在の特徴・逃げているときの感情・結末を短くメモしておきましょう。記録を続けると、「この種のストレスが高まっているときに出やすい」というパターンが見えてくることがあります。夢を客観的に観察できるようになると、怖さも少し和らぎます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">「何から逃げているか」を現実で問い直す</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢とは別に、起きている時間に「最近先送りしていることは何か」「避けている会話や決断はないか」を静かに問いかけてみましょう。具体的なものが浮かんだら、それが「追いかけてくる存在」の正体かもしれません。小さな一歩でいいので、向き合うアクションを取ることが繰り返しを減らす近道です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">積極的想像法で夢を書き直す</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユング派の技法「積極的想像法（Active Imagination）」では、目覚めた状態で夢の続きを想像し直すことができます。「もし逃げずに立ち止まって振り返ったら？」と想像の中で試してみてください。追いかけてくる存在に「あなたは何者か、私に何を伝えたいのか」と問いかけるイメージワークは、シャドウとの対話として機能します。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">睡眠・ストレスの状態を整える</h3>
                <p className="text-gray-300 leading-relaxed">
                  慢性的なストレス・睡眠不足・過労が続いているとき、追いかけられる夢が出やすくなります。心理的な向き合いと並行して、睡眠リズムの安定・就寝前のルーティン・運動による発散といった基本的なケアも有効です。夢は心の状態を映す鏡——まず体のコンディションを整えることも大切です。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに——逃げ続けることをやめたとき
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              追いかけられる夢は怖い体験ですが、ユング心理学の視点では「自分の中の何かが、ついに声をあげた」瞬間として捉えることができます。追いかけてくる存在は敵ではなく、長い間無視し続けた自分の一部かもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              逃げ続ける夢が繰り返されるなら、それは「もうそろそろ向き合う時が来ている」というサインです。夢の中ではなく、目が覚めた後の日常の中で、<span className="text-purple-300 font-bold">「自分が避けているもの」に小さく向き合ってみること</span>——それが繰り返しの夢を和らげる、最も根本的なアプローチです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢は答えを与えてくれるものではありませんが、問いを立てるきっかけをくれます。追いかけられる夢を見たとき、「怖かった」で終わらせず、「何から逃げていたのか」と一度だけ問いかけてみてください。
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
          href="/column/falling-teeth-dream"
          className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">🦷</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">歯が抜ける夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">自信・変化・コミュニケーション——深層心理が映し出すもの</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA
        title="追いかけられる夢の内容をより詳しく分析したい方へ"
        description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。追いかけてきた存在や逃げているときの感情も含めて入力してみてください。"
      />
    </ContentPageLayout>
  );
}
