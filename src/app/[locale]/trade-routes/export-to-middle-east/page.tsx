import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default async function ExportToMiddleEastRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({
    href: "/services/trade-routes/export-to-middle-east",
    locale: locale as Locale,
  });
}
