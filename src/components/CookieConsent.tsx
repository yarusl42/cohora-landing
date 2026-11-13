"use client";

import { useEffect, useState } from "react";
import {
  getConsentChoice,
  setConsentChoice,
  type ConsentChoice,
} from "@/config/consent";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedChoice = getConsentChoice();
    setIsOpen(savedChoice === null);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    setConsentChoice(nextChoice);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <section
      aria-describedby="cookie-consent-description"
      aria-labelledby="cookie-consent-title"
      className="cookie-consent"
      role="dialog"
    >
      <div>
        <p className="eyebrow">Your privacy</p>
        <h2 id="cookie-consent-title">Cookie preferences</h2>
        <p id="cookie-consent-description">
          We use necessary local storage to remember this choice. With your
          permission, we use Mixpanel and Google Tag Manager for product
          analytics, preserve campaign attribution for signup, and use Sentry
          for error diagnostics.
        </p>
        <a href="/privacy">Read our Privacy Policy</a>
      </div>
      <div className="cookie-consent-actions">
        <button
          className="cookie-decline-button"
          onClick={() => saveChoice("rejected")}
          type="button"
        >
          Decline
        </button>
        <button
          className="button"
          onClick={() => saveChoice("accepted")}
          type="button"
        >
          Accept
        </button>
      </div>
    </section>
  );
}
