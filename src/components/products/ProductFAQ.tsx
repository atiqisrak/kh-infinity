'use client'

import { useState } from 'react'
import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductFAQProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductFAQ({ product, theme, labels }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!product.faqs?.length) return null

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const accentHover =
    theme.primaryColor === 'green' ? 'hover:bg-green-50/80' : 'hover:bg-orange-50/80'

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {labels.faq}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.faqHeading}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {product.faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  className={`w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-gray-800 ${accentHover} transition-colors`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <span
                    className={`${theme.iconColor} shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
