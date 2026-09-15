"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n-types";
import type { Dictionary } from "@/i18n";
import { site, waLink } from "@/lib/site";
import { SectionHeader } from "./new-common";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";

export type ContactProfile = "development" | "video";

export function ContactSection({
  locale,
  dict,
  preset,
}: {
  locale: Locale;
  dict: Dictionary;
  preset: ContactProfile;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [perfil, setPerfil] = useState(preset);
  const [copied, setCopied] = useState<string | null>(null);

  function send() {
    const perfilLabel =
      perfil === "video" ? dict.contact.form.perfilVideo : dict.contact.form.perfilDev;
    const body = `Hola Julián! 👋 Soy ${name || "…"}. Te escribo por ${perfilLabel}. ${message}`;
    window.open(waLink(body), "_blank", "noopener,noreferrer");
  }

  function copy(target: string) {
    navigator.clipboard.writeText(target).then(() => {
      setCopied(target);
      setTimeout(() => setCopied(null), 1600);
    });
  }

  const channels = [
    {
      id: "whatsapp" as const,
      label: dict.contact.whatsappLabel,
      value: site.phoneDisplay,
      href: waLink("Hola Julián! Te escribo desde tu portfolio."),
      Icon: WhatsappIcon,
    },
    { id: "mail-dev" as const, label: dict.contact.mailDev, value: site.emails.dev, Icon: null },
    { id: "mail-video" as const, label: dict.contact.mailVideo, value: site.emails.video, Icon: null },
    { id: "linkedin" as const, label: "LinkedIn", value: "@julianramos42", href: site.linkedin, Icon: LinkedinIcon },
    { id: "github" as const, label: "GitHub", value: "@julianramos42", href: site.github, Icon: GithubIcon },
  ];

  const input =
    "w-full rounded-md border border-line bg-surface px-4 py-3 font-mono text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent";

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeader kicker={dict.contact.kicker} title={dict.contact.title} lead={dict.contact.lead} className="mb-14" />

        <div className="grid gap-12 lg:grid-cols-5">
          <form
            className="lg:col-span-3"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                  {dict.contact.form.nombre}
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={dict.contact.form.nombrePh}
                  className={input}
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                  {dict.contact.form.perfil}
                </span>
                <select
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value as ContactProfile)}
                  className={`${input} cursor-pointer appearance-none`}
                >
                  <option value="development">{dict.contact.form.perfilDev}</option>
                  <option value="video">{dict.contact.form.perfilVideo}</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                {dict.contact.form.mensaje}
              </span>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder={dict.contact.form.mensajePh}
                className={`${input} resize-none`}
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-all hover:bg-accent-soft"
              >
                <WhatsappIcon className="size-5" />
                {dict.contact.form.enviar}
              </button>
              <span className="text-xs text-faint">{dict.contact.form.nota}</span>
            </div>
          </form>

          <div className="lg:col-span-2">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
              {dict.contact.alternativos}
            </p>
            <ul className="divide-y divide-line rounded-md border border-line bg-surface">
              {channels.map(({ id, label, value, href, Icon }) => (
                <li key={id} className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    {Icon ? (
                      <Icon
                        className={`size-5 shrink-0 ${
                          id === "whatsapp" ? "text-accent" : "text-muted"
                        }`}
                      />
                    ) : null}
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{label}</p>
                      <button
                        type="button"
                        onClick={() => copy(value)}
                        className="cursor-pointer truncate font-mono text-sm text-fg transition-colors hover:text-accent"
                        title="copiar"
                      >
                        {value}
                      </button>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {copied === value ? (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent">✓</span>
                    ) : null}
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="font-mono text-[11px] text-faint transition-colors hover:text-accent">
                        ↗
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
            <p aria-live="polite" className="mt-4 text-center font-mono text-[11px] text-faint">
              {copied ? `${copied} ✓` : `{ ${locale.toUpperCase()} · ${perfil} }`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}