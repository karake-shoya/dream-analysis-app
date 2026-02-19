export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://yume-insight.com',
  siteName: 'Yume Insight',
  adsenseSlot: process.env.NEXT_PUBLIC_ADSENSE_SLOT || '6378422969',
} as const;
