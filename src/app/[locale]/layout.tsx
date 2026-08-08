import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import { routing, type Locale } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'
import '../web-vitals'

const isProduction = process.env.NODE_ENV === 'production'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
  variable: '--font-inter',
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  display: 'swap',
  variable: '--font-bengali',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://khi.com.bd/${locale}`,
      languages: {
        en: 'https://khi.com.bd/en',
        bn: 'https://khi.com.bd/bn',
      },
    },
    metadataBase: new URL('https://khi.com.bd'),
    icons: {
      icon: '/images/favicon.ico',
      apple: '/images/favicon.ico',
    },
    openGraph: {
      type: 'website',
      url: `https://khi.com.bd/${locale}`,
      siteName: 'K.H. Infinity',
      title: t('title'),
      description: t('description'),
      images: ['https://khi.com.bd/images/cover/kh1.webp'],
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://khi.com.bd/images/cover/kh1.webp'],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'K.H. Infinity',
    url: 'https://khi.com.bd',
    logo: 'https://khi.com.bd/images/logo.png',
    description:
      locale === 'bn'
        ? 'কে.এইচ. ইনফিনিটি — বাংলাদেশে প্রিমিয়াম পণ্য আমদানি-রপ্তানিতে আপনার বিশ্বস্ত অংশীদার।'
        : 'K.H. Infinity - Your trusted partner in global trade.',
    foundingDate: '2018',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari',
      addressLocality: 'Dhaka',
      postalCode: '1203',
      addressCountry: 'Bangladesh',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+880 1577081856',
        contactType: 'customer service',
        email: 'info@khi.com.bd',
        availableLanguage: ['en', 'bn'],
      },
    ],
    sameAs: [
      'https://facebook.com/khinfinity',
      'https://linkedin.com/company/khinfinity',
      'https://instagram.com/khinfinity',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'K.H. Infinity',
    alternateName: 'KHI',
    url: `https://khi.com.bd/${locale}`,
    inLanguage: locale,
    description:
      locale === 'bn'
        ? 'বাংলাদেশে বাল্ক পণ্যের সরাসরি B2B আমদানি ও রপ্তানি।'
        : 'Direct B2B importer and exporter of bulk commodities in Bangladesh.',
    publisher: {
      '@type': 'Organization',
      name: 'K.H. Infinity',
    },
  }

  return (
    <html
      lang={locale}
      className={`font-sans bg-gray-50 ${inter.variable} ${notoSansBengali.variable}`}
      data-theme="gray"
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdn-uicons.flaticon.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${locale === 'bn' ? notoSansBengali.className : inter.className}`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer locale={locale as Locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
        {isProduction && <SpeedInsights />}
        {isProduction && <Analytics />}
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
