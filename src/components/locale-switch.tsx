"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n-types";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const other: Locale = locale === "es" ? "en" : "es";

  function go() {
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.length > 1 ? `/${segments.slice(1).join("/")}` : "";
    document.cookie = `locale=${other}; path=/; max-age=31536000; SameSite=Lax`;
    router.replace(`/${other}${rest}`);
  }

  return (
    <button
      type="button"
      onClick={go}
      title={`${other.toUpperCase()}`}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line bg-surface font-mono text-xs tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {other.toUpperCase()}
    </button>
  );
}