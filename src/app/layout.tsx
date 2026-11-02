import "@/index.css";
import React from "react";
import { headers } from "next/headers";
import type { Metadata } from "next";
import {
  defaultLocale,
  supportedLocales,
  type SupportedLanguage,
  protocol,
  baseDomain,
} from "config/config";
import { getDomainForLocale } from "@/utils/domain-utils";
import { getSeoFor } from "@/config/seo";
import { Providers } from "./providers";
import logo from "@/assets/SKYNEX.webp";

// Removed Press Start 2P and PixelatedElegance for legacy-only port

interface RootLayoutProps {
  children: React.ReactNode;
}

// Force dynamic rendering to ensure we get the correct language
export const dynamic = "force-dynamic";

// Localized technical SEO
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const raw = (headersList.get("x-locale") ||
    defaultLocale) as SupportedLanguage;
  const locale: SupportedLanguage = supportedLocales.includes(raw)
    ? raw
    : defaultLocale;
  const path = headersList.get("x-pathname") || "/";
  const seo = getSeoFor(locale, path);

  // Build alternates (hreflang) for the root path
  const languages: Record<string, string> = {};
  for (const lang of supportedLocales) {
    const domain = getDomainForLocale(lang, baseDomain);
    const absolute = domain.startsWith("http")
      ? domain
      : `${protocol}${domain}`;
    languages[lang] = `${absolute}/`;
  }

  const canonicalDomain = getDomainForLocale(locale, baseDomain);
  const canonical = canonicalDomain.startsWith("http")
    ? canonicalDomain
    : `${protocol}${canonicalDomain}`;

  const logoSrc =
    typeof logo === "string" ? logo : (logo as { src: string }).src;
  const logoUrl = new URL(logoSrc, `${canonical}/`).toString();

  return {
    metadataBase: new URL(`${protocol}${baseDomain}`),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `${canonical}/`,
      languages,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${canonical}/`,
      siteName: "Skynex Digital",
      locale: seo.ogLocale,
      type: "website",
      images: [
        {
          url: logoUrl,
          alt: "Skynex Digital",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [logoUrl],
    },
  };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  // Get the current locale from headers (middleware sets x-locale)
  const headersList = await headers();
  const raw = (headersList.get("x-locale") ||
    defaultLocale) as SupportedLanguage;
  const locale: SupportedLanguage = supportedLocales.includes(raw)
    ? raw
    : defaultLocale;

  const dir = locale === "il" ? "rtl" : "ltr";
  const htmlLang = locale === "il" ? "he" : locale;
  return (
    <html lang={htmlLang} dir={dir} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
