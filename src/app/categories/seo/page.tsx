import { ScrollToContactForm } from "@/components/ScrollToContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FAQ } from "@/components/FAQ";
import { CheckCircle, TrendingUp, Trophy } from "lucide-react";
import HowToChecklist from "@/components/HowToChecklist";
import BackBtn from "@/components/BackBtn";
import { useT } from "@/utils/translation-server";

const ServiceMarketLeader = async () => {
  const HOWTO_STORAGE_KEY = "marketLeaderHowToChecks";
  const t = await useT("CategorySeo");
  const steps = t("howToSteps");

  return (
    <>
      <Header />
      <section className="bg-background pt-12">
        <div className="container mx-auto px-4">
          <BackBtn
            text={t("backBtn").text}
            alternative={t("backBtn").alternative}
          />
          <h1 className="text-4xl md:text-4xl font-semibold text-foreground mb-4">
            {t("hero").title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t("hero").intro}
          </p>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
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
                {t("sections").synergyTitle}
              </h2>
              <p className="text-muted-foreground">
                {t("sections").synergyBody}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {t("sections").synergyBullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
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

            <section className="space-y-3">
              {/* Pricing table before DIY section */}
              <div className="my-12">
                <PricingTable highlightedPackage={t("highlightedPackage")} />
              </div>
            </section>
          </div>
        </div>
        {/* Contact section (full-width, outside container) */}
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
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ServiceMarketLeader;
