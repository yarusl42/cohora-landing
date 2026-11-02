"use client";
import { useEffect, useState } from "react";

export type HowToStep = {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
};

interface HowToChecklistProps {
  steps: readonly HowToStep[];
  storageKey: string;
}

const HowToChecklist = ({ steps, storageKey }: HowToChecklistProps) => {
  type HowToState = {
    [key: string]: boolean;
  };

  const [checks, setChecks] = useState<HowToState>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as HowToState;
        if (parsed && typeof parsed === "object") {
          setChecks(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  const toggleCheck = (stepId: string, index: number) => {
    const key = `${stepId}-${index}`;
    setChecks((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <div className="space-y-4 text-muted-foreground">
      {steps.map((step) => (
        <div key={step.id} className="space-y-2">
          <p className="font-semibold text-foreground mb-1">{step.title}</p>
          <p>{step.description}</p>
          <ul className="space-y-1">
            {step.items.map((item, index) => {
              const key = `${step.id}-${index}`;
              const checked = !!checks[key];
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => toggleCheck(step.id, index)}
                    className={`w-full text-left flex items-start gap-2 rounded-md px-2 py-1 transition-colors cursor-pointer ${
                      checked
                        ? "bg-primary/5 text-foreground"
                        : "hover:bg-accent/40 text-foreground"
                    }`}
                  >
                    <span
                      className={`mt-1 h-4 w-4 rounded-full border flex-shrink-0 ${
                        checked
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/40"
                      }`}
                    />
                    <span
                      className={
                        checked
                          ? "line-through decoration-muted-foreground/70 text-muted-foreground"
                          : "text-foreground"
                      }
                    >
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HowToChecklist;
