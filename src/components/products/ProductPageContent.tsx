import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Product } from '@/lib/products'
import { getProductTheme } from '@/lib/product-theme'
import { getProductLabels } from '@/lib/product-labels'
import ProductBreadcrumbs from './ProductBreadcrumbs'
import ProductHero from './ProductHero'
import ProductTrustBar from './ProductTrustBar'
import ProductNutrition from './ProductNutrition'
import ProductDetails from './ProductDetails'
import ProductRegulatory from './ProductRegulatory'
import ProductUseCases from './ProductUseCases'
import ProductProcess from './ProductProcess'
import ProductDocuments from './ProductDocuments'
import ProductQuality from './ProductQuality'
import ProductGallery from './ProductGallery'
import ProductFAQ from './ProductFAQ'
import ProductQuoteSection from './ProductQuoteSection'
import RelatedProducts from './RelatedProducts'

interface ProductPageContentProps {
  product: Product
  relatedProducts: Product[]
}

export default async function ProductPageContent({
  product,
  relatedProducts,
}: ProductPageContentProps) {
  const t = await getTranslations('products')
  const tCommon = await getTranslations('common')
  const labels = await getProductLabels()
  const isImport = product.type === 'import'
  const theme = getProductTheme(isImport)
  const isPremium = product.detailLevel === 'premium'

  return (
    <div>
      <ProductBreadcrumbs
        product={product}
        textColor={theme.textColor}
        labels={{ home: tCommon('home'), products: tCommon('products') }}
      />

      <ProductHero
        product={product}
        theme={theme}
        variant={isPremium ? 'premium' : 'standard'}
        labels={labels}
      />

      <ProductTrustBar product={product} theme={theme} labels={labels} />

      {product.id === 'potato' && (
        <section className="bg-orange-50 border-y border-orange-100">
          <div className="container mx-auto px-4 py-4 text-center text-gray-800">
            <span className="font-medium">{t('potatoGulfBanner')} </span>
            <Link
              href="/products/potato-gulf"
              className={`${theme.textColorStrong} font-semibold underline-offset-2 hover:underline`}
            >
              {t('potatoGulfLink')}
            </Link>
            <span className="text-gray-600"> {t('potatoGulfSuffix')}</span>
          </div>
        </section>
      )}

      {isPremium && product.useCases && (
        <ProductUseCases product={product} theme={theme} labels={labels} />
      )}

      <ProductNutrition product={product} iconColor={theme.iconColor} labels={labels} />

      <ProductDetails product={product} theme={theme} isImport={isImport} labels={labels} />

      <ProductRegulatory product={product} theme={theme} labels={labels} />

      <ProductProcess product={product} theme={theme} labels={labels} />

      <ProductDocuments product={product} theme={theme} labels={labels} />

      <ProductQuality product={product} theme={theme} labels={labels} />

      <ProductGallery product={product} labels={labels} />

      <ProductFAQ product={product} theme={theme} labels={labels} />

      <ProductQuoteSection
        productId={product.id}
        productName={product.name}
        theme={theme}
      />

      <RelatedProducts
        relatedProducts={relatedProducts}
        textColor={theme.textColor}
        iconColorHover={theme.iconColorHover}
        labels={labels}
      />
    </div>
  )
}
