import React from "react";
import ProjectHero from "@/components/project/slots/ProjectHero";
import ProjectGrid, { ProjectGridItem } from "@/components/project/ProjectGrid";

export type TemplateProjectHeroProps = {
  title: string;
  badges: string[];
  year: string | number;
  industry: string;
  client: string;
  duration: string;
  heroImage: string;
  children?: React.ReactNode; // hero description slot
  aspectClass?: string;
};

export type TemplateProjectPageProps = {
  hero: TemplateProjectHeroProps;
  sections?: React.ReactNode[]; // array of pre-built section blocks to render in order
  gridItems: ProjectGridItem[];
  heroLabels: {
    year: string;
    industry: string;
    client: string;
    duration: string;
  };
  gridTitle?: string;
};

const TemplateProjectPage: React.FC<TemplateProjectPageProps> = ({
  hero,
  sections = [],
  gridItems,
  heroLabels,
  gridTitle,
}) => {
  return (
    <div className="min-h-screen relative bg-background">
      <ProjectHero
        title={hero.title}
        badges={hero.badges}
        year={String(hero.year)}
        industry={hero.industry}
        client={hero.client}
        duration={hero.duration}
        heroImage={hero.heroImage}
        aspectClass={hero.aspectClass}
        labels={heroLabels}
      >
        {hero.children}
      </ProjectHero>

      {sections.map((section, idx) => (
        <React.Fragment key={idx}>{section}</React.Fragment>
      ))}

      <ProjectGrid items={gridItems} title={gridTitle} />
    </div>
  );
};

export default TemplateProjectPage;
