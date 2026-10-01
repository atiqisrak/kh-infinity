import { products } from "@/lib/products";

const BASE = "https://khi.com.bd";

function url(path: string) {
  return `${BASE}${path}`;
}

interface ImageEntry {
  pageUrl: string;
  images: { loc: string; title: string; caption?: string }[];
}

const staticEntries: ImageEntry[] = [
  {
    pageUrl: url("/"),
    images: [
      { loc: url("/images/cover/kh1.webp"), title: "K.H. Infinity — B2B Importer Bangladesh" },
      { loc: url("/images/v3/hero-ship-tall.webp"), title: "Container ship at port — KHI global trade" },
      { loc: url("/images/v3/ship-aerial.webp"), title: "Aerial view of cargo ship — KHI import export" },
      { loc: url("/images/v3/containers-orange.webp"), title: "Stacked shipping containers — KHI logistics" },
    ],
  },
  {
    pageUrl: url("/about"),
    images: [
      { loc: url("/images/about/about-banner.webp"), title: "K.H. Infinity — About us, founded 2018 Dhaka" },
      { loc: url("/images/hubs/imports-hero.webp"), title: "Import operations — KHI Dhaka Bangladesh" },
    ],
  },
  {
    pageUrl: url("/imports"),
    images: [
      { loc: url("/images/hubs/imports-hero.webp"), title: "Bulk commodity imports Bangladesh — KHI" },
      { loc: url("/images/v3/tanker-sunset.webp"), title: "Oil tanker at sunset — sunflower oil import Bangladesh" },
    ],
  },
  {
    pageUrl: url("/exports"),
    images: [
      { loc: url("/images/hubs/exports-hero.webp"), title: "Bangladesh export operations — KHI" },
      { loc: url("/images/v3/ship-open-sea.webp"), title: "Container ship open sea — Bangladesh export logistics" },
    ],
  },
  {
    pageUrl: url("/services"),
    images: [
      { loc: url("/images/v3/services/ship-full-load.webp"), title: "B2B import export services Bangladesh — KHI" },
      { loc: url("/images/v3/modes-triptych.webp"), title: "Sea air road freight modes — KHI trade services" },
    ],
  },
  {
    pageUrl: url("/services/customs"),
    images: [
      { loc: url("/images/new/Rainy Customs Checkpoint at the Port.webp"), title: "Bangladesh customs clearance — NBR checkpoint" },
      { loc: url("/images/new/Modern Customs Inspection Hall.webp"), title: "Customs inspection hall — NBR clearance KHI" },
    ],
  },
  {
    pageUrl: url("/services/sme-import-solutions"),
    images: [
      { loc: url("/images/services/sme-import-hero.webp"), title: "SME import solutions Bangladesh — KHI consolidated imports" },
    ],
  },
  {
    pageUrl: url("/products/potato-gulf"),
    images: [
      { loc: url("/images/potato-export/hero.webp"), title: "Bangladesh potato export to Gulf GCC — K.H. Infinity" },
      { loc: url("/images/potato-export/grading.webp"), title: "Export potato grading — 50kg jute Grade A Bangladesh" },
      { loc: url("/images/potato-export/gulf-retail.webp"), title: "Yellow potatoes Gulf retail programme — KHI" },
      { loc: url("/images/potato-export/logistics.webp"), title: "Potato export logistics Bangladesh to GCC" },
      { loc: url("/images/potato-export/export-packaging.webp"), title: "Export packaging tarpaulin protection potatoes" },
      { loc: url("/images/potato-export/quality-checks.webp"), title: "Quality inspection export potatoes Bangladesh" },
    ],
  },
  {
    pageUrl: url("/industries"),
    images: [
      { loc: url("/images/v3/industries/warehouse-forklift.webp"), title: "Warehouse logistics — KHI industries served" },
      { loc: url("/images/v3/industries/welder-steel.webp"), title: "Manufacturing industry — KHI import export solutions" },
    ],
  },
  {
    pageUrl: url("/services/trade-routes"),
    images: [
      { loc: url("/images/v3/trade/container-stacks.webp"), title: "Trade routes — KHI import export lanes" },
      { loc: url("/images/v3/lanes/ship-broadside.webp"), title: "Ship broadside — KHI trade routes Bangladesh" },
    ],
  },
];

const productEntries: ImageEntry[] = products.map((p) => ({
  pageUrl: url(`/products/${p.id}`),
  images: [
    {
      loc: url(p.image),
      title: `${p.name} — ${p.type === "import" ? "Import" : "Export"} product | K.H. Infinity Bangladesh`,
      caption: p.description,
    },
    ...(p.images ?? [])
      .slice(1)
      .map((img) => ({ loc: url(img), title: `${p.name} — K.H. Infinity` })),
  ],
}));

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildXml(entries: ImageEntry[]) {
  const items = entries
    .map(({ pageUrl, images }) => {
      const imgs = images
        .map(
          ({ loc, title, caption }) =>
            `    <image:image>
      <image:loc>${xmlEscape(loc)}</image:loc>
      <image:title>${xmlEscape(title)}</image:title>${caption ? `\n      <image:caption>${xmlEscape(caption)}</image:caption>` : ""}
    </image:image>`
        )
        .join("\n");
      return `  <url>\n    <loc>${xmlEscape(pageUrl)}</loc>\n${imgs}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${items}
</urlset>`;
}

export async function GET() {
  const xml = buildXml([...staticEntries, ...productEntries]);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
