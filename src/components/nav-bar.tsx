import Link from "next/link";
import type { Locale } from "@/lib/i18n-types";
import type { Dictionary } from "@/i18n";
import { ProfileSwitch } from "./profile-switch";
import { LocaleSwitch } from "./locale-switch";
import { RecordIcon } from "./icons";

export function NavBar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="group flex items-center gap-2.5" prefetch={false}>
          <span className="flex size-2 items-center justify-center">
            <RecordIcon className="size-2 animate-pulse text-rec" />
          </span>
          <span className="font-mono text-xs font-bold tracking-[0.18em] text-fg transition-colors group-hover:text-accent">
            JULIÁN&nbsp;RAMOS
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-faint transition-colors group-hover:text-accent sm:inline">
            BA&nbsp;·&nbsp;DEV&nbsp;&amp;&nbsp;VIDEO
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ProfileSwitch locale={locale} dict={dict} />
          <LocaleSwitch locale={locale} />
        </div>
      </div>
    </header>
  );
}