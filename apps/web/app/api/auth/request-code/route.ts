import { NextResponse } from "next/server";
import { requestEmailOtp } from "@/lib/auth/supabase-rest";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as { email?: string };
    const email = body.email?.trim().toLowerCase();
    if (!email || !emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ ok: false, code: "INVALID_EMAIL" }, { status: 400 });
    }

    await requestEmailOtp(email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "AUTH_ERROR";
    const status = message === "AUTH_NOT_CONFIGURED" ? 503 : 502;
    return NextResponse.json({ ok: false, code: message }, { status });
  }
}
