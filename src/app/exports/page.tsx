import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <section className="pt-28 pb-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <p className="text-orange-600 font-semibold uppercase text-sm mb-2">
            Direct B2B Exporter
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Export Operations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-4 geo-anchor" data-speakable>
            K.H. Infinity manages direct export of premium Bangladeshi commodities
            to Gulf, GCC, and global markets. Formalized, contract-backed export
            programmes replace informal Khatunganj trust-only trading with SPS
            documentation and temperature-controlled logistics.
          </p>
          <Link
            href="/products/potato-gulf"
            className="text-orange-600 font-semibold hover:text-orange-700"
          >
            Potato export (Gulf) specialty hub →
          </Link>
        </div>
      </section>

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
                  <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                    {product.name}
                  </h3>
                  {product.hsCode && (
                    <p className="text-sm text-gray-500 mb-2">
                      HS {product.hsCode}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Gulf &amp; GCC potato export programme
            </h3>
            <p className="text-gray-600 mb-4">
              Dedicated landing page for Gulf buyers: grading, mesh and jute
              packing, documentation, and buyer FAQs.
            </p>
            <Link
              href="/products/potato-gulf"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-semibold"
            >
              Open potato export (Gulf) hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
