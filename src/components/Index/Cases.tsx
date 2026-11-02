import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import caseImage from "@/assets/dikaya_nails2.jpg";
import Image from "next/image";
import { useT, useTPath } from "@/utils/translation-server";

export const Cases = async () => {
  const tPath = await useTPath();
  const t = await useT("Cases");
  const casePath = tPath("cases/dikaya-nails");

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-16">
          {t("cases.title")}
        </h2>
        <Card className="border-border overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl md:text-3xl text-foreground">
                  {t("cases.case1.title")}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {t("cases.case1.meta")}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="font-semibold mb-2">
                      {t("cases.case1.block1.title")}
                    </div>
                    <p className="text-muted-foreground">
                      {t("cases.case1.block1.text")}
                    </p>
                  </div>

                  <div>
                    <div className="font-semibold mb-2">
                      {t("cases.case1.block2.title")}
                    </div>
                    <p className="text-muted-foreground">
                      {t("cases.case1.block2.text")}
                    </p>
                  </div>

                  <div>
                    <div className="font-semibold mb-2">
                      {t("cases.case1.block3.title")}
                    </div>
                    <p className="text-muted-foreground">
                      {t("cases.case1.block3.text")}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild variant="outline" size="lg">
                    <Link
                      href={casePath ? `/${casePath}` : "/kejisy/dikaya-nails"}
                    >
                      {t("cases.case1.cta")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>

            <div className="md:w-1/2 w-full md:h-auto h-64 relative">
              <Image
                src={caseImage}
                alt={t("cases.case1.imageAlt")}
                fill
                className="object-cover md:rounded-none md:border-l border-border"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
