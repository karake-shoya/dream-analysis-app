import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。無料で使えるAI夢占い・深層心理分析サービス。',
  alternates: {
    canonical: '/',
  },
};

export const runtime = 'nodejs';

export default function HomePage() {
  return <HomePageClient />;
}
