"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
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
  const [search, setSearch] = useState("");
  const targetLocale: Locale = locale === "fa" ? "en" : "fa";
  const segments = pathname.split("/");

  useEffect(() => {
    setSearch(window.location.search);
  }, [pathname]);

  if (segments[1] === "fa" || segments[1] === "en") {
    segments[1] = targetLocale;
  } else {
    segments.splice(1, 0, targetLocale);
  }

  const localizedPath = segments.join("/") || `/${targetLocale}`;
  const href = `${localizedPath}${search}`;

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      hrefLang={targetLocale === "fa" ? "fa-IR" : "en-US"}
    >
      {children}
    </Link>
  );
}
