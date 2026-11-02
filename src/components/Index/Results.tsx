import { TrendingUp, Eye, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useT } from "@/utils/translation-server";

export const Results = async () => {
  const t = await useT("Results");

  const results = [
    {
      icon: Phone,
      title: t("results.r1.title"),
      description: t("results.r1.desc"),
    },
    {
      icon: Eye,
      title: t("results.r2.title"),
      description: t("results.r2.desc"),
    },
    {
      icon: TrendingUp,
      title: t("results.r3.title"),
      description: t("results.r3.desc"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-foreground mb-12">
          {t("results.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center shadow-none border-none transition-all hover:-translate-y-1 bg-primary/5 relative"
              >
                <div className="inline-flex p-4 rounded-full bg-white mb-4 absolute top-[-35px] left-4 shadow-md border border-gray-100">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-10 text-foreground">
                  {result.title}
                </h3>
                <p className="text-muted-foreground">{result.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
