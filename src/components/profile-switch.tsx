"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
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

  const profile: Profile =
    pathname === `/${locale}/video` ? "video" : "development";
  const [flash, setFlash] = useState(false);

  function go(next: Profile) {
    if (next === profile) return;
    setFlash(true);
    flashTimer.current = setTimeout(() => {
      router.push(next === "video" ? `/${locale}/video` : `/${locale}`);
    }, 180);
  }

  const btn =
    "relative z-10 flex-1 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer";

  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 bg-fg"
        animate={{ opacity: flash ? 1 : 0 }}
        transition={{ duration: 0.09, ease: "linear" }}
      />
      <div className="relative flex h-9 w-44 items-center rounded-full border border-line bg-surface p-1 text-muted">
        <div className="relative flex w-full">
          <motion.div
            aria-hidden
            className="absolute inset-y-0 w-1/2 rounded-full border border-accent/40 bg-raised"
            animate={{ left: profile === "video" ? "50%" : "0%" }}
            transition={{ type: "spring", stiffness: 500, damping: 38 }}
          />
          <button
            type="button"
            onClick={() => go("development")}
            aria-current={profile === "development"}
            className={`${btn} ${profile === "development" ? "text-accent" : ""}`}
          >
            {dict.nav.desarrollo}
          </button>
          <button
            type="button"
            onClick={() => go("video")}
            aria-current={profile === "video"}
            className={`${btn} ${profile === "video" ? "text-accent" : ""}`}
          >
            {dict.nav.video}
          </button>
        </div>
      </div>
    </div>
  );
}