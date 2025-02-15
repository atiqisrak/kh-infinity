// Hero Slideshow
function initSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideDuration = 12000; // 6 seconds per slide

  function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove("active");

    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to new slide
    slides[currentSlide].classList.add("active");
  }

  // Start the slideshow
  setInterval(nextSlide, slideDuration);
}

// Initialize slideshow on page load
document.addEventListener("DOMContentLoaded", function () {
  initSlideshow();
  animateOnScroll();
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.backgroundColor = "var(--white)";
    header.style.boxShadow = "none";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after clicking a link
      document.querySelector(".nav-links").classList.remove("active");
      document.querySelector(".mobile-menu-btn").classList.remove("active");
    }
  });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Add animation on scroll
const animateOnScroll = function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      element.classList.add("animated");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", function () {
  animateOnScroll();
});

// Contact form handling
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);

    // Clear form
    contactForm.reset();

    // Show success message
    alert("Thank you for your message. We will get back to you soon!");
  });
}

// Initialize Google Maps
function initMap() {
  // Replace these coordinates with your actual office location
  const officeLocation = { lat: 23.8103, lng: 90.4125 }; // Dhaka coordinates

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: officeLocation,
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#7c93a3" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }],
      },
      // Add more custom styles as needed
    ],
  });

  // Add a marker for the office location
  const marker = new google.maps.Marker({
    position: officeLocation,
    map: map,
    title: "K.H. Infinity Office",
  });

  // Add an info window
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="padding: 10px;">
        <h3 style="margin: 0 0 5px; font-weight: bold;">K.H. Infinity</h3>
        <p style="margin: 0;">123 Business District, Dhaka, Bangladesh</p>
      </div>
    `,
  });

  // Show info window when marker is clicked
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

// Hero Slider
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slider .slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
}

// Animate Statistics on Scroll
function initStatisticsAnimation() {
  const stats = document.querySelectorAll(".counter");
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  }

  function checkVisibility() {
    animateElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8;

      if (isVisible && !element.classList.contains("visible")) {
        element.classList.add("visible");
        const counter = element.querySelector(".counter");
        if (counter) {
          animateCounter(counter);
        }
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initStatisticsAnimation();
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
