(() => {
    const button = document.querySelector("[data-navigation-toggle]");
    const navigation = document.querySelector("[data-primary-navigation]");

    if (!button || !navigation) {
        return;
    }

    button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        navigation.hidden = expanded;
    });
})();
