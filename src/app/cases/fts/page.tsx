import { ProjectGridItem } from "@/components/project/ProjectGrid";
import { getProjectsData } from "@/data/projectsData";
import { getLocaleFromRequest } from "@/utils/translation-server";
import TemplateProjectPage from "@/components/project/TemplateProjectPage";
import TextWithVideo from "@/components/project/slots/TextWithVideo";
import videoPoster from "@/assets/project4/video_poster.webp";
import heroImage from "@/assets/project4/hero.webp";
import { useT } from "@/utils/translation-server";

const toSrc = (img: any): string =>
  typeof img === "string" ? img : (img?.src ?? "");

const Project = async () => {
  const locale = await getLocaleFromRequest();
  const t = await useT("CaseFTS");
  const heroT = await useT("ProjectHero");
  const casesT = await useT("Cases");

  const hero = {
    title: "Future Tech School",
    badges: [t("case.hero.badge1"), t("case.hero.badge2") || ""],
    year: "2024",
    industry: t("case.hero.industry"),
    client: t("case.hero.client"),
    duration: t("case.hero.duration"),
    heroImage: toSrc(heroImage),
    children: <p className="text-base max-w-4xl">{t("case.hero.lead")}</p>,
  };

  const heroLabels = {
    year: heroT("projectHero.year") || "Year",
    industry: heroT("projectHero.industry") || "Industry",
    client: heroT("projectHero.client") || "Client",
    duration: heroT("projectHero.duration") || "Project Duration",
  };

  const sections = [
    <TextWithVideo
      key="s0"
      title={t("case.s0.title")}
      sources={[{ src: "/videos/fts.webm", type: "video/webm" }]}
      poster={toSrc(videoPoster)}
      autoPlay
      muted
      loop
      playsInline
      controls
    >
      <p className="text-base leading-relaxed">
        {t("case.s0.p1.a")}
        <strong>{t("case.s0.p1.b")}</strong>
        {t("case.s0.p1.c")}
      </p>
      <ul className="list-disc list-inside text-base leading-relaxed mt-3 space-y-1">
        <li>{t("case.s0.li1")}</li>
        <li>{t("case.s0.li2")}</li>
        <li>{t("case.s0.li3")}</li>
      </ul>
      <p className="text-base leading-relaxed mt-4">{t("case.s0.p2")}</p>
    </TextWithVideo>,
  ];

  const allProjects = await getProjectsData(locale);
  const gridItems: ProjectGridItem[] = [1, 2, 0, 4].map(
    (i) => allProjects[i],
  ) as ProjectGridItem[];

  return (
    <TemplateProjectPage
      hero={hero}
      sections={sections}
      gridItems={gridItems}
      heroLabels={heroLabels}
      gridTitle={casesT("cases.otherProjects") || "Other projects"}
    />
  );
};

export default Project;
