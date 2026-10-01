// The three planned trade lanes. Used by the trade-routes hub (lane board, lane
// cards, route finder) and by each lane page's "other lanes" rail.
// Copy comes from the existing trade-routes hub and the homepage "Lanes we run".

import type { FlagCode } from "../Flag";

export type LaneSlug = "import-from-china" | "import-from-middle-east" | "export-to-middle-east";

export interface LaneEnd {
  code: FlagCode;
  /** Short place label under the code */
  city: string;
  /** Country / region name used by the route finder */
  region: string;
}

export interface LaneSummary {
  slug: LaneSlug;
  href: string;
  direction: "import" | "export";
  label: string;
  /** One-liner (homepage lane board) */
  note: string;
  /** Card description (trade-routes hub) */
  description: string;
  /** Route finder result copy */
  message: string;
  products: string[];
  from: LaneEnd;
  to: LaneEnd;
  image: string;
  imageAlt: string;
}

export const lanes: LaneSummary[] = [
  {
    slug: "import-from-china",
    href: "/services/trade-routes/import-from-china",
    direction: "import",
    label: "Import from China",
    note: "Consumer goods, industrial inputs",
    description: "Industrial products, equipment, and raw materials sourced from China.",
    message: "We specialize in importing industrial products from China to Bangladesh.",
    products: ["Tarpaulin", "Industrial Equipment"],
    from: { code: "CN", city: "China", region: "China" },
    to: { code: "BD", city: "Chattogram", region: "Bangladesh" },
    image: "/images/v3/ship-aerial.webp",
    imageAlt: "Aerial view of a loaded container ship at sea",
  },
  {
    slug: "import-from-middle-east",
    href: "/services/trade-routes/import-from-middle-east",
    direction: "import",
    label: "Import from the Middle East",
    note: "Dates, edible oils, dairy",
    description: "Premium food products and commodities from Middle Eastern countries.",
    message: "We import premium food products from Middle East to Bangladesh.",
    products: ["Cooking Oils", "Dairy Products", "Spices"],
    from: { code: "AE", city: "Middle East", region: "Middle East" },
    to: { code: "BD", city: "Chattogram", region: "Bangladesh" },
    image: "/images/v3/tanker-sunset.webp",
    imageAlt: "Tanker sailing across calm water at sunset",
  },
  {
    slug: "export-to-middle-east",
    href: "/services/trade-routes/export-to-middle-east",
    direction: "export",
    label: "Export to the Middle East",
    note: "Fresh potatoes, produce",
    description: "Fresh produce, handicrafts, and agricultural products from Bangladesh.",
    message: "We export fresh produce and handicrafts to Middle East.",
    products: ["Potatoes", "Handicrafts", "Agricultural Products"],
    from: { code: "BD", city: "Bangladesh", region: "Bangladesh" },
    to: { code: "AE", city: "Gulf markets", region: "Middle East" },
    image: "/images/v3/truck-apron.webp",
    imageAlt: "Container truck parked on an open apron at dusk",
  },
];

export function getLane(slug: LaneSlug): LaneSummary {
  return lanes.find((l) => l.slug === slug)!;
}

/** Route finder: the lane that runs origin → destination, if any */
export function findLane(origin: string, destination: string): LaneSummary | undefined {
  return lanes.find((l) => l.from.region === origin && l.to.region === destination);
}

/** Countries offered by the route finder (as on the original page) */
export const finderCountries = [
  "Bangladesh",
  "China",
  "India",
  "Middle East",
  "USA",
  "UK",
  "Australia",
  "Thailand",
  "Malaysia",
  "Singapore",
];
