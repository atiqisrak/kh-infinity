import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getLocalizedProductsByType } from '@/lib/localized-products'
import ProductCard from '@/components/products/ProductCard'
import type { Locale } from '@/i18n/routing'

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('products')
  const importProducts = getLocalizedProductsByType('import', locale as Locale)
  const exportProducts = getLocalizedProductsByType('export', locale as Locale)

  return (
    <div>
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-orange-500 font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4 block">
              {t('collection')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800 leading-tight">
              {t('pageTitle')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('pageDescription')}{' '}
              <Link
                href="/services"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                {locale === 'bn' ? 'আমদানি-রপ্তানি সেবা' : 'Import-export services'}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="py-8 mb-4">
            <span className="text-green-600 font-medium tracking-wider uppercase text-sm block mb-2">
              {t('importSection')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800">{t('importHeading')}</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">{t('importSubtext')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {importProducts.map((product) => (
              <ProductCard key={product.id} product={product} theme="import" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="py-8 mb-4">
            <span className="text-orange-600 font-medium tracking-wider uppercase text-sm block mb-2">
              {t('exportSection')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800">{t('exportHeading')}</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">{t('exportSubtext')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {exportProducts.map((product) => (
              <ProductCard key={product.id} product={product} theme="export" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base"
            >
              {t('requestQuote')}
            </Link>
            <Link
              href="/industries/fmcg"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold text-sm sm:text-base"
            >
              {locale === 'bn' ? 'শিল্পখাত দেখুন' : 'View Industries'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
