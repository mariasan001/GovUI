export const COLORS = {
  negro:  "#1A1A1A",
  blanco: "#ffffff",
  ginge:  "#D3BF9D",
  cafe:   "#B48954",
  vino:   "#7b1e3d",
} as const;

export type ColorKey = keyof typeof COLORS;

// Reglas de uso sugeridas (puedes mover esto a tokens/MDX luego)
export const USAGE = {
  title:    "negro",   // Títulos/H1–H3
  body:     "negro",   // Texto principal
  subtle:   "negro",   // Texto secundario: aplica opacidad 65% en CSS
  link:     "vino",    // Enlaces
  accent:   "cafe",    // Accentos/Badges
  success:  "ginge",   // (si lo usas como “éxito” cálido)
  surface:  "blanco",  // Fondos de tarjetas
  border:   "negro",   // Bordes: usa 10–12% opacidad
} as const satisfies Record<string, ColorKey>;