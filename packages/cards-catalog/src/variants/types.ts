import type React from "react";

export type Variant = {
  id: string;
  name: string;
  group: "basic" | "profile" | "list" | "info";
  preview: React.ReactNode; // JSX para mostrar
  tsx: string;              // código copiable
};

export const GROUPS = [
  { id: "all", label: "Todos" },
  { id: "basic", label: "Básicos" },
  { id: "profile", label: "Perfil" },
  { id: "list", label: "Listas" },
  { id: "info", label: "Info" }
] as const;
