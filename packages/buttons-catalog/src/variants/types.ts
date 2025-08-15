// src/variants/types.ts
import type React from "react";

/** Grupos disponibles para el catálogo de botones */
export const GROUPS = [
  { id: "all",     label: "Todos" },
  { id: "styles",  label: "Estilos" },
  { id: "sizes",   label: "Tamaños" },
  { id: "states",  label: "Estados" },
  { id: "icons",   label: "Íconos" },
  { id: "layout",  label: "Layout" },
] as const;

/** Union literal con los ids de grupo (derivado de GROUPS) */
export type GroupId = typeof GROUPS[number]["id"];

/** Los variants reales pertenecen a un grupo distinto de "all" */
export type VariantGroup = Exclude<GroupId, "all">;

/** Definición de un variant del catálogo */
export type Variant = {
  id: string;              // identificador único
  name: string;            // nombre legible
  group: VariantGroup;     // grupo al que pertenece
  preview: React.ReactNode;// JSX que se muestra en el catálogo (server-safe)
  tsx: string;             // snippet copiable (con <GovButton .../>)
};

/** (Opcional) orden recomendado de grupos para UI */
export const GROUP_ORDER: Readonly<Record<VariantGroup, number>> = {
  styles: 0,
  sizes: 1,
  states: 2,
  icons: 3,
  layout: 4,
};
