"use client";

import { motion } from "framer-motion";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200";
  const variants = {
    primary: "bg-accent text-bg hover:bg-accent-soft hover:tracking-[0.18em]",
    secondary: "border border-line text-fg hover:border-accent hover:text-accent",
    ghost: "text-muted hover:text-fg",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function SectionHeader({
  kicker,
  title,
  lead,
  className = "",
}: {
  kicker: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
        <span className="inline-block h-1 w-8 bg-accent" />
        {kicker}
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{lead}</p> : null}
    </div>
  );
}

export function Timeline({ className = "" }: { className?: string }) {
  const rows = [
    { count: 16, hue: "bg-accent/70", alt: "bg-line-strong", ratio: 0.5 },
    { count: 16, hue: "bg-sky-400/50", alt: "bg-line", ratio: 0.35 },
    { count: 10, hue: "bg-rec/45", alt: "bg-line", ratio: 0.6 },
  ];

  return (
    <div className={`relative overflow-hidden rounded-md border border-line bg-bg/60 ${className}`} aria-hidden>
      <div className="flex flex-col gap-1.5 p-3">
        {rows.map((row, r) => (
          <div key={r} className="flex items-center gap-1.5">
            {Array.from({ length: row.count }).map((_, i) => {
              const wide = (i % 3 === 0) as boolean;
              return (
                <div
                  key={i}
                  className={`h-4 rounded-[3px] ${wide ? row.alt : row.hue}`}
                  style={{ width: `${6 + ((i * 7 + r * 11) % 10)}px` }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <motion.div
        className="absolute inset-y-0 top-0 w-px bg-accent shadow-[0_0_10px_2px_rgba(163,230,53,0.5)]"
        initial={{ left: "6%" }}
        animate={{ left: ["6%", "94%", "6%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
        initial={{ left: "6%" }}
        animate={{ left: ["6%", "94%", "6%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-surface/50">
      <div className="flex w-max animate-marquee items-center gap-10 py-2.5 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{item}</span>
            <span className="text-accent/60">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function BgGrid({ center = false }: { center?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" style={{ maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_50%_-5%,rgba(163,230,53,0.08),transparent_70%)]" />
      {center ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_50%_22%,rgba(255,255,255,0.04),transparent_70%)]" />
      ) : null}
    </div>
  );
}

export function NoiseOverlay() {
  const noise =
    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='140'%20height='140'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.85'%20numOctaves='2'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='140'%20height='140'%20filter='url(%23n)'/%3E%3C/svg%3E";
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-overlay"
      style={{ backgroundImage: `url("${noise}")` }}
    />
  );
}