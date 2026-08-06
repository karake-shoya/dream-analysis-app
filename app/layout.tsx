import type { Metadata } from "next";
import { Fredoka, Zen_Kaku_Gothic_New, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { siteConfig } from "@/lib/config";
import NextTopLoader from "nextjs-toploader";

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


const organizationId = `${siteConfig.baseUrl}/#organization`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description: "AIを活用した夢占い・深層心理分析サービス",
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.baseUrl}${siteConfig.logo}`,
    },
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      url: `${siteConfig.baseUrl}${siteConfig.author.url}`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.baseUrl}/#website`,
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    inLanguage: "ja",
    publisher: { "@id": organizationId },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description: "AIを活用した夢占い・深層心理分析サービス",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    inLanguage: "ja",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    provider: { "@id": organizationId },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI夢占い・深層心理分析",
    provider: { "@id": organizationId },
    areaServed: "JP",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    template: `%s | ${siteConfig.siteName}`,
    default: 'Yume Insight｜AI夢占い・深層心理分析',
  },
  description: "夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。",
  keywords: ["夢占い", "AI夢占い","夢診断", "AI", "夢", "心理学", "スピリチュアル", "深層心理", "Yume Insight"],
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.author.name, url: `${siteConfig.baseUrl}${siteConfig.author.url}` }],
  creator: siteConfig.author.name,
  publisher: siteConfig.siteName,
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Yume Insight｜AI夢占い・深層心理分析',
    description: '夢を入力するだけで、今のあなたの深層心理をAIが読み解きます。',
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.baseUrl}/ogp.png?v=2`,
        width: 1200,
        height: 630,
        alt: 'Yume Insight｜AI夢占い・深層心理分析',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteConfig.baseUrl}/ogp.png?v=2`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // 画像付きの大きなプレビューとスニペット全文を許可（Discover掲載の前提条件）
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextTopLoader color="#a855f7" shadow="0 0 10px #a855f7,0 0 5px #a855f7" height={3} showSpinner={false} />
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
