import type { ReactNode } from "react";

export type IdGrupo = "basicos" | "rango" | "eventos" | "vistas";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  vistaPrevia: ReactNode; // server-safe
  tsx: string; // snippet completo para copiar
};

export const GRUPOS = [
  { id: "basicos", titulo: "Básicos" },
  { id: "rango", titulo: "Selección y Rango" },
  { id: "eventos", titulo: "Con eventos" },
  { id: "vistas", titulo: "Vistas (semana/agenda/fecha-hora)" },
] as const;

// Aliases
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
