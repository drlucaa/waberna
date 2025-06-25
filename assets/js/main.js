// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Dark Mode Toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // This function applies the theme and updates the icon/storage
  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("color-theme", isDark ? "dark" : "light");

    if (themeIcon) {
      // Set icon text: 'light_mode' (sun) for dark theme, 'dark_mode' (moon) for light theme
      themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    }
  };

  // Determine and apply the initial theme on page load
  const savedTheme = localStorage.getItem("color-theme");
  const isDarkInitially = savedTheme === "dark";
  applyTheme(isDarkInitially);

  // Add event listener to the button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      // Toggle the theme based on its current state
      const isCurrentlyDark =
        document.documentElement.classList.contains("dark");
      applyTheme(!isCurrentlyDark);
    });
  }

  // Function to get URL parameters
  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  // Services filter
  const filterPills = document.querySelectorAll(".filter-pill");
  const serviceCards = document.querySelectorAll(".service-card");

  if (filterPills.length > 0 && serviceCards.length > 0) {
    filterPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        if (pill.classList.contains("pill-active")) {
          return;
        }

        filterPills.forEach((p) => p.classList.remove("pill-active"));
        pill.classList.add("pill-active");

        const filter = pill.getAttribute("data-filter");

        serviceCards.forEach((card) => {
          if (
            filter === "all" ||
            card.getAttribute("data-category").includes(filter)
          ) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Check for category in URL and pre-filter
    const categoryParam = getUrlParameter("category");
    if (categoryParam) {
      const filterPill = document.querySelector(
        `.filter-pill[data-filter="${categoryParam}"]`,
      );
      if (filterPill) {
        filterPill.click();
      }
    }
  }
});
