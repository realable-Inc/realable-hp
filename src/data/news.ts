export interface NewsItem {
  id: string;
  date: string;
  category: "release" | "update" | "media" | "info";
  title: string;
  link?: {
    url: string;
    isExternal?: boolean;
  };
}

export const categoryLabels: Record<NewsItem["category"], string> = {
  release: "リリース",
  update: "アップデート",
  media: "メディア",
  info: "お知らせ",
};

export const categoryColors: Record<NewsItem["category"], string> = {
  release: "bg-blue-600 text-white",
  update: "bg-green-600 text-white",
  media: "bg-purple-600 text-white",
  info: "bg-gray-600 text-white",
};

export const newsData: NewsItem[] = [
  {
    id: "3",
    // TODO: 定期自動検索・通知機能のリリース日確定後に日付を更新する
    date: "2026.X.X",
    category: "release",
    title:
      "「Hakoma物件探しコパイロット」に保存した検索条件の定期自動検索とメール通知機能を追加しました",
    link: {
      url: "/services/hakoma-search-copilot#scheduled-search-notification",
      isExternal: false,
    },
  },
  {
    id: "2",
    date: "2026.6.25",
    category: "release",
    title:
      "「Hakoma物件探しコパイロット」に賃貸物件ページからワンクリックでREINS検索できる新機能を追加しました",
    link: {
      url: "/services/hakoma-search-copilot#portal-reins-search",
      isExternal: false,
    },
  },
  {
    id: "1",
    date: "2026.2.5",
    category: "release",
    title: "REINS検索をAIで効率化する新ツール「Hakoma物件探しコパイロット」をβ版としてリリースしました",
    link: {
      url: "/services/hakoma-search-copilot",
      isExternal: false,
    },
  },
  // Add more news items here
];

export function getLatestNews(count: number = 5): NewsItem[] {
  return newsData.slice(0, count);
}
