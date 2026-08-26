import type { Metadata } from "next";
import "@fontsource-variable/estedad/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import "./experience-v2.css";
import ThemeBoot from "@/components/founder/ThemeBoot";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeBoot />
        {children}
      </body>
    </html>
  );
}