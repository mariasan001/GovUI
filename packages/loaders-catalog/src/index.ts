// Tipos + grupos
export type { Variant, Group, GroupId } from "./variants/types";
export { GROUPS } from "./variants/types";

// Catálogo
export { VARIANTS, VARIANTS_BY_ID } from "./variants";

// Componentes (para uso directo si no se quiere el entry /next)
export { default as LoadersShowcase } from "./components/LoadersShowcase.client";
export { default as PageLoader } from "./components/PageLoader.client";
