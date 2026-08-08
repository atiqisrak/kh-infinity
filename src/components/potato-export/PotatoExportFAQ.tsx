"use client";

import { useState } from "react";
import { potatoExportFaq } from "@/lib/potato-export-faq";

export default function PotatoExportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {potatoExportFaq.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-gray-800 hover:bg-orange-50/80 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <span
                className={`text-orange-500 shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <i className="fas fa-chevron-down" aria-hidden />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
