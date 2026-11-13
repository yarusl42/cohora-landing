import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_RUNTIME === "nodejs"
  ) {
    await import("./sentry.server.config");
  }
}

export const onRequestError: typeof Sentry.captureRequestError = (...args) => {
  if (process.env.NODE_ENV !== "production") {
    console.info("[Sentry] captured request error", args[0]);
    return;
  }
  return Sentry.captureRequestError(...args);
};
