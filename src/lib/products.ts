import { getProductGeo } from './product-geo'
import { catalogImage, iphoneDisplayCatalog, type DisplayCatalogItem } from './iphone-display-catalog'

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
  originStory?: string
  marketContext?: string
  videoSrc?: string
  applications?: {
    label: string
    image: string
    description: string
  }[]
  /** Individually named SKUs shown as a filterable catalogue grid */
  displayCatalog?: DisplayCatalogItem[]
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
    relatedProducts: ['soyabean-oil', 'milk-powder', 'sugar'],
    originStory: "Ukraine's Black Sea steppe produces 40–45% of the world's sunflower oil — fields stretching horizon to horizon through Kharkiv and Dnipropetrovsk oblasts. The seeds are cold-pressed at regional crush plants and loaded at Burgas, Constanta, or Odessa ports for transit to Chattogram. KHI sources from ISO 22000 certified crushers with full phytosanitary documentation, delivering refined and crude grades to Bangladeshi food manufacturers and institutional buyers.",
    marketContext: "Bangladesh imports 500,000–700,000 MT of edible oil annually, with sunflower and soyabean oil the dominant imports. Bangladesh Bank's foreign currency allocation prioritises essential food commodities — edible oil is Category 1 priority. Consumer pack demand (1L, 5L) surges 30–40% in Ramadan.",
    videoSrc: '/videos/products/sunflower-oil.mp4',
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
    relatedProducts: ['sugar', 'sunflower-oil'],
    originStory: "New Zealand's grass-fed dairy farms produce milk powder at the highest natural protein levels in the world — year-round pasture feeding creates a compositional consistency that barn-based systems cannot match. Fonterra cooperative members in Waikato and Canterbury supply SMP that meets EU, Codex Alimentarius, and Bangladesh BSTI standards in one specification. KHI imports 25kg multi-wall bags directly from New Zealand and EU origin for food manufacturers, bakeries, and dairy processors.",
    marketContext: "Bangladesh's dairy processing industry — condensed milk, flavoured milk, ice cream, sweets — depends almost entirely on imported SMP. Local fresh milk production covers less than 20% of nutritional need. SMP import demand runs 80,000–120,000 MT/year. Ramadan demand for kheer, firni, and halwa drives a 25–35% spike in SMP consumption through January–March.",
    videoSrc: '/videos/products/milk-powder.mp4',
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
    relatedProducts: ['tarpaulin', 'handicrafts'],
    originStory: "Munshiganj — called 'Aaloo district' — sits at the confluence of the Padma and Meghna rivers. Its loamy alluvial soil produces Grade A Diamant, Cardinal, and Granola potatoes with consistent 50–80mm sizing and under 2% defect rates. From December harvest through May export, each lot is cold-stored at 4–8°C, graded at cooperatives, and loaded into reefer containers at Chattogram for UAE's Jebel Ali and Saudi Arabia's Dammam. KHI manages the full chain: DAE phytosanitary inspection, EPB export documentation, and cold chain continuity.",
    marketContext: "Bangladesh exports 350,000–500,000 MT of potatoes annually, with Gulf/GCC markets as the primary destination. The 10+ million South Asian expatriates in GCC create authentic demand for Bangladesh-origin produce. EPB classifies potato as a priority export product with 15–20% cash incentive on FOB value — a structural profit advantage for compliant exporters.",
    videoSrc: '/videos/products/potato.mp4',
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
    relatedProducts: ['potato'],
    originStory: "Jamdani woven in Narayanganj. Nakshi Kantha embroidered in Rajshahi. Bamboo crafted in the Chittagong Hill Tracts. Jute braided in Khulna. Bangladesh's handicraft tradition spans the length of the country and 3,000 years of history — Jamdani weaving is UNESCO Intangible Cultural Heritage, and every piece is made by hand by artisans who learned from their mothers. KHI consolidates from verified artisan cooperatives and inspects quality at the Chattogram consolidation point before container loading.",
    marketContext: "Gulf's 10M+ South Asian diaspora creates authentic demand for Bangladeshi cultural goods. The EU and North American sustainable-luxury market is a structural tailwind — jute, bamboo, and natural cotton align with ESG and 'slow fashion' purchasing. EPB offers 15% cash incentive on FOB value for registered handicraft exports. WFTO-member cooperative sourcing available for Fair Trade buyers.",
    videoSrc: '/videos/products/handicrafts.mp4',
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
    relatedProducts: ['chickpeas', 'cumin'],
    originStory: "Australia's wide-row dryland farming produces some of the world's cleanest pulses — harvested by GPS-guided combines, stored in sealed silos, and exported through Port Adelaide with AQIS phytosanitary inspection. Canadian Saskatchewan lentils benefit from similar scale and documentation infrastructure. KHI sources from both origins to give Bangladeshi importers competitive pricing and supply chain redundancy against India's periodic export bans.",
    marketContext: "Bangladesh imports 900,000–1,200,000 MT of pulses annually — the largest per-capita pulse consumer market in the world. Dal is the daily protein for 95% of Bangladeshis. India's pulse export bans in 2023–2024 exposed the risk of single-origin sourcing; Australian and Canadian dual-sourcing is supply chain protection, not just preference.",
    videoSrc: '/videos/products/pulses.mp4',
  },
  {
    id: 'tarpaulin',
    name: 'PVC Tarpaulin',
    image: 'https://www.jltarpaulin.com/jltarpaulin/2023/12/26/288a0325.png',
    images: [
      'https://www.jltarpaulin.com/jltarpaulin/2023/12/26/288a0325.png',
      'https://www.jltarpaulin.com/jltarpaulin/2023/12/26/288a0419-1.png',
      'https://www.jltarpaulin.com/jltarpaulin/2023/12/26/2-5.png',
      'https://www.jltarpaulin.com/jltarpaulin/2023/12/26/288a0383-1.png',
      'https://www.jltarpaulin.com/jltarpaulin/2026/06/08/SYVRu5.jpg',
      'https://www.jltarpaulin.com/jltarpaulin/2026/05/16/SZMk19.jpg',
    ],
    description: 'Industrial-grade PVC tarpaulin sourced directly from Hubei Jinlong New Materials Co., Ltd. — one of Asia\'s largest tarpaulin producers with 300M sq.m annual capacity. Available in 220–1,500 GSM with custom widths up to 5.5m without welding. Truck tarps, agricultural covers, construction sheeting, event tent fabric, and disaster-relief grades all available.',
    type: 'import',
    category: 'Industrial Products',
    specifications: {
      'Material': 'PVC Coated / Laminated Polyester Canvas',
      'Weight Range': '220–1,500 GSM',
      'Standard Grades': '650 GSM (1000D UV Resistant), 750 GSM (0.6mm Coated Canvas), 18oz Fire Retardant',
      'Max Width': 'Up to 5.5m without welding (single-piece cover)',
      'Tensile Strength': '≥2,000 N/5cm (warp and weft)',
      'Waterproof Rating': '≥2,000mm hydrostatic head pressure — 100% waterproof',
      'UV Resistance': 'UV stabilizer compounds throughout; 5–7 year outdoor service life',
      'Temperature Range': '-30°C to +70°C operational range',
      'Fire Retardant Option': '18oz 1000D — FMVSS 302 / B1-grade on request',
      'Colors Available': 'Blue, green, orange, silver, black; custom RAL on MOQ',
      'Finishing': 'Eyelets, rope hem, heat-weld strips, custom print available (OEM/ODM)',
    },
    benefits: [
      'Full application range — truck tarps, agricultural grain covers, event tents, construction scaffolding sheets',
      'Fire-retardant grades for NGO disaster-relief procurement and construction site compliance',
      '100% waterproof with ≥2,000mm hydrostatic head — monsoon-grade protection',
      'UV-stabilized throughout for 5–7 year outdoor service life in tropical climates',
      'Factory width up to 5.5m without welding — ideal for wide-span bale and machinery covers',
      'OEM/ODM: custom logo, eyelet spacing, rope hem, size, and colour at container-load MOQ',
    ],
    packaging: [
      'Rolled on cardboard core (50m, 100m rolls) with polybag wrap',
      'Folded finished packs (grommeted, roped, corner-reinforced) per piece',
      '20\' FCL ≈ 18,000–22,000 sq.m depending on GSM grade',
      '40\' FCL ≈ 38,000–45,000 sq.m depending on GSM grade',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['ISO 9001:2015', 'SGS Tested', 'CE Certified', 'REACH Compliant'],
    },
    relatedProducts: ['potato'],
    originStory: "Hubei Jinlong New Materials Co., Ltd. occupies 40 hectares in Suizhou, Hubei Province — a city that has grown into one of China's industrial fabric heartlands. Jinlong's campus runs 50+ coating and laminating lines, 100+ intelligent weaving machines, and its own calendering, lacquering, UV printing, and heat-welding facilities under one roof. Annual output exceeds 300 million sq.m of coated technical fabric. A key production advantage: tarpaulin width reaches 5.5m without welding — a capability rare among global suppliers — making it ideal for wide-span agricultural covers, truck curtain-siders, and event tent panels that Bangladesh's construction and logistics sectors require. KHI sources PVC coated and laminated grades in 650–1,500 GSM directly from Jinlong's production floor, with full SGS quality certification and phytosanitary documentation for Chattogram customs clearance.",
    marketContext: "Bangladesh's tarpaulin market absorbs 30–40 million square metres annually across three structural demand channels: agriculture (paddy and grain storage through monsoon season), disaster relief (UNICEF and government agencies procured over 3 million pieces after the 2022 floods that displaced 7.2 million people), and the Dhaka–Chittagong construction corridor. PVC grades command premium pricing from NGO procurement officers, RMG factory shed contractors, and the growing event-management sector. KHI's direct-from-Jinlong sourcing — bypassing Singapore or Dubai intermediaries — delivers 15–20% landed cost advantage while maintaining ISO-certified quality documentation that institutional buyers require.",
    videoSrc: '/videos/products/tarpaulin.mp4',
    applications: [
      {
        label: 'Truck Tarpaulin',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2026/05/14/nivuelfd1778726635.jpg',
        description: 'Covers cargo beds on highway lorries and CNG trucks — the most common use case in Bangladesh\'s road freight network.',
      },
      {
        label: 'Truck Side Curtain',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2025/05/14/trucksidecurtain.jpg',
        description: '650–750 GSM curtain panels for covered lorry bodies and refrigerated sideboards traversing the Dhaka–Chittagong corridor.',
      },
      {
        label: 'Cargo & Container Cover',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2024/01/03/12.jpg',
        description: 'Heavy-duty covers protecting port-side cargo, construction materials, and industrial goods from monsoon rain and UV exposure.',
      },
      {
        label: 'Grain & Crop Storage',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2026/05/14/wuhkalgh1778726828.jpg',
        description: 'Open-air paddy, jute, and raw material storage across Bangladesh\'s agricultural belt — monsoon-proof and UV-stabilised.',
      },
      {
        label: 'Hay & Bale Cover',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2026/05/14/uquhilql1778726695.jpg',
        description: 'Breathable PVC covers for baled hay, straw, and livestock feed stored in open farmyards year-round.',
      },
      {
        label: 'Event & Wedding Tent',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2024/01/03/5.png',
        description: 'PVC canopy and tent fabric for wedding venues, trade fair pavilions, and seasonal event shelters across Bangladesh.',
      },
      {
        label: 'Construction Safety Sheet',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2024/01/03/48.jpg',
        description: 'Fire-retardant B1-grade mesh sheets for scaffolding wraps, debris containment, and building-site safety compliance.',
      },
      {
        label: 'Machine & Equipment Cover',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2024/01/03/62.jpg',
        description: 'Industrial machinery covers for factory yards, garment unit rooftops, and construction sites exposed to tropical weather.',
      },
      {
        label: 'Disaster Relief Shelter',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2024/01/03/66.jpg',
        description: 'Emergency shelter tarps and inflatable tent fabric for NGO and government relief operations during Bangladesh\'s flood season.',
      },
      {
        label: 'Tensile Membrane Structure',
        image: 'https://www.jltarpaulin.com/jltarpaulin/2024/01/03/29.jpg',
        description: 'Architectural membrane for permanent tensile canopies over markets, bus terminals, and public plazas.',
      },
    ],
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
    relatedProducts: ['chickpeas', 'pulses'],
    originStory: "Rajasthan's semi-arid plains produce 70–80% of India's cumin under a blazing sun that concentrates volatile oils to levels no other origin replicates. The aroma is not a commodity specification — it is a terroir. KHI sources from Gujarat and Rajasthan aggregators with full aflatoxin testing, moisture certification, and Halal documentation for Bangladesh's spice processors, masala manufacturers, and institutional buyers who need the same lot quality in every container.",
    marketContext: "Bangladesh consumes 30,000–40,000 MT of cumin annually — used in every commercial kitchen, every biryani restaurant, every home that cooks Bengali or Mughlai cuisine. Cumin is one of Bangladesh's most price-sensitive spice categories; processors and wholesalers benchmark against Kawran Bazar spot prices. KHI's direct-from-Rajasthan sourcing bypasses Chattogram re-traders, offering 8–12% landed cost advantage.",
    videoSrc: '/videos/products/cumin.mp4',
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
    relatedProducts: ['milk-powder'],
    originStory: "Brazil's São Paulo state produces raw sugar at the world's lowest cost — a combination of scale, year-round harvest cycles, and integrated ethanol-sugar production that no other origin can replicate. ICUMSA 45 refined white sugar from Brazil meets the technical specification Bangladesh's food manufacturers demand: 99.9% sucrose purity, max 0.04% moisture, consistent crystal size. KHI imports on CIF Chattogram terms with all BSTI documentation, LC or TT payment structures, and flexible sizing from 20-foot containers to full bulk vessel lots.",
    marketContext: "Bangladesh consumes 2.5–3 million MT of sugar annually, importing 1.2–1.5 million MT/year. Ramadan consumption spikes 40–50% — sweets, sherbets, and processed food manufacturing consume massively through the Ramadan window. Importers who book October–January capture forward pricing; those booking in February–March pay the Ramadan premium.",
    videoSrc: '/videos/products/sugar.mp4',
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
    relatedProducts: ['sunflower-oil'],
    originStory: "Argentina's Pampas region and Brazil's Mato Grosso state are the world's largest soybean production zones — flat, fertile, and mechanized at continental scale. Crushed at export-country facilities and shipped as refined soyabean oil in bulk, the oil arrives at Chattogram with full phytosanitary, fumigation, and analytical certificates. Bangladesh's consumer market runs on soyabean oil — it is the dominant household cooking oil by volume, priced at the accessible end of the market.",
    marketContext: "Soyabean oil accounts for 55–60% of Bangladesh's total edible oil consumption by volume — higher than sunflower oil and palm oil combined. Annual imports run 700,000–900,000 MT. Bangladesh Bank prioritises essential food commodity FX allocation; soyabean oil is Category 1. Consumer pack (1L, 5L) demand drives the retail market; drum formats serve institutional and processing buyers.",
    videoSrc: '/videos/products/soyabean-oil.mp4',
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
    relatedProducts: ['pulses'],
    originStory: "Australia's Kabuli #1 chickpeas — screen-graded to 9mm+ under AQIS inspection at Port Adelaide — are among the world's most traceable pulses. Canada's Saskatchewan Desi chickpeas supply Bangladesh's besan flour and dal milling industries. KHI sources both varieties to match Bangladesh's Ramadan procurement cycle: Kabuli for the whole-chickpea and restaurant trade, Desi for the flour and dal processing sector that runs year-round.",
    marketContext: "Chickpeas are Bangladesh's Ramadan staple — chana curry, halim, and chola spike 50–60% in demand through the month of fasting. Annual imports run 150,000–250,000 MT, with 50–60% arriving in the pre-Ramadan October–January window. Australia and Canada supply 60–70% of Bangladesh's needs; aflatoxin-tested AQIS-inspected chickpeas are the safe import choice versus uncertified origins.",
    videoSrc: '/videos/products/chickpeas.mp4',
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
    relatedProducts: ['medjool-dates', 'milk-powder', 'sugar'],
    originStory: "California's Central Valley — a 450-mile agricultural corridor — produces 80% of the world's almond supply. Every February, half of the United States' commercial honeybee colonies are trucked in to pollinate the almond bloom. The Almond Board of California requires mandatory pasteurization under USDA protocol; every US almond entering international trade is PPO or steam-treated and USDA-inspected. KHI imports Nonpareil Extra No.1 grade in vacuum-sealed 25kg bags with BSTI compliance documentation.",
    marketContext: "Bangladesh's premium nut market is growing with the urban middle class. Almonds are a high-status gifting item — Eid-ul-Adha and Eid-ul-Fitr gifting peaks drive 3–5x markup over bulk input cost in premium retail tins. Key buyers: snack manufacturers, mithai producers, supermarket chains (Shwapno, Meena Bazar, Agora), 5-star hotels, and corporate gifting suppliers. USDA pasteurization means zero BFSA rejection risk.",
    videoSrc: '/videos/products/almonds.mp4',
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
    relatedProducts: ['almonds', 'sugar'],
    originStory: "Jordan's Wadi Araba valley — where the Dead Sea's mineral-rich air meets Rift Valley desert heat — has produced Medjool dates for decades. The same combination of mineral soil and extreme dry heat creates a caramel depth and jumbo-size that no other origin replicates. Saudi Arabia's Ajwa dates carry an additional dimension: mentioned in Hadith as spiritually significant, they are inseparable from Ramadan observance. KHI sources Jumbo-grade Medjool (28g+) from Jordan and premium Ajwa from Medina, with cold chain from origin to Chattogram.",
    marketContext: "Bangladesh imports 100,000–150,000 MT of dates annually; 70–80% of annual volume is sold in 30 Ramadan days. Saudi Ajwa commands 3–5x premium over regular dates — religious significance drives the market. Jordan Medjool commands the premium gifting tier. The order window is October–December; importers who miss it pay the Ramadan scarcity premium and risk stockouts during peak demand.",
    videoSrc: '/videos/products/medjool-dates.mp4',
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
    relatedProducts: ['sunflower-oil', 'sugar', 'cumin'],
    originStory: "Guangdong Province's Haitian Seasoning has been fermenting soy sauce since 1888 — the world's largest soy sauce brand, producing 600,000 MT annually. Lee Kum Kee invented oyster sauce in the same province the same year and exports it to professional kitchens in 100+ countries. Japan's Kikkoman naturally brews for 6–12 months in temperature-controlled vats — the gold standard for fine dining worldwide. KHI imports from these three tiers: Haitian for volume HRI buyers, Lee Kum Kee for mid-tier restaurants, Kikkoman for five-star hotels.",
    marketContext: "Dhaka's restaurant count grew 200%+ between 2015 and 2023. The HRI sector is growing 15–20% annually. 500,000+ Chinese and Asian workers in Bangladesh's construction and RMG sectors drive demand for authentic Asian condiments. Modern trade retail (Shwapno, Meena Bazar, UNIMART) is actively expanding its Asian condiment sections. One KHI supply relationship covers all three brand tiers — simplifying buyer procurement.",
    videoSrc: '/videos/products/soy-sauce.mp4',
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
    originStory: "Ludhiana, Punjab — called the 'Sheffield of India' for its dense concentration of metalworking units — is where 5,000+ registered auto-component manufacturers supply India's largest motorcycle brands. The fuel tank cluster grew organically as Hero Honda established nearby assembly in the 1980s and hundreds of ancillary suppliers followed. Today, Ludhiana tanks are OEM-compatible with Hero, Bajaj, TVS, and Honda — the brands that account for 85–90% of Bangladesh's 4M+ registered motorcycle fleet. KHI sources from ISO 9001-certified Ludhiana manufacturers with full BIS certification and brings containers CIF Chittagong.",
    marketContext: "Bangladesh has 4M+ registered motorcycles (BRTA 2024), with 350,000–450,000 new registrations annually. Hero and Bajaj hold 60–65% market share — highest tank replacement volume. Aftermarket distribution hubs in Keraniganj (Dhaka) and Agrabad (Chittagong) serve the workshop network. Counterfeit thin-gauge tanks with poor weld quality are a persistent market problem — ISO-certified OEM-equivalent sourcing is a genuine differentiator.",
    videoSrc: '/videos/products/motorcycle-fuel-tanks.mp4',
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
    originStory: "Faridabad, Haryana — India's largest cluster for plastic injection-moulded automotive components — is where ABS panels for Bangladesh's top-selling motorcycles are made. The 1,000+ auto-component units in this corridor supply body panels to Hero, Bajaj, TVS, and Honda assembly lines with the same OEM-grade tooling that produces aftermarket replacement panels. KHI maps every SKU to the model-year it fits — Hero Splendor Plus, Bajaj Discover, Bajaj Pulsar 150, TVS Apache RTR, Hero Glamour — so workshop buyers get the exact panel, not an approximation.",
    marketContext: "Bangladesh's roads are hard on motorcycles — the country has one of South Asia's higher accident rates. Body panel damage drives consistent aftermarket demand. A growing style-upgrade culture among young riders replacing stock panels with sportier variants adds an incremental demand channel. Pre-painted panels reduce workshop preparation time, a labour efficiency that distributors can monetize over unpainted alternatives.",
    videoSrc: '/videos/products/motorcycle-body-panels.mp4',
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
    originStory: "Brake parts are where cost-cutting stops. Ludhiana's IATF 16949-certified brake component manufacturers supply the same OEM specifications that come out of Hero and Bajaj assembly lines — asbestos-free friction linings, hardened steel pivot pins, documented friction coefficient ratings. BSTI has flagged substandard brake parts in Bangladesh multiple times. KHI sources from these certified Ludhiana factories and provides the BIS and IATF documentation that protects distributors from BSTI rejection and, more critically, from workshop liability.",
    marketContext: "A typical Bangladeshi motorcycle covers 15,000–30,000 km/year — brake shoe replacement cycles run 12–18 months for average users. Growing disc brake adoption on newer Bajaj Pulsar and TVS Apache models is expanding disc pad demand. Counterfeit brake parts are a documented safety concern; certified sourcing with asbestos-free certification is a market differentiator that high-quality distributors actively seek.",
    videoSrc: '/videos/products/motorcycle-brake-parts.mp4',
  },
  {
    id: 'iphone-displays',
    name: 'iPhone Replacement Displays',
    image: catalogImage('dd-soft-oled-iphone-17-pro-max'),
    images: [
      catalogImage('dd-soft-oled-iphone-17-pro-max'),
      catalogImage('gx-hard-oled-iphone-17-pro'),
      catalogImage('rj-incell-fhd-iphone-16-pro-max'),
      catalogImage('jk-hard-oled-iphone-15-pro'),
      catalogImage('zy-hd-iphone-14-pro'),
    ],
    description: 'iPhone replacement displays sourced from DBX Electronic Technology Co., Ltd. — Shenzhen\'s leading B2B phone parts supplier since 1998, serving 20,000 repair shops across 180+ countries. Available in three quality tiers: ANGO Soft OLED (top-tier, original TCLCSOT panels), ANGO Hard OLED (COG technology, XL glass), and ANGO Incell (highest-volume, cost-effective). Coverage from iPhone X through iPhone 17 Pro Max. Return rate never exceeds 0.48% — backed by 43-point QC on every unit.',
    type: 'import',
    category: 'Phone Parts',
    specifications: {
      'Coverage': 'iPhone X / XS / XS Max / XR through iPhone 17 / 17 Pro / 17 Pro Max',
      'Tier 1 — ANGO Soft OLED': 'Original TCLCSOT OLED panel · highest brightness & colour accuracy · refurb chain grade',
      'Tier 2 — ANGO Hard OLED': 'COG technology · XL glass · seamless body like Soft OLED · high-end repair grade',
      'Tier 3 — ANGO Incell': 'In-cell LCD · COG packaging · original FPC · highest market volume · budget-repair grade',
      'Other brands stocked': 'DD, RJ, JK, GX, ZY — additional iPhone LCD grades for wholesale flexibility',
      'QC Process': '43-point inspection + 2nd first-class check before shipment',
      'Return Rate': '<0.48% annually — 40% higher qualification threshold than industry average',
      'Certifications': 'CE, FCC, RoHS — meets international regulatory standards',
      'Connector': 'Original-spec flex connector, solderless drop-in assembly',
      'Warranty': '90 days on Grade A units',
    },
    benefits: [
      'Three quality tiers (Soft OLED / Hard OLED / Incell) cover every price point from premium refurb to volume budget repair',
      'ANGO brand: defective rate <0.48% — significantly lower than generic Shenzhen alternatives flooding the market',
      'CE, FCC, RoHS certified — meets Bangladesh customs documentation requirements for electronics imports',
      'DBX\'s 28-year track record: 7 factories, 15,000+ SKUs, 35 distribution channels, 20,000 direct repair shop customers globally',
      'Coverage from iPhone X through iPhone 17 series — future-proof stock for Bangladesh\'s growing iPhone user base',
      'OEM-spec connectors and flex cables for drop-in installation — no soldering required for standard repair workflows',
    ],
    packaging: [
      'Individual anti-static foam insert boxes per unit',
      'Carton of 10 units per model and per grade tier',
      'Mixed-model orders accepted — compatible matrix provided per shipment',
      'ESD-safe packaging throughout — dust-free workshop assembled',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['CE Certified', 'FCC Certified', 'RoHS Compliant', 'ISO 9001'],
    },
    relatedProducts: ['android-displays', 'charging-accessories', 'audio-accessories'],
    originStory: "DBX Electronic Technology Co., Ltd. (operated by Shenzhen Eclinking Electronic Technology Co., Limited) has operated from Shenzhen since 1998 — first from Guangzhou, then moving its supply chain to Huaqiangbei as the district became the world's largest aftermarket electronics wholesale hub. Over 28 years, DBX built seven factories, a 15,000-SKU catalogue, and direct supply relationships with 20,000 repair shops across 180 countries. Their proprietary ANGO brand sets the benchmark for iPhone LCD quality in the aftermarket: every unit goes through 43 inspection steps plus a second full-class inspection before shipment, holding defective rates below 0.48% annually — a standard 40% above the industry average. KHI sources ANGO Soft OLED, Hard OLED, and Incell tiers directly through DBX, with full CE, FCC, and RoHS documentation for clean import into Chattogram.",
    marketContext: "Bangladesh has 30–35 million active smartphone users, with iPhone market share at 5–8% and growing — concentrated among Dhaka's urban middle class, returning diaspora, and the premium second-hand market. Elephant Road, Dhaka: 2,000+ repair shops and component traders — the beating heart of the national repair economy. iPhone 11 and 12 are the highest-volume models at accessible second-hand price points; screen damage is the single most common repair. Chain repair workshops are expanding beyond Dhaka into Chittagong, Sylhet, and Rajshahi — creating demand for certified, consistently graded display supply. The price gap between a new iPhone and a screen repair (BDT 3,000–8,000 versus BDT 80,000+) makes the repair market structurally resilient even in economic downturns.",
    videoSrc: '/videos/products/iphone-displays.mp4',
    applications: [
      {
        label: 'Chain Repair Shops',
        image: catalogImage('rj-soft-oled-iphone-16-pro'),
        description: 'Multi-branch repair chains in Dhaka and Chittagong requiring consistent grade-certified iPhone screen stock across all locations.',
      },
      {
        label: 'Street Repair Workshops',
        image: catalogImage('gx-incell-hd-iphone-16'),
        description: 'Independent technicians on Elephant Road and Bashundhara City who need reliable Incell-grade screens at competitive wholesale pricing.',
      },
      {
        label: 'Soft OLED Refurb Grade',
        image: catalogImage('dd-soft-oled-iphone-16-pro-max'),
        description: 'Premium TCLCSOT OLED panels for refurbishment chains and insurance repair partners who guarantee original-quality visual experience.',
      },
      {
        label: 'Hard OLED Mid-Tier',
        image: catalogImage('zy-hard-oled-iphone-17-pro-max'),
        description: 'COG-technology Hard OLED for high-end repair shops offering a quality alternative between original and budget screens.',
      },
      {
        label: 'Incell Volume Supply',
        image: catalogImage('gx-incell-fhd-iphone-17-pro'),
        description: 'Highest-volume iPhone LCD grade for wholesalers and distributors supplying upcountry repair markets across Bangladesh.',
      },
      {
        label: 'Electronics Importers',
        image: catalogImage('zy-hd-iphone-15-pro-max'),
        description: 'Wholesale distributors building iPhone display catalogues for regional electronics retailers and repair supply networks.',
      },
    ],
    displayCatalog: iphoneDisplayCatalog,
  },
  {
    id: 'android-displays',
    name: 'Android Phone Displays',
    image: '/images/prod-gallery/OLED-Screen-with-Digitizer-Full-Assembly-For-Samsung-Galaxy-S25-FE-5G-S731-A576-A57-5G-6.62-inch.jpg',
    images: [
      '/images/prod-gallery/OLED-Screen-with-Digitizer-Full-Assembly-For-Samsung-Galaxy-S25-FE-5G-S731-A576-A57-5G-6.62-inch.jpg',
    ],
    description: 'Android replacement displays — OLED, AMOLED, and IPS LCD — for Samsung Galaxy, OPPO, Xiaomi Redmi, Huawei/Honor, Motorola, Realme, and OnePlus. Sourced from DBX Electronic Technology Co., Ltd., Shenzhen\'s leading B2B aftermarket supplier since 1998 with a 15,000-SKU catalogue, 7 factories, and supply to 20,000 repair shops globally. Grade A and Grade B tiers available — CE and RoHS certified for compliant import into Bangladesh.',
    type: 'import',
    category: 'Phone Parts',
    specifications: {
      'Samsung Galaxy coverage': 'Galaxy S25 / S24 / S23 series · A54 / A34 / A14 / A15 · A series full range · J series',
      'Xiaomi / Redmi': 'Redmi Note 13 / 12 / 11 · Poco X-series · Mi series · POCO F series',
      'OPPO / Realme': 'OPPO A78 / A58 / A57 / A17 · Realme C35 / C33 / 10 / 9 · OnePlus Nord series',
      'Huawei / Honor': 'Honor X8 / X7 / 90 Lite · Huawei Nova and Y-series',
      'Motorola': 'Moto G54 / G52 / G32 / Edge series',
      'Panel types': 'OLED / AMOLED · IPS LCD (Incell) · Grade A and Grade B tiers',
      'Assembly options': 'Screen only · Screen + frame pre-installed (reduces workshop handling)',
      'QC process': 'Dust-free workshop assembly · automated production · 43-point inspection',
      'Certifications': 'CE Certified · RoHS Compliant · ISO 9001',
      'Warranty': '90 days on Grade A units from delivery',
    },
    benefits: [
      'Single supplier for all Android brands dominant in Bangladesh — Samsung, OPPO, Xiaomi, Realme, Huawei/Honor, Motorola',
      'OLED and IPS LCD tiers match exact brand spec and price point — no guesswork on quality tier for each model',
      'DBX\'s 28-year reputation: <0.48% return rate on iPhone line translates to same quality discipline across Android range',
      'CE and RoHS certification on all units — compliant documentation for Chattogram customs clearance',
      'Pre-installed frame option available — reduces workshop handling time and training requirements for repair technicians',
      'Bangladesh\'s largest Android model catalogue — Samsung Galaxy A-series, Redmi Note series, and OPPO A-series all covered',
    ],
    packaging: [
      'Individual anti-static foam insert boxes per unit',
      'Carton of 10 units per model per grade tier',
      'Pre-installed frame option: each unit bubble-wrapped inside rigid carton',
      'Mixed-brand, mixed-model orders accepted — compatibility matrix provided per shipment',
    ],
    sourcing: {
      countries: ['China'],
      certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001'],
    },
    relatedProducts: ['iphone-displays', 'charging-accessories', 'audio-accessories'],
    originStory: "Android display supply is more complex than iPhone — each brand runs its own panel specifications, connector designs, and assembly formats across hundreds of model variants. DBX Electronic Technology Co., Ltd. (Shenzhen) has mapped this complexity over 28 years: 7 factories, 15,000 SKUs, and supply to 20,000 direct repair shops across 180 countries. Their catalogue covers Samsung Galaxy from the S25 series down to J-series legacy models, Xiaomi Redmi from Note 13 back, OPPO and Realme A-series, Huawei/Honor, Motorola, and OnePlus. BOE and Visionox OLED panels increasingly compete with Samsung Display quality at lower cost — DBX selects verified production batches in dust-free automated facilities. KHI brings this catalogue into Bangladesh with CE/RoHS documentation for clean customs clearance at Chattogram.",
    marketContext: "Android commands over 95% of Bangladesh's smartphone market. Samsung holds 25–30% by volume; OPPO, Vivo, and Xiaomi collectively hold 25–30% more. Screen damage accounts for 60–65% of all phone repairs — the single largest repair category. Average Android mid-range display repair costs BDT 1,500–4,000 versus a new phone at BDT 15,000–25,000: repair is economically rational across every income tier. Beyond Dhaka and Chittagong, every district town now has repair workshops — creating a distributed demand chain that stretches from Sylhet to Cox's Bazar. Bangladesh's repair market is growing as smartphone penetration pushes into lower-income tiers where screen repair is the only viable alternative to upgrade.",
    videoSrc: '/videos/products/android-displays.mp4',
    applications: [
      {
        label: 'Samsung Galaxy Repair',
        image: '/images/prod-gallery/OLED-Screen-with-Digitizer-Full-Assembly-For-Samsung-Galaxy-S25-FE-5G-S731-A576-A57-5G-6.62-inch.jpg',
        description: 'OLED and IPS LCD screens for Bangladesh\'s most popular Android brand — Galaxy A14, A34, A54, S23, and S24 are the dominant repair models.',
      },
      {
        label: 'OLED Display Supply',
        image: '/images/products/dbx/soft-1.jpg',
        description: 'Grade A OLED panels for premium Android models — Samsung S-series, OPPO Find X, and Xiaomi Mi series requiring top-tier colour and brightness.',
      },
      {
        label: 'Hard OLED Mid-Range',
        image: '/images/products/dbx/hard-1.jpg',
        description: 'Mid-range OLED for repair shops serving budget-conscious customers who want better-than-LCD quality without premium pricing.',
      },
      {
        label: 'IPS LCD Volume Grade',
        image: '/images/products/dbx/incell-1.jpg',
        description: 'High-volume Incell IPS LCD for OPPO A-series, Redmi Note series, and Realme C-series — the mass-market repair tier across Bangladesh.',
      },
      {
        label: 'Wholesale Distribution',
        image: '/images/products/dbx/Anog2_03.png',
        description: 'Bulk Android display orders for regional electronics distributors supplying repair shops across Dhaka, Chittagong, Sylhet, and Rajshahi.',
      },
      {
        label: 'Online Parts Retailers',
        image: '/images/products/dbx/Anog-20230814_20.jpg',
        description: 'E-commerce phone parts sellers sourcing mixed-model Android display catalogues for next-day delivery across Bangladesh.',
      },
    ],
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
    originStory: "Dongguan has the highest concentration of audio hardware factories globally — Sony, JBL, and Bose manufacture there alongside hundreds of OEM/ODM factories. The TWS boom post-AirPods transformed this region; Bluetooth 5.0 SoC chips from Qualcomm and MediaTek made quality wireless audio affordable. KHI sources from CE-certified Dongguan and Shenzhen ODM factories with documented Bluetooth specifications, tested battery life, and 90-day warranty — covering the BDT 800–5,000 retail tier that Bangladesh's market has adopted.",
    marketContext: "TWS earbuds are a lifestyle product for young urban Bangladeshis — university students, young professionals, remote workers. 4G coverage expansion and smartphone penetration are driving audio accessories adoption rapidly. Post-COVID home working and e-learning permanently elevated headphone demand. Gaming headsets are an emerging sub-category aligned with mobile gaming growth — PUBG Mobile and Free Fire dominate Bangladesh's gaming culture.",
    videoSrc: '/videos/products/audio-accessories.mp4',
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
    originStory: "Shenzhen invented GaN charging. The same city that built the factory ecosystem for Anker, Baseus, and UGREEN now supplies KHI's charging programme — CE-certified GaN wall chargers up to 65W, USB-C cables that handle 100W laptop charging, and power banks from 10,000 to 20,000mAh. GaN (Gallium Nitride) technology produces a 65W charger smaller than a traditional 5W cube — a paradigm shift for the power-conscious Bangladesh market where load shedding in secondary cities still runs 2–6 hours daily.",
    marketContext: "Power outage frequency of 2–6 hours/day in secondary cities makes power banks a daily necessity, not a travel convenience. USB-C transition is underway — most new smartphones now have USB-C, shifting charger demand structurally. GaN chargers appeal to Bangladesh's growing laptop-user population (university students, professionals) who can charge phone and laptop from one compact unit. Safety certification matters: counterfeit chargers cause fires — CE-certified marking is the safety differentiator.",
    videoSrc: '/videos/products/charging-accessories.mp4',
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
