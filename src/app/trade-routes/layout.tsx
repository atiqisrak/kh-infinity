import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Routes & Connections | K.H. Infinity",
  description:
    "Explore K.H. Infinity trade routes: import from China and the Middle East to Bangladesh, and export from Bangladesh to the Middle East.",
  keywords:
    "trade routes Bangladesh, import from China, import from Middle East, export to Middle East, K.H. Infinity",
  alternates: {
    canonical: "https://khi.com.bd/trade-routes",
  },
  openGraph: {
    title: "Trade Routes & Connections | K.H. Infinity",
    description:
      "Find the right import-export route for your business with K.H. Infinity.",
    url: "https://khi.com.bd/trade-routes",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/cover/kh3.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Routes & Connections | K.H. Infinity",
    description:
      "Find the right import-export route for your business with K.H. Infinity.",
    images: ["/images/cover/kh3.webp"],
  },
};

export default function TradeRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
