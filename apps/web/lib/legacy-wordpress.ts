import fs from "node:fs";
import path from "node:path";

export type LegacyTaxonomy = {
  id: number;
  name: string;
  slug: string;
};

export type LegacyPostIndexItem = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: string;
  excerpt_text: string;
  featured_image: string;
  categories: LegacyTaxonomy[];
  tags: LegacyTaxonomy[];
};

export type LegacyPost = LegacyPostIndexItem & {
  source_url: string;
  excerpt_html: string;
  content_html: string;
  featured_media: number;
  author: number;
};

export type LegacyPageIndexItem = {
  id: number;
  slug: string;
  title: string;
  modified: string;
  excerpt_text: string;
  featured_image: string;
};

export type LegacyPage = LegacyPageIndexItem & {
  source_url: string;
  date: string;
  excerpt_html: string;
  content_html: string;
  featured_media: number;
  parent: number;
  menu_order: number;
};

const root = path.join(process.cwd(), "content", "legacy", "wordpress");

function readJson<T>(filePath: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return fallback;
  }
}

export function getLegacyPosts() {
  return readJson<LegacyPostIndexItem[]>(path.join(root, "post-index.json"), []);
}

export function getLegacyPostBySlug(slug: string) {
  const item = getLegacyPosts().find((post) => post.slug === slug);
  if (!item) return null;
  return readJson<LegacyPost | null>(path.join(root, "posts", `${item.id}.json`), null);
}

export function getLegacyPages() {
  return readJson<LegacyPageIndexItem[]>(path.join(root, "page-index.json"), []);
}

export function getLegacyPageBySlug(slug: string) {
  const item = getLegacyPages().find((page) => page.slug === slug);
  if (!item) return null;
  return readJson<LegacyPage | null>(path.join(root, "pages", `${item.id}.json`), null);
}

export function getLegacyPageById(id: number) {
  return readJson<LegacyPage | null>(path.join(root, "pages", `${id}.json`), null);
}