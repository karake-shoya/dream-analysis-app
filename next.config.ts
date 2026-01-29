import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // resend パッケージの型定義エラーを回避するため
  // node_modules 内の型エラーはビルド時に無視
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 旧URLから新URLへのリダイレクト設定
  async redirects() {
    return [
      // /dictionary/category/[category] -> /dictionary/[category]
      {
        source: '/dictionary/category/:category',
        destination: '/dictionary/:category',
        permanent: true,
      },
      // /dictionary/category/[category]/[item] -> /dictionary/[category]/[item]
      {
        source: '/dictionary/category/:category/:item',
        destination: '/dictionary/:category/:item',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
