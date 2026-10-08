import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

// Breadcrumb trail for v3 page heroes (sits on dark backgrounds).
// Always starts at Home, and every step with an href is a link — including the
// current page, which is marked aria-current so it reads as "you are here".
export default function Crumbs({ items }: { items: Crumb[] }) {
  const trail = items[0]?.href === "/" ? items : [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#fa6a25]" aria-hidden="true">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={last ? "page" : undefined}
                  className={`underline-offset-4 transition-colors hover:text-white hover:underline ${last ? "text-white/80" : ""}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-white/80" : ""} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
