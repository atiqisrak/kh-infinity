import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductQualityProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductQuality({
  product,
  theme,
  labels,
}: ProductQualityProps) {
  const qualityNote = product.qualityNote

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {labels.qualityAssurance}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.originQuality}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              {labels.sourcing}
            </h3>
            {qualityNote && (
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                {qualityNote}
              </p>
            )}
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                {labels.originCountries}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sourcing.countries.map((country) => (
                  <span
                    key={country}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-700"
                  >
                    <i className={`fas fa-globe ${theme.iconColor}`} aria-hidden />
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              {labels.certifications}
            </h3>
            <ul className="space-y-3">
              {product.sourcing.certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <i
                    className={`fas fa-certificate ${theme.iconColor} mt-1 shrink-0`}
                    aria-hidden
                  />
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
            {product.trustBadges && product.trustBadges.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  {labels.trustIndicators}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className={`text-xs px-2.5 py-1 rounded-full ${theme.bgColorLight} ${theme.textColor} font-medium`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
