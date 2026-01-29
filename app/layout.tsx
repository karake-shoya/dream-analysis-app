import type { Metadata } from "next";
import { Fredoka, Zen_Kaku_Gothic_New, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-base"
});

export const metadata: Metadata = {
  title: {
    template: '%s | Yume Insight',
    default: 'Yume Insight｜AI夢診断・深層心理分析',
  },
  description: "夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。",
  keywords: ["夢占い", "夢診断", "AI", "夢", "心理学", "スピリチュアル", "深層心理", "Yume Insight"],
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Yume Insight｜AI夢診断・深層心理分析',
    description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。',
    url: 'https://yume-insight.com',
    siteName: 'Yume Insight',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yume Insight｜AI夢診断・深層心理分析',
    description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。',
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
        <meta name="google-adsense-account" content="ca-pub-1350480293009797" />
        {/* Funding Choices */}
        <script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-1350480293009797?ers=1"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1350480293009797"
          crossOrigin="anonymous"
        />
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
        className={`${fredoka.variable} ${zenGothic.variable} ${inter.variable} antialiased font-sans bg-[#0B0B10] min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
