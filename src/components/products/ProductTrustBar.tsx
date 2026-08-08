import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductTrustBarProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductTrustBar({
  product,
  theme,
  labels,
}: ProductTrustBarProps) {
  const badges = product.trustBadges ?? []
  const commercial = product.commercial
  if (!badges.length && !commercial) return null

  return (
    <div className={`${theme.bgColorLight} border-y border-gray-100 py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border ${theme.borderColor} ${theme.textColor}`}
                >
                  <i className="fas fa-check-circle" aria-hidden />
                  {badge}
                </span>
              ))}
            </div>
          )}
          {commercial && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
              {commercial.moq && (
                <span>
                  <strong className="text-gray-800">{labels.moq}:</strong> {commercial.moq}
                </span>
              )}
              {commercial.leadTime && (
                <span>
                  <strong className="text-gray-800">{labels.leadTime}:</strong>{' '}
                  {commercial.leadTime}
                </span>
              )}
              {commercial.incoterms && (
                <span>
                  <strong className="text-gray-800">{labels.incoterms}:</strong>{' '}
                  {commercial.incoterms}
                </span>
              )}
              {commercial.shelfLife && (
                <span>
                  <strong className="text-gray-800">{labels.shelfLife}:</strong>{' '}
                  {commercial.shelfLife}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
