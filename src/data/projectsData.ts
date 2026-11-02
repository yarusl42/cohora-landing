import { ProjectGridItem } from "@/components/project/ProjectGrid";
import project1 from "@/assets/project1/project1.webp";
import project2 from "@/assets/project2/project2.webp";
import project3 from "@/assets/project3/project3.webp";
import project4 from "@/assets/project4/hero.webp";
import project5 from "@/assets/project5/hero.webp";
import { defaultLocale, type SupportedLanguage } from "config/config";
import { getDictionary, getTranslatedPath } from "@/utils/translation-utils";

// Normalize imported images to string URLs whether the bundler returns a string or an object with .src
const toSrc = (img: unknown): string =>
  typeof img === "string" ? img : ((img as { src?: string } | null)?.src ?? "");

type ProjectData = {
  id: number;
  title: string;
  description: string; // Now a translation key
  image: string;
  href: string;
};

const projects: ProjectData[] = [
  {
    id: 0,
    title: "DIKAYA NAILS",
    description: "projects.dikayaNails.description",
    href: "cases/dikaya-nails",
    image: toSrc(project1),
  },
  {
    id: 1,
    title: "Dr. Adamskaya",
    description: "projects.drAdamskaya.description",
    href: "cases/dr-adamskaya",
    image: toSrc(project2),
  },
  {
    id: 2,
    title: "Azure Prestige",
    description: "projects.azurePrestige.description",
    href: "cases/azure-prestige",
    image: toSrc(project3),
  },
  {
    id: 3,
    title: "Future Tech School",
    description: "projects.futureTechSchool.description",
    href: "cases/fts",
    image: toSrc(project4),
  },
  {
    id: 4,
    title: "Legal Buddy",
    description: "projects.legalBuddy.description",
    href: "cases/legal-buddy",
    image: toSrc(project5),
  },
];

export const getProjectsData = async (
  locale: SupportedLanguage = defaultLocale,
): Promise<ProjectGridItem[]> => {
  const messages = await getDictionary("Cases", locale);
  const t = (key: string) => (messages as Record<string, string>)[key] || key;
  return projects.map((project) => {
    const translatedPath = getTranslatedPath(project.href, locale);
    return {
      id: project.id,
      title: project.title,
      description: t(project.description) || project.description,
      image: project.image,
      href: translatedPath ? `/${translatedPath}` : `/${project.href}`,
    };
  });
};
