import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade News & Updates | K.H. Infinity",
  description:
    "Industry and company news on international trade, import-export regulations, and K.H. Infinity updates.",
  keywords:
    "trade news Bangladesh, import export news, K.H. Infinity news, industry updates",
  alternates: {
    canonical: "https://khi.com.bd/news",
  },
  openGraph: {
    title: "Trade News & Updates | K.H. Infinity",
    description:
      "Industry and company news on international trade and K.H. Infinity.",
    url: "https://khi.com.bd/news",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade News & Updates | K.H. Infinity",
    description:
      "Industry and company news on international trade and K.H. Infinity.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
