import type { Localized } from "@/lib/i18n-types";

export type SkillGroup = {
  id: string;
  title: Localized;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: ["Node.js", "Express", "TypeScript", "REST APIs", "JWT / Auth"],
  },
  {
    id: "databases",
    title: { es: "Base de datos", en: "Databases" },
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    id: "architecture",
    title: { es: "Arquitectura y buenas prácticas", en: "Architecture & best practices" },
    items: ["SOLID", "Clean Code", "MVC / Capas", "Scrum", "Git / GitHub", "Postman"],
  },
  {
    id: "academico",
    title: { es: "Formación académica", en: "Academic background" },
    items: ["Java (POO)", "Algoritmos y estructuras", "Ingeniería de Software", "Bases de datos relacionales"],
  },
  {
    id: "herramientas",
    title: { es: "Herramientas e IA", en: "Tools & AI" },
    items: ["GitHub Copilot", "OpenCode", "ClickUp", "Airtable"],
  },
];