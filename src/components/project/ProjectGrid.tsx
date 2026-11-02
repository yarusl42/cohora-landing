"use client";

import React from "react";

export type ProjectGridItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
};

type ProjectGridProps = {
  items: ProjectGridItem[];
  title?: string;
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ items, title }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <h2 className="text-4xl font-bold text-foreground mb-12">{title}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
