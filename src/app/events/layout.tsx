import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | K.H. Infinity",
  description:
    "Trade shows, conferences, and company events featuring K.H. Infinity in Bangladesh and internationally.",
  keywords:
    "K.H. Infinity events, trade shows Bangladesh, import export events, networking",
  alternates: {
    canonical: "https://khi.com.bd/events",
  },
  openGraph: {
    title: "Events | K.H. Infinity",
    description:
      "Trade shows, conferences, and company events featuring K.H. Infinity.",
    url: "https://khi.com.bd/events",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | K.H. Infinity",
    description:
      "Trade shows, conferences, and company events featuring K.H. Infinity.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
