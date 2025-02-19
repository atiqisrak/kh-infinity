document.addEventListener("DOMContentLoaded", () => {
  // Get post ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  // Find the post in blogData
  const post = blogData.posts.find((p) => p.id === postId);

  if (!post) {
    // Handle 404 - post not found
    document.getElementById("blog-post-content").innerHTML = `
            <div class="text-center py-20">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
                <p class="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
                <a href="/blog" class="text-orange-500 hover:text-orange-600">
                    ← Back to Blog
                </a>
            </div>
        `;
    return;
  }

  // Update meta tags
  document.title = `${post.title} - K.H. Infinity Blog`;
  document.getElementById("meta-description").content = post.excerpt;
  document.getElementById("og-title").content = post.title;
  document.getElementById("og-description").content = post.excerpt;
  document.getElementById("og-image").content = post.image;

  // Format date
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Render post content
  document.getElementById("blog-post-content").innerHTML = `
        <header class="mb-12">
            <img src="${post.image}" alt="${
    post.title
  }" class="w-full h-96 object-cover rounded-lg mb-8">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">${post.title}</h1>
            <div class="flex items-center text-gray-600">
                <span>${date}</span>
                <span class="mx-2">•</span>
                <span class="text-orange-500">${post.category}</span>
            </div>
        </header>
        <div class="prose prose-lg max-w-none">
            ${post.content}
        </div>
        <div class="mt-8 flex flex-wrap gap-2">
            ${post.tags
              .map(
                (tag) => `
                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    #${tag}
                </span>
            `
              )
              .join("")}
        </div>
    `;

  // Render author info
  document.getElementById("author-info").innerHTML = `
        <div class="flex items-center">
            <img src="${post.author.image}" alt="${post.author.name}" 
                class="w-16 h-16 rounded-full object-cover mr-6">
            <div>
                <h3 class="font-bold text-lg text-gray-800">${post.author.name}</h3>
                <p class="text-gray-600">${post.author.role}</p>
            </div>
        </div>
    `;

  // Setup social share buttons
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  document.getElementById("social-share").innerHTML = `
        <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}"
           target="_blank" rel="noopener noreferrer"
           class="text-blue-400 hover:text-blue-500">
            <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}"
           target="_blank" rel="noopener noreferrer"
           class="text-blue-700 hover:text-blue-800">
            <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}"
           target="_blank" rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-700">
            <i class="fab fa-facebook fa-lg"></i>
        </a>
    `;

  // Load related posts
  const relatedPosts = blogData.posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  document.getElementById("related-posts").innerHTML = relatedPosts
    .map(
      (relatedPost) => `
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${relatedPost.image}" alt="${relatedPost.title}" 
                class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">
                    <a href="/blog/${relatedPost.id}.html" 
                       class="text-gray-800 hover:text-orange-500 transition-colors">
                        ${relatedPost.title}
                    </a>
                </h3>
                <p class="text-gray-600 mb-4">${relatedPost.excerpt}</p>
                <div class="flex items-center text-sm text-gray-500">
                    <span>${new Date(relatedPost.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}</span>
                </div>
            </div>
        </article>
    `
    )
    .join("");
});
