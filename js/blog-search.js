// Blog search and filtering functionality
class BlogSearch {
  constructor() {
    this.posts = blogData.posts;
    this.initializeSearch();
    this.initializeTagFilters();
  }

  initializeSearch() {
    const searchInput = document.getElementById("blog-search");
    const searchResults = document.getElementById("search-results");
    let debounceTimer;

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const query = e.target.value.toLowerCase();
          if (query.length >= 2) {
            const results = this.searchPosts(query);
            this.displaySearchResults(results, searchResults);
            searchResults.classList.remove("hidden");
          } else {
            searchResults.classList.add("hidden");
          }
        }, 300);
      });

      // Close search results when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !searchInput.contains(e.target) &&
          !searchResults.contains(e.target)
        ) {
          searchResults.classList.add("hidden");
        }
      });
    }
  }

  searchPosts(query) {
    return this.posts
      .filter((post) => {
        const searchableText = `${post.title} ${post.excerpt} ${post.content} ${
          post.category
        } ${post.tags.join(" ")}`.toLowerCase();
        return searchableText.includes(query);
      })
      .slice(0, 5); // Limit to 5 results
  }

  displaySearchResults(results, container) {
    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = `
        <div class="p-4 text-gray-600">
          No results found
        </div>
      `;
      return;
    }

    container.innerHTML = results
      .map(
        (post) => `
      <a href="/blog/${post.id}.html" class="block p-4 hover:bg-gray-50">
        <h3 class="font-semibold text-gray-800">${post.title}</h3>
        <p class="text-sm text-gray-600 mt-1">${post.excerpt.slice(
          0,
          100
        )}...</p>
        <div class="flex items-center mt-2">
          <span class="text-xs text-orange-500">${post.category}</span>
          <span class="mx-2 text-gray-300">•</span>
          <span class="text-xs text-gray-500">${new Date(
            post.date
          ).toLocaleDateString()}</span>
        </div>
      </a>
    `
      )
      .join('<div class="border-b"></div>');
  }

  initializeTagFilters() {
    const tagContainer = document.getElementById("tag-filters");
    if (!tagContainer) return;

    // Get unique tags from all posts
    const allTags = [...new Set(this.posts.flatMap((post) => post.tags))];

    // Create tag filters
    tagContainer.innerHTML = allTags
      .map(
        (tag) => `
      <button
        data-tag="${tag}"
        class="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors tag-filter"
      >
        ${tag}
      </button>
    `
      )
      .join("");

    // Add click handlers
    const tagButtons = document.querySelectorAll(".tag-filter");
    tagButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("bg-orange-500");
        button.classList.toggle("text-white");
        button.classList.toggle("border-orange-500");
        this.filterPostsByTags();
      });
    });
  }

  filterPostsByTags() {
    const selectedTags = Array.from(
      document.querySelectorAll(".tag-filter.bg-orange-500")
    ).map((button) => button.dataset.tag);

    const postsContainer = document.getElementById("latest-posts");
    if (!postsContainer) return;

    const filteredPosts =
      selectedTags.length > 0
        ? this.posts.filter((post) =>
            selectedTags.every((tag) => post.tags.includes(tag))
          )
        : this.posts;

    // Re-render posts with pagination
    const postsPerPage = 6;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    let currentPage = 0;

    function renderPosts(page) {
      const start = page * postsPerPage;
      const end = start + postsPerPage;

      postsContainer.innerHTML = filteredPosts
        .slice(start, end)
        .map((post) => renderPostCard(post))
        .join("");

      // Update pagination buttons
      document.getElementById("prev-posts").disabled = page === 0;
      document.getElementById("next-posts").disabled = page >= totalPages - 1;
    }

    renderPosts(0);

    // Update pagination handlers
    document.getElementById("prev-posts").onclick = () => {
      if (currentPage > 0) {
        currentPage--;
        renderPosts(currentPage);
      }
    };

    document.getElementById("next-posts").onclick = () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        renderPosts(currentPage);
      }
    };
  }
}

// Initialize search and filters when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new BlogSearch();
});
