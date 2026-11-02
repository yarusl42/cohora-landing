import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useT } from "@/utils/translation-server";

export default async function PrivacyAppPage() {
  const t = await useT("Privacy");
  const contactT = await useT("ContactPage");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10 prose prose-neutral dark:prose-invert">
        <h1>{t("privacy.title")}</h1>
        <p>{t("privacy.intro")}</p>
        <h2>{t("privacy.collect.title")}</h2>
        <ul>
          <li>{t("privacy.collect.li1")}</li>
          <li>{t("privacy.collect.li2")}</li>
          <li>{t("privacy.collect.li3")}</li>
        </ul>
        <h2>{t("privacy.purposes.title")}</h2>
        <ul>
          <li>{t("privacy.purposes.li1")}</li>
          <li>{t("privacy.purposes.li2")}</li>
          <li>{t("privacy.purposes.li3")}</li>
        </ul>
        <h2>{t("privacy.thirdParties.title")}</h2>
        <p>{t("privacy.thirdParties.body")}</p>
        <h2>{t("privacy.storage.title")}</h2>
        <p>{t("privacy.storage.body")}</p>
        <h2>{t("privacy.contact.title")}</h2>
        <p>
          {t("privacy.contact.bodyPrefix")} {contactT("contact.email")}
        </p>
        <p className="text-sm text-muted-foreground">{t("privacy.updated")}</p>
      </main>
      <Footer />
    </div>
  );
}
