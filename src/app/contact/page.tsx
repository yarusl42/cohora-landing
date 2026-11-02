import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useT } from "@/utils/translation-server";

const ContactPage = async () => {
  const t = await useT("ContactPage");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-[0.16em]">
            {t("contactPage.badge")}
          </p>
          <h1 className="text-4xl font-medium text-foreground mb-4">
            {t("contactPage.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("contactPage.lead")}
          </p>
        </div>
      </section>

      {/* Форма контакта */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
