import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

interface ArticlesLayoutProps {
  children: React.ReactNode;
}

export default function ArticlesLayout({ children }: ArticlesLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactForm />
      <Footer />
    </>
  );
}
