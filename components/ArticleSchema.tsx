import { siteConfig, absoluteUrl } from '@/lib/config';

type Props = {
  /** 記事タイトル（サイト名は含めない） */
  headline: string;
  description: string;
  /** サイトルートからのパス（例: /column/nightmare） */
  path: string;
  /** YYYY-MM-DD */
  publishedAt: string;
  /** YYYY-MM-DD。未指定なら publishedAt を使用 */
  updatedAt?: string;
  /** OGP以外の画像を使う場合のパス */
  image?: string;
};

/**
 * 記事ページ用の Article 構造化データ。
 * 著者・発行元・公開日/更新日を明示し、検索結果でのE-E-A-T評価に必要な情報を渡す。
 */
export default function ArticleSchema({
  headline,
  description,
  path,
  publishedAt,
  updatedAt,
  image,
}: Props) {
  const url = absoluteUrl(path);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    inLanguage: 'ja',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    image: [absoluteUrl(image ?? siteConfig.ogImage)],
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      url: absoluteUrl(siteConfig.author.url),
      image: absoluteUrl(siteConfig.author.image),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.logo),
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
