import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

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
        background: "radial-gradient(circle at 50% 8%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 38%)",
      }}
    >
      <div style={{ height: "clamp(96px, 10vw, 120px)", flex: "0 0 auto" }} aria-hidden="true" />
      <section
        style={{
          width: "min(100% - 40px, 440px)",
          margin: "0 auto",
          paddingBottom: 64,
          display: "grid",
          gap: 20,
        }}
      >
        <header style={{ textAlign: "center", paddingInline: 8 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-faint)", marginBottom: 10 }}>
            <span style={{ width: 26, height: 2, borderRadius: 999, background: "var(--accent)" }} />
            <span>{fa ? "عضویت" : "MEMBERSHIP"}</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(1.85rem, 5vw, 2.65rem)", lineHeight: 1.25 }}>
            {fa ? "ساخت حساب کاربری" : "Create your account"}
          </h1>
          <p style={{ margin: "10px auto 0", maxWidth: 390, color: "var(--text-dim)", fontSize: 14, lineHeight: 1.8 }}>
            {fa ? "برای دسترسی به امکانات حساب کاربری، ثبت‌نام امن را تکمیل کنید." : "Create a secure account to access member features."}
          </p>
        </header>

        <div lang="en" dir="ltr" style={{ width: "100%", display: "grid", placeItems: "center", isolation: "isolate" }}>
          <SignUp
            signInUrl={`/${locale}/sign-in`}
            appearance={{
              elements: {
                rootBox: { width: "100%", direction: "ltr" },
                cardBox: { width: "100%", direction: "ltr" },
                card: {
                  width: "100%",
                  direction: "ltr",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  boxShadow: "0 22px 64px rgba(0,0,0,.14)",
                },
              },
            }}
          />
        </div>
      </section>
    </main>
  );
}
