import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import BlogClient from "@/components/BlogClient";
import { useT, getLocaleFromRequest } from "@/utils/translation-server";
import { getDictionary } from "@/utils/translation-utils";

export default async function BlogPage() {
  const locale = await getLocaleFromRequest();
  const t = await useT("Blog");
  const articleDict = await getDictionary("ArticleSuggestions", locale);

  const groupLabels = {
    karty: t("blog.group.karty"),
    "analitika-povedenie": t("blog.group.analitika-povedenie"),
    "katalogi-ssylki": t("blog.group.katalogi-ssylki"),
    "kontent-struktura": t("blog.group.kontent-struktura"),
    "otzyvy-reputaciya": t("blog.group.otzyvy-reputaciya"),
    "tehnicheskoe-seo": t("blog.group.tehnicheskoe-seo"),
    "lokalnoe-seo-nishi": t("blog.group.lokalnoe-seo-nishi"),
  } as const;

  const strings = {
    title: t("blog.title"),
    intro: t("blog.intro"),
    shownLabel: t("blog.shown"),
    back: t("blog.back"),
    forward: t("blog.forward"),
    allArticles: t("blog.allArticles"),
    goToArticle: t("blog.goToArticle"),
    groupLabels,
  };

  return (
    <>
      <Header />
      <BlogClient locale={locale} strings={strings} articleDict={articleDict} />
      <Footer />
    </>
  );
}
