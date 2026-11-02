import { Gift, CheckCircle } from "lucide-react";
import FreeOfferClient from "./FreeOfferClient";
import { useT } from "@/utils/translation-server";

export const FreeOffer = async () => {
  const t = await useT("FreeOffer");

  const title = t("freeOffer.title");
  const subtitle = t("freeOffer.subtitle");
  const value = t("freeOffer.value");
  const benefits = [
    t("freeOffer.benefit1"),
    t("freeOffer.benefit2"),
    t("freeOffer.benefit3"),
    t("freeOffer.benefit4"),
  ];

  const clientStrings = {
    button: t("freeOffer.button"),
    modalTitle: t("freeOffer.modal.title"),
    modalSubtitle: t("freeOffer.modal.subtitle"),
    phonePlaceholder: t("freeOffer.phonePlaceholder"),
    submit: t("freeOffer.submit"),
    submitting: t("freeOffer.submitting"),
    cancel: t("freeOffer.cancel"),
    consent: t("freeOffer.consent"),
    toastSuccess: t("freeOffer.toast.success"),
    errorEmptyPhone: t("freeOffer.error.emptyPhone"),
    errorInvalidPhone: t("freeOffer.error.invalidPhone"),
    errorRequestFailed: t("freeOffer.error.requestFailed"),
    errorNetwork: t("freeOffer.error.network"),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl overflow-hidden border-2 border-accent/20 max-w-5xl mx-auto">
          <div className="p-8 md:p-12 text-center md:text-left space-y-6">
            {/* Icon */}
            <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-glow text-accent-foreground shadow-lg">
              <Gift className="w-10 h-10" />
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-accent font-semibold max-w-2xl text-center mx-auto">
                {subtitle}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-start bg-secondary/30 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Value prop */}
            <p className="text-lg max-w-2xl mx-auto pt-4 text-center">
              {value}
            </p>

            {/* CTA + Modal (client-side) */}
            <FreeOfferClient strings={clientStrings} />
          </div>
        </div>
      </div>
    </section>
  );
};
