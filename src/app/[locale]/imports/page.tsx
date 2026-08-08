import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import PageHero from "@/components/PageHero";
import { getLocalizedProductsByType } from "@/lib/localized-products";
import { breadcrumbSchema } from "@/lib/schema-helpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productsImports" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://khi.com.bd/${locale}/imports`,
      languages: {
        en: "https://khi.com.bd/en/imports",
        bn: "https://khi.com.bd/bn/imports",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      url: `https://khi.com.bd/${locale}/imports`,
      siteName: "K.H. Infinity",
      type: "website",
      images: ["/images/hubs/imports-hero.webp"],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/hubs/imports-hero.webp"],
    },
  };
}

export default async function ImportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("productsImports");
  const importProducts = getLocalizedProductsByType("import", locale as Locale);

  const schema = breadcrumbSchema([
    { name: t("breadcrumbHome"), url: `https://khi.com.bd/${locale}` },
    { name: t("breadcrumbTitle"), url: `https://khi.com.bd/${locale}/imports` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        image="/images/hubs/imports-hero.webp"
        imageAlt="Colourful shipping containers stacked at a port, representing bulk import logistics"
        eyebrow={t("eyebrow")}
        eyebrowClassName="text-green-300"
        title={t("heroTitle")}
      >
        <p className="mb-4 geo-anchor" data-speakable>
          {t("heroIntro")}
        </p>
        <Link
          href="/services/customs"
          className="inline-flex font-semibold text-green-300 hover:text-green-200"
        >
          {t("customsLink")}
        </Link>
      </PageHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {t("catalogueHeading")}
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
                  <h3 className="text-xl font-bold text-gray-800 mt-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
