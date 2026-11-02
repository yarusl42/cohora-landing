import ContactFormClient from "./ContactFormClient";
import { useT } from "@/utils/translation-server";

export const ContactForm = async () => {
  const t = await useT("ContactForm");
  const strings = {
    title: t("contactForm.title"),
    subtitle: t("contactForm.subtitle"),
    phonePlaceholder: t("contactForm.phonePlaceholder"),
    submit: t("contactForm.submit"),
    submitting: t("contactForm.submitting"),
    consent: t("contactForm.consent"),
    toastSuccess: t("contactForm.toast.success"),
    errorEmptyPhone: t("contactForm.error.emptyPhone"),
    errorInvalidPhone: t("contactForm.error.invalidPhone"),
    errorRequestFailed: t("contactForm.error.requestFailed"),
    errorNetwork: t("contactForm.error.network"),
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5"
      id="contact"
    >
      <div className="container mx-auto px-4">
        {/* Form */}
        <div className="md:col-span-2">
          <ContactFormClient strings={strings} />
        </div>
      </div>
    </section>
  );
};
