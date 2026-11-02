"use client";

import { Check, X } from "lucide-react";
import { Fragment } from "react";

export type PricingPackage = {
  name: string;
  price: string;
  period: string;
  description: string;
  url: string;
  highlight?: boolean;
  altPrice?: string;
};

export type PricingServiceItem = {
  name: string;
  values: Array<boolean | string>;
};

export type PricingServiceCategory = {
  category: string;
  items: PricingServiceItem[];
};

export type PricingTableClientStrings = {
  title: string;
  subtitle: string;
  colService: string;
  more: string;
  consultPrompt: string;
  consultCta: string;
};

type PricingTableClientProps = {
  highlightedPackage?: string;
  strings: PricingTableClientStrings;
  packages: PricingPackage[];
  services: PricingServiceCategory[];
};

export default function PricingTableClient({
  highlightedPackage,
  strings,
  packages,
  services,
}: PricingTableClientProps) {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <Check className="w-5 h-5 text-accent" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <X className="w-5 h-5 text-muted-foreground/30" />
        </div>
      );
    }
    return (
      <div className="text-center text-sm font-medium text-foreground">
        {value}
      </div>
    );
  };

  const handleConsultClick = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <section id="pricing-table" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {strings.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {strings.subtitle}
          </p>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-start font-semibold text-foreground w-1/5">
                  {strings.colService}
                </th>
                {packages.map((pkg, idx) => {
                  const isHighlighted =
                    pkg.highlight || pkg.name === highlightedPackage;
                  return (
                    <th
                      key={idx}
                      className={`p-4 text-center ${isHighlighted ? "bg-primary/5" : ""}`}
                    >
                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">
                          {pkg.name}
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {pkg.price}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {pkg.period}
                        </div>
                        {pkg.altPrice && (
                          <div className="text-xs text-muted-foreground">
                            {pkg.altPrice}
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground pt-1">
                          {pkg.description}
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-background/60">
                <td className="p-3 text-sm text-muted-foreground">
                  {strings.more}
                </td>
                {packages.map((pkg, idx) => {
                  const isHighlighted =
                    pkg.highlight || pkg.name === highlightedPackage;
                  return (
                    <td key={idx} className="p-3 text-center">
                      {!isHighlighted && (
                        <a
                          href={pkg.url}
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4"
                        >
                          {strings.more}
                        </a>
                      )}
                    </td>
                  );
                })}
              </tr>
              {services.map((category, catIdx) => (
                <Fragment key={`cat-${catIdx}`}>
                  <tr className="bg-muted/50">
                    <td
                      colSpan={5}
                      className="p-3 font-semibold text-sm text-foreground"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIdx) => (
                    <tr
                      key={`item-${catIdx}-${itemIdx}`}
                      className="border-b border-border hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-4 text-sm text-muted-foreground">
                        {item.name}
                      </td>
                      {item.values.map((value, valIdx) => {
                        const pkg = packages[valIdx];
                        const isHighlighted =
                          pkg.highlight || pkg.name === highlightedPackage;
                        return (
                          <td
                            key={valIdx}
                            className={`p-4 ${isHighlighted ? "bg-primary/5" : ""}`}
                          >
                            {renderValue(value)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden space-y-6">
          {packages.map((pkg, pkgIdx) => (
            <div
              key={pkgIdx}
              className={`bg-background rounded-lg shadow-sm p-6 ${pkg.highlight ? "ring-2 ring-primary" : ""}`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {pkg.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {pkg.period}
                </div>
                {pkg.altPrice && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {pkg.altPrice}
                  </div>
                )}
                <div className="text-sm text-muted-foreground mt-2">
                  {pkg.description}
                </div>
              </div>

              {services.map((category, catIdx) => (
                <div key={catIdx} className="mb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.items.map((item, itemIdx) => {
                      const value = item.values[pkgIdx];
                      if (value === false) return null;
                      return (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-2 text-sm"
                        >
                          {value === true ? (
                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          ) : (
                            <span className="text-primary font-medium flex-shrink-0">
                              {value}
                            </span>
                          )}
                          <span className="text-muted-foreground">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-2 flex justify-center">
                <a
                  href={pkg.url}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
                >
                  {strings.more}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            {strings.consultPrompt}
          </p>
          <button
            type="button"
            onClick={handleConsultClick}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
          >
            {strings.consultCta}
          </button>
        </div>
      </div>
    </section>
  );
}
