// Dark Mode Toggle
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });

// Search Functionality (placeholder)
document
  .querySelector(".search-bar button")
  .addEventListener("click", function () {
    const searchTerm = document.querySelector(".search-bar input").value;
    if (searchTerm.trim() !== "") {
      alert(
        `Searching for: ${searchTerm}\n(This is a demo - actual search would filter content)`
      );
    }
  });

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".nav") &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
    }
  });
});
