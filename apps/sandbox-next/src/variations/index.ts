export type Variation = { id: string; title: string; Preview: React.FC };
export type VariationModule = { variations: Variation[] };

// Mapa slug -> módulo de variaciones (añadimos más con el tiempo)
export const REGISTRY: Record<string, () => Promise<VariationModule>> = {
  botones:    () => import('./buttons'),
  alertas:    () => import('./alerts'),
  tarjetas:   () => import('./cards'),
};
