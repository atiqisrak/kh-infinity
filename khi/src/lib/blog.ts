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

