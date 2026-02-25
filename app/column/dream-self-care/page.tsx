import { Metadata } from 'next';
import { NotebookPen, Heart, RefreshCw, BookOpen } from 'lucide-react';
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
        title="夢をセルフケアに活かす3つの方法"
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
              特別な知識がなくてもできますし、道具もいりません。今日から始められる<span className="text-purple-300 font-bold">3つの方法</span>を紹介します。
            </p>
          </div>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
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
              夢日記の目的は、夢を解読することではありません。夢を記録することで、自分のコンディションの変化に早めに気づくための<span className="text-purple-300 font-bold">「モニタリングツール」</span>として使うのが、いちばん実用的な活用法です。
            </p>
          </section>

          {/* セクション2: 感情から読む */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              2. 夢の感情から「今の自分のテーマ」を読む
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢の内容そのものより、夢の中で感じた感情に注目してみてください。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              怖い夢を見た、悲しい夢だった、なぜかすっきりした気持ちで目が覚めた——そのときの感情は、今の自分の心の状態と深くつながっていることがあります。夢は睡眠中に脳が感情を整理するプロセスで生まれるものなので、強い感情が夢に出てくるときは、現実でもそれに近い感情を抱えていることが多いのです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              試してみてほしいのは、夢を見た翌朝に「この感情は今の自分のどの部分と関係しているだろう？」と少しだけ考えてみることです。
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-200 font-bold">誰かに追いかけられて怖かった</span>
                  　→「今、何か先送りにしていることがあるかも」
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-200 font-bold">懐かしい場所が出てきて切なかった</span>
                  　→「最近、過去のことを振り返りたい気持ちがあるのかも」
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mt-6">
              答えを出すことが目的ではなく、「今の自分が何を感じているか」に気づくこと自体が、セルフケアになります。忙しい毎日の中で、自分の感情を後回しにしがちな人ほど、この方法は効きやすいと思います。
            </p>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 繰り返す夢 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <RefreshCw className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              3. 繰り返し見る夢を「心のサイン」として受け取る
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              同じ夢を何度も見るとき、それを「また嫌な夢だった」で終わらせるのではなく、少し立ち止まってみるのが3つ目の方法です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              繰り返し見る夢は、脳がまだ処理しきれていない感情や状況があるサインとも言われています。何度も同じ夢を見るということは、何かがずっと引っかかったままになっているということかもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              繰り返す夢に気づいたら、「最近、何かストレスになっていることはあるか」「避けていること、先送りにしていることはないか」と自分に問いかけてみてください。夢の内容に正解を求めるのではなく、夢をきっかけに自分の状態を棚卸しする時間を持つだけで十分です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              ストレスの原因に気づいて対処できたとき、繰り返していた夢が自然に止まることがあります。夢が止まること自体が、気持ちが整理されたひとつのサインになるので、繰り返す夢が止まったときは「ああ、あの件が片付いたんだな」と振り返るきっかけにもなります。
            </p>
          </section>

          {/* 共通するスタンス */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              夢を「答え」ではなく「入口」として使う
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              3つの方法に共通しているのは、<span className="text-purple-300 font-bold">夢に答えを求めない</span>という姿勢です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢占いの結果を信じる・信じないというより、夢を「今の自分を知るための入口」として使うこと。それがセルフケアとしての夢の活かし方です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              毎朝5分、夢の内容と感情をメモする習慣を続けるだけで、自分の心の状態に敏感になっていきます。疲れているのに気づかず無理を続けてしまう人、感情を後回しにしがちな人にとって、夢日記は意外と使い勝手の良いツールになるはずです。
            </p>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              むずかしく考えなくていいです。「なんか変な夢だったな」と思ったときに、少しだけ立ち止まってみる——その小さな習慣から始めてみてください。
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
