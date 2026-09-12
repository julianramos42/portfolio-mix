import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"] as const;
const defaultLocale = "es";

function resolveLocale(request: NextRequest): string {
  const fromCookie = request.cookies.get("locale")?.value;
  if (fromCookie && (locales as readonly string[]).includes(fromCookie)) {
    return fromCookie;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const first = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  const match = locales.find((locale) => first.startsWith(locale));
  return match ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("locale", locale, {
    path: "/",
    maxAge: 31536000,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|webp|ico|json|mp4|webmanifest)$).*)",
  ],
};