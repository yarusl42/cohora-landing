import {
  Target,
  Users,
  Award,
  BarChart3,
  Shield,
  Headphones,
} from "lucide-react";
import { useT } from "@/utils/translation-server";

export const Benefits = async () => {
  const t = await useT("Benefits");

  const benefits = [
    {
      icon: Target,
      title: t("benefits.b1.title"),
      description: t("benefits.b1.desc"),
    },
    {
      icon: Users,
      title: t("benefits.b2.title"),
      description: t("benefits.b2.desc"),
    },
    {
      icon: Award,
      title: t("benefits.b3.title"),
      description: t("benefits.b3.desc"),
    },
    {
      icon: BarChart3,
      title: t("benefits.b4.title"),
      description: t("benefits.b4.desc"),
    },
    {
      icon: Shield,
      title: t("benefits.b5.title"),
      description: t("benefits.b5.desc"),
    },
    {
      icon: Headphones,
      title: t("benefits.b6.title"),
      description: t("benefits.b6.desc"),
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-16">
          {t("benefits.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-all border border-primary group"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
