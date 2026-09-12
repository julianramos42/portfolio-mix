import type { Localized } from "@/lib/i18n-types";

export type Project = {
  id: string;
  title: string;
  description: Localized;
  stack: string[];
  colorFrom: string;
  colorTo: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  inProduction?: boolean;
  collaborative?: boolean;
};

export const projects: Project[] = [
  {
    id: "troncone-motors",
    title: "Troncone Motors",
    description: {
      es: "Sitio catálogo en producción de una concesionaria de autos usados. Además del desarrollo, diagnosticé y restructuré su campaña de Meta Ads y gestioné el marketing digital del negocio.",
      en: "Production catalog site for a used-car dealership. Beyond development, I diagnosed and restructured their Meta Ads campaign and manage their digital marketing.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    colorFrom: "#1e3a8a",
    colorTo: "#0f172a",
    demoUrl: "https://www.tronconemotors.com/",
    featured: true,
    inProduction: true,
  },
  {
    id: "gym-servermodel",
    title: "Gym Server Model",
    description: {
      es: "Backend de gestión de gimnasios: registro y autenticación por tokens JWT, acceso por DNI y CRUD de clientes. Arquitectura MVC con buenas prácticas de seguridad.",
      en: "Gym management backend: JWT token auth, DNI-based access and customer CRUD. MVC architecture with security best practices.",
    },
    stack: ["Node.js", "Express", "TypeScript", "JWT", "MongoDB", "Mongoose"],
    colorFrom: "#14532d",
    colorTo: "#052e16",
    githubUrl: "https://github.com/julianramos42/gym-servermodel",
    featured: true,
  },
  {
    id: "portfolio-editor",
    title: "Portfolio Editor",
    description: {
      es: "Sitio de mi perfil como editor de video, también desarrollado por mí: marca, catálogo de cortes y clientes.",
      en: "My video-editing profile site, also built by me: brand, cuts catalog and clients.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Diseño editorial"],
    colorFrom: "#0f766e",
    colorTo: "#042f2e",
    demoUrl: "https://www.julianramos.com.ar/",
  },
  {
    id: "tu-web-hoy",
    title: "Tu Web Hoy",
    description: {
      es: "Sitio comercial para servicios de diseño y desarrollo web: landing, secciones de servicios y contacto.",
      en: "Commercial site for web design & development services: landing, services sections and contact.",
    },
    stack: ["HTML", "CSS", "JavaScript", "React"],
    colorFrom: "#7c3aed",
    colorTo: "#3b0764",
    demoUrl: "https://tuwebhoy-git-main-julianramos42.vercel.app/",
  },
  {
    id: "social-network",
    title: "Social Network",
    description: {
      es: "Red social con autenticación JWT, publicaciones, likes y chat en tiempo real con Socket.io.",
      en: "Social network with JWT auth, posts, likes and real-time chat powered by Socket.io.",
    },
    stack: ["React", "Express", "Node.js", "MongoDB", "Socket.io", "REST API"],
    colorFrom: "#0e7490",
    colorTo: "#164e63",
    demoUrl: "https://jr-red-social.vercel.app/",
    githubUrl: "https://github.com/julianramos42/red-social-front",
  },
  {
    id: "lance",
    title: "Lance",
    description: {
      es: "Sitio colaborativo estilo portfolio/marketplace para profesionales, desarrollado en equipo como proyecto final de bootcamp.",
      en: "Collaborative marketplace-style site for professionals, built in a team as a bootcamp final project.",
    },
    stack: ["React", "Express", "Node.js", "MongoDB", "JWT"],
    colorFrom: "#b91c1c",
    colorTo: "#450a0a",
    demoUrl: "https://lance-app.vercel.app/",
    githubUrl: "https://github.com/julianramos42/proyecto-final-front",
    collaborative: true,
  },
  {
    id: "minga",
    title: "Minga",
    description: {
      es: "Proyecto colaborativo de streaming/gaming con autenticación, manejo de roles y consumo de APIs REST propias.",
      en: "Collaborative streaming/gaming platform with auth, role handling and custom REST APIs.",
    },
    stack: ["React", "Express", "Node.js", "MongoDB", "REST API"],
    colorFrom: "#a16207",
    colorTo: "#422006",
    demoUrl: "https://jr-minga-front.vercel.app/",
    githubUrl: "https://github.com/julianramos42/minga-front",
    collaborative: true,
  },
  {
    id: "petshop",
    title: "PetShop",
    description: {
      es: "E-commerce de mascotas con carrito, filtros de productos y consumo de una REST API.",
      en: "Pet e-commerce with cart, product filters and REST API integration.",
    },
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    colorFrom: "#15803d",
    colorTo: "#052e16",
    demoUrl: "https://julianramos42.github.io/petshop/",
    githubUrl: "https://github.com/julianramos42/petshop",
    collaborative: true,
  },
  {
    id: "todo-app",
    title: "To Do App",
    description: {
      es: "Aplicación de tareas con persistencia en LocalStorage y estados de completado/filtrado.",
      en: "Task manager with LocalStorage persistence and complete/filter states.",
    },
    stack: ["React", "JavaScript", "LocalStorage"],
    colorFrom: "#1d4ed8",
    colorTo: "#0f172a",
    demoUrl: "https://jr-todo-app.vercel.app/",
    githubUrl: "https://github.com/julianramos42/todo-app",
  },
  {
    id: "francisco-portfolio",
    title: "Francisco Ramos · Portfolio",
    description: {
      es: "Portfolio personal de fotografía y cine desarrollado para un cliente freelance.",
      en: "Personal photography & film portfolio built for a freelance client.",
    },
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
    colorFrom: "#334155",
    colorTo: "#0f172a",
    demoUrl: "https://francisco-ramos-portfolio.vercel.app/",
    githubUrl: "https://github.com/julianramos42/francisco-ramos-portfolio",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);