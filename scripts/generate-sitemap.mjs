import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import envConfig from "../env.config.js";
import routeTranslations from "../src/config/routeTranslations.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getOriginForLocale(locale) {
  const baseDomain = envConfig.BASE_DOMAIN;
  const protocol = envConfig.USE_HTTPS ? "https://" : "http://";

  // Keep consistent with src/utils/domain-utils.ts
  const localeSubdomains = {
    by: "",
    il: "il",
    en: "en",
  };

  const sub = localeSubdomains[locale] ?? "";
  return `${protocol}${sub ? `${sub}.` : ""}${baseDomain}`;
}

function normalizePath(translated) {
  if (!translated) return "/";
  return translated.startsWith("/") ? translated : `/${translated}`;
}

async function main() {
  const supportedLocales = envConfig.supportedLocales;
  const now = new Date().toISOString();

  const urls = [];
  const keys = Object.keys(routeTranslations);

  for (const locale of supportedLocales) {
    const origin = getOriginForLocale(locale);

    for (const key of keys) {
      const translated = routeTranslations[key]?.[locale];
      if (translated === undefined) continue;

      const pathname = normalizePath(translated);
      const loc = new URL(pathname, origin).toString();
      urls.push(loc);
    }
  }

  const uniqueSorted = Array.from(new Set(urls)).sort();

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    uniqueSorted
      .map(
        (loc) =>
          `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${escapeXml(now)}</lastmod>\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  const outPath = path.resolve(__dirname, "../public/sitemap.xml");
  await fs.writeFile(outPath, xml, "utf8");
  process.stdout.write(`Generated ${uniqueSorted.length} URLs -> ${outPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
