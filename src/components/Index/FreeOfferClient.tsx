"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { sendLead } from "@/lib/sendLead";

export type FreeOfferClientStrings = {
  button: string;
  modalTitle: string;
  modalSubtitle: string;
  phonePlaceholder: string;
  submit: string;
  submitting: string;
  cancel: string;
  consent: string;
  toastSuccess: string;
  errorEmptyPhone: string;
  errorInvalidPhone: string;
  errorRequestFailed: string;
  errorNetwork: string;
};

type FreeOfferClientProps = {
  strings: FreeOfferClientStrings;
};

export default function FreeOfferClient({ strings }: FreeOfferClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendLead(phone, "free");

    if (!result.ok) {
      const msg =
        result.errorCode === "empty_phone"
          ? strings.errorEmptyPhone
          : result.errorCode === "invalid_phone"
            ? strings.errorInvalidPhone
            : result.errorCode === "request_failed"
              ? strings.errorRequestFailed
              : strings.errorNetwork;

      toast.error(msg, {
        duration: 6000,
        className: "text-sm md:text-base font-medium",
      });
      setIsSubmitting(false);
      return;
    }

    toast.success(strings.toastSuccess, {
      duration: 6000,
      className: "text-sm md:text-base font-medium",
    });
    setPhone("");
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="pt-4 flex justify-center ">
        <Button variant="accent" size="xl" onClick={() => setIsModalOpen(true)}>
          {strings.button}
        </Button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-xl shadow-xl w-full max-w-md p-6 mx-4">
            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
              {strings.modalTitle}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              {strings.modalSubtitle}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="free-offer-phone"
                  name="phone"
                  type="tel"
                  placeholder={strings.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11"
                  autoFocus
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? strings.submitting : strings.submit}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                >
                  {strings.cancel}
                </Button>
              </div>
              <p className="text-[11px] leading-snug text-muted-foreground text-center">
                {strings.consent}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
