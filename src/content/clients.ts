export type Client = {
  id: string;
  name: string;
  initials: string;
  tone: string;
  year: string;
};

export const clients: Client[] = [
  { id: "rodrigo", name: "Rodrigo Castellanos", initials: "RC", tone: "#fbbf24", year: "2024" },
  { id: "eduardo", name: "Eduardo Acevedo", initials: "EA", tone: "#38bdf8", year: "2024" },
  { id: "toni", name: "Toni Metabólico", initials: "TM", tone: "#fb7185", year: "2025" },
  { id: "josue", name: "Josué Peña", initials: "JP", tone: "#a3e635", year: "2026" },
  { id: "infinity", name: "Infinity Design", initials: "ID", tone: "#a78bfa", year: "2026" },
  { id: "republica", name: "República TV", initials: "RT", tone: "#34d399", year: "2026" },
];