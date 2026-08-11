import { Search, Compass, BookOpen } from 'lucide-react';
import ColumnArticleShell from '@/components/column/ColumnArticleShell';
import InContentAd from '@/components/InContentAd';
import { buildColumnMetadata } from '@/lib/seo';

const FAQS = [
  { q: '道に迷う夢はどんな意味がありますか？', a: '道に迷う夢は、人生の方向性・目標・選択に迷っている状態を象徴することが多いです。仕事・人間関係・将来の進路など、「どちらへ進むべきか」を実生活で問われているとき、この夢として現れやすくなります。' },
  { q: '知らない場所で迷子になる夢はなぜ見るのですか？', a: '知らない場所での迷子の夢は、未経験の状況・新しい環境への適応困難・「ここは自分の居場所ではないかもしれない」という不安を反映することがあります。転職・引越し・新しいコミュニティへの参加など、環境の変化が重なっているときに出やすいパターンです。' },
  { q: '迷っていても不安を感じない夢はどんな意味ですか？', a: '迷っていても穏やかな気持ちでいる夢は、現実の不確実性を受け入れる準備ができているサインとして読み解けます。答えのない状況でも焦らず探索できる心の余裕が育っていることを示すポジティブなパターンです。' },
  { q: '道を探しても見つからない夢を繰り返し見るのはなぜですか？', a: '繰り返し道に迷う夢を見る場合、方向性・目的・アイデンティティに関するテーマが繰り返し意識に浮上しているサインです。「今の道はほんとうに自分のものか」という問いに、まだ答えを見つけられていない状態を反映していることが多いです。' },
  { q: '道に迷う夢と追いかけられる夢はどう違いますか？', a: '追いかけられる夢は「避けているもの（シャドウ・感情・問題）との対立」を象徴するのに対し、道に迷う夢は「方向性・目的・アイデンティティの不確かさ」を反映します。どちらも不安を伴いますが、その不安の根本にある問いが異なります。' },
];

export const metadata = buildColumnMetadata('lost-dream');

