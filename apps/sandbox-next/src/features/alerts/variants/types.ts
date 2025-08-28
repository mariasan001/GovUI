import type { ReactNode } from "react";

export type IdGrupo = "banners" | "inline" | "toasts";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  vistaPrevia: ReactNode; // server-safe
  tsx: string;            // snippet completo para copiar
};

export const GRUPOS = [
  { id:"banners", titulo:"Banners" },
  { id:"inline",  titulo:"Inline (form / info)" },
  { id:"toasts",  titulo:"Toasts (Sonner)" },
] as const;

export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
