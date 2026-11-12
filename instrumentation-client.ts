import type * as SentryModule from "@sentry/nextjs";

type Sentry = typeof SentryModule;
type RouterTransitionStart = typeof SentryModule.captureRouterTransitionStart;
type IdleCapableWindow = {
  requestIdleCallback?: (callback: () => void, options: { timeout: number }) => number;
};

let sentryPromise: Promise<Sentry> | undefined;

const loadSentry = () => {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) {
    return Promise.reject(new Error("NEXT_PUBLIC_SENTRY_DSN is not configured"));
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
  void loadSentry()
    .then((Sentry) => Sentry.captureException(error))
    .catch(() => undefined);
};

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SENTRY_DSN) {
  window.addEventListener("error", (event) => {
    reportBrowserError(event.error ?? new Error(event.message));
  });
  window.addEventListener("unhandledrejection", (event) => {
    reportBrowserError(event.reason);
  });

  const initializeWhenIdle = () => {
    void loadSentry().catch(() => undefined);
  };

  const requestIdleCallback = (window as unknown as IdleCapableWindow).requestIdleCallback;
  if (requestIdleCallback) {
    requestIdleCallback(initializeWhenIdle, { timeout: 3_000 });
  } else {
    window.setTimeout(initializeWhenIdle, 1_000);
  }
}

export const onRouterTransitionStart: RouterTransitionStart = (...args) => {
  void loadSentry()
    .then((Sentry) => Sentry.captureRouterTransitionStart(...args))
    .catch(() => undefined);
};
