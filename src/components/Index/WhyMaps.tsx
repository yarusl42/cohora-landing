import { Map, Star, Phone, TrendingUp, Users, CheckCircle } from "lucide-react";
import { useT } from "@/utils/translation-server";

export const WhyMaps = async () => {
  const t = await useT("WhyMaps");

  const reasons = [
    {
      icon: Map,
      title: t("whyMaps.r1.title"),
      description: t("whyMaps.r1.desc"),
    },
    {
      icon: Star,
      title: t("whyMaps.r2.title"),
      description: t("whyMaps.r2.desc"),
    },
    {
      icon: Users,
      title: t("whyMaps.r3.title"),
      description: t("whyMaps.r3.desc"),
    },
    {
      icon: CheckCircle,
      title: t("whyMaps.r4.title"),
      description: t("whyMaps.r4.desc"),
    },
    {
      icon: Phone,
      title: t("whyMaps.r5.title"),
      description: t("whyMaps.r5.desc"),
    },
    {
      icon: TrendingUp,
      title: t("whyMaps.r6.title"),
      description: t("whyMaps.r6.desc"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div>
          <div className="relative rounded-2xl p-px bg-gradient-to-r from-primary via-accent to-primary/60">
            <div className="rounded-2xl bg-background p-6 md:p-10">
              {/* Header */}
              <div className="space-y-4 mb-16">
                <h2 className="mb-2 mt-4 text-4xl text-foreground">
                  {t("whyMaps.title")}
                </h2>
                <p className="text-lg">{t("whyMaps.lead")}</p>
              </div>

              {/* Reasons Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-xl p-6 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-medium text-foreground">
                            {index + 1}. {reason.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
