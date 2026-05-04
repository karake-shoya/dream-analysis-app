import { Metadata } from 'next';
import { Clock, Brain, Search, AlertCircle, BookOpen } from 'lucide-react';
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
      name: '遅刻する夢はどんな意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '遅刻する夢は、チャンスを逃す恐れ・準備不足への不安・「乗り遅れている」という感覚を反映することが多いです。現実で締め切り・重要な機会・プレッシャーを感じているとき、またはより慢性的な「時間に追われている」感覚があるときに出やすい夢です。',
      },
    },
    {
      '@type': 'Question',
      name: '遅刻の夢を繰り返し見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '遅刻の夢を繰り返し見る場合、慢性的なプレッシャー・時間への焦り・「間に合わないのではないか」という不安が解消されていない状態を反映しています。現実の生活でペース配分・優先順位・自分への期待値を見直す必要があるサインとして受け取れます。',
      },
    },
    {
      '@type': 'Question',
      name: '遅刻しそうで焦っているのに動けない夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '急ぎたいのに体が動かない・走れないという夢は、焦りとは裏腹に前進できない無力感を象徴します。どれだけ努力しても追いつかないという感覚や、状況に対して主体性を発揮できないという深層の感覚を反映しています。',
      },
    },
    {
      '@type': 'Question',
      name: '試験・大事な予定に遅刻する夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '試験・大事な発表・面接などに遅刻する夢は、その場面で「準備ができていない・評価される機会を失う」ことへの不安を直接的に反映しています。完璧主義・自己評価の低さ・重要な機会を前にしたプレッシャーが大きいときに特に出やすいパターンです。',
      },
    },
    {
      '@type': 'Question',
      name: '遅刻したのに誰も気にしていない夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '遅刻しても誰も気にしていない夢は、「自分が思うほど他者は自分のことを注意していない」という気づきを象徴します。過度な自意識・「失敗したら大変なことになる」という思い込みが和らいでいるサインとして解釈できます。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '遅刻する夢の意味とは？焦り・準備不足・時間への不安をユング心理学で解説',
  description:
    '遅刻する夢の意味を心理学的に解説。遅刻が象徴する焦り・チャンスを逃す恐れ・時間へのプレッシャー、体が動かない夢・試験に遅刻する夢など状況別の読み解き方、繰り返し見る理由まで詳しく紹介します。',
  alternates: { canonical: '/column/late-dream' },
  openGraph: {
    title: '遅刻する夢の意味とは？焦り・準備不足・時間への不安をユング心理学で解説 | Yume Insight',
    description:
      '遅刻する夢の意味を心理学的に解説。遅刻が象徴する焦り・チャンスを逃す恐れ・時間へのプレッシャー、体が動かない夢・試験に遅刻する夢など状況別の読み解き方、繰り返し見る理由まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function LateDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="遅刻する夢の意味とは" subtitle="焦り・準備不足・時間へのプレッシャー——深層心理が映すもの" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">急いでいるのに電車に乗り遅れる、大事な試験に遅刻しそうで焦っているのに体が動かない——遅刻する夢は、多くの人が繰り返し経験する、非常に一般的な夢のひとつです。</p>
            <p className="mb-4">心理学的には、遅刻の夢は<span className="text-purple-300 font-bold">チャンスを逃す恐れ・準備不足への不安・時間や状況に追われている感覚</span>を反映します。現実の生活でのプレッシャー・締め切り・「間に合わないのではないか」という慢性的な焦りが夢として現れています。</p>
            <p>本記事では、遅刻する夢の心理的な意味を状況別に丁寧に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <AlertCircle className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              遅刻の夢が示す3つの心理テーマ
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① チャンスを逃す恐れ——「乗り遅れている」感覚</h3>
                <p className="text-gray-300 leading-relaxed">遅刻の夢の核心にあるのは「何か大切なものを逃してしまう」という恐怖です。人生の機会・締め切り・成長のタイミングを「逃してしまっているのではないか」という不安が、夢の中で遅刻というシナリオとして現れます。SNSなどで他者の成功が可視化される現代特有の焦りとも結びつきやすいテーマです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 準備不足への不安——「まだ間に合っていない」という感覚</h3>
                <p className="text-gray-300 leading-relaxed">試験・発表・重要な場面に遅刻する夢は、「十分な準備ができていない」という深層の不安を直接反映します。完璧主義の傾向がある人や、自己評価が低い人に特に出やすいパターンです。「まだ準備が足りない」という感覚が、遅刻として夢に現れています。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 時間への圧力——ペース配分の問い</h3>
                <p className="text-gray-300 leading-relaxed">繰り返し遅刻の夢を見る場合、慢性的な時間プレッシャー・「いつも追われている」という感覚が解消されていないサインです。ユング心理学的には、無意識が「今のペースは持続可能か」「何かを手放す必要があるか」と問いかけているとして読み解けます。</p>
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
                <h3 className="text-lg font-bold text-purple-200 mb-2">試験・大事な場面に遅刻する夢</h3>
                <p className="text-gray-300 leading-relaxed">評価される場面に遅刻する夢は、準備不足への不安・インポスター症候群（「自分は実は能力がないのでは」という感覚）を反映します。実際に重要なプレゼン・審査・テストを前にしているときに特に出やすいパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">急いでいるのに体が動かない夢</h3>
                <p className="text-gray-300 leading-relaxed">走ろうとしても足が動かない、前に進めないという夢は、焦りと無力感が同時にある状態を象徴します。「頑張らなければ」という意志と「前に進めない」という感覚のギャップが、この夢として現れることが多いです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">電車・乗り物に乗り遅れる夢</h3>
                <p className="text-gray-300 leading-relaxed">人生の流れ・タイミング・周囲の進行に「乗り遅れている」感覚を象徴します。友人・同年代が先に進んでいると感じているとき、または人生の節目（結婚・昇進・子育て）への焦りがあるときに出やすいパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">遅刻したのに誰も気にしない夢</h3>
                <p className="text-gray-300 leading-relaxed">自分が遅刻したことを誰も気にしていない夢は、「自分が思うほど失敗・遅れは深刻ではないかもしれない」という気づきを示します。過度な自意識・完璧主義が和らぎ始めているサインとして解釈されます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">遅刻を間に合わせられた夢</h3>
                <p className="text-gray-300 leading-relaxed">遅刻しそうになりながらも何とか間に合う夢は、追い詰められた状況でも乗り越えられるという内なる自信や、「なんとかなる」という楽観性が育ってきているポジティブなサインです。</p>
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
            <p className="text-gray-300 leading-relaxed text-lg mb-4">遅刻の夢を見たとき、「今の自分は何に間に合わなければと焦っているか」「何を恐れているか」を問いかけてみてください。</p>
            <p className="text-gray-300 leading-relaxed text-lg">人生に「絶対に乗り遅れてはいけない電車」はほとんどありません。夢が繰り返されるなら、それは今のペースを見直すサインかもしれません。</p>
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
        <a href="/column/school-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🏫</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">学校の夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">試練・評価・帰属——学校が映す深層心理</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="遅刻する夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな場面・何に遅刻したか・感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
