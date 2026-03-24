import { Metadata } from 'next';
import { NotebookPen, Heart, Wand2, MessageCircle, BookOpen } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '見た夢を人に話すと良い？心理的な効果｜夢をセルフケアに活かす3つの方法',
  description:
    '夢を占いとしてだけでなく、セルフケアのツールとして活用する方法を紹介します。夢日記・感情の読み解き・繰り返す夢への向き合い方——特別な知識なしで今日から始められます。',
  alternates: { canonical: '/column/dream-self-care' },
  openGraph: {
    title: '見た夢を人に話すと良い？心理的な効果｜夢をセルフケアに活かす3つの方法 | Yume Insight',
    description:
      '夢を占いとしてだけでなく、セルフケアのツールとして活用する方法を紹介します。夢日記・感情の読み解き・繰り返す夢への向き合い方——特別な知識なしで今日から始められます。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function DreamSelfCarePage() {
  return (
    <ContentPageLayout>
      <PageHero
        title="夢をセルフケアに活かす方法"
        subtitle="見た夢を人に話すと良い？心理的な効果"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              「夢占いって、当たる当たらないの話でしょ？」と思っている人に、少し違う視点をお伝えしたいと思います。
            </p>
            <p className="mb-4">
              夢を活用する方法は、占いとしての使い方だけではありません。見た夢を手がかりに、今の自分の状態を知ったり、気持ちを整理したりする——そういう使い方が、じつはセルフケアとしてとても相性がいいのです。
            </p>
            <p>
              ユング心理学では、夢は「無意識からの手紙」と考えられています。その手紙をどう受け取り、どう活かすか。特別な知識がなくてもできる<span className="text-purple-300 font-bold">4つのアプローチ</span>を、ユング的な視点も交えて紹介します。
            </p>
          </div>

          {/* セクション1: 夢日記 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <NotebookPen className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              1. 夢日記で「心のパターン」を可視化する
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              最もシンプルで効果的な方法が、夢日記をつけることです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              やり方は難しくなくて、朝目が覚めたらすぐ、夢の内容と目覚めたときの感情を短くメモするだけです。スマートフォンのメモアプリでも、枕元に置いた手帳でも、形式はなんでも構いません。大事なのは「すぐ書く」こと。夢の記憶は起きてから数分で急速に薄れていくので、後で書こうと思っていると大半が消えてしまいます。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              続けていくと、自分でも気づいていなかったパターンが見えてきます。「仕事が立て込んでいる週は追いかけられる夢をよく見る」「体が疲れているときは夢の感情がネガティブになりやすい」——そういった傾向が数週間のメモから浮かび上がってくることがあります。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              ユングも夢日記を非常に重視し、自身の夢を長年にわたって記録し続けました。夢日記の目的は、夢を解読することではありません。夢を記録することで、自分のコンディションの変化に早めに気づくための<span className="text-purple-300 font-bold">「心のモニタリングツール」</span>として使うのが、いちばん実用的な活用法です。
            </p>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: ユング式・感情から読む */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              2. ユング式・感情から「今の自分のテーマ」を読む
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢の内容そのものより、夢の中で感じた感情に注目してみてください。ここにユング的なアプローチが活きてきます。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              ユングは夢に登場するさまざまな要素——人物、場所、行動——が、自分の心の何らかの側面を象徴していると考えました。特に重要なのが「シャドウ（Shadow）」と「アニマ／アニムス」という概念です。
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-purple-900/20 border border-purple-500/20">
                <h3 className="text-lg font-bold text-purple-200 mb-2">シャドウ（Shadow）として読む</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢に出てくる怖い存在、嫌いな人物、自分に危害を加える何か——これらはしばしば「シャドウ」として解釈できます。シャドウとは、自分が意識的に認めたくない感情や性質が無意識に押し込まれたもの。夢の中でそれが姿を現すとき、「そろそろ向き合う時が来ている」というサインかもしれません。「あの怖い存在は、自分の中のどんな感情を表しているだろう？」という問いかけが、内省の入口になります。
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-purple-900/20 border border-purple-500/20">
                <h3 className="text-lg font-bold text-purple-200 mb-2">アニマ／アニムスとして読む</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢に異性の人物が頻繁に登場する場合、ユングはそれを「アニマ（男性の中の女性的側面）」または「アニムス（女性の中の男性的側面）」として解釈しました。これは、自分の中で未発達な、あるいは抑圧されている側面が人格化されたものです。その人物がどんな行動をとるか、どんな感情をもたらすかを観察することで、自分に足りているもの・足りていないもののヒントが得られます。
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-200 font-bold">誰かに追いかけられて怖かった</span>
                  　→「今、何か先送りにしていることがあるかも。そのテーマがシャドウとして追ってきているかもしれない」
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-200 font-bold">懐かしい場所が出てきて切なかった</span>
                  　→「最近、過去のことを振り返りたい気持ちがあるのかも。未整理の感情が残っているサインかもしれない」
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              答えを出すことが目的ではなく、「今の自分が何を感じているか」に気づくこと自体が、セルフケアになります。忙しい毎日の中で、自分の感情を後回しにしがちな人ほど、この方法は効きやすいと思います。
            </p>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 積極的想像法（新設） */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Wand2 className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              3. 積極的想像法で夢の続きを書く
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              これはユングが開発した「積極的想像法（Active Imagination）」をベースにしたアプローチです。難しい技術は不要で、自宅で気軽に試せるセルフワークとして紹介します。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">積極的想像法とは</h3>
              <p className="text-gray-300 leading-relaxed">
                積極的想像法とは、夢や空想のイメージを意識的に「続ける」ことで、無意識との対話を深める技法です。夢の中で途中で終わったシーンを、目を閉じて意識的に再現し、その先のストーリーを想像の中で展開させます。ユング自身もこの方法で自分の無意識と対話し続け、その記録が後に名著『赤の書』としてまとめられました。
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              日常でできるシンプルなやり方は次のとおりです。
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-purple-400 font-bold text-lg shrink-0">①</span>
                <p className="text-gray-300 leading-relaxed">
                  印象に残った夢のシーン（特に感情が強かった場面）を書き出す
                </p>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-purple-400 font-bold text-lg shrink-0">②</span>
                <p className="text-gray-300 leading-relaxed">
                  目を閉じてそのシーンを思い浮かべ、「もしあのシーンが続くとしたら？」と想像を広げる
                </p>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-purple-400 font-bold text-lg shrink-0">③</span>
                <p className="text-gray-300 leading-relaxed">
                  夢の中の怖い存在や気になる人物に、「あなたは何を伝えようとしているの？」と想像の中で問いかけてみる
                </p>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-purple-400 font-bold text-lg shrink-0">④</span>
                <p className="text-gray-300 leading-relaxed">
                  浮かんだイメージや言葉を、ジャーナル（日記）に書き留める
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              「答え」が出なくても構いません。このプロセス自体が、シャドウを意識化し、無意識と意識の橋を架ける作業になります。夢の中で「逃げていたもの」と向き合うことで、現実での対処のヒントが見えてくることがあります。
            </p>
          </section>

          {/* セクション4: 夢を話す効果 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <MessageCircle className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              4. 夢を人に話すことの心理的効果
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              「変な夢を見た」と誰かに話したとき、すっきりした気持ちになったことはありませんか？これは単なる気のせいではなく、心理学的に意味のある効果があります。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢を言語化するプロセスで、漠然としていたイメージが「言葉」という形になります。これにより、夢の中のシャドウ（認めたくない感情）が意識の光にさらされ、その力が弱まる効果があります。ユング的に言えば、「シャドウは語られることで統合に向かう」のです。
            </p>

            <div className="space-y-4 mb-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">信頼できる人に話す</h3>
                <p className="text-gray-300 leading-relaxed">
                  「こんな夢を見て怖かった」「変な夢で笑える」——軽い言い方でも構いません。話すことで感情が外に出され、客観的な距離ができます。相手が何も言わなくても、「話した」という行為自体に整理の効果があります。
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">AIや日記に向かって「話す」</h3>
                <p className="text-gray-300 leading-relaxed">
                  人に話しにくい内容でも、日記やAIに向かって言語化するだけで効果があります。夢の内容を入力して分析を受けるプロセス自体が、夢を客観化し、感情と向き合う機会になります。
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              夢を話した後に「なんかすっきりした」と感じたなら、それはシャドウとの対話がほんの少し進んだサインかもしれません。
            </p>
          </section>

          {/* 共通するスタンス */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              夢を「答え」ではなく「入口」として使う
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              4つの方法に共通しているのは、<span className="text-purple-300 font-bold">夢に答えを求めない</span>という姿勢です。ユングも「夢は解読するものではなく、対話するものだ」と述べています。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢占いの結果を信じる・信じないというより、夢を「今の自分を知るための入口」として使うこと。それがセルフケアとしての夢の活かし方です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              毎朝5分、夢の内容と感情をメモする習慣を続けるだけで、自分の心の状態に敏感になっていきます。疲れているのに気づかず無理を続けてしまう人、感情を後回しにしがちな人にとって、夢日記と積極的想像法の組み合わせは意外と使い勝手の良いツールになるはずです。
            </p>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              むずかしく考えなくていいです。「なんか変な夢だったな」と思ったときに、少しだけ立ち止まってみる——その小さな習慣から始めてみてください。ユング心理学の概念は、知識として学ぶより、自分の夢に当てはめて実感するほうがずっと腑に落ちます。
            </p>
          </section>

          {/* 免責事項 */}
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。睡眠や心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <DreamAnalysisCTA
        title="夢の内容が気になるときは"
        description="AI夢占いで深層心理を分析してみてください。夢の内容を入力するだけで、あなたの心の状態をAIが読み解きます。"
      />
    </ContentPageLayout>
  );
}
