export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  category: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "exporter-guide-bangladesh",
    title: "The Exporter's Guide to Bangladesh: 5 Products to Source Beyond Apparel",
    excerpt:
      "Discover diverse sourcing opportunities in Bangladesh beyond RMG. Explore jute, leather, agro-products, and other growing export sectors.",
    author: {
      name: "Sarah Chen",
      role: "International Trade Specialist",
      image: "/images/team/sarah-chen.webp",
    },
    category: "Product Spotlights",
    date: "2025-01-10",
    image: "/images/blog/bangladesh-textile-success.webp",
    tags: ["bangladesh exports", "sourcing", "jute", "leather", "agro-products", "international trade"],
    content: `
      <p class="mb-4">Bangladesh's export landscape extends far beyond ready-made garments. Discover five dynamic product categories that are reshaping international trade opportunities.</p>

      <h2 class="text-2xl font-bold mb-4">1. Jute and Jute Goods</h2>
      <p class="mb-6">Bangladesh is the world's largest exporter of jute, offering sustainable alternatives to synthetic packaging materials. From jute bags and carpets to eco-friendly textiles, the jute industry continues to expand globally.</p>

      <h2 class="text-2xl font-bold mb-4">2. Leather and Leather Products</h2>
      <p class="mb-6">With a strong foothold in footwear and accessories, Bangladesh's leather sector is gaining international recognition for quality craftsmanship and competitive pricing.</p>

      <h2 class="text-2xl font-bold mb-4">3. Agricultural Products</h2>
      <p class="mb-6">The country's rich agricultural sector offers a variety of commodities including rice, fish, prawns, and fresh produce that meet international quality standards.</p>
    `,
  },
  {
    id: "import-guide-bangladesh",
    title: "How to Import Goods to Bangladesh: A 5-Step Sourcing & Compliance Guide",
    excerpt:
      "Navigate the import process to Bangladesh with confidence. Learn about L/C procedures, customs documentation, and compliance requirements for seamless importing.",
    author: {
      name: "Michael Zhang",
      role: "Import-Export Compliance Manager",
      image: "/images/team/michael-zhang.webp",
    },
    category: "Guides",
    date: "2025-01-08",
    image: "/images/blog/bangladesh-imports-2025.webp",
    tags: ["importing", "compliance", "sourcing", "bangladesh trade", "customs", "documentation"],
    content: `
      <p class="mb-4">Importing goods to Bangladesh requires understanding local regulations, documentation, and compliance requirements. Follow these five essential steps to streamline your import process.</p>

      <h2 class="text-2xl font-bold mb-4">Step 1: Determine Import Eligibility</h2>
      <p class="mb-6">First, verify that your product is permitted for import under current Bangladeshi regulations. Check for any restrictions, bans, or special licensing requirements.</p>

      <h2 class="text-2xl font-bold mb-4">Step 2: Secure Import Registration</h2>
      <p class="mb-6">Obtain necessary registration with the Registrar of Joint Stock Companies and Enterprises (RJSC) and obtain an Import Registration Certificate from the Chief Controller of Imports and Exports.</p>

      <h2 class="text-2xl font-bold mb-4">Step 3: Process Letter of Credit</h2>
      <p class="mb-6">Open an L/C through an authorized dealer bank, ensuring all terms and conditions align with your supplier agreement.</p>
    `,
  },
  {
    id: "lc-vs-tt-payment",
    title: "L/C vs. T/T: Choosing the Right Payment Term for Your International Trade Deal",
    excerpt:
      "Understand the differences between Letters of Credit and Telegraphic Transfers. Learn which payment method best suits your trade transaction and risk profile.",
    author: {
      name: "Emma Green",
      role: "Trade Finance Specialist",
      image: "/images/team/emma-green.webp",
    },
    category: "Trade Insights",
    date: "2025-01-05",
    image: "/images/blog/trade-regulations-2025.webp",
    tags: ["letter of credit", "telegraphic transfer", "payment terms", "trade finance", "international trade"],
    content: `
      <p class="mb-4">Selecting the appropriate payment method is crucial for international trade success. Compare L/C and T/T options to make informed decisions that protect both buyers and suppliers.</p>

      <h2 class="text-2xl font-bold mb-4">Letter of Credit (L/C)</h2>
      <p class="mb-6">L/Cs provide security through bank guarantees, ensuring payment only upon proper documentation. Ideal for high-value transactions or new trading relationships where trust needs to be established.</p>

      <h2 class="text-2xl font-bold mb-4">Telegraphic Transfer (T/T)</h2>
      <p class="mb-6">T/T offers faster processing and lower fees, making it suitable for established partnerships with proven track records. However, it provides less protection for both parties.</p>

      <h2 class="text-2xl font-bold mb-4">When to Choose Each</h2>
      <p class="mb-6">Consider transaction value, relationship history, and risk tolerance when selecting your payment method.</p>
    `,
  },
  {
    id: "bangladesh-jute-sustainable",
    title: "Why Bangladeshi Jute is the Sustainable Sourcing Choice for 2026",
    excerpt:
      "Explore how Bangladesh's jute industry is leading the sustainable sourcing movement. Learn about eco-friendly alternatives and market opportunities.",
    author: {
      name: "Rahul Sharma",
      role: "Sustainable Trade Analyst",
      image: "/images/team/rahul-sharma.webp",
    },
    category: "Sustainable Practices",
    date: "2025-01-03",
    image: "/images/blog/bangladesh-jute-export.webp",
    tags: ["jute", "sustainability", "eco-friendly", "bangladesh exports", "green materials"],
    content: `
      <p class="mb-4">As global sustainability becomes a priority, Bangladeshi jute emerges as a leading eco-friendly material solution for businesses worldwide.</p>

      <h2 class="text-2xl font-bold mb-4">The Environmental Advantage</h2>
      <p class="mb-6">Jute is 100% biodegradable and recyclable, requiring minimal water and pesticides during cultivation. This makes it a superior alternative to synthetic materials.</p>

      <h2 class="text-2xl font-bold mb-4">Growing Market Demand</h2>
      <p class="mb-6">With increasing environmental regulations and consumer awareness, demand for jute products continues to rise across packaging, textiles, and construction industries.</p>

      <h2 class="text-2xl font-bold mb-4">Quality and Versatility</h2>
      <p class="mb-6">Bangladeshi jute offers exceptional durability and adaptability, suitable for everything from high-strength packaging to fashionable accessories.</p>
    `,
  },
  {
    id: "nbr-customs-update-2025",
    title: "NBR Customs Update: What the Latest 2025 SROs Mean for Your Import Duties",
    excerpt:
      "Stay updated on recent NBR statutory regulatory orders affecting import duties and customs procedures. Understand how these changes impact your trade operations.",
    author: {
      name: "James Wilson",
      role: "International Trade Documentation Specialist",
      image: "/images/team/james-wilson.webp",
    },
    category: "Trade Insights",
    date: "2024-12-28",
    image: "/images/blog/trade-regulations-2025.webp",
    tags: ["NBR", "customs", "import duties", "SRO", "regulations", "compliance"],
    content: `
      <p class="mb-4">The National Board of Revenue (NBR) has issued multiple Statutory Regulatory Orders (SROs) in 2025 that significantly impact import duties and customs procedures.</p>

      <h2 class="text-2xl font-bold mb-4">Key Changes in 2025</h2>
      <p class="mb-6">SRO updates have affected duties across various product categories including textile machinery, consumer goods, and industrial equipment.</p>

      <h2 class="text-2xl font-bold mb-4">Impact on Import Costs</h2>
      <p class="mb-6">Review how updated tariff structures may affect your import costs and pricing strategies for 2025 and beyond.</p>

      <h2 class="text-2xl font-bold mb-4">Compliance Requirements</h2>
      <p class="mb-6">Ensure your documentation and declarations align with new SRO requirements to avoid delays and penalties.</p>
    `,
  },
  {
    id: "china-vs-india-sourcing",
    title: "Sourcing from China vs. Sourcing from India: A Cost-Benefit Analysis for Bangladeshi Businesses",
    excerpt:
      "Compare the advantages and challenges of sourcing from China versus India. Make data-driven decisions based on cost, quality, and logistics considerations.",
    author: {
      name: "Mohammad Hossain",
      role: "Strategic Sourcing Manager",
      image: "/images/team/mohammad-hossain.webp",
    },
    category: "Business Growth",
    date: "2024-12-25",
    image: "/images/blog/supplier-research-tools.webp",
    tags: ["sourcing", "china", "india", "supply chain", "cost analysis", "logistics"],
    content: `
      <p class="mb-4">Choosing between Chinese and Indian suppliers requires careful analysis of multiple factors including cost, quality, lead times, and geopolitical considerations.</p>

      <h2 class="text-2xl font-bold mb-4">China: Advantages and Challenges</h2>
      <p class="mb-6">China offers scale, sophisticated manufacturing capabilities, and established supply chains. However, rising labor costs and geopolitical tensions present challenges.</p>

      <h2 class="text-2xl font-bold mb-4">India: Emerging Opportunities</h2>
      <p class="mb-6">India's competitive labor costs, growing manufacturing sector, and favorable trade policies make it an attractive alternative for certain product categories.</p>

      <h2 class="text-2xl font-bold mb-4">Making the Right Choice</h2>
      <p class="mb-6">Analyze your specific product requirements, volume needs, and risk tolerance to determine the optimal sourcing strategy.</p>
    `,
  },
  {
    id: "pre-shipment-inspection",
    title: "The Importance of Pre-Shipment Inspection (PSI) When Sourcing from Asia",
    excerpt:
      "Learn why pre-shipment inspections are critical for maintaining quality control. Discover how PSI protects your business from costly defects and compliance issues.",
    author: {
      name: "Aisha Rahman",
      role: "Quality Assurance Director",
      image: "/images/team/aisha-rahman.webp",
    },
    category: "Guides",
    date: "2024-12-20",
    image: "/images/blog/sustainable-sourcing-bangladesh.webp",
    tags: ["quality control", "PSI", "inspection", "supply chain", "quality assurance"],
    content: `
      <p class="mb-4">Pre-shipment inspection is a critical quality control process that ensures your goods meet specifications before leaving the supplier's facility.</p>

      <h2 class="text-2xl font-bold mb-4">What is PSI?</h2>
      <p class="mb-6">PSI involves comprehensive inspection of goods, packaging, and documentation before shipment to verify compliance with purchase orders and quality standards.</p>

      <h2 class="text-2xl font-bold mb-4">Benefits of Inspection</h2>
      <p class="mb-6">Early detection of defects prevents costly rejections, returns, and customer dissatisfaction. PSI also ensures regulatory compliance and protects your brand reputation.</p>

      <h2 class="text-2xl font-bold mb-4">When is PSI Essential?</h2>
      <p class="mb-6">High-value orders, new suppliers, complex specifications, and products subject to strict regulations all benefit from professional PSI services.</p>
    `,
  },
  {
    id: "global-supply-chain-trends-2025",
    title: "Global Supply Chain Trends 2025: How Geopolitics Will Impact Your Sourcing Strategy",
    excerpt:
      "Examine how geopolitical shifts, trade tensions, and regional conflicts are reshaping global supply chains. Adapt your sourcing strategy for 2025.",
    author: {
      name: "Emma Green",
      role: "Trade Finance Specialist",
      image: "/images/team/emma-green.webp",
    },
    category: "Trade Insights",
    date: "2024-12-18",
    image: "/images/blog/sustainable-trade.webp",
    tags: ["supply chain", "geopolitics", "sourcing strategy", "global trade", "risk management"],
    content: `
      <p class="mb-4">Geopolitical developments in 2025 are fundamentally altering global supply chain dynamics, requiring businesses to adapt their sourcing strategies accordingly.</p>

      <h2 class="text-2xl font-bold mb-4">Reshoring and Nearshoring</h2>
      <p class="mb-6">Supply chain disruptions are driving companies toward regional sourcing and reduced dependence on distant suppliers.</p>

      <h2 class="text-2xl font-bold mb-4">Diversification Imperative</h2>
      <p class="mb-6">Single-source dependencies pose significant risks. Businesses are building multi-region supplier networks to enhance resilience.</p>

      <h2 class="text-2xl font-bold mb-4">Technology and Transparency</h2>
      <p class="mb-6">Advanced tracking and compliance technologies are becoming essential for managing complex global supply networks.</p>
    `,
  },
  {
    id: "sourcing-partner-advantages",
    title: "Struggling with Sourcing? How a Trading Partner Simplifies Importing Industrial Machinery",
    excerpt:
      "Discover how partnering with an experienced trading company streamlines complex industrial machinery imports. Learn about documentation, logistics, and compliance support.",
    author: {
      name: "James Wilson",
      role: "International Trade Documentation Specialist",
      image: "/images/team/james-wilson.webp",
    },
    category: "Business Growth",
    date: "2024-12-15",
    image: "/images/blog/bangladesh-imports-2025.webp",
    tags: ["trading partner", "industrial machinery", "importing", "sourcing", "logistics"],
    content: `
      <p class="mb-4">Importing industrial machinery involves complex regulations, specialized documentation, and technical requirements that can overwhelm even experienced buyers.</p>

      <h2 class="text-2xl font-bold mb-4">Complexity of Machinery Imports</h2>
      <p class="mb-6">Industrial equipment often requires special handling, certifications, compliance documentation, and technical specifications that vary by jurisdiction.</p>

      <h2 class="text-2xl font-bold mb-4">Role of Trading Partners</h2>
      <p class="mb-6">Experienced trading companies handle documentation, logistics, customs clearance, and compliance, allowing you to focus on your core business operations.</p>

      <h2 class="text-2xl font-bold mb-4">Cost and Time Savings</h2>
      <p class="mb-6">Professional trading partners leverage relationships and expertise to reduce costs, minimize delays, and ensure smooth operations.</p>
    `,
  },
  {
    id: "made-in-bangladesh-pharmaceuticals-food",
    title: "The Rise of 'Made in Bangladesh': Exploring New Opportunities in Pharmaceuticals and Food Products",
    excerpt:
      "Discover emerging opportunities in Bangladesh's pharmaceutical and food processing sectors. Learn about quality standards, market growth, and export potential.",
    author: {
      name: "Farah Rahman",
      role: "Market Development Specialist",
      image: "/images/team/farah-rahman.webp",
    },
    category: "Product Spotlights",
    date: "2024-12-12",
    image: "/images/blog/bangladesh-textile-success.webp",
    tags: ["bangladesh", "pharmaceuticals", "food products", "exports", "manufacturing"],
    content: `
      <p class="mb-4">Bangladesh is rapidly expanding beyond textiles into pharmaceuticals and food processing, presenting new opportunities for international trade.</p>

      <h2 class="text-2xl font-bold mb-4">Pharmaceutical Growth</h2>
      <p class="mb-6">The pharmaceutical sector is emerging as a major export industry, with local manufacturers meeting international quality standards including WHO-GMP compliance.</p>

      <h2 class="text-2xl font-bold mb-4">Food Processing Expansion</h2>
      <p class="mb-6">Food processing industries are leveraging Bangladesh's agricultural abundance to produce value-added products for domestic and export markets.</p>

      <h2 class="text-2xl font-bold mb-4">Investment Opportunities</h2>
      <p class="mb-6">Government incentives and infrastructure development are attracting investment in these high-growth sectors with strong export potential.</p>
    `,
  },
  {
    id: "bill-of-lading-guide",
    title: "Understanding Bill of Lading: A Comprehensive Guide",
    excerpt:
      "Learn everything about Bills of Lading, from types and requirements to digital transformation in shipping documentation.",
    author: {
      name: "James Wilson",
      role: "International Trade Documentation Specialist",
      image: "/images/team/james-wilson.webp",
    },
    category: "Guides",
    date: "2024-03-22",
    image: "/images/blog/bill-of-lading-guide.webp",
    tags: [
      "bill of lading",
      "shipping documents",
      "trade documentation",
      "international trade",
    ],
    content: `
      <p class="mb-4">In the complex world of international trade, few documents are as crucial as the Bill of Lading (B/L). This vital document serves as the backbone of international shipping transactions.</p>

      <h2 class="text-2xl font-bold mb-4">What is a Bill of Lading?</h2>
      <p class="mb-6">A Bill of Lading is a legal document issued by a carrier to a shipper that serves three primary functions:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Receipt of goods</li>
        <li>Contract of carriage</li>
        <li>Document of title</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Key Components of a Bill of Lading</h2>
      <p class="mb-4">Every B/L must include these essential elements:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Shipper details</li>
        <li>Consignee information</li>
        <li>Notify party (if applicable)</li>
        <li>Vessel name and voyage number</li>
        <li>Port of loading and discharge</li>
        <li>Description of goods</li>
        <li>Number of packages and weight</li>
        <li>Freight charges and payment terms</li>
        <li>Date of issue</li>
        <li>Signature of carrier or agent</li>
      </ul>
    `,
  },
];

export const blogCategories = [
  {
    id: "product-spotlights",
    name: "Product Spotlights",
    icon: "box",
  },
  {
    id: "trade-insights",
    name: "Trade Insights",
    icon: "chart-line",
  },
  {
    id: "guides",
    name: "Guides",
    icon: "book",
  },
  {
    id: "global-food-security",
    name: "Global Food Security",
    icon: "wheat-awn",
  },
  {
    id: "sustainable-practices",
    name: "Sustainable Practices",
    icon: "leaf",
  },
  {
    id: "business-growth",
    name: "Business Growth",
    icon: "chart-bar",
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogCategories() {
  return blogCategories;
}

