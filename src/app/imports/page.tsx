import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProductsByType } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema-helpers";

export const metadata: Metadata = {
  title: "Import Operations | Bulk Commodity Imports | K.H. Infinity",
  description:
    "Direct B2B import operations from K.H. Infinity: sunflower oil, skimmed milk powder, sugar, pulses, tree nuts, and condiments with NBR TTI transparency and BSTI compliance.",
  alternates: { canonical: "https://khi.com.bd/imports" },
  openGraph: {
    title: "Import Operations | K.H. Infinity",
    url: "https://khi.com.bd/imports",
    siteName: "K.H. Infinity",
    type: "website",
  },
};

export default function ImportsPage() {
  const importProducts = getProductsByType("import");

  const schema = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Import Operations", url: "https://khi.com.bd/imports" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <p className="text-green-600 font-semibold uppercase text-sm mb-2">
            Direct B2B Importer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Import Operations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-4 geo-anchor" data-speakable>
            K.H. Infinity is the direct wholesale importer of bulk commodities in
            Bangladesh. We own physical inventory—not facilitate trades—and manage
            NBR customs clearance, TTI transparency, and BSTI compliance as internal
            capabilities from our Tikatuli, Dhaka hub.
          </p>
          <Link
            href="/services/customs"
            className="text-green-600 font-semibold hover:text-green-700"
          >
            Customs clearance &amp; TTI support →
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Import product catalogue
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importProducts.map((product) => (
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
                  <span className="text-xs text-green-600 font-medium uppercase">
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
        </div>
      </section>
    </div>
  );
}