export default function LostDreamPage() {
  return (
    <ColumnArticleShell
      slug="lost-dream"
      heroTitle="道に迷う夢の意味とは"
      heroSubtitle="方向性・目的・アイデンティティ——迷いが映す深層心理"
      faqs={FAQS}
      references={[
        <>C.G. Jung, <em>Memories, Dreams, Reflections</em>, Vintage Books</>,
        <>James Hollis, <em>Finding Meaning in the Second Half of Life</em>, Gotham Books</>,
      ]}
      nextColumn={{
        href: '/column/flying-dream',
        emoji: '🕊️',
        heading: '空を飛ぶ夢も気になりますか？',
        sub: '自由・解放・上昇志向が映す深層心理',
      }}
      cta={{
        title: '道に迷う夢をより詳しく分析したい方へ',
        description: '夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな場所で迷ったか・一緒にいた人・感じた感情も含めて入力してみてください。',
      }}
    >
      <div className="overflow-x-auto rounded-2xl border border-white/10 mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-white/10 text-purple-200">
            <tr>
              <th className="px-4 py-3 font-semibold">夢の場面</th>
              <th className="px-4 py-3 font-semibold">主な意味</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-gray-300">
            <tr><td className="px-4 py-3">知らない街・場所で迷う</td><td className="px-4 py-3">新しい環境への不安・適応困難</td></tr>
            <tr><td className="px-4 py-3">目的地がわかっているのに着けない</td><td className="px-4 py-3">目標はあるが前進できない閉塞感</td></tr>
            <tr><td className="px-4 py-3">地図があっても役に立たない</td><td className="px-4 py-3">知識はあるが行動に移せない状態</td></tr>
            <tr><td className="px-4 py-3">迷いながら探索を楽しんでいる</td><td className="px-4 py-3">不確実性への耐性が育っているサイン</td></tr>
            <tr><td className="px-4 py-3">助けてくれる人が現れる</td><td className="px-4 py-3">内なる知恵・メンターとの出会い</td></tr>
          </tbody>
        </table>
      </div>

      <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
        <p className="mb-4">知らない街をひたすら歩き続けるが目的地にたどり着けない、地図を持っているのに道がわからない——道に迷う夢は、多くの人が繰り返し見る普遍的なテーマのひとつです。</p>
        <p className="mb-4">ユング心理学では、「旅・道」は個性化のプロセス（本来の自己へ向かう旅）の象徴です。道に迷う夢は、その旅の途中で<span className="text-purple-300 font-bold">方向性・目的・アイデンティティへの問い</span>が生じていることを示しています。「今自分はどこへ向かっているのか」という内なる問いかけが夢として現れています。</p>
        <p>本記事では、道に迷う夢の心理的な意味をユング心理学の視点から、状況別に丁寧に解説します。</p>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Compass className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          道に迷う夢が示す3つの心理テーマ
        </h2>
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">① 人生の方向性への迷い</h3>
            <p className="text-gray-300 leading-relaxed">道に迷う夢の最も直接的な象徴は、人生における方向性・選択の迷いです。仕事・キャリア・人間関係・将来の進路など、「どちらへ進むべきか」という問いを現実で抱えているとき、夢の中で道が見えなくなるという形で現れます。複数の選択肢の前で決断できないでいるときにも出やすいパターンです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">② アイデンティティの不確かさ——「自分らしさ」の迷子</h3>
            <p className="text-gray-300 leading-relaxed">ユング心理学の個性化プロセスでは、「本来の自己」を見つける旅が生涯続きます。道に迷う夢は、「自分は何者か」「何を大切にしているか」というアイデンティティに関する問いが解消されていないときに出やすくなります。人生の転換期（20代・30代のクォーターライフクライシス、中年期など）に特に多いパターンです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">③ 環境の変化への適応——新しい場所に慣れようとしているとき</h3>
            <p className="text-gray-300 leading-relaxed">転職・引越し・進学・結婚など、大きな環境の変化があったとき、「この新しい世界での自分の場所はどこか」という不安が道に迷う夢として現れることがあります。新しい環境に適応しようと試みているときに特に出やすいパターンです。</p>
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
            <h3 className="text-lg font-bold text-purple-200 mb-2">知らない街・場所で迷う夢</h3>
            <p className="text-gray-300 leading-relaxed">未経験の状況・新しい環境への適応困難を象徴します。「ここは自分の居場所か」という問いや、新しい世界に踏み出すことへの不安が夢に現れています。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">目的地がわかっているのにたどり着けない夢</h3>
            <p className="text-gray-300 leading-relaxed">目標・ゴールは明確なのに、なぜか近づけないもどかしさを感じる夢です。努力しても進んでいる感覚がない・障害が続く感覚が現実にあるとき、この夢として現れやすくなります。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">地図があるのに役に立たない夢</h3>
            <p className="text-gray-300 leading-relaxed">情報・計画・ノウハウを持っているのに、現実に適用できないというフラストレーションを反映します。「頭ではわかっているけど行動できない」という状態、または理論と現実のギャップを感じているときに出やすいパターンです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">迷いながらも探索を楽しんでいる夢</h3>
            <p className="text-gray-300 leading-relaxed">迷っていても不安より好奇心が強い夢は、不確実性への耐性が育ち、答えのない問いを探索することを楽しめている状態のサインです。個性化プロセスが健全に進んでいるポジティブなパターンとして読み解けます。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">助けてくれる人が現れる夢</h3>
            <p className="text-gray-300 leading-relaxed">迷っているときに道を教えてくれる人物が登場する夢は、ユング的には「賢者」「案内者」の元型の登場を示します。内なる知恵・直感・メンターとの出会いへの準備ができているサインとして解釈されます。</p>
          </div>
        </div>
      </section>

      <InContentAd />

      <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-4">道に迷う夢を見たとき、「今の自分の人生で、どこへ向かっているか確信が持てていない部分はどこか」を問いかけてみてください。</p>
        <p className="text-gray-300 leading-relaxed text-lg">迷いは弱さではなく、進もうとしている証拠です。道を見つけるプロセス自体が、個性化の旅の一部です。</p>
      </section>
    </ColumnArticleShell>
  );
}
