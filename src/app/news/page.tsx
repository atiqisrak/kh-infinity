"use client";

import { useState } from "react";
import Link from "next/link";
import { getNewsItems, getIndustryNews, getCompanyNews } from "@/lib/news";

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "industry" | "company">(
    "all"
  );

  const industryNews = getIndustryNews();
  const companyNews = getCompanyNews();
  const allNews = getNewsItems();

  const displayedNews =
    activeTab === "industry"
      ? industryNews
      : activeTab === "company"
      ? companyNews
      : allNews;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-orange-50 via-orange-100 to-white overflow-hidden pt-20 md:pt-0">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Trade News & Updates
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
              Stay informed with the latest insights on international trade,
              industry trends, and company news from K.H. Infinity.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-colors text-sm sm:text-base ${
                  activeTab === "all"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                All News ({allNews.length})
              </button>
              <button
                onClick={() => setActiveTab("industry")}
                className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-colors text-sm sm:text-base ${
                  activeTab === "industry"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Industry News ({industryNews.length})
              </button>
              <button
                onClick={() => setActiveTab("company")}
                className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-colors text-sm sm:text-base ${
                  activeTab === "company"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Company News ({companyNews.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {displayedNews.map((news) => {
                const date = new Date(news.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <article
                    key={news.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4 sm:p-6 border border-gray-100"
                  >
                    <div className="mb-3 md:mb-4">
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                          news.category === "Industry"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {news.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 hover:text-orange-500 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{date}</span>
                      {news.source && (
                        <span className="font-semibold">{news.source}</span>
                      )}
                    </div>
                    {news.externalLink && (
                      <a
                        href={news.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
                      >
                        Read more{" "}
                        <i className="fas fa-external-link-alt ml-2"></i>
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            Stay Updated
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest trade news, industry
            updates, and company announcements.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-white text-orange-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
