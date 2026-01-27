import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://dream-oracle-app.vercel.app/sitemap.xml', // TODO: 実際のドメインに変更
  };
}
