import { FAQ } from "@/components/FAQ";
import { useT } from "@/utils/translation-server";

export const LandingFAQ = async () => {
  const t = await useT("FAQ");
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
    { q: t("faq.q9"), a: t("faq.a9") },
    { q: t("faq.q10"), a: t("faq.a10") },
    { q: t("faq.q11"), a: t("faq.a11") },
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-16">
          {t("faq.title")}
        </h2>
        {FAQ(faqs)}
      </div>
    </section>
  );
};
