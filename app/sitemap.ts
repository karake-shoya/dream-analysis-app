import { MetadataRoute } from 'next';
import { getAllIndexItems } from '@/lib/data/dreamDictionaryIndex';
import { getArticleFrontmatter } from '@/lib/mdx';
import { DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  // コラム記事メタデータ
  const columnMeta: Record<string, { lastModified: Date; priority: number }> = {
    'dream-memory':       { lastModified: new Date('2026-04-16'), priority: 0.8 },
    'nightmare':          { lastModified: new Date('2026-04-23'), priority: 0.8 },
    'prophetic-dream':    { lastModified: new Date('2026-04-28'), priority: 0.8 },
    'dream-color':        { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'dream-diary':        { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'dream-self-care':    { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'repeating-dreams':   { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'chased-dream':       { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'death-dream':        { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'ex-dream':           { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'falling-teeth-dream':{ lastModified: new Date('2026-05-04'), priority: 0.8 },
    'flying-dream':       { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'baby-dream':         { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'falling-dream':      { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'fire-dream':         { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'late-dream':         { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'lost-dream':         { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'naked-dream':        { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'pregnancy-dream':    { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'school-dream':       { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'snake-dream':        { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'unknown-house-dream':{ lastModified: new Date('2026-05-04'), priority: 0.8 },
    'water-dream':        { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'work-dream':         { lastModified: new Date('2026-05-04'), priority: 0.8 },
    'lucid-dream':        { lastModified: new Date('2026-05-23'), priority: 0.8 },
  };

  // コラム記事ページ
  const columnRoutes = Object.entries(columnMeta).map(([slug, meta]) => ({
    url: `${baseUrl}/column/${slug}`,
    lastModified: meta.lastModified,
    changeFrequency: 'monthly' as const,
    priority: meta.priority,
  }));

  // 静的ページの定義
  const staticRoutes = [
    '',
    '/dictionary',
    '/approach',
    '/column',
    '/sleeping-positions',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 辞典カテゴリページ
  const categoryRoutes = DICTIONARY_CATEGORIES.map((category) => ({
    url: `${baseUrl}/dictionary/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 辞典記事ページ
  const articleRoutes = getAllIndexItems().map((item) => {
    const frontmatter = getArticleFrontmatter(item.category, item.slug);
    return {
      url: `${baseUrl}/dictionary/${item.category}/${item.slug}`,
      lastModified: frontmatter?.updatedAt ? new Date(frontmatter.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...columnRoutes, ...categoryRoutes, ...articleRoutes];
}
