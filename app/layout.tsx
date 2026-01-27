import type { Metadata } from "next";
import { Fredoka, Zen_Kaku_Gothic_New } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["400", "600"],
  variable: "--font-fredoka"
});

const zenGothic = Zen_Kaku_Gothic_New({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-zen-gothic"
});

export const metadata: Metadata = {
  title: {
    template: '%s | yume insight',
    default: 'yume insight - AI夢診断・夢占い',
  },
  description: "あなたの夢をAIが優しく紐解きます。夢占いや心理学の観点から、潜在意識からのメッセージを受け取りましょう。会員登録不要で無料で使えます。",
  keywords: ["夢占い", "夢診断", "AI", "夢", "心理学", "スピリチュアル", "深層心理"],
  openGraph: {
    title: 'yume insight - AI夢診断',
    description: 'あなたの夢をAIが優しく紐解きます。',
    url: 'https://yume-insight.com',
    siteName: 'yume insight',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yume insight - AI夢診断',
    description: '夢の意味を知りたいですか？AIがあなたの夢を分析します。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TQDLXX30ZH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TQDLXX30ZH');
          `}
        </Script>
      </head>
      <body
        className={`${fredoka.variable} ${zenGothic.variable} antialiased font-sans bg-[#0f172a]`}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
