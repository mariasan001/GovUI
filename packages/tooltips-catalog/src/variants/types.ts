import type { ReactNode } from "react";

export type GroupId =
  | "basic"
  | "placement"
  | "status"
  | "rich"
  | "advanced";

export type Variant = {
  id: string;
  groupId: GroupId;
  label: string;
  preview: ReactNode; // server-safe
  tsx: string;        // snippet completo a copiar
};

export const GROUPS = [
  { id: "basic",     title: "Básicos" },
  { id: "placement", title: "Posiciones" },
  { id: "status",    title: "Estados/Colores" },
  { id: "rich",      title: "Ricos" },
  { id: "advanced",  title: "Avanzados" },
] as const;
