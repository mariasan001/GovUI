import type { ReactNode } from "react";

export type IdGrupo = "basicos" | "filtros" | "categorias" | "resultados" | "power";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  vistaPrevia: ReactNode; // markup server-safe
  tsx: string;            // snippet .tsx completo para copiar
};

export const GRUPOS = [
  { id:"basicos",    titulo:"Básicos" },
  { id:"filtros",    titulo:"Con filtros / chips" },
  { id:"categorias", titulo:"Con categorías" },
  { id:"resultados", titulo:"Con resultados" },
  { id:"power",      titulo:"Power user" },
] as const;

// Aliases
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;




