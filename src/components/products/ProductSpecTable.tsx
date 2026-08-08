import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductSpecTableProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductSpecTable({
  product,
  theme,
  labels,
}: ProductSpecTableProps) {
  const entries = Object.entries(product.specifications)
  if (entries.length === 0) return null

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className={`${theme.bgColorLight} px-6 py-4 border-b border-gray-200`}>
        <h3 className="text-lg font-bold text-gray-800">{labels.technicalSpecs}</h3>
      </div>
      <table className="w-full text-left">
        <tbody>
          {entries.map(([key, value], index) => (
            <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <th scope="row" className="px-6 py-4 font-semibold text-gray-700 w-1/3 align-top">
                {key}
              </th>
              <td className="px-6 py-4 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
