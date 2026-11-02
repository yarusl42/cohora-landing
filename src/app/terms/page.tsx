import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useT } from "@/utils/translation-server";

export default async function TermsAppPage() {
  const t = await useT("Terms");
  const contactT = await useT("ContactPage");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10 prose prose-neutral dark:prose-invert">
        <h1>{t("terms.title")}</h1>
        <p>{t("terms.intro")}</p>
        <h2>{t("terms.services.title")}</h2>
        <p>{t("terms.services.body")}</p>
        <h2>{t("terms.liability.title")}</h2>
        <ul>
          <li>{t("terms.liability.li1")}</li>
          <li>{t("terms.liability.li2")}</li>
        </ul>
        <h2>{t("terms.ip.title")}</h2>
        <p>{t("terms.ip.body")}</p>
        <h2>{t("terms.contact.title")}</h2>
        <p>
          {t("terms.contact.bodyPrefix")} {contactT("contact.email")}
        </p>
        <p className="text-sm text-muted-foreground">{t("terms.updated")}</p>
      </main>
      <Footer />
    </div>
  );
}
