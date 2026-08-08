import { getTranslations } from 'next-intl/server'
import { Link as I18nLink } from '@/i18n/navigation'
import { Product } from '@/lib/products'

interface ProductBreadcrumbsProps {
  product: Product
  textColor?: string
  labels: {
    home: string
    products: string
  }
}

export default function ProductBreadcrumbs({
  product,
  textColor = 'text-green-600',
  labels,
}: ProductBreadcrumbsProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: labels.home,
        item: 'https://khi.com.bd/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: labels.products,
        item: 'https://khi.com.bd/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://khi.com.bd/products/${product.id}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 pt-24 pb-2 text-sm text-gray-500"
      >
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <I18nLink href="/" className="hover:text-gray-800 transition-colors">
              {labels.home}
            </I18nLink>
          </li>
          <li aria-hidden="true" className="mx-1">
            /
          </li>
          <li>
            <I18nLink
              href="/products"
              className="hover:text-gray-800 transition-colors"
            >
              {labels.products}
            </I18nLink>
          </li>
          <li aria-hidden="true" className="mx-1">
            /
          </li>
          <li>
            <span className={`font-medium ${textColor}`}>{product.name}</span>
          </li>
        </ol>
      </nav>
    </>
  )
}
