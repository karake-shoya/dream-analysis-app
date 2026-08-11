import { Search, Sparkles, BookOpen } from 'lucide-react';
import ColumnArticleShell from '@/components/column/ColumnArticleShell';
import InContentAd from '@/components/InContentAd';
import { buildColumnMetadata } from '@/lib/seo';

const FAQS = [
  { q: '妊娠していないのに妊娠する夢を見るのはなぜですか？', a: 'ユング心理学では、妊娠は「新しいものの創造・準備・育む力」の象徴です。実際の妊娠とは関係なく、新しいプロジェクト・アイデア・人間関係・人生の新フェーズが「内側で育っている」状態を反映していることがあります。' },
  { q: '妊娠する夢は吉夢ですか？', a: '妊娠の夢は一般的に、何か新しいものが生まれようとしている・育ちつつある状態を示すポジティブな象徴として解釈されることが多いです。ただし、不安を伴う妊娠の夢は、準備不足・責任への恐れを反映することもあるため、夢の中の感情が重要な解釈の手がかりになります。' },
  { q: '男性が妊娠する夢はどんな意味ですか？', a: 'ユング心理学では、性別に関わらず妊娠の夢は「創造性・育む力・新しいものを生む準備」を象徴します。男性が妊娠する夢は、内なる女性性（アニマ）の活性化、または創造的なプロジェクトへの深い関与を示すこともあります。' },
  { q: '流産する・うまくいかない妊娠の夢はどんな意味ですか？', a: '計画・プロジェクト・新しい試みが「途中でうまくいかないかもしれない」という不安を反映することがあります。また、自分が大切にしたいものをうまく守れないことへの恐れとして解釈されることもあります。夢の中の感情を手がかりに、何への不安かを探ることが大切です。' },
  { q: '妊娠の夢を見た後にどう向き合えばいいですか？', a: '妊娠の夢を見たとき、「今の自分の中で何が育ちつつあるか」を問いかけてみてください。新しいアイデア・関係性・習慣・方向性——何かが内側でゆっくりと育っている可能性があります。それを意識的に育てていく機会として活用できます。' },
];

export const metadata = buildColumnMetadata('pregnancy-dream');

export default function PregnancyDreamPage() {
  return (
    <ColumnArticleShell
      slug="pregnancy-dream"
      heroTitle="妊娠する夢の意味とは"
      heroSubtitle="創造性・新たな始まり——育む力が映す深層心理"
      faqs={FAQS}
      references={[
        <>C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</>,
        <>Marie-Louise von Franz, <em>The Feminine in Fairy Tales</em>, Shambhala Publications</>,
      ]}
      nextColumn={{
        href: '/column/baby-dream',
        emoji: '👶',
        heading: '赤ちゃん・子供の夢も気になりますか？',
        sub: 'インナーチャイルドと「永遠の子ども」元型の象徴',
      }}
      cta={{
        title: '妊娠の夢をより詳しく分析したい方へ',
        description: '夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな状況・誰がいたか・感じた感情も含めて入力してみてください。',
      }}
    >
      <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
        <p className="mb-4">実際には妊娠していないのに妊娠している夢を見る——これは老若男女問わず、多くの人が経験する夢のパターンのひとつです。</p>
        <p className="mb-4">ユング心理学において妊娠は、<span className="text-purple-300 font-bold">何か新しいものが内側で育っている状態・創造の準備・新たな始まり</span>を象徴します。実際の妊娠とは無関係に、新しいプロジェクト・アイデア・人生の新フェーズが「今まさに形成されつつある」ときにこの夢が現れることがあります。</p>
        <p>本記事では、妊娠の夢が持つ心理的な意味をユング心理学の視点から、シーン別に丁寧に解説します。</p>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <Sparkles className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
          妊娠の夢が示す3つの心理テーマ
        </h2>
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">① 創造性の発現——何かが内側で育っている</h3>
            <p className="text-gray-300 leading-relaxed">妊娠の夢の最も基本的な象徴は「創造」です。新しいアイデア・プロジェクト・芸術作品・事業——何か新しいものが内側でゆっくりと育っているとき、それが「妊娠」という形で夢に現れます。まだ外には見えていないが、確かに内側で成長しているものの存在を示しています。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">② 新たな始まりの準備——変容の前段階</h3>
            <p className="text-gray-300 leading-relaxed">妊娠は「産まれる前」の状態です。人生の新フェーズ（転職・結婚・移住・新習慣の確立）に向けて準備している時期に、妊娠の夢として現れることがあります。まだ「産まれていない（外に出ていない）」が、もうすでに「始まっている」という両義的な段階を象徴します。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">③ 育む力と責任感——大切なものを守ること</h3>
            <p className="text-gray-300 leading-relaxed">妊娠には「守る・育てる」という責任が伴います。大切にしたいもの（関係性・夢・自己）を守り育てることへの意識が高まっているとき、または「うまく守れるか」という不安があるときに妊娠の夢は現れやすくなります。</p>
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
            <h3 className="text-lg font-bold text-purple-200 mb-2">妊娠していることに気づく夢</h3>
            <p className="text-gray-300 leading-relaxed">「あ、自分は妊娠していたんだ」と夢の中で気づく場合、自分でも意識していなかった何かの発展・育ちに気づき始めているサインです。ひとつのアイデアや感情が自分の中で着実に育っていることへの気づきを示します。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">幸せな・喜びに満ちた妊娠の夢</h3>
            <p className="text-gray-300 leading-relaxed">喜びを感じる妊娠の夢は、今進んでいることへの前向きな期待・新しいものが生まれることへの高揚感を示します。創造的なエネルギーが高まっているポジティブなサインです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">不安を感じる妊娠の夢</h3>
            <p className="text-gray-300 leading-relaxed">「準備ができていない」「うまくいくか不安」という感情を伴う妊娠の夢は、新しい責任・変化への不安を反映します。実際に何か大きなことを始めようとしているが、自信がまだ持てていないときに出やすいパターンです。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">他者が妊娠している夢</h3>
            <p className="text-gray-300 leading-relaxed">知人・友人・家族が妊娠している夢は、その人物（または夢の中の人物が象徴するもの）に関連する変化・新しい始まりへの期待・または羨望を反映することがあります。自分自身の創造性が「他者に映って見える」場合もあります。</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-200 mb-2">出産する夢</h3>
            <p className="text-gray-300 leading-relaxed">妊娠から出産へと至る夢は、内側で育ってきたものがついに「産まれた（形になった）」タイミングを象徴します。プロジェクトの完成・関係性の新段階・自己の新しい側面の確立など、長い準備期間が実を結ぶ象徴として解釈されます。</p>
          </div>
        </div>
      </section>

      <InContentAd />

      <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-4">妊娠の夢を見たとき、「今の自分の中で何が育っているか」を問いかけてみてください。まだ言葉にならないほど小さな芽でも、それが確かにあることに気づくことが、創造的なプロセスの第一歩です。</p>
        <p className="text-gray-300 leading-relaxed text-lg">妊娠は終わりではなく始まりです。何が産まれようとしているか——それを大切に育てることが、この夢からのメッセージです。</p>
      </section>
    </ColumnArticleShell>
  );
}
