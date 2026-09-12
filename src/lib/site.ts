export const site = {
  name: "Julián Ramos",
  firstName: "Julián",
  lastName: "Ramos",
  location: "Buenos Aires, Argentina",
  domain: "https://julianramos.com.ar",
  phoneDisplay: "+54 9 11 5023-4561",
  whatsapp: "5491150234561",
  emails: {
    dev: "julian26.ramos@gmail.com",
    video: "julian.edicion26@gmail.com",
  },
  linkedin: "https://www.linkedin.com/in/julianramos42/",
  github: "https://github.com/julianramos42",
} as const;

export function waLink(message: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}