import { ProjectGridItem } from "@/components/project/ProjectGrid";
import { getProjectsData } from "@/data/projectsData";
import { getLocaleFromRequest } from "@/utils/translation-server";
import TemplateProjectPage from "@/components/project/TemplateProjectPage";
import TextWithImage from "@/components/project/slots/TextWithImage";
import TextWithGridImages from "@/components/project/slots/TextWithGridImages";
import Text from "@/components/project/slots/Text";
import heroImage from "@/assets/project1/project1.webp";
import competitors from "@/assets/project1/competitors.webp";
import result1 from "@/assets/project1/result1.webp";
import result2 from "@/assets/project1/result2.webp";
import { useT } from "@/utils/translation-server";

const toSrc = (img: any): string =>
  typeof img === "string" ? img : (img?.src ?? "");

const Project = async () => {
  const locale = await getLocaleFromRequest();
  const t = await useT("CaseDikayaNails");
  const heroT = await useT("ProjectHero");
  const casesT = await useT("Cases");

  const hero = {
    title: "DIKAYA NAILS",
    badges: [
      t("case.hero.badge1"),
      t("case.hero.badge2"),
      t("case.hero.badge3"),
    ],
    year: "2025",
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
    <Text key="s1" title={t("case.s1.title")}>
      <>
        <p className="text-base leading-relaxed mb-8">
          {t("case.s1.p1.a")}
          <span className="font-bold">{t("case.s1.p1.b")}</span>
          {t("case.s1.p1.c")}
        </p>
        <p className="text-base leading-relaxed">
          {t("case.s1.p2.a")}
          <span className="font-bold">{t("case.s1.p2.b")}</span>
          {t("case.s1.p2.c")}
          <span className="font-bold">{t("case.s1.p2.d")}</span>
          {t("case.s1.p2.e")}
        </p>
      </>
    </Text>,
    <Text key="s2" title={t("case.s2.title")}>
      <>
        <p className="text-base leading-relaxed">{t("case.s2.p1")}</p>
        <div className="text-base leading-relaxed mt-4">
          {t("case.s2.p2")}
          <br></br>
          <ul className="list-disc list-inside ">
            <li>{t("case.s2.li1")}</li>
            <li>{t("case.s2.li2")}</li>
            <li>{t("case.s2.li3")}</li>
            <li>{t("case.s2.li4")}</li>
          </ul>
        </div>
      </>
    </Text>,
    <TextWithImage
      key="s3"
      title={t("case.s3.title")}
      image={toSrc(competitors)}
      aspectClass="aspect-[3/2]"
    >
      <>
        <ul className="list-disc list-inside ">
          <li>
            <span className="font-bold">{t("case.s3.li1.a")}</span>
            {t("case.s3.li1.b")}
          </li>
          <li>
            <span className="font-bold">{t("case.s3.li2.a")}</span>
            {t("case.s3.li2.b")}
            <span className="font-bold">{t("case.s3.li2.c")}</span>
            {t("case.s3.li2.d")}
          </li>
          <li>
            <span className="font-bold">{t("case.s3.li3.a")}</span>
            {t("case.s3.li3.b")}
          </li>
        </ul>
      </>
    </TextWithImage>,
    <TextWithGridImages
      key="s4"
      title={t("case.s4.title")}
      images={[toSrc(result1), toSrc(result2)]}
      aspectClass="aspect-[1.8/2]"
    >
      <>
        <div className="loading-relaxed">
          <h3 className="text-2xl font-bold mb-4 mt-8">{t("case.s4.h1")}</h3>
          <p className="text-base leading-relaxed">
            {t("case.s4.p1.a")}
            <span className="font-bold">{t("case.s4.p1.b")}</span>
            {t("case.s4.p1.c")}
          </p>
          <ul className="list-disc list-inside ">
            <li>{t("case.s4.li1")}</li>
            <li>{t("case.s4.li2")}</li>
            <li>{t("case.s4.li3")}</li>
          </ul>
        </div>
        <div className="loading-relaxed">
          <h3 className="text-2xl font-bold mb-4 mt-8">{t("case.s4.h2")}</h3>
          <p className="text-base leading-relaxed">
            {t("case.s4.p2.a")}
            <span className="font-bold">{t("case.s4.p2.b")}</span>
            {t("case.s4.p2.c")}
          </p>
          <ul className="list-disc list-inside ">
            <li>{t("case.s4.li4")}</li>
            <li>{t("case.s4.li5")}</li>
            <li>{t("case.s4.li6")}</li>
            <li>{t("case.s4.li7")}</li>
          </ul>
        </div>
        <div className="loading-relaxed">
          <h3 className="text-2xl font-bold mb-4 mt-8">{t("case.s4.h3")}</h3>
          <p className="text-base leading-relaxed">{t("case.s4.p3")}</p>

          <ul className="list-disc list-inside ">
            <li>
              {t("case.s4.li8.a")}
              <span className="font-bold">{t("case.s4.li8.b")}</span>
              {t("case.s4.li8.c")}
            </li>
            <li>{t("case.s4.li9")}</li>
            <li>
              {t("case.s4.li10.a")}
              <span className="font-bold">{t("case.s4.li10.b")}</span>
              {t("case.s4.li10.c")}
            </li>
            <li>{t("case.s4.li11")}</li>
          </ul>
        </div>
      </>
    </TextWithGridImages>,
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
