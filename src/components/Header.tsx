import HeaderClient, {
  type HeaderClientStrings,
  type HeaderNavItem,
} from "@/components/HeaderClient";
import { useT, useTPath } from "@/utils/translation-server";

export async function Header() {
  const tPath = await useTPath();
  const t = await useT("Header");

  const pricingSlug = tPath("pricing");
  const contactSlug = tPath("contact");

  const navItems: HeaderNavItem[] = [
    { href: "/", label: t("header.nav.home") || "" },
    {
      href: pricingSlug ? `/${pricingSlug}` : "/",
      label: t("header.nav.pricing") || "",
    },
    { href: "/blog", label: t("header.nav.blog") || "" },
    {
      href: contactSlug ? `/${contactSlug}` : "/",
      label: t("header.nav.contact") || "",
    },
  ];

  const strings: HeaderClientStrings = {
    tagline: t("header.tagline") || "",
    consult: t("header.cta.consult") || "",
    consultShort: t("header.cta.consultShort") || "",
  };

  return <HeaderClient navItems={navItems} strings={strings} />;
}
