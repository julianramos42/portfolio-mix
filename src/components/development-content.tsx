"use client";

import type { Locale } from "@/lib/i18n-types";
import type { Dictionary } from "@/i18n";
import { projects, type Project } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { Button, BgGrid, Marquee, SectionHeader, Timeline } from "./new-common";
import { ContactSection } from "./contact-section";
import { RecordIcon } from "./icons";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-widest text-faint">{label}</p>
    </div>
  );
}

function ProjectCard({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <a
      href={project.demoUrl ?? project.githubUrl ?? "#"}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(163,230,53,0.07)]"
    >
      <div
        className="relative flex h-40 items-end p-4"
        style={{
          background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative flex items-center gap-2">
          {project.featured ? (
            <span className="rounded-full bg-rec px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-bg">
              {dict.common.destacado}
            </span>
          ) : null}
          {project.inProduction ? (
            <span className="rounded-full border border-white/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/90">
              {dict.common.produccion}
            </span>
          ) : null}
          {project.collaborative ? (
            <span className="rounded-full border border-white/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80">
              {dict.common.colaborativo}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
          <span className="mt-1 font-mono text-sm text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
            ↗
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description[locale]}</p>
      </div>
    </a>
  );
}

export function DevelopmentContent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.dev;

  return (
    <>
      <section className="relative overflow-hidden">
        <BgGrid center />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-rec">
            <RecordIcon className="size-3 animate-pulse" />
            {d.hero.kicker}
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            <span className="block text-fg">{d.hero.titleLine1}</span>
            <span className="block bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
              {d.hero.titleLine2}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {d.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {d.hero.roles.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#proyectos">{dict.ctas.verProyectos} &#9656;</Button>
            <Button href="#contacto" variant="secondary">
              {dict.ctas.hablar}
            </Button>
            <span className="ml-1 font-mono text-[11px] tracking-widest text-faint">
              &#9656; {dict.ctas.otrosPerfil}
            </span>
          </div>

          <Timeline className="mt-14 max-w-2xl" />

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
            <Stat value="3" label={d.hero.statYears} />
            <Stat value="9+" label={d.hero.statProjects} />
            <Stat value="4+" label={d.hero.statProd} />
            <Stat value="BA" label="Argentina" />
          </div>
        </div>
      </section>

      <Marquee items={d.hero.roles} />

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionHeader kicker={d.skills.kicker} title={d.skills.title} lead={d.skills.lead} className="mb-14" />
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const title = group.title[locale];
              return (
                <div key={group.id} className="bg-surface p-6 transition-colors hover:bg-raised">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-accent">
                    0{skillGroups.indexOf(group) + 1} · {title}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <span className="size-1 rounded-full bg-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proyectos" className="relative border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionHeader kicker={d.projects.kicker} title={d.projects.title} lead={d.projects.lead} className="mb-14" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection locale={locale} dict={dict} preset="development" />
    </>
  );
}