import HowToChecklist from "@/components/HowToChecklist";

import { useT } from "@/utils/translation-server";

const ArticleWhiteLinkbuilding = async () => {
  const t = await useT("ArticleContentWhiteHatStrategy");

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

        {/* PLACEHOLDER IMAGE: Link building strategy diagram
            PROMPT: Infographic showing white hat link building process: quality content creation,
            outreach, guest posting, partnerships, with arrows showing natural link flow
            INSTRUCTION: Create a flowchart showing ethical link building methods */}
        {/* <div className="mb-8 rounded-lg bg-muted p-4 text-center">
          <div className="h-64 bg-muted-foreground/10 rounded flex items-center justify-center">
            <span className="text-muted-foreground">White Hat Link Building Strategy</span>
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
                return (
                  <ul
                    key={bIdx}
                    className="list-disc list-inside space-y-1 mt-2"
                  >
                    {block.body.map((li, liIdx) => (
                      <li key={liIdx}>{li}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <section key={bIdx} className="space-y-2 mt-2">
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

        <section className="space-y-2 mt-2">
          <h2 className="text-base font-semibold text-foreground">
            {t("checklist").title}
          </h2>
          <div className="mt-1">
            <HowToChecklist
              storageKey={t("checklist").storageKey}
              steps={t("checklist").steps}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ArticleWhiteLinkbuilding;
