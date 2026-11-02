import React from "react";
import { Badge } from "@/components/ui/badge";

export type ProjectHeroProps = {
  title: string;
  badges: string[];
  year: string | number;
  industry: string;
  client: string;
  duration: string;
  heroImage: string;
  children?: React.ReactNode; // description slot
  aspectClass?: string;
  labels: {
    year: string;
    industry: string;
    client: string;
    duration: string;
  };
};

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  badges,
  year,
  industry,
  client,
  duration,
  heroImage,
  children,
  aspectClass,
  labels,
}) => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {/* Service badges */}
          <div className="flex gap-3 flex-wrap">
            {badges.map((b, i) => (
              <Badge key={i} variant="secondary">
                {b}
              </Badge>
            ))}
          </div>

          {/* Company name */}
          <h1 className="text-5xl font-bold text-foreground sm:text-[120px]">
            {title}
          </h1>

          {/* Description slot */}
          {children && <div className="text-base max-w-4xl">{children}</div>}

          {/* Project details in columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {labels.year}
              </div>
              <div className="text-sm font-semibold text-primary">{year}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {labels.industry}
              </div>
              <div className="text-sm font-semibold text-primary">
                {industry}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {labels.client}
              </div>
              <div className="text-sm font-semibold text-primary">{client}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {labels.duration}
              </div>
              <div className="text-sm font-semibold text-primary">
                {duration}
              </div>
            </div>
          </div>

          {/* Big image */}
          <div className="pt-8">
            <img
              src={heroImage}
              alt="Project showcase"
              className={
                aspectClass
                  ? aspectClass
                  : "max-w-full h-auto rounded-3xl shadow-lg"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
