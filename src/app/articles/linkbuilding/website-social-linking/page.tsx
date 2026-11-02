import HowToChecklist from "@/components/HowToChecklist";

import { useT } from "@/utils/translation-server";

const ArticleLinkSiteSocials = async () => {
  const t = await useT("ArticleContentWebsiteSocialLinking");

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

        {/* TODO: Add image showing business card with website and social media links
             Prompt: "Business card interface showing website URL and social media icons (Instagram, Facebook, YouTube) in Google Business Profile, clean professional layout, UI screenshot style" */}
        {/* <div className="my-6 p-4 bg-gray-100 rounded-lg">
          <img 
            src="/placeholder-business-card-social-links.jpg" 
            alt="Карточка бизнеса с привязанными сайтом и соцсетями"
            className="w-full rounded"
          />
          <p className="text-sm text-gray-600 mt-2">Пример карточки бизнеса с привязанными сайтом и социальными сетями</p>
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
                      <p className="font-medium text-foreground">
                        {block.title}
                      </p>
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

        {/* TODO: Add step-by-step screenshot showing Google Business Profile interface
             Instruction: Take screenshots of Google Business Profile admin panel showing:
             1. Website section where you add main domain
             2. Social media links section with Instagram, Facebook, YouTube fields
             3. Contact information verification screen */}
        {/* <div className="my-6 p-4 bg-gray-100 rounded-lg">
          <img 
            src="/placeholder-gbp-admin-interface.jpg" 
            alt="Интерфейс администрирования Google Business Profile"
            className="w-full rounded"
          />
          <p className="text-sm text-gray-600 mt-2">Интерфейс Google Business Profile для добавления сайта и соцсетей</p>
        </div> */}

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

export default ArticleLinkSiteSocials;
