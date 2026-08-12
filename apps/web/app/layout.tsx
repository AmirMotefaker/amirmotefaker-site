import type { Metadata } from "next";
import "@fontsource-variable/estedad/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import ThemeBoot from "@/components/founder/ThemeBoot";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amir Motefaker | AI Products, Technology & Digital Ecosystems",
    template: "%s | Amir Motefaker",
  },
  description:
    "Personal website of Amir Motefaker — AI products, software, digital ecosystems, technology strategy, data and innovation.",
  keywords: [
    "Amir Motefaker",
    "امیر متفکر",
    "AI",
    "هوش مصنوعی",
    "Technology",
    "Digital Products",
    "Software",
    "Data",
    "Persian AI",
  ],
  authors: [{ name: "Amir Motefaker" }],
  creator: "Amir Motefaker",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amir Motefaker",
    title: "Amir Motefaker | AI Products, Technology & Digital Ecosystems",
    description:
      "Building AI-powered products, software platforms and digital ecosystems.",
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
    title: "Amir Motefaker",
    description:
      "AI products, software platforms, data, strategy and digital ecosystems.",
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