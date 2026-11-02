import heroImg from "@/assets/hero6.png";
import HeroClient from "./HeroClient";
import { useT } from "@/utils/translation-server";

export const Hero = async () => {
  const t = await useT("Hero");

  const strings = {
    badge: t("hero.badge"),
    titleBefore: t("hero.title.before"),
    titleEmphasis: t("hero.title.emphasis"),
    titleAfter: t("hero.title.after"),
    p1: t("hero.p1"),
    p2: t("hero.p2"),
    benefits: [t("hero.b1"), t("hero.b2"), t("hero.b3"), t("hero.b4")],
    cta: t("hero.cta"),
    imageAlt: t("hero.imageAlt"),
  };

  return <HeroClient strings={strings} heroImg={heroImg} />;
};
