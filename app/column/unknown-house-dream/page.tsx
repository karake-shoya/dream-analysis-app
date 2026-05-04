import { Metadata } from 'next';
import { Home, Brain, Search, Sparkles, BookOpen } from 'lucide-react';
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
      name: '知らない家が夢に出てくるのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では「家」は自己（Self）や精神の全体像を象徴します。知らない家が出てくるのは、まだ自分が探求していない内面の領域があることを示すことが多いです。新しい自己の側面・まだ気づいていない可能性・未知の感情が、知らない家として現れます。',
      },
    },
    {
      '@type': 'Question',
      name: '夢に出てくる家の部屋の数や広さに意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学的には、家の広さや部屋の数は内面の豊かさや複雑さを象徴することがあります。広い豪華な家は精神的な可能性の広がりを、狭く閉塞した家は圧迫感・制限を感じている状態を反映することがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の中の家が崩れる・壊れる場合はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '家が崩れる夢は、自己の基盤となっている何か（価値観・アイデンティティ・関係・生活基盤）が揺らいでいる状態を反映することがあります。大きな変化の前に見やすい夢で、必ずしも悪い意味ではなく「古い構造が壊れて新しいものが始まる」変容の過程として解釈されることもあります。',
      },
    },
    {
      '@type': 'Question',
      name: '夢の中で家の中に隠し部屋や秘密の空間を見つける夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'これはユング的に非常に興味深い夢です。まだ探索していない自己の側面・隠れた才能・抑圧されていた感情が「発見」を待っている状態を象徴します。この夢を見た後は「まだ自分が気づいていない自分の一面はないか」を問いかけてみましょう。',
      },
    },
    {
      '@type': 'Question',
      name: '毎回同じ知らない家が夢に出てくるのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '繰り返し同じ家が出てくる夢は、その家が象徴する内面のテーマが未解決のまま残っているサインです。その家でどんな感情を感じるか・どんなことが起きるかが、未解消のテーマへの手がかりになります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '知らない家・部屋が出てくる夢の意味とは？自己・内面の探索を示す深層心理をユング心理学で解説',
  description:
    '知らない家・部屋が出てくる夢の意味を心理学的に解説。家は自己の象徴である理由、各部屋・階層・状態別の意味、隠し部屋を見つける夢・家が崩れる夢など状況別の読み解き方まで詳しく紹介します。',
  alternates: { canonical: '/column/unknown-house-dream' },
  openGraph: {
    title: '知らない家・部屋が出てくる夢の意味とは？自己・内面の探索を示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '知らない家・部屋が出てくる夢の意味を心理学的に解説。家は自己の象徴である理由、各部屋・階層・状態別の意味、隠し部屋を見つける夢・家が崩れる夢など状況別の読み解き方まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function UnknownHouseDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="知らない家・部屋が出てくる夢の意味とは" subtitle="家は自己の鏡——内面の探索が始まるとき" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">見覚えのない家の中を歩いている——廊下が続き、扉を開けると知らない部屋が広がる。「こんな家に入ったことはないはずなのに、なぜか懐かしい気がする」という体験をしたことがある人も多いのではないでしょうか。</p>
            <p className="mb-4">ユング心理学において「家」は、<span className="text-purple-300 font-bold">精神の全体像・自己（Self）・内面世界</span>を象徴する最も重要なシンボルのひとつです。夢の中に知らない家が現れるとき、それはあなたの内面の地図を探索する旅のはじまりかもしれません。</p>
            <p>本記事では、知らない家・部屋が出てくる夢の意味を、ユング心理学の視点から部屋・階層・状況別に解説します。</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Home className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              「家」はなぜ自己の象徴なのか
            </h2>
            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">ユングの「家＝精神の構造」モデル</h3>
              <p className="text-gray-300 leading-relaxed">ユングは、夢に登場する家の構造を精神の層に対応させて解釈しました。<span className="text-purple-300 font-bold">屋根裏は意識・最上層の思考</span>、居住空間は日常的な自我意識、<span className="text-purple-300 font-bold">地下室・地下は無意識の深層</span>に対応します。夢の中でどの階・どの部屋にいるかが、今の内面状態を示す手がかりになります。</p>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">知らない家＝まだ探索していない自己の領域</h3>
                <p className="text-gray-300 leading-relaxed">知らない家が夢に出てくるのは、自分がまだ気づいていない内面の可能性・感情・価値観が存在することを示しています。「こんな部屋があったのか」という感覚は、「こんな一面が自分にあったのか」という内面の発見と対応します。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              部屋・階層・状態別の読み解き
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">屋根裏・最上階を探索する夢</h3>
                <p className="text-gray-300 leading-relaxed">意識の高い領域・理想・精神的な高みへの探索を象徴します。新しい思考の枠組みや、高い視点から自分の状況を見直したい欲求が反映されることがあります。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">地下室・地下への降下</h3>
                <p className="text-gray-300 leading-relaxed">無意識の深層・抑圧された感情・古い記憶への接近を象徴します。地下に降りることへの恐れは、無意識に向き合うことへの抵抗を反映します。地下で何かを発見する夢は、抑圧されていたものと出会うサインです。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">隠し部屋・秘密の空間を発見する夢</h3>
                <p className="text-gray-300 leading-relaxed">ユング的に最もポジティブなパターンのひとつです。まだ自分が探索していなかった可能性・才能・感情の領域を「発見」したことを意味します。「こんな自分もいたのか」という内面の気づきが近づいているサインかもしれません。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">廃墟・汚れた家・荒れた家</h3>
                <p className="text-gray-300 leading-relaxed">長い間手入れされていない内面の側面・放置してきた感情・疲弊した自己状態を反映します。「自分の内側を整えたい・ケアしたい」というサインとして受け取れます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">豪華・広大な家を探索する夢</h3>
                <p className="text-gray-300 leading-relaxed">内面の可能性の豊かさ・精神的な広がりを象徴します。自己成長のプロセスが順調に進んでいる、あるいは大きな可能性に気づき始めているポジティブなサインとして解釈されます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">家が崩れる・壊れる夢</h3>
                <p className="text-gray-300 leading-relaxed">アイデンティティ・価値観・生活基盤の変化が迫っているサインです。怖い感覚を伴うことが多いですが、ユング的には「古い構造が終わり新しいものが始まる」変容のプロセスとして解釈されます。</p>
              </div>
            </div>
          </section>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              知らない家の夢を見やすい時期
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">自己探求・内省が深まっているとき</h3>
                <p className="text-gray-300 leading-relaxed">カウンセリング・瞑想・日記・読書など、自分の内面に向き合う習慣を始めたとき、知らない家を探索する夢が増えることがあります。内省の深まりが、内面世界の探索として夢に現れます。</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">アイデンティティが変化しているとき</h3>
                <p className="text-gray-300 leading-relaxed">転職・結婚・離婚・引越し・卒業など、「自分が何者か」が変化するタイミングに、知らない家の夢が出やすくなります。新しいアイデンティティの家を探索しているイメージです。</p>
              </div>
            </div>
          </section>

          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">知らない家の夢は、自分の内面にまだ探索されていない豊かな領域があることを告げています。怖い・不思議・懐かしい——どんな感情を感じたかが、探索すべきテーマへの手がかりになります。</p>
            <p className="text-gray-300 leading-relaxed text-lg">「自分の中にまだ知らない部屋がある」——そのワクワク感を大切に、内面の探索を続けてみてください。</p>
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
              <li>▸ C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/dream-self-care" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">💜</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">夢をセルフケアに活かす方法も読んでみませんか？</p>
              <p className="text-xs text-gray-400 mt-0.5">内面の探索を日常のセルフケアに</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="知らない家の夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。家の様子や探索した場所、感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
