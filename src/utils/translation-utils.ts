import type { SupportedLanguage } from "@/types";
import {
  routeTranslations,
  supportedLocales,
  defaultLocale,
  isProduction,
  protocol,
} from "config/config";

/**
 * Translation utility functions for multilingual support
 */

// Reverse map: locale -> (translatedPath -> pageKey)
const translatedToKey: Record<
  string,
  Record<string, keyof typeof routeTranslations>
> = {};
Object.entries(routeTranslations).forEach(([pageKey, translations]) => {
  Object.entries(translations).forEach(([lang, path]) => {
    if (!translatedToKey[lang]) translatedToKey[lang] = {};
    if (path)
      translatedToKey[lang][path] = pageKey as keyof typeof routeTranslations;
  });
});

export function getTranslatedPath(
  page: keyof typeof routeTranslations | string,
  lang: SupportedLanguage,
): string {
  if (page in routeTranslations) {
    const entry = routeTranslations[
      page as keyof typeof routeTranslations
    ] as Record<string, string>;
    const val = entry[lang as string];
    if (val !== undefined) return val;
    // Fallback: first non-empty mapping or empty string
    const first = Object.values(entry).find(Boolean) || "";
    return first;
  }
  // Unknown page: empty path
  return "";
}

export function getPageKeyFromPath(
  path: string,
  lang: SupportedLanguage,
): string | null {
  const map = translatedToKey[lang as string] || {};
  const key = map[path];
  return key ? (key as string) : null;
}

export function generatePageLanguageUrls(
  host: string,
  pageKey: keyof typeof routeTranslations,
): Record<SupportedLanguage, string> {
  const [hostname, port] = host.includes(":") ? host.split(":") : [host, null];

  const domainIndex = isProduction ? -2 : -1;
  const baseDomain = hostname.split(".").slice(domainIndex).join(".");
  const portSuffix = port ? `:${port}` : "";
  const result: Record<SupportedLanguage, string> = {} as Record<
    SupportedLanguage,
    string
  >;

  supportedLocales.forEach((locale) => {
    const translatedPath = routeTranslations[pageKey][locale];

    if (translatedPath === undefined) {
      console.error(
        `Missing translation path for page key: ${String(pageKey)}, locale: ${locale}`,
      );
    }

    const newSubdomain =
      locale === defaultLocale && isProduction ? "www." : `${locale}.`;
    result[locale] =
      `${protocol}${newSubdomain}${baseDomain}${portSuffix}/${translatedPath}`;
  });

  return result;
}

export async function getDictionary(
  translationMapName: string,
  locale: SupportedLanguage = defaultLocale,
) {
  try {
    // Import the translation file dynamically
    const lmodule = await import(`@/locales/${translationMapName}.ts`);

    // Get the default export which should be the translations object
    const translations = lmodule.default;

    if (!translations) {
      console.error(
        `[getDictionary] No default export found in ${translationMapName}.ts`,
      );
      return {};
    }

    // Check if the translations object has the requested locale
    if (translations[locale]) {
      return translations[locale];
    }

    // Fall back to default locale if requested locale not found
    if (translations[defaultLocale]) {
      console.warn(
        `[getDictionary] Locale ${locale} not found, falling back to ${defaultLocale}`,
      );
      return translations[defaultLocale];
    }

    // If neither requested locale nor default locale found, return empty object
    console.error(
      `[getDictionary] No translations found for ${translationMapName}`,
    );
    return {};
  } catch (error) {
    console.error(
      `[getDictionary] Failed to load translations for ${translationMapName}:`,
      error,
    );
    return {};
  }
}
