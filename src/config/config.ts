// ESM import of root-level env.config.js (default export)
import envConfig from "../../env.config.js";

import type { SupportedLanguage } from "@/types";
import { supportedLocalesDict } from "@/types";
import routeTranslations from "./routeTranslations";

export const supportedLocales: SupportedLanguage[] =
  envConfig.supportedLocales as SupportedLanguage[];

export const defaultLocale: SupportedLanguage =
  envConfig.defaultLocale as SupportedLanguage;

export const isProduction = process.env.NODE_ENV !== "development";

export const baseDomain = envConfig.BASE_DOMAIN;

export const protocol = isProduction ? "https://" : "http://";

export { routeTranslations, supportedLocalesDict, type SupportedLanguage };
