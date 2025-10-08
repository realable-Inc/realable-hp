import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "リアラブル株式会社",
  description: "AI技術と不動産専門知識を融合し、業界のDXを推進するリアラブル株式会社。AIマッチングプラットフォーム「Hakoma」、OCR技術、価格予測モデルなど革新的なソリューションを提供。東京大学出身の創業メンバーによる高い技術力でお客様の課題を解決します。",
  keywords: "リアラブル, Realable, 不動産テック, AI, 機械学習, Hakoma, AIマッチング, OCR, 不動産価格予測, 宅地建物取引業, DXコンサルティング, 東京大学, PropTech, 不動産投資, データサイエンス",
  authors: [{ name: "リアラブル株式会社" }],
  creator: "リアラブル株式会社",
  publisher: "リアラブル株式会社",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "リアラブル株式会社 | AI×不動産テックでDXを推進",
    description: "AI技術と不動産専門知識を融合し、AIマッチングプラットフォーム「Hakoma」をはじめとする革新的なソリューションを提供。不動産業界のDXを推進するリアラブル株式会社",
    url: "https://realable.tokyo",
    siteName: "リアラブル株式会社",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "リアラブル株式会社 - AI×不動産テック",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "リアラブル株式会社 | AI×不動産テック",
    description: "AI技術と不動産専門知識を融合し、業界のDXを推進する革新的なソリューションを提供",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://realable.tokyo",
  },
  category: "technology",
  classification: "不動産テック・AI・PropTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#00C896" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </head>
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        <StructuredData />
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
