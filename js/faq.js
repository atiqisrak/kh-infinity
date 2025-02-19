// Load and display FAQ content
async function loadFAQContent() {
  try {
    const response = await fetch("/js/data/faq.json");
    const data = await response.json();
    const faqContent = document.getElementById("faq-content");

    data.categories.forEach((category) => {
      const section = document.createElement("div");
      section.id = category.id;
      section.className = "mb-16";

      section.innerHTML = `
        <h2 class="text-3xl font-bold mb-8">${category.title}</h2>
        <div class="space-y-6">
          ${category.questions
            .map(
              (q) => `
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 class="text-xl font-bold mb-4">${q.question}</h3>
              <div class="text-gray-600">
                <p class="mb-2">${q.answer}</p>
                ${
                  q.list
                    ? `
                  <ul class="list-disc ml-6 mt-2">
                    ${q.list.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                `
                    : ""
                }
                ${q.note ? `<p class="mt-4 text-sm italic">${q.note}</p>` : ""}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;

      faqContent.appendChild(section);
    });

    // Add click handlers for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  } catch (error) {
    console.error("Error loading FAQ content:", error);
    document.getElementById("faq-content").innerHTML = `
      <div class="text-center text-gray-600">
        <p>Sorry, we couldn't load the FAQ content. Please try again later.</p>
      </div>
    `;
  }
}

// Load FAQ content when DOM is ready
document.addEventListener("DOMContentLoaded", loadFAQContent);
