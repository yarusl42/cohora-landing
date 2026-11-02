import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import {
  baseDomain,
  supportedLocales,
  type SupportedLanguage,
  routeTranslations,
} from "config/config";
import { getDomainForLocale } from "@/utils/domain-utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get("host") || baseDomain;

  const entries: MetadataRoute.Sitemap = [];

  const pageKeys = Object.keys(routeTranslations) as Array<
    keyof typeof routeTranslations
  >;

  for (const locale of supportedLocales) {
    const origin = getDomainForLocale(locale as SupportedLanguage, host);

    for (const key of pageKeys) {
      const translated = routeTranslations[key][locale as SupportedLanguage];
      if (translated === undefined) continue;

      const path = translated ? `/${translated}` : "/";
      const url = new URL(path, origin).toString();

      entries.push({
        url,
        lastModified: new Date(),
      });
    }
  }

  // De-dupe (safety) + stable order
  const unique = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const e of entries) unique.set(e.url, e);

  return Array.from(unique.values()).sort((a, b) => a.url.localeCompare(b.url));
}
