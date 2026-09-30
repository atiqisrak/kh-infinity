// Copy for the v3 landing concept. Figures and claims mirror what the live site
// already publishes (FAQ, potato-gulf, industries, stats) — keep them in sync.

import type { IconName } from "./Icons";

export const phone = { display: "+880 1712-196266", href: "tel:+8801712196266" };

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
];

// Hero cycles through these; each panel's lane card updates with it.
export const heroModes = [
  {
    key: "sea",
    label: "Sea",
    image: "/images/v3/hero-ship-tall.webp",
    alt: "Aerial view of a loaded container ship heading straight towards the camera",
    lane: { from: "CN", to: "BD", fromName: "China", toName: "Bangladesh", mode: "Sea freight", eta: "20–45 days" },
  },
  {
    key: "road",
    label: "Road",
    image: "/images/v3/truck-apron.webp",
    alt: "White truck with an orange stripe on an open apron at dusk",
    lane: { from: "Port", to: "Door", fromName: "Released cargo", toName: "Your warehouse", mode: "Road freight", eta: "Door delivery" },
  },
  {
    key: "air",
    label: "Air",
    image: "/images/v3/air-cargo.webp",
    alt: "Wrapped cargo pallet being loaded onto a wide-body aircraft",
    lane: { from: "AE", to: "BD", fromName: "Middle East", toName: "Bangladesh", mode: "Air freight", eta: "3–7 days" },
  },
] as const;

// Strip under the hero: each column pairs a headline figure with the capability behind it.
// `value: null` means "fill from the catalogue" (origin-country count).
export const glance: { value: string | null; label: string; icon: IconName; title: string; body: string }[] = [
  { value: "15+", label: "Countries served", icon: "globe", title: "Import & export", body: "China, Middle East, GCC" },
  { value: null, label: "Origin countries", icon: "shield", title: "Certified suppliers", body: "ISO 22000 · HACCP · Halal" },
  { value: "70+", label: "Deliveries completed", icon: "stamp", title: "In-house customs", body: "Chattogram & Dhaka" },
  { value: "5+", label: "Years in trade", icon: "receipt", title: "Landed-cost quotes", body: "Built on NBR TTI duty data" },
];

export const journey = [
  {
    step: "01",
    title: "Ship",
    body: "Sea freight booked, documented and tracked from origin port.",
    image: "/images/v3/ship-aerial.webp",
    alt: "Aerial view of a container ship cutting through dark water",
  },
  {
    step: "02",
    title: "Clear",
    body: "HS classification, duty and filing handled by our own team.",
    image: "/images/v3/containers-orange.webp",
    alt: "Stacked orange shipping containers seen from below",
  },
  {
    step: "03",
    title: "Deliver",
    body: "Released cargo trucked to your warehouse or buyer.",
    image: "/images/v3/truck-apron.webp",
    alt: "White truck with an orange stripe on an open apron at dusk",
  },
];

export const reasons = [
  {
    title: "Transparent landed cost",
    body: "Quotes built on NBR TTI duty data, so the price you approve is the price you pay.",
  },
  {
    title: "Customs, in-house",
    body: "Our own clearance team handles documentation at Chattogram and Dhaka.",
  },
  {
    title: "Verified sourcing",
    body: "Every supplier is checked for certifications and quality before the first order.",
  },
  {
    title: "Bulk to SME",
    body: "Full-container contracts or shared loads for growing businesses.",
  },
];

// Kept deliberately parallel: one-word titles, ~50-character bodies, 2-word owner tags,
// so the five columns line up without fixed heights.
export const process = [
  { title: "Brief", body: "Tell us the product, spec, volume and destination.", owner: "You" },
  { title: "Quote", body: "Get an itemised landed cost before you commit.", owner: "KHI desk" },
  { title: "Source", body: "Verified suppliers, with every lot inspected.", owner: "KHI + supplier" },
  { title: "Ship", body: "Booking, documents and tracking to arrival.", owner: "KHI + carrier" },
  { title: "Deliver", body: "Customs cleared, duties paid, cargo at your door.", owner: "KHI customs" },
];

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

export const potatoSpecs = [
  { label: "Varieties", value: "Russet · Red · Yellow" },
  { label: "Size", value: "50–80 mm diameter" },
  { label: "Grade", value: "Grade A, sorted & defect-checked" },
  { label: "Packing", value: "25 kg mesh · 50 kg jute · custom" },
  { label: "Protection", value: "Tarpaulin cover for hot-climate transit" },
  { label: "Documents", value: "Invoice, packing list, BL/AWB, COO, phyto" },
];

export const industries: { icon: IconName; name: string; body: string; products: string; href: string }[] = [
  // Parallel copy on purpose: one-word names, ~45-char lines, three products each.
  {
    icon: "basket",
    name: "FMCG",
    body: "Staples for distributors and consumer brands.",
    products: "Oils · Dairy · Sugar",
    href: "/industries/fmcg",
  },
  {
    icon: "store",
    name: "Retail",
    body: "Steady stock for shops and online stores.",
    products: "Crafts · Textiles · Goods",
    href: "/industries/retail",
  },
  {
    icon: "chef",
    name: "Hospitality",
    body: "Bulk ingredients for hotels and restaurants.",
    products: "Dairy · Oils · Spices",
    href: "/industries/hospitality",
  },
  {
    icon: "factory",
    name: "Manufacturing",
    body: "Raw materials and inputs for production lines.",
    products: "Tarpaulin · Resins · Parts",
    href: "/industries/manufacturing",
  },
  {
    icon: "sprout",
    name: "Agriculture",
    body: "Fresh produce out, processing inputs in.",
    products: "Potatoes · Grains · Pulses",
    href: "/industries/agriculture",
  },
];

export const routes = [
  {
    from: { code: "CN", city: "China" },
    to: { code: "BD", city: "Chattogram" },
    label: "Import from China",
    note: "Consumer goods, industrial inputs",
    href: "/services/trade-routes/import-from-china",
  },
  {
    from: { code: "AE", city: "Middle East" },
    to: { code: "BD", city: "Chattogram" },
    label: "Import from the Middle East",
    note: "Dates, edible oils, dairy",
    href: "/services/trade-routes/import-from-middle-east",
  },
  {
    from: { code: "BD", city: "Bangladesh" },
    to: { code: "AE", city: "Gulf markets" },
    label: "Export to the Middle East",
    note: "Fresh potatoes, produce",
    href: "/services/trade-routes/export-to-middle-east",
  },
];

export const faqs = [
  {
    q: "How long does an import take?",
    a: "Sea freight typically takes 20–45 days and air freight 3–7 days, depending on origin. Customs clearance in Bangladesh then takes 2–5 working days.",
  },
  {
    q: "Do you handle customs clearance in Bangladesh?",
    a: "Yes. We manage full clearance for B2B imports and exports, with the Total Tax Incidence (CD, RD, SD, VAT, AIT and AT) shown upfront per current NBR SROs and the Customs Tariff.",
  },
  {
    q: "What documents do I need to import?",
    a: "Usually a commercial invoice, bill of lading or airway bill, packing list, certificate of origin and an import licence where applicable. We prepare and check them with you.",
  },
  {
    q: "Which payment terms do you accept?",
    a: "Letter of Credit (L/C), wire transfer, documentary collection and advance payment, agreed per contract.",
  },
  {
    q: "Which trade routes do you run?",
    a: "Imports from China and the Middle East into Bangladesh, and export lanes to the Gulf and GCC for fresh produce such as potatoes.",
  },
];

export const tickerWords = ["Import", "Export", "Customs clearance", "Sourcing", "Trade routes", "Bulk commodities"];
