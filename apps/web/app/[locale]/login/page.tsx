import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";

  return {
    title: fa ? "ورود | امیر متفکر" : "Sign in | Amir Motefaker",
    description: fa ? "ورود امن به حساب کاربری امیر متفکر." : "Secure sign in to your Amir Motefaker account.",
    alternates: { canonical: `${base}/${locale}/sign-in` },
    robots: { index: false, follow: true },
  };
}

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  redirect(`/${locale}/sign-in`);
}
