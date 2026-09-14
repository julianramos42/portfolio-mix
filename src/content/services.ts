import type { Localized } from "@/lib/i18n-types";

export type EditorService = {
  id: string;
  title: Localized;
  description: Localized;
};

export const editingWorkflow: EditorService[] = [
  {
    id: "preproduccion",
    title: { es: "Preproducción", en: "Pre-production" },
    description: {
      es: "Organizo archivos de video, audio y gráficos para tener acceso rápido a todo el material durante el proceso de edición.",
      en: "Organize video, audio and graphic assets so everything is at hand during the editing process.",
    },
  },
  {
    id: "montaje",
    title: { es: "Montaje", en: "Editing" },
    description: {
      es: "Secuencia inicial con cortes precisos, transiciones para dar fluidez narrativa y decisiones de continuidad.",
      en: "Initial sequence with precise cuts, transitions for narrative flow and continuity decisions.",
    },
  },
  {
    id: "subtitulado",
    title: { es: "Subtitulado dinámico", en: "Dynamic subtitles" },
    description: {
      es: "Subtítulos sincronizados con el audio y los cortes, legibles y bien temporizados para mejorar comprensión y retención.",
      en: "Subtitles synced with audio and cuts, readable and well timed to boost understanding and retention.",
    },
  },
  {
    id: "planificacion",
    title: { es: "Planificación y acción", en: "Planning & execution" },
    description: {
      es: "Defino dónde van zooms, gráficos y efectos de sonido para armar una edición eficaz, y la ejecuto.",
      en: "Decide where zooms, graphics and SFX go to build an effective edit, then execute it.",
    },
  },
  {
    id: "revision",
    title: { es: "Revisión", en: "Review" },
    description: {
      es: "Revisión interna, ajustes y ronda de feedback con el cliente hasta que el corte queda redondo.",
      en: "Internal review, refinements and feedback rounds with the client until the cut lands.",
    },
  },
  {
    id: "entrega",
    title: { es: "Entrega", en: "Delivery" },
    description: {
      es: "Exportación en el formato, resolución y calidad correctos para cada plataforma.",
      en: "Export in the right format, resolution and quality for each platform.",
    },
  },
];

export const editingSpecials: EditorService[] = [
  {
    id: "short-form",
    title: { es: "Short-form de retención", en: "Retention short-form" },
    description: {
      es: "Shorts, Reels y TikToks con hooks por delante. Identifico el “Clip Intro” y el “Clip Hype” y adapto material horizontal a 9:16.",
      en: "Shorts, Reels and TikToks with front-loaded hooks. I spot the “Intro clip” and the “Hype clip” and adapt 16:9 material to 9:16.",
    },
  },
  {
    id: "podcast",
    title: { es: "Podcasts y long-form", en: "Podcasts & long-form" },
    description: {
      es: "Ensamble técnico con sincronización multicámara (hasta 3), limpieza de audio y conversión del episodio en micro-contenido.",
      en: "Technical assembly with multicam sync (up to 3 cameras), audio cleanup and converting episodes into micro-content.",
    },
  },
  {
    id: "vlogs",
    title: { es: "Vlogs y storytelling", en: "Vlogs & storytelling" },
    description: {
      es: "Edición narrativa para vlogs y marca personal: ritmo, subtítulos y estructura que mantienen el interés de principio a fin.",
      en: "Narrative editing for vlogs and personal brands: pacing, captions and structure that keep viewers hooked from start to finish.",
    },
  },
  {
    id: "branding",
    title: { es: "Artes y branding para canales", en: "Channel art & branding" },
    description: {
      es: "Packs de arte para YouTube e Instagram: títulos animados, lower thirds y una estética de marca consistente en cada publicación.",
      en: "Art packs for YouTube and Instagram: animated titles, lower thirds and a consistent brand look across every post.",
    },
  },
];