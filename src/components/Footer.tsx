import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { getLocalizedProductName } from '@/lib/localized-products'
import type { Locale } from '@/i18n/routing'

export default async function Footer({ locale }: { locale?: Locale }) {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')
  const currentLocale = (locale ?? 'en') as Locale
  const year = 2026

  const productIds = [
    'sunflower-oil',
    'milk-powder',
    'pulses',
    'sugar',
    'soyabean-oil',
    'potato',
    'almonds',
    'handicrafts',
  ] as const

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/brand/official_logo_lite.svg"
              alt="K.H. Infinity"
              width={120}
              height={48}
              className="h-12 mb-6"
            />
            <p className="text-gray-400 mb-6">{t('tagline')}</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/khinfinity"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://linkedin.com/company/khinfinity"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://twitter.com/khinfinity"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/imports" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {t('imports')}
                </Link>
              </li>
              <li>
                <Link href="/exports" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {t('exports')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href="/services/customs" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {t('customsClearance')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {tNav('faq')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{tNav('resources')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {tNav('blog')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {tNav('news')}
                </Link>
              </li>
              <li>
                <Link href="/awards" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {tNav('awards')}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {tNav('events')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t('products')}</h3>
            <ul className="space-y-3">
              {productIds.map((id) => (
                <li key={id}>
                  <Link
                    href={`/products/${id}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {getLocalizedProductName(id, currentLocale) ?? id}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products/potato-gulf"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {tNav('potatoGulf')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-6">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-orange-500 mt-1 mr-3" />
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-orange-500 mr-3" />
                <a
                  href="tel:+8801577081856"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  +880 1577081856
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-orange-500 mr-3" />
                <a
                  href="mailto:info@khi.com.bd"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  info@khi.com.bd
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t('copyright', { year })}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                {t('terms')}
              </Link>
              <Link
                href="/equal-opportunity"
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                {t('equalOpportunity')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
