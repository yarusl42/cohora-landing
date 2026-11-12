export const consentStorageKey = "cohora_cookie_consent";
export const mixpanelDistinctIdStorageKey = "cohora_mixpanel_distinct_id";
export const consentGrantedEvent = "cohora:optional-storage-granted";
export const consentChangedEvent = "cohora:optional-storage-changed";

const consentDurationMs = 180 * 24 * 60 * 60 * 1000;

export type ConsentChoice = "accepted" | "rejected";

type StoredConsent = {
  choice: ConsentChoice;
  updatedAt: number;
};

export function getConsentChoice(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(consentStorageKey);
    if (!stored) return null;

    const consent = JSON.parse(stored) as StoredConsent;
    if (
      (consent.choice !== "accepted" && consent.choice !== "rejected") ||
      typeof consent.updatedAt !== "number" ||
      Date.now() - consent.updatedAt > consentDurationMs
    ) {
      localStorage.removeItem(consentStorageKey);
      return null;
    }

    return consent.choice;
  } catch {
    return null;
  }
}

export function setConsentChoice(choice: ConsentChoice) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      consentStorageKey,
      JSON.stringify({ choice, updatedAt: Date.now() } satisfies StoredConsent),
    );

    if (choice === "rejected") {
      localStorage.removeItem(mixpanelDistinctIdStorageKey);
    }

    window.dispatchEvent(new Event(consentChangedEvent));
    if (choice === "accepted") {
      window.dispatchEvent(new Event(consentGrantedEvent));
    }
  } catch {
    // Consent storage is optional when a browser blocks local storage.
  }
}
