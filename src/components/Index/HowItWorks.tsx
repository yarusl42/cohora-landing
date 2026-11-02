import { MapPinned, Globe, Star, Network, TrendingUp } from "lucide-react";
import { useT } from "@/utils/translation-server";

export const HowItWorks = async () => {
  const t = await useT("HowItWorks");

  const steps = [
    {
      icon: MapPinned,
      title: t("how.s1.title"),
      description: t("how.s1.desc"),
      result: t("how.s1.result"),
    },
    {
      icon: Globe,
      title: t("how.s2.title"),
      description: t("how.s2.desc"),
      result: "",
    },
    {
      icon: Star,
      title: t("how.s3.title"),
      description: t("how.s3.desc"),
      result: "",
    },
    {
      icon: Network,
      title: t("how.s4.title"),
      description: t("how.s4.desc"),
      result: "",
    },
    {
      icon: TrendingUp,
      title: t("how.s5.title"),
      description: t("how.s5.desc"),
      result: "",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-foreground mb-12">
          {t("how.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-all border border-primary group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Number and Icon */}
                <div className="flex-shrink-0">
                  <div className="relative w-min pr-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.result && (
                    <p className="text-accent font-medium flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {step.result}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
