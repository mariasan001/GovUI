import type { ReactNode } from "react";

export type IdGrupo =
  | "basicos"
  | "navegacion"
  | "gov"
  | "acciones"
  | "legales";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  vistaPrevia: ReactNode;
  tsx: string;
};

export const GRUPOS = [
  { id: "basicos",    titulo: "Básicos" },
  { id: "navegacion", titulo: "Con navegación" },
  { id: "gov",        titulo: "Gobierno / Institucional" },
  { id: "acciones",   titulo: "Acciones / CTA / Social" },
  { id: "legales",    titulo: "Legales / Créditos" },
] as const;

// alias
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
