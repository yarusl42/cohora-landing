import { ScrollToContactForm } from "@/components/ScrollToContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Map } from "lucide-react";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FAQ } from "@/components/FAQ";
import HowToChecklist from "@/components/HowToChecklist";
import BackBtn from "@/components/BackBtn";
import { useT } from "@/utils/translation-server";

const ServiceLocalPresence = async () => {
  const HOWTO_STORAGE_KEY = "localPresenceHowToChecks";
  const t = await useT("CategoryWebsite");
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
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            {t("hero").title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t("hero").intro}
          </p>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Map className="w-6 h-6 text-primary" />
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
                    {t("card").costPrimary}
                  </span>{" "}
                  <span className="font-semibold text-foreground">
                    {t("card").costAlt}
                  </span>
                </p>
                <ScrollToContactForm variant="hero">
                  {t("card").cta}
                </ScrollToContactForm>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 space-y-12">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("sections").changesTitle}
                </h2>
                <p className="mb-4">{t("sections").changesBody}</p>
                <ul className="list-disc pl-6 space-y-2">
                  {t("sections").changesBullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("sections").synergyTitle}
                </h2>
                <p className="mb-4">{t("sections").synergyBody}</p>
                <ul className="list-disc pl-6 space-y-2">
                  {t("sections").synergyBullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
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
                      <p className="text-sm text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("sections").prepTitle}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {t("sections").prepItems.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("sections").mistakesTitle}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {t("sections").mistakesItems.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("sections").diyTitle}
                </h2>
                <p className="mb-4">{t("sections").diyIntro}</p>
                <ol className="list-decimal pl-6 space-y-2">
                  {t("sections").diyChecklist.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ol>
              </section>
            </div>
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").strongSiteTitle}
              </h2>
              <p className="text-muted-foreground">
                {t("sections").strongSiteIntro}
              </p>

              <div className="space-y-3 text-muted-foreground">
                {t("sections").strongSiteBlocks.map((b, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-foreground mb-1">
                      {b.title}
                    </p>
                    {b.body && <p>{b.body}</p>}
                    {b.extra && <p className="mt-1">{b.extra}</p>}
                    {b.bullets && (
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        {b.bullets.map((it, itIdx) => (
                          <li key={itIdx}>{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("sections").faqTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {FAQ(t("sections").faqItems)}
              </div>
            </section>

            {/* Pricing table before DIY section */}
            <div className="my-12">
              <PricingTable highlightedPackage={t("highlightedPackage")} />
            </div>
          </div>
        </div>
        {/* Contact section (full-width, outside container) */}
        <ContactForm />

        <div className="container mx-auto px-4">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("sections").diyHowToTitle}
            </h2>
            <p className="text-muted-foreground">
              {t("sections").diyHowToIntro}
            </p>

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

export default ServiceLocalPresence;
