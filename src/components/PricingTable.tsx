import PricingTableClient, {
  type PricingPackage,
  type PricingServiceCategory,
  type PricingTableClientStrings,
} from "@/components/PricingTableClient";
import { useT, useTPath } from "@/utils/translation-server";

type PricingTableProps = {
  highlightedPackage?: string;
};

export const PricingTable = async ({
  highlightedPackage,
}: PricingTableProps) => {
  const t = await useT("PricingTable");
  const tPath = await useTPath();

  const strings: PricingTableClientStrings = {
    title: t("pricing.title"),
    subtitle: t("pricing.subtitle"),
    colService: t("pricing.col.service"),
    more: t("pricing.more"),
    consultPrompt: t("pricing.consult.prompt"),
    consultCta: t("pricing.consult.cta"),
  };

  const packages: PricingPackage[] = [
    {
      name: t("pricing.pkg.1.name"),
      price: "$100",
      period: t("pricing.pkg.1.period"),
      description: t("pricing.pkg.1.desc"),
      url: tPath("categories/maps"),
      highlight: false,
    },
    {
      name: t("pricing.pkg.2.name"),
      price: "$233",
      period: t("pricing.pkg.2.period"),
      description: t("pricing.pkg.2.desc"),
      altPrice: t("pricing.pkg.2.altPrice") || undefined,
      url: tPath("categories/website"),
      highlight: false,
    },
    {
      name: t("pricing.pkg.3.name"),
      price: "$300",
      period: t("pricing.pkg.3.period"),
      description: t("pricing.pkg.3.desc"),
      url: tPath("categories/reputation"),
      highlight: false,
    },
    {
      name: t("pricing.pkg.4.name"),
      price: "$700–900",
      period: t("pricing.pkg.4.period"),
      description: t("pricing.pkg.4.desc"),
      url: tPath("categories/seo"),
      highlight: false,
    },
  ];

  const services: PricingServiceCategory[] = [
    {
      category: t("pricing.cat.listings"),
      items: [
        {
          name: t("pricing.item.listings.setup"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.listings.nap"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.listings.fields"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.listings.photos"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.listings.duplicates"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.listings.directories"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.listings.weekly"),
          values: [false, false, true, true],
        },
      ],
    },
    {
      category: t("pricing.cat.site"),
      items: [
        {
          name: t("pricing.item.site.build"),
          values: [false, "20-50", "30-50", "All"],
        },
        {
          name: t("pricing.item.site.structure"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.site.texts"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.site.areas"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.site.monthly"),
          values: [false, false, "3-5", "10+"],
        },
        {
          name: t("pricing.item.site.articles"),
          values: [false, false, false, "1-3/mo"],
        },
        {
          name: t("pricing.item.site.blog"),
          values: [false, false, true, true],
        },
      ],
    },
    {
      category: t("pricing.cat.seo"),
      items: [
        {
          name: t("pricing.item.seo.semantic"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.seo.tech"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.seo.links"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.seo.schema"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.seo.whiteLinks"),
          values: [false, false, "3/mo", "6+/mo"],
        },
        {
          name: t("pricing.item.seo.positions"),
          values: [false, false, true, true],
        },
        {
          name: t("pricing.item.seo.media"),
          values: [false, false, false, true],
        },
        {
          name: t("pricing.item.seo.competitors"),
          values: [false, false, false, true],
        },
      ],
    },
    {
      category: t("pricing.cat.reviews"),
      items: [
        {
          name: t("pricing.item.reviews.collect"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.reviews.reply"),
          values: [false, false, true, true],
        },
        {
          name: t("pricing.item.reviews.stimulate"),
          values: [false, false, true, true],
        },
        {
          name: t("pricing.item.reviews.negative"),
          values: [false, false, true, true],
        },
        {
          name: t("pricing.item.reviews.orm"),
          values: [false, false, false, true],
        },
      ],
    },
    {
      category: t("pricing.cat.analytics"),
      items: [
        {
          name: t("pricing.item.analytics.basic"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.analytics.utm"),
          values: [true, true, true, true],
        },
        {
          name: t("pricing.item.analytics.monthly"),
          values: [false, true, true, true],
        },
        {
          name: t("pricing.item.analytics.reco"),
          values: [false, false, true, true],
        },
      ],
    },
  ];

  return (
    <PricingTableClient
      highlightedPackage={highlightedPackage}
      strings={strings}
      packages={packages}
      services={services}
    />
  );
};
