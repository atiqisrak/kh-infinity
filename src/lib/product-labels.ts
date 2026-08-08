import { getTranslations } from 'next-intl/server'

export async function getProductLabels() {
  const t = await getTranslations('products')
  const tc = await getTranslations('common')

  return {
    productDetails: t('productDetails'),
    everythingYouNeed: t('everythingYouNeed'),
    healthBenefits: t('healthBenefits'),
    keyFeatures: t('keyFeatures'),
    packagingOptions: t('packagingOptions'),
    regulatory: t('regulatory'),
    regulatoryHeading: t('regulatoryHeading'),
    hsCode: t('hsCode'),
    bctSection: t('bctSection'),
    ttiRange: t('ttiRange'),
    bctReference: t('bctReference'),
    lastUpdated: t('lastUpdated'),
    documentation: t('documentation'),
    docHeading: t('docHeading'),
    docSubtext: t('docSubtext'),
    supplyChain: t('supplyChain'),
    supplyChainHeading: t('supplyChainHeading'),
    qualityAssurance: t('qualityAssurance'),
    originQuality: t('originQuality'),
    sourcing: t('sourcing'),
    certifications: t('certifications'),
    originCountries: t('originCountries'),
    trustIndicators: t('trustIndicators'),
    faq: t('faq'),
    faqHeading: t('faqHeading'),
    applications: t('applications'),
    useCasesHeading: t('useCasesHeading'),
    technicalSpecs: t('technicalSpecs'),
    relatedProducts: t('relatedProducts'),
    viewSpecifications: t('viewSpecifications'),
    requestQuote: t('requestQuote'),
    directB2BImport: t('directB2BImport'),
    directB2BExport: t('directB2BExport'),
    gallery: t('gallery'),
    viewDetails: tc('viewDetails'),
    moq: t('moq'),
    leadTime: t('leadTime'),
    incoterms: t('incoterms'),
    shelfLife: t('shelfLife'),
    nutritionInfo: t('nutritionInfo'),
    per100g: t('per100g'),
    additionalInfo: t('additionalInfo'),
  }
}

export type ProductLabels = Awaited<ReturnType<typeof getProductLabels>>
