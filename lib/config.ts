const defaultSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT || '6378422969';

export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://yume-insight.com',
  siteName: 'Yume Insight',
  adsenseSlot: defaultSlot,
  adsenseSlots: {
    result: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT || defaultSlot,
    inContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT || defaultSlot,
  },
} as const;
