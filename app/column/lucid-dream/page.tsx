import { Metadata } from 'next';
import { Lightbulb, BookOpen, Brain, Sparkles, HelpCircle } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '明晰夢とは？夢をコントロールする意味と潜在能力の目覚め | Yume Insight',
  description: '明晰夢を見る方法から、夢が示す深層心理まで徹底解説。意識的な夢体験で新たな自己を発見し、現実世界にも活かしましょう。',
  alternates: { canonical: '/column/lucid-dream' },
  openGraph: {
    title: '明晰夢とは？夢をコントロールする意味と潜在能力の目覚め | Yume Insight',
    description: '明晰夢を見る方法から、夢が示す深層心理まで徹底解説。意識的な夢体験で新たな自己を発見し、現実世界にも活かしましょう。',
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
      name: '明晰夢とは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夢を見ている最中に「これは夢だ」と自覚した状態を明晰夢（ルシッドドリーム）といいます。通常は不活性な前頭前野が部分的に再活性化しており、ドイツのマックス・プランク研究所の研究（2012年）など複数の神経科学研究によって実在が確認されています。',
      },
    },
    {
      '@type': 'Question',
      name: '明晰夢は誰でも見ることができますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '条件を整えれば誰でも体験できます。成人の約20%が月に1回以上経験しているという調査があり、特別な才能は必要ありません。夢日記の習慣化とリアリティチェックを継続することが最初のステップです。',
      },
    },
    {
      '@type': 'Question',
      name: '明晰夢を見るためにまず何から始めればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最初のステップは夢日記です。起床直後に夢をメモする習慣をつけることで夢想起力が上がり、夢の中で「夢だ」と気づきやすくなります。次に、日中のリアリティチェック（手のひらを確認するなど）を1日10回程度行う習慣を加えてください。',
      },
    },
    {
      '@type': 'Question',
      name: '明晰夢と睡眠麻痺（金縛り）は同じですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '異なる現象です。睡眠麻痺はレム睡眠時に覚醒と睡眠の間で体が動かなくなる状態です。明晰夢は夢の中で自由に動けて意識も鮮明な状態であり、体験としてはまったく異なります。',
      },
    },
    {
      '@type': 'Question',
      name: '明晰夢は毎晩見ることができますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最初のうちは数週間に1回程度が一般的です。WBTB法（早朝再入眠法）とMILD法を組み合わせると頻度が上がりますが、睡眠の質を犠牲にして試みることは避けてください。習慣として定着すると、月に数回体験できる人が増えてきます。',
      },
    },
  ],
};

