import { Metadata } from 'next';
import { MapPin, Brain, Search, Compass, BookOpen } from 'lucide-react';
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
      name: '道に迷う夢はどんな意味がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '道に迷う夢は、人生の方向性・目標・選択に迷っている状態を象徴することが多いです。仕事・人間関係・将来の進路など、「どちらへ進むべきか」を実生活で問われているとき、この夢として現れやすくなります。',
      },
    },
    {
      '@type': 'Question',
      name: '知らない場所で迷子になる夢はなぜ見るのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '知らない場所での迷子の夢は、未経験の状況・新しい環境への適応困難・「ここは自分の居場所ではないかもしれない」という不安を反映することがあります。転職・引越し・新しいコミュニティへの参加など、環境の変化が重なっているときに出やすいパターンです。',
      },
    },
    {
      '@type': 'Question',
      name: '迷っていても不安を感じない夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '迷っていても穏やかな気持ちでいる夢は、現実の不確実性を受け入れる準備ができているサインとして読み解けます。答えのない状況でも焦らず探索できる心の余裕が育っていることを示すポジティブなパターンです。',
      },
    },
    {
      '@type': 'Question',
      name: '道を探しても見つからない夢を繰り返し見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '繰り返し道に迷う夢を見る場合、方向性・目的・アイデンティティに関するテーマが繰り返し意識に浮上しているサインです。「今の道はほんとうに自分のものか」という問いに、まだ答えを見つけられていない状態を反映していることが多いです。',
      },
    },
    {
      '@type': 'Question',
      name: '道に迷う夢と追いかけられる夢はどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '追いかけられる夢は「避けているもの（シャドウ・感情・問題）との対立」を象徴するのに対し、道に迷う夢は「方向性・目的・アイデンティティの不確かさ」を反映します。どちらも不安を伴いますが、その不安の根本にある問いが異なります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '道に迷う夢の意味とは？方向性・アイデンティティの迷いをユング心理学で解説',
  description:
    '道に迷う夢の意味を心理学的に解説。迷子になる夢・知らない場所を彷徨う夢・目的地にたどり着けない夢など状況別の意味、ユング心理学における「個性化の旅」との関係まで詳しく紹介します。',
  alternates: { canonical: '/column/lost-dream' },
  openGraph: {
    title: '道に迷う夢の意味とは？方向性・アイデンティティの迷いをユング心理学で解説 | Yume Insight',
    description:
      '道に迷う夢の意味を心理学的に解説。迷子になる夢・知らない場所を彷徨う夢・目的地にたどり着けない夢など状況別の意味、ユング心理学における「個性化の旅」との関係まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function LostDreamPage() {
  return (
    <ContentPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <PageHero title="道に迷う夢の意味とは" subtitle="方向性・目的・アイデンティティ——迷いが映す深層心理" />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
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

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">道に迷う夢を見たとき、「今の自分の人生で、どこへ向かっているか確信が持てていない部分はどこか」を問いかけてみてください。</p>
            <p className="text-gray-300 leading-relaxed text-lg">迷いは弱さではなく、進もうとしている証拠です。道を見つけるプロセス自体が、個性化の旅の一部です。</p>
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
              <li>▸ C.G. Jung, <em>Memories, Dreams, Reflections</em>, Vintage Books</li>
              <li>▸ James Hollis, <em>Finding Meaning in the Second Half of Life</em>, Gotham Books</li>
            </ul>
          </section>

          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。</p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a href="/column/flying-dream" className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🕊️</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">空を飛ぶ夢も気になりますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">自由・解放・上昇志向が映す深層心理</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA title="道に迷う夢をより詳しく分析したい方へ" description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。どんな場所で迷ったか・一緒にいた人・感じた感情も含めて入力してみてください。" />
    </ContentPageLayout>
  );
}
