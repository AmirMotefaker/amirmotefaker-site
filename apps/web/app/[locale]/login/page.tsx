import type { Metadata } from "next";
import EmailOtpAuth from "@/components/auth/EmailOtpAuth";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "ورود و ثبت‌نام | امیر متفکر" : "Sign in & register | Amir Motefaker";
  const description = fa ? "ورود یا ساخت حساب کاربری امن با کد یک‌بارمصرف ایمیلی." : "Secure sign in or account creation with an email one-time code.";
  return { title, description, alternates: { canonical: `${base}/${locale}/login` }, robots: { index: false, follow: true } };
}

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  return (
    <main style={{ minHeight: "78vh", padding: "clamp(112px,14vw,168px) 20px 96px", display: "grid", placeItems: "center", background: "radial-gradient(circle at 50% 10%,color-mix(in srgb,var(--accent) 10%,transparent),transparent 36%)" }}>
      <section style={{ width: "min(100%,520px)", border: "1px solid var(--border)", borderRadius: 28, padding: "clamp(28px,5vw,46px)", background: "var(--surface)", boxShadow: "0 28px 80px rgba(0,0,0,.12)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--text-faint)", marginBottom: 18 }}>
          <span style={{ width: 28, height: 2, borderRadius: 99, background: "var(--accent)" }} />
          <span>{fa ? "حساب کاربری" : "ACCOUNT"}</span>
        </div>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 1.35, margin: 0 }}>{fa ? "ورود یا ساخت حساب" : "Sign in or create an account"}</h1>
        <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.95, margin: "14px 0 30px" }}>
          {fa ? "ایمیل خود را وارد کنید. یک کد یک‌بارمصرف برای ورود یا ساخت حساب جدید ارسال می‌شود." : "Enter your email. We will send a one-time code to sign in or create your account."}
        </p>
        <EmailOtpAuth locale={locale} />
        <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "var(--text-faint)", lineHeight: 1.8 }}>{fa ? "کد ورود زمان‌دار است و نشست در کوکی امن نگهداری می‌شود." : "Codes are time-limited and the session is kept in secure cookies."}</span>
          <span style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 650 }}>{fa ? "حریم خصوصی محفوظ" : "Privacy protected"}</span>
        </div>
      </section>
    </main>
  );
}
