(() => {
  "use strict";

  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector("#primary-navigation");
  const storageKey = "amirmotefaker-theme";

  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  }

  themeButton?.addEventListener("click", () => {
    const computedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = root.dataset.theme;
    const currentlyDark =
      currentTheme === "dark" ||
      (currentTheme === "auto" && computedDark);

    const nextTheme = currentlyDark ? "light" : "dark";

    root.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
  });

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navigation?.setAttribute("data-open", String(!open));
  });

  navigation?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton?.setAttribute("aria-expanded", "false");
      navigation.setAttribute("data-open", "false");
    }
  });
})();
