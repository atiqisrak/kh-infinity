"use client";

import { usePathname } from "next/navigation";

// Routes that render their own header/footer (design concepts, campaign pages).
const BARE_ROUTES = ["/landing-v2"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some((route) => pathname === route || pathname?.startsWith(`${route}/`));

  return isBare ? null : <>{children}</>;
}
