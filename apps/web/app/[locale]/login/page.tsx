import type { Metadata } from "next";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "ورود و ثبت‌نام | امیر متفکر" : "Sign in & register | Amir Motefaker";
  const description = fa ? "ورود یا ساخت حساب کاربری با ایمیل." : "Sign in or create an account with email.";
  return { title, description, alternates: { canonical: `${base}/${locale}/login` }, robots: { index: false, follow: true } };
}

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const fa = raw !== "en";
  return (
    <main style={{ minHeight: "78vh", padding: "clamp(112px,14vw,168px) 20px 96px", display: "grid", placeItems: "center", background: "radial-gradient(circle at 50% 10%,color-mix(in srgb,var(--accent) 10%,transparent),transparent 36%)" }}>
      <section style={{ width: "min(100%,520px)", border: "1px solid var(--border)", borderRadius: 28, padding: "clamp(28px,5vw,46px)", background: "var(--surface)", boxShadow: "0 28px 80px rgba(0,0,0,.12)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--text-faint)", marginBottom: 18 }}>
          <span style={{ width: 28, height: 2, borderRadius: 99, background: "var(--accent)" }} />
          <span>{fa ? "حساب کاربری" : "ACCOUNT"}</span>
        </div>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 1.35, margin: 0 }}>{fa ? "ورود یا ساخت حساب" : "Sign in or create an account"}</h1>
        <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.95, margin: "14px 0 30px" }}>
          {fa ? "با ایمیل وارد شوید یا حساب جدید بسازید. پس از فعال‌شدن سامانه تأیید ایمیل، ورود امن از همین صفحه انجام خواهد شد." : "Use your email to sign in or create an account. Secure email verification will be enabled here when the authentication service is connected."}
        </p>
        <form style={{ display: "grid", gap: 11 }}>
          <label htmlFor="email" style={{ fontSize: 12, color: "var(--text-dim)" }}>{fa ? "نشانی ایمیل" : "Email address"}</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder={fa ? "ایمیل شما" : "you@example.com"} required style={{ width: "100%", minHeight: 54, border: "1px solid var(--border)", borderRadius: 14, padding: "0 16px", background: "var(--background)", color: "var(--text)", fontFamily: fa ? "var(--font-fa)" : "var(--font-en)", direction: fa ? "rtl" : "ltr", fontSize: 14 }} />
          <button type="button" disabled aria-disabled="true" style={{ minHeight: 54, border: 0, borderRadius: 14, marginTop: 7, background: "var(--text)", color: "var(--background)", fontWeight: 700, opacity: .55, cursor: "not-allowed" }}>{fa ? "ادامه با ایمیل" : "Continue with email"}</button>
        </form>
        <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "var(--text-faint)", lineHeight: 1.8 }}>{fa ? "ورود امن در مرحله اتصال سرویس ایمیل است." : "Secure sign-in is pending email service connection."}</span>
          <span style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 650 }}>{fa ? "حریم خصوصی محفوظ" : "Privacy protected"}</span>
        </div>
      </section>
    </main>
  );
}
