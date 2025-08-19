import * as React from "react";
import type { Variant } from "./types";


/** Helper: setear CSS custom props con tipado */
const cssvars = (o: Record<string, string | number>) => o as React.CSSProperties;

/** Caja visual para cada loader */
const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="loader-demo">{children}</div>
);

/** Import base para lo que se copia al portapapeles
 *  - Si aún estás en features, cambia la ruta por "@features/loaders"
 */
const IMPORT = `import { GovLoader, GovPageLoader } from "@govui/loaders-catalog/next";\n\n`;

/* 1) Ring */
const vRing: Variant = {
  id: "ldr-ring",
  name: "Anillo",
  group: "circles",
  preview: <Box><span className="gov-loader gov-loader--ring" /></Box>,
  tsx: `${IMPORT}<GovLoader variant="ring" />`,
};

/* 2) Ring dashed */
const vRingDashed: Variant = {
  id: "ldr-ring-dashed",
  name: "Anillo dashed",
  group: "circles",
  preview: <Box><span className="gov-loader gov-loader--ring-dashed" /></Box>,
  tsx: `${IMPORT}<GovLoader variant="ring-dashed" />`,
};

/* 3) Dots */
const vDots: Variant = {
  id: "ldr-dots",
  name: "Tres puntos",
  group: "dots",
  preview: (
    <Box>
      <span className="gov-loader gov-loader--dots">
        <i /><i /><i />
      </span>
    </Box>
  ),
  tsx: `${IMPORT}<GovLoader variant="dots" />`,
};

/* 4) Pulse */
const vPulse: Variant = {
  id: "ldr-pulse",
  name: "Pulse",
  group: "fade",
  preview: <Box><span className="gov-loader gov-loader--pulse" /></Box>,
  tsx: `${IMPORT}<GovLoader variant="pulse" />`,
};

/* 5) Ball */
const vBall: Variant = {
  id: "ldr-ball",
  name: "Bola",
  group: "ball",
  preview: <Box><span className="gov-loader gov-loader--ball" /></Box>,
  tsx: `${IMPORT}<GovLoader variant="ball" />`,
};

/* 6) Clock */
const vClock: Variant = {
  id: "ldr-clock",
  name: "Reloj",
  group: "time",
  preview: <Box><span className="gov-loader gov-loader--clock" /></Box>,
  tsx: `${IMPORT}<GovLoader variant="clock" />`,
};

/* 7) Wi-Fi */
const vWifi: Variant = {
  id: "ldr-wifi",
  name: "Wi-Fi",
  group: "wifi",
  preview: (
    <Box>
      <span className="gov-loader gov-loader--wifi">
        <i /><i /><i />
      </span>
    </Box>
  ),
  tsx: `${IMPORT}<GovLoader variant="wifi" />`,
};

/* 8) Page Loader */
const vPage: Variant = {
  id: "ldr-page",
  name: "Overlay de página",
  group: "page",
  preview: (
    <div
      style={{
        position: "relative",
        minHeight: 160,
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,.08)",
        background: "color-mix(in srgb, var(--ink) 6%, var(--surface))",
      }}
    >
      <div className="gov-page-loader" style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <div className="gov-page-loader__card">
          <span className="gov-loader gov-loader--ring" style={cssvars({ "--size": "36px" })} />
          <div className="gov-page-loader__title">Cargando…</div>
          <div className="gov-page-loader__msg">Preparando datos</div>
        </div>
      </div>
    </div>
  ),
  tsx: `${IMPORT}<GovPageLoader open title="Un momento" message="Cargando datos…" />`,
};

export const VARIANTS: Variant[] = [
  vRing, vRingDashed,
  vDots, vPulse, vBall,
  vClock, vWifi,
  vPage,
];

export const VARIANTS_BY_ID = Object.fromEntries(
  VARIANTS.map(v => [v.id, v] as const)
) as Record<(typeof VARIANTS)[number]["id"], Variant>;
