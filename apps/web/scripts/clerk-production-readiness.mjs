import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const requiredFiles = [
  "app/[locale]/sign-in/[[...sign-in]]/page.tsx",
  "app/[locale]/sign-up/[[...sign-up]]/page.tsx",
  "app/[locale]/login/page.tsx",
  "components/founder/AuthAction.tsx",
  "proxy.ts",
  ".env.example",
];

for (const file of requiredFiles) {
  assert(existsSync(resolve(root, file)), `Missing required Clerk file: ${file}`);
}

const removedLegacyFiles = [
  "app/api/auth/request-code/route.ts",
  "app/api/auth/verify-code/route.ts",
  "app/api/auth/signout/route.ts",
  "components/auth/EmailOtpAuth.tsx",
  "lib/auth/supabase-rest.ts",
];

for (const file of removedLegacyFiles) {
  assert(!existsSync(resolve(root, file)), `Legacy Supabase auth file still exists: ${file}`);
}

const envExample = read(".env.example");
for (const name of [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "NEXT_PUBLIC_CLERK_SIGN_IN_URL",
  "NEXT_PUBLIC_CLERK_SIGN_UP_URL",
]) {
  assert(envExample.includes(`${name}=`), `Missing env contract: ${name}`);
}
assert(!/sk_(live|test)_[A-Za-z0-9_-]{10,}/.test(envExample), "A Clerk secret value must never be committed to .env.example");

const login = read("app/[locale]/login/page.tsx");
assert(login.includes("redirect("), "Legacy /login route must redirect to Clerk sign-in");
assert(login.includes("/${locale}/sign-in"), "Legacy /login redirect must preserve locale");

const signIn = read("app/[locale]/sign-in/[[...sign-in]]/page.tsx");
const signUp = read("app/[locale]/sign-up/[[...sign-up]]/page.tsx");
assert(signIn.includes("<SignIn"), "Sign-in page must render Clerk SignIn");
assert(signIn.includes("signUpUrl={`/${locale}/sign-up`}"), "Sign-in page must preserve locale when linking to sign-up");
assert(signUp.includes("<SignUp"), "Sign-up page must render Clerk SignUp");
assert(signUp.includes("signInUrl={`/${locale}/sign-in`}"), "Sign-up page must preserve locale when linking to sign-in");

const shell = read("components/founder/AuthAction.tsx");
assert(shell.includes("useAuth"), "AuthAction must read Clerk session state");
assert(shell.includes("isSignedIn"), "AuthAction must branch on Clerk signed-in state");
assert(shell.includes("UserButton"), "Authenticated users must receive Clerk UserButton");

const layout = read("app/layout.tsx");
assert(layout.includes("ClerkProvider"), "Root layout must include ClerkProvider");

const packageJson = JSON.parse(read("package.json"));
assert(packageJson.dependencies?.["@clerk/nextjs"], "@clerk/nextjs dependency is required");

console.log("✓ Clerk routes present");
console.log("✓ Legacy Supabase auth removed");
console.log("✓ Legacy login redirect preserved per locale");
console.log("✓ Clerk session-aware navigation present");
console.log("✓ Clerk environment contract present without committed secret values");
console.log("✓ Clerk production readiness static gate PASS");
