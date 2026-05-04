import { Metadata } from 'next';
import { GraduationCap, Brain, Search, Clock, BookOpen } from 'lucide-react';
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
      name: '学校を卒業して何年も経つのに学校の夢を見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、学校は「試練・評価・成長の場」を象徴します。卒業後も、現実の生活で「評価される・試される・成長を求められる」状況があると、その象徴として学校が夢に現れることがあります。記憶の強度ではなく、今の心理状態が夢を呼んでいます。',
      },
    },
    {
      '@type': 'Question',
      name: '試験で答えられない・白紙のままの夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '準備不足への不安・評価されることへの恐れ・「今の自分では不十分かもしれない」という自信のなさを反映することが多いです。現実で何か評価される場面を前にしているとき、または慢性的な自己評価の低さがあるときに出やすい夢です。',
      },
    },
    {
      '@type': 'Question',
      name: '学校で友達がいない・孤立している夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '現在の人間関係における孤独感・孤立感・「どこに属すればいいかわからない」という感覚を反映することがあります。学校という集団の場が、帰属や所属への欲求を象徴しています。',
      },
    },
    {
      '@type': 'Question',
      name: '学校の夢に元同級生が出てくるのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '元同級生は「あの頃の自分」や「その人との関係から学んだ感情パターン」の象徴です。今の状況がかつての学校生活と似た構造（評価・競争・人間関係の緊張）になっているとき、過去の象徴として元同級生が夢に呼ばれることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '学校の夢を見なくするにはどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '学校の夢の根本には「評価・試練・帰属」への不安が多いです。現実の状況で何に不安を感じているかを明確にし、その根本に向き合うことが最も効果的です。また夢日記に記録することで、どんな状況のときに出やすいかのパターンが見えてきます。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '学校の夢の意味とは？試練・評価・帰属を示す深層心理をユング心理学で解説',
  description:
    '学校の夢の意味を心理学的に解説。卒業後も学校の夢を見る理由、試験で答えられない夢・遅刻する夢・孤立する夢など状況別の意味、ユング心理学における「試練の場」としての学校の象徴まで詳しく紹介します。',
  alternates: { canonical: '/column/school-dream' },
  openGraph: {
    title: '学校の夢の意味とは？試練・評価・帰属を示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '学校の夢の意味を心理学的に解説。卒業後も学校の夢を見る理由、試験で答えられない夢・遅刻する夢・孤立する夢など状況別の意味、ユング心理学における「試練の場」としての学校の象徴まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function SchoolDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="学校の夢の意味とは" subtitle="試練・評価・成長——学校という場が映す深層心理" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">もう何年も学校に行っていないのに、夢の中では学校にいる——多くの大人が経験するこの夢は、なぜ繰り返されるのでしょうか。</p>
            <p className="mb-4">ユング心理学では、学校は「試練・評価・成長・帰属」の象徴的な場として機能します。現実での学業とは関係なく、<span className="text-purple-300 font-bold">今の生活で「試される・評価される・成長を求められる」という感覚</span>があるとき、その舞台として学校が選ばれることがあります。</p>
            <p>本記事では、学校の夢が持つ心理的な意味を、シーン別に丁寧に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              学校の夢が示す3つの心理テーマ
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 評価と試練——「試されている」感覚</h3>
                <p className="text-gray-300 leading-relaxed">学校は評価・テスト・課題の場です。社会に出てからも、仕事・人間関係・資格取得など「評価される場面」が続きます。そうした「試されている」感覚が、夢の中で学校という馴染みある舞台を呼び起こします。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 帰属と孤立——どこに属するかという問い</h3>
                <p className="text-gray-300 leading-relaxed">学校はクラス・部活・グループなど帰属の場でもあります。現在の生活でチームへの帰属・人間関係でのポジション・「自分はここにいていいのか」という感覚が揺らいでいるとき、学校の夢として現れることがあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 成長と学習——何かを学ぼうとしているとき</h3>
                <p className="text-gray-300 leading-relaxed">新しいスキル・知識・経験を学ぼうとしている時期にも学校の夢は出やすくなります。「まだ学ぶことがある」という感覚や、成長への意欲が学校という場に投影されます。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">試験で答えられない・白紙の夢</h3>
                <p className="text-gray-300 leading-relaxed">準備不足への不安・「本当は能力がないのでは」という自己不信が表れています。完璧主義・インポスター症候群（自分の実力を信じられない感覚）のある人に多いパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">授業に遅刻する・教室に入れない夢</h3>
                <p className="text-gray-300 leading-relaxed">チャンスを逃す不安・「乗り遅れている」感覚を反映します。周囲に後れを取っているという焦りや、準備できないまま何かに直面する恐れが夢として現れています。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">学校でひとりぼっち・孤立している夢</h3>
                <p className="text-gray-300 leading-relaxed">現在の人間関係での孤独感・帰属への不安・「自分は受け入れられているか」という問いが反映されます。職場・コミュニティ・家族の中での孤立感が夢として現れることがあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">懐かしく楽しい学校の夢</h3>
                <p className="text-gray-300 leading-relaxed">今の生活では感じにくくなった「純粋な楽しさ・仲間と過ごす感覚・目的のある日常」への郷愁を反映します。今の生活に何かが足りていないというサインとして受け取れます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">先生・教師が出てくる夢</h3>
                <p className="text-gray-300 leading-relaxed">ユング的には先生は「知恵・権威・導き」の元型を象徴します。人生での指針や方向性を必要としているとき・「正しい道はどちらか」を問うているときに先生が夢に現れることがあります。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">学校の夢は過去への後退ではなく、今の自分が直面している「評価・帰属・成長」のテーマを映しています。</p>
            <p className="text-gray-300 leading-relaxed text-lg">「今の生活で何に試されていると感じているか」「どこに属したいと思っているか」を問いかけることが、この夢を活かす第一歩です。</p>
          </section>

          <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <BookOpen className="w-7 h-7 mr-3 text-purple-400 shrink-0" />よくある質問
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

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-400">参考文献</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>▸ C.G. Jung, <em>Dreams</em>, Princeton University Press</li>
              <li>▸ David Fontana, <em>The Secret Language of Dreams</em>, Chronicle Books</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/chased-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">😰</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">追いかけられる夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">逃げ続けるとき、深層心理は何を伝えているのか</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="学校の夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな学校・場面だったか、感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
