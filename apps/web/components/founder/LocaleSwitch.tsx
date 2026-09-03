"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import type { Locale } from "@/content/founder-site";

export default function LocaleSwitch({
  locale,
  className,
  ariaLabel,
  children,
}: {
  locale: Locale;
  className?: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  const pathname = usePathname() || `/${locale}`;
  const targetLocale: Locale = locale === "fa" ? "en" : "fa";
  const segments = pathname.split("/");

  if (segments[1] === "fa" || segments[1] === "en") {
    segments[1] = targetLocale;
  } else {
    segments.splice(1, 0, targetLocale);
  }

  const localizedPath = segments.join("/") || `/${targetLocale}`;

  const preserveQuery = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.location.search) return;
    event.preventDefault();
    window.location.assign(`${localizedPath}${window.location.search}`);
  };

  return (
    <Link
      href={localizedPath}
      className={className}
      aria-label={ariaLabel}
      hrefLang={targetLocale === "fa" ? "fa-IR" : "en-US"}
      onClick={preserveQuery}
    >
      {children}
    </Link>
  );
}
