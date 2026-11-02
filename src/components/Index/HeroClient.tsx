"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Check } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

export type HeroClientStrings = {
  badge: string;
  titleBefore: string;
  titleEmphasis: string;
  titleAfter: string;
  p1: string;
  p2: string;
  benefits: string[];
  cta: string;
  imageAlt: string;
};

type HeroClientProps = {
  strings: HeroClientStrings;
  heroImg: StaticImageData | string;
};

export default function HeroClient({ strings, heroImg }: HeroClientProps) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <MapPin className="w-4 h-4" />
          {strings.badge}
        </div>

        <h1 className="mb-4 mt-4 text-4xl font-medium text-foreground max-w-[820px]">
          {strings.titleBefore}{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {strings.titleEmphasis}
          </span>{" "}
          {strings.titleAfter}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="space-y-8 text-start mt-4">
            <div className="space-y-4 text-[18px]">
              <p>{strings.p1}</p>
              <p className="text-[18px]">{strings.p2}</p>
            </div>

            <div className="max-w-3xl pt-1 space-y-3">
              {strings.benefits.map((text, index) => (
                <div key={index} className="flex gap-3 text-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-sm md:text-base font-medium text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-start">
              <Button
                variant="hero"
                size="xl"
                className="shadow-md hover:shadow-lg"
                onClick={scrollToContact}
              >
                {strings.cta}
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <Image
              src={heroImg}
              alt={strings.imageAlt}
              className="h-auto w-full max-w-[360px] md:max-w-[440px] lg:max-w-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
