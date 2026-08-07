import { getProductsByType } from "./products";
import {
  getProductNavIcon,
  getResourceNavIcon,
  getServiceNavIcon,
  hubNavIcons,
} from "./nav-icons";

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavGroup {
  id: string;
  label: string;
  href: string;
  icon: string;
  children: NavLink[];
}

export const primaryLinks: NavLink[] = [
  { label: "About Us", href: "/about", icon: "info" },
  { label: "Industries", href: "/industries", icon: "building" },
  { label: "FAQ", href: "/faq", icon: "interrogation" },
];

export const serviceLinks: NavLink[] = [
  { label: "All services", href: "/services", icon: getServiceNavIcon("/services") },
  { label: "Customs clearance", href: "/services/customs", icon: getServiceNavIcon("/services/customs") },
  { label: "Trade routes", href: "/services/trade-routes", icon: getServiceNavIcon("/services/trade-routes") },
  {
    label: "SME import solutions",
    href: "/services/sme-import-solutions",
    icon: getServiceNavIcon("/services/sme-import-solutions"),
  },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog", icon: getResourceNavIcon("/blog") },
  { label: "News", href: "/news", icon: getResourceNavIcon("/news") },
  { label: "Awards", href: "/awards", icon: getResourceNavIcon("/awards") },
  { label: "Events", href: "/events", icon: getResourceNavIcon("/events") },
  { label: "Careers", href: "/careers", icon: getResourceNavIcon("/careers") },
];

export function getImportNavGroup(): NavGroup {
  const products = getProductsByType("import");
  return {
    id: "imports",
    label: "Imports",
    href: "/imports",
    icon: "box-open",
    children: [
      { label: "All imports", href: "/imports", icon: hubNavIcons.allImports },
      ...products.map((p) => ({
        label: p.name,
        href: `/products/${p.id}`,
        icon: getProductNavIcon(p.id),
      })),
    ],
  };
}

export function getExportNavGroup(): NavGroup {
  const products = getProductsByType("export");
  return {
    id: "exports",
    label: "Exports",
    href: "/exports",
    icon: "plane-departure",
    children: [
      { label: "All exports", href: "/exports", icon: hubNavIcons.allExports },
      ...products.map((p) => ({
        label: p.name,
        href: `/products/${p.id}`,
        icon: getProductNavIcon(p.id),
      })),
      {
        label: "Potato export (Gulf)",
        href: "/products/potato-gulf",
        icon: getProductNavIcon("potato-gulf"),
      },
    ],
  };
}

export function getServicesNavGroup(): NavGroup {
  return {
    id: "services",
    label: "Services",
    href: "/services",
    icon: "settings-sliders",
    children: serviceLinks,
  };
}

export function getResourcesNavGroup(): NavGroup {
  return {
    id: "resources",
    label: "Resources",
    href: "/blog",
    icon: "book-bookmark",
    children: resourceLinks,
  };
}

export const contactPhone = "+880 1400893882";
export const contactEmail = "info@khi.com.bd";
