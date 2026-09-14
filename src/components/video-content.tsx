"use client";

import { useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n-types";
import type { Dictionary } from "@/i18n";
import { clients } from "@/content/clients";
import { allVideos, personalVideos, type Video } from "@/content/videos";
import { editingWorkflow, editingSpecials } from "@/content/services";
import { Button, BgGrid, Marquee, SectionHeader, Timeline } from "./new-common";
import { ContactSection } from "./contact-section";
import { PlayIcon, RecordIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-widest text-faint">{label}</p>
    </div>
  );
}

export function VideoGallery({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const v = dict.video.clients;
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<{ video: Video; list: Video[] } | null>(null);

  const list =
    filter === "all"
      ? allVideos
      : filter === "personal"
        ? personalVideos
        : allVideos.filter((video) => video.clientId === filter);

  const tabs = [
    { id: "all", label: v.all },
    ...clients.map((c) => ({ id: c.id, label: `${c.name} · ${c.year}` })),
    { id: "personal", label: v.personal },
  ];

  function step(dir: 1 | -1) {
    setActive((current) => {
      if (!current) return current;
      const i = current.list.findIndex((video) => video.id === current.video.id);
      const next = (i + dir + current.list.length) % current.list.length;
      return { ...current, video: current.list[next] };
    });
  }

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeader kicker={v.kicker} title={v.title} lead={v.lead} className="mb-8" />

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`cursor-pointer rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                filter === tab.id
                  ? "border-accent bg-accent text-bg"
                  : "border-line bg-surface text-muted hover:border-accent/60 hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filter === "personal" ? (
          <p className="mb-8 max-w-2xl text-sm text-faint">{v.personalLead}</p>
        ) : null}

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((video, i) => {
            const client = video.clientId === "personal" ? null : clients.find((c) => c.id === video.clientId);
            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setActive({ video, list })}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-line bg-surface text-left"
              >
                <div className="flex items-center gap-2 px-3 pb-2 pt-3">
                  <span className={`size-1.5 rounded-full`} style={{ background: client?.tone ?? "#9d9da7" }} />
                  <span className="truncate font-mono text-[10px] uppercase tracking-widest text-faint">
                    {client ? `${client.name} · ${client.year}` : v.personal}
                  </span>
                </div>
                <div className="relative aspect-video overflow-hidden bg-bg">
                  <Image
                    src={video.poster}
                    alt={video.title[locale]}
                    fill
                    loading="lazy"
                    fetchPriority="low"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-10">
                  <span className="truncate font-mono text-[10px] tracking-widest text-fg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-accent text-bg opacity-0 transition-all group-hover:opacity-100">
                    <PlayIcon className="size-3.5 translate-x-px" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-lg border border-line bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <p className="truncate font-mono text-xs uppercase tracking-widest text-muted">
                {active.video.title[locale]}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="cursor-pointer font-mono text-sm text-faint transition-colors hover:text-accent"
              >
                ✕
              </button>
            </div>
            <video
              key={active.video.id}
              src={active.video.src}
              poster={active.video.poster}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black"
            />
            <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
              <button
                type="button"
                onClick={() => step(-1)}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
              >
                  <ChevronLeftIcon className="size-3.5" />
                  {v.prev}
              </button>
              <span className="font-mono text-[11px] tracking-widest text-faint">
                {active.list.findIndex((x) => x.id === active.video.id) + 1} / {active.list.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {v.next}
                  <ChevronRightIcon className="size-3.5" />
                </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function VideoContent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const v = dict.video;

  return (
    <>
      <section className="relative overflow-hidden">
        <BgGrid center />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-rec">
            <RecordIcon className="size-3 animate-pulse" />
            {v.hero.kicker}
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            <span className="block text-fg">{v.hero.titleLine1}</span>
            <span className="block bg-gradient-to-r from-rec to-accent bg-clip-text text-transparent">
              {v.hero.titleLine2}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {v.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {v.hero.roles.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#trabajos">{dict.ctas.verTrabajos} &#9656;</Button>
            <Button href="#contacto" variant="secondary">
              {dict.ctas.hablar}
            </Button>
            <span className="ml-1 font-mono text-[11px] tracking-widest text-faint">
              &#9664; {dict.ctas.otrosPerfil}
            </span>
          </div>

          <Timeline className="mt-14 max-w-2xl" />

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
            <Stat value="2" label={v.hero.statYears} />
            <Stat value="4" label={v.hero.statClients} />
            <Stat value="3×" label={v.hero.statCams} />
            <Stat value="9:16" label="Vertical · Horizontal" />
          </div>
        </div>
      </section>

      <Marquee items={v.hero.roles} />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionHeader
            kicker={v.services.kicker}
            title={v.services.title}
            lead={v.services.lead}
            className="mb-14"
          />
          <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-accent">
            {v.services.workflowTitle}
          </p>
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {editingWorkflow.map((step, i) => {
              const title = step.title[locale];
              const description = step.description[locale];
              return (
                <div key={step.id} className="group bg-surface p-6 transition-colors hover:bg-raised">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-line-strong transition-colors group-hover:text-accent/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              );
            })}
          </div>

          <p className="mb-4 mt-14 font-mono text-[11px] uppercase tracking-widest text-accent">
            {v.services.specialsTitle}
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {editingSpecials.map((special) => {
              const title = special.title[locale];
              const description = special.description[locale];
              return (
                <div
                  key={special.id}
                  className="rounded-lg border border-line bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(163,230,53,0.06)]"
                >
                  <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div id="trabajos">
        <VideoGallery dict={dict} locale={locale} />
      </div>

      <ContactSection locale={locale} dict={dict} preset="video" />
    </>
  );
}