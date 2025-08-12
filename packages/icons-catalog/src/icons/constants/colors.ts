export const COLORS = {
  negro: "#1A1A1A",
  blanco: "#ffffff",
  ginge: "#D3BF9D",
  cafe:  "#B48954",
  vino:  "#7b1e3d"
} as const;

export type ColorKey = keyof typeof COLORS;
