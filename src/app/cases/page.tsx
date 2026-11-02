import ProjectGrid, { ProjectGridItem } from "@/components/project/ProjectGrid";
import { getProjectsData } from "@/data/projectsData";
import { getLocaleFromRequest, useT } from "@/utils/translation-server";

export default async function Projects() {
  const locale = await getLocaleFromRequest();
  const t = await useT("Cases");
  const allProjects = await getProjectsData(locale);
  const gridItems: ProjectGridItem[] = [1, 2, 0, 3, 4].map(
    (i) => allProjects[i],
  ) as ProjectGridItem[];

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6">
      <ProjectGrid
        items={gridItems}
        title={t("cases.otherProjects") || "Other projects"}
      />
    </main>
  );
}
