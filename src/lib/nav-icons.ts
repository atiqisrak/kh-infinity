/** Flaticon Uicons (fi-rr-*) for navigation items */

export const productNavIcons: Record<string, string> = {
  "sunflower-oil": "olive",
  "soyabean-oil": "bottle",
  "milk-powder": "milk",
  potato: "potato",
  "potato-gulf": "potato",
  handicrafts: "palette",
  pulses: "pulse",
  tarpaulin: "fabric",
  cumin: "pepper",
  sugar: "candy",
  chickpeas: "peapod",
  almonds: "acorn",
  "medjool-dates": "cherry",
  "soy-sauce": "sauce",
};

export const hubNavIcons = {
  allImports: "box-open",
  allExports: "ship-side",
} as const;

export const serviceNavIcons: Record<string, string> = {
  "/services": "apps",
  "/services/customs": "stamp",
  "/services/trade-routes": "route",
  "/services/sme-import-solutions": "handshake",
};

export const resourceNavIcons: Record<string, string> = {
  "/blog": "blog-text",
  "/news": "newspaper",
  "/awards": "trophy",
  "/events": "confetti",
  "/careers": "briefcase",
};

export function getProductNavIcon(productId: string): string {
  return productNavIcons[productId] ?? "box";
}

export function getServiceNavIcon(href: string): string {
  return serviceNavIcons[href] ?? "circle-small";
}

export function getResourceNavIcon(href: string): string {
  return resourceNavIcons[href] ?? "document";
}
