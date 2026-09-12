import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { lang } from "next/root-params";
import { getDictionary } from "@/i18n";
import { site } from "@/lib/site";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { NoiseOverlay } from "@/components/new-common";
import "../globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jb = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  const dict = getDictionary(locale as "es" | "en");
  const url = `https://julianramos.com.ar/${locale}`;

  return {
    metadataBase: new URL(site.domain),
    title: {
      default: dict.meta.title,
      template: "%s · Julián Ramos",
    },
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: {
        es: "/es",
        "es-AR": "/es",
        en: "/en",
        "en-US": "/en",
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Julián Ramos",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "es" ? "es_AR" : "en_US",
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout(props: LayoutProps<"/[lang]">) {
  const locale = (await lang()) as "es" | "en";
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${space.variable} ${jb.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <NoiseOverlay />
        <NavBar locale={locale} dict={dict} />
        <main>{props.children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}