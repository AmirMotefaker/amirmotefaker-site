export type NoteCategory =
  | "product-decision"
  | "ai-technology"
  | "market-user"
  | "experiment-learning";

export type NoteStatus = "draft" | "published";

export type NoteEntry = {
  slug: string;
  status: NoteStatus;
  category: NoteCategory;
  titleFa: string;
  titleEn: string;
  summaryFa: string;
  summaryEn: string;
  publishedAt?: string;
  updatedAt?: string;
  relatedProducts?: string[];
  relatedThesis?: string[];
  sourceUrls?: string[];
};

export const noteCategoryLabels = {
  fa: {
    "product-decision": "تصمیم‌های محصول",
    "ai-technology": "AI و فناوری",
    "market-user": "بازار و رفتار کاربر",
    "experiment-learning": "آزمایش‌ها و یادگیری",
  },
  en: {
    "product-decision": "Product decisions",
    "ai-technology": "AI & technology",
    "market-user": "Market & user behavior",
    "experiment-learning": "Experiments & learning",
  },
} as const;

// Notes intentionally starts empty. New entries must be first-hand, evidence-aware
// and reviewed before they can be marked as published.
export const notes: NoteEntry[] = [];

export const publishedNotes = notes
  .filter((note) => note.status === "published" && note.publishedAt)
  .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());
