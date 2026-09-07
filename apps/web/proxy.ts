import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, request) => {
  const pathname = request.nextUrl.pathname;

  // Legacy WordPress news links were historically rendered with an already
  // encoded slug passed through Next Link, producing a second encoding layer
  // (%25d8... instead of %d8...). Normalize those URLs before the app router
  // resolves the static article route so existing links and indexed URLs do
  // not fall through to the 404 boundary.
  if (/^\/(fa|en)\/news\//.test(pathname) && /%25[0-9a-f]{2}/i.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = decodeURIComponent(pathname);

    return NextResponse.redirect(url, 308);
  }

  const match = pathname.match(/^\/(fa|en)\/products\/tasvin\/?$/);

  if (match) {
    const locale = match[1];
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/products/tasvia`;

    return NextResponse.redirect(url, 308);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
