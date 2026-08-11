import { TrendingDown, Brain, Search, AlertCircle, BookOpen } from 'lucide-react';
import ColumnArticleShell from '@/components/column/ColumnArticleShell';
import InContentAd from '@/components/InContentAd';
import { buildColumnMetadata } from '@/lib/seo';

const FAQS = [
  { q: '落ちる夢を見て目が覚めるのはなぜですか？', a: '「ハイプニック・ジャーク（入眠時ミオクローヌス）」と呼ばれる生理現象が関係していることが多いです。睡眠に入る瞬間に筋肉が反射的に収縮する現象で、落ちる感覚と同時に体が跳び上がるように目が覚めます。ストレスや疲労が強い時期に起こりやすいとされています。' },
  { q: '落ちる夢は不吉なサインですか？', a: '心理学的には不吉な予兆ではありません。落ちる夢は、コントロールを失っている感覚・自信の喪失・プレッシャーへの反応として現れることが多く、今の心理状態を映すサインとして解釈されます。' },
  { q: '落ちる夢の中で地面に着いてしまったらどうなりますか？', a: '「地面に着くと死ぬ」という俗説がありますが、根拠はなく医学的にも否定されています。地面に着く夢を見ても何も起きません。ユング的には、地面に着く夢は「底を打った」状態、つまり最も困難な地点に達してここから上昇するサインとして解釈されることもあります。' },
  { q: '高いところから飛び降りる夢と落ちる夢は意味が違いますか？', a: '飛び降りる（意志的な行動）場合と、不意に落ちる（非意志的な落下）場合では心理的な意味が異なります。意志的に飛び降りる夢は「思い切った決断・覚悟」を、不意に落ちる夢は「コントロールを失う恐怖・不安定さ」を反映することが多いです。' },
  { q: '繰り返し落ちる夢を見るのはなぜですか？', a: 'ユング心理学では、繰り返す夢はそのテーマが解消されていないサインです。長期的なストレス・自信の喪失・コントロールできない状況が続いているとき、繰り返し落ちる夢が出やすくなります。根本的なストレス源に向き合うことが、繰り返しを止める近道です。' },
];

export const metadata = buildColumnMetadata('falling-dream');

