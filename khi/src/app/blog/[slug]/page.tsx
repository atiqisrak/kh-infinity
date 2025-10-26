import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

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

  return {
    title: `${post.title} - K.H. Infinity Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      url: `https://khi.com.bd/blog/${post.id}`,
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-orange-500 font-semibold mb-4 block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {post.author.name}
                </p>
                <p className="text-gray-600 text-sm">{post.author.role}</p>
                <p className="text-gray-500 text-sm">{date}</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-lg max-w-none"
            style={{
              color: "#374151",
            }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-start gap-6">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">{post.author.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">
                  {post.author.role}
                </p>
                <p className="text-gray-600">
                  Expert insights and analysis from our team of international
                  trade specialists.
                </p>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <h4 className="text-xl font-bold mb-4">Share this article</h4>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `https://khi.com.bd/blog/${post.id}`
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <i className="fab fa-twitter mr-2"></i>
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://khi.com.bd/blog/${post.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <i className="fab fa-facebook mr-2"></i>
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://khi.com.bd/blog/${post.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fab fa-linkedin mr-2"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
