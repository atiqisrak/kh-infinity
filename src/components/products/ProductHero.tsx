import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductHeroProps {
  product: Product
  theme: ProductTheme
  variant?: 'standard' | 'premium'
  labels: ProductLabels
}

export default function ProductHero({
  product,
  theme,
  variant = 'standard',
  labels,
}: ProductHeroProps) {
  const tradeLabel =
    product.type === 'import' ? labels.directB2BImport : labels.directB2BExport

  if (variant === 'premium') {
    return (
      <section className="relative pt-28 pb-16 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="container relative z-10 mx-auto px-4 text-white pb-4">
          <span
            className={`${theme.textColor.replace('600', '400')} font-semibold uppercase text-sm mb-2 tracking-wide block`}
          >
            {tradeLabel}
            {product.hsCode && ` · HS ${product.hsCode}`}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl leading-tight">
            {product.brand && <span className="opacity-90">{product.brand} </span>}
            {product.name}
          </h1>
          {product.geoAnchor && (
            <p
              className="text-lg text-gray-100 max-w-3xl leading-relaxed geo-anchor font-medium mb-6"
              data-speakable
            >
              {product.geoAnchor}
            </p>
          )}
          {product.geoHeading && (
            <h2 className="sr-only">{product.geoHeading}</h2>
          )}
          <div className="flex flex-wrap gap-3">
            <a
              href="#specifications"
              className={`${theme.bgColor} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium`}
            >
              {labels.viewSpecifications}
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              {labels.requestQuote}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span
                className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-3`}
              >
                {tradeLabel}
                {product.hsCode && ` · HS ${product.hsCode}`}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {product.brand && (
                  <span className={theme.textColorStrong}>{product.brand} </span>
                )}
                {product.name}
              </h1>
              {product.geoAnchor && (
                <p
                  className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed geo-anchor font-medium"
                  data-speakable
                >
                  {product.geoAnchor}
                </p>
              )}
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
              {product.geoHeading && (
                <h2 className="sr-only">{product.geoHeading}</h2>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#specifications"
                className={`${theme.bgColor} text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg ${theme.bgColorHover} transition-colors shadow-lg text-sm md:text-base font-medium`}
              >
                {labels.viewSpecifications}
              </a>
              <Link
                href={`/quote?product=${product.id}`}
                className={`border-2 ${theme.borderColor} ${theme.textColor} px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base font-medium ${
                  product.type === 'import'
                    ? 'hover:bg-green-500 hover:text-white'
                    : 'hover:bg-orange-500 hover:text-white'
                }`}
              >
                {labels.requestQuote}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
