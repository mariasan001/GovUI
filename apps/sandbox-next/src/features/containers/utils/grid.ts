export const BREAKPOINTS = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 } as const;
export const COLS        = { lg: 12,   md: 10,  sm: 8,   xs: 6,   xxs: 4 } as const;
export type BpKey = keyof typeof BREAKPOINTS;
