import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ArticleSuggestions } from "@/components/ArticleSuggestions";

interface ArticlesLayoutProps {
  children: React.ReactNode;
}

export default function ArticlesLayout({ children }: ArticlesLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Related articles */}
      <ArticleSuggestions />
      <ContactForm />
      <Footer />
    </>
  );
}
