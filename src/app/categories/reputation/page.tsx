import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FAQ } from "@/components/FAQ";
import { ScrollToContactForm } from "@/components/ScrollToContactForm";
import { CheckCircle, TrendingUp, TrendingUp as TrendIcon } from "lucide-react";
import HowToChecklist from "@/components/HowToChecklist";
import { CostChart } from "@/components/CostChart";
import BackBtn from "@/components/BackBtn";
import { useT } from "@/utils/translation-server";

const ServiceSteadyFlow = async () => {
  const HOWTO_STORAGE_KEY = "steadyFlowHowToChecks";
  const t = await useT("CategoryReputation");
  const steps = t("howToSteps");
  const chartConfig = t("chart");

  // Extract only the string properties for the client component
  const chart = {
    title: chartConfig.title,
    xTickMonthSuffix: chartConfig.xTickMonthSuffix,
    tooltipMonthLabel: chartConfig.tooltipMonthLabel,
    legendSeo: chartConfig.legendSeo,
    legendPpc: chartConfig.legendPpc,
    currencySuffix: chartConfig.currencySuffix,
  };

  const costData = [
    { month: "0", seo: 2.5, ppc: 2 },
    { month: "1", seo: 1.9, ppc: 2 },
    { month: "2", seo: 1.3, ppc: 2 },
    { month: "3", seo: 0.85, ppc: 2 },
    { month: "4", seo: 0.6, ppc: 2 },
    { month: "5", seo: 0.4, ppc: 2 },
    { month: "6", seo: 0.3, ppc: 2 },
  ];

  return (
    <>
      <Header />
      <section className="bg-background pt-12">
        <div className="container mx-auto px-4">
          <BackBtn
            text={t("backBtn").text}
            alternative={t("backBtn").alternative}
          />
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            {t("hero").title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t("hero").intro}
          </p>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl text-foreground">
                  {t("card").title}
                </CardTitle>
                <p className="text-muted-foreground">{t("card").subtitle}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-foreground mb-2">
                  {t("card").forWhoTitle}
                </p>
                <p className="text-muted-foreground">{t("card").forWhoBody}</p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">
                  {t("card").doTitle}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {t("card").doItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">
                  {t("card").getTitle}
                </p>
                <ul className="space-y-2 text-accent font-medium">
                  {t("card").getItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {t("card").note && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {t("card").note}
                  </p>
                )}
              </div>

              <div className="pt-2 flex justify-between items-center">
                <p className="text-muted-foreground">
                  {t("card").costLabel}{" "}
                  <span className="font-semibold text-foreground">
                    {t("card").costValue}
                  </span>
                </p>
                <ScrollToContactForm variant="hero">
                  {t("card").cta}
                </ScrollToContactForm>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 space-y-12">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").changesTitle}
              </h2>
              <p className="text-muted-foreground">
                {t("sections").changesBody}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {t("sections").changesBullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").machineTitle}
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                {t("sections").machineItems.map((it, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-foreground">
                      {it.title}
                    </span>
                    {it.bullets && (
                      <ul className="mt-1 list-disc list-inside space-y-1">
                        {it.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {it.body && <p className="mt-1">{it.body}</p>}
                    {it.extra && <p className="mt-1">{it.extra}</p>}
                  </li>
                ))}
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").whySeoTitle}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 items-start text-muted-foreground">
                <div className="space-y-2">
                  {t("sections").whySeoBody.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <CostChart data={costData} chart={chart} />
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").semanticTitle}
              </h2>
              <p className="text-muted-foreground">
                {t("sections").semanticIntro}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {t("sections").semanticBullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                {t("sections").semanticExample}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").processTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {t("sections").processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-border bg-card p-4 md:p-5 flex flex-col gap-1"
                  >
                    <div className="text-4xl font-semibold text-primary/50 font-mono">
                      {step.number}.
                    </div>
                    <div className="text-base font-semibold text-foreground">
                      {step.title}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").fromYouTitle}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t("sections").fromYouItems.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").mistakesTitle}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t("sections").mistakesItems.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").faqTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {FAQ(t("sections").faqItems)}
              </div>
            </section>
            <div className="my-12">
              <PricingTable highlightedPackage={t("highlightedPackage")} />
            </div>
          </div>
        </div>
        <ContactForm />

        <div className="container mx-auto px-4">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("sections").diyTitle}
            </h2>
            <p className="text-muted-foreground">{t("sections").diyIntro}</p>

            <div className="space-y-4 text-muted-foreground">
              <HowToChecklist steps={steps} storageKey={HOWTO_STORAGE_KEY} />
            </div>

            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">
                {t("sections").monthlyAlgoTitle}
              </p>
              <ul className="list-disc list-inside space-y-1">
                {t("sections").monthlyAlgoItems.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>
          </section>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ServiceSteadyFlow;
