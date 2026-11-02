import { NextRequest } from "next/server";
import type { SupportedLanguage } from "@/types";
import {
  supportedLocales,
  defaultLocale,
  isProduction,
  baseDomain,
  protocol,
} from "config/config";

/**
 * Domain and URL utility functions for multilingual support
 */

// Map locales to subdomains. Empty string means root domain.
const localeSubdomains: Record<SupportedLanguage, string> = {
  by: "",
  il: "il",
  en: "en",
};

export function getSubdomainForLocale(locale: SupportedLanguage): string {
  return localeSubdomains[locale] ?? "";
}

/**
 * Get locale from domain dynamically, handling any port
 * @param request NextRequest object or host string
 * @returns Detected language from subdomain or default
 */
export function getLocaleFromDomain(
  request: NextRequest | string,
): SupportedLanguage {
  const host =
    typeof request === "string" ? request : request.headers.get("host") || "";
  const hostname = host.split(":")[0];
  const parts = hostname.split(".");
  if (parts.length > 1) {
    const sub = parts[0];
    // Reverse map subdomain -> locale
    const match = supportedLocales.find(
      (loc) => getSubdomainForLocale(loc) === sub,
    );
    if (match) return match as SupportedLanguage;
    // Common case: www should map to default
    if (sub === "www") return defaultLocale;
  }
  return defaultLocale;
}

/**
 * Get current port from window location or host string
 * @param host Optional host string (format: domain:port)
 * @returns Port number as string or null
 */
export function getCurrentPort(host?: string): string | null {
  // If host is provided, extract port from it
  if (host) {
    const portMatch = host.match(/:([0-9]+)$/);
    return portMatch ? portMatch[1] : null;
  }

  // If in browser, get port from window location
  if (typeof window !== "undefined") {
    const portMatch = window.location.host.match(/:([0-9]+)$/);
    return portMatch ? portMatch[1] : null;
  }

  return null; // No port if not in browser or standard port
}

/**
 * Get base domain without subdomain
 * @param host Host string (optional, uses window.location if not provided)
 * @returns Base domain without subdomain
 */
export function getBaseDomain(host?: string): string {
  const currentHost =
    host ||
    (typeof window !== "undefined" ? window.location.host : "localhost");
  const hostname = currentHost.split(":")[0];
  const parts = hostname.split(".");
  if (parts.length > 1) {
    const sub = parts[0];
    const isLocaleSub =
      supportedLocales.some((loc) => getSubdomainForLocale(loc) === sub) ||
      sub === "www";
    if (isLocaleSub)
      return (
        parts.slice(1).join(".") +
        (currentHost.includes(":") ? `:${currentHost.split(":")[1]}` : "")
      );
  }
  return currentHost;
}

/**
 * Get domain for a specific locale
 * @param locale Language to get domain for
 * @param host Optional host string to base the domain on
 * @returns Full domain for the specified locale
 */
export function getDomainForLocale(
  locale: SupportedLanguage,
  host?: string,
): string {
  if (isProduction) {
    const sub = getSubdomainForLocale(locale);
    const hostPart = sub ? `${sub}.${baseDomain}` : baseDomain;
    return `${protocol}${hostPart}`;
  }

  const currentHost =
    host ||
    (typeof window !== "undefined" ? window.location.host : "localhost");
  const port = getCurrentPort(currentHost);
  const currentBaseDomain = getBaseDomain(currentHost);

  // Extract base domain without port
  const domainWithoutPort = currentBaseDomain.split(":")[0];

  // Add port suffix only if it's not a standard port
  const portSuffix = port && port !== "80" && port !== "443" ? `:${port}` : "";
  const sub = getSubdomainForLocale(locale);
  const hostPart = sub ? `${sub}.${domainWithoutPort}` : domainWithoutPort;
  return `${protocol}${hostPart}${portSuffix}`;
}

/**
 * Generate URLs for all supported locales
 * @param host Current host from request headers
 * @param path Current path to preserve
 * @returns Object with URLs for each locale
 */
export function generateLanguageUrls(
  host: string,
  path: string = "/",
): Record<SupportedLanguage, string> {
  // Create result object
  const result: Record<SupportedLanguage, string> = {} as Record<
    SupportedLanguage,
    string
  >;

  if (isProduction) {
    // In production, derive domains purely from config (single source of truth)
    supportedLocales.forEach((locale) => {
      const origin = getDomainForLocale(locale);
      result[locale] = `${origin}${path}`;
    });
  } else {
    // In development, extract port from host and generate URLs
    const [hostname, port] = host.includes(":")
      ? host.split(":")
      : [host, null];
    const domainParts = hostname.split(".");
    const baseDomain =
      domainParts.length > 1 ? domainParts.slice(1).join(".") : hostname;
    const portSuffix =
      port && port !== "80" && port !== "443" ? `:${port}` : "";

    // Generate URLs for each supported locale
    supportedLocales.forEach((locale) => {
      if (locale === defaultLocale) {
        // For default locale (German), use the base domain without subdomain
        result[locale] = `${protocol}${baseDomain}${portSuffix}${path}`;
      } else {
        // For other languages, use subdomain
        result[locale] =
          `${protocol}${locale}.${baseDomain}${portSuffix}${path}`;
      }
    });
  }

  return result;
}
