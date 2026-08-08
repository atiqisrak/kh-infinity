import { Product } from "@/lib/products";

interface ProductTradeInfoProps {
  product: Product;
  iconColor: string;
  borderColor: string;
}

function formatUpdatedAt(dateString?: string) {
  if (!dateString) return undefined;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ProductTradeInfo({
  product,
  iconColor,
  borderColor,
}: ProductTradeInfoProps) {
  const stats: { label: string; value: string }[] = [];

  if (product.hsCode) {
    stats.push({ label: "HS Code", value: product.hsCode });
  }
  if (product.hsSection) {
    stats.push({ label: "Tariff Section", value: product.hsSection });
  }
  if (product.ttiRange) {
    stats.push({ label: "Total Tax Incidence", value: product.ttiRange });
  }
  stats.push({
    label: product.type === "import" ? "Sourced From" : "Origin",
    value: product.sourcing.countries.join(", "),
  });
  const updated = formatUpdatedAt(product.updatedAt);
  if (updated) {
    stats.push({ label: "Data Verified", value: updated });
  }

  if (stats.length === 0) return null;

  return (
    <section className="relative bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 py-6 md:py-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl bg-white border-t-2 ${borderColor} border-x border-b border-gray-100 px-4 py-3 md:py-4 shadow-sm`}
            >
              <span
                className={`${iconColor} text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-1 block`}
              >
                {stat.label}
              </span>
              <span className="text-sm md:text-base font-bold text-gray-800 leading-snug">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
