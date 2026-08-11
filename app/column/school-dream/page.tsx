import { GraduationCap, Search, BookOpen } from 'lucide-react';
import ColumnArticleShell from '@/components/column/ColumnArticleShell';
import InContentAd from '@/components/InContentAd';
import { buildColumnMetadata } from '@/lib/seo';

const FAQS = [
  { q: '学校を卒業して何年も経つのに学校の夢を見るのはなぜですか？', a: 'ユング心理学では、学校は「試練・評価・成長の場」を象徴します。卒業後も、現実の生活で「評価される・試される・成長を求められる」状況があると、その象徴として学校が夢に現れることがあります。記憶の強度ではなく、今の心理状態が夢を呼んでいます。' },
  { q: '試験で答えられない・白紙のままの夢はどんな意味ですか？', a: '準備不足への不安・評価されることへの恐れ・「今の自分では不十分かもしれない」という自信のなさを反映することが多いです。現実で何か評価される場面を前にしているとき、または慢性的な自己評価の低さがあるときに出やすい夢です。' },
  { q: '学校で友達がいない・孤立している夢はどんな意味ですか？', a: '現在の人間関係における孤独感・孤立感・「どこに属すればいいかわからない」という感覚を反映することがあります。学校という集団の場が、帰属や所属への欲求を象徴しています。' },
  { q: '学校の夢に元同級生が出てくるのはなぜですか？', a: '元同級生は「あの頃の自分」や「その人との関係から学んだ感情パターン」の象徴です。今の状況がかつての学校生活と似た構造（評価・競争・人間関係の緊張）になっているとき、過去の象徴として元同級生が夢に呼ばれることがあります。' },
  { q: '学校の夢を見なくするにはどうすればいいですか？', a: '学校の夢の根本には「評価・試練・帰属」への不安が多いです。現実の状況で何に不安を感じているかを明確にし、その根本に向き合うことが最も効果的です。また夢日記に記録することで、どんな状況のときに出やすいかのパターンが見えてきます。' },
];

export const metadata = buildColumnMetadata('school-dream');

export default function SchoolDreamPage() {
  return (
    <ColumnArticleShell
      slug="school-dream"
      heroTitle="学校の夢の意味とは"
      heroSubtitle="試練・評価・成長——学校という場が映す深層心理"
      faqs={FAQS}
      references={[
        <>C.G. Jung, <em>Dreams</em>, Princeton University Press</>,
        <>David Fontana, <em>The Secret Language of Dreams</em>, Chronicle Books</>,
      ]}
      nextColumn={{
        href: '/column/chased-dream',
        emoji: '😰',
        heading: '追いかけられる夢も気になりますか？',
        sub: '逃げ続けるとき、深層心理は何を伝えているのか',
      }}
      cta={{
        title: '学校の夢をより詳しく分析したい方へ',
        description: '夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな学校・場面だったか、感じた感情も含めて入力してみてください。',
      }}
    >
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

      <InContentAd />

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

      <InContentAd />

      <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-4">学校の夢は過去への後退ではなく、今の自分が直面している「評価・帰属・成長」のテーマを映しています。</p>
        <p className="text-gray-300 leading-relaxed text-lg">「今の生活で何に試されていると感じているか」「どこに属したいと思っているか」を問いかけることが、この夢を活かす第一歩です。</p>
      </section>
    </ColumnArticleShell>
  );
}
