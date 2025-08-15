'use client';

export { default as ButtonsShowcase } from "./components/ButtonsShowcase.clint";

// (opcional) re-export para conveniencia si lo quieres también desde /next
export { default as GovButton } from "./components/Button";

export { VARIANTS, VARIANTS_BY_ID } from "./variants";
export type { Variant } from "./variants/types";
export { GROUPS } from "./variants/types";
