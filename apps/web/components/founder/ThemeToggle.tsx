"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/content/founder-site";

type Theme = "light" | "dark";

const themeEvent = "am-theme-change";

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  const current = document.documentElement.dataset.theme;
  return current === "light" || current === "dark" ? current : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeEvent, onStoreChange);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeEvent, onStoreChange);
  };
}

export default function ThemeToggle({ locale = "en" }: { locale?: Locale }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function updateTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("am-theme", next);
    window.dispatchEvent(new Event(themeEvent));
  }

  const next = theme === "dark" ? "light" : "dark";
  const fa = locale === "fa";
  const label = theme === "dark" ? (fa ? "روشن" : "Light") : (fa ? "تیره" : "Dark");
  const ariaLabel = theme === "dark"
    ? (fa ? "تغییر به حالت روشن" : "Switch to light mode")
    : (fa ? "تغییر به حالت تیره" : "Switch to dark mode");

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => updateTheme(next)}
      aria-label={ariaLabel}
      title={label}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="theme-toggle-label">{label}</span>
    </button>
  );
}
