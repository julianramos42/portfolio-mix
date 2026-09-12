import type { Metadata } from "next";
import { lang } from "next/root-params";
import { getDictionary } from "@/i18n";
import { DevelopmentContent } from "@/components/development-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  return {
    title: locale === "es" ? "Desarrollo Web" : "Web Development",
  };
}

export default async function DevelopmentPage() {
  const locale = (await lang()) as "es" | "en";
  const dict = getDictionary(locale);
  return <DevelopmentContent locale={locale} dict={dict} />;
}