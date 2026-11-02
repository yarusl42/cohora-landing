import { ProjectGridItem } from "@/components/project/ProjectGrid";
import { getProjectsData } from "@/data/projectsData";
import { getLocaleFromRequest } from "@/utils/translation-server";
import TemplateProjectPage from "@/components/project/TemplateProjectPage";
import TextWithImage from "@/components/project/slots/TextWithImage";
import TextWithVideo from "@/components/project/slots/TextWithVideo";
import Text from "@/components/project/slots/Text";
import videoPoster from "@/assets/project3/video_poster.webp";
import speedImage from "@/assets/project3/speed.webp";
import heroImage from "@/assets/project3/project3.webp";
import { useT } from "@/utils/translation-server";

const toSrc = (img: any): string =>
  typeof img === "string" ? img : (img?.src ?? "");

const Project = async () => {
  const locale = await getLocaleFromRequest();
  const t = await useT("CaseAzurePrestige");
  const heroT = await useT("ProjectHero");
  const casesT = await useT("Cases");

  const hero = {
    title: "Azure Prestige",
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
    <Text key="s1" title={t("case.s1.title")}>
      <>
        <p className="text-base leading-relaxed mb-6">
          {t("case.s1.p1.a")}
          <span className="font-bold">{t("case.s1.p1.b")}</span>
          {t("case.s1.p1.c")}
        </p>
        <p className="text-base leading-relaxed">
          {t("case.s1.p2.a")}
          <span className="font-bold">{t("case.s1.p2.b")}</span>
          {t("case.s1.p2.c")}
        </p>
      </>
    </Text>,
    <TextWithVideo
      key="s0"
      title={t("case.s0.title")}
      sources={[
        { src: "/videos/azure-video-trimmed.mp4", type: "video/mp4" },
        { src: "/videos/azure-video-trimmed.webm", type: "video/webm" },
      ]}
      poster={toSrc(videoPoster)}
      autoPlay
      muted
      loop
      playsInline
      controls
    >
      <>
        <ul className="list-disc list-inside mt-4">
          <li>{t("case.s0.li1")}</li>
          <li>{t("case.s0.li2")}</li>
          <li>{t("case.s0.li3")}</li>
          <li>{t("case.s0.li4")}</li>
        </ul>
      </>
    </TextWithVideo>,
    <TextWithImage
      key="s3"
      title={t("case.s3.title")}
      aspectClass="h-full"
      image={toSrc(speedImage)}
    >
      <>
        <p className="text-base leading-relaxed">
          {t("case.s3.p1.a")}
          <span className="font-bold">{t("case.s3.p1.b")}</span>
          {t("case.s3.p1.c")}
        </p>

        <ul className="list-disc list-inside mt-4">
          <li>{t("case.s3.li1")}</li>
          <li>{t("case.s3.li2")}</li>
          <li>{t("case.s3.li3")}</li>
          <li>{t("case.s3.li4")}</li>
        </ul>
      </>
    </TextWithImage>,
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
