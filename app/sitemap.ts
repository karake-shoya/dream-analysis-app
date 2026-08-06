import { MetadataRoute } from 'next';
import { getAllIndexItems } from '@/lib/data/dreamDictionaryIndex';
import { getArticleFrontmatter } from '@/lib/mdx';
import { DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';
import { COLUMN_ARTICLES, getColumnLastModified } from '@/lib/data/columnArticles';
import { siteConfig } from '@/lib/config';

/**
 * 固定ページの最終更新日。
 * ビルド日時（new Date()）を入れると毎デプロイで全URLの lastmod が動き、
 * 検索エンジンが lastmod を信用しなくなるため、実際に更新した日付を記載する。
 */
const STATIC_PAGE_UPDATED: Record<string, string> = {
  '': '2026-06-06',
  '/dictionary': '2026-04-25',
  '/approach': '2026-05-30',
  '/column': '2026-05-14',
  '/sleeping-positions': '2026-05-19',
  '/about': '2026-05-23',
  '/contact': '2026-03-04',
  '/privacy': '2026-05-04',
  '/terms': '2026-05-23',
  '/sitemap': '2026-04-25',
  '/updates': '2026-05-04',
};

const FALLBACK_DATE = '2026-01-01';

function latest(dates: (string | undefined)[], fallback: string): Date {
  const valid = dates.filter((d): d is string => Boolean(d)).sort();
  return new Date(valid[valid.length - 1] ?? fallback);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  const indexItems = getAllIndexItems();

  // 辞典記事の更新日をカテゴリ別に集計（一覧ページの lastmod に使う）
  const articleUpdatedByCategory = new Map<string, string[]>();
  const articleRoutes = indexItems.map((item) => {
    const frontmatter = getArticleFrontmatter(item.category, item.slug);
    const updatedAt = frontmatter?.updatedAt ?? frontmatter?.createdAt;

    const dates = articleUpdatedByCategory.get(item.category) ?? [];
    dates.push(updatedAt ?? FALLBACK_DATE);
    articleUpdatedByCategory.set(item.category, dates);

    return {
      url: `${baseUrl}/dictionary/${item.category}/${item.slug}`,
      lastModified: new Date(updatedAt ?? FALLBACK_DATE),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  const allArticleDates = [...articleUpdatedByCategory.values()].flat();
  const newestColumnDate = COLUMN_ARTICLES.map(getColumnLastModified).sort().pop();

  // 一覧ページは配下のコンテンツが更新されたら更新扱いにする
  const derivedUpdated: Record<string, Date> = {
    '': latest([...allArticleDates, newestColumnDate, STATIC_PAGE_UPDATED['']], FALLBACK_DATE),
    '/dictionary': latest([...allArticleDates, STATIC_PAGE_UPDATED['/dictionary']], FALLBACK_DATE),
    '/sitemap': latest([...allArticleDates, STATIC_PAGE_UPDATED['/sitemap']], FALLBACK_DATE),
    '/column': latest([newestColumnDate, STATIC_PAGE_UPDATED['/column']], FALLBACK_DATE),
  };

  // 静的ページ
  const staticRoutes = Object.keys(STATIC_PAGE_UPDATED).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: derivedUpdated[route] ?? new Date(STATIC_PAGE_UPDATED[route]),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // コラム記事ページ
  const columnRoutes = COLUMN_ARTICLES.map((article) => ({
    url: `${baseUrl}/column/${article.slug}`,
    lastModified: new Date(getColumnLastModified(article)),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 辞典カテゴリページ
  const categoryRoutes = DICTIONARY_CATEGORIES.map((category) => ({
    url: `${baseUrl}/dictionary/${category.slug}`,
    lastModified: latest(articleUpdatedByCategory.get(category.slug) ?? [], FALLBACK_DATE),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...columnRoutes, ...categoryRoutes, ...articleRoutes];
}
