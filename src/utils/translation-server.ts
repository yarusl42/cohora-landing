import { headers } from "next/headers";
import type { SupportedLanguage } from "@/types";
import {
  defaultLocale,
  supportedLocales,
  routeTranslations,
} from "config/config";
import { getDictionary, getTranslatedPath } from "./translation-utils";

export async function getLocaleFromRequest(): Promise<SupportedLanguage> {
  try {
    const headersList = await headers();
    const locale = headersList.get("x-locale");

    if (locale && supportedLocales.includes(locale as SupportedLanguage)) {
      return locale as SupportedLanguage;
    }

    return defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export async function useT(mapName: string) {
  const locale = await getLocaleFromRequest();
  const messages = await getDictionary(mapName, locale);
  return (key: string) => messages[key] || key;
}

export async function useTPath() {
  const locale = await getLocaleFromRequest();
  return (page: keyof typeof routeTranslations | string) =>
    getTranslatedPath(page, locale);
}
