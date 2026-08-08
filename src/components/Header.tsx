'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import NavDropdown from '@/components/navigation/NavDropdown'
import MobileNavGroup from '@/components/navigation/MobileNavGroup'
import FlaticonIcon from '@/components/navigation/FlaticonIcon'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import {
  primaryLinkDefs,
  getImportNavGroup,
  getExportNavGroup,
  getServicesNavGroup,
  getResourcesNavGroup,
  contactPhone,
  contactEmail,
} from '@/lib/navigation'
import { getLocalizedProductName } from '@/lib/localized-products'
import type { Locale } from '@/i18n/routing'

const navLinkClass =
  'inline-flex items-center gap-1.5 px-2 xl:px-2.5 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50/60 whitespace-nowrap'

const mobileNavLinkClass =
  'flex items-center gap-2.5 rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-600'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale() as Locale

  const productLabel = useCallback(
    (id: string, fallback: string) =>
      getLocalizedProductName(id, locale) ?? fallback,
    [locale]
  )

  const navGroups = useMemo(
    () => [
      getImportNavGroup((key) => t(key as Parameters<typeof t>[0]), productLabel),
      getExportNavGroup((key) => t(key as Parameters<typeof t>[0]), productLabel),
      getServicesNavGroup((key) => t(key as Parameters<typeof t>[0])),
      getResourcesNavGroup((key) => t(key as Parameters<typeof t>[0])),
    ],
    [t, productLabel]
  )

  const primaryLinks = useMemo(
    () =>
      primaryLinkDefs.map((def) => ({
        label: t(def.labelKey as Parameters<typeof t>[0]),
        href: def.href,
        icon: def.icon,
      })),
    [t]
  )

  const closeMobile = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <nav
            className="flex h-16 items-center gap-2 lg:gap-3"
            aria-label="Main navigation"
          >
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/images/brand/official_logo.svg"
                alt="K.H. Infinity"
                width={120}
                height={48}
                className="h-9 w-auto lg:h-10 xl:h-11 transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            <ul className="hidden xl:flex flex-1 min-w-0 list-none items-center justify-center gap-x-0.5 2xl:gap-x-1">
              {primaryLinks.slice(0, 1).map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link href={link.href} className={navLinkClass}>
                    <FlaticonIcon name={link.icon} className="text-sm text-orange-500/80 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {navGroups.map((group) => (
                <NavDropdown key={group.id} group={group} />
              ))}
              {primaryLinks.slice(1).map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link href={link.href} className={navLinkClass}>
                    <FlaticonIcon name={link.icon} className="text-sm text-orange-500/80 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 shrink-0 ml-auto">
              <div className="hidden xl:block">
                <LocaleSwitcher />
              </div>
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center rounded-lg bg-orange-600 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                {t('requestQuote')}
              </Link>

              <button
                type="button"
                className="xl:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
                aria-expanded={isMobileMenuOpen}
              >
                <FlaticonIcon
                  name={isMobileMenuOpen ? 'cross-small' : 'menu-burger'}
                  className="text-lg"
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity xl:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobile}
        aria-hidden
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
          <span className="text-sm font-semibold text-gray-900">{t('menu')}</span>
          <button
            type="button"
            onClick={closeMobile}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            aria-label={t('closeMenu')}
          >
            <FlaticonIcon name="cross-small" className="text-lg" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1 list-none">
            {primaryLinks.slice(0, 1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMobile} className={mobileNavLinkClass}>
                  <FlaticonIcon name={link.icon} className="text-base text-orange-500" />
                  {link.label}
                </Link>
              </li>
            ))}
            {navGroups.map((group) => (
              <MobileNavGroup key={group.id} group={group} onNavigate={closeMobile} />
            ))}
            {primaryLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMobile} className={mobileNavLinkClass}>
                  <FlaticonIcon name={link.icon} className="text-base text-orange-500" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-100 pt-6 space-y-3">
            <a
              href={`tel:${contactPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600"
            >
              <FlaticonIcon name="phone-call" className="text-base text-orange-500" />
              {contactPhone}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600"
            >
              <FlaticonIcon name="envelope" className="text-base text-orange-500" />
              {contactEmail}
            </a>
          </div>
        </nav>

        <div className="border-t border-gray-100 p-4 space-y-3">
          <LocaleSwitcher />
          <Link
            href="/quote"
            onClick={closeMobile}
            className="block w-full rounded-lg bg-orange-600 py-3 text-center text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            {t('requestQuote')}
          </Link>
        </div>
      </aside>
    </>
  )
}
