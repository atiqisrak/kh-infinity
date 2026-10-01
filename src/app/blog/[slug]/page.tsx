import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import { ArrowLink } from "@/components/v3/ui";

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

  const allPosts = getBlogPosts();
  const related = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <V3Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <PageHero
        crumbs={[{ label: "Insights", href: "/blog" }, { label: post.title }]}
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
