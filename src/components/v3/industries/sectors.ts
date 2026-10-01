import type { IconName } from "../Icons";

// The five sectors, shared by the /industries hub (cards, hero stack) and the
// "other industries" strip at the foot of each sector page. Copy comes from the
// original hub page; `short` matches the homepage "Who we supply" names.

export interface Sector {
  slug: "fmcg" | "retail" | "hospitality" | "manufacturing" | "agriculture";
  short: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  products: string[];
  icon: IconName;
  href: string;
}

export const sectors: Sector[] = [
  {
    slug: "fmcg",
    short: "FMCG",
    name: "FMCG (Fast-Moving Consumer Goods)",
    description:
      "Complete sourcing solutions for food products, beverages, and household essentials. Our FMCG division specializes in cooking oils, dairy products, sugar, pulses, and spices.",
    image: "/images/v3/industries/warehouse-forklift.webp",
    imageAlt: "Forklift moving a pallet of cartons down a warehouse aisle",
    products: ["Sunflower Oil", "Milk Powder", "Sugar", "Pulses", "Cumin"],
    icon: "basket",
    href: "/industries/fmcg",
  },
  {
    slug: "retail",
    short: "Retail",
    name: "Retail & E-commerce",
    description:
      "Supply chain solutions for retail businesses and online platforms. We help retailers source quality products at competitive prices with reliable delivery.",
    image: "/images/products/handicrafts.webp",
    imageAlt: "Handcrafted baskets and decor pieces",
    products: ["Handicrafts", "Textiles", "Consumer Goods"],
    icon: "store",
    href: "/industries/retail",
  },
  {
    slug: "hospitality",
    short: "Hospitality",
    name: "Hospitality & Food Service",
    description:
      "Bulk food products and supplies for hotels, restaurants, and catering businesses. We provide everything from cooking ingredients to specialty food items.",
    image: "/images/products/cumin-2.jpg",
    imageAlt: "Glass bowl of whole cumin seeds",
    products: ["Dairy Products", "Cooking Oils", "Spices"],
    icon: "chef",
    href: "/industries/hospitality",
  },
  {
    slug: "manufacturing",
    short: "Manufacturing",
    name: "Manufacturing & Industrial",
    description:
      "Industrial raw materials and supplies for manufacturing businesses. We source quality materials and equipment to support your production needs.",
    image: "/images/v3/industries/welder-steel.webp",
    imageAlt: "Welder working inside a large steel cylinder, sparks at the seam",
    products: ["Industrial Materials", "Raw Materials"],
    icon: "factory",
    href: "/industries/manufacturing",
  },
  {
    slug: "agriculture",
    short: "Agriculture",
    name: "Agriculture & Food Processing",
    description:
      "Agricultural products and processing materials. We export fresh produce and import essential inputs for the agriculture and food processing industry.",
    image: "/images/potato-export/grading.webp",
    imageAlt: "Burlap sack of fresh potatoes",
    products: ["Fresh Potatoes", "Grains", "Pulses"],
    icon: "sprout",
    href: "/industries/agriculture",
  },
];
