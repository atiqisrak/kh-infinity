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
  const t = await getTranslations({ locale, namespace: "productsExports" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://khi.com.bd/${locale}/exports`,
      languages: {
        en: "https://khi.com.bd/en/exports",
        bn: "https://khi.com.bd/bn/exports",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      url: `https://khi.com.bd/${locale}/exports`,
      siteName: "K.H. Infinity",
      type: "website",
      images: ["/images/hubs/exports-hero.webp"],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/hubs/exports-hero.webp"],
    },
  };
}

export default async function ExportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("productsExports");
  const exportProducts = getLocalizedProductsByType("export", locale as Locale);

  const schema = breadcrumbSchema([
    { name: t("breadcrumbHome"), url: `https://khi.com.bd/${locale}` },
    { name: t("breadcrumbTitle"), url: `https://khi.com.bd/${locale}/exports` },
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
        eyebrow={t("eyebrow")}
        eyebrowClassName="text-orange-300"
        title={t("heroTitle")}
      >
        <p className="mb-4 geo-anchor" data-speakable>
          {t("heroIntro")}
        </p>
        <Link
          href="/products/potato-gulf"
          className="inline-flex font-semibold text-orange-300 hover:text-orange-200"
        >
          {t("potatoGulfLink")}
        </Link>
      </PageHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {t("catalogueHeading")}
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
              {t("gulfProgrammeHeading")}
            </h3>
            <p className="text-gray-600 mb-4 max-w-3xl">{t("gulfProgrammeText")}</p>
            <Link
              href="/products/potato-gulf"
              className="inline-flex items-center font-semibold text-orange-600 hover:text-orange-700"
            >
              {t("gulfProgrammeLink")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
