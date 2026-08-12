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

function toDate(value: string | Date) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatSiteDate(value: string | Date, locale: SiteLocale) {
  const date = toDate(value);
  if (!date) return localeDigits(typeof value === "string" ? value : "", locale);

  return new Intl.DateTimeFormat(
    locale === "fa" ? "fa-IR-u-ca-persian" : "en-US-u-ca-gregory",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Tehran",
    },
  ).format(date);
}

export function formatSiteYear(value: string | Date, locale: SiteLocale) {
  const date = toDate(value);
  if (!date) return localeDigits(typeof value === "string" ? value : "", locale);

  return new Intl.DateTimeFormat(
    locale === "fa" ? "fa-IR-u-ca-persian" : "en-US-u-ca-gregory",
    {
      year: "numeric",
      timeZone: "Asia/Tehran",
    },
  ).format(date);
}
