const defaultSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT || '6378422969';

export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://yume-insight.com',
  siteName: 'Yume Insight',
  adsenseSlot: defaultSlot,
  adsenseSlots: {
    result: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT || defaultSlot,
    inContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT || defaultSlot,
  },
  /** 記事の著者情報（構造化データのE-E-A-Tシグナル用） */
  author: {
    name: 'Shoya Ueno',
    jobTitle: '中学校理科教員（教育心理学）',
    url: '/about',
    image: '/profile-image.png',
  },
  ogImage: '/ogp.png',
  logo: '/logo.png',
} as const;

/**
 * タイトル末尾のサイト名を除去する。
 * ルート layout の title テンプレート（%s | Yume Insight）がサイト名を付与するため、
 * MDXフロントマターなどに含まれるサイト名をそのまま使うと二重に表示される。
 */
export function stripSiteName(title: string): string {
  return title.replace(/\s*[|｜]\s*Yume Insight\s*$/, '').trim();
}

/** 相対パスをサイトの絶対URLに変換する（構造化データは絶対URLが必須） */
export function absoluteUrl(pathname: string): string {
  if (/^https?:\/\//.test(pathname)) return pathname;
  return `${siteConfig.baseUrl}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
