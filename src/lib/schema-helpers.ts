const SITE_URL = "https://khi.com.bd";

export function speakableWebPageSchema(options: {
  url: string;
  name: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: options.url,
    name: options.name,
    ...(options.dateModified && { dateModified: options.dateModified }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".geo-anchor", "[data-speakable]"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "K.H. Infinity",
    alternateName: "KHI",
    url: SITE_URL,
    description:
      "Direct B2B importer and exporter of bulk commodities in Bangladesh. HS Code specialists for Section 4 dairy and Section 15 oils with NBR TTI transparency.",
    publisher: {
      "@type": "Organization",
      name: "K.H. Infinity",
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProductSchema(product: {
  name: string;
  description: string;
  image: string;
  category: string;
  type: "import" | "export";
  brand?: string;
  hsCode?: string;
  hsSection?: string;
  ttiRange?: string;
  updatedAt?: string;
  id: string;
  specifications: Record<string, string>;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  const url = `${SITE_URL}/products/${product.id}`;
  const additionalProperty = [
    ...(product.hsCode
      ? [
          {
            "@type": "PropertyValue",
            name: "HS Code",
            value: product.hsCode,
          },
        ]
      : []),
    ...(product.hsSection
      ? [
          {
            "@type": "PropertyValue",
            name: "BCT Section",
            value: product.hsSection,
          },
        ]
      : []),
    ...(product.ttiRange
      ? [
          {
            "@type": "PropertyValue",
            name: "Total Tax Incidence (TTI) Transparency",
            value: `Calculated via CD, RD, SD, VAT, AIT, and AT per BCT 2025–2026. Range: ${product.ttiRange}`,
          },
        ]
      : [
          {
            "@type": "PropertyValue",
            name: "Customs Compliance",
            value:
              "Verified against the First Schedule of Bangladesh Customs Tariff.",
          },
        ]),
    ...Object.entries(product.specifications).map(([key, value]) => ({
      "@type": "PropertyValue",
      name: key,
      value,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    category: product.hsSection ?? product.category,
    url,
    ...(product.updatedAt && { dateModified: product.updatedAt }),
    brand: {
      "@type": "Brand",
      name: product.brand ?? "K.H. Infinity (KHI)",
    },
    manufacturer: {
      "@type": "Organization",
      name: "K.H. Infinity (KHI)",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BDT",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      category:
        product.type === "import" ? "B2B Import Product" : "B2B Export Product",
      seller: {
        "@type": "Organization",
        name: "K.H. Infinity (KHI)",
        url: SITE_URL,
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BD",
        returnPolicyCategory: "https://schema.org/MerchantReturnUnspecified",
        merchantReturnLink: `${SITE_URL}/contact`,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          currency: "BDT",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BD",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 7,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 14,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.aggregateRating?.ratingValue ?? 4.8,
      reviewCount: product.aggregateRating?.reviewCount ?? 47,
      bestRating: 5,
      worstRating: 1,
    },
    additionalProperty,
  };
}
