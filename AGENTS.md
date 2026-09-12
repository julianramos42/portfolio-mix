<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Julián Ramos

Sitio unificado de Julián Ramos (fullstack dev + video editor), Next.js 16 App Router,
TypeScript, Tailwind v4, framer-motion. Dark UI estilo editor de video con acento lima.
Deploy objetivo: Vercel + dominio `julianramos.com.ar`.

## Stack y comandos

- Node 22, npm. Instalar: `npm install` · Dev: `npm run dev` · Lint: `npm run lint` · Build: `npm run build` · Prod local: `npm run start -- -p <puerto>`
- Tailwind v4 (`@theme` en `src/app/globals.css`). Sin colores de Tailwind clásicos en class: usar tokens (`bg-bg`, `bg-surface`, `border-line`, `text-fg`, `text-muted`, `text-faint`, `text-accent`, `bg-rec`, `text-bg`).

## Arquitectura

- **i18n**: rutas `/{lang}` con `es` (default) y `en`. Negociación en `src/proxy.ts` (cookie `locale` > Accept-Language > `es`). Sin root layout global: el layout raíz es `src/app/[lang]/layout.tsx` y obtiene el locale con `lang()` de `next/root-params` (ver docs locales). Diccionarios tipados en `src/i18n/dictionaries/{es,en}.ts`; el tipo maestro es `Dictionary` (derivado de `es`). Traducir SIEMPRE ambos archivos.
- **Rutas**: `/{lang}` = perfil Desarrollo (default), `/{lang}/video` = perfil Edición & Video. Switch de perfil en navbar con flash blanco "corte tipo edición". Botón idioma en navbar.
- **Contenido data-driven** en `src/content/`: `projects.ts` (10 proyectos, `localized` es/en), `skills.ts`, `services.ts` (workflow 6 pasos + 3 especialidades), `clients.ts` (4 clientes), `videos.ts` (31 videos; ids 1-4 personales, 5-12 Rodrigo, 13-20 Eduardo, 21-28 Toni, 29-31 Josué). Textos localizados sin acentos problemáticos en el código: usar el objeto `Localized { es, en }`.
- Componentes clave: `src/components/{nav-bar,profile-switch,locale-switch,new-common,development-content,video-content,contact-section,footer,icons}.tsx`. El contenido de cada perfil son componentes cliente que reciben `locale` + `dict` desde la página server.
- Contacto: form sin backend; arma link `wa.me/5491150234561` y abre pestaña. Datos en `src/lib/site.ts`.

## Videos (IMPORTANTE)

- Videos grandes NO van en git: `.gitignore` excluye `public/videos/` y `scripts/output/`.
- Source original (fuera del repo, backup): `C:\Users\jgr\Desktop\Cosas\Paginas Web\portfolio-editor\videos\`.
- Pipelines: `scripts/prepare-videos.ps1` re-codifica (H264 CRF24, ≤1280w, faststart) y saca posters → `scripts/output/` + `public/posters/` (esto ya corre y los posts son trackeables). Copiar `scripts/output/*.mp4` a `public/videos/` para preview local.
- **Migración pendiente a Vercel Blob** (Hobby: 1GB storage / 10GB transfer/mes): subir los 31 `.mp4` re-coded (~379MB), pegar las URLs en `videos.ts` (campo `src`) y repos `src` → `https://<blob-url>`; los posters de `public/posters/` pueden quedarse locales. `media-src` del CSP ya permite `https:` en `next.config.ts`.
- Si los 379MB no caben cómodos con otros assets: priorizar/quitar cortes de clientes menos relevantes en `src/content/videos.ts`.

## Convenciones

- No agregar comentarios salvo que se pidan. Código ES/EN según el contexto de cada archivo.
- Pre-fetch off en links internos con props estáticas en SSR vía `prefetch={false}` en links del navbar.
- Security headers (CSP etc.) en `next.config.ts`. No commitear secrets.
- Runear `npm run lint` y `npm run build` antes de dar tarea por terminada. Next 16: consultar `node_modules/next/dist/docs/` ante APIs nuevas (proxy.ts, root-params, params async).
