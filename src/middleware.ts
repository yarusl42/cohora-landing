import { NextRequest, NextResponse } from "next/server";
import { type SupportedLanguage } from "config/config";
import { getDomainForLocale, getLocaleFromDomain } from "@/utils/domain-utils";
import {
  getPageKeyFromPath,
  getTranslatedPath,
} from "@/utils/translation-utils";

// Set standard headers for locale and pathname
function setLocaleHeaders(
  request: NextRequest,
  locale: SupportedLanguage,
  pathname: string,
): Headers {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  headers.set("x-pathname", pathname);
  return headers;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Skip processing for static files and API routes
  if (shouldSkipProcessing(pathname)) {
    const locale = getLocaleFromDomain(request);
    return NextResponse.next({
      request: { headers: setLocaleHeaders(request, locale, pathname) },
    });
  }

  const locale = getLocaleFromDomain(request);
  const pathWithoutSlash = pathname.startsWith("/")
    ? pathname.slice(1)
    : pathname;

  const canonicalKeyRoutes = new Set<string>([
    "blog",
    "cases",
    "categories",
    "contact",
    "example",
    "pricing",
    "privacy",
    "terms",
  ]);

  if (canonicalKeyRoutes.has(pathWithoutSlash) && locale !== "en") {
    const localizedSlug = getTranslatedPath(pathWithoutSlash, locale);
    // Only force the en domain when this canonical (English) slug differs from the locale's slug.
    // Example: /blog is identical in all locales, so do not redirect.
    if (localizedSlug && localizedSlug !== pathWithoutSlash) {
      const host = request.headers.get("host") || "";
      const enDomain = getDomainForLocale("en", host);
      const url = new URL(request.url);
      url.host = enDomain.replace(/^https?:\/\//, "");
      url.pathname = `/${pathWithoutSlash}`;
      return NextResponse.redirect(url);
    }
  }

  const pageKey = getPageKeyFromPath(pathWithoutSlash, locale);
  const headers = setLocaleHeaders(request, locale, pathname);

  if (pageKey) {
    // With canonicalized routeTranslations keys, pageKey IS the canonical route.
    // We only need to rewrite localized paths (by/il) to the canonical pageKey.
    const canonicalPath = pageKey;

    if (pathWithoutSlash !== canonicalPath) {
      const url = new URL(request.url);
      url.pathname = `/${canonicalPath}`;
      return NextResponse.rewrite(url, { request: { headers } });
    }
  }

  return NextResponse.next({ request: { headers } });
}

/**
 * Helper to determine if a path should skip middleware processing
 */
function shouldSkipProcessing(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("favicon.ico") ||
    pathname.includes(".json")
  );
}

// Match all pathnames except for public files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
