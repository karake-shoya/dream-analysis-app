import { Metadata } from 'next';
import { Eye, Brain, Search, Shield, BookOpen } from 'lucide-react';
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
      name: '裸になる夢は恥ずかしい夢ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夢の中で裸になることは、脆弱性の露出・「本当の自分を見せること」への不安を象徴します。必ずしもネガティブな意味ではなく、自己開示への準備や、ありのままの自分で受け入れられたいという欲求を表すこともあります。',
      },
    },
    {
      '@type': 'Question',
      name: '裸で誰にも気にされない夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自分が裸なのに周囲が誰も気にしない夢は、「自分が思うほど他者は自分に注目していない」という気づきや、ありのままの自分を受け入れる準備ができているサインとして解釈されます。自己開示への恐れが和らいでいる状態を示します。',
      },
    },
    {
      '@type': 'Question',
      name: '職場や学校で裸になる夢はなぜ見るのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '職場・学校は評価される場の象徴です。その場で裸になる夢は、「本当の自分が評価の場に晒される」恐怖——実力不足が露呈することへの不安や、建前を取り除いた素の自分を見せることへの怖さを反映しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'ユング心理学で裸の夢はどう解釈されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、裸はペルソナ（社会的仮面）を脱いだ状態を象徴します。ペルソナは日常的に社会的役割を演じるために使う「仮面」です。裸の夢は、ペルソナと本来の自己のギャップに気づき始めているサインとして読み解かれます。',
      },
    },
    {
      '@type': 'Question',
      name: '繰り返し裸になる夢を見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '繰り返し裸の夢を見る場合、自己開示や脆弱性に関するテーマが繰り返し意識に浮上しているサインです。社会的役割と本来の自分の間の緊張が解消されていない状態を反映していることが多く、「本当の自分を見せる機会があるか」を振り返るヒントになります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '裸になる夢の意味とは？脆弱性・自己開示・ペルソナをユング心理学で解説',
  description:
    '裸になる夢の意味を心理学的に解説。裸が象徴する脆弱性・自己開示・ペルソナとの関係、誰にも気にされない夢・職場で裸になる夢など状況別の読み解き方、ユング心理学のペルソナ概念まで詳しく紹介します。',
  alternates: { canonical: '/column/naked-dream' },
  openGraph: {
    title: '裸になる夢の意味とは？脆弱性・自己開示・ペルソナをユング心理学で解説 | Yume Insight',
    description:
      '裸になる夢の意味を心理学的に解説。裸が象徴する脆弱性・自己開示・ペルソナとの関係、誰にも気にされない夢・職場で裸になる夢など状況別の読み解き方、ユング心理学のペルソナ概念まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function NakedDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="裸になる夢の意味とは" subtitle="脆弱性・自己開示・ペルソナ——素の自分を映す深層心理" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">突然人前で裸になっていることに気づく夢——多くの人が一度は経験する、非常に普遍的な夢のパターンです。</p>
            <p className="mb-4">ユング心理学においてこの夢は、<span className="text-purple-300 font-bold">ペルソナ（社会的仮面）と本来の自己の関係</span>を反映します。裸は「社会的役割を取り除いた素の自分」を象徴し、それが誰かに見られる恐怖・あるいはそれでも受け入れられる安心感——いずれの感覚が夢の中にあるかが、解釈の重要な鍵になります。</p>
            <p>本記事では、裸になる夢が示す心理テーマをユング心理学の視点から、シーン別に丁寧に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ペルソナとは何か——裸の夢が映すもの
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① ペルソナ（社会的仮面）の概念</h3>
                <p className="text-gray-300 leading-relaxed">ユング心理学の「ペルソナ」とは、社会的役割を演じるために使う仮面・外側の人格のことです。職場では「有能なプロフェッショナル」、家庭では「良い親」、友人関係では「気遣いのできる人」——人は状況ごとに異なるペルソナを使い分けています。裸の夢は、このペルソナを剥いだ素の自分が露わになる状況を象徴しています。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 脆弱性の露出——見られることへの恐れ</h3>
                <p className="text-gray-300 leading-relaxed">裸は文字通り「防御なし」の状態です。夢の中で裸になり恥ずかしさ・恐怖を感じる場合、現実の生活でも自分の弱さ・本音・限界を他者に知られることへの不安が高まっている可能性があります。「本当の自分を見せたら受け入れてもらえないのではないか」という深層の恐れが夢として現れています。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 自己開示の準備——素の自分でいいという気づき</h3>
                <p className="text-gray-300 leading-relaxed">一方で、裸の夢でも恥ずかしさを感じない・誰も気にしない場合は、自己開示への恐れが薄れ、「ありのままの自分でいい」という気づきが深まっているサインとして読み解けます。個性化のプロセス（ユング心理学で言う「本来の自己への統合」）が進んでいるときに出やすいパターンです。</p>
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
                <h3 className="text-lg font-bold text-purple-200 mb-2">職場・学校で裸になる夢</h3>
                <p className="text-gray-300 leading-relaxed">評価される場（職場・学校）で裸になる夢は、実力・本性が露わになることへの不安を強く反映しています。インポスター症候群（自分の実力を信じられない感覚）のある人や、今まさに評価・発表・重要な場面を前にしている人に特に出やすいパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">裸でも誰にも気にされない夢</h3>
                <p className="text-gray-300 leading-relaxed">裸であることを誰も指摘せず、自分だけが気づいている夢は、「他者は自分が思うほど自分に注目していない」という安心感・客観的認識を象徴します。自意識過剰になりすぎていた自分への気づきとして受け取れることもあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">裸を見られて恥ずかしい夢</h3>
                <p className="text-gray-300 leading-relaxed">強い羞恥・焦りを感じる場合、現在の生活で「本当の自分が知られてしまうことへの恐怖」が高まっているサインです。特定の関係性（恋愛・職場・友人）で自己開示を避け続けているとき、この夢として現れやすくなります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">裸で自由を感じる夢</h3>
                <p className="text-gray-300 leading-relaxed">裸であることに解放感・自由を感じる夢は、社会的役割や他者の期待から解放されたいという欲求の表れです。ペルソナの重荷から降りて、本来の自分に戻りたいという心の声として受け取れます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">特定の人の前で裸になる夢</h3>
                <p className="text-gray-300 leading-relaxed">特定の人物（恋人・友人・上司など）の前で裸になる夢は、その人との関係でのオープンさ・信頼・または脆弱性への不安を象徴します。その人に本音を見せることへの抵抗や、関係を深めたいという欲求が夢として現れています。</p>
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
            <p className="text-gray-300 leading-relaxed text-lg mb-4">裸の夢を見たとき、「今の自分は社会的役割の仮面をどれだけ纏っているか」「どこかで素の自分を見せることを恐れているか」を問いかけてみてください。</p>
            <p className="text-gray-300 leading-relaxed text-lg">ペルソナは社会生活に必要なものですが、それが「本来の自分」と乖離しすぎると疲弊します。裸の夢はそのバランスを問いかけているのかもしれません。</p>
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
              <li>▸ C.G. Jung, <em>Two Essays on Analytical Psychology</em>, Princeton University Press</li>
              <li>▸ C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</li>
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

      <DreamAnalysisCTA title="裸になる夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな場所で・誰がいたか・どんな感情を感じたかも含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
