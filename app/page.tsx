import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import UpdateTimeline from '@/components/UpdateTimeline';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  // ルート layout の title テンプレート（%s | Yume Insight）を適用させない
  title: { absolute: 'AI夢占い・夢診断｜夢を入力するだけで深層心理を無料分析 | Yume Insight' },
  description: '無料のAI夢占い。見た夢を文章で入力するだけで、AIが夢の意味と深層心理を分析します。追いかけられる夢・好きな人・亡くなった人の夢など、あらゆる夢に対応。登録なしですぐ使えます。',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI夢占い・夢診断｜夢を入力するだけで深層心理を無料分析 | Yume Insight',
    description: '無料のAI夢占い。見た夢を文章で入力するだけで、AIが夢の意味と深層心理を分析します。追いかけられる夢・好きな人・亡くなった人の夢など、あらゆる夢に対応。登録なしですぐ使えます。',
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.baseUrl}/ogp.png?v=2`,
        width: 1200,
        height: 630,
        alt: 'AI夢占い・夢診断｜夢を入力するだけで深層心理を無料分析 | Yume Insight',
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
