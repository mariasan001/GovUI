export type Variant = {
  id: string;
  name: string;
  group: "topbar" | "search" | "dark" | "mobile" | "lateral";
  preview: React.ReactNode;
  tsx: string;
};
export const GROUPS = [
  { id: "all", label: "Todos" },
  { id: "topbar", label: "Topbar" },
  { id: "search", label: "Con búsqueda" },
  { id: "dark", label: "Oscuro" },
  { id: "mobile", label: "Móvil" },
  { id: "lateral", label: "Lateral" },
] as const;
