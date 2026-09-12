import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-[11px] tracking-widest text-muted">
          {dict.footer.hecho}{" "}
          <span className="text-accent">Julián Ramos</span> · {site.location}
        </p>
        <a
          href="https://julianramos.com.ar"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-[0.2em] text-faint transition-colors hover:text-accent"
        >
          {dict.footer.www}
        </a>
        <p className="font-mono text-[11px] tracking-widest text-faint">
          © {year} — {dict.footer.derechos}
        </p>
      </div>
    </footer>
  );
}