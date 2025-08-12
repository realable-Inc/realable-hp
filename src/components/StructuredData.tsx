'use client'

import { useEffect } from 'react'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "リアラブル株式会社",
  "alternateName": "Realable Inc.",
  "url": "https://realable.tokyo",
  "logo": "https://realable.tokyo/logo.png",
  "description": "AI技術と不動産専門知識を融合し、業界のDXを推進するリアラブル株式会社",
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "name": "東京都",
    "addressCountry": "JP"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "東京都",
    "addressCountry": "JP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@realable.jp",
    "contactType": "customer service",
    "availableLanguage": "Japanese"
  },
  "sameAs": [],
  "knowsAbout": [
    "不動産テック",
    "AI技術",
    "機械学習",
    "データサイエンス",
    "不動産投資",
    "PropTech",
    "DXコンサルティング"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "肥川成希",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "東京大学経済学部"
      },
      "jobTitle": "CEO/CFO"
    },
    {
      "@type": "Person", 
      "name": "齊藤巧",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "東京大学大学院工学系研究科"
      },
      "jobTitle": "CTO"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI不動産ソリューション",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hakoma - AIマッチングプラットフォーム",
          "description": "AIによる不動産投資マッチングサービス"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "不動産価格予測モデル",
          "description": "AI技術による不動産価格予測システム"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "マイソクOCR",
          "description": "OCR技術による不動産文書自動処理"
        }
      }
    ]
  }
}

export default function StructuredData() {
  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script)
    }
  }, [])

  return null
}