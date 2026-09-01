const getConfig = () => {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) throw new Error("AUTH_NOT_CONFIGURED");
  return { url, anonKey };
};

const authHeaders = () => {
  const { anonKey } = getConfig();
  return {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    "Content-Type": "application/json",
  };
};

export async function requestEmailOtp(email: string) {
  const { url } = getConfig();
  const response = await fetch(`${url}/auth/v1/otp`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ email, create_user: true }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`AUTH_OTP_${response.status}`);
}

export type VerifiedSession = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user?: { id?: string; email?: string };
};

export async function verifyEmailOtp(email: string, token: string): Promise<VerifiedSession> {
  const { url } = getConfig();
  const response = await fetch(`${url}/auth/v1/verify`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ email, token, type: "email" }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`AUTH_VERIFY_${response.status}`);
  return response.json() as Promise<VerifiedSession>;
}
