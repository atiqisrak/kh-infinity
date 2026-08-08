export type NewsCategory = "Industry" | "Company";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  source?: string;
  externalLink?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "nbr-benapole-clarification",
    title: "NBR Clarifies No New Restrictions at Benapole Land Port",
    excerpt:
      "The National Board of Revenue (NBR) has confirmed that operations at the Benapole land port are continuing as normal. They have dismissed rumors of new restrictions on import-export activities.",
    category: "Industry",
    date: "2025-10-15",
    source: "National Board of Revenue",
  },
  {
    id: "supply-chain-volatility-2025",
    title: "Global Supply Chain Volatility in 2025",
    excerpt:
      "Global trade continues to face challenges from economic uncertainty and shifting geopolitical relations. Experts advise businesses to focus on regulatory compliance and diversify their supplier base.",
    category: "Industry",
    date: "2025-10-10",
  },
  {
    id: "bangladesh-export-diversification",
    title: "Bangladesh Focuses on Export Diversification",
    excerpt:
      "While the Ready-Made Garments (RMG) sector remains the dominant exporter, Bangladesh is seeing significant growth in jute and jute goods, leather products, and agricultural goods.",
    category: "Industry",
    date: "2025-10-05",
  },
  {
    id: "nbr-sro-2025",
    title: "NBR Issues Multiple Customs SROs in 2025",
    excerpt:
      "The NBR has issued numerous Statutory Regulatory Orders (SROs) throughout 2025, adjusting customs duties and import regulations for a wide range of products.",
    category: "Industry",
    date: "2025-09-28",
    source: "National Board of Revenue",
  },
  {
    id: "khi-partnership-announcement",
    title: "K.H. Infinity Announces Strategic Partnership with International Suppliers",
    excerpt:
      "We are excited to announce new strategic partnerships that will expand our product portfolio and enhance our supply chain capabilities across Asia.",
    category: "Company",
    date: "2025-10-12",
  },
  {
    id: "khi-milestone-celebration",
    title: "K.H. Infinity Reaches New Milestone: $50M in Annual Trade Volume",
    excerpt:
      "We are proud to celebrate achieving $50 million in annual trade volume, reflecting our continued growth and commitment to excellence in international trade.",
    category: "Company",
    date: "2025-10-01",
  },
  {
    id: "khi-quality-certification",
    title: "K.H. Infinity Receives ISO 9001:2015 Quality Management Certification",
    excerpt:
      "We have successfully obtained ISO 9001:2015 certification, demonstrating our commitment to maintaining the highest quality standards in all our trade operations.",
    category: "Company",
    date: "2025-09-20",
  },
];

export function getNewsItems(category?: NewsCategory): NewsItem[] {
  if (category) {
    return newsItems.filter((item) => item.category === category);
  }
  return newsItems;
}

export function getNewsItem(id: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}

export function getIndustryNews(): NewsItem[] {
  return newsItems.filter((item) => item.category === "Industry");
}

export function getCompanyNews(): NewsItem[] {
  return newsItems.filter((item) => item.category === "Company");
}
