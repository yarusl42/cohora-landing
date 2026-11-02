import { useT } from "@/utils/translation-server";

const ArticleReviewsRatingMicrodata = async () => {
  const t = await useT("ArticleContentReputationReviewsRatingMicrodata");

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

        {/* TODO: Add image showing rich snippets with reviews
             Prompt: "Search results showing rich snippets with star ratings, review counts, and microdata implementation, before/after comparison of search listings with and without review markup" */}
        {/* <div className="my-6 p-4 bg-gray-100 rounded-lg">
          <img 
            src="/placeholder-review-rich-snippets.jpg" 
            alt="Rich snippets с отзывами и рейтингами"
            className="w-full rounded"
          />
          <p className="text-sm text-gray-600 mt-2">Пример расширенных сниппетов с звездами рейтинга в поисковой выдаче</p>
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

                  {block.title &&
                    block.title.toLowerCase().includes("json") && (
                      <p className="font-mono text-xs bg-muted p-3 rounded-md overflow-x-auto">
                        {t("codeExample")}
                      </p>
                    )}
                </section>
              );
            })}
          </section>
        ))}
      </div>
    </section>
  );
};

export default ArticleReviewsRatingMicrodata;
