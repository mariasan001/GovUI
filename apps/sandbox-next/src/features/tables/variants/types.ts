import type { ReactNode } from "react";

export type IdGrupo = "basicas" | "seleccion" | "filtros" | "avanzadas";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;        // texto bajo la tarjeta
  vistaPrevia: ReactNode;  // preview real en la galería
  tsx: string;             // snippet .tsx completo y listo
};

export const GRUPOS = [
  { id: "basicas",   titulo: "Básicas" },
  { id: "seleccion", titulo: "Selección / Acciones" },
  { id: "filtros",   titulo: "Filtros & Rangos" },
  { id: "avanzadas", titulo: "Avanzadas (expandibles)" },
] as const;

// Alias compat
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
