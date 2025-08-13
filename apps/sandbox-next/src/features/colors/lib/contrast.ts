// utilidades mínimas para contraste APCA/WCAG-ish (simplificado con luminancia sRGB)
export function hexToRgb(hex: string) {
  const s = hex.replace("#","");
  const n = parseInt(s.length === 3 ? s.split("").map(c=>c+c).join("") : s, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function channel(c: number) {
  c /= 255;
  return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
}
export function luminance(hex: string) {
  const {r,g,b} = hexToRgb(hex);
  return 0.2126*channel(r)+0.7152*channel(g)+0.0722*channel(b);
}
export function contrastRatio(fg: string, bg: string) {
  const L1 = luminance(fg)+0.05;
  const L2 = luminance(bg)+0.05;
  return (Math.max(L1,L2)/Math.min(L1,L2));
}
