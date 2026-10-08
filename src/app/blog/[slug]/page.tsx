import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPost, getBlogPosts, type BlogPost } from "@/lib/blog";
import { getProducts } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema-helpers";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import { ArrowLink } from "@/components/v3/ui";

/** Product pages a post links to, e.g. href="/products/phone-batteries" */
const linkedProductIds = (post: BlogPost) =>
  new Set([...post.content.matchAll(/href="\/products\/([a-z0-9-]+)"/g)].map((m) => m[1]));

/** Related posts: shared product links and tags first, then newest */
function relatedPosts(post: BlogPost, all: BlogPost[], count = 3) {
  const products = linkedProductIds(post);
  const tags = new Set(post.tags.map((t) => t.toLowerCase()));
  const score = (p: BlogPost) =>
    [...linkedProductIds(p)].filter((id) => products.has(id)).length * 3 +
    p.tags.filter((t) => tags.has(t.toLowerCase())).length +
    (p.category === post.category ? 1 : 0);
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, count)
    .map(({ p }) => p);
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const postUrl = `https://khi.com.bd/blog/${post.id}`;

  return {
    title: `${post.title} - K.H. Infinity Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      url: postUrl,
      siteName: "K.H. Infinity",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://khi.com.bd${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      image: `https://khi.com.bd${post.author.image}`,
    },
    publisher: {
      "@type": "Organization",
      name: "K.H. Infinity",
      logo: {
        "@type": "ImageObject",
        url: "https://khi.com.bd/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://khi.com.bd/blog/${post.id}`,
    },
  };

  const related = relatedPosts(post, getBlogPosts());
  const linked = linkedProductIds(post);
  const mentionedProducts = getProducts().filter((p) => linked.has(p.id));

  const crumbsSchema = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd" },
    { name: "Insights", url: "https://khi.com.bd/blog" },
    { name: post.title, url: `https://khi.com.bd/blog/${post.id}` },
  ]);
  const faqSchema = post.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <V3Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <PageHero
        crumbs={[{ label: "Insights", href: "/blog" }, { label: post.title, href: `/blog/${post.id}` }]}
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
        image={post.image}
        imageAlt={post.title}
        titleClassName="text-[clamp(2rem,4.8vw,4.5rem)]"
      />

      {/* Article body */}
      <Section id="post-content" tone="white" label="Article content">
        <div className="mx-auto max-w-3xl">
          {/* Author & date bar */}
          <div className="mb-10 flex items-center gap-4 border-b border-[#06131d]/10 pb-8">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-[#0b2c3d]">{post.author.name}</p>
              <p className="text-sm text-[#06131d]/60">{post.author.role}</p>
              <p className="font-mono text-xs text-[#06131d]/45">{date}</p>
            </div>
          </div>

          {/* Post content rendered as HTML */}
          <div
            className="prose prose-lg prose-headings:font-semibold prose-headings:text-[#0b2c3d] prose-p:text-[#06131d]/75 prose-li:text-[#06131d]/75 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Products covered in this guide */}
          {mentionedProducts.length > 0 && (
            <aside aria-labelledby="post-products" className="mt-12 rounded-3xl bg-[#06131d] p-6 text-white sm:p-8">
              <p id="post-products" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#fa6a25]">
                Products in this guide
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {mentionedProducts.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`/products/${p.id}`}
                      className="group flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white">
                        <Image src={p.image} alt="" fill sizes="48px" className="object-contain p-1" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold">{p.name}</span>
                        <span className="block font-mono text-[11px] text-white/50">
                          {p.hsCode ? `HS ${p.hsCode} · ` : ""}View product →
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="/quote" className="mt-5 inline-block text-sm font-semibold text-[#fa6a25] underline-offset-4 hover:underline">
                Request a landed-cost quote →
              </a>
            </aside>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-[#06131d]/10 pt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f2f4f6] px-3.5 py-1.5 text-sm font-medium text-[#0b2c3d]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Related articles */}
      {related.length > 0 && (
        <Section
          id="related-articles"
          tone="paper"
          eyebrow="Keep reading"
          title="Related articles"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-[#06131d] px-3 py-1 text-xs font-semibold text-white">
                      {p.category}
                    </span>
                    <time className="font-mono text-xs text-[#06131d]/50">
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[#0b2c3d]">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-[#06131d]/70">
                    {p.excerpt}
                  </p>
                  <div className="mt-5">
                    <ArrowLink href={`/blog/${p.id}`} dark>
                      Read article
                    </ArrowLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        image="/images/v3/road-and-sea.webp"
        imageAlt="Road leading to sea port"
        title={
          <>
            Ready to start your{" "}
            <span className="text-[#fa6a25]">next trade?</span>
          </>
        }
        body="Get a landed-cost quote for your import or export shipment within 24 hours."
        cta={{ label: "Request a quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
