import { AlertCircle, Star, FileCheck, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useT } from "@/utils/translation-server";

export const WhyNotEnough = async () => {
  const t = await useT("WhyNotEnough");

  const reasons = [
    {
      icon: AlertCircle,
      title: t("whyNotEnough.r1.title"),
      description: t("whyNotEnough.r1.desc"),
    },
    {
      icon: Star,
      title: t("whyNotEnough.r2.title"),
      description: t("whyNotEnough.r2.desc"),
    },
    {
      icon: FileCheck,
      title: t("whyNotEnough.r3.title"),
      description: t("whyNotEnough.r3.desc"),
    },
    {
      icon: Target,
      title: t("whyNotEnough.r4.title"),
      description: t("whyNotEnough.r4.desc"),
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-foreground mb-12">
          {t("whyNotEnough.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="p-6 border-none bg-transparent shadow-none  bg-primary/10"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg ">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto ">
          <p className="text-lg text-foreground leading-relaxed">
            {t("whyNotEnough.p1")}
          </p>
          <p className="text-lg text-foreground leading-relaxed mt-4">
            {t("whyNotEnough.p2")}
          </p>
        </div>
      </div>
    </section>
  );
};
