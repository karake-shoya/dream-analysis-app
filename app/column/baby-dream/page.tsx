import { Metadata } from 'next';
import { Heart, Brain, Search, Sparkles, BookOpen } from 'lucide-react';
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
      name: '赤ちゃんが出てくる夢は良い夢ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一般的にポジティブな意味合いが多い夢です。新しい始まり・純粋さ・可能性・内なる自己の成長を象徴することが多く、目覚めたときに温かい感情があった場合は特にそのサインと受け取れます。ただし赤ちゃんの状態（泣いている・笑っている・危険な状況など）によって解釈が変わります。',
      },
    },
    {
      '@type': 'Question',
      name: '子どもがいないのに赤ちゃんを抱っこする夢を見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、赤ちゃんは「自分の内なる新しい可能性・育てる必要がある部分」を象徴します。実際の子どもの有無とは関係なく、「何か新しいことを始めたい・育てたい」という欲求や、自分の中の純粋な部分への関心が高まっているときに見やすい夢です。',
      },
    },
    {
      '@type': 'Question',
      name: '赤ちゃんが泣いている夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '赤ちゃんが泣いている夢は、自分の中の「世話が必要な部分」が助けを求めているサインとして解釈されます。感情的なサポートの不足・自分のニーズを無視している状態・創造的なエネルギーが出口を求めているなどが考えられます。',
      },
    },
    {
      '@type': 'Question',
      name: '赤ちゃんが危険な状況にある夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '赤ちゃんが危険にさらされる夢は、新しいプロジェクト・関係・アイデア（赤ちゃんが象徴するもの）が脅かされている不安を反映することがあります。大切なものを守れるかどうかへの不安が夢として現れています。',
      },
    },
    {
      '@type': 'Question',
      name: '自分が赤ちゃんに戻る夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自分が赤ちゃんや子どもに戻る夢は、無邪気さ・保護されたい気持ち・責任から解放されたい欲求を反映することがあります。プレッシャーが強い時期に、過去の安心感を求めて出やすい夢です。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '赤ちゃん・子供が出てくる夢の意味とは？新しい始まり・純粋さを示す深層心理をユング心理学で解説',
  description:
    '赤ちゃん・子供が出てくる夢の意味を心理学的に解説。新しい始まり・可能性・内なる自己の象徴である理由、赤ちゃんを抱っこする・泣いている・危険な状況など状況別の意味、ユング心理学の「永遠の子ども」まで詳しく紹介します。',
  alternates: { canonical: '/column/baby-dream' },
  openGraph: {
    title: '赤ちゃん・子供が出てくる夢の意味とは？新しい始まり・純粋さを示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '赤ちゃん・子供が出てくる夢の意味を心理学的に解説。新しい始まり・可能性・内なる自己の象徴である理由、赤ちゃんを抱っこする・泣いている・危険な状況など状況別の意味、ユング心理学の「永遠の子ども」まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function BabyDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="赤ちゃん・子供が出てくる夢の意味とは" subtitle="新しい始まり・純粋さ・可能性——深層心理が育てるもの" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">夢の中に赤ちゃんや子どもが現れるとき、多くの人は温かい感情とともに目が覚めます。しかし「なぜ赤ちゃんが出てきたのだろう」と不思議に思う人も少なくありません。</p>
            <p className="mb-4">ユング心理学において、赤ちゃんや子どもは「新しい始まり」「純粋な可能性」「内なる自己の萌芽」を体現する特別な元型的シンボルです。実際に子どもを持つかどうかとは関係なく、<span className="text-purple-300 font-bold">今の自分の内面が何を育てようとしているか</span>を映し出す夢として受け取れます。</p>
            <p>本記事では、赤ちゃん・子どもが出てくる夢の意味を、状況別に丁寧に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              赤ちゃん・子どもの夢が示す3つの心理テーマ
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 新しい始まりと可能性</h3>
                <p className="text-gray-300 leading-relaxed">赤ちゃんは「まだ何者でもない、純粋な可能性」の象徴です。新しいプロジェクト・アイデア・関係・生き方が動き始めているとき、その「生まれたばかりの何か」が赤ちゃんとして夢に現れることがあります。変化の始まりを告げる、ポジティブな意味合いを持つ夢です。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 世話と責任——育てる必要があるもの</h3>
                <p className="text-gray-300 leading-relaxed">赤ちゃんを抱っこする・世話をする夢は、自分の中の「育てる必要があるもの」への関心を示します。スキル・才能・感情・関係——これらを丁寧に育てたいという気持ちが、赤ちゃんの世話というイメージとして現れます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 無邪気さへの回帰——純粋だった自分を取り戻したい</h3>
                <p className="text-gray-300 leading-relaxed">社会的役割やプレッシャーの中で、「もっと純粋に・自由に・好奇心のままに生きたい」という欲求が高まっているとき、赤ちゃんや子どもが夢に現れることがあります。自分の中の無邪気さ・創造性・遊び心を取り戻したいサインです。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学における「子どもの元型」
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">ユングは「永遠の子ども（プエル・アエテルヌス / パエラ・アエテルナ）」という元型概念を提唱しました。この元型は成長・変容・新しいサイクルの始まりを象徴します。</p>
            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">「神の子ども」——個性化の象徴</h3>
              <p className="text-gray-300 leading-relaxed">ユング心理学では、子ども（特に赤ちゃん）の元型は<span className="text-purple-300 font-bold">個性化プロセスにおける「未来の自己」</span>を象徴することがあります。意識と無意識が統合されることで生まれる、より本質的な自分への予感が「生まれてきた子ども」というイメージとして現れるのです。</p>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">インナーチャイルドと夢</h3>
                <p className="text-gray-300 leading-relaxed">現代心理学では「インナーチャイルド（内なる子ども）」という概念があります。過去に傷ついた・押し込められた自分の幼い部分が、夢の中の子どもとして現れることがあります。その子どもが泣いていたり怖がっていたりする場合、自分の内側にあるその部分が癒しや注目を求めているサインかもしれません。</p>
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
                <h3 className="text-lg font-bold text-purple-200 mb-2">赤ちゃんを抱っこする・あやす夢</h3>
                <p className="text-gray-300 leading-relaxed">新しいプロジェクトや可能性を大切に育てたい気持ち、または自分の感情的な部分を慈しむ準備ができているサインです。温かい感情を感じた場合、特にポジティブな意味合いが強いです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">赤ちゃんが笑っている・元気な夢</h3>
                <p className="text-gray-300 leading-relaxed">内なる可能性や新しい始まりが順調に育っているサインです。今取り組んでいることや、始めようとしていることに前向きなエネルギーが満ちている状態を反映します。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">赤ちゃんが泣いている・助けを求める夢</h3>
                <p className="text-gray-300 leading-relaxed">自分の中の「まだ育っていない部分」や「放置されているニーズ」が注目を求めているサインです。感情的なサポート不足・創造的な欲求の未消化・自分への関心が薄くなっているときに出やすいパターンです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">赤ちゃんを置き忘れる・見失う夢</h3>
                <p className="text-gray-300 leading-relaxed">大切にしていたはずの何か（プロジェクト・関係・自分の価値観・夢）を見失っているという不安を反映することがあります。「あの頃大切にしていたものを、いつの間にか忘れていた」という感覚が夢として現れることがあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">自分が子どもに戻る夢</h3>
                <p className="text-gray-300 leading-relaxed">責任からの解放・無邪気さへの回帰・保護されたい気持ちを反映します。プレッシャーが強い時期や、判断・決断を迫られる状況が続いているときに見やすい夢です。</p>
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
            <p className="text-gray-300 leading-relaxed text-lg mb-4">赤ちゃん・子どもが出てくる夢は、あなたの内側で何かが生まれようとしている、または育てる必要があるという深層心理のメッセージです。</p>
            <p className="text-gray-300 leading-relaxed text-lg">「今の自分の中にある、まだ育ちきっていない可能性は何か」を問いかけることが、この夢を活かす第一歩です。</p>
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
              <li>▸ C.G. Jung, <em>Dreams</em>, Princeton University Press</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/death-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🌙</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">変容・再生のサインとしての死ぬ夢も読んでみませんか？</p>
              <p className="text-xs text-gray-400 mt-0.5">終わりではなく新しい始まりを告げる夢</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="赤ちゃん・子どもが出てくる夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな状況だったか、感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