export default function FallingDreamPage() {
  return (
    <ColumnArticleShell
      slug="falling-dream"
      heroTitle="落ちる夢の意味とは"
      heroSubtitle="コントロールを失う感覚——深層心理が伝えるもの"
      faqs={FAQS}
      references={[
        <>C.G. Jung, <em>Dreams</em>, Princeton University Press</>,
        <>David Fontana, <em>The Secret Language of Dreams</em>, Chronicle Books</>,
      ]}
      nextColumn={{
        href: '/column/flying-dream',
        emoji: '🕊️',
        heading: '逆に空を飛ぶ夢の意味も知りたい方へ',
        sub: '自由・解放・上昇志向が示す深層心理',
      }}
      cta={{
        title: '落ちる夢の内容をより詳しく分析したい方へ',
        description: '夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どこから・どのように落ちたか、感じた感情も含めて入力してみてください。',
      }}
    >
      <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
        <p className="mb-4">高いところから落ちていく感覚に、はっと目が覚める——落ちる夢は、世界中で最も多く報告される夢のひとつです。ときには体が実際に跳び上がるような感覚と一緒に目覚めることもあります。</p>
        <p className="mb-4">この「落ちる感覚」には生理学的な説明と心理学的な説明の両方があります。どちらも知っておくことで、<span className="text-purple-300 font-bold">夢が告げているメッセージ</span>をより正確に受け取れるようになります。</p>
        <p>本記事では、落ちる夢の意味をユング心理学の視点を軸に、シーン別に丁寧に解説します。</p>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <AlertCircle className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          まず知っておきたい：ハイプニック・ジャークとは
        </h2>
        <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
          <h3 className="text-xl font-bold text-purple-200 mb-3">入眠時の「落ちる感覚」の正体</h3>
          <p className="text-gray-300 leading-relaxed">「ハイプニック・ジャーク（入眠時ミオクローヌス）」とは、眠りに入る瞬間に筋肉が反射的に収縮する生理現象です。この瞬間、脳は「体が落ちている」と誤認し、その感覚が夢として体験されます。ストレス・疲労・カフェイン過多・睡眠不足のときに起こりやすく、<span className="text-purple-300 font-bold">それ自体は医学的に正常な現象</span>です。ただし繰り返す場合は、睡眠の質や現在のストレス状態を見直すサインにもなります。</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <TrendingDown className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          落ちる夢が示す3つの心理テーマ
        </h2>
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">① コントロールの喪失——手綱を握れていない感覚</h3>
            <p className="text-gray-300 leading-relaxed">落ちる夢の最も一般的な意味は、<span className="text-purple-300 font-bold">状況をコントロールできていない感覚</span>の反映です。仕事・人間関係・生活の何かがうまくコントロールできていないとき、その「手が届かない感覚」が夢の中の落下として現れます。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">② 自信の揺らぎ——高い場所から落ちる意味</h3>
            <p className="text-gray-300 leading-relaxed">高い地位・評価・達成から転落するイメージは、自己評価の低下や「うまくやれないかもしれない」という不安を反映することがあります。昇進・プレゼン・新しい役割を前にして、プレッシャーが夢として現れるパターンです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">③ 過負荷と疲弊——限界まで追い詰められているとき</h3>
            <p className="text-gray-300 leading-relaxed">長期間のストレス・睡眠不足・燃え尽き感が続くと、「もう支えきれない」という感覚が落下のイメージとして夢に出やすくなります。繰り返し落ちる夢が続く場合は、現実の負荷を見直すサインかもしれません。</p>
          </div>
        </div>
      </section>

      <InContentAd />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          ユング心理学から読み解く「落下」の象徴
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">ユングは夢における方向性（上昇・下降）に心理的な意味を見出しました。「下へ落ちる」というイメージには、複数の解釈があります。</p>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">下降は無意識への接近を意味する</h3>
            <p className="text-gray-300 leading-relaxed">ユング的には「下に降りる」ことは必ずしも否定的ではありません。無意識の深みへ降りていくプロセスは、自己理解を深める内省の旅でもあります。ただし「コントロールなき落下」は、そのプロセスに抵抗している状態を反映することが多いです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">シャドウと落下の関係</h3>
            <p className="text-gray-300 leading-relaxed">自分の弱さ・失敗・不完全さを認めることへの恐れがシャドウとして蓄積されているとき、「地位・評価・理想の自分から落ちる」夢として現れることがあります。完璧主義な傾向がある人に多いパターンです。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          シーン別の読み解き
        </h2>
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">崖・建物から落ちる夢</h3>
            <p className="text-gray-300 leading-relaxed">高い場所（達成・地位・理想）から転落するイメージです。プレッシャーや評価への不安が最も強く出ているパターン。落ちた場所（海・森・地面）も感情の質を示します。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">足を踏み外して落ちる夢</h3>
            <p className="text-gray-300 leading-relaxed">不意の失敗・判断ミス・油断への不安を反映することが多いです。「この一歩を間違えたらどうなるか」という緊張が夢に出ています。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">落ちていくが地面に着かない夢</h3>
            <p className="text-gray-300 leading-relaxed">問題が解決しないまま宙ぶらりんな状態・先が見えない不安定さを反映します。「いつ地面に着くかわからない」という感覚が続いているとき出やすいパターンです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">落ちながら途中で飛べる夢</h3>
            <p className="text-gray-300 leading-relaxed">危機的な状況を乗り越える力・立て直す自己効力感が高まっているサインとして解釈されます。困難な局面でも自分でコントロールを取り戻せるという無意識の自信が現れています。</p>
          </div>
        </div>
      </section>

      <InContentAd />

      <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
          おわりに
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-4">落ちる夢は怖い体験ですが、「コントロールを失っている自分の状態」を映す鏡として受け取ることができます。繰り返すなら、現実のどこかで「支えきれない」感覚が続いているかもしれません。</p>
        <p className="text-gray-300 leading-relaxed text-lg">今抱えている重荷のうち、手放せるものはないかを静かに問いかけてみてください。</p>
      </section>
    </ColumnArticleShell>
  );
}
