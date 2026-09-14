import type { Localized } from "@/lib/i18n-types";

export type Project = {
  id: string;
  title: string;
  description: Localized;
  stack: string[];
  colorFrom: string;
  colorTo: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  inProduction?: boolean;
};

export const projects: Project[] = [
  {
    id: "troncone-motors",
    title: "Troncone Motors",
    description: {
      es: "Sitio catálogo en producción de una concesionaria de autos usados, con fichas de vehículo, filtros y contacto directo por WhatsApp.",
      en: "Production catalog site for a used-car dealership, with vehicle cards, filters and direct WhatsApp contact.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    colorFrom: "#1e3a8a",
    colorTo: "#0f172a",
    image: "/projects/troncone.jpg",
    demoUrl: "https://www.tronconemotors.com/",
    featured: true,
    inProduction: true,
  },
  {
    id: "gym-servermodel",
    title: "Gym Server Model",
    description: {
      es: "API REST para gestión de gimnasios: registro y login con JWT, acceso por DNI y CRUD de clientes. Arquitectura MVC, práctica backend en progreso.",
      en: "REST API for gym management: JWT signup/login, DNI-based entry and client CRUD. MVC architecture, backend practice work in progress.",
    },
    stack: ["Node.js", "Express", "Mongoose", "JWT", "MongoDB"],
    colorFrom: "#14532d",
    colorTo: "#052e16",
    githubUrl: "https://github.com/julianramos42/gym-servermodel",
    featured: true,
  },
  {
    id: "francisco-portfolio",
    title: "Francisco Ramos · Portfolio",
    description: {
      es: "Portfolio personal de fotografía y cine desarrollado para un cliente freelance, con galería curada y foco en lo visual.",
      en: "Personal photography & film portfolio built for a freelance client, with a curated gallery and visual focus.",
    },
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
    colorFrom: "#334155",
    colorTo: "#0f172a",
    image: "/projects/francisco.jpg",
    demoUrl: "https://francisco-ramos-portfolio.vercel.app/",
    githubUrl: "https://github.com/julianramos42/francisco-ramos-portfolio",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);