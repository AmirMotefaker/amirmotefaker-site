"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/founder-site";

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
const enDigits = "0123456789";
const arabicIndicDigits = "٠١٢٣٤٥٦٧٨٩";

function convert(value: string, locale: Locale) {
  if (locale === "fa") {
    return value
      .replace(/[0-9]/g, (digit) => faDigits[Number(digit)])
      .replace(/[٠-٩]/g, (digit) => faDigits[arabicIndicDigits.indexOf(digit)]);
  }

  return value
    .replace(/[۰-۹]/g, (digit) => enDigits[faDigits.indexOf(digit)])
    .replace(/[٠-٩]/g, (digit) => enDigits[arabicIndicDigits.indexOf(digit)]);
}

function shouldSkip(node: Text) {
  const parent = node.parentElement;
  if (!parent) return true;
  return Boolean(parent.closest("code,pre,kbd,samp,script,style"));
}

function normalizeTree(root: HTMLElement, locale: Locale) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();

  while (current) {
    const textNode = current as Text;
    if (!shouldSkip(textNode) && textNode.nodeValue) {
      const next = convert(textNode.nodeValue, locale);
      if (next !== textNode.nodeValue) textNode.nodeValue = next;
    }
    current = walker.nextNode();
  }
}

export default function LocaleDigits({ locale }: { locale: Locale }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".founder-site");
    if (!root) return;

    normalizeTree(root, locale);

    const observer = new MutationObserver(() => normalizeTree(root, locale));
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, [locale]);

  return null;
}