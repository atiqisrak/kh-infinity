export interface Product {
  id: string
  name: string
  brand?: string
  image: string
  description: string
  type: 'import' | 'export'
  category: string
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
  }
]

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter(p => 
    product.relatedProducts.includes(p.id) && p.id !== product.id
  )
}
