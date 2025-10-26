import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getBlogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Trade Insights & News - K.H. Infinity Blog",
  description:
    "Stay updated with the latest insights on international trade, import-export trends, and industry news. Expert articles on global trade, shipping, and regulations.",
  keywords:
    "trade insights, import export blog, international trade news, shipping updates, trade regulations, Bangladesh trade, K.H. Infinity blog",
  openGraph: {
    title: "Trade Insights & News - K.H. Infinity Blog",
    description:
      "Stay updated with the latest insights on international trade, import-export trends, and industry news. Expert articles on global trade, shipping, and regulations.",
    images: ["/images/blog/blog-cover.jpg"],
    url: "https://khi.com.bd/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Insights & News - K.H. Infinity Blog",
    description:
      "Stay updated with the latest insights on international trade, import-export trends, and industry news. Expert articles on global trade, shipping, and regulations.",
    images: ["/images/blog/blog-cover.jpg"],
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getBlogCategories();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-orange-50 via-orange-100 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Trade Insights & News
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Stay informed with the latest updates on international trade,
              industry trends, and expert insights from K.H. Infinity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Article
            </h2>
            <div className="max-w-6xl mx-auto">
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-full">
                    <img
                      src={posts[0].image}
                      alt={posts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-white text-sm">
                        {new Date(posts[0].date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="text-orange-500 font-semibold">
                      {posts[0].category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">
                      <Link
                        href={`/blog/${posts[0].id}`}
                        className="text-gray-800 hover:text-orange-500 transition-colors"
                      >
                        {posts[0].title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={posts[0].author.image}
                          alt={posts[0].author.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-semibold">
                            {posts[0].author.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {posts[0].author.role}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${posts[0].id}`}
                        className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2"
                      >
                        Read more
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => {
              const categoryPosts = posts.filter(
                (post) => post.category === category.name
              );
              return (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.id}`}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                      <i
                        className={`fas fa-${category.icon} text-orange-500 text-xl group-hover:scale-110 transition-transform`}
                      ></i>
                    </div>
                    <h3 className="font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {categoryPosts.length} article
                      {categoryPosts.length === 1 ? "" : "s"}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {posts.length > 1 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => {
                const date = new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span className="text-white text-sm">{date}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-orange-500 text-sm font-semibold">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-3 line-clamp-2">
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-gray-800 hover:text-orange-500 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <img
                          src={post.author.image}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div className="text-sm">
                          <p className="font-semibold">{post.author.name}</p>
                          <p className="text-gray-500">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on international
            trade and industry updates.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-orange-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
