import Link from "next/link";

// Breadcrumb trail for v3 page heroes (sits on dark backgrounds).
export default function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#fa6a25]">/</span>}
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-white">
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
