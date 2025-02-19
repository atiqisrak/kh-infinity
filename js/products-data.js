const productsData = {
  "milk-powder": {
    id: "milk-powder",
    name: "Skimmed Milk Powder",
    shortName: "Milk Powder",
    description: "Premium quality dairy product",
    theme: "blue",
    image: "milk-powder.webp",
    category: "dairy",
    type: "import",
  },
  "sunflower-oil": {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    shortName: "Sunflower Oil",
    description: "Premium quality cooking oil",
    theme: "yellow",
    image: "sunflower-oil.webp",
    category: "oils",
    type: "import",
  },
  "soyabean-oil": {
    id: "soyabean-oil",
    name: "Soyabean Oil",
    shortName: "Soyabean Oil",
    description: "Pure cooking oil",
    theme: "yellow",
    image: "soyabean-oil.webp",
    category: "oils",
    type: "import",
  },
  sugar: {
    id: "sugar",
    name: "Premium Sugar",
    shortName: "Sugar",
    description: "Pure refined sugar",
    theme: "sky",
    image: "sugar.webp",
    category: "sweeteners",
    type: "import",
  },
  pulses: {
    id: "pulses",
    name: "Premium Pulses",
    shortName: "Pulses",
    description: "Premium quality pulses",
    theme: "amber",
    image: "pulses.webp",
    category: "grains",
    type: "import",
  },
  chickpeas: {
    id: "chickpeas",
    name: "Premium Chickpeas",
    shortName: "Chickpeas",
    description: "Premium quality chickpeas",
    theme: "stone",
    image: "chick-pea.webp",
    category: "grains",
    type: "import",
  },
  cumin: {
    id: "cumin",
    name: "Premium Cumin",
    shortName: "Cumin",
    description: "Premium quality spices",
    theme: "orange",
    image: "cumin.webp",
    category: "spices",
    type: "import",
  },
  potato: {
    id: "potato",
    name: "Fresh Potatoes",
    shortName: "Potatoes",
    description: "Farm fresh potatoes",
    theme: "green",
    image: "potato.webp",
    category: "vegetables",
    type: "export",
  },
  tarpaulin: {
    id: "tarpaulin",
    name: "Industrial Tarpaulin",
    shortName: "Tarpaulin",
    description: "Heavy-duty protection",
    theme: "slate",
    image: "tarpaulin.webp",
    category: "industrial",
    type: "import",
  },
  handicrafts: {
    id: "handicrafts",
    name: "Traditional Handicrafts",
    shortName: "Handicrafts",
    description: "Artisanal crafts",
    theme: "orange",
    image: "handicrafts.webp",
    category: "crafts",
    type: "export",
  },
};

// Function to get related products
function getRelatedProducts(currentProductId, limit = 4) {
  const currentProduct = productsData[currentProductId];
  if (!currentProduct) return [];

  // First get products in same category
  let related = Object.values(productsData).filter(
    (product) =>
      product.id !== currentProductId &&
      (product.category === currentProduct.category ||
        product.type === currentProduct.type)
  );

  // If we need more products, add others
  if (related.length < limit) {
    const others = Object.values(productsData).filter(
      (product) =>
        product.id !== currentProductId &&
        !related.find((p) => p.id === product.id)
    );
    related = [...related, ...others];
  }

  // Return only the requested number of products
  return related.slice(0, limit);
}

// Function to render related products section
function renderRelatedProducts(currentProductId) {
  const relatedProducts = getRelatedProducts(currentProductId);
  const container = document.createElement("section");
  container.className = "py-20 bg-white";

  container.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <span class="text-theme font-medium tracking-wider uppercase text-sm block mb-2">Discover More</span>
        <h2 class="text-3xl font-bold text-gray-800">Related Products</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        ${relatedProducts
          .map(
            (product) => `
          <a href="/products/${product.id}.html" class="group">
            <div class="bg-${
              product.theme
            }-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div class="aspect-square relative overflow-hidden">
                <img
                  src="../images/products/${product.image}"
                  alt="${product.name}"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-${
                  product.type === "export" ? "green" : "orange"
                }-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  ${product.type === "export" ? "Export" : "Import"}
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-2">${
                  product.shortName
                }</h3>
                <p class="text-sm text-gray-600">${product.description}</p>
              </div>
            </div>
          </a>
        `
          )
          .join("")}
      </div>
      <div class="text-center mt-12">
        <a
          href="/products.html"
          class="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors group"
        >
          View All Products
          <svg
            class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  `;

  return container;
}

// Export for use in other files
window.productsData = productsData;
window.getRelatedProducts = getRelatedProducts;
window.renderRelatedProducts = renderRelatedProducts;
