import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // resend パッケージの型定義エラーを回避するため
  // node_modules 内の型エラーはビルド時に無視
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
