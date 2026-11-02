import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { PricingTable } from "@/components/PricingTable";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useT } from "@/utils/translation-server";

const Pricing = async () => {
  const t = await useT("PricingPage");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-[0.16em]">
            {t("pricingPage.badge")}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            {t("pricingPage.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("pricingPage.lead")}
          </p>
        </div>
      </section>

      <main>
        {/* Карточки пакетов в виде сервисов */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <Services />
          </div>
        </section>

        {/* Детальная таблица сравнения */}
        <PricingTable />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Pricing;
