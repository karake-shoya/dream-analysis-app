import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Yume Insight｜AI夢占い・深層心理分析',
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
  openGraph: {
    title: 'Yume Insight｜AI夢占い・深層心理分析',
    description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。無料で使えるAI夢占い・深層心理分析サービス。',
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.baseUrl}/ogp.png`,
        width: 1200,
        height: 630,
        alt: 'Yume Insight｜AI夢占い・深層心理分析',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const runtime = 'nodejs';

export default function HomePage() {
  return <HomePageClient />;
}
