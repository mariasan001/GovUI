import type { ReactNode } from "react";

export type GroupId =
  | "basics"          
  | "validation"   
  | "layout"        
  | "collections"   
  | "upload"        
  | "datetime" 
  | "auth"     
  | "advanced"; 

export type Variant = {
  id: string; 
  groupId: GroupId;
  label: string;
  preview: ReactNode;
  tsx: string;
};

export const GROUPS = [
  { id: "basics",      title: "Básicos" },
  { id: "validation",  title: "Validación" },
  { id: "layout",      title: "Layouts" },
  { id: "collections", title: "Colecciones" },
  { id: "upload",      title: "Archivos" },
  { id: "datetime",    title: "Fecha y hora" },
  { id: "auth",        title: "Autenticación" },
  { id: "advanced",    title: "Avanzados" },
] as const;
