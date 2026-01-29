import { MetadataRoute } from 'next';
import { DREAM_DICTIONARY } from '@/lib/data/dreamDictionary';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dream-analysis-app.netlify.app/'; // TODO: 実際のドメインに変更

  // 静的ページの定義
  const staticRoutes = [
    '',
    '/dictionary',
    '/privacy',
    '/terms',
    '/contact',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 辞典カテゴリページ
  const categoryRoutes = Object.values(DREAM_DICTIONARY).map((category) => ({
    url: `${baseUrl}/dictionary/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 辞典記事ページ
  const articleRoutes = Object.values(DREAM_DICTIONARY).flatMap((category) =>
    category.items.map((item) => ({
      url: `${baseUrl}/dictionary/${category.slug}/${item.slug}`,
      lastModified: item.createdAt ? new Date(item.createdAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
