"use client";
import { Button } from "@/components/ui/button";

interface ScrollToContactFormProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "hero";
  className?: string;
}

export const ScrollToContactForm = ({
  children,
  variant = "hero",
  className,
}: ScrollToContactFormProps) => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleScrollToContact}
    >
      {children}
    </Button>
  );
};
