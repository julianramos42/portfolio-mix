"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-types";
import type { Dictionary } from "@/i18n";
import { projects, type Project } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { Button, BgGrid, Marquee, SectionHeader } from "./new-common";
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

function CodeCard({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-md border border-line bg-bg/70 ${className}`} aria-hidden>
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-rec" />
        <span className="size-2.5 rounded-full bg-amber-400/90" />
        <span className="size-2.5 rounded-full bg-accent" />
        <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-faint">developer.ts</span>
        <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-accent sm:block">
          localhost:3000
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-[1.9] sm:text-[13px]">
        <code>
          <div>
            <span className="text-faint">$</span> <span className="text-fg">npm run dev</span>
          </div>
          <div>
            <span className="text-muted">▲ Next.js 16 · ready in 0.9s</span>
          </div>
          <div>
            <span className="text-faint">  Local: http://localhost:3000</span>
          </div>
          <div aria-hidden className="mt-3" />
          <div>
            <span className="text-rec">const</span> <span className="text-fg">developer</span> <span className="text-faint">{"{"}</span>
          </div>
          <div>
            <span className="text-faint">  name: </span>
            <span className="text-accent">&quot;Julián Ramos&quot;,</span>
          </div>
          <div>
            <span className="text-faint">  stack: </span>
            <span className="text-accent">[&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;],</span>
          </div>
          <div>
            <span className="text-faint">  city: </span>
            <span className="text-accent">&quot;Buenos Aires&quot;,</span>
          </div>
          <div>
            <span className="text-faint">  since: </span>
            <span className="text-accent">2023,</span>
          </div>
          <div>
            <span className="text-faint">  </span>
            <span className="text-sky-400">openToWork</span>
            <span className="text-faint">: </span>
            <span className="text-accent">true,</span>
          </div>
          <div>
            <span className="text-faint">{"};"}</span>
          </div>
        </code>
      </pre>
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
  const monogram = project.title.charAt(0);
  return (
    <a
      href={project.demoUrl ?? project.githubUrl ?? "#"}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(163,230,53,0.07)]"
    >
      {project.image ? (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
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
          </div>
        </div>
      ) : (
        <div
          className="relative flex h-44 items-end p-4"
          style={{
            background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
          }}
        >
          <span className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[120px] font-bold leading-none text-white/10">
            {monogram}
          </span>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-2">
              {project.featured ? (
                <span className="rounded-full bg-rec px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-bg">
                  {dict.common.destacado}
                </span>
              ) : null}
            </div>
            <span className="truncate font-mono text-[10px] uppercase tracking-widest text-white/70">
              github.com/julianramos42/{project.id}
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
          <span className="mt-1 font-mono text-sm text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
            ↗
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description[locale]}</p>
        {project.stack.length ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-line bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}
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

          <CodeCard className="mt-14 max-w-2xl" />

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