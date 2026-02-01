import { MetadataRoute } from 'next';
import { getAllIndexItems } from '@/lib/data/dreamDictionaryIndex';
import { getArticleFrontmatter } from '@/lib/mdx';
import { DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dream-analysis-app.netlify.app/'; // TODO: 実際のドメインに変更

  // 静的ページの定義
  const staticRoutes = [
    '',
    '/dictionary',
    '/sleeping-positions',
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

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
