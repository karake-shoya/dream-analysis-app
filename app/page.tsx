import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。無料で使えるAI夢占い・深層心理分析サービス。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yume Insight｜AI夢占い・深層心理分析',
    description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。無料で使えるAI夢占い・深層心理分析サービス。',
    url: 'https://yume-insight.com',
    siteName: 'Yume Insight',
    images: [{ url: 'https://yume-insight.com/ogp.png', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
};

export const runtime = 'nodejs';

export default function HomePage() {
  return <HomePageClient />;
}
