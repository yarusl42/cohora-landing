"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { sendLead } from "@/lib/sendLead";

export type ContactFormClientStrings = {
  title: string;
  subtitle: string;
  phonePlaceholder: string;
  submit: string;
  submitting: string;
  consent: string;
  toastSuccess: string;
  errorEmptyPhone: string;
  errorInvalidPhone: string;
  errorRequestFailed: string;
  errorNetwork: string;
};

type ContactFormClientProps = {
  strings: ContactFormClientStrings;
};

export default function ContactFormClient({ strings }: ContactFormClientProps) {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendLead(phone, "consultation");

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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6 mx-auto max-w-4xl text-center flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground max-w-2xl">
        {strings.title}
      </h2>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10">
        {strings.subtitle}
      </p>
      <div className="h-12">
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={strings.phonePlaceholder}
          required
          className="h-full"
        />
      </div>

      <div>
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? strings.submitting : strings.submit}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        {strings.consent}
      </p>
    </form>
  );
}
