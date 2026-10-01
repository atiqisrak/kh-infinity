import { getProductGeo } from './product-geo'

export interface Product {
  id: string
  name: string
  brand?: string
  image: string
  images?: string[]
  description: string
  type: 'import' | 'export'
  category: string
  hsCode?: string
  hsSection?: string
  ttiRange?: string
  geoAnchor?: string
  geoHeading?: string
  updatedAt?: string
  specifications: {
    [key: string]: string
  }
  benefits: string[]
  packaging: string[]
  nutritionalInfo?: {
    per100g: {
      [key: string]: string
    }
    additional: {
      [key: string]: string
    }
  }
  sourcing: {
    countries: string[]
    certifications: string[]
  }
  relatedProducts: string[]
}

export const products: Product[] = [
  {
    id: 'sunflower-oil',
    name: 'Sunflower Seed Oil',
    brand: 'Maslo',
    image: '/images/products/sunflower-oil.webp',
    images: [
      '/images/products/sunflower-oil.webp',
      '/images/products/sun.webp',
      '/images/products/sunflower-oil-3.jpg',
    ],
    description: 'High-quality, heart-healthy sunflower seed oil sourced from the world\'s finest producers. Rich in Vitamin E and healthy fats.',
    type: 'import',
    category: 'Cooking Oils',
    specifications: {
      'Purity': '100% Pure Sunflower Seed Oil',
      'Available Sizes': '1 Litre and 5 Litre containers',
      'Smoke Point': '230°C/450°F',
      'Color': 'Clear, light amber color'
    },
    benefits: [
      'Rich in Vitamin E and healthy fats',
      'Supports heart health',
      'Contains antioxidants',
      'Promotes skin health'
    ],
    packaging: [
      '1L PET Bottles',
      '5L Bottles',
      '15L Cartoon Boxes',
      'Custom Container'
    ],
    nutritionalInfo: {
      per100g: {
        'Energy': '884 kcal',
        'Total Fat': '100g',
        'Saturated Fat': '11g',
        'Monounsaturated Fat': '23g',
        'Polyunsaturated Fat': '65g'
      },
      additional: {
        'Trans Fat': '0g',
        'Cholesterol': '0mg',
        'Sodium': '0mg',
        'Vitamin E': '41.08mg',
        'Vitamin K': '5.4µg'
      }
    },
    sourcing: {
      countries: ['Ukraine', 'Russia', 'Argentina'],
      certifications: ['ISO 22000', 'HACCP', 'BSTI Certified']
    },
    relatedProducts: ['soyabean-oil', 'milk-powder', 'sugar']
  },
  {
    id: 'milk-powder',
    name: 'Skimmed Milk Powder',
    image: '/images/products/milk-powder.webp',
    description: 'High-quality skimmed milk powder with excellent nutritional value and consistent quality. Great for dairy processing.',
    type: 'import',
    category: 'Dairy Products',
    specifications: {
      'Type': 'Skimmed Milk Powder',
      'Protein Content': '34-36%',
      'Moisture': 'Max 4%',
      'Fat Content': 'Max 1.5%'
    },
    benefits: [
      'High protein content',
      'Long shelf life',
      'Easy to reconstitute',
      'Consistent quality'
    ],
    packaging: [
      '25kg Multi-wall paper bags',
      '50kg bags',
      'Custom packaging available'
    ],
    sourcing: {
      countries: ['New Zealand', 'Australia', 'Netherlands'],
      certifications: ['ISO 22000', 'HACCP', 'Halal Certified']
    },
    relatedProducts: ['sugar', 'sunflower-oil']
  },
  {
    id: 'potato',
    name: 'Premium Potatoes',
    image: '/images/products/potato.webp',
    images: [
      '/images/products/potato.webp',
      '/images/products/red-potato.webp',
      '/images/products/yellow-potato.webp',
      '/images/products/russet-potato.webp',
    ],
    description: 'Fresh, high-quality potatoes from Bangladesh\'s finest farms. Protected with our tarpaulin during export.',
    type: 'export',
    category: 'Agricultural Products',
    specifications: {
      'Variety': 'Russet, Red, Yellow potatoes',
      'Size': '50-80mm diameter',
      'Quality': 'Grade A',
      'Storage': 'Temperature controlled'
    },
    benefits: [
      'Fresh from local farms',
      'High nutritional value',
      'Versatile cooking options',
      'Long shelf life'
    ],
    packaging: [
      '25kg mesh bags',
      '50kg jute bags',
      'Custom packaging with tarpaulin protection'
    ],
    sourcing: {
      countries: ['Bangladesh'],
      certifications: ['BSTI', 'Export Quality', 'Organic Available']
    },
    relatedProducts: ['tarpaulin', 'handicrafts']
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    image: '/images/products/handicrafts.webp',
    images: [
      '/images/products/handicrafts.webp',
      '/images/products/pottery.webp',
      '/images/products/woodcraft.webp',
      '/images/products/textiles.webp',
    ],
    description: 'Authentic Bangladeshi handicrafts showcasing local artistry and cultural heritage.',
    type: 'export',
    category: 'Cultural Products',
    specifications: {
      'Materials': 'Jute, Wood, Clay, Bamboo',
      'Origin': 'Handmade in Bangladesh',
      'Quality': 'Traditional craftsmanship',
      'Variety': 'Multiple product lines'
    },
    benefits: [
      'Authentic cultural heritage',
      'Handmade quality',
      'Unique designs',
      'Sustainable materials'
    ],
    packaging: [
      'Individual protective wrapping',
      'Gift boxes available',
      'Custom packaging for bulk orders'
    ],
    sourcing: {
      countries: ['Bangladesh'],
      certifications: ['Fair Trade', 'Handmade', 'Cultural Heritage']
    },
    relatedProducts: ['potato']
  },
  {
    id: 'pulses',
    name: 'Pulses',
    image: '/images/products/pulses.webp',
    images: [
      '/images/products/pulses.webp',
      '/images/products/lentils.webp',
      '/images/products/beans.webp',
    ],
    description: 'Premium quality lentils, chickpeas, and other pulses sourced from the finest producers worldwide.',
    type: 'import',
    category: 'Grains & Legumes',
    specifications: {
      'Types': 'Lentils, Chickpeas, Beans, Peas',
      'Protein Content': 'High protein varieties',
      'Quality': 'Grade A',
      'Storage': 'Moisture controlled'
    },
    benefits: [
      'High nutritional value',
      'Rich in protein and fiber',
      'Long shelf life',
      'Versatile cooking applications'
    ],
    packaging: [
      '50kg jute bags',
      '25kg polypropylene bags',
      'Custom packaging available'
    ],
    sourcing: {
      countries: ['Australia', 'Canada', 'Turkey', 'India'],
      certifications: ['ISO 22000', 'HACCP', 'BSTI Certified']
    },
    relatedProducts: ['chickpeas', 'cumin']
  },
  {
    id: 'tarpaulin',
    name: 'Tarpaulin',
    image: '/images/products/tarpaulin.webp',
    images: [
      '/images/products/tarpaulin.webp',
      '/images/products/tarpaulin-3.jpg',
      '/images/products/tarpaulin-2.jpg',
    ],
    description: 'Durable and weather-resistant tarpaulin for various industrial and commercial applications.',
    type: 'import',
    category: 'Industrial Products',
    specifications: {
      'Material': 'Reinforced PE/PVC',
      'Thickness': '12-16 GSM',
      'Sizes': 'Custom sizes available',
      'Waterproof': '100% Waterproof'
    },
    benefits: [
      'Weather-resistant',
      'Long-lasting durability',
      'UV protection',
      'Cost-effective protection'
    ],
    packaging: [
      'Rolled packaging',
      'Custom folded packaging',
      'Bulk container loads'
    ],
    sourcing: {
      countries: ['China', 'India', 'Thailand'],
      certifications: ['ISO 9001', 'CE Certified']
    },
    relatedProducts: ['potato']
  },
  {
    id: 'cumin',
    name: 'Cumin',
    image: '/images/products/cumin.webp',
    images: [
      '/images/products/cumin.webp',
      '/images/products/cumin-2.jpg',
      '/images/products/cumin-3.jpg',
    ],
    description: 'Premium quality cumin with a distinct aroma and flavor, sourced from trusted global suppliers.',
    type: 'import',
    category: 'Spices',
    specifications: {
      'Purity': '100% Pure Cumin Seeds',
      'Origin': 'Premium growing regions',
      'Quality': 'International grade',
      'Aroma': 'Strong and distinctive'
    },
    benefits: [
      'Rich aroma and flavor',
      'Culinary versatility',
      'Storage stability',
      'Consistent quality'
    ],
    packaging: [
      '25kg polypropylene bags',
      '50kg jute bags',
      'Custom packaging'
    ],
    sourcing: {
      countries: ['India', 'Iran', 'Turkey', 'Egypt'],
      certifications: ['ISO 22000', 'HACCP', 'Halal Certified']
    },
    relatedProducts: ['chickpeas', 'pulses']
  },
  {
    id: 'sugar',
    name: 'Sugar',
    image: '/images/products/sugar.webp',
    images: [
      '/images/products/sugar.webp',
      '/images/products/sugar-2.jpg',
      '/images/products/sugar-3.jpg',
    ],
    description: 'Premium quality refined sugar ideal for food processing and cooking applications.',
    type: 'import',
    category: 'Sweeteners',
    specifications: {
      'Type': 'Refined White Sugar',
      'Purity': '99.9% sucrose',
      'Color': 'ICUMSA 45',
      'Moisture': 'Max 0.04%'
    },
    benefits: [
      'High purity',
      'Consistent quality',
      'Long shelf life',
      'Versatile applications'
    ],
    packaging: [
      '50kg polypropylene bags',
      '25kg multi-ply bags',
      'Bulk container loads'
    ],
    sourcing: {
      countries: ['Brazil', 'India', 'Thailand'],
      certifications: ['ISO 22000', 'HACCP', 'BSTI Certified']
    },
    relatedProducts: ['milk-powder']
  },
  {
    id: 'soyabean-oil',
    name: 'Soyabean Oil',
    image: '/images/products/soyabean-oil.webp',
    images: [
      '/images/products/soyabean-oil.webp',
      '/images/products/soyabean-oil-2.jpg',
      '/images/products/soyabean-oil-3.jpg',
    ],
    description: 'Premium quality soybean oil with excellent nutritional profile and cooking properties.',
    type: 'import',
    category: 'Cooking Oils',
    specifications: {
      'Purity': '100% Pure Soyabean Oil',
      'Available Sizes': '1, 5, and 10 Litre containers',
      'Smoke Point': '232°C/450°F',
      'Color': 'Light yellow, clear'
    },
    benefits: [
      'High in Omega-3 fatty acids',
      'Excellent cooking properties',
      'High smoke point',
      'Versatile cooking applications'
    ],
    packaging: [
      '1L PET Bottles',
      '5L Bottles',
      'Bulk containers'
    ],
    sourcing: {
      countries: ['USA', 'Brazil', 'Argentina'],
      certifications: ['ISO 22000', 'HACCP', 'BSTI Certified']
    },
    relatedProducts: ['sunflower-oil']
  },
  {
    id: 'chickpeas',
    name: 'Chickpeas',
    image: '/images/products/chick-pea.webp',
    images: [
      '/images/products/chick-pea.webp',
      '/images/products/chickpeas.webp',
      '/images/products/chickpeas-2.jpg',
    ],
    description: 'Premium quality chickpeas with excellent nutritional value and cooking properties.',
    type: 'import',
    category: 'Grains & Legumes',
    specifications: {
      'Type': 'Desi and Kabuli varieties',
      'Protein': 'High protein content',
      'Quality': 'Grade A',
      'Moisture': 'Max 12%'
    },
    benefits: [
      'High protein content',
      'Rich in fiber',
      'Versatile cooking',
      'Long shelf life'
    ],
    packaging: [
      '25kg polypropylene bags',
      '50kg jute bags',
      'Custom packaging'
    ],
    sourcing: {
      countries: ['Australia', 'Canada', 'Turkey'],
      certifications: ['ISO 22000', 'HACCP', 'Halal Certified']
    },
    relatedProducts: ['pulses']
  },
  {
    id: 'almonds',
    name: 'U.S. Almonds',
    image: '/images/products/almonds.webp',
    images: [
      '/images/products/almonds.webp',
      '/images/products/almonds-2.jpg',
      '/images/products/almonds-3.jpg',
    ],
    description: 'Premium U.S. almonds for the health-conscious Bangladesh market. Direct-sourced with BSTI compliance and radioactivity verification for food manufacturing.',
    type: 'import',
    category: 'Tree Nuts',
    specifications: {
      'Origin': 'United States (California)',
      'Grade': 'Premium export quality',
      'Packaging': '25kg vacuum-sealed bags',
      'Certification': 'BSTI, Halal available'
    },
    benefits: [
      'Premium U.S. origin safety perception',
      'High protein and healthy fats',
      'Retail and HRI ready',
      'Ramadan and festive demand'
    ],
    packaging: [
      '25kg vacuum-sealed bags',
      '50kg bulk containers',
      'Custom retail packs on enquiry'
    ],
    sourcing: {
      countries: ['United States'],
      certifications: ['BSTI', 'Halal Certified', 'ISO 22000']
    },
    relatedProducts: ['medjool-dates', 'milk-powder', 'sugar']
  },
  {
    id: 'medjool-dates',
    name: 'Medjool Dates',
    image: '/images/products/medjool-dates.webp',
    images: [
      '/images/products/medjool-dates.webp',
      '/images/products/medjool-dates-2.jpg',
      '/images/products/medjool-dates-3.jpg',
    ],
    description: 'Premium Medjool dates for Ramadan programmes and healthy-snacking retail. High shelf-life with BSTI food preparation compliance.',
    type: 'import',
    category: 'Processed Fruits',
    specifications: {
      'Variety': 'Medjool',
      'Grade': 'Premium export',
      'Shelf Life': '12+ months sealed',
      'Certification': 'BSTI compliant'
    },
    benefits: [
      'Peak Ramadan demand capture',
      'Premium middle-class positioning',
      'Long shelf life',
      'HRI and retail ready'
    ],
    packaging: [
      '5kg gift boxes',
      '10kg cartons',
      'Bulk 20kg containers'
    ],
    sourcing: {
      countries: ['Saudi Arabia', 'Jordan', 'UAE'],
      certifications: ['BSTI', 'Halal Certified', 'ISO 22000']
    },
    relatedProducts: ['almonds', 'sugar']
  },
  {
    id: 'soy-sauce',
    name: 'Soy Sauce & Condiments',
    image: '/images/products/soy-sauce.webp',
    images: [
      '/images/products/soy-sauce.webp',
      '/images/products/soy-sauce-2.jpg',
      '/images/products/soy-sauce-3.jpg',
    ],
    description: 'Premium soy sauce and Asian condiments for Bangladesh\'s expanding food processing and HRI sectors. BFSA and BSTI compliant imports.',
    type: 'import',
    category: 'Condiments & Sauces',
    specifications: {
      'Types': 'Soy sauce, vinegars, Asian condiments',
      'Grade': 'Food service and industrial',
      'Certification': 'BSTI, BFSA standards',
      'Target': 'HRI and food manufacturing'
    },
    benefits: [
      'HRI sector specialization',
      'Global brand sourcing',
      'Consistent quality supply',
      'Regulatory documentation included'
    ],
    packaging: [
      '1L bottles (food service)',
      '5L containers',
      '20L bulk drums'
    ],
    sourcing: {
      countries: ['China', 'Thailand', 'Japan'],
      certifications: ['BSTI', 'ISO 22000', 'Halal available']
    },
    relatedProducts: ['sunflower-oil', 'sugar', 'cumin']
  },
  {
    id: 'motorcycle-fuel-tanks',
    name: 'Motorcycle Fuel & Oil Tanks',
    image: '/images/new/motorcycle-fuel-tanks.webp',
    images: ['/images/new/motorcycle-fuel-tanks.webp'],
    description: 'OEM-compatible motorcycle fuel and oil tanks sourced directly from Ludhiana and Delhi NCR. Steel and powder-coated aluminium variants for Honda, Bajaj, TVS, and Hero models dominant in Bangladesh.',
    type: 'import',
    category: 'Motorcycle Parts',
    specifications: {
      'Material': 'Steel / powder-coated aluminium',
      'Compatibility': 'Honda, Bajaj, TVS, Hero, Yamaha models',
      'Capacity': '3–18 litre (fuel); 0.8–2 litre (oil)',
      'Finish': 'Raw, painted, or chrome on request',
      'MOQ': '50 units per model',
    },
    benefits: [
      'OEM-specification fit for popular Bangladesh market models',
      'Steel and aluminium options for cost vs weight trade-off',
      'Direct factory sourcing from Ludhiana automotive cluster',
      'Bulk pricing for workshop and distributor programmes',
    ],
    packaging: [
      'Individual foam-lined cartons',
      'Pallet loads for container shipment',
      'Custom bundling per model mix on enquiry',
    ],
    sourcing: {
      countries: ['India'],
      certifications: ['ISO 9001', 'BIS Certified'],
    },
    relatedProducts: ['motorcycle-body-panels', 'motorcycle-brake-parts'],
  },
  {
    id: 'motorcycle-body-panels',
    name: 'Motorcycle Body Panels & Fairings',
    image: '/images/new/motorcycle-body-panels.webp',
    images: ['/images/new/motorcycle-body-panels.webp'],
    description: 'Replacement and aftermarket body panels, fairings, and plastic covers for the most popular motorcycle models in Bangladesh. Sourced from Delhi NCR and Faridabad auto-parts clusters.',
    type: 'import',
    category: 'Motorcycle Parts',
    specifications: {
      'Material': 'ABS plastic / fibreglass composites',
      'Compatibility': 'Honda CB, Bajaj Pulsar, TVS Apache, Hero Splendor series',
      'Finish options': 'Unpainted, pre-painted, or chrome trim',
      'Coverage': 'Side panels, front fairings, mudguards, chain covers',
      'MOQ': '100 units per model reference',
    },
    benefits: [
      'Wide model coverage for Bangladesh aftermarket',
      'OEM-equivalent fit and finish',
      'Pre-painted options reduce workshop preparation time',
      'Competitive landed cost for workshop and retail distributor margins',
    ],
    packaging: [
      'Individual bubble-wrap and cardboard protection',
      'Nested pallet stacks for container efficiency',
      'Mixed-model container loads supported',
    ],
    sourcing: {
      countries: ['India'],
      certifications: ['ISO 9001', 'BIS Certified'],
    },
    relatedProducts: ['motorcycle-fuel-tanks', 'motorcycle-brake-parts'],
  },
  {
    id: 'motorcycle-brake-parts',
    name: 'Motorcycle Brake Assemblies & Levers',
    image: '/images/new/motorcycle-brake-parts.webp',
    images: ['/images/new/motorcycle-brake-parts.webp'],
    description: 'Brake levers, brake pads, caliper assemblies, and drum brake components for Indian and Japanese motorcycle models. Sourced from Ludhiana, Punjab — the primary Indian hub for two-wheeler aftermarket parts.',
    type: 'import',
    category: 'Motorcycle Parts',
    specifications: {
      'Components': 'Brake levers, pads, caliper assemblies, drums, cables',
      'Material': 'Chrome-steel levers; semi-metallic and organic pads',
      'Compatibility': 'Honda, Bajaj, TVS, Hero, Yamaha',
      'Standard': 'ISO 9001 manufactured',
      'MOQ': '200 units (mixed-SKU container accepted)',
    },
    benefits: [
      'Safety-critical parts from verified ISO-certified factories',
      'Full range: disc and drum brake system components',
      'Consistent supply for workshop and spare-parts distributors',
      'Customs documentation and HS tariff support included',
    ],
    packaging: [
      'Individual poly-bag and blister packing',
      'Carton master packs of 10–50 units',
      'Pallet loads for volume orders',
    ],
    sourcing: {
      countries: ['India'],
      certifications: ['ISO 9001', 'BIS Certified'],
    },
    relatedProducts: ['motorcycle-fuel-tanks', 'motorcycle-body-panels'],
  },
  {
    id: 'iphone-displays',
    name: 'iPhone Replacement Displays',
    image: '/images/new/iphone-displays.webp',
    images: ['/images/new/iphone-displays.webp'],
    description: 'Grade A OLED and LCD replacement displays for iPhone 11 through iPhone 15 series. Sourced direct from Shenzhen OEM factories with CE and RoHS compliance. Supplied to Bangladesh repair shops, distributors, and electronics importers.',
    type: 'import',
    category: 'Phone Parts',
    specifications: {
      'Compatible models': 'iPhone 11, 12, 12 Pro, 13, 13 Pro, 14, 14 Pro, 15, 15 Pro',
      'Panel types': 'Grade A OLED · Grade A LCD · Grade B (refurb)',
      'Resolution': 'OEM-equivalent per model specification',
      'Connector': 'Original-spec flex connector, solderless assembly',
      'Warranty': '90 days from delivery on Grade A',
    },
    benefits: [
      'OEM-equivalent brightness and touch response on Grade A OLED',
      'Competitive Grade B refurb tier for budget repair market',
      'CE and RoHS certified — meets import compliance requirements',
      'Part of our Phone Parts Programme for bulk pricing and compatibility matrix',
    ],
    packaging: [
      'Individual anti-static foam insert boxes',
      'Carton of 10 units per model',
      'Mixed-model orders accepted at programme MOQs',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001'],
    },
    relatedProducts: ['android-displays', 'charging-accessories', 'audio-accessories'],
  },
  {
    id: 'android-displays',
    name: 'Android Phone Displays',
    image: '/images/new/android-displays.webp',
    images: ['/images/new/android-displays.webp'],
    description: 'Replacement AMOLED and LCD displays for Samsung Galaxy A and S series, OPPO A series, and Xiaomi Redmi series — the dominant Android brands in Bangladesh. Sourced from Shenzhen and Guangzhou OEM factories.',
    type: 'import',
    category: 'Phone Parts',
    specifications: {
      'Compatible brands': 'Samsung Galaxy · OPPO · Xiaomi · Realme',
      'Popular models': 'Galaxy A14, A34, A54, S23; OPPO A57, A77; Redmi Note 12, 13',
      'Panel types': 'AMOLED · IPS LCD · Grade A and Grade B',
      'Connector': 'Model-specific flex connector with pre-installed frame option',
      'Warranty': '90 days from delivery on Grade A',
    },
    benefits: [
      'Covers Bangladesh\'s top-selling Android models in one supply relationship',
      'AMOLED and IPS LCD options match brand spec and price tier',
      'Grade B refurb tier available for cost-sensitive workshop segments',
      'Part of our Phone Parts Programme — see compatibility matrix and MOQ table',
    ],
    packaging: [
      'Individual anti-static foam insert boxes',
      'Carton of 10 units per model',
      'Pre-installed frame option reduces workshop handling time',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001'],
    },
    relatedProducts: ['iphone-displays', 'charging-accessories', 'audio-accessories'],
  },
  {
    id: 'audio-accessories',
    name: 'Audio Accessories',
    image: '/images/new/audio-accessories.webp',
    images: ['/images/new/audio-accessories.webp'],
    description: 'Wireless earbuds, over-ear headphones, and portable Bluetooth speakers for Bangladesh\'s consumer electronics retail and wholesale market. Sourced from Shenzhen and Dongguan manufacturing clusters.',
    type: 'import',
    category: 'Consumer Electronics',
    specifications: {
      'Product types': 'TWS earbuds · Over-ear headphones · Bluetooth speakers',
      'Connectivity': 'Bluetooth 5.0 / 5.3',
      'Battery life (earbuds)': 'Up to 6 hrs playback; 24 hrs with case',
      'Battery life (headphones)': 'Up to 30 hrs',
      'Certification': 'CE, RoHS compliant',
    },
    benefits: [
      'High retail margin consumer electronics for Bangladesh market',
      'Bluetooth 5.0/5.3 for broad device compatibility',
      'No-brand and private-label options available',
      'Mixed-SKU container loads supported for distributor programmes',
    ],
    packaging: [
      'Individual retail colour boxes',
      'Master carton of 10–20 units',
      'Custom packaging and private label available on enquiry',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['CE Certified', 'RoHS Compliant'],
    },
    relatedProducts: ['charging-accessories', 'iphone-displays', 'android-displays'],
  },
  {
    id: 'charging-accessories',
    name: 'Charging Accessories',
    image: '/images/new/charging-accessories.webp',
    images: ['/images/new/charging-accessories.webp'],
    description: 'USB-C and USB-A chargers, braided cables, and portable power banks for the Bangladesh consumer electronics market. Fast-charge compatible, CE and RoHS certified, sourced from Shenzhen and Guangzhou.',
    type: 'import',
    category: 'Consumer Electronics',
    specifications: {
      'Product types': 'Wall chargers (single & multi-port) · Cables · Power banks',
      'Output': '18W–65W fast charge (GaN options available)',
      'Cable types': 'USB-C to USB-C · USB-A to USB-C · Lightning compatible',
      'Power bank capacity': '10,000–20,000 mAh',
      'Certification': 'CE, RoHS compliant',
    },
    benefits: [
      'GaN charger options for premium retail positioning',
      'Braided cables for longevity and retail appeal',
      'Fast-charge protocol compatibility (PD, QC 3.0)',
      'Bundle packs (charger + cable) for retail display programmes',
    ],
    packaging: [
      'Individual retail colour boxes',
      'Master carton of 20–50 units',
      'Bundle packs (charger + cable) available on enquiry',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['CE Certified', 'RoHS Compliant'],
    },
    relatedProducts: ['audio-accessories', 'iphone-displays', 'android-displays'],
  },
]

function enrichProduct(product: Product): Product {
  const geo = getProductGeo(product.id)
  if (!geo) return product
  return {
    ...product,
    hsCode: geo.hsCode,
    hsSection: geo.hsSection,
    ttiRange: geo.ttiRange,
    geoAnchor: geo.geoAnchor,
    geoHeading: geo.geoHeading,
    updatedAt: geo.updatedAt,
  }
}

export function getProducts(): Product[] {
  return products.map(enrichProduct)
}

export function getProductsByType(type: 'import' | 'export'): Product[] {
  return getProducts().filter((p) => p.type === type)
}

export function getProduct(id: string): Product | undefined {
  const product = products.find((p) => p.id === id)
  return product ? enrichProduct(product) : undefined
}

export function getRelatedProducts(product: Product): Product[] {
  return getProducts().filter(p => 
    product.relatedProducts.includes(p.id) && p.id !== product.id
  )
}
