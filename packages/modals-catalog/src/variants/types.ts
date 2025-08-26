import type { ReactNode } from "react";

export type IdGrupo =
  | "basicos"
  | "confirmaciones"
  | "formularios"
  | "paneles"
  | "movil"
  | "avanzados";

export type DemoKind =
  | "basic" | "scroll" | "confirm" | "danger" | "form-login"
  | "drawer-right" | "bottom-sheet" | "wizard" | "fullscreen"
  | "lightbox" | "alert";

export type Variante = {
  id: string;
  idGrupo: IdGrupo;
  etiqueta: string;
  tsx: string; // snippet completo listo para pegar
  demo: { kind: DemoKind; title?: string; text?: string };
};

export const GRUPOS = [
  { id: "basicos",         titulo: "Básicos" },
  { id: "confirmaciones",  titulo: "Confirmaciones" },
  { id: "formularios",     titulo: "Formularios" },
  { id: "paneles",         titulo: "Paneles / Drawers" },
  { id: "movil",           titulo: "Móvil / Bottom Sheet" },
  { id: "avanzados",       titulo: "Avanzados" }
] as const;

// Alias de compatibilidad
export type GroupId = IdGrupo;
export type Variant = Variante;
export const GROUPS = GRUPOS;
