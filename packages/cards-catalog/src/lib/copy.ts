// packages/cards-catalog/src/lib/copy.ts
// (si aún estás en features, usa la misma lógica en apps/.../features/cards/lib/copy.ts)
export { default as copyToClipboard } from "./safeCopy";
export type CopyFn = (text: string) => Promise<boolean>;
