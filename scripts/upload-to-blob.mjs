// npm run blob:upload
// Sube los videos re-coded de scripts/output/ a Vercel Blob y genera
// src/content/video-srcs.ts con las URLs públicas.
//
// Requiere:
//   1. Token read-write del store Blob: pégalo en .env.local como
//      BLOB_READ_WRITE_TOKEN=vercel_blob_rw_... (Vercel > Storage > Blob >
//      "crear store" > copiar token read-write). Si tu store pide un id
//      explícito: BLOB_STORE_ID=...
//   2. Proyecto linkeado a Vercel (genera .vercel/) o .env.local.
//
// Hobby: 1GB storage / 10GB transfer por mes.
//
// Uso: npm run blob:upload
// Los archivos quedan en https://<store>.public.blob.vercel-storage.com/videos/<id>.mp4
// Commitear src/content/video-srcs.ts con las URLs nuevas para el deploy.

import {
  createReadStream,
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { put } from "@vercel/blob";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "scripts", "output");
const targetFile = join(root, "src", "content", "video-srcs.ts");

function loadEnv(key) {
  const fromEnv = process.env[key];
  if (fromEnv) return fromEnv;
  for (const file of [".env.local", ".vercel/.env.development.local"]) {
    const p = join(root, file);
    if (!existsSync(p)) continue;
    const line = readFileSync(p, "utf8")
      .split(/\r?\n/)
      .map((l) => l.trim())
      .find((l) => l.startsWith(`${key}=`));
    if (line) {
      let value = line.slice(key.length + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")) ||
        (value.startsWith("`") && value.endsWith("`"))
      ) {
        value = value.slice(1, -1).trim();
      }
      return value;
    }
  }
  return null;
}

async function main() {
  const token = loadEnv("BLOB_READ_WRITE_TOKEN");
  if (!token) {
    console.error("Falta BLOB_READ_WRITE_TOKEN.");
    console.error(
      "Crea un store Blob en https://vercel.com y pega el token en .env.local (BLOB_READ_WRITE_TOKEN=...) o BLOB_STORE_ID si es requerido por tu store."
    );
    process.exit(1);
  }

  const storeId = loadEnv("BLOB_STORE_ID");
  if (!token) {
    console.error("Falta BLOB_READ_WRITE_TOKEN.");
    console.error(
      "Crea un store Blob en https://vercel.com y pega el token en .env.local (BLOB_READ_WRITE_TOKEN=...)"
    );
    process.exit(1);
  }

  const files = readdirSync(outDir)
    .filter((f) => f.toLowerCase().endsWith(".mp4"))
    .sort((a, b) => Number(a.replace(/\D/g, "")) - Number(b.replace(/\D/g, "")));

  if (files.length === 0) {
    console.error(`No hay .mp4 en ${outDir}. Corré antes scripts/prepare-videos.ps1`);
    process.exit(1);
  }

  console.log(`Subiendo ${files.length} videos a Vercel Blob…`);
  const entries = {};
  let uploadedBytes = 0;

  for (const [i, file] of files.entries()) {
    const path = join(outDir, file);
    const bytes = statSync(path).size;
    const id = file.replace(/\.mp4$/i, "");

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const { url } = await put(`videos/${file}`, createReadStream(path), {
          access: "public",
          addRandomSuffix: false,
          contentType: "video/mp4",
          cacheControlMaxAge: 31536000,
          token,
          ...(storeId ? { storeId } : {}),
        });
        entries[id] = url;
        uploadedBytes += bytes;
        console.log(
          `  [${i + 1}/${files.length}] ${file} (${(bytes / 1e6).toFixed(1)}MB) -> ${url}`
        );
        break;
      } catch (err) {
        if (attempt === 3) {
          console.error(`  ✗ falla permanente en ${file}: ${err.message}`);
          process.exitCode = 1;
        } else {
          console.warn(`  ! reintento ${attempt} para ${file}: ${err.message}`);
          await new Promise((r) => setTimeout(r, 1500 * attempt));
        }
      }
    }
  }

  if (process.exitCode) {
    console.error(
      "Hubo errores; revisá la salida. No se escribió video-srcs.ts."
    );
    process.exit(process.exitCode);
  }

  const src = [
    "// Generado por `npm run blob:upload`. No editar a mano.",
    "// Mapea id de video -> URL pública en Vercel Blob.",
    "export const videoSrcs: Record<string, string> = {",
    ...Object.entries(entries)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([id, url]) => `  "${id}": "${url}",`),
    "};",
    "",
  ].join("\n");

  writeFileSync(targetFile, src, "utf8");
  console.log(
    `\n✓ ${Object.keys(entries).length} videos subidos (${(uploadedBytes / 1e6).toFixed(1)}MB).`
  );
  console.log(`✓ Archivos en https://*.public.blob.vercel-storage.com/videos/<id>.mp4`);
  console.log(`✓ Actualizado ${targetFile}. Commitearlo y deploy.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
