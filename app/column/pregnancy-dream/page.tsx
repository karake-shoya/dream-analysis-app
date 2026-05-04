import { Metadata } from 'next';
import { Baby, Brain, Search, Sparkles, BookOpen } from 'lucide-react';
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
      name: '妊娠していないのに妊娠する夢を見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、妊娠は「新しいものの創造・準備・育む力」の象徴です。実際の妊娠とは関係なく、新しいプロジェクト・アイデア・人間関係・人生の新フェーズが「内側で育っている」状態を反映していることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '妊娠する夢は吉夢ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '妊娠の夢は一般的に、何か新しいものが生まれようとしている・育ちつつある状態を示すポジティブな象徴として解釈されることが多いです。ただし、不安を伴う妊娠の夢は、準備不足・責任への恐れを反映することもあるため、夢の中の感情が重要な解釈の手がかりになります。',
      },
    },
    {
      '@type': 'Question',
      name: '男性が妊娠する夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、性別に関わらず妊娠の夢は「創造性・育む力・新しいものを生む準備」を象徴します。男性が妊娠する夢は、内なる女性性（アニマ）の活性化、または創造的なプロジェクトへの深い関与を示すこともあります。',
      },
    },
    {
      '@type': 'Question',
      name: '流産する・うまくいかない妊娠の夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '計画・プロジェクト・新しい試みが「途中でうまくいかないかもしれない」という不安を反映することがあります。また、自分が大切にしたいものをうまく守れないことへの恐れとして解釈されることもあります。夢の中の感情を手がかりに、何への不安かを探ることが大切です。',
      },
    },
    {
      '@type': 'Question',
      name: '妊娠の夢を見た後にどう向き合えばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '妊娠の夢を見たとき、「今の自分の中で何が育ちつつあるか」を問いかけてみてください。新しいアイデア・関係性・習慣・方向性——何かが内側でゆっくりと育っている可能性があります。それを意識的に育てていく機会として活用できます。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '妊娠する夢の意味とは？創造性・新たな始まりをユング心理学で解説',
  description:
    '妊娠する夢の意味を心理学的に解説。妊娠が象徴する創造性・新たな始まり・育む力、妊娠していないのに妊娠の夢を見る理由、男性が見る妊娠の夢、流産の夢など状況別の読み解き方まで詳しく紹介します。',
  alternates: { canonical: '/column/pregnancy-dream' },
  openGraph: {
    title: '妊娠する夢の意味とは？創造性・新たな始まりをユング心理学で解説 | Yume Insight',
    description:
      '妊娠する夢の意味を心理学的に解説。妊娠が象徴する創造性・新たな始まり・育む力、妊娠していないのに妊娠の夢を見る理由、男性が見る妊娠の夢、流産の夢など状況別の読み解き方まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function PregnancyDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="妊娠する夢の意味とは" subtitle="創造性・新たな始まり——育む力が映す深層心理" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
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

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">妊娠の夢を見たとき、「今の自分の中で何が育っているか」を問いかけてみてください。まだ言葉にならないほど小さな芽でも、それが確かにあることに気づくことが、創造的なプロセスの第一歩です。</p>
            <p className="text-gray-300 leading-relaxed text-lg">妊娠は終わりではなく始まりです。何が産まれようとしているか——それを大切に育てることが、この夢からのメッセージです。</p>
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
              <li>▸ C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</li>
              <li>▸ Marie-Louise von Franz, <em>The Feminine in Fairy Tales</em>, Shambhala Publications</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/baby-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">👶</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">赤ちゃん・子供の夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">インナーチャイルドと「永遠の子ども」元型の象徴</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="妊娠の夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな状況・誰がいたか・感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
