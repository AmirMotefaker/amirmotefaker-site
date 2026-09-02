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
      <div style={{ height: "clamp(118px, 12vw, 148px)" }} aria-hidden="true" />
      <section
        style={{
          width: "min(100% - 40px, 440px)",
          margin: "0 auto",
          paddingBottom: 64,
          display: "grid",
          gap: 18,
        }}
      >
        <p style={{ margin: 0, textAlign: "center", color: "var(--text-dim)", fontSize: 14, lineHeight: 1.8 }}>
          {fa ? "برای دسترسی به امکانات حساب کاربری، ثبت‌نام امن را تکمیل کنید." : "Create a secure account to access member features."}
        </p>

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
