import type { Product } from "@/lib/products";
import { certLogos } from "./site";

// ── data derived from the product catalogue ───────────────────────────────
const COUNTRY_ALIASES: Record<string, string> = { "United States": "USA" };
const CERT_ALIASES: Record<string, string> = {
  "BSTI Certified": "BSTI",
  "Halal Certified": "Halal",
  "Halal available": "Halal",
};
/** Canonical cert name, matching the keys of `certLogos` where one exists */
export const certKey = (name: string) => CERT_ALIASES[name] ?? name;

export function sourcingFacts(products: Product[]) {
  const byCountry = new Map<string, Set<string>>();
  const certs = new Map<string, number>();
  for (const p of products) {
    for (const c of p.sourcing.countries) {
      const name = COUNTRY_ALIASES[c] ?? c;
      if (name === "Bangladesh") continue;
      if (!byCountry.has(name)) byCountry.set(name, new Set());
      byCountry.get(name)!.add(p.name);
    }
    for (const c of new Set(p.sourcing.certifications.map(certKey))) {
      if (c in certLogos) certs.set(c, (certs.get(c) ?? 0) + 1);
    }
  }
  return {
    // Biggest origins first, so they land at the bottom of the yard stack
    countries: [...byCountry.entries()]
      .map(([name, items]) => ({ name, items: [...items] }))
      .sort((a, b) => b.items.length - a.items.length || a.name.localeCompare(b.name)),
    certs: [...certs.entries()].sort((a, b) => b[1] - a[1]),
  };
}

// Container liveries for the sourcing yard (white text stays legible on all of them)
export const YARD_COLOURS = ["#fa6a25", "#0b2c3d", "#12506a", "#b8440f", "#3d6b85", "#d9531a", "#1f3a4d", "#56697a"];
