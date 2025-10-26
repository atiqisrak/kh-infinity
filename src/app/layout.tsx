import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "K.H. Infinity | Global Trade Solutions - Import Export Company Bangladesh",
  description:
    "K.H. Infinity - Your trusted partner in global trade. We specialize in import-export of premium quality products including sunflower oil, milk powder, potatoes, and more from Bangladesh.",
  keywords:
    "K.H. Infinity, import export, global trade, Bangladesh, sunflower oil, milk powder, potatoes, trading company, international trade",
  authors: [{ name: "K.H. Infinity" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://khi.com.bd/",
  },
  openGraph: {
    type: "website",
    url: "https://khi.com.bd/",
    title:
      "K.H. Infinity | Global Trade Solutions - Import Export Company Bangladesh",
    description:
      "K.H. Infinity - Your trusted partner in global trade. We specialize in import-export of premium quality products including sunflower oil, milk powder, potatoes, and more from Bangladesh.",
    images: ["https://khi.com.bd/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "K.H. Infinity | Global Trade Solutions - Import Export Company Bangladesh",
    description:
      "K.H. Infinity - Your trusted partner in global trade. We specialize in import-export of premium quality products including sunflower oil, milk powder, potatoes, and more from Bangladesh.",
    images: ["https://khi.com.bd/images/cover/kh1.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans bg-gray-50" data-theme="gray">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "K.H. Infinity",
              url: "https://khi.com.bd",
              logo: "https://khi.com.bd/images/logo.png",
              description:
                "K.H. Infinity - Your trusted partner in global trade. We specialize in import-export of premium quality products.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari",
                addressLocality: "Dhaka",
                postalCode: "1203",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+880 1577081856",
                contactType: "customer service",
                email: "info@khi.com.bd",
              },
              sameAs: [
                "https://facebook.com/khinfinity",
                "https://linkedin.com/company/khinfinity",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
