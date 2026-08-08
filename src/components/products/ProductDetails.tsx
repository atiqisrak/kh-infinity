import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'
import ProductSpecTable from './ProductSpecTable'

interface ProductDetailsProps {
  product: Product
  theme: ProductTheme
  isImport: boolean
  labels: ProductLabels
}

export default function ProductDetails({
  product,
  theme,
  isImport,
  labels,
}: ProductDetailsProps) {
  return (
    <section id="specifications" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-3 md:mb-4`}
          >
            {labels.productDetails}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.everythingYouNeed}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <ProductSpecTable product={product} theme={theme} labels={labels} />

          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className={`${theme.iconColor} text-2xl mb-4`}>
                <i className="fas fa-heart" aria-hidden />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
                {isImport ? labels.healthBenefits : labels.keyFeatures}
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className={`fas fa-check ${theme.iconColor} mt-1 shrink-0`} aria-hidden />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className={`${theme.iconColor} text-2xl mb-4`}>
                <i className="fas fa-box" aria-hidden />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
                {labels.packagingOptions}
              </h3>
              <ul className="space-y-3">
                {product.packaging.map((option, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className={`fas fa-cube ${theme.iconColor} mt-1 shrink-0`} aria-hidden />
                    <span className="text-gray-600">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
