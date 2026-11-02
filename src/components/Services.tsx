import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Map, TrendingUp, Trophy, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useT, useTPath } from "@/utils/translation-server";

export const Services = async () => {
  const tPath = await useTPath();
  const t = await useT("Services");

  const services = [
    {
      icon: Rocket,
      title: t("services.pkg.1.title"),
      price: "$100",
      period: t("services.pkg.1.period"),
      badge: t("services.pkg.1.badge"),
      routeKey: "categories/maps",
      description: t("services.pkg.1.desc"),
      features: [
        t("services.pkg.1.f1"),
        t("services.pkg.1.f2"),
        t("services.pkg.1.f3"),
      ],
      results: [t("services.pkg.1.r1"), t("services.pkg.1.r2") || ""],
    },
    {
      icon: Map,
      title: t("services.pkg.2.title"),
      price: "$233",
      period: t("services.pkg.2.period"),
      altPrice: t("services.pkg.2.altPrice") || undefined,
      badge: t("services.pkg.2.badge"),
      routeKey: "categories/website",
      description: t("services.pkg.2.desc"),
      features: [
        t("services.pkg.2.f1"),
        t("services.pkg.2.f2"),
        t("services.pkg.2.f3"),
      ],
      results: [t("services.pkg.2.r1"), t("services.pkg.2.r2") || ""],
      note: t("services.pkg.2.note") || undefined,
    },
    {
      icon: TrendingUp,
      title: t("services.pkg.3.title"),
      price: "$300",
      period: t("services.pkg.3.period"),
      badge: t("services.pkg.3.badge"),
      routeKey: "categories/reputation",
      description: t("services.pkg.3.desc"),
      features: [
        t("services.pkg.3.f1"),
        t("services.pkg.3.f2"),
        t("services.pkg.3.f3"),
      ],
      results: [t("services.pkg.3.r1"), t("services.pkg.3.r2") || ""],
      note: t("services.pkg.3.note") || undefined,
    },
    {
      icon: Trophy,
      title: t("services.pkg.4.title"),
      price: "$700–900",
      period: t("services.pkg.4.period"),
      badge: t("services.pkg.4.badge"),
      routeKey: "categories/seo",
      description: t("services.pkg.4.desc"),
      features: [
        t("services.pkg.4.f1"),
        t("services.pkg.4.f2"),
        t("services.pkg.4.f3"),
        t("services.pkg.4.f4"),
      ],
      results: [
        t("services.pkg.4.r1"),
        t("services.pkg.4.r2"),
        t("services.pkg.4.r3"),
      ],
      note: t("services.pkg.4.note") || undefined,
    },
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-16">
          {t("services.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border-border hover:shadow-lg transition-all`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline">{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                {service.note && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {service.note}
                  </p>
                )}
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground">
                      / {service.period}
                    </span>
                  </div>
                  {service.altPrice && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("services.or")} {service.altPrice}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">
                    {t("services.section.do")}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">
                    {t("services.section.get")}
                  </p>
                  <ul className="space-y-2">
                    {service.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-accent font-medium"
                      >
                        <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/${tPath(service.routeKey)}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    {t("services.cta.more")}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
