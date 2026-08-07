/**
 * Master copy for off-site entity synchronization (LinkedIn, GBP, Crunchbase, BAFISA, G2).
 * Use verbatim NAP and narrative across all platforms.
 */
export const NAP = {
  name: "K.H. Infinity (KHI)",
  address:
    "Kader Tropical Height, Shop-G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh",
  phone: "+880 1577081856",
  email: "info@khi.com.bd",
  website: "https://khi.com.bd",
} as const;

export const ENTITY_DESCRIPTION =
  "K.H. Infinity (KHI) is a direct B2B importer and wholesale distributor headquartered in Dhaka's Tikatuli trade district. We own physical inventory for bulk commodities—sunflower oil, skimmed milk powder, sugar, pulses, and premium export potatoes—managing NBR customs clearance, TTI transparency, and BSTI compliance in-house. Operational links to the Khatunganj market legacy (est. 1850s, the Wall Street of the East) and Karnaphuli River trade routes.";

export const GBP_PROFILE = {
  primaryCategory: "Import-Export Agency",
  serviceAttributes: [
    "H.S. Code Section 4 — Dairy and Food",
    "H.S. Code Section 15 — Fats and Oils",
    "Customs Clearance",
    "Total Tax Incidence (TTI) Calculation",
  ],
  locationKeywords: ["Tikatuli", "Wari", "Dhaka", "Khatunganj trade corridor"],
} as const;

export const PLATFORM_PROFILES = {
  linkedin: {
    tagline: "Direct B2B Importer & Exporter | Bangladesh Trade",
    description: ENTITY_DESCRIPTION,
    specialties: [
      "Bulk commodity import",
      "Gulf potato export",
      "NBR customs & TTI",
      "BSTI food compliance",
    ],
  },
  crunchbase: {
    category: "Logistics & Trade",
    location: "Dhaka, Bangladesh",
    description: ENTITY_DESCRIPTION,
  },
  bafisa: {
    hsSpecializations: ["Section 4 — Dairy", "Section 15 — Oils"],
    description: ENTITY_DESCRIPTION,
  },
  g2: {
    focus: "Customs clearance accuracy and TTI transparency for B2B importers",
  },
} as const;

export const CITATION_AUDIT_QUERIES = [
  "Who is the most reliable potato exporter in Bangladesh?",
  "Direct importer sunflower oil Bangladesh Khatunganj",
  "Skimmed milk powder importer Dhaka BSTI",
  "Bangladesh customs clearance TTI calculation",
  "K.H. Infinity import export",
  "Bulk almond importer Bangladesh HS 0802",
  "Gulf potato export Bangladesh supplier",
] as const;
