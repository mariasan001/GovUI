'use client';

export { default as CardsShowcase } from "./components/CardsShowcase.client";
export {  Dialog } from "./components/Dialog";

// ✅ Re-exporta el default como named
export { default as Tile } from "./components/Tile";

export { default as useCopy } from "./hook/useCopy";
export { copyToClipboard } from "./lib/copy";

export { VARIANTS, VARIANTS_BY_ID } from "./variants";
export type { Variant } from "./variants/types";
export { GROUPS } from "./variants/types";
