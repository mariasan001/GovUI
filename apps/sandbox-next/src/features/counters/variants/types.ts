import type { ReactNode } from "react";

/** Nombres en español */
export type IdGrupo =
  | "metricas"
  | "ingresos"
  | "resumen"
  | "agenda"
  | "integraciones";

export type Variante = {
  id: string;            // slug interno
  idGrupo: IdGrupo;      // grupo al que pertenece
  etiqueta: string;      // texto que se muestra bajo la tarjeta
  vistaPrevia: ReactNode;// preview server-safe
  tsx: string;           // snippet completo para copiar
};

export const GRUPOS = [
  { id: "metricas",     titulo: "KPIs / Mini" },
  { id: "ingresos",     titulo: "Ingresos / Engagement" },
  { id: "resumen",      titulo: "Totales" },
  { id: "agenda",       titulo: "Reuniones" },
  { id: "integraciones",titulo: "Integraciones" },
] as const;

/* ---------- Compatibilidad con el resto del código ---------- */
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
