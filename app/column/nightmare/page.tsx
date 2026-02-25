import { Metadata } from 'next';
import { Frown, ShieldCheck, BookOpen } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '怖い夢・悪夢を見やすい人の特徴と対処法',
  description:
    '悪夢を見やすい人には共通した特徴があります。ストレス・感受性・睡眠リズムの乱れなど、その原因と、悪夢を減らすための具体的な対処法をわかりやすく解説します。',
  alternates: { canonical: '/column/nightmare' },
  openGraph: {
    title: '怖い夢・悪夢を見やすい人の特徴と対処法 | Yume Insight',
    description:
      '悪夢を見やすい人には共通した特徴があります。ストレス・感受性・睡眠リズムの乱れなど、その原因と、悪夢を減らすための具体的な対処法をわかりやすく解説します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function NightmarePage() {
  return (
    <ContentPageLayout>
      <PageHero
        title="怖い夢・悪夢を見やすい人の特徴と対処法"
        subtitle="悪夢が続くとき、心は何かを伝えようとしている"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              目が覚めた瞬間、胸がどきどきしている。夢の内容は薄れていくのに、あの怖さだけがしばらく残っている——悪夢を見た朝の、あの後味の悪さは独特です。
            </p>
            <p>
              悪夢は誰でも見ることがありますが、「自分はやたら怖い夢を見る気がする」と感じている人もいます。それはたまたまではなく、<span className="text-purple-300 font-bold">悪夢を見やすい状態というのが実際にあります。</span>特徴を知っておくと、対処もしやすくなります。
            </p>
          </div>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション1: 悪夢を見やすい人の特徴 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Frown className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              悪夢を見やすい人の特徴
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">ストレスや不安を抱えている</h3>
                <p className="text-gray-300 leading-relaxed">
                  悪夢の原因としてもっとも多いのが、日常のストレスや不安です。仕事のプレッシャー、人間関係のこじれ、将来への漠然とした不安——こういった感情が解消されないまま積み重なっていると、睡眠中にそれが夢として出やすくなります。脳は眠っている間も感情を処理し続けているので、日中に処理しきれなかったネガティブな感情が、夢の中で怖いシーンとして現れることがあるのです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">感受性が高く、物事を深く考えやすい</h3>
                <p className="text-gray-300 leading-relaxed">
                  物事を深く考えたり、他人の感情に敏感だったりする人は、悪夢を見やすい傾向があると言われています。日常の出来事をより強く感じ取るため、それが夢にも影響しやすいのです。繊細さや感受性の高さは長所でもありますが、睡眠という面では少し影響が出やすい部分でもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">寝る直前までスマートフォンやPCを見ている</h3>
                <p className="text-gray-300 leading-relaxed">
                  ブルーライトの影響で眠りが浅くなることはよく知られていますが、それだけでなく、寝る前に刺激的なコンテンツ——ニュース、SNS、ホラー系の動画など——を見ていると、その内容が夢に混ざり込みやすくなります。脳が完全にオフになりきれないまま眠りに入ることで、悪夢につながることがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">睡眠が不規則、または睡眠不足が続いている</h3>
                <p className="text-gray-300 leading-relaxed">
                  睡眠リズムが乱れていると、レム睡眠のバランスが崩れます。睡眠不足が続いた後に長く眠ると、レム睡眠が反動で増えることがあり、そのぶん夢を見る時間も長くなります。悪夢の頻度が上がりやすいのはこのためです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">過去のつらい体験が影響している</h3>
                <p className="text-gray-300 leading-relaxed">
                  過去のトラウマや強いショックを受けた体験がある場合、それが繰り返し悪夢として出てくることがあります。これはPTSD（心的外傷後ストレス障害）の症状のひとつとしても知られており、同じ怖い夢を何度も見るようであれば、専門家への相談も選択肢に入れておくことをおすすめします。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">アルコールや特定の薬の影響</h3>
                <p className="text-gray-300 leading-relaxed">
                  寝る前のアルコールは眠りを浅くし、悪夢を引き起こしやすくすることがあります。また、一部の薬（降圧剤や抗うつ薬など）の副作用として悪夢が起きることも知られています。思い当たることがある場合は、処方した医師に相談してみてください。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: 対処法 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <ShieldCheck className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              悪夢を減らすための対処法
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">寝る1時間前はスクリーンから離れる</h3>
                <p className="text-gray-300 leading-relaxed">
                  就寝前のスマートフォンやPCをやめるだけでも、睡眠の質が変わります。代わりに読書や軽いストレッチ、音楽を聴くなど、脳をゆっくり落ち着かせる時間を作ると、眠りに入りやすくなります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">寝る前の「気持ちの着地」を意識する</h3>
                <p className="text-gray-300 leading-relaxed">
                  その日あったことを頭の中でざっと振り返り、気持ちを整理してから眠ることが大切です。ネガティブな感情を抱えたまま眠りにつくと、それが夢に出やすくなります。日記に書き出す、深呼吸する、感謝できることを3つ思い浮かべる——どれでも構いませんが、「今日はここで終わり」と気持ちに区切りをつける習慣が助けになります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">睡眠リズムを整える</h3>
                <p className="text-gray-300 leading-relaxed">
                  毎日の起床時間をできるだけ一定にするだけで、睡眠の質は変わってきます。週末に大幅に遅起きするのも、リズムを乱す原因になるので注意が必要です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">悪夢を見たら、内容を書き留めてみる</h3>
                <p className="text-gray-300 leading-relaxed">
                  怖い夢を見た後、記憶が残っているうちに内容と感情を書き出してみてください。書くことで夢を「客観的に見る」距離ができ、怖さが少し和らぐことがあります。また、繰り返し見る悪夢があれば、どんな状況のときに見やすいかのパターンが見えてきます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">誰かに話す</h3>
                <p className="text-gray-300 leading-relaxed">
                  怖い夢を見たら、信頼できる人に話してみるのもひとつの方法です。「こんな夢を見て怖かった」と口に出すだけで、気持ちが整理されることがあります。夢の内容を言語化することで、怖さの輪郭がはっきりし、逆に距離を置きやすくなります。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: 悪夢は心の声 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              悪夢は「心の声」でもある
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              悪夢は不快な体験ですが、あなたの心が何かを伝えようとしているサインとして受け取ることもできます。怖い夢が続くときは、日常のどこかに無視できないストレスや不安が積み重なっているかもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢そのものを怖がるより、「今の自分の状態を確認するきっかけ」として使えると、悪夢との付き合い方が少し変わってきます。
            </p>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              悪夢があまりにも頻繁で、日常生活に支障が出るほどであれば、睡眠の専門家や心療内科への相談を検討してみてください。一人で抱え込まなくていいことも、覚えておいてほしいと思います。
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
