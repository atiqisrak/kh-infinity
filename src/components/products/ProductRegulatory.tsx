import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductRegulatoryProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductRegulatory({
  product,
  theme,
  labels,
}: ProductRegulatoryProps) {
  if (!product.hsCode && !product.hsSection && !product.ttiRange) return null

  return (
    <section className="py-10 md:py-14 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {labels.regulatory}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.regulatoryHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {product.hsCode && (
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {labels.hsCode}
              </p>
              <p className="text-lg font-bold text-gray-800">{product.hsCode}</p>
            </div>
          )}
          {product.hsSection && (
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 sm:col-span-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {labels.bctSection}
              </p>
              <p className="text-base font-semibold text-gray-800">{product.hsSection}</p>
            </div>
          )}
          {product.ttiRange && (
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {labels.ttiRange}
              </p>
              <p className="text-lg font-bold text-gray-800">{product.ttiRange}</p>
            </div>
          )}
          {product.bctReference && (
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 sm:col-span-2 lg:col-span-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {labels.bctReference}
              </p>
              <p className="text-base text-gray-700">{product.bctReference}</p>
            </div>
          )}
          {product.updatedAt && (
            <div className="sm:col-span-2 lg:col-span-4 text-center text-sm text-gray-500">
              {labels.lastUpdated}: {product.updatedAt}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
