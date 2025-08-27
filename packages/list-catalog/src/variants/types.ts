import type { ReactNode } from "react";

export type IdGrupo =
  | "basicas"
  | "iconos"
  | "seleccion"
  | "acordeones"
  | "especiales";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;        // texto bajo la tarjeta
  vistaPrevia: ReactNode;  // preview real
  tsx: string;             // snippet copiable .tsx
};

export const GRUPOS = [
  { id: "basicas",    titulo: "Básicas" },
  { id: "iconos",     titulo: "Con iconos & meta" },
  { id: "seleccion",  titulo: "Selección" },
  { id: "acordeones", titulo: "Acordeones / Árbol" },
  { id: "especiales", titulo: "Especiales" },
] as const;

// alias
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
