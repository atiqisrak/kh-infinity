import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./web-vitals";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteChrome from "@/components/SiteChrome";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const isProduction = process.env.NODE_ENV === "production";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title:
    "K.H. Infinity | Direct B2B Importer & Exporter — Bangladesh",
  description:
    "K.H. Infinity is a direct B2B importer and wholesale distributor in Bangladesh. We own inventory — sunflower oil, milk powder, sugar, pulses, almonds, dates — and handle NBR customs clearance and TTI transparency in-house.",
  keywords:
    "K.H. Infinity, KHI, import export Bangladesh, B2B importer Bangladesh, sunflower oil importer Bangladesh, skimmed milk powder Bangladesh, potato export Gulf, sugar importer Bangladesh, pulses Bangladesh, almonds importer Bangladesh, medjool dates Bangladesh, chickpeas Bangladesh, cumin importer Bangladesh, customs clearance Bangladesh, TTI Bangladesh, BSTI compliance, bulk commodity importer Dhaka, Khatunganj trade",
  authors: [{ name: "K.H. Infinity" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://khi.com.bd/",
  },
  metadataBase: new URL("https://khi.com.bd"),
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://khi.com.bd/",
    siteName: "K.H. Infinity",
    title:
      "K.H. Infinity | Direct B2B Importer & Exporter — Bangladesh",
    description:
      "K.H. Infinity is a direct B2B importer and wholesale distributor in Bangladesh. We own inventory — sunflower oil, milk powder, sugar, pulses, almonds, dates — and handle NBR customs clearance and TTI transparency in-house.",
    images: ["https://khi.com.bd/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "K.H. Infinity | Direct B2B Importer & Exporter — Bangladesh",
    description:
      "Direct B2B importer in Bangladesh: owned inventory, in-house NBR customs clearance, TTI transparency, and BSTI compliance. Sunflower oil, milk powder, sugar, pulses, potato exports to Gulf.",
    images: ["https://khi.com.bd/images/cover/kh1.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="font-sans bg-gray-50"
      data-theme="gray"
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdn-uicons.flaticon.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "K.H. Infinity",
              alternateName: "KHI",
              url: "https://khi.com.bd",
              logo: {
                "@type": "ImageObject",
                url: "https://khi.com.bd/images/logo.png",
                width: 200,
                height: 60,
              },
              description:
                "K.H. Infinity is a direct B2B importer and wholesale distributor in Bangladesh. We own physical inventory for bulk commodities and manage NBR customs clearance, TTI transparency, and BSTI compliance in-house from Dhaka's Tikatuli trade district.",
              foundingDate: "2018",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Kader Tropical Height, Shop-G5, 10 Hatkhola Road, Tikatuli, Wari",
                addressLocality: "Dhaka",
                postalCode: "1203",
                addressCountry: "BD",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+880 1577081856",
                  contactType: "customer service",
                  email: "info@khi.com.bd",
                  availableLanguage: ["en", "bn"],
                },
              ],
              sameAs: [
                "https://facebook.com/khinfinity",
                "https://linkedin.com/company/khinfinity",
                "https://instagram.com/khinfinity",
              ],
              areaServed: [
                { "@type": "Country", name: "Bangladesh" },
                { "@type": "Place", name: "Gulf Cooperation Council" },
                { "@type": "Place", name: "Global" },
              ],
              knowsAbout: [
                "Import-export trade",
                "Bangladesh NBR customs clearance",
                "Total Tax Incidence (TTI)",
                "BSTI compliance",
                "HS Code classification",
                "Bulk commodity trading",
                "Sunflower oil import",
                "Skimmed milk powder",
                "Potato export Gulf",
                "Khatunganj wholesale market",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Bulk commodity import and export products",
                url: "https://khi.com.bd/products",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "K.H. Infinity",
              alternateName: "KHI",
              url: "https://khi.com.bd",
              description:
                "Direct B2B importer and exporter of bulk commodities in Bangladesh with NBR TTI transparency.",
              publisher: {
                "@type": "Organization",
                name: "K.H. Infinity",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://khi.com.bd/products?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <SiteChrome>
          <Header />
        </SiteChrome>
        {children}
        <SiteChrome>
          <Footer />
        </SiteChrome>
        <WhatsAppButton />
        {isProduction && <SpeedInsights />}
        {isProduction && <Analytics />}
      </body>
    </html>
  );
}
