import { Metadata } from 'next';
import { BookOpen, Brain, RefreshCw, Lightbulb } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '同じ夢を何度も見る意味とは？｜繰り返す夢が伝えようとしていること',
  description:
    '追いかけられる夢、試験に間に合わない夢、歯が抜ける夢——同じ夢を繰り返し見るのはなぜ？心理学的な背景とセルフケアへの活かし方をわかりやすく解説します。',
  alternates: { canonical: '/column/repeating-dreams' },
  openGraph: {
    title: '同じ夢を何度も見る意味とは？｜繰り返す夢が伝えようとしていること | Yume Insight',
    description:
      '追いかけられる夢、試験に間に合わない夢、歯が抜ける夢——同じ夢を繰り返し見るのはなぜ？心理学的な背景とセルフケアへの活かし方をわかりやすく解説します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RepeatingDreamsPage() {
  return (
    <ContentPageLayout>
      <PageHero
        title="同じ夢を何度も見る意味とは？"
        subtitle="繰り返す夢が伝えようとしていること"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              同じ夢を繰り返し見た経験はありますか？
            </p>
            <p className="mb-4">
              追いかけられる夢、試験に間に合わない夢、歯が抜ける夢——内容は人によって違うけれど、「またこの夢か」と感じた瞬間のあの妙な感覚は、多くの人が知っているものだと思います。
            </p>
            <p className="mb-4">
              繰り返す夢を見ると、「何か悪いことが起きる前兆？」「病気のサイン？」と不安になることもあるかもしれません。でも、まずひとつ伝えておくと、繰り返し夢を見ること自体はとても一般的な現象で、特別なことではありません。
            </p>
            <p>
              むしろ、<span className="text-purple-300 font-bold">心がある種のメッセージを送り続けているサイン</span>として受け取るほうが、ずっと建設的です。
            </p>
          </div>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション1: 処理中の感情 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢は「処理中の感情」を映し出す
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢を見るのは主にレム睡眠中のことで、このとき脳は日中に受け取った情報や感情を整理しています。なんとなく夢が「現実のごちゃまぜ」に見えることがあるのは、そのためです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              同じ夢を繰り返し見るのは、脳がある感情や出来事をうまく処理しきれていないとき、繰り返し「再処理」しようとしているからだと考えられています。終わっていない仕事のタスクが頭の片隅に残り続けるように、整理できていない感情も夢の中に何度でも出てくるわけです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              心理学の世界では、繰り返し夢は<span className="text-purple-300 font-bold">「未解決の葛藤」の表れ</span>として語られることがあります。フロイト的には抑圧された欲求、ユング的には自分の内面が気づかせようとしているテーマ——と解釈の角度はさまざまですが、共通しているのは「夢は今の自分の心の状態を反映している」という視点です。
            </p>
          </section>

          {/* セクション2: よくある繰り返しの夢 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <RefreshCw className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              よくある繰り返しの夢とその背景
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              繰り返し見られやすい夢にはいくつかのパターンがあります。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">追いかけられる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  プレッシャーや避けたい問題を抱えているときに見やすいと言われます。仕事の締め切り、人間関係のこじれ、先送りにしていること——何かから「逃げている」感覚があるとき、夢の中でも走り続けることになりがちです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">試験・遅刻の夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  社会人になってからも見る人が多いパターンです。完璧にやり遂げたいプレッシャーや、「失敗してはいけない」という緊張感が続いているとき、学生時代の試験という記憶の形で現れやすいようです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">歯が抜ける夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  「自信のなさ」や「人にどう見られているか」という不安と関連して語られることが多い夢です。見た目への意識が高まっているタイミングや、自己評価が揺らいでいる時期に繰り返し見る人が多い印象があります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">落ちる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  急な変化への不安や、コントロールを失う恐怖感と結びついていることが多いです。生活環境が大きく変わった時期などに見やすい傾向があります。
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm mt-6">
              もちろん、これらはあくまで一般的な傾向の話です。同じ夢を見ていても、そのときの感情や生活背景によって意味合いは変わります。大切なのは「夢の内容そのもの」より<span className="text-purple-300">「夢を見たときに感じた感情」</span>に注目することかもしれません。
            </p>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 繰り返す夢が止まるとき */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              繰り返す夢が止まるとき
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              同じ夢を見なくなるのは、多くの場合、ストレスの原因が解消されたときや、気持ちの整理がついたタイミングです。悩んでいた問題に決着がついた、誰かに話して楽になった、生活習慣が変わって睡眠の質が上がった——そういった変化がきっかけになることが多いようです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              逆に言えば、繰り返す夢は<span className="text-purple-300 font-bold">「まだここが引っかかっているよ」という心からのお知らせ</span>とも言えます。夢を「厄介なもの」ではなく、「自分を知るヒント」として受け取れると、少し気持ちが楽になると思います。
            </p>
          </section>

          {/* セクション4: セルフケアに活かすヒント */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢をセルフケアに活かすヒント
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              繰り返し見る夢があるなら、試してみてほしいのが<span className="text-purple-300 font-bold">「夢日記」</span>です。朝起きたらすぐ、夢の内容と目覚めたときの感情を短くメモするだけ。1〜2週間続けると、夢のパターンと自分のコンディションのつながりが見えてきます。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              「なぜこの夢を見たんだろう？」と自分に問いかけることで、今の自分が何を気にしているか、どこに疲れているかに気づけることがあります。占いのように「答え」を求めるものではなく、自分の心の状態を可視化するツールとして使うのがいちばんしっくりくる使い方だと思います。
            </p>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              繰り返す夢は、怖いものでも不吉なものでもありません。ただ、あなたの心がまだ話し終えていないだけです。
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
