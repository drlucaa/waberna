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
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkInitially =
    savedTheme === "dark" || (savedTheme === null && prefersDark);
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
});
