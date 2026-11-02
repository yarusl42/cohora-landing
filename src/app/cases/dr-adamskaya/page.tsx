import { ProjectGridItem } from "@/components/project/ProjectGrid";
import { getProjectsData } from "@/data/projectsData";
import { getLocaleFromRequest } from "@/utils/translation-server";
import TemplateProjectPage from "@/components/project/TemplateProjectPage";
import TextWithImage from "@/components/project/slots/TextWithImage";
import Text from "@/components/project/slots/Text";
import heroImage from "@/assets/project2/project2.webp";
import semrush from "@/assets/project2/semrush.webp";
import googleSearchConsole from "@/assets/project2/google_search_console.webp";
import { useT } from "@/utils/translation-server";

const toSrc = (img: any): string =>
  typeof img === "string" ? img : (img?.src ?? "");

const Project = async () => {
  const locale = await getLocaleFromRequest();
  const t = await useT("CaseDrAdamskaya");
  const heroT = await useT("ProjectHero");
  const casesT = await useT("Cases");

  const hero = {
    title: "Dr. Adamskaya",
    badges: [t("case.hero.badge1") || ""],
    year: "2025",
    industry: t("case.hero.industry"),
    client: "Dr. Adamskaya",
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
    <Text key="s1" title={t("case.s1.title")}>
      <>
        <p className="text-base leading-relaxed">
          {t("case.s1.p1.a")}
          <b>{t("case.s1.p1.b")}</b>
          {t("case.s1.p1.c")}
        </p>
      </>
    </Text>,

    <TextWithImage key="s2" title={t("case.s2.title")} image={toSrc(semrush)}>
      <>
        <p className="text-base leading-relaxed">{t("case.s2.p1")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>{t("case.s2.li1.a")}</b> {t("case.s2.li1.b")}
          </li>
          <li>
            <b>{t("case.s2.li2.a")}</b> {t("case.s2.li2.b")}
          </li>
          <li>
            <b>{t("case.s2.li3.a")}</b> {t("case.s2.li3.b")}
          </li>
          <li>
            <b>{t("case.s2.li4.a")}</b> {t("case.s2.li4.b")}
          </li>
        </ul>
      </>
    </TextWithImage>,

    <TextWithImage
      key="s3"
      title={t("case.s3.title")}
      image={toSrc(googleSearchConsole)}
    >
      <>
        <p className="text-base leading-relaxed">{t("case.s3.p1")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>{t("case.s3.li1.a")}</b>
            {t("case.s3.li1.b")}
          </li>
          <li>{t("case.s3.li2")}</li>
          <li>{t("case.s3.li3")}</li>
        </ul>
      </>
    </TextWithImage>,

    <Text key="s4" title={t("case.s4.title")}>
      <>
        <p className="text-base leading-relaxed">{t("case.s4.p1")}</p>
      </>
    </Text>,
  ];

  const allProjects = await getProjectsData(locale);
  const gridItems: ProjectGridItem[] = [1, 2, 3, 4].map(
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
