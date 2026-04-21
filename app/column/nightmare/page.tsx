import { Metadata } from 'next';
import { Frown, ShieldCheck, BookOpen, Brain } from 'lucide-react';
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
      name: '怖い夢を見た朝はどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '内容と感情を簡単に書き留めてみてください。書くことで夢を客観視する距離ができ、怖さが和らぎます。ユング心理学的には「夢の怖い存在が何を象徴しているか」を考えることで、深層心理のサインとして受け取ることができます。',
      },
    },
    {
      '@type': 'Question',
      name: '悪夢は病気のサインですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '単発の悪夢はストレスや疲労の反応として誰でも起こります。ただし、同じ悪夢が繰り返されたり、日常生活に支障が出るほど頻繁な場合は、PTSDや睡眠障害の可能性もあります。その場合は睡眠専門医や心療内科への相談を検討してください。',
      },
    },
    {
      '@type': 'Question',
      name: '悪夢を繰り返し見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、繰り返す悪夢は「シャドウ（無意識に抑圧された感情）が意識化を強く求めている状態」として解釈されます。向き合えていない感情やテーマが解消されないまま残っているため、夢が繰り返されます。そのテーマに意識的に向き合えたとき、繰り返しの悪夢が自然に止まることがあります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '怖い夢を見る理由とは？深層心理が示す不安のサインと対処法',
  description:
    '怖い夢・悪夢を繰り返し見るのはなぜか。ユング心理学では、悪夢は深層心理が発する「無視できないサイン」として解釈されます。怖い夢を見た朝にすべき対処法と、悪夢を減らすための習慣を心理学的根拠とともに解説します。',
  alternates: { canonical: '/column/nightmare' },
  openGraph: {
    title: '怖い夢を見る理由とは？深層心理が示す不安のサインと対処法 | Yume Insight',
    description:
      '怖い夢・悪夢を繰り返し見るのはなぜか。ユング心理学では、悪夢は深層心理が発する「無視できないサイン」として解釈されます。怖い夢を見た朝にすべき対処法と、悪夢を減らすための習慣を心理学的根拠とともに解説します。',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
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
            <p className="mb-4">
              悪夢は誰でも見ることがありますが、「自分はやたら怖い夢を見る気がする」と感じている人もいます。それはたまたまではなく、<span className="text-purple-300 font-bold">悪夢を見やすい状態というのが実際にあります。</span>特徴を知っておくと、対処もしやすくなります。
            </p>
            <p>
              さらに、ユング心理学の視点から見ると、悪夢には「なぜ繰り返し見るのか」という問いに対する、もうひとつの答えが隠れています。怖い夢を「ただの不快な体験」としてではなく、<span className="text-purple-300 font-bold">心の深層からのメッセージ</span>として受け取る視点を持つと、悪夢との付き合い方が根本から変わってきます。
            </p>
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

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: ユング心理学とシャドウ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学で解釈する：悪夢とシャドウの遭遇
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              スイスの心理学者カール・グスタフ・ユングは、夢を「無意識からの手紙」と捉えました。その視点から悪夢を見ると、単なる不快な体験ではなく、心の深層が何かを伝えようとしているサインとして読み解けます。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">シャドウ（Shadow）とは何か</h3>
              <p className="text-gray-300 leading-relaxed">
                ユングが提唱した「シャドウ」とは、自分が意識的に認めたくない側面——怒り、嫉妬、恐れ、弱さ、欲望など——が無意識の領域に押し込められた人格の一部です。「こんな感情を持ってはいけない」「自分はそういう人間じゃない」と抑圧された感情が積み重なると、それはシャドウとして無意識に沈殿していきます。
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mb-5">
              悪夢に登場する恐ろしい人物、怪物、あるいは自分を追いかける存在——これらはしばしば、<span className="text-purple-300 font-bold">シャドウが意識化を求めて夢の舞台に現れたもの</span>とユング派の心理学では解釈します。夢の中で自分を脅かすものが実は「自分の一部」だとしたら、悪夢の見方がまったく変わってくるはずです。
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">追いかけてくる存在の意味</h3>
                <p className="text-gray-300 leading-relaxed">
                  誰かに追いかけられる悪夢は、非常によく見られるパターンです。ユング的には、追いかけてくる存在は「向き合うことを避けている自分の感情やテーマ」を象徴していると考えます。逃げ続けているということは、まだそれと向き合う準備ができていないということ。逆に言えば、「そろそろ向き合う時が来ている」というサインでもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">繰り返し見る悪夢はより強いサイン</h3>
                <p className="text-gray-300 leading-relaxed">
                  同じ悪夢を何度も見る場合、ユング的には「シャドウがより強く意識化を求めている」状態と解釈できます。夢が繰り返されるのは、その問いかけが未解決のまま残っているから。逆に、そのテーマに意識的に向き合えたとき、繰り返しの悪夢が自然に止まることがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">シャドウを統合するということ</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユングが提唱した「個性化（Individuation）」のプロセスでは、シャドウを否定せず、自分の一部として受け入れることが成長の鍵とされています。悪夢を見たとき、「あの怖い存在は何を象徴しているだろう？」と少し立ち止まって考えることが、シャドウとの対話の第一歩になります。これは難しい作業ではなく、「最近何を避けているか」「どんな感情を押し込めているか」を素直に問いかけることから始まります。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-400 leading-relaxed text-sm">
                <span className="text-purple-300 font-bold">積極的想像法（Active Imagination）</span>という技法では、目を閉じて悪夢のシーンを意識的に再現し、夢の中の存在に語りかけたり、逃げずに向き合ったりするイメージワークを行います。これはユングが開発したセルフワークで、繰り返す悪夢への対処として実際に活用されています。深刻なトラウマがある場合は専門家の指導のもとで行うことを推奨しますが、「怖い夢の場面を昼間に想像し直す」程度なら日常でも試せます。
              </p>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 対処法 */}
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
                  怖い夢を見た後、記憶が残っているうちに内容と感情を書き出してみてください。書くことで夢を「客観的に見る」距離ができ、怖さが少し和らぐことがあります。また、ユング的な視点で「夢に出てきた怖い存在は何の象徴だろう？」と考えてみると、夢が自分の心の状態を映した鏡として機能し始めます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">誰かに話す</h3>
                <p className="text-gray-300 leading-relaxed">
                  怖い夢を見たら、信頼できる人に話してみるのもひとつの方法です。「こんな夢を見て怖かった」と口に出すだけで、気持ちが整理されることがあります。夢の内容を言語化することで、怖さの輪郭がはっきりし、逆に距離を置きやすくなります。ユング的に言えば、「シャドウを言葉にすること自体が、シャドウの力を弱める」のです。
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
              悪夢は不快な体験ですが、ユングの言葉を借りれば「無意識があなたに伝えようとしているメッセージの最前線」とも言えます。怖い夢が続くときは、日常のどこかに無視できないストレスや、向き合えていない感情が積み重なっているかもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢そのものを怖がるより、「今の自分の状態を確認するきっかけ」として使えると、悪夢との付き合い方が少し変わってきます。悪夢があまりにも頻繁で、日常生活に支障が出るほどであれば、睡眠の専門家や心療内科への相談を検討してみてください。
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
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。睡眠や心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a
          href="/sleeping-positions"
          className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-pink-500/5 border border-pink-500/20 hover:bg-pink-500/10 hover:border-pink-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">💑</span>
            <div>
              <p className="text-xs font-bold text-pink-300 uppercase tracking-wider mb-0.5">関連コンテンツ</p>
              <p className="font-bold text-white text-sm md:text-base">眠っている間の深層心理も確認しませんか？</p>
              <p className="text-xs text-gray-400 mt-0.5">カップルの寝る体勢でわかる深層心理 ─ 15パターン＋相性診断</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-pink-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA
        title="夢の内容が気になるときは"
        description="AI夢占いで深層心理を分析してみてください。夢の内容を入力するだけで、あなたの心の状態をAIが読み解きます。"
      />
    </ContentPageLayout>
  );
}
