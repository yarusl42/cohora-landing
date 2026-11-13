import { getConsentChoice } from "@/config/consent";

export const signupAttributionCookieName = "cohora_signup_attribution";
const attributionLifetimeSeconds = 90 * 24 * 60 * 60;

export const signupAttributionParameters = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "utm_source_platform",
  "utm_creative_format",
  "utm_marketing_tactic",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;

type SignupAttributionParameter = (typeof signupAttributionParameters)[number];
type SignupAttributionParams = Partial<
  Record<SignupAttributionParameter, string>
>;

type SignupAttributionTouch = {
  params: SignupAttributionParams;
  capturedAt: string;
};

type SignupAttribution = {
  firstTouch: SignupAttributionTouch;
  latestTouch: SignupAttributionTouch;
};

const isProduction = process.env.NODE_ENV === "production";

const getCookie = (name: string) => {
  const prefix = `${encodeURIComponent(name)}=`;
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(prefix));
  return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : undefined;
};

const readAttribution = (): SignupAttribution | undefined => {
  try {
    const raw = getCookie(signupAttributionCookieName);
    if (!raw) return undefined;

    const parsed = JSON.parse(raw) as Partial<SignupAttribution>;
    if (!parsed.firstTouch?.params || !parsed.firstTouch.capturedAt)
      return undefined;
    if (!parsed.latestTouch?.params || !parsed.latestTouch.capturedAt)
      return undefined;
    return parsed as SignupAttribution;
  } catch {
    return undefined;
  }
};

const writeAttribution = (attribution: SignupAttribution) => {
  const domain = isProduction ? "; Domain=.cohora.org" : "";
  const secure = isProduction ? "; Secure" : "";
  document.cookie = `${encodeURIComponent(signupAttributionCookieName)}=${encodeURIComponent(
    JSON.stringify(attribution),
  )}; Max-Age=${attributionLifetimeSeconds}; Path=/; SameSite=Lax${secure}${domain}`;
};

const getCurrentParams = (): SignupAttributionParams => {
  const searchParams = new URLSearchParams(window.location.search);
  const valuesByKey = new Map<string, string>();
  searchParams.forEach((value, key) =>
    valuesByKey.set(key.toLowerCase(), value),
  );
  return signupAttributionParameters.reduce<SignupAttributionParams>(
    (params, key) => {
      const value = valuesByKey.get(key)?.trim();
      if (value) params[key] = value.slice(0, 500);
      return params;
    },
    {},
  );
};

const removeAttributionParamsFromUrl = () => {
  const url = new URL(window.location.href);
  const parameterNames = new Set(signupAttributionParameters);
  for (const key of [...url.searchParams.keys()]) {
    if (parameterNames.has(key.toLowerCase() as SignupAttributionParameter)) {
      url.searchParams.delete(key);
    }
  }
  window.history.replaceState(
    null,
    "",
    `${url.pathname}${url.search}${url.hash}`,
  );
};

export const captureSignupAttribution = () => {
  if (typeof window === "undefined" || getConsentChoice() !== "accepted")
    return;

  const params = getCurrentParams();
  if (!Object.keys(params).length) return;

  const touch = { params, capturedAt: new Date().toISOString() };
  const existing = readAttribution();
  writeAttribution({
    firstTouch: existing?.firstTouch ?? touch,
    latestTouch: touch,
  });
  removeAttributionParamsFromUrl();
};

export const clearSignupAttribution = () => {
  if (typeof window === "undefined") return;
  const domain = isProduction ? "; Domain=.cohora.org" : "";
  const secure = isProduction ? "; Secure" : "";
  document.cookie = `${encodeURIComponent(signupAttributionCookieName)}=; Max-Age=0; Path=/; SameSite=Lax${secure}${domain}`;
};
