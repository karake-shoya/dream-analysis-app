import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import UpdateTimeline from '@/components/UpdateTimeline';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  // ルート layout の title テンプレート（%s | Yume Insight）を適用させない
  title: { absolute: 'Yume Insight｜AI夢占い・深層心理分析' },
  description: '夢の内容を入力するだけでAIが深層心理を分析。試験・追いかけられる夢・好きな人・亡くなった人の夢など、あらゆる夢に対応。毎日無料で使えるAI夢占いサービス。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yume Insight｜AI夢占い・深層心理分析',
    description: '夢の内容を入力するだけでAIが深層心理を分析。試験・追いかけられる夢・好きな人・亡くなった人の夢など、あらゆる夢に対応。毎日無料で使えるAI夢占いサービス。',
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.baseUrl}/ogp.png?v=2`,
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
    images: [`${siteConfig.baseUrl}/ogp.png?v=2`],
  },
};

export const runtime = 'nodejs';

export default function HomePage() {
  return <HomePageClient updateTimeline={<UpdateTimeline />} />;
}
