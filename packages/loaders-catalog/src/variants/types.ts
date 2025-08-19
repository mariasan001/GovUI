// packages/.../features/loaders/variants/types.ts
import type React from "react";

export type GroupId = "circles" | "dots" | "fade" | "ball" | "time" | "wifi" | "page";

export type Variant = {
  id: string;
  name: string;
  group: GroupId;
  preview: React.ReactNode;
  tsx: string;
};

export type Group = { id: GroupId; label: string };

export const GROUPS = [
  { id: "circles", label: "Círculos" },
  { id: "dots",    label: "Puntos" },
  { id: "fade",    label: "Fade / Pulse" },
  { id: "ball",    label: "Bola" },
  { id: "time",    label: "Tiempo" },
  { id: "wifi",    label: "Wi-Fi" },
  { id: "page",    label: "Overlay de página" },
] as const satisfies readonly Group[];

