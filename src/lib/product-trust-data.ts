import type { Product } from './products'

export type ProductDetailLevel = 'standard' | 'premium'

export interface ProductTrustData {
  detailLevel?: ProductDetailLevel
  qualityNote?: string
  faqs: { question: string; answer: string }[]
  documents: { name: string; description: string }[]
  commercial: {
    moq?: string
    leadTime?: string
    incoterms?: string
    shelfLife?: string
  }
  processSteps: { title: string; description: string }[]
  trustBadges: string[]
  gallery?: string[]
  useCases?: { title: string; description: string }[]
}

export const PRODUCT_TRUST_DATA: Record<string, ProductTrustData> = {
  'sunflower-oil': {
    detailLevel: 'premium',
    qualityNote:
      'Every shipment is accompanied by a Certificate of Analysis (COA) and BSTI-compliant lab testing. We verify smoke point, peroxide value, and fatty acid profile before release.',
    commercial: {
      moq: '1 FCL (20ft container) or 500 cartons',
      leadTime: '21–35 days from order confirmation',
      incoterms: 'CIF Chittagong / FOB origin',
      shelfLife: '24 months from production date',
    },
    trustBadges: ['BSTI Certified', 'ISO 22000', 'HACCP', 'COA Provided'],
    faqs: [
      {
        question: 'What sizes are available for bulk import?',
        answer:
          'We supply 1L PET bottles, 5L bottles, and 15L carton boxes. Custom container loads and private-label packaging are available on enquiry for FMCG distributors.',
      },
      {
        question: 'Do you provide BSTI and customs documentation?',
        answer:
          'Yes. Each consignment includes commercial invoice, packing list, certificate of origin, bill of lading, and BSTI test reports. We handle NBR tariff classification under HS 1512.19.00.',
      },
      {
        question: 'Which origin countries do you source from?',
        answer:
          'Primary origins include Ukraine, Russia, and Argentina. We maintain multiple supplier relationships to ensure supply continuity and competitive pricing.',
      },
      {
        question: 'Can I request a sample before placing a bulk order?',
        answer:
          'Sample bottles (1L) are available for qualified B2B buyers. Contact our team with your company details and estimated monthly volume.',
      },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Detailed line-item invoice for customs clearance' },
      { name: 'Certificate of Origin', description: 'Verified origin documentation from supplier country' },
      { name: 'Certificate of Analysis', description: 'Lab report covering purity, smoke point, and peroxide value' },
      { name: 'BSTI Test Report', description: 'Bangladesh Standards and Testing Institution compliance' },
      { name: 'Bill of Lading', description: 'Shipping document for CIF/FOB consignments' },
    ],
    processSteps: [
      { title: 'Supplier Selection', description: 'Vetted producers with ISO 22000 and export track record' },
      { title: 'Pre-Shipment QC', description: 'COA review, container inspection, and seal verification' },
      { title: 'Customs Clearance', description: 'NBR classification, duty calculation, and port release' },
      { title: 'Warehouse Delivery', description: 'Temperature-controlled storage and last-mile dispatch' },
    ],
    useCases: [
      { title: 'FMCG Distribution', description: 'Retail-ready PET bottles for supermarket and wholesale channels' },
      { title: 'Food Manufacturing', description: 'Bulk containers for bakery, snack, and processed food producers' },
      { title: 'HRI Sector', description: '5L and 15L formats for hotels, restaurants, and catering operations' },
    ],
  },
  'milk-powder': {
    detailLevel: 'premium',
    qualityNote:
      'Skimmed milk powder batches are tested for protein content (34–36%), moisture, and microbiological standards. Halal certification available on request.',
    commercial: {
      moq: '1 FCL (25–27 MT)',
      leadTime: '30–45 days from order confirmation',
      incoterms: 'CIF Chittagong / CIF Mongla',
      shelfLife: '18–24 months in original packaging',
    },
    trustBadges: ['Halal Certified', 'ISO 22000', 'HACCP', 'COA Provided'],
    faqs: [
      {
        question: 'What protein content can I expect?',
        answer:
          'Our standard skimmed milk powder delivers 34–36% protein with max 4% moisture and max 1.5% fat. COA confirms batch-specific values.',
      },
      {
        question: 'Is Halal certification available?',
        answer:
          'Yes. We source from Halal-certified dairies in New Zealand, Australia, and the Netherlands. Halal certificates are included with each shipment.',
      },
      {
        question: 'What packaging options are available?',
        answer:
          'Standard 25kg multi-wall paper bags with polyethylene liner. 50kg bags and custom branding available for orders above 2 FCL.',
      },
      {
        question: 'How is the product stored during transit?',
        answer:
          'Containers are sealed and kept in dry, ventilated conditions. We recommend warehouse storage below 25°C and relative humidity under 65%.',
      },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Full customs-ready invoice with HS 0402.10.00' },
      { name: 'Certificate of Origin', description: 'Dairy origin verification from exporting country' },
      { name: 'Certificate of Analysis', description: 'Protein, moisture, fat, and microbiological results' },
      { name: 'Halal Certificate', description: 'Available from certified dairy origins' },
      { name: 'Health Certificate', description: 'Veterinary/phytosanitary where required by BFSA' },
    ],
    processSteps: [
      { title: 'Origin Verification', description: 'Supplier audit and dairy traceability confirmation' },
      { title: 'Batch Testing', description: 'Protein, moisture, and microbiological QC before loading' },
      { title: 'Import Clearance', description: 'BFSA and NBR compliance for dairy imports' },
      { title: 'Cold-Chain Handoff', description: 'Dry storage delivery to your warehouse or production facility' },
    ],
    useCases: [
      { title: 'Dairy Processing', description: 'Reconstitution for yoghurt, cheese, and beverage production' },
      { title: 'Confectionery', description: 'Ingredient for chocolate, bakery, and dessert manufacturing' },
      { title: 'Nutrition Products', description: 'Protein enrichment for health foods and supplements' },
    ],
  },
  almonds: {
    detailLevel: 'premium',
    qualityNote:
      'U.S. California almonds with radioactivity verification and aflatoxin screening. BSTI-compliant import documentation for food manufacturing and retail.',
    commercial: {
      moq: '500 kg (partial container) or 1 FCL',
      leadTime: '25–40 days from order confirmation',
      incoterms: 'CIF Chittagong',
      shelfLife: '12–18 months in vacuum-sealed packaging',
    },
    trustBadges: ['BSTI Compliant', 'Halal Available', 'Aflatoxin Tested', 'U.S. Origin'],
    faqs: [
      {
        question: 'Are U.S. almonds safe for import into Bangladesh?',
        answer:
          'Yes. We verify radioactivity levels and aflatoxin compliance per BSTI requirements. Each batch includes COA and origin documentation from California suppliers.',
      },
      {
        question: 'What is the applicable import duty (TTI)?',
        answer:
          'Almonds fall under HS 0802.12.00 with a TTI range of 64.25%–96.10% depending on origin and classification. We provide transparent duty estimates before order confirmation.',
      },
      {
        question: 'Can almonds be supplied for Ramadan retail programmes?',
        answer:
          'Yes. We offer 25kg vacuum bags for manufacturing and custom retail packs on enquiry. Lead times for Ramadan programmes should be confirmed 60+ days in advance.',
      },
      {
        question: 'Do you supply blanched or sliced almonds?',
        answer:
          'Standard supply is whole natural almonds. Blanched, sliced, and slivered forms are available through our supplier network on request.',
      },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Customs invoice with HS 0802.12.00 classification' },
      { name: 'Certificate of Origin', description: 'U.S. origin verification (California)' },
      { name: 'Certificate of Analysis', description: 'Aflatoxin, moisture, and grade confirmation' },
      { name: 'Radioactivity Test Report', description: 'BSTI-required safety verification' },
      { name: 'Phytosanitary Certificate', description: 'Plant health documentation for nut imports' },
    ],
    processSteps: [
      { title: 'Supplier Qualification', description: 'California handler verification and grade selection' },
      { title: 'Pre-Shipment Testing', description: 'Aflatoxin, moisture, and radioactivity screening' },
      { title: 'Customs & BSTI', description: 'Duty assessment under confirmed TTI range' },
      { title: 'Delivery', description: 'Vacuum-sealed bags delivered to your facility' },
    ],
    useCases: [
      { title: 'Food Manufacturing', description: 'Bakery, confectionery, and snack production' },
      { title: 'Retail & Gifting', description: 'Premium packs for supermarkets and Ramadan hampers' },
      { title: 'HRI Sector', description: 'Bulk supply for hotels, airlines, and catering' },
    ],
  },
  'medjool-dates': {
    detailLevel: 'premium',
    qualityNote:
      'Premium Medjool dates with 12+ month shelf life in sealed packaging. BSTI food preparation compliance and Halal certification from Middle Eastern origins.',
    commercial: {
      moq: '200 kg (mixed cartons) or 1 FCL',
      leadTime: '20–35 days from order confirmation',
      incoterms: 'CIF Chittagong',
      shelfLife: '12+ months in sealed packaging',
    },
    trustBadges: ['BSTI Compliant', 'Halal Certified', 'Premium Grade', 'Ramadan Ready'],
    faqs: [
      {
        question: 'Which origins do you supply Medjool dates from?',
        answer:
          'We source from Saudi Arabia, Jordan, and the UAE. Origin selection depends on grade, price point, and seasonal availability.',
      },
      {
        question: 'What is the import duty for Medjool dates?',
        answer:
          'Medjool dates are classified under HS 0804.10.00 with a TTI of 48.75%. We provide full duty and landed-cost estimates before you commit.',
      },
      {
        question: 'Can you support Ramadan retail programmes?',
        answer:
          'Yes. We offer 5kg gift boxes, 10kg cartons, and bulk 20kg containers. Ramadan orders should be placed 45–60 days before peak demand.',
      },
      {
        question: 'How are dates stored during transit?',
        answer:
          'Dates are packed in moisture-controlled cartons and stored in ventilated containers. We recommend cool, dry warehouse storage below 25°C.',
      },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Full invoice with HS 0804.10.00' },
      { name: 'Certificate of Origin', description: 'Middle East origin verification' },
      { name: 'Certificate of Analysis', description: 'Moisture, grade, and quality parameters' },
      { name: 'Halal Certificate', description: 'From certified Middle Eastern suppliers' },
      { name: 'Health Certificate', description: 'Food safety documentation for BFSA clearance' },
    ],
    processSteps: [
      { title: 'Origin Selection', description: 'Grade and price matching from Saudi, Jordan, or UAE' },
      { title: 'Quality Grading', description: 'Size, moisture, and appearance inspection' },
      { title: 'Import Clearance', description: 'BSTI and NBR processing at port' },
      { title: 'Distribution', description: 'Carton delivery to warehouse or retail packer' },
    ],
    useCases: [
      { title: 'Ramadan Retail', description: 'Gift boxes and premium packs for seasonal demand' },
      { title: 'Healthy Snacking', description: 'Supermarket and health-food store distribution' },
      { title: 'HRI & Catering', description: 'Bulk cartons for hotels and event catering' },
    ],
  },
  potato: {
    qualityNote:
      'Export-grade potatoes from Bangladesh\'s premier growing regions. Graded, mesh-bagged, and tarpaulin-protected for Gulf and GCC shipments.',
    commercial: {
      moq: '1 container (25–27 MT)',
      leadTime: '7–14 days from harvest confirmation',
      incoterms: 'FOB Chittagong / CIF Gulf ports',
      shelfLife: '4–8 weeks with cold-chain storage',
    },
    trustBadges: ['Export Quality', 'BSTI', 'Phytosanitary', 'Gulf Ready'],
    faqs: [
      {
        question: 'Which potato varieties do you export?',
        answer:
          'We supply Russet, Red, and Yellow varieties in 50–80mm diameter, Grade A. Specific variety selection depends on buyer preference and destination market.',
      },
      {
        question: 'Do you have a dedicated Gulf export programme?',
        answer:
          'Yes. Visit our potato export hub at /products/potato-gulf for Gulf-focused logistics, documentation, grading standards, and buyer FAQs.',
      },
      {
        question: 'What export documents are provided?',
        answer:
          'Phytosanitary certificate, certificate of origin, commercial invoice, packing list, and bill of lading. Additional Gulf-specific documents available on request.',
      },
      {
        question: 'How are potatoes protected during shipping?',
        answer:
          'Potatoes are packed in 25kg mesh or 50kg jute bags with tarpaulin protection. Temperature-controlled containers are recommended for long-haul Gulf routes.',
      },
    ],
    documents: [
      { name: 'Phytosanitary Certificate', description: 'Plant health clearance for agricultural export' },
      { name: 'Certificate of Origin', description: 'Bangladesh origin verification' },
      { name: 'Commercial Invoice', description: 'Export invoice with HS 0701.90.00' },
      { name: 'Packing List', description: 'Bag count, net weight, and container details' },
      { name: 'Bill of Lading', description: 'Shipping document for FOB/CIF consignments' },
    ],
    processSteps: [
      { title: 'Farm Sourcing', description: 'Direct procurement from vetted Bangladesh growers' },
      { title: 'Grading & Packing', description: 'Size sorting, quality inspection, mesh/jute bagging' },
      { title: 'Export Documentation', description: 'Phytosanitary, COO, and customs processing' },
      { title: 'Shipment', description: 'Container loading with tarpaulin protection to destination port' },
    ],
  },
  handicrafts: {
    qualityNote:
      'Authentic Bangladeshi handicrafts from verified artisan cooperatives. Each order includes origin documentation and fair-trade sourcing confirmation.',
    commercial: {
      moq: '1 CBM (mixed assortment) or custom MOQ per product line',
      leadTime: '30–60 days depending on order size',
      incoterms: 'FOB Chittagong / CIF destination',
      shelfLife: 'Indefinite under proper storage',
    },
    trustBadges: ['Handmade', 'Fair Trade', 'Cultural Heritage', 'Export Quality'],
    faqs: [
      {
        question: 'What materials are used in your handicrafts?',
        answer:
          'Our range includes jute, wood, clay, and bamboo products. Material composition is specified per product line and included in the commercial invoice.',
      },
      {
        question: 'Can you produce custom designs for export?',
        answer:
          'Yes. We work with artisan groups across Bangladesh for custom designs, private-label packaging, and bulk orders for retail chains.',
      },
      {
        question: 'What export documents are included?',
        answer:
          'Commercial invoice, packing list, certificate of origin, and bill of lading. HS classification under 4602.19.00 for woven handicraft articles.',
      },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Detailed itemised export invoice' },
      { name: 'Certificate of Origin', description: 'Bangladesh handmade origin verification' },
      { name: 'Packing List', description: 'Carton contents and dimensions' },
      { name: 'Bill of Lading', description: 'Shipping document for FOB/CIF' },
    ],
    processSteps: [
      { title: 'Artisan Selection', description: 'Cooperative and workshop verification' },
      { title: 'Production QC', description: 'Craftsmanship and finish inspection' },
      { title: 'Export Packing', description: 'Protective wrapping and carton preparation' },
      { title: 'Shipment', description: 'FOB Chittagong or CIF to destination port' },
    ],
  },
  pulses: {
    qualityNote:
      'Grade A lentils, chickpeas, beans, and peas with moisture-controlled storage. Each batch tested for protein content and foreign matter.',
    commercial: { moq: '1 FCL (25 MT)', leadTime: '25–40 days', incoterms: 'CIF Chittagong', shelfLife: '12–18 months' },
    trustBadges: ['BSTI Certified', 'ISO 22000', 'Grade A', 'COA Provided'],
    faqs: [
      { question: 'Which pulse varieties do you import?', answer: 'Lentils, chickpeas, beans, and peas from Australia, Canada, Turkey, and India.' },
      { question: 'What is the HS code for pulses?', answer: 'Classified under HS 0713.40.00, Section 2 — Vegetable Products.' },
      { question: 'Do you provide COA with each shipment?', answer: 'Yes. Certificate of Analysis covers moisture, protein, and foreign matter levels.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Customs invoice with HS 0713.40.00' },
      { name: 'Certificate of Origin', description: 'Verified origin from supplier country' },
      { name: 'Certificate of Analysis', description: 'Moisture, protein, and quality parameters' },
      { name: 'Phytosanitary Certificate', description: 'Plant health documentation' },
    ],
    processSteps: [
      { title: 'Supplier Selection', description: 'Grade A origins from verified exporters' },
      { title: 'Pre-Shipment QC', description: 'Moisture and foreign matter testing' },
      { title: 'Customs Clearance', description: 'NBR classification and port release' },
      { title: 'Warehouse Delivery', description: 'Jute or PP bag delivery to your facility' },
    ],
  },
  tarpaulin: {
    qualityNote:
      'Reinforced PE/PVC tarpaulin with UV protection and 100% waterproof rating. Used by K.H. Infinity for potato export protection.',
    commercial: { moq: '500 rolls or 1 FCL', leadTime: '15–25 days', incoterms: 'CIF Chittagong', shelfLife: '5+ years with proper storage' },
    trustBadges: ['ISO 9001', 'CE Certified', 'UV Protected', '100% Waterproof'],
    faqs: [
      { question: 'What sizes are available?', answer: 'Custom sizes from 2m×3m to 20m×30m. Standard rolls also available.' },
      { question: 'Is tarpaulin suitable for agricultural export?', answer: 'Yes. We use the same tarpaulin grade for our potato export protection programme.' },
      { question: 'What GSM options do you offer?', answer: '12–16 GSM reinforced PE/PVC. Higher GSM available on request for industrial applications.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Invoice with HS 6306.12.00' },
      { name: 'Certificate of Origin', description: 'Manufacturing origin verification' },
      { name: 'Test Report', description: 'Waterproof and UV resistance certification' },
    ],
    processSteps: [
      { title: 'Specification', description: 'GSM, size, and material selection' },
      { title: 'Production QC', description: 'Thickness and waterproof testing' },
      { title: 'Import Clearance', description: 'Customs processing at Chittagong' },
      { title: 'Delivery', description: 'Rolled or folded packaging to your site' },
    ],
  },
  cumin: {
    qualityNote:
      '100% pure cumin seeds with strong aroma and international grade quality. Sourced from India, Iran, Turkey, and Egypt with Halal certification.',
    commercial: { moq: '5 MT (partial container) or 1 FCL', leadTime: '20–30 days', incoterms: 'CIF Chittagong', shelfLife: '24 months in sealed bags' },
    trustBadges: ['Halal Certified', 'ISO 22000', '100% Pure', 'Grade A'],
    faqs: [
      { question: 'What purity level do you guarantee?', answer: '100% pure cumin seeds with no adulteration. COA confirms purity and moisture content.' },
      { question: 'Which origin provides the best aroma?', answer: 'Indian and Iranian origins are preferred for strong aroma. We can recommend based on your application.' },
      { question: 'What packaging is used?', answer: '25kg PP bags or 50kg jute bags with moisture barrier liner.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Invoice with HS 0909.21.00' },
      { name: 'Certificate of Origin', description: 'Spice origin verification' },
      { name: 'Certificate of Analysis', description: 'Purity, moisture, and volatile oil content' },
      { name: 'Halal Certificate', description: 'From certified spice exporters' },
    ],
    processSteps: [
      { title: 'Origin Selection', description: 'Premium growing region sourcing' },
      { title: 'Quality Testing', description: 'Purity, aroma, and moisture verification' },
      { title: 'Import Clearance', description: 'BSTI and customs processing' },
      { title: 'Delivery', description: 'Sealed bag delivery to warehouse' },
    ],
  },
  sugar: {
    qualityNote:
      'ICUMSA 45 refined white sugar with 99.9% sucrose purity. Ideal for food processing, beverage, and confectionery applications.',
    commercial: { moq: '1 FCL (25 MT)', leadTime: '25–35 days', incoterms: 'CIF Chittagong', shelfLife: 'Indefinite under dry storage' },
    trustBadges: ['BSTI Certified', 'ICUMSA 45', 'ISO 22000', 'COA Provided'],
    faqs: [
      { question: 'What ICUMSA grade do you supply?', answer: 'ICUMSA 45 refined white sugar with 99.9% sucrose and max 0.04% moisture.' },
      { question: 'Which origins are available?', answer: 'Brazil, India, and Thailand. Origin selection based on price and availability.' },
      { question: 'Can sugar be supplied in bulk containers?', answer: 'Yes. 50kg PP bags, 25kg multi-ply bags, or bulk container loads.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Invoice with HS 1701.99.00' },
      { name: 'Certificate of Origin', description: 'Sugar origin verification' },
      { name: 'Certificate of Analysis', description: 'ICUMSA, sucrose, and moisture results' },
      { name: 'Health Certificate', description: 'Food safety documentation' },
    ],
    processSteps: [
      { title: 'Origin Selection', description: 'Brazil, India, or Thailand based on pricing' },
      { title: 'Quality Verification', description: 'ICUMSA colour and sucrose testing' },
      { title: 'Customs Clearance', description: 'NBR duty and port processing' },
      { title: 'Delivery', description: 'Bag or bulk delivery to your facility' },
    ],
  },
  'soyabean-oil': {
    qualityNote:
      '100% pure soybean oil with high smoke point (232°C) and Omega-3 fatty acids. BSTI-compliant with full import documentation.',
    commercial: { moq: '1 FCL or 500 cartons', leadTime: '21–35 days', incoterms: 'CIF Chittagong', shelfLife: '24 months' },
    trustBadges: ['BSTI Certified', 'ISO 22000', 'HACCP', 'COA Provided'],
    faqs: [
      { question: 'What container sizes are available?', answer: '1L PET bottles, 5L bottles, and bulk containers for food manufacturing.' },
      { question: 'How does soyabean oil compare to sunflower oil?', answer: 'Soyabean oil has a similar smoke point but higher Omega-3 content. We supply both — contact us for a comparison quote.' },
      { question: 'Is BSTI documentation included?', answer: 'Yes. Full BSTI test reports and customs documentation with every consignment.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Invoice with HS 1507.90.00' },
      { name: 'Certificate of Origin', description: 'Origin from USA, Brazil, or Argentina' },
      { name: 'Certificate of Analysis', description: 'Purity, smoke point, and fatty acid profile' },
      { name: 'BSTI Test Report', description: 'Bangladesh compliance verification' },
    ],
    processSteps: [
      { title: 'Supplier Selection', description: 'Vetted producers from Americas' },
      { title: 'Pre-Shipment QC', description: 'COA and container inspection' },
      { title: 'Customs Clearance', description: 'NBR processing at port' },
      { title: 'Delivery', description: 'Bottled or bulk delivery to warehouse' },
    ],
  },
  chickpeas: {
    qualityNote:
      'Desi and Kabuli chickpea varieties with max 12% moisture and high protein content. Sourced from Australia, Canada, and Turkey.',
    commercial: { moq: '1 FCL (25 MT)', leadTime: '25–40 days', incoterms: 'CIF Chittagong', shelfLife: '12–18 months' },
    trustBadges: ['Halal Certified', 'ISO 22000', 'Grade A', 'COA Provided'],
    faqs: [
      { question: 'What varieties do you supply?', answer: 'Both Desi and Kabuli chickpeas. Kabuli is preferred for canning; Desi for flour and snack production.' },
      { question: 'What is the protein content?', answer: 'High protein content typical of Grade A chickpeas. COA confirms batch-specific values.' },
      { question: 'Which HS code applies?', answer: 'HS 0713.20.00 under Section 2 — Vegetable Products.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Invoice with HS 0713.20.00' },
      { name: 'Certificate of Origin', description: 'Verified legume origin' },
      { name: 'Certificate of Analysis', description: 'Moisture, protein, and grade confirmation' },
      { name: 'Phytosanitary Certificate', description: 'Plant health clearance' },
    ],
    processSteps: [
      { title: 'Variety Selection', description: 'Desi or Kabuli based on application' },
      { title: 'Quality Testing', description: 'Moisture and foreign matter screening' },
      { title: 'Import Clearance', description: 'Customs and BSTI processing' },
      { title: 'Delivery', description: 'PP or jute bag delivery' },
    ],
  },
  'soy-sauce': {
    qualityNote:
      'Premium soy sauce and Asian condiments for Bangladesh\'s HRI and food manufacturing sectors. BFSA and BSTI compliant with full regulatory documentation.',
    commercial: { moq: '200 cartons (mixed) or 1 FCL', leadTime: '20–30 days', incoterms: 'CIF Chittagong', shelfLife: '18–24 months sealed' },
    trustBadges: ['BSTI Compliant', 'BFSA Standards', 'ISO 22000', 'Halal Available'],
    faqs: [
      { question: 'What condiment types do you import?', answer: 'Soy sauce, vinegars, and Asian condiments for food service and industrial use.' },
      { question: 'What is the import duty (TTI)?', answer: 'Soy sauce falls under HS 2103.10.00 with a TTI of 96.10%. We provide landed-cost estimates before ordering.' },
      { question: 'Do you supply food-service sizes?', answer: 'Yes. 1L bottles, 5L containers, and 20L bulk drums for HRI and manufacturing.' },
    ],
    documents: [
      { name: 'Commercial Invoice', description: 'Invoice with HS 2103.10.00' },
      { name: 'Certificate of Origin', description: 'Origin from China, Thailand, or Japan' },
      { name: 'Certificate of Analysis', description: 'Quality and safety parameters' },
      { name: 'BSTI/BFSA Compliance', description: 'Regulatory clearance documentation' },
    ],
    processSteps: [
      { title: 'Brand Selection', description: 'Global brand sourcing for HRI sector' },
      { title: 'Regulatory Review', description: 'BSTI and BFSA compliance verification' },
      { title: 'Import Clearance', description: 'Duty assessment and port release' },
      { title: 'Delivery', description: 'Bottled or drum delivery to facility' },
    ],
  },
}

export function getProductTrustData(productId: string): ProductTrustData | undefined {
  return PRODUCT_TRUST_DATA[productId]
}

export function isPremiumProduct(product: Product): boolean {
  return PRODUCT_TRUST_DATA[product.id]?.detailLevel === 'premium'
}
