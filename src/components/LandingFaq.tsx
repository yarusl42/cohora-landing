"use client";

import { ChevronDown } from "lucide-react";
import { trackLandingEvent } from "@/components/MixpanelTracker";

type Faq = readonly [string, string];

export function LandingFaq({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map(([question, answer]) => (
        <details
          key={question}
          onToggle={(event) => {
            if (event.currentTarget.open) {
              trackLandingEvent("landing_faq_opened", { question });
            }
          }}
        >
          <summary>
            {question}
            <ChevronDown size={19} />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
