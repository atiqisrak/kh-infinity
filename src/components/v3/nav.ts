// Main-nav structure for the v3 SiteNav. Built on the server (it reads the product
// catalogue) and handed to the client nav as plain data.

import { getProductsByType } from "@/lib/products";
import { services } from "./site";

export interface NavLinkItem {
  label: string;
  href: string;
  note?: string;
  image?: string;
}

export interface NavEntry {
  label: string;
  href: string;
  /** Overview link text in the panel; defaults to "All <label>" */
  overview?: string;
  blurb?: string;
  columns?: { title: string; links: NavLinkItem[] }[];
}

export function getNavEntries(): NavEntry[] {
  const productLink = (p: ReturnType<typeof getProductsByType>[number]): NavLinkItem => ({
    label: p.name,
    href: `/products/${p.id}`,
    note: p.category,
    image: p.image,
  });

  return [
    {
      label: "Products",
      href: "/products",
      blurb: "Edible oils, dairy, grains, spices, nuts and industrial goods, imported into Bangladesh or exported to the Gulf.",
      columns: [
        { title: "Imports", links: getProductsByType("import").map(productLink) },
        {
          title: "Exports",
          links: [
            ...getProductsByType("export").map(productLink),
            { label: "Potato export (Gulf)", href: "/products/potato-gulf", note: "Export programme", image: "/images/potato-export/hero.webp" },
          ],
        },
      ],
    },
    {
      label: "Services",
      href: "/services",
      blurb: "Sourcing, shipping and customs under one roof, so you deal with one team.",
      columns: [
        {
          title: "What we do",
          links: services.map((svc) => ({ label: svc.title, href: svc.href, note: svc.body })),
        },
      ],
    },
    { label: "Industries", href: "/industries" },
    {
      label: "Company",
      href: "/about",
      overview: "About K.H. Infinity",
      blurb: "Trading premium commodities between world markets and Bangladesh since 2018.",
      columns: [
        {
          title: "Company",
          links: [
            { label: "About us", href: "/about", note: "Our story and values" },
            { label: "Investors", href: "/investors", note: "Investor relations" },
            { label: "Careers", href: "/careers", note: "Open roles" },
            { label: "FAQ", href: "/faq", note: "Answers for buyers" },
            { label: "Contact", href: "/contact", note: "Talk to our team" },
          ],
        },
      ],
    },
    {
      label: "Insights",
      href: "/blog",
      overview: "All articles",
      blurb: "Trade notes, company news and where to meet us.",
      columns: [
        {
          title: "Insights",
          links: [
            { label: "Blog", href: "/blog", note: "Trade notes and guides" },
            { label: "News", href: "/news", note: "Company updates" },
            { label: "Events", href: "/events", note: "Trade fairs and meetups" },
            { label: "Awards", href: "/awards", note: "Recognition" },
          ],
        },
      ],
    },
  ];
}
