"use client";

import { FormEvent, useState } from "react";

type Props = { locale: "fa" | "en" };

export default function EmailOtpAuth({ locale }: Props) {
  const fa = locale === "fa";
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"email" | "verify" | "done">("email");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function requestCode(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/auth/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("REQUEST_FAILED");
      setStep("verify");
      setMessage(fa ? "کد ورود به ایمیل شما ارسال شد." : "A sign-in code was sent to your email.");
    } catch {
      setMessage(fa ? "ارسال کد انجام نشد. دوباره تلاش کنید." : "We could not send the code. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function verifyCode(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      if (!response.ok) throw new Error("VERIFY_FAILED");
      setStep("done");
      setMessage(fa ? "ورود با موفقیت انجام شد." : "You are signed in.");
    } catch {
      setMessage(fa ? "کد واردشده معتبر نیست یا منقضی شده است." : "The code is invalid or expired.");
    } finally {
      setBusy(false);
    }
  }

  const inputStyle = {
    width: "100%",
    minHeight: 54,
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: "0 16px",
    background: "var(--background)",
    color: "var(--text)",
    fontFamily: fa ? "var(--font-fa)" : "var(--font-en)",
    direction: (fa ? "rtl" : "ltr") as "rtl" | "ltr",
    fontSize: 14,
  };

  if (step === "done") {
    return <div role="status" style={{ padding: "18px 0", color: "var(--text)", lineHeight: 1.9 }}>{message}</div>;
  }

  return (
    <form onSubmit={step === "email" ? requestCode : verifyCode} style={{ display: "grid", gap: 11 }}>
      <label htmlFor="email" style={{ fontSize: 12, color: "var(--text-dim)" }}>{fa ? "نشانی ایمیل" : "Email address"}</label>
      <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={fa ? "ایمیل شما" : "you@example.com"} required disabled={step === "verify"} style={inputStyle} />

      {step === "verify" ? (
        <>
          <label htmlFor="token" style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>{fa ? "کد ورود" : "Sign-in code"}</label>
          <input id="token" name="token" inputMode="numeric" autoComplete="one-time-code" value={token} onChange={(e) => setToken(e.target.value.replace(/\D/g, "").slice(0, 8))} placeholder={fa ? "کد ارسال‌شده" : "Email code"} required minLength={6} maxLength={8} style={inputStyle} />
        </>
      ) : null}

      <button type="submit" disabled={busy} style={{ minHeight: 54, border: 0, borderRadius: 14, marginTop: 7, background: "var(--text)", color: "var(--background)", fontWeight: 700, opacity: busy ? .65 : 1, cursor: busy ? "wait" : "pointer" }}>
        {busy ? (fa ? "در حال انجام…" : "Please wait…") : step === "email" ? (fa ? "ارسال کد ورود" : "Send sign-in code") : (fa ? "تأیید و ورود" : "Verify and sign in")}
      </button>

      {message ? <p role="status" aria-live="polite" style={{ margin: "7px 0 0", color: "var(--text-dim)", fontSize: 12, lineHeight: 1.8 }}>{message}</p> : null}
      {step === "verify" ? <button type="button" onClick={() => { setStep("email"); setToken(""); setMessage(""); }} style={{ border: 0, background: "transparent", color: "var(--text-dim)", cursor: "pointer", padding: 6 }}>{fa ? "تغییر ایمیل" : "Change email"}</button> : null}
    </form>
  );
}
