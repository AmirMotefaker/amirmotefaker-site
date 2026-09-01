import type { Metadata } from "next";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { faIR } from "@clerk/localizations/fa-IR";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  return {
    title: fa ? "ساخت حساب | امیر متفکر" : "Create account | Amir Motefaker",
    description: fa ? "ساخت حساب کاربری امن در وب‌سایت امیر متفکر." : "Create a secure account on Amir Motefaker's website.",
    alternates: { canonical: `${base}/${locale}/sign-up` },
    robots: { index: false, follow: true },
  };
}

export default async function SignUpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";

  return (
    <main
      lang={locale}
      dir={fa ? "rtl" : "ltr"}
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "clamp(104px, 12vw, 148px) 20px 72px",
        background: "radial-gradient(circle at 50% 8%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 38%)",
      }}
    >
      <section style={{ width: "min(100%, 460px)", display: "grid", gap: 22 }}>
        <header style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-faint)", marginBottom: 14 }}>
            <span style={{ width: 26, height: 2, borderRadius: 999, background: "var(--accent)" }} />
            <span>{fa ? "عضویت" : "MEMBERSHIP"}</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(2rem, 6vw, 3rem)", lineHeight: 1.25 }}>
            {fa ? "ساخت حساب کاربری" : "Create your account"}
          </h1>
          <p style={{ margin: "12px auto 0", maxWidth: 390, color: "var(--text-dim)", fontSize: 14, lineHeight: 1.9 }}>
            {fa ? "برای دسترسی به امکانات حساب کاربری، ثبت‌نام امن را تکمیل کنید." : "Create a secure account to access member features."}
          </p>
        </header>

        <div style={{ display: "grid", placeItems: "center" }}>
          <SignUp
            signInUrl={`/${locale}/sign-in`}
            localization={fa ? faIR : undefined}
            appearance={{
              elements: {
                rootBox: { width: "100%" },
                cardBox: { width: "100%" },
                card: {
                  width: "100%",
                  borderRadius: "24px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  boxShadow: "0 28px 80px rgba(0,0,0,.12)",
                },
              },
            }}
          />
        </div>

        <p style={{ margin: 0, textAlign: "center", fontSize: 12, color: "var(--text-faint)", lineHeight: 1.8 }}>
          {fa ? "از قبل حساب دارید؟" : "Already have an account?"}{" "}
          <Link href={`/${locale}/sign-in`} style={{ color: "var(--text)", fontWeight: 700 }}>
            {fa ? "ورود" : "Sign in"}
          </Link>
        </p>
      </section>
    </main>
  );
}
