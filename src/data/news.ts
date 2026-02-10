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
    id: "1",
    date: "2026.2.5",
    category: "release",
    title: "REINS検索をAIで効率化する新ツール「REINS検索コパイロット」をβ版としてリリースしました",
    link: {
      url: "/services/reins-search-copilot",
      isExternal: false,
    },
  },
  // Add more news items here
];

export function getLatestNews(count: number = 5): NewsItem[] {
  return newsData.slice(0, count);
}
