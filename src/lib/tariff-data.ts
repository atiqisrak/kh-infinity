export interface TariffEntry {
  hsCode: string;
  hsSection: string;
  ttiRange?: string;
  bctReference?: string;
}

/** HS codes and verified TTI ranges per BCT 2025–2026 where confirmed. */
export const TARIFF_BY_PRODUCT_ID: Record<string, TariffEntry> = {
  "sunflower-oil": {
    hsCode: "1512.19.00",
    hsSection: "Section 15 — Animal/Vegetable Fats and Oils",
    bctReference: "Chapter 15, Bangladesh Customs Tariff",
  },
  "soyabean-oil": {
    hsCode: "1507.90.00",
    hsSection: "Section 15 — Animal/Vegetable Fats and Oils",
    bctReference: "Chapter 15, Bangladesh Customs Tariff",
  },
  "milk-powder": {
    hsCode: "0402.10.00",
    hsSection: "Section 4 — Dairy Produce and Birds' Eggs",
    bctReference: "Chapter 4, Bangladesh Customs Tariff",
  },
  sugar: {
    hsCode: "1701.99.00",
    hsSection: "Section 4 — Prepared Foodstuffs (Ch. 16–24)",
    bctReference: "Chapter 17, Bangladesh Customs Tariff",
  },
  pulses: {
    hsCode: "0713.40.00",
    hsSection: "Section 2 — Vegetable Products",
    bctReference: "Chapter 7, Bangladesh Customs Tariff",
  },
  chickpeas: {
    hsCode: "0713.20.00",
    hsSection: "Section 2 — Vegetable Products",
    bctReference: "Chapter 7, Bangladesh Customs Tariff",
  },
  cumin: {
    hsCode: "0909.21.00",
    hsSection: "Section 2 — Vegetable Products (Spices)",
    bctReference: "Chapter 9, Bangladesh Customs Tariff",
  },
  tarpaulin: {
    hsCode: "6306.12.00",
    hsSection: "Section 11 — Textiles and Textile Articles",
    bctReference: "Chapter 63, Bangladesh Customs Tariff",
  },
  potato: {
    hsCode: "0701.90.00",
    hsSection: "Section 2 — Vegetable Products",
    bctReference: "Chapter 7, Bangladesh Customs Tariff",
  },
  handicrafts: {
    hsCode: "4602.19.00",
    hsSection: "Section 9 — Wood and Articles of Wood",
    bctReference: "Chapter 46, Bangladesh Customs Tariff",
  },
  almonds: {
    hsCode: "0802.12.00",
    hsSection: "Section 2 — Edible Fruit and Nuts",
    ttiRange: "64.25% – 96.10%",
    bctReference: "Chapter 8, Bangladesh Customs Tariff",
  },
  "medjool-dates": {
    hsCode: "0804.10.00",
    hsSection: "Section 2 — Edible Fruit and Nuts",
    ttiRange: "48.75%",
    bctReference: "Chapter 8, Bangladesh Customs Tariff",
  },
  "soy-sauce": {
    hsCode: "2103.10.00",
    hsSection: "Section 4 — Prepared Foodstuffs (Ch. 16–24)",
    ttiRange: "96.10%",
    bctReference: "Chapter 21, Bangladesh Customs Tariff",
  },
};

export function getTariff(productId: string): TariffEntry | undefined {
  return TARIFF_BY_PRODUCT_ID[productId];
}
