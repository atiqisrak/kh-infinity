import { Metadata } from "next";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import { ArrowLink, pad } from "@/components/v3/ui";

export const metadata: Metadata = {
  title: "Trade Insights & News - K.H. Infinity Blog",
  description:
    "Stay updated with the latest insights on international trade, import-export trends, and industry news. Expert articles on global trade, shipping, and regulations.",
  keywords:
    "trade insights, import export blog, international trade news, shipping updates, trade regulations, Bangladesh trade, K.H. Infinity blog",
  alternates: {
    canonical: "https://khi.com.bd/blog",
  },
  openGraph: {
    title: "Trade Insights & News - K.H. Infinity Blog",
    description:
      "Stay updated with the latest insights on international trade, import-export trends, and industry news. Expert articles on global trade, shipping, and regulations.",
    images: ["/images/blog/blog-cover.webp"],
    url: "https://khi.com.bd/blog",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Insights & News - K.H. Infinity Blog",
    description:
      "Stay updated with the latest insights on international trade, import-export trends, and industry news. Expert articles on global trade, shipping, and regulations.",
    images: ["/images/blog/blog-cover.webp"],
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <V3Shell>
      <PageHero
        crumbs={[{ label: "Insights", href: "/blog" }]}
        eyebrow="Trade insights"
        title={"News, trends &\nmarket intelligence"}
        lead="Stay informed with the latest updates on international trade, industry trends, and expert insights from K.H. Infinity."
      />

      <Section id="blog-posts" tone="paper" label="All articles">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured post — spans 2 cols on lg */}
          {featured && (
            <article className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 sm:col-span-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-[#fa6a25] px-3 py-1 text-xs font-semibold text-white">
                    {featured.category}
                  </span>
                  <time className="font-mono text-xs text-[#06131d]/50">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[#0b2c3d] sm:text-2xl">
                  {featured.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-[#06131d]/70">
                  {featured.excerpt}
                </p>
                <div className="mt-5">
                  <ArrowLink href={`/blog/${featured.id}`} dark>
                    Read article
                  </ArrowLink>
                </div>
              </div>
            </article>
          )}

          {/* Remaining posts */}
          {rest.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-[#06131d] px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                  <time className="font-mono text-xs text-[#06131d]/50">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[#0b2c3d]">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-[#06131d]/70">
                  {post.excerpt}
                </p>
                <div className="mt-5">
                  <ArrowLink href={`/blog/${post.id}`} dark>
                    Read article
                  </ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        image="/images/v3/blog-cta.webp"
        imageAlt="Container ship sailing open sea"
        title={
          <>
            Stay ahead of{" "}
            <span className="text-[#fa6a25]">the market</span>
          </>
        }
        body="Our trade specialists track global shipping lanes, customs regulations, and sourcing markets so you can make faster, better decisions."
        cta={{ label: "Talk to us", href: "/contact" }}
      />
    </V3Shell>
  );
}
