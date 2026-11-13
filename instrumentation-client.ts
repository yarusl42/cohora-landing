import type * as SentryModule from "@sentry/nextjs";
import {
  consentChangedEvent,
  consentGrantedEvent,
  getConsentChoice,
} from "@/config/consent";

type Sentry = typeof SentryModule;
type RouterTransitionStart = typeof SentryModule.captureRouterTransitionStart;
type IdleCapableWindow = {
  requestIdleCallback?: (
    callback: () => void,
    options: { timeout: number },
  ) => number;
};

let sentryPromise: Promise<Sentry> | undefined;

const loadSentry = () => {
  if (process.env.NODE_ENV !== "production") {
    return Promise.reject(new Error("Sentry is disabled outside production"));
  }

  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) {
    return Promise.reject(
      new Error("NEXT_PUBLIC_SENTRY_DSN is not configured"),
    );
  }

  sentryPromise ??= import("@sentry/nextjs").then((Sentry) => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV,
    });
    return Sentry;
  });

  return sentryPromise;
};

const reportBrowserError = (error: unknown) => {
  if (process.env.NODE_ENV !== "production") {
    console.info("[Sentry] captured browser exception", error);
    return;
  }

  void loadSentry()
    .then((Sentry) => Sentry.captureException(error))
    .catch(() => undefined);
};

let sentryInitialized = false;
const handleBrowserError = (event: ErrorEvent) => {
  reportBrowserError(event.error ?? new Error(event.message));
};
const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  reportBrowserError(event.reason);
};

const initializeSentry = () => {
  if (process.env.NODE_ENV !== "production") {
    console.info("[Sentry]");
    return;
  }

  if (
    sentryInitialized ||
    !process.env.NEXT_PUBLIC_SENTRY_DSN ||
    getConsentChoice() !== "accepted"
  ) {
    return;
  }

  sentryInitialized = true;
  window.addEventListener("error", handleBrowserError);
  window.addEventListener("unhandledrejection", handleUnhandledRejection);

  const initializeWhenIdle = () => {
    void loadSentry().catch(() => undefined);
  };

  const requestIdleCallback = (window as unknown as IdleCapableWindow)
    .requestIdleCallback;
  if (requestIdleCallback) {
    requestIdleCallback(initializeWhenIdle, { timeout: 3_000 });
  } else {
    window.setTimeout(initializeWhenIdle, 1_000);
  }
};

const updateSentryConsent = () => {
  if (getConsentChoice() === "accepted") {
    initializeSentry();
    return;
  }

  sentryInitialized = false;
  window.removeEventListener("error", handleBrowserError);
  window.removeEventListener("unhandledrejection", handleUnhandledRejection);
  void sentryPromise
    ?.then((Sentry) => Sentry.close())
    .then(() => {
      sentryPromise = undefined;
    })
    .catch(() => undefined);
};

if (typeof window !== "undefined") {
  initializeSentry();
  window.addEventListener(consentGrantedEvent, initializeSentry);
  window.addEventListener(consentChangedEvent, updateSentryConsent);
}

export const onRouterTransitionStart: RouterTransitionStart = (...args) => {
  if (process.env.NODE_ENV !== "production") {
    console.info("[Sentry] router transition", args);
    return;
  }

  if (getConsentChoice() !== "accepted") return;

  void loadSentry()
    .then((Sentry) => Sentry.captureRouterTransitionStart(...args))
    .catch(() => undefined);
};
