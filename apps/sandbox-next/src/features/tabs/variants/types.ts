import type { ReactNode } from "react";

export type IdGrupo = "basicas" | "pills" | "iconos" | "avanzadas";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  vistaPrevia: ReactNode;  // server-safe markup
  tsx: string;             // snippet completo para copiar
};

export const GRUPOS = [
  { id:"basicas",   titulo:"Básicas" },
  { id:"pills",     titulo:"Píldoras / Sólidas / Segmentadas" },
  { id:"iconos",    titulo:"Con iconos / contadores" },
  { id:"avanzadas", titulo:"Vertical / Overflow / Con panel" },
] as const;

// alias por consistencia
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
