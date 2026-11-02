/**
 * Environment configuration for the multilingual website
 * This file provides default values for environment variables
 * and can be used as a reference for setting up production environments
 */
const isProd = process.env.NODE_ENV === "production";
const config = {
  // Base domain for production (without protocol)
  BASE_DOMAIN: process.env.BASE_DOMAIN || "skynex.digital",

  // Use HTTPS in production
  USE_HTTPS: isProd,

  // Site URL with protocol
  get SITE_URL() {
    const protocol = !this.USE_HTTPS ? "http://" : "https://";
    return process.env.SITE_URL || `${protocol}${this.BASE_DOMAIN}`;
  },
  supportedLocales: ["by", "il", "en"],
  defaultLocale: "by",
};

export default config;
