import Link from "next/link";
import { headers } from "next/headers";
import type { SupportedLanguage } from "@/types";
import { getLocaleFromRequest, useT } from "@/utils/translation-server";
import { ARTICLES_CONFIG } from "@/lib/articlesConfig";
import { ARTICLE_SUGGESTIONS as BY_SUGGESTIONS } from "@/lib/articleSuggestions/by";
import { ARTICLE_SUGGESTIONS as IL_SUGGESTIONS } from "@/lib/articleSuggestions/il";
import { ARTICLE_SUGGESTIONS as EN_SUGGESTIONS } from "@/lib/articleSuggestions/en";

const MAX_SUGGESTIONS = 4;

function resolveArticleText(
  value: string | object,
  locale: SupportedLanguage,
): string {
  if (typeof value === "string") return value;

  const record = value as Record<string, unknown>;
  const direct = record[locale];
  if (typeof direct === "string") return direct;

  const first = Object.values(record).find((v) => typeof v === "string");
  return typeof first === "string" ? first : "";
}

function getSuggestionsFor(
  locale: SupportedLanguage | "by" | "il" | "en",
  articleId: string,
) {
  const map =
    locale === "il"
      ? IL_SUGGESTIONS
      : locale === "en"
        ? EN_SUGGESTIONS
        : BY_SUGGESTIONS;

  return map[articleId] ?? [];
}

export async function ArticleSuggestions() {
  const locale = await getLocaleFromRequest();
  const t = await useT("ArticleSuggestions");
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  const currentArticle = ARTICLES_CONFIG.find((a) => a.path === pathname);
  if (!currentArticle) {
    return null;
  }

  const suggestionIds = getSuggestionsFor(locale, currentArticle.id).slice(
    0,
    MAX_SUGGESTIONS,
  );
  if (!suggestionIds.length) {
    return null;
  }

  const suggestions = suggestionIds
    .map((id) => ARTICLES_CONFIG.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  if (!suggestions.length) {
    return null;
  }

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
          {t("article.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestions.map((article) => (
            <Link
              key={article.id}
              href={article.path}
              className="group block rounded-xl border border-border bg-background p-4 hover:border-primary hover:shadow-md transition-all"
            >
              <p className="text-xs text-muted-foreground mb-1">
                {article.readTime}
              </p>
              <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary line-clamp-2">
                {resolveArticleText(article.title, locale)}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-3">
                {resolveArticleText(article.description, locale)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
