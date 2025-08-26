import type { ReactNode } from "react";

export type IdGrupo =
  | "metricas"
  | "ingresos"
  | "resumen"
  | "agenda"
  | "integraciones";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  vistaPrevia: ReactNode;
  tsx: string;
};

export const GRUPOS = [
  { id: "metricas",      titulo: "KPIs / Mini" },
  { id: "ingresos",      titulo: "Ingresos / Engagement" },
  { id: "resumen",       titulo: "Totales" },
  { id: "agenda",        titulo: "Reuniones" },
  { id: "integraciones", titulo: "Integraciones" }
] as const;

// Alias de compatibilidad (si tu app aún usa inglés)
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
