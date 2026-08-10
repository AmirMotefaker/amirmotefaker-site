(() => {
    const root = document.documentElement;
    const storageKey = "amirmotefaker-theme";
    const button = document.querySelector("[data-theme-toggle]");

    const storedTheme = window.localStorage.getItem(storageKey);
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    const initialTheme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : preferredTheme;

    const applyTheme = (theme) => {
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        if (button) {
            button.setAttribute("aria-pressed", String(theme === "light"));
            button.setAttribute(
                "aria-label",
                theme === "light" ? "فعال‌کردن حالت تیره" : "فعال‌کردن حالت روشن"
            );
        }
    };

    applyTheme(initialTheme);

    if (button) {
        button.addEventListener("click", () => {
            const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
            window.localStorage.setItem(storageKey, nextTheme);
            applyTheme(nextTheme);
        });
    }
})();
