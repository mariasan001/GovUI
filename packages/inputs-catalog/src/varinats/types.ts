import type React from "react";

export const GROUPS = [
  { id: "all", label: "Todos" },
  { id: "basic", label: "Básicos" },
  { id: "states", label: "Estados" },
  { id: "sizes", label: "Tamaños" },
  { id: "addons", label: "Addons" },
] as const;

export type GroupId = typeof GROUPS[number]["id"];
export type VariantGroup = Exclude<GroupId, "all">;

export type Variant = {
  id: string;
  name: string;
  group: VariantGroup;
  preview: React.ReactNode; // server-safe
  tsx: string;              // snippet con <GovInput />
};
