'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import QuoteForm from '@/components/QuoteForm'
import type { ProductTheme } from '@/lib/product-theme'

interface ProductQuoteSectionProps {
  productId: string
  productName: string
  theme: ProductTheme
}

export default function ProductQuoteSection({
  productId,
  productName,
  theme,
}: ProductQuoteSectionProps) {
  const t = useTranslations('products')

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {t('getQuote')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {t('requestQuoteFor', { name: productName })}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">{t('quoteSubtext')}</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <QuoteForm defaultProduct={productId} compact />
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          {t('preferEmail')}{' '}
          <Link
            href={`/quote?product=${productId}`}
            className={`${theme.textColor} font-medium hover:underline`}
          >
            {t('openFullQuote')}
          </Link>
        </p>
      </div>
    </section>
  )
}
