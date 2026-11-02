import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";
import { useT } from "@/utils/translation-server";

export const Strategies2025 = async () => {
  const t = await useT("Strategies2025");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 bg-primary/5 rounded-xl py-6">
        <div className="mx-auto space-y-8">
          <header className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
              {t("s2025.title")}
            </h2>
            <p className="text-lg ">{t("s2025.p1")}</p>
            <p>{t("s2025.p2")}</p>
          </header>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("s2025.sec1.title")}
            </h3>
            <p>{t("s2025.sec1.p1")}</p>
            <p className="text-foreground">{t("s2025.sec1.p2")}</p>
            <ul className="space-y-2 pl-1">
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec1.li1")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec1.li2")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec1.li3")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec1.li4")}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("s2025.sec2.title")}
            </h3>
            <p>{t("s2025.sec2.p1")}</p>
            <p>{t("s2025.sec2.p2")}</p>
            <ul className="list-disc pl-1 space-y-2 ">
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec2.li1")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec2.li2")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec2.li3")}
              </li>
            </ul>

            <div className="border rounded-md overflow-hidden mt-4">
              <Table>
                <TableCaption>{t("s2025.table.caption")}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[240px]">
                      {t("s2025.table.h1")}
                    </TableHead>
                    <TableHead>{t("s2025.table.h2")}</TableHead>
                    <TableHead className="w-[220px]">
                      {t("s2025.table.h3")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      {t("s2025.table.r1.c1")}
                    </TableCell>
                    <TableCell>{t("s2025.table.r1.c2")}</TableCell>
                    <TableCell>{t("s2025.table.r1.c3")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      {t("s2025.table.r2.c1")}
                    </TableCell>
                    <TableCell>{t("s2025.table.r2.c2")}</TableCell>
                    <TableCell>{t("s2025.table.r2.c3")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      {t("s2025.table.r3.c1")}
                    </TableCell>
                    <TableCell>{t("s2025.table.r3.c2")}</TableCell>
                    <TableCell>{t("s2025.table.r3.c3")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      {t("s2025.table.r4.c1")}
                    </TableCell>
                    <TableCell>{t("s2025.table.r4.c2")}</TableCell>
                    <TableCell>{t("s2025.table.r4.c3")}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="space-y-2">
              <p className="text-foreground">{t("s2025.sec2.afterTable")}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("s2025.sec3.title")}
            </h3>
            <p>{t("s2025.sec3.p1")}</p>
            <p className="text-foreground">{t("s2025.sec3.p2")}</p>
            <ul className="list-disc pl-1 space-y-2 ">
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec3.li1")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec3.li2")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec3.li3")}
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {t("s2025.sec3.li4")}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("s2025.sec4.title")}
            </h3>
            <p>{t("s2025.sec4.p1")}</p>
            <ul className="list-disc pl-1 space-y-2 ">
              <li className="flex gap-2 items-start">
                <div className="flex items-center justify-center border border-primary text-primary rounded-full w-8 h-8">
                  1
                </div>
                <div className="mt-[3px]">{t("s2025.sec4.step1")}</div>
              </li>
              <li className="flex gap-2 items-start">
                <div className="flex items-center justify-center border border-primary text-primary rounded-full w-8 h-8">
                  2
                </div>
                <div className="mt-[3px]">{t("s2025.sec4.step2")}</div>
              </li>
              <li className="flex gap-2 items-start">
                <div className="flex items-center justify-center border border-primary text-primary rounded-full w-8 h-8">
                  3
                </div>
                <div className="mt-[3px]">{t("s2025.sec4.step3")}</div>
              </li>
              <li className="flex gap-2 items-start">
                <div className="flex items-center justify-center border border-primary text-primary rounded-full w-8 h-8">
                  4
                </div>
                <div className="mt-[3px]">{t("s2025.sec4.step4")}</div>
              </li>
              <li className="flex gap-2 items-start">
                <div className="flex items-center justify-center border border-primary text-primary rounded-full w-8 h-8">
                  5
                </div>
                <div className="mt-[3px]">{t("s2025.sec4.step5")}</div>
              </li>
            </ul>
            <p>{t("s2025.sec4.p2")}</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("s2025.sec5.title")}
            </h3>
            <p>{t("s2025.sec5.p1")}</p>
            <p>{t("s2025.sec5.p2")}</p>
            <p>{t("s2025.sec5.p3")}</p>
            <p>{t("s2025.sec5.p4")}</p>
            <p>{t("s2025.sec5.p5")}</p>
          </section>
        </div>
      </div>
    </section>
  );
};
