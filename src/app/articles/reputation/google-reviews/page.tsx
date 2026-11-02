import HowToChecklist, { type HowToStep } from "@/components/HowToChecklist";

import { useT } from "@/utils/translation-server";

const ArticleGoogleReviews = async () => {
  const t = await useT("ArticleContentReputationGoogleReviews");

  const HOWTO_STORAGE_KEY = "articleGoogleReviewsChecklist";

  const steps: readonly HowToStep[] = [
    {
      id: "google-reviews-checklist",
      title: t("checklistTitle"),
      description: "",
      items: t("checklistItems"),
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:underline">
            {t("backToHome")}
          </a>
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {t("title")}
        </h1>
        {t("lead").map((p, idx) => (
          <p key={idx} className="text-lg text-muted-foreground mb-8">
            {p}
          </p>
        ))}

        {/* PLACEHOLDER IMAGE: Google reviews interface
            PROMPT: Screenshot of Google My Business reviews section showing star ratings, 
            review text, and review management interface
            INSTRUCTION: Take a screenshot of a business profile on Google showing the reviews section */}
        {/* <div className="mb-8 rounded-lg bg-muted p-4 text-center">
          <div className="h-64 bg-muted-foreground/10 rounded flex items-center justify-center">
            <span className="text-muted-foreground">Google Reviews Interface</span>
          </div>
        </div> */}

        {t("sections").map((section, sIdx) => (
          <section
            key={sIdx}
            className={
              sIdx === 0
                ? "space-y-8 text-muted-foreground mt-2"
                : "space-y-6 text-muted-foreground mt-8"
            }
          >
            <h2 className="text-xl text-foreground">{section.title}</h2>

            {section.blocks.map((block, bIdx) => {
              if (Array.isArray(block.body)) {
                if (block.title) {
                  return (
                    <section key={bIdx} className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">
                        {block.title}
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        {block.body.map((li, liIdx) => (
                          <li key={liIdx}>{li}</li>
                        ))}
                      </ul>
                    </section>
                  );
                }

                return (
                  <ul key={bIdx} className="list-disc list-inside space-y-1">
                    {block.body.map((li, liIdx) => (
                      <li key={liIdx}>{li}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <section key={bIdx} className="space-y-2">
                  {block.title && (
                    <h2 className="text-base font-semibold text-foreground">
                      {block.title}
                    </h2>
                  )}
                  <p>{block.body}</p>
                </section>
              );
            })}
          </section>
        ))}

        <section className="space-y-2 mt-8">
          <h2 className="text-base font-semibold text-foreground">
            {t("checklistTitle")}
          </h2>
          <div className="mt-1">
            <HowToChecklist storageKey={HOWTO_STORAGE_KEY} steps={steps} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ArticleGoogleReviews;
