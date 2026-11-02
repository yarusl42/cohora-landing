import { useT } from "@/utils/translation-server";

export default async function ExamplePage() {
  const t = await useT("Example");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground">
      <div className="text-lg font-semibold">{t("example.title")}</div>
      <div className="text-xs text-muted-foreground">{t("example.note")}</div>
    </div>
  );
}
