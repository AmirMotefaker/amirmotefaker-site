import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  return {
    title: fa ? "ورود | امیر متفکر" : "Sign in | Amir Motefaker",
    description: fa ? "ورود امن به حساب کاربری امیر متفکر." : "Securely sign in to your Amir Motefaker account.",
    alternates: { canonical: `${base}/${locale}/sign-in` },
    robots: { index: false, follow: true },
  };
}

export default async function SignInPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";

  return (
    <main
      lang={locale}
      dir={fa ? "rtl" : "ltr"}
      style={{
        minHeight: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "clamp(184px, 18vw, 228px) 20px 64px",
        background: "radial-gradient(circle at 50% 8%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 38%)",
      }}
    >
      <section style={{ width: "min(100%, 440px)", display: "grid", gap: 18 }}>
        <header style={{ textAlign: "center", paddingInline: 8 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-faint)", marginBottom: 10 }}>
            <span style={{ width: 26, height: 2, borderRadius: 999, background: "var(--accent)" }} />
            <span>{fa ? "حساب کاربری" : "ACCOUNT"}</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(1.85rem, 5vw, 2.65rem)", lineHeight: 1.25 }}>
            {fa ? "ورود به حساب" : "Sign in to your account"}
          </h1>
          <p style={{ margin: "10px auto 0", maxWidth: 390, color: "var(--text-dim)", fontSize: 14, lineHeight: 1.8 }}>
            {fa ? "برای ادامه، با روش امن موردنظر خود وارد شوید." : "Continue securely using your preferred sign-in method."}
          </p>
        </header>

        <div lang="en" dir="ltr" style={{ width: "100%", display: "grid", placeItems: "center", isolation: "isolate" }}>
          <SignIn
            signUpUrl={`/${locale}/sign-up`}
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
