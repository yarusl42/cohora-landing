import HowToChecklist, { type HowToStep } from "@/components/HowToChecklist";

import { useT } from "@/utils/translation-server";

const ArticleTechnicalSeoAudit = async () => {
  const t = await useT("ArticleContentTechSeoSeoAudit");

  const steps: readonly HowToStep[] = t("steps");
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

            {section.title === t("checklistTitle") && (
              <div className="mt-1">
                <HowToChecklist
                  storageKey={t("howToStorageKey")}
                  steps={steps}
                />
              </div>
            )}
          </section>
        ))}
      </div>
    </section>
  );
};

export default ArticleTechnicalSeoAudit;
