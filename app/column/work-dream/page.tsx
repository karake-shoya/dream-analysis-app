import { Briefcase, Brain, Search, BookOpen } from 'lucide-react';
import ColumnArticleShell from '@/components/column/ColumnArticleShell';
import InContentAd from '@/components/InContentAd';
import { buildColumnMetadata } from '@/lib/seo';

const FAQS = [
  { q: '仕事の夢を見るのはストレスのせいですか？', a: 'ストレスが主な要因のひとつではありますが、必ずしもストレスだけが理由ではありません。強い達成感・やりがい・仕事への没頭感が高いときにも仕事の夢は出やすくなります。ただし仕事の夢が頻繁で、目覚めたときに疲労感がある場合は、仕事と休息のバランスを見直すサインかもしれません。' },
  { q: '上司や同僚が夢に出てくるのはなぜですか？', a: 'ユング心理学では、夢の登場人物は自分の内面の一部を象徴します。上司は権威・評価・プレッシャーの象徴として、同僚は協力・競争・人間関係の緊張を象徴することがあります。夢の中でその人とどう関わったかが、自分の心理状態を映す手がかりになります。' },
  { q: '仕事でミスをする夢を繰り返し見るのはなぜですか？', a: '完璧主義・失敗への恐れ・責任へのプレッシャーが強いときに繰り返しやすい夢です。ユング的には、「失敗しても大丈夫だ」という感覚が持てていない状態を反映しています。自分への過度な要求を見直し、失敗を許容できる内面の余裕を育てることが、繰り返しを止めるヒントになります。' },
  { q: '退職・転職を考えていないのに辞める夢を見るのはなぜですか？', a: '必ずしも本当に辞めたいわけではなく、「今の役割・環境・やり方を変えたい」という深層心理の欲求が、「辞める」という象徴的なイメージとして現れることがあります。変化・休息・別の可能性への潜在的な欲求のサインとして受け取れます。' },
  { q: '仕事の夢を見なくするにはどうすればいいですか？', a: '就寝前の「仕事モード解除」が有効です。メールや業務ツールを閉じる、日記に今日の仕事を書き出して「今日はここまで」と区切りをつける、寝る1時間前はスクリーンから離れるなどの習慣が助けになります。また根本的なストレス源に向き合うことも重要です。' },
];

export const metadata = buildColumnMetadata('work-dream');

