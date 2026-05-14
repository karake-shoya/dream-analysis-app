import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import GradientBackground from '@/components/GradientBackground';
import Breadcrumb from '@/components/Breadcrumb';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: '夢分析コラム一覧｜夢占いの心理学的な読み解き方 | Yume Insight',
  description:
    'ユング心理学をベースに、よく見る夢のテーマ（追いかけられる・歯が抜ける・空を飛ぶ・蛇など）や夢日記・明晰夢・予知夢などを解説するコラム一覧です。',
  alternates: { canonical: '/column' },
  openGraph: {
    title: '夢分析コラム一覧｜夢占いの心理学的な読み解き方 | Yume Insight',
    description:
      'ユング心理学をベースに、よく見る夢のテーマや夢日記・明晰夢・予知夢などを解説するコラム一覧です。',
    url: `${siteConfig.baseUrl}/column`,
    siteName: 'Yume Insight',
    images: [{ url: `${siteConfig.baseUrl}/ogp.png`, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const DREAM_THEMES = [
  {
    slug: 'chased-dream',
    title: '追いかけられる夢',
    description: '回避・恐怖・シャドウが示す深層心理',
  },
  {
    slug: 'falling-dream',
    title: '落ちる夢',
    description: 'コントロール喪失・不安・自信の深層心理',
  },
  {
    slug: 'falling-teeth-dream',
    title: '歯が抜ける夢',
    description: '不安・自信・変化が示す深層心理',
  },
  {
    slug: 'flying-dream',
    title: '空を飛ぶ夢',
    description: '自由・解放・上昇志向が示す深層心理',
  },
  {
    slug: 'death-dream',
    title: '死ぬ夢',
    description: '不吉ではない理由と変容・再生の深層心理',
  },
  {
    slug: 'snake-dream',
    title: '蛇が出てくる夢',
    description: '変容・本能・シャドウが示す深層心理',
  },
  {
    slug: 'water-dream',
    title: '水の夢・溺れる夢',
    description: '感情・無意識を示す深層心理',
  },
  {
    slug: 'fire-dream',
    title: '火の夢',
    description: '情熱・変容・破壊と再生の深層心理',
  },
  {
    slug: 'ex-dream',
    title: '元カレ・元カノが出てくる夢',
    description: '未練・心理パターン・アニマの深層心理',
  },
  {
    slug: 'baby-dream',
    title: '赤ちゃん・子供が出てくる夢',
    description: '新しい始まり・純粋さが示す深層心理',
  },
  {
    slug: 'pregnancy-dream',
    title: '妊娠する夢',
    description: '創造性・新たな始まりの深層心理',
  },
  {
    slug: 'naked-dream',
    title: '裸になる夢',
    description: '脆弱性・自己開示・ペルソナの深層心理',
  },
  {
    slug: 'school-dream',
    title: '学校の夢',
    description: '試練・評価・帰属を示す深層心理',
  },
  {
    slug: 'work-dream',
    title: '仕事・職場の夢',
    description: 'ストレス・役割・達成感の深層心理',
  },
  {
    slug: 'unknown-house-dream',
    title: '知らない家・部屋の夢',
    description: '自己・内面の探索が示す深層心理',
  },
  {
    slug: 'late-dream',
    title: '遅刻する夢',
    description: '焦り・準備不足・時間への不安の深層心理',
  },
  {
    slug: 'lost-dream',
    title: '道に迷う夢',
    description: '方向性・アイデンティティの迷いの深層心理',
  },
  {
    slug: 'nightmare',
    title: '怖い夢・悪夢',
    description: '深層心理が示す不安のサインと対処法',
  },
];

const DREAM_KNOWLEDGE = [
  {
    slug: 'repeating-dreams',
    title: '何度も同じ夢を見る意味',
    description: '繰り返す夢の心理学的な理由と止め方',
  },
  {
    slug: 'dream-memory',
    title: '夢を覚えている人・いない人の違い',
    description: '夢を記憶する仕組みと覚えやすくなる方法',
  },
  {
    slug: 'dream-diary',
    title: '夢日記の書き方と効果',
    description: '夢をよく覚える方法・続けるコツを徹底解説',
  },
  {
    slug: 'dream-self-care',
    title: '夢をセルフケアに活かす方法',
    description: '悪夢・繰り返す夢の心理的な向き合い方',
  },
  {
    slug: 'lucid-dream',
    title: '明晰夢（ルシッドドリーム）',
    description: '明晰夢の見る方法・練習法をユング心理学で解説',
  },
  {
    slug: 'prophetic-dream',
    title: '予知夢（正夢）とは？',
    description: '心理学・ユング共時性で偶然の一致を解説',
  },
  {
    slug: 'dream-color',
    title: '夢に出てくる色の意味',
    description: '赤・青・黒・白・緑の色別夢占いと深層心理',
  },
];

function ArticleCard({ slug, title, description }: { slug: string; title: string; description: string }) {
  return (
    <Link
      href={`/column/${slug}`}
      className="group flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-200"
    >
      <p className="font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
        {title}
      </p>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      <span className="mt-1 flex items-center gap-1 text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
        続きを読む
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}

export default function ColumnIndexPage() {
  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <Breadcrumb
            items={[
              { label: 'ホーム', href: '/' },
              { label: '夢分析コラム' },
            ]}
          />

          <div className="space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* ヘッダー */}
            <div className="text-center space-y-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                <span>全{DREAM_THEMES.length + DREAM_KNOWLEDGE.length}記事</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 leading-[1.12]">
                夢分析コラム
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                ユング心理学をベースに、夢と深層心理の関係を解説する記事をまとめています。
              </p>
            </div>

            {/* よく見る夢のテーマ */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                よく見る夢のテーマ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {DREAM_THEMES.map((article) => (
                  <ArticleCard key={article.slug} {...article} />
                ))}
              </div>
            </section>

            <AdsenseAd />

            {/* 夢の仕組み・活用法 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                夢の仕組み・活用法
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {DREAM_KNOWLEDGE.map((article) => (
                  <ArticleCard key={article.slug} {...article} />
                ))}
              </div>
            </section>

            <DreamAnalysisCTA />
          </div>
        </main>
      </div>
    </div>
  );
}
