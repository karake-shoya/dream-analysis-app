import type { Metadata } from 'next';
import { getColumnArticle } from '@/lib/data/columnArticles';
import { siteConfig } from '@/lib/config';

/**
 * コラム記事の Metadata を registry から組み立てる。
 *
 * title / description は `lib/data/columnArticles.ts` の COLUMN_ARTICLES だけを正とする。
 * 同じ値を Article 構造化データ（ColumnArticleMeta → ArticleSchema）も参照するため、
 * ページ側に metadata をベタ書きすると <title> と headline が食い違う。
 */
export function buildColumnMetadata(slug: string): Metadata {
  const article = getColumnArticle(slug);
  if (!article) {
    throw new Error(
      `コラム "${slug}" が COLUMN_ARTICLES に未登録です。lib/data/columnArticles.ts に追加してください。`
    );
  }

  const { title, description } = article;

  return {
    title,
    description,
    alternates: { canonical: `/column/${slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.siteName}`,
      description,
      type: 'article',
      images: [`${siteConfig.baseUrl}${siteConfig.ogImage}`],
    },
    twitter: { card: 'summary_large_image' },
  };
}