export default function WorkDreamPage() {
  return (
    <ColumnArticleShell
      slug="work-dream"
      heroTitle="仕事・職場の夢の意味とは"
      heroSubtitle="休日にも仕事の夢を見るとき、深層心理は何を伝えているのか"
      faqs={FAQS}
      references={[
        <>C.G. Jung, <em>Dreams</em>, Princeton University Press</>,
        <>C.G. Jung, <em>Two Essays on Analytical Psychology</em>, Princeton University Press</>,
      ]}
      nextColumn={{
        href: '/column/dream-self-care',
        emoji: '💜',
        heading: '夢をセルフケアに活かす方法',
        sub: '仕事のストレスを夢から読み解くセルフケア法',
      }}
      cta={{
        title: '仕事の夢をより詳しく分析したい方へ',
        description: '夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな職場・状況だったか、感じた感情も含めて入力してみてください。',
      }}
    >
      <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
        <p className="mb-4">休日の朝、目が覚めると仕事の夢を見ていた——せっかくの休みなのに、夢の中まで仕事が追いかけてきた感覚は、多くの人が経験したことがあるはずです。</p>
        <p className="mb-4">仕事の夢が頻繁に出てくるとき、それは単なるストレスの反映だけでなく、<span className="text-purple-300 font-bold">自分のアイデンティティ・役割・達成への欲求</span>が夢として現れているケースも多くあります。</p>
        <p>本記事では、仕事・職場の夢の意味をユング心理学の視点から、シーン別に丁寧に解説します。</p>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Briefcase className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          仕事の夢が示す3つの心理テーマ
        </h2>
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">① ストレスと過負荷——オフになれていない状態</h3>
            <p className="text-gray-300 leading-relaxed">仕事の夢が最も多く出るのは、<span className="text-purple-300 font-bold">仕事のプレッシャーや締め切りが頭から離れない状態</span>のときです。脳が休息モードに入りきれず、日中の業務の続きを夢の中で処理しています。目覚めたときに疲れを感じる場合は、心身がオフになれていないサインです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">② 役割とアイデンティティ——仕事が自分を定義しているとき</h3>
            <p className="text-gray-300 leading-relaxed">仕事への強い同一化（「自分＝仕事人間」）が進んでいるとき、仕事は夢の主要なテーマになりやすいです。ユング的には、これは「ペルソナ（職業的な仮面）」が自己全体を覆っている状態として解釈されます。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">③ 達成・承認欲求——認められたい気持ち</h3>
            <p className="text-gray-300 leading-relaxed">仕事での評価・達成・承認への欲求が高まっているときにも仕事の夢は出やすくなります。「うまくやれているか」「認められているか」という問いが夢として現れることがあります。</p>
          </div>
        </div>
      </section>

      <InContentAd />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          ユング心理学：ペルソナと仕事の夢
        </h2>
        <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
          <h3 className="text-xl font-bold text-purple-200 mb-3">ペルソナが肥大しているとき</h3>
          <p className="text-gray-300 leading-relaxed">ユングが提唱した「ペルソナ」は、社会的役割に合わせてかぶる仮面です。仕事のペルソナ（「デキるビジネスパーソン」「頼れる上司」など）があまりにも強くなると、<span className="text-purple-300 font-bold">本来の自己とペルソナの区別がつかなくなります</span>。仕事の夢が繰り返される場合、「仕事以外の自分」を取り戻すサインかもしれません。</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          シーン別の読み解き
        </h2>
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">仕事でミスをする・失敗する夢</h3>
            <p className="text-gray-300 leading-relaxed">完璧主義・失敗への恐れ・評価への不安が強いときに出やすいパターンです。「失敗したらどうなるか」という緊張が夢として現れています。失敗を過度に恐れていないか振り返るきっかけになります。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">仕事を辞める・転職する夢</h3>
            <p className="text-gray-300 leading-relaxed">現実の退職願望とは限りません。「今の役割・やり方・環境を変えたい」という潜在的な欲求が象徴的に現れることがあります。変化・休息・新しい可能性への渇望のサインとして解釈できます。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">プレゼン・会議でうまくいかない夢</h3>
            <p className="text-gray-300 leading-relaxed">評価される場面への緊張・他者からの目線への不安が夢として現れます。自分の言葉・能力・存在が受け入れられるかどうかへの不安です。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">仕事でうまくいく・活躍する夢</h3>
            <p className="text-gray-300 leading-relaxed">達成感・自信・やりがいが高まっているポジティブな状態を反映します。現実でも何かが軌道に乗り始めているサインかもしれません。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">昔の職場・過去の仕事が出てくる夢</h3>
            <p className="text-gray-300 leading-relaxed">過去の仕事で果たした役割・感じていた感情・残してきた課題がまだ消化されていないサインです。特に「やり残した感」や「後悔」が残っている場合に出やすいパターンです。</p>
          </div>
        </div>
      </section>

      <InContentAd />

      <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-4">仕事の夢が続くとき、「仕事から離れられていない自分」を責める必要はありません。夢は今の状態を映しているだけです。</p>
        <p className="text-gray-300 leading-relaxed text-lg">大切なのは、<span className="text-purple-300 font-bold">「仕事以外の自分」を大切にする時間を意識的に作ること</span>。夢が繰り返すなら、それは「そろそろ休む時間だよ」という深層心理からのメッセージかもしれません。</p>
      </section>
    </ColumnArticleShell>
  );
}
