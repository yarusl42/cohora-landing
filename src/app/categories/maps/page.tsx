import { ScrollToContactForm } from "@/components/ScrollToContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Rocket } from "lucide-react";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FAQ } from "@/components/FAQ";
import HowToChecklist from "@/components/HowToChecklist";
import BackBtn from "@/components/BackBtn";
import { useT } from "@/utils/translation-server";

const ServiceFastStart = async () => {
  const HOWTO_STORAGE_KEY = "fastStartHowToChecks";
  const t = await useT("CategoryMaps");
  const steps = t("howToSteps");

  return (
    <>
      <Header />
      <section className="bg-background pt-12">
        <div className="container mx-auto px-4">
          <BackBtn
            alternative={t("backBtn").alternative}
            text={t("backBtn").text}
          />
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            {t("hero").title}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {t("hero").intro}
          </p>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-primary" />
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
                  {t("card").sectionChangesTitle}
                </p>
                <p className="text-muted-foreground">
                  {t("card").sectionChangesBody}
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">
                  {t("card").sectionDoTitle}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {t("card").sectionDoItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">
                  {t("card").sectionGetTitle}
                </p>
                <ul className="space-y-2 text-accent font-medium">
                  {t("card").sectionGetItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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

          <div className="mt-10 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("work").title}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {t("work").steps.map((step) => (
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
                {t("prep").title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t("prep").items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("afterLaunch").title}
              </h2>
              {t("afterLaunch").paragraphs.map((p, idx) => (
                <p key={idx} className="text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("timeline").title}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {t("timeline").items.map((it, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-foreground">
                      {it.label}
                    </span>{" "}
                    {it.text}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("mistakes").title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t("mistakes").items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t("mistakes").closing}</p>
            </section>

            <section className="space-y-3">
              {/* Pricing table before DIY section */}
              <div className="my-12">
                <PricingTable highlightedPackage={t("card").title} />
              </div>
            </section>

            {/* Contact section (full-width, outside container) */}
          </div>
        </div>
        <ContactForm />
        <div className="container mx-auto px-4 space-y-12">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("diy").title}
            </h2>
            <p className="text-muted-foreground">{t("diy").intro}</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              {t("diy").items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="text-muted-foreground">{t("diy").closing}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("nap").title}
            </h2>
            <p className="text-muted-foreground">{t("nap").intro}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {t("nap").bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <p className="text-muted-foreground">{t("nap").closing}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("whereWeLook").title}
            </h2>
            <p className="text-muted-foreground">{t("whereWeLook").intro}</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {t("whereWeLook").items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground">{t("whereWeLook").closing}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("additional").title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {t("additional").blocks.map((block, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-foreground mb-1">
                    {block.title}
                  </p>
                  {block.items && (
                    <ul className="list-disc list-inside space-y-1">
                      {block.items.map((it, itIdx) => (
                        <li key={itIdx}>{it}</li>
                      ))}
                    </ul>
                  )}
                  {block.body && <p>{block.body}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("faq").title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {FAQ(t("faq").items)}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("howto").title}
            </h2>
            <p className="text-muted-foreground">{t("howto").intro}</p>

            <HowToChecklist steps={steps} storageKey={HOWTO_STORAGE_KEY} />
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ServiceFastStart;
