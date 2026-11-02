import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

interface ArticleLayoutProps {
  children: ReactNode;
}

export const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <ContactForm />
      <Footer />
    </>
  );
};

export default ({ Component }: { Component: React.ComponentType }) => (
  <ArticleLayout>
    <Component />
  </ArticleLayout>
);
