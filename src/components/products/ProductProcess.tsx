import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductProcessProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductProcess({
  product,
  theme,
  labels,
}: ProductProcessProps) {
  if (!product.processSteps?.length) return null

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {labels.supplyChain}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.supplyChainHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {product.processSteps.map((step, index) => (
            <div key={step.title} className="relative">
              <div
                className={`${theme.bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4`}
              >
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
