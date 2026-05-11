import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts } from "@/lib/products";
import ProductHero from "@/components/products/ProductHero";
import ProductNutrition from "@/components/products/ProductNutrition";
import ProductDetails from "@/components/products/ProductDetails";
import ProductQuality from "@/components/products/ProductQuality";
import ProductQuote from "@/components/products/ProductQuote";
import RelatedProducts from "@/components/products/RelatedProducts";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const { products } = await import("@/lib/products");

  return products.map((product: any) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const productUrl = `https://khi.com.bd/products/${product.id}`;

  return {
    title: `${product.brand ? product.brand + " " : ""}${
      product.name
    } - K.H. Infinity | Premium ${
      product.type === "import" ? "Import" : "Export"
    } Product`,
    description: product.description,
    keywords: `${product.name}, ${product.type} product, ${product.category}, K.H. Infinity, Bangladesh trade`,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: `${product.brand ? product.brand + " " : ""}${
        product.name
      } - K.H. Infinity`,
      description: product.description,
      images: [product.image],
      url: productUrl,
      siteName: "K.H. Infinity",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.brand ? product.brand + " " : ""}${
        product.name
      } - K.H. Infinity`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const isImport = product.type === "import";

  // Color classes for proper Tailwind detection
  const primaryColor = isImport ? "green" : "orange";
  const textColor =
    primaryColor === "green" ? "text-green-600" : "text-orange-600";
  const textColorStrong =
    primaryColor === "green" ? "text-green-700" : "text-orange-700";
  const bgColor = primaryColor === "green" ? "bg-green-500" : "bg-orange-500";
  const bgColorHover =
    primaryColor === "green" ? "bg-green-600" : "bg-orange-600";
  const borderColor =
    primaryColor === "green" ? "border-green-500" : "border-orange-500";
  const iconColor =
    primaryColor === "green" ? "text-green-500" : "text-orange-500";
  const iconColorHover =
    primaryColor === "green" ? "text-green-600" : "text-orange-600";

  // Structured data for product
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://khi.com.bd${product.image}`,
    category: product.category,
    brand: product.brand
      ? {
          "@type": "Brand",
          name: product.brand,
        }
      : undefined,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      category: product.type === "import" ? "Import Product" : "Export Product",
    },
    additionalProperty: Object.entries(product.specifications).map(
      ([key, value]) => ({
        "@type": "PropertyValue",
        name: key,
        value: value,
      })
    ),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ProductHero
        product={product}
        textColor={textColor}
        textColorStrong={textColorStrong}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        borderColor={borderColor}
        primaryColor={primaryColor}
      />

      {slug === "potato" && (
        <section className="bg-orange-50 border-y border-orange-100">
          <div className="container mx-auto px-4 py-4 text-center text-gray-800">
            <span className="font-medium">Sourcing for Gulf &amp; GCC? </span>
            <Link
              href="/potato-export"
              className={`${textColorStrong} font-semibold underline-offset-2 hover:underline`}
            >
              Open the potato export hub
            </Link>
            <span className="text-gray-600">
              {" "}
              for logistics, documentation, and buyer FAQs.
            </span>
          </div>
        </section>
      )}

      <ProductNutrition product={product} iconColor={iconColor} />

      <ProductDetails
        product={product}
        iconColor={iconColor}
        iconColorHover={iconColorHover}
        isImport={isImport}
      />

      <ProductQuality product={product} iconColor={iconColor} />

      <ProductQuote
        primaryColor={primaryColor}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
      />

      <RelatedProducts
        relatedProducts={relatedProducts}
        textColor={textColor}
        iconColorHover={iconColorHover}
      />
    </div>
  );
}
