import { Suspense } from 'react'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title:
    'Request a Quote - K.H. Infinity | Import Export Trading Company Bangladesh',
  description:
    'Request a quote for your import-export needs. Get competitive pricing on premium products including cooking oils, milk powder, sugar, pulses, and more. Fast response within 24 hours.',
  alternates: {
    canonical: 'https://khi.com.bd/en/quote',
    languages: {
      en: 'https://khi.com.bd/en/quote',
      bn: 'https://khi.com.bd/bn/quote',
    },
  },
}

async function QuoteFormWithParams({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>
}) {
  const { product: defaultProduct } = await searchParams
  return <QuoteForm defaultProduct={defaultProduct ?? ''} />
}

export default async function QuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ product?: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div>
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: 'url(/images/cover/kh1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl max-w-3xl">
            Get competitive pricing and reliable delivery for your import-export
            needs. Complete the form below and we&apos;ll respond within 24
            hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <Suspense fallback={<div className="h-96 bg-gray-100 rounded-lg animate-pulse" />}>
                <QuoteFormWithParams searchParams={searchParams} />
              </Suspense>
            </div>

            <div className="space-y-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Why Request a Quote?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3" />
                    <span>Competitive pricing guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3" />
                    <span>Fast 24-hour response time</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3" />
                    <span>Customized solutions for your needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Products</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Link href="/products/sunflower-oil" className="hover:text-orange-500">
                      Cooking Oils
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/milk-powder" className="hover:text-orange-500">
                      Dairy Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/potato" className="hover:text-orange-500">
                      Agricultural Products
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/products"
                  className="block mt-4 text-orange-500 hover:text-orange-600 font-semibold"
                >
                  View All Products →
                </Link>
              </div>

              <div className="bg-white border-2 border-orange-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Need Help?</h3>
                <Link
                  href="/contact"
                  className="block text-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
