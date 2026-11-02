import HowToChecklist from "@/components/HowToChecklist";

import { useT } from "@/utils/translation-server";

const ArticleLocalPartnerLinkExchange = async () => {
  const t = await useT("ArticleContentLinkExchange");

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

        {/* TODO: Add image showing local business partnership network
             Prompt: "Network diagram showing local businesses connected through partnership links - restaurants, salons, auto services, medical centers in the same city, professional infographic with city map background" */}
        {/* <div className="my-6 p-4 bg-gray-100 rounded-lg">
          <img 
            src="/placeholder-local-business-network.jpg" 
            alt="Сеть локальных партнёрских связей"
            className="w-full rounded"
          />
          <p className="text-sm text-gray-600 mt-2">Пример сети партнёрских ссылок между локальными бизнесами</p>
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

export default ArticleLocalPartnerLinkExchange;
