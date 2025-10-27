"use client";

import { useState } from "react";
import Link from "next/link";

type FAQQuestion = {
  question: string;
  answer: string;
  list?: string[];
  note?: string;
};

type FAQSection = {
  title: string;
  questions: FAQQuestion[];
};

type FAQData = {
  [key: string]: FAQSection;
};

interface FAQClientProps {
  faqData: FAQData;
}

export default function FAQClient({ faqData }: FAQClientProps) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [activeSection, setActiveSection] = useState<string>("import");
  const [feedbackGiven, setFeedbackGiven] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleItem = (itemKey: string) => {
    setOpenItems((prev) => ({ ...prev, [itemKey]: !prev[itemKey] }));
  };

  const handleFeedback = (itemKey: string) => {
    setFeedbackGiven((prev) => ({ ...prev, [itemKey]: true }));
  };

  const getCurrentDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `Last update: October 27, 2025`;
  };

  const currentSection = faqData[activeSection] || faqData.import;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cover/kh1.webp')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Everything you need to know
            </h1>
            <p className="text-base md:text-lg text-white/90 font-sans">
              {getCurrentDate()}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Sidebar - Topics */}
            <aside className="lg:w-64 flex-shrink-0">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6 font-sans">
                Topics
              </h2>
              <nav className="space-y-1">
                {Object.entries(faqData).map(([id, section]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setActiveSection(id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 font-sans ${
                      activeSection === id
                        ? "bg-gray-900 text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Right Content Area */}
            <main className="flex-1 lg:max-w-3xl">
              <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-10">
                {currentSection.title}
              </h2>
              <div className="space-y-4">
                {currentSection.questions.map((q, index) => {
                  const itemKey = `${activeSection}-${index}`;
                  const isOpen = openItems[itemKey] || false;
                  const hasFeedback = feedbackGiven[itemKey];

                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4 font-sans">
                          {q.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <svg
                              className="w-5 h-5 text-gray-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pt-6 text-gray-700 font-sans leading-relaxed">
                            <p className="mb-4">{q.answer}</p>
                            {q.list && (
                              <ul className="space-y-2 mb-4 ml-4">
                                {q.list.map((item, i) => (
                                  <li key={i} className="list-disc">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {"note" in q && q.note && (
                              <div className="mt-4 p-3 bg-amber-50 border-l-3 border-amber-400 rounded">
                                <p className="text-amber-800 font-semibold text-sm">
                                  {q.note}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Feedback Section */}
                          {!hasFeedback && (
                            <div className="mt-6 pt-6 border-t border-gray-100">
                              <p className="text-sm text-gray-600 mb-3 font-sans">
                                Is this helpful?
                              </p>
                              <div className="flex gap-4">
                                <button
                                  onClick={() => handleFeedback(itemKey)}
                                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-sm font-sans">Yes</span>
                                </button>
                                <button
                                  onClick={() => handleFeedback(itemKey)}
                                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .967-.18 1.316-.504l2.877-2.977M14 14h2m-6 0V9a2 2 0 012-2h2m0 0V7a2 2 0 00-2-2h-2.586a1 1 0 00-.707.293l-3.414 3.414a1 1 0 01-.414.293H10m6 0v2m0-2h.01M14 14v2.01"
                                    />
                                  </svg>
                                  <span className="text-sm font-sans">No</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-200 bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl  font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8 font-sans">
            Our team is here to help. Contact us for personalized assistance
            with your import/export needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold font-sans"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
