import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'リアラブル株式会社 - AI×不動産テック',
    short_name: 'Realable',
    description: 'AI技術と不動産専門知識を融合し、業界のDXを推進するリアラブル株式会社',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00C896',
    icons: [],
    categories: ['business', 'finance', 'productivity'],
    lang: 'ja',
    dir: 'ltr',
    orientation: 'portrait-primary',
  }
}