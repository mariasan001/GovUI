import type { ReactNode } from "react";

export type GroupId =
  | "basics"
  | "bars"
  | "lines"
  | "pies"
  | "radials"
  | "xy"
  | "hierarchy"
  | "advanced";

export type Variant = {
  id: string;
  groupId: GroupId;
  label: string;
  preview: ReactNode; // no se usa cuando hay LivePreview, pero lo mantenemos por consistencia
  tsx: string;        // snippet completo a copiar
};

export const GROUPS = [
  { id: "basics",    title: "Básicos" },
  { id: "bars",      title: "Barras" },
  { id: "lines",     title: "Líneas/Áreas" },
  { id: "pies",      title: "Pie / Donut" },
  { id: "radials",   title: "Radiales / Radar" },
  { id: "xy",        title: "XY / Dispersión" },
  { id: "hierarchy", title: "Jerarquía / Embudo" },
  { id: "advanced",  title: "Avanzados" },
] as const;
