import React from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useTPath, useT } from "@/utils/translation-server";
import logo from "@/assets/SKYNEX.webp";
const logoSrc = typeof logo === "string" ? logo : (logo as { src: string }).src;

export async function Footer() {
  const tPath = await useTPath();
  const t = await useT("Footer");
  const contactT = await useT("ContactPage");

  const pricingSlug = tPath("pricing");
  const contactSlug = tPath("contact");
  const privacySlug = tPath("privacy");
  const termsSlug = tPath("terms");
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="mb-4 w-[80%]">
                <img src={logoSrc}></img>
              </div>
              <p className="text-muted-foreground text-sm">
                {t("footer.about.text") || ""}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {t("footer.links.title") || ""}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href={pricingSlug ? `/${pricingSlug}` : "/"}
                    className="hover:text-foreground transition-colors"
                  >
                    {t("footer.links.services") || ""}
                  </Link>
                </li>
                <li>
                  <Link
                    href={contactSlug ? `/${contactSlug}` : "/"}
                    className="hover:text-foreground transition-colors"
                  >
                    {t("footer.links.contacts") || ""}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-colors"
                  >
                    {t("footer.links.about") || ""}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-foreground transition-colors"
                  >
                    {t("footer.links.blog") || ""}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {t("footer.contact.title") || ""}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-foreground" />
                  <a
                    href={`tel:${contactT("contact.phoneHref")}`}
                    className="hover:text-foreground transition-colors"
                    dir="ltr"
                  >
                    {contactT("contact.phoneDisplay")}
                  </a>
                </li>
                {/* <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-foreground" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground transition-colors">
                    {CONTACT.email}
                  </a>
                </li> */}
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-foreground" />
                  <span>{contactT("contact.coverage")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-foreground" />
                  <span>{contactT("contact.address")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} {t("footer.copyright") || ""}
              </p>
              <div className="flex gap-6">
                <Link
                  href={privacySlug ? `/${privacySlug}` : "/"}
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.legal.privacy") || ""}
                </Link>
                <Link
                  href={termsSlug ? `/${termsSlug}` : "/"}
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.legal.terms") || ""}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
