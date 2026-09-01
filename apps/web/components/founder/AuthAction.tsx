"use client";

import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";

type Props = {
  locale: "fa" | "en";
  variant?: "desktop" | "mobile" | "footer";
  className?: string;
};

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" />
  </svg>
);

export default function AuthAction({ locale, variant = "desktop", className }: Props) {
  const { isLoaded, isSignedIn } = useAuth();
  const fa = locale === "fa";
  const loginHref = `/${locale}/sign-in`;
  const loginLabel = fa ? "ورود" : "Sign in";

  if (!isLoaded || !isSignedIn) {
    if (variant === "desktop") {
      return (
        <Link href={loginHref} className={className} aria-label={loginLabel}>
          <UserIcon />
        </Link>
      );
    }

    return <Link href={loginHref}>{loginLabel}</Link>;
  }

  if (variant === "desktop") {
    return <UserButton appearance={{ elements: { avatarBox: { width: "32px", height: "32px" } } }} />;
  }

  return <UserButton />;
}
