import { NextResponse } from "next/server";
import { verifyEmailOtp } from "@/lib/auth/supabase-rest";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const otpPattern = /^\d{6,8}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as { email?: string; token?: string };
    const email = body.email?.trim().toLowerCase();
    const token = body.token?.trim();

    if (!email || !emailPattern.test(email) || !token || !otpPattern.test(token)) {
      return NextResponse.json({ ok: false, code: "INVALID_CREDENTIALS" }, { status: 400 });
    }

    const session = await verifyEmailOtp(email, token);
    const response = NextResponse.json({ ok: true, user: { email: session.user?.email ?? email } });
    const secure = process.env.NODE_ENV === "production";
    const maxAge = Math.max(60, Number(session.expires_in) || 3600);

    response.cookies.set("am_access", session.access_token, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge,
    });
    response.cookies.set("am_refresh", session.refresh_token, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "AUTH_ERROR";
    const status = message === "AUTH_NOT_CONFIGURED" ? 503 : 401;
    return NextResponse.json({ ok: false, code: message }, { status });
  }
}
