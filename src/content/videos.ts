import type { Localized } from "@/lib/i18n-types";
import { clients } from "@/content/clients";
import { videoSrcs } from "@/content/video-srcs";

export type Video = {
  id: string;
  clientId: string;
  poster: string;
  src: string;
  title: Localized;
};

const PERSONAL = "personal";

const videoMap: Record<string, string> = {
  "1": PERSONAL,
  "2": PERSONAL,
  "3": PERSONAL,
  "4": PERSONAL,
  "5": "rodrigo",
  "6": "rodrigo",
  "7": "rodrigo",
  "8": "rodrigo",
  "9": "rodrigo",
  "10": "rodrigo",
  "11": "rodrigo",
  "12": "rodrigo",
  "13": "eduardo",
  "14": "eduardo",
  "15": "eduardo",
  "16": "eduardo",
  "17": "eduardo",
  "18": "eduardo",
  "19": "eduardo",
  "20": "eduardo",
  "21": "toni",
  "22": "toni",
  "23": "toni",
  "24": "toni",
  "25": "toni",
  "26": "toni",
  "27": "toni",
  "28": "toni",
  "29": "josue",
  "30": "josue",
  "31": "josue",
};

function buildVideo(id: string, clientId: string): Video {
  const sequence =
    Object.entries(videoMap)
      .filter(([, value]) => value === clientId)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([videoId]) => videoId)
      .indexOf(id) + 1;

  const client = clients.find((c) => c.id === clientId);

  if (client) {
    return {
      id,
      clientId,
      poster: `/posters/${id}.jpg`,
      src: videoSrcs[id] ?? `/videos/${id}.mp4`,
      title: {
        es: `${client.name} · Corte ${sequence}`,
        en: `${client.name} · Cut ${sequence}`,
      },
    };
  }

  return {
    id,
    clientId,
    poster: `/posters/${id}.jpg`,
    src: videoSrcs[id] ?? `/videos/${id}.mp4`,
    title: {
      es: `Proyecto personal · Práctica ${sequence}`,
      en: `Personal project · Practice ${sequence}`,
    },
  };
}

export const allVideos: Video[] = [
  ...Object.entries(videoMap)
    .filter(([, value]) => value !== PERSONAL)
    .sort(([a], [b]) => Number(a) - Number(b))
    .sort(([, v1], [, v2]) => {
      const i1 = clients.findIndex((c) => c.id === v1);
      const i2 = clients.findIndex((c) => c.id === v2);
      return i1 - i2;
    })
    .map(([id, clientId]) => buildVideo(id, clientId)),
  ...Object.entries(videoMap)
    .filter(([, value]) => value === PERSONAL)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, clientId]) => buildVideo(id, clientId)),
];

export const personalVideos = allVideos.filter((v) => v.clientId === PERSONAL);

export const clientVideos = allVideos.filter((v) => v.clientId !== PERSONAL);

export const allVideosByClient = (clientId: string) =>
  allVideos.filter((v) => v.clientId === clientId);

export const allVideosForClient = (clientId: string) =>
  allVideos.filter((v) => v.clientId === clientId);
