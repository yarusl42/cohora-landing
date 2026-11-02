import HowToChecklist, { type HowToStep } from "@/components/HowToChecklist";

import { useT } from "@/utils/translation-server";

const ArticleBrandReputationAudit = async () => {
  const t = await useT("ArticleContentReputationBrandAudit");

  const HOWTO_STORAGE_KEY = "articleBrandReputationAuditChecklist";

  const steps: readonly HowToStep[] = [
    {
      id: "brand-reputation-audit-checklist",
      title: "",
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

        {/* TODO: Add image showing reputation audit dashboard
             Prompt: "Digital reputation audit dashboard showing brand mentions analysis, sentiment tracking, review ratings across platforms, social media monitoring, crisis alerts, professional analytics interface" */}
        {/* <div className="my-6 p-4 bg-gray-100 rounded-lg">
          <img 
            src="/placeholder-reputation-audit-dashboard.jpg" 
            alt="Дашборд аудита репутации бренда"
            className="w-full rounded"
          />
          <p className="text-sm text-gray-600 mt-2">Пример аналитического дашборда для мониторинга репутации бренда</p>
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

          <div className="mt-2">
            <HowToChecklist storageKey={HOWTO_STORAGE_KEY} steps={steps} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ArticleBrandReputationAudit;
