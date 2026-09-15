"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Code2, Clapperboard } from "lucide-react";
import type { Locale } from "@/lib/i18n-types";
import type { Dictionary } from "@/i18n";

export type Profile = "development" | "video";

export function ProfileSwitch({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const profile: Profile =
    pathname === `/${locale}/video` ? "video" : "development";
  const [flash, setFlash] = useState(false);

  function go(next: Profile) {
    if (next === profile) return;
    setFlash(true);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    if (navTimer.current) clearTimeout(navTimer.current);
    flashTimer.current = setTimeout(() => setFlash(false), 300);
    navTimer.current = setTimeout(() => {
      router.push(next === "video" ? `/${locale}/video` : `/${locale}`);
    }, 120);
  }

  const btn =
    "relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors duration-200 cursor-pointer";

  const opts = [
    { id: "development" as const, label: dict.nav.desarrollo, Icon: Code2 },
    { id: "video" as const, label: dict.nav.video, Icon: Clapperboard },
  ];

  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 bg-fg"
        animate={{ opacity: flash ? 1 : 0 }}
        transition={{ duration: 0.09, ease: "linear" }}
      />
      <div className="relative flex items-center rounded-full border border-line bg-surface p-1">
        <div className="relative flex w-full">
          <motion.div
            aria-hidden
            className="absolute inset-y-0.5 left-1 w-[calc(50%-8px)] rounded-full bg-raised shadow-[0_0_10px_rgba(163,230,53,0.12)] ring-1 ring-accent/30"
            animate={{ left: profile === "video" ? "calc(50% + 4px)" : "4px" }}
            transition={{ type: "spring", stiffness: 480, damping: 40 }}
          />
          {opts.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              aria-current={profile === id}
              className={`${btn} ${
                profile === id
                  ? "text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              <Icon className="size-3.5 shrink-0" />
              <span className="whitespace-nowrap">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}