import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Realable | 不動産開発コンサルティング",
  description: "Realableは、不動産開発プロジェクトの企画から実行まで、総合的なコンサルティングサービスを提供します。",
  keywords: "不動産開発, コンサルティング, プロジェクトマネジメント, 東京, Realable",
  openGraph: {
    title: "Realable | 不動産開発コンサルティング",
    description: "不動産開発プロジェクトの成功をサポートする総合コンサルティング",
    url: "https://realable.tokyo",
    siteName: "Realable",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
