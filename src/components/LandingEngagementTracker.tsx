"use client";

import { useEffect } from "react";
import { trackLandingEvent } from "@/components/MixpanelTracker";

const sections = ["top", "how-it-works", "pricing", "faq", "start"];
const scrollDepths = [25, 50, 75, 90];

/** Records first meaningful exposure to landing sections and scroll depth. */
export function LandingEngagementTracker() {
  useEffect(() => {
    const seenSections = new Set<string>();
    const reachedDepths = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seenSections.has(entry.target.id))
            continue;
          seenSections.add(entry.target.id);
          trackLandingEvent("landing_section_viewed", {
            section: entry.target.id,
          });
        }
      },
      { threshold: 0.5 },
    );

    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    const trackScrollDepth = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const progress = (window.scrollY / scrollableHeight) * 100;
      for (const depth of scrollDepths) {
        if (progress >= depth && !reachedDepths.has(depth)) {
          reachedDepths.add(depth);
          trackLandingEvent("landing_scroll_depth_reached", {
            depth: String(depth),
          });
        }
      }
    };

    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    trackScrollDepth();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", trackScrollDepth);
    };
  }, []);

  return null;
}
