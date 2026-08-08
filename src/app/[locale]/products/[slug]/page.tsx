import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { buildProductSchema, speakableWebPageSchema } from '@/lib/schema-helpers'
import {
  getLocalizedProduct,
  getLocalizedRelatedProducts,
} from '@/lib/localized-products'
import ProductPageContent from '@/components/products/ProductPageContent'
import { routing, type Locale } from '@/i18n/routing'

interface ProductPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const { products } = await import('@/lib/products')

  return routing.locales.flatMap((locale) =>
    products.map((product) => ({
      locale,
      slug: product.id,
    }))
  )
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const product = getLocalizedProduct(slug, locale as Locale)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  const productUrl = `https://khi.com.bd/${locale}/products/${product.id}`

  return {
    title: `${product.brand ? product.brand + ' ' : ''}${
      product.name
    } - K.H. Infinity | Premium ${
      product.type === 'import' ? 'Import' : 'Export'
    } Product`,
    description: product.geoAnchor ?? product.description,
    keywords: `${product.name}, ${product.type} product, ${product.category}, K.H. Infinity, Bangladesh trade`,
    alternates: {
      canonical: productUrl,
      languages: {
        en: `https://khi.com.bd/en/products/${product.id}`,
        bn: `https://khi.com.bd/bn/products/${product.id}`,
      },
    },
    openGraph: {
      title: `${product.brand ? product.brand + ' ' : ''}${product.name} - K.H. Infinity`,
      description: product.description,
      images: [product.image],
      url: productUrl,
      siteName: 'K.H. Infinity',
      type: 'website',
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.brand ? product.brand + ' ' : ''}${product.name} - K.H. Infinity`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const product = getLocalizedProduct(slug, locale as Locale)

  if (!product) {
    notFound()
  }

  const relatedProducts = getLocalizedRelatedProducts(product, locale as Locale)
  const productUrl = `https://khi.com.bd/${locale}/products/${product.id}`
  const structuredData = buildProductSchema(product)
  const speakableData = speakableWebPageSchema({
    url: productUrl,
    name: product.name,
    dateModified: product.updatedAt,
  })

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableData) }}
      />
      <ProductPageContent product={product} relatedProducts={relatedProducts} />
    </div>
  )
}
