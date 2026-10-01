// Site-wide v3 copy shared by the nav, footer and v3 pages.

export const phone = { display: "+880 1712-196266", href: "tel:+8801712196266" };

export const certLogos: Record<string, { src: string; w: number; h: number; note: string }> = {
  "ISO 22000": { src: "/images/v3/certs/iso-22000.png", w: 215, h: 216, note: "Food safety management" },
  HACCP: { src: "/images/v3/certs/haccp.png", w: 398, h: 223, note: "Hazard analysis & critical control" },
  Halal: { src: "/images/v3/certs/halal.svg", w: 920, h: 909, note: "Certified or available on request" },
  BSTI: { src: "/images/v3/certs/bsti.svg", w: 300, h: 210, note: "Bangladesh Standards & Testing" },
};

export const services = [
  {
    title: "Import sourcing",
    body: "Edible oils, dairy, pulses, sugar, nuts and dates sourced from vetted producers abroad and landed in Bangladesh.",
    href: "/imports",
  },
  {
    title: "Export to the Gulf",
    body: "Graded, packed Bangladeshi potatoes and produce shipped to retailers and distributors across the Middle East.",
    href: "/products/potato-gulf",
  },
  {
    title: "Customs clearance",
    body: "HS classification, duty calculation and document handling so your cargo clears without surprises.",
    href: "/services/customs",
  },
  {
    title: "SME import solutions",
    body: "Consolidated shipments and smaller minimum orders for businesses importing for the first time.",
    href: "/services/sme-import-solutions",
  },
  {
    title: "Trade routes",
    body: "Planned lanes between China, the Middle East and Bangladesh, with one partner end to end.",
    href: "/services/trade-routes",
  },
];

// From the FAQ's import-documents answer and the potato-export docs list
export const shipmentDocs = [
  "Commercial invoice",
  "Packing list",
  "Bill of lading / AWB",
  "Certificate of origin",
  "Phytosanitary (produce)",
];

export const tickerWords = ["Import", "Export", "Customs clearance", "Sourcing", "Trade routes", "Bulk commodities"];
