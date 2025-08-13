import type { JSX as ReactJSX } from "react";

export const FONT_FAMILY = `var(--font-sans, "Inter", "Segoe UI", system-ui, -apple-system, "Noto Sans", Arial, sans-serif)`;

export type TypoToken = {
  name: string;
  className: string;
  tag: keyof ReactJSX.IntrinsicElements; // h1, p, etc
  weight: number;
  size: number;
  line: number;
  tracking?: string;
  transform?: "uppercase";
  sample: string;
};

export const TYPO_TOKENS: TypoToken[] = [
  { name: "Heading 1", className: "gov-h1", tag: "h1", weight: 700, size: 48, line: 56, sample: "Heading 1" },
  { name: "Heading 2", className: "gov-h2", tag: "h2", weight: 600, size: 36, line: 44, sample: "Heading 2" },
  { name: "Heading 3", className: "gov-h3", tag: "h3", weight: 600, size: 24, line: 32, sample: "Heading 3" },
  { name: "Heading 4", className: "gov-h4", tag: "h4", weight: 700, size: 18, line: 28, tracking: "0.2px", sample: "Heading 4" },
  { name: "Paragraph", className: "gov-p",  tag: "p",  weight: 400, size: 16, line: 24, sample: "Paragraph text" },
  { name: "Label",     className: "gov-label", tag: "span", weight: 700, size: 12, line: 16, tracking: "0.5px", transform: "uppercase", sample: "LABEL TEXT" },
  { name: "Small",     className: "gov-small", tag: "small", weight: 600, size: 12, line: 16, tracking: "0.2px", sample: "Small text" },
];

export const WEIGHTS = [
  { label: "Regular",  weight: 400 },
  { label: "Medium",   weight: 500 },
  { label: "SemiBold", weight: 600 },
  { label: "Bold",     weight: 700 },
  { label: "Heavy",    weight: 800 },
];
/**me marca error en  constants:  
 * No se encuentra el espacio de nombres 'JSX'.ts(2503)
export type TypoToken = {
  name: string;       // Heading 1
  className: string;  // gov-h1
  tag: keyof JSX.IntrinsicElements; // h1, p, etc
  weight: number;     // 400..800
  size: number;       // px
  line: number;       // px line-height
  tracking?: string;  // letter-spacing
  transform?: "uppercase";
  sample: string;
};

 */