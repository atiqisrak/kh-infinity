import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default async function ImportFromChinaRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({
    href: "/services/trade-routes/import-from-china",
    locale: locale as Locale,
  });
}
