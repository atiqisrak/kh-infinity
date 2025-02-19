// Function to load HTML components
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;

    // Replace theme color classes based on the current page
    const pageTheme = document.body.dataset.theme || "orange";
    const component = document.getElementById(elementId);

    component.innerHTML = component.innerHTML
      .replace(/text-theme/g, `text-${pageTheme}-500`)
      .replace(/hover:text-theme/g, `hover:text-${pageTheme}-500`)
      .replace(/bg-theme/g, `bg-${pageTheme}-500`)
      .replace(/hover:bg-theme/g, `hover:bg-${pageTheme}-500`)
      .replace(/hover:text-theme-dark/g, `hover:text-${pageTheme}-600`)
      .replace(/bg-theme-dark/g, `bg-${pageTheme}-600`);

    // Initialize mobile menu if loading header
    if (elementId === "header") {
      initializeMobileMenu();
    }
  } catch (error) {
    console.error(`Error loading component ${componentPath}:`, error);
  }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenuButton.innerHTML = `
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        `;
      } else {
        mobileMenu.classList.add("translate-x-full");
        mobileMenuButton.innerHTML = `
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        `;
      }
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.getElementsByTagName("a");
    Array.from(mobileMenuLinks).forEach((link) => {
      link.addEventListener("click", () => {
        isMenuOpen = false;
        mobileMenu.classList.add("translate-x-full");
        mobileMenuButton.innerHTML = `
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        `;
      });
    });
  }
}

// Function to initialize product page
function initializeProductPage() {
  const path = window.location.pathname;
  const productId = path.split("/").pop().replace(".html", "");

  if (productId && window.productsData && window.renderRelatedProducts) {
    // Add related products section before footer
    const footer = document.getElementById("footer");
    if (footer) {
      const relatedProductsSection = window.renderRelatedProducts(productId);
      footer.parentNode.insertBefore(relatedProductsSection, footer);
    }
  }
}

// Load header and footer when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/components/header.html");
  loadComponent("footer", "/components/footer.html").then(() => {
    // Initialize product page after footer is loaded
    initializeProductPage();
  });
});
