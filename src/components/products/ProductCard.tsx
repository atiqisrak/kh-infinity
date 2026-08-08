import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'

interface ProductCardProps {
  product: Product
  theme?: 'import' | 'export'
}

export default function ProductCard({ product, theme }: ProductCardProps) {
  const isImport = theme ?? product.type === 'import'
  const badgeColor = isImport
    ? 'bg-green-100 text-green-700'
    : 'bg-orange-100 text-orange-700'
  const linkColor = isImport
    ? 'text-green-600 hover:text-green-700'
    : 'text-orange-600 hover:text-orange-700'

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
        />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase ${badgeColor}`}
        >
          {isImport ? 'Import' : 'Export'}
        </span>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
          {product.hsCode && (
            <span className="text-xs text-gray-400">· HS {product.hsCode}</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {product.brand && (
            <span className={linkColor}>{product.brand} </span>
          )}
          {product.name}
        </h3>
        {product.hsSection && (
          <p className="text-xs text-gray-500 mb-2 line-clamp-1">
            {product.hsSection}
          </p>
        )}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>
        {product.trustBadges && product.trustBadges.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.trustBadges.slice(0, 2).map((badge) => (
              <span
                key={badge}
                className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <Link
          href={`/products/${product.id}`}
          className={`inline-flex items-center gap-1 font-semibold text-sm ${linkColor} transition-colors`}
        >
          View Details
          <i className="fas fa-arrow-right text-xs" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
