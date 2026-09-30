"use client";

import { usePathname } from "next/navigation";

// Pages that render their own header/footer (the v3 homepage). Matched exactly —
// "/" is a prefix of every path, so prefix matching would hide chrome site-wide.
const BARE_ROUTES = new Set(["/"]);

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return pathname && BARE_ROUTES.has(pathname) ? null : <>{children}</>;
}
