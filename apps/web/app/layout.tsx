import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Vazirmatn } from "next/font/google";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import "./experience-v2.css";
import "./founder-v13-polish.css";
import ThemeBoot from "@/components/founder/ThemeBoot";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amir Motefaker, Tech-savvy",
    template: "%s | Amir Motefaker, Tech-savvy",
  },
  description:
    "Amir Motefaker, Tech-savvy — technology products and digital ventures across AI, FinTech, education, health, tourism and digital infrastructure.",
  keywords: [
    "Amir Motefaker",
    "امیر متفکر",
    "Technology",
    "Tech-savvy",
    "AI",
    "هوش مصنوعی",
    "FinTech",
    "Digital Products",
    "Software",
    "Technology News",
  ],
  authors: [{ name: "Amir Motefaker" }],
  creator: "Amir Motefaker",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amir Motefaker, Tech-savvy",
    title: "Amir Motefaker, Tech-savvy",
    description:
      "Technology products and digital ventures across AI, FinTech, education, health, tourism and digital infrastructure.",
    images: [
      {
        url: "/assets/profile/amir-motefaker.png",
        width: 1024,
        height: 1024,
        alt: "Amir Motefaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Motefaker, Tech-savvy",
    description:
      "Technology products, digital ventures and technology news.",
    images: ["/assets/profile/amir-motefaker.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/fa",
      "en-US": "/en",
    },
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontStyle = { "--font-fa": "var(--font-vazirmatn)" } as CSSProperties;

  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={vazirmatn.variable}
      style={fontStyle}
    >
      <body>
        <ClerkProvider>
          <ThemeBoot />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}