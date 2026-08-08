'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('locale')

  const switchLocale = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <div
      className="flex items-center rounded-lg border border-gray-200 bg-gray-50 p-0.5 text-xs font-semibold"
      role="group"
      aria-label={t('switchLanguage')}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={`px-2.5 py-1.5 rounded-md transition-colors ${
            locale === loc
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-pressed={locale === loc}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  )
}
