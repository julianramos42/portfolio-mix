import type { Metadata } from "next";
import { lang } from "next/root-params";
import { getDictionary } from "@/i18n";
import { VideoContent } from "@/components/video-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  return {
    title: locale === "es" ? "Edición & Video" : "Editing & Video",
  };
}

export default async function VideoPage() {
  const locale = (await lang()) as "es" | "en";
  const dict = getDictionary(locale);
  return <VideoContent locale={locale} dict={dict} />;
}