export type Client = {
  id: string;
  name: string;
  initials: string;
  tone: string;
};

export const clients: Client[] = [
  { id: "josue", name: "Josué Peña", initials: "JP", tone: "#a3e635" },
  { id: "eduardo", name: "Eduardo Acevedo", initials: "EA", tone: "#38bdf8" },
  { id: "toni", name: "Toni Metabólico", initials: "TM", tone: "#fb7185" },
  { id: "rodrigo", name: "Rodrigo Castellanos", initials: "RC", tone: "#fbbf24" },
];