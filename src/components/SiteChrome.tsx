"use client";

import { usePathname } from "next/navigation";

// Routes that render the v3 shell (its own nav + footer), so the legacy
// header/footer step aside. Add a route here when its page moves to V3Shell.
// "/" is matched exactly: it is a prefix of every path.
const V3_EXACT = new Set(["/"]);
const V3_PREFIXES = ["/products"];
// Under a v3 prefix but not migrated yet: keep the legacy chrome
const LEGACY_EXCEPTIONS = new Set(["/products/potato-gulf"]);

export function isV3Route(pathname: string) {
  if (LEGACY_EXCEPTIONS.has(pathname)) return false;
  return V3_EXACT.has(pathname) || V3_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return pathname && isV3Route(pathname) ? null : <>{children}</>;
}
