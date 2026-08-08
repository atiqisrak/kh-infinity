import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getProductsByType } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema-helpers";

export const metadata: Metadata = {
  title: "Export Operations | Premium Bangladesh Exports | K.H. Infinity",
  description:
    "Direct B2B export operations from K.H. Infinity: premium potatoes, Gulf-market potato programmes, and Bangladeshi handicrafts with full export documentation.",
  alternates: { canonical: "https://khi.com.bd/exports" },
  openGraph: {
    title: "Export Operations | K.H. Infinity",
    url: "https://khi.com.bd/exports",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/hubs/exports-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hubs/exports-hero.webp"],
  },
};

export default function ExportsPage() {
  const exportProducts = getProductsByType("export");

  const schema = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Export Operations", url: "https://khi.com.bd/exports" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        image="/images/hubs/exports-hero.webp"
        imageAlt="Premium Bangladesh potatoes prepared for Gulf export shipment"
        eyebrow="Direct B2B Exporter"
        eyebrowClassName="text-orange-300"
        title="Export Operations"
      >
        <p className="mb-4 geo-anchor" data-speakable>
          K.H. Infinity manages direct export of premium Bangladeshi commodities
          to Gulf, GCC, and global markets. Formalized, contract-backed export
          programmes replace informal Khatunganj trust-only trading with SPS
          documentation and temperature-controlled logistics.
        </p>
        <Link
          href="/products/potato-gulf"
          className="inline-flex font-semibold text-orange-300 hover:text-orange-200"
        >
          Potato export (Gulf) specialty hub →
        </Link>
      </PageHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Export product catalogue
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {exportProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-600 font-medium uppercase">
                    {product.hsSection ?? product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Gulf potato export programme
            </h3>
            <p className="text-gray-600 mb-4 max-w-3xl">
              Our dedicated potato export hub covers Gulf retail specifications,
              tarpaulin protection, grading, and full export documentation for GCC
              buyers.
            </p>
            <Link
              href="/products/potato-gulf"
              className="inline-flex items-center font-semibold text-orange-600 hover:text-orange-700"
            >
              View potato export (Gulf) hub →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
