import { Metadata } from "next";
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

  return {
    title: `${product.brand ? product.brand + " " : ""}${
      product.name
    } - K.H. Infinity | Premium ${
      product.type === "import" ? "Import" : "Export"
    } Product`,
    description: product.description,
    keywords: `${product.name}, ${product.type} product, ${product.category}, K.H. Infinity, Bangladesh trade`,
    openGraph: {
      title: `${product.brand ? product.brand + " " : ""}${
        product.name
      } - K.H. Infinity`,
      description: product.description,
      images: [product.image],
      url: `https://khi.com.bd/products/${product.id}`,
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

  return (
    <div>
      <ProductHero
        product={product}
        textColor={textColor}
        textColorStrong={textColorStrong}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        borderColor={borderColor}
        primaryColor={primaryColor}
      />

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
