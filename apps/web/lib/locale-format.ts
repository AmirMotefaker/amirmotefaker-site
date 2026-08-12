export type SiteLocale = "fa" | "en";

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
const enDigits = "0123456789";
const arabicIndicDigits = "٠١٢٣٤٥٦٧٨٩";

export function localeDigits(value: string | number, locale: SiteLocale) {
  const input = String(value);

  if (locale === "fa") {
    return input
      .replace(/[0-9]/g, (digit) => faDigits[Number(digit)])
      .replace(/[٠-٩]/g, (digit) => faDigits[arabicIndicDigits.indexOf(digit)]);
  }

  return input
    .replace(/[۰-۹]/g, (digit) => enDigits[faDigits.indexOf(digit)])
    .replace(/[٠-٩]/g, (digit) => enDigits[arabicIndicDigits.indexOf(digit)]);
}

export function formatSiteNumber(value: number, locale: SiteLocale) {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US").format(value);
}

export function formatSiteDate(value: string, locale: SiteLocale) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return localeDigits(value, locale);

  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}