"use client";

import Link from "next/link";
import { getLatestNews, categoryLabels, categoryColors } from "@/data/news";

export default function NewsSection() {
  const news = getLatestNews(5);

  if (news.length === 0) return null;

  return (
    <section className="py-8 bg-gray-50 border-b border-gray-200">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-bold text-gray-900">News</h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <ul className="divide-y divide-gray-200">
          {news.map((item) => (
            <li key={item.id} className="py-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <time className="text-sm text-gray-500 shrink-0 w-24">
                  {item.date}
                </time>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shrink-0 w-fit ${categoryColors[item.category]}`}
                >
                  {categoryLabels[item.category]}
                </span>
                {item.link ? (
                  item.link.isExternal ? (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-800 hover:text-blue-600 hover:underline"
                    >
                      {item.title}
                      <span className="ml-1 text-xs text-gray-400">↗</span>
                    </a>
                  ) : (
                    <Link
                      href={item.link.url}
                      className="text-sm text-gray-800 hover:text-blue-600 hover:underline"
                    >
                      {item.title}
                    </Link>
                  )
                ) : (
                  <span className="text-sm text-gray-800">{item.title}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
