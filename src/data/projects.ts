export interface HomeService {
  id: string;
  title: string;
  description: string;
  overviewImage?: string;
  link?: string;
}

// サービスページ用
export const homeServices: HomeService[] = [
  {
    id: 'hakoma',
    title: '居抜きマッチングサービス「Hakoma」',
    description: '物件から退去する人が、フリマ感覚で自分の物件をアップロードし、居抜きで入居したい人や会社を自分で見つけることができるマッチングサービス。契約は不動産のプロがサポートします。',
    overviewImage: '/images/services/hakoma/hakoma-2.png'
  },
  {
    id: 'ai-matching',
    title: 'Hakoma -PSA-（営業支援AI）',
    description: '不動産仲介業者向けのオーダー×物件自動マッチングシステム。営業の機会損失を最小化する営業支援サービス。',
    overviewImage: '/images/services/matching/matching.png'
  },
  {
    id: 'ai-tools',
    title: '不動産業務効率化AIツール',
    description: '日常業務の「わからない」「めんどくさい」「抜け漏れ」を解消するAIソリューション群。',
    overviewImage: '/images/services/maisoku/maisoku-ocr.png',
    link: '/projects'
  }
];
