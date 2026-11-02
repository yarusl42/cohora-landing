"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ARTICLES_CONFIG,
  type ArticleGroupId,
  type ArticleConfig,
} from "@/lib/articlesConfig";
import { getTranslatedPath } from "@/utils/translation-utils";

export type BlogClientStrings = {
  title: string;
  intro: string;
  shownLabel: string;
  back: string;
  forward: string;
  allArticles: string;
  goToArticle: string;
  groupLabels: Record<ArticleGroupId, string>;
};

type BlogClientProps = {
  locale: "by" | "il" | "en";
  strings: BlogClientStrings;
  articleDict: Record<string, string>;
};

type ArticleCard = {
  id: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  thumbnail: string;
  topic: string;
  groupId: ArticleGroupId;
  path: string;
};

export default function BlogClient({
  locale,
  strings,
  articleDict,
}: BlogClientProps) {
  // Create translation function from dictionary
  const articleT = (key: string) => articleDict[key] || key;
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [page, setPage] = useState<number>(1);

  const GROUP_COUNTS = useMemo(() => {
    return ARTICLES_CONFIG.reduce(
      (acc, article) => {
        acc[article.groupId] = (acc[article.groupId] ?? 0) + 1;
        return acc;
      },
      {} as Partial<Record<ArticleGroupId, number>>,
    );
  }, []);

  const ARTICLE_GROUPS = useMemo(() => {
    return [
      {
        id: "all",
        label: strings.allArticles,
        count: ARTICLES_CONFIG.length,
      },
      ...Object.entries(strings.groupLabels).map(([id, label]) => ({
        id,
        label,
        count: GROUP_COUNTS[id as ArticleGroupId] ?? 0,
      })),
    ];
  }, [GROUP_COUNTS, strings]);

  const ARTICLES: ArticleCard[] = useMemo(() => {
    return ARTICLES_CONFIG.map((cfg: ArticleConfig) => {
      return {
        id: cfg.id,
        title: articleT(cfg.title as string),
        description: articleT(cfg.description as string),
        readTime: articleT(cfg.readTime),
        date: cfg.date,
        thumbnail: cfg.thumbnail,
        topic: strings.groupLabels[cfg.groupId],
        groupId: cfg.groupId,
        path: cfg.path,
      };
    });
  }, [strings.groupLabels, articleT]);

  const translateHref = useMemo(() => {
    return (canonicalPath: string) => {
      const key = canonicalPath.startsWith("/")
        ? canonicalPath.slice(1)
        : canonicalPath;
      const translated = getTranslatedPath(key, locale);
      return translated ? `/${translated}` : canonicalPath;
    };
  }, [locale]);

  const activeGroupLabel =
    ARTICLE_GROUPS.find((g) => g.id === activeGroup)?.label ??
    strings.allArticles;

  const filteredArticles =
    activeGroup === "all"
      ? ARTICLES
      : ARTICLES.filter((article) => article.groupId === activeGroup);

  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + pageSize,
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 lg:flex-row">
        <aside className="w-full shrink-0 rounded-lg border bg-card p-4 shadow-sm lg:w-72">
          <h1 className="mb-4 text-xl font-semibold tracking-tight">
            {strings.title}
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">{strings.intro}</p>
          <nav className="space-y-1">
            {ARTICLE_GROUPS.map((group) => {
              const isActive = group.id === activeGroup;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => {
                    setActiveGroup(group.id);
                    setPage(1);
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-start text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive
                      ? "bg-primary text-primary-foreground hover:bg-primary"
                      : ""
                  }`}
                >
                  <span>{group.label}</span>
                  <span className="ms-3 rounded-full bg-background px-2 py-0.5 text-xs text-muted-foreground">
                    {group.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
          <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                {activeGroupLabel}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {strings.shownLabel}: {filteredArticles.length}
              </p>
            </div>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {paginatedArticles.map((article) => (
              <article
                key={article.id}
                className="flex h-full flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2 py-0.5">
                      {article.topic}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 text-sm font-semibold">
                    {article.title}
                  </h3>

                  <p className="line-clamp-3 text-xs text-muted-foreground">
                    {article.description}
                  </p>

                  <span className="text-xs text-muted-foreground">
                    {article.readTime} • {article.date}
                  </span>

                  <div className="mt-auto flex justify-end">
                    <Link
                      href={translateHref(article.path)}
                      className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      {strings.goToArticle}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-end gap-2 text-xs">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center rounded-md border bg-background px-2 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-50"
              >
                {strings.back}
              </button>
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isCurrent = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`h-7 w-7 rounded-md text-center text-xs font-medium ${
                      isCurrent
                        ? "bg-primary text-primary-foreground"
                        : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center rounded-md border bg-background px-2 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-50"
              >
                {strings.forward}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