export default function LucidDreamPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <PageHero
        title="明晰夢（ルシッドドリーム）とは？見方と練習法を解説"
        subtitle="夢の中で「これは夢だ」と気づいたとき、何が変わるのか"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              夢を見ている最中に、ふと「あ、これは夢だ」と気づいた経験はありませんか？そのまま夢の中で意識を保ちながら、ストーリーを自分でコントロールしていく——これが<span className="text-purple-300 font-bold">明晰夢（ルシッドドリーム）</span>です。
            </p>
            <p className="mb-4">
              明晰夢は特別な人だけに起きる現象ではありません。条件が整えば誰でも体験でき、近年は神経科学の分野でも研究が進んでいます。ただ「見られたらいいな」という漠然とした期待ではなく、<span className="text-purple-300 font-bold">正しい仕組みを理解して練習すること</span>で、明晰夢に入りやすくなります。
            </p>
            <p>
              このコラムでは、明晰夢が起きるメカニズム、ユング心理学的な意味、そして実際に試せる練習法まで、順を追って解説します。
            </p>
          </div>

          {/* セクション1: 明晰夢とは */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              明晰夢とは何か——科学が示すメカニズム
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              明晰夢（lucid dream）という言葉は、オランダの精神科医フレデリック・ファン・エーデンが1913年に提唱しました。字義どおりには「明晰な（はっきりとした意識のある）夢」を意味します。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">脳の中で何が起きているのか</h3>
                <p className="text-gray-300 leading-relaxed">
                  通常の夢はレム睡眠中に起きますが、明晰夢のときは前頭前野（自己認識・批判的思考をつかさどる部位）が部分的に再活性化していることが、fMRIや脳波研究で示されています。つまり明晰夢は「眠りながら自分を観察できている状態」です。ドイツのマックス・プランク研究所による2012年の研究では、眠ったまま被験者に合図を送り、夢の中で返答させることにも成功しており、明晰夢の実在が科学的に証明されています。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">明晰夢を見やすい人の特徴</h3>
                <p className="text-gray-300 leading-relaxed">
                  自己内省の習慣がある人、夢日記をつけている人、メタ認知（自分の思考を客観視する力）が高い人は明晰夢を経験しやすいとされています。また、成人の約20%が月に1回以上経験しているという調査があり、明晰夢の頻度には個人差があります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">明晰夢と睡眠麻痺の違い</h3>
                <p className="text-gray-300 leading-relaxed">
                  明晰夢と混同されやすいのが睡眠麻痺（金縛り）です。どちらもレム睡眠と関係しますが、睡眠麻痺は覚醒と睡眠の境界で体が動かなくなる現象であり、必ずしも夢の中に意識があるわけではありません。明晰夢は夢の中で自由に動け、意識もはっきりしている点が大きく異なります。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: ユング心理学の視点 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学から見た明晰夢の意味
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              カール・グスタフ・ユングは夢を「無意識からの手紙」と表現しましたが、明晰夢においては自我（意識）が無意識の舞台に直接介入するという、独特の心理的状況が生まれます。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">意識と無意識の対話の場として</h3>
              <p className="text-gray-300 leading-relaxed">
                ユングが提唱した「個性化（Individuation）」のプロセスでは、自我が無意識の内容（シャドウ・アニマ・アニムスなど）と向き合い、統合していくことが心の成熟につながるとされています。明晰夢はまさに、この対話を意識的に行える「内なる舞台」を提供します。夢の中で怖い存在に逃げずに向き合う、夢の登場人物に「あなたは何を伝えたいのか？」と問いかける——こうした行為がユング的なセルフワークとして機能します。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">悪夢を明晰夢で変容させる</h3>
                <p className="text-gray-300 leading-relaxed">
                  繰り返す悪夢に対して、明晰夢の技術は有力なアプローチです。夢の中で「これは夢だ」と気づいた瞬間、追いかけてくる存在に振り向いて「あなたは何者か？」と問いかけることができます。ユング的な観点では、こうした行為がシャドウの統合につながり、繰り返す悪夢を自然に終わらせることがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">自己実現の練習場として</h3>
                <p className="text-gray-300 leading-relaxed">
                  明晰夢の中では、現実では難しい体験——人前で堂々と話す、苦手な人に率直に気持ちを伝える——を安全に練習できます。これは「行動リハーサル」として機能し、現実の自信や自己効力感に影響するという研究報告もあります。ユングが重視した「自己実現（Self-realization）」の観点からも、明晰夢は内なる可能性を探る場として位置づけられます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">積極的想像法との接続</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユングが開発した「積極的想像法（Active Imagination）」は、目を閉じてイメージを意識的に展開させ無意識と対話する技法です。明晰夢はこれを睡眠中に自然に行える形と捉えられます。夢の登場人物や怖い存在に意識的に語りかけることで、昼間のセルフワークに近い内省の深みが生まれます。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 練習法 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              明晰夢を見るための練習法
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              明晰夢は練習によって見やすくなります。以下の方法は科学的研究や実践コミュニティで広く知られているアプローチです。継続が鍵で、個人差はありますが、2〜4週間続けると変化を感じる人が多いとされています。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 夢日記をつける</h3>
                <p className="text-gray-300 leading-relaxed">
                  明晰夢への最初のステップは、夢を覚える習慣をつけることです。起きた直後（目を開ける前が理想）に夢の内容を枕元のノートまたはスマートフォンに書き留めます。詳細より「感情・場所・人物」のキーワードだけでも構いません。これを毎日続けると夢の想起力が上がり、夢の中でも「夢だ」と気づきやすくなります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② リアリティチェックの習慣化</h3>
                <p className="text-gray-300 leading-relaxed">
                  日常生活で「今、自分は夢を見ているかもしれない」と意識的に確認する習慣を身につけます。手のひらを見て指が正常かどうか確認する（夢の中では指が増減しやすい）、鼻をつまんで口を閉じたまま息ができるか試す（夢の中ではできてしまう）、などの方法があります。これを1日10回程度行うと、夢の中でも同じ動作が自然に出てきて「これは夢だ」と気づくきっかけになります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ MILD法（記憶誘導による明晰夢）</h3>
                <p className="text-gray-300 leading-relaxed">
                  明晰夢研究の第一人者スティーブン・ラバージが開発した技法です。眠る前に「次に夢を見たとき、これは夢だと気づく」と強く意図し、その言葉を頭の中で繰り返しながら眠ります。過去の夢のシーンを思い浮かべ「あの場面で気づいていたら」とイメージするとさらに効果的です。再入眠時（早朝に一度起きてから眠り直す際）に行うと成功率が高まるとラバージの研究でも示されています。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">④ WBTB法（起床後再入眠法）との組み合わせ</h3>
                <p className="text-gray-300 leading-relaxed">
                  睡眠から5〜6時間後に一度目を覚まし、20〜30分ほど起きていてから再び眠る方法です。この時間帯はレム睡眠が長くなりやすく、明晰夢が起きやすいウィンドウです。MILD法と組み合わせることで効果が高まります。翌日に予定がない週末に試すのがおすすめです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">⑤ 明晰夢を安定させる方法</h3>
                <p className="text-gray-300 leading-relaxed">
                  明晰夢に入れたとき、興奮しすぎると夢が崩れて目が覚めてしまいます。夢の中で「安定しろ」と声に出す、手のひらをじっくり見る、夢の中の地面を踏みしめて感覚に集中する——こうした方法で明晰夢を長く続けることができます。実践者の間では、夢の中でゆっくり回転（スピン）することでシーンが安定することも報告されています。
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
              明晰夢は「夢の中の自由時間」以上の意味を持ちます。科学的には前頭前野の部分覚醒として説明でき、心理学的には意識と無意識の対話の場として機能します。夢日記やリアリティチェックから始め、焦らず習慣にしていくことが最短の道です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              明晰夢を「怖い夢を乗り越えるツール」として使うのも、「自分の内面を探る実験の場」にするのも、目的は自由です。眠りを自分のために活用するという意識が、毎晩の睡眠をより豊かにしてくれます。
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
                  q: '明晰夢とは何ですか？',
                  a: '夢を見ている最中に「これは夢だ」と自覚した状態を明晰夢（ルシッドドリーム）といいます。通常は不活性な前頭前野が部分的に再活性化しており、ドイツのマックス・プランク研究所の研究（2012年）など複数の神経科学研究によって実在が確認されています。',
                },
                {
                  q: '明晰夢は誰でも見ることができますか？',
                  a: '条件を整えれば誰でも体験できます。成人の約20%が月に1回以上経験しているという調査があり、特別な才能は必要ありません。夢日記の習慣化とリアリティチェックを継続することが最初のステップです。',
                },
                {
                  q: '明晰夢を見るためにまず何から始めればいいですか？',
                  a: '最初のステップは夢日記です。起床直後に夢をメモする習慣をつけることで夢想起力が上がり、夢の中で「夢だ」と気づきやすくなります。次に、日中のリアリティチェック（手のひらを確認するなど）を1日10回程度行う習慣を加えてください。',
                },
                {
                  q: '明晰夢と睡眠麻痺（金縛り）は同じですか？',
                  a: '異なる現象です。睡眠麻痺はレム睡眠時に覚醒と睡眠の間で体が動かなくなる状態です。明晰夢は夢の中で自由に動けて意識も鮮明な状態であり、体験としてはまったく異なります。',
                },
                {
                  q: '明晰夢は毎晩見ることができますか？',
                  a: '最初のうちは数週間に1回程度が一般的です。WBTB法（早朝再入眠法）とMILD法を組み合わせると頻度が上がりますが、睡眠の質を犠牲にして試みることは避けてください。習慣として定着すると、月に数回体験できる人が増えてきます。',
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
              ※本ページの内容は、科学的・心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。睡眠の不調が続く場合は、専門家にご相談ください。
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
