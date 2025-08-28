// utils/codegen.ts
import type { Layout } from 'react-grid-layout';
import type { Box, RLayouts } from './types';

/* ───────── helpers de nombres ───────── */
const toSlug = (s: string) =>
  s.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const toPascal = (s: string) =>
  s.trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/\s+/g).filter(Boolean)
    .map(w => w[0]?.toUpperCase() + w.slice(1).toLowerCase())
    .join('');

/* ───────── orden / normalización ───────── */
const sortByCoords = (layout: Layout[]) =>
  [...layout].sort((a, b) => (a.y - b.y) || (a.x - b.x));

/** Reemplaza y === Infinity por posiciones reales al final */
function normalizeLayout(layout: Layout[]): Layout[] {
  const finite = layout.filter(l => Number.isFinite(l.y));
  const maxY = finite.length ? Math.max(...finite.map(l => Number(l.y))) : -1;
  let cursor = maxY + 1;

  // Mantén orden para los Infinity (por x, luego i)
  const inf = layout
    .filter(l => !Number.isFinite(l.y))
    .sort((a, b) => (a.x - b.x) || String(a.i).localeCompare(String(b.i)));

  const normalized: Record<string, number> = {};
  for (const l of inf) normalized[String(l.i)] = cursor++;

  return layout.map(l => ({
    ...l,
    y: Number.isFinite(l.y) ? Number(l.y) : normalized[String(l.i)]!,
    x: Number(l.x),
    w: Number(l.w),
    h: Number(l.h),
  }));
}

/* ──────────────────────────────────────────────────────────
   1) Página Next.js con CSS inline (Grid exacto 12 cols)
   ────────────────────────────────────────────────────────── */
export function makeNextPageRouteTsx(
  sectionTitle: string,
  boxes: Box[],
  layouts: RLayouts,
  gapPx: number,
  rowHPx: number
) {
  const slug = toSlug(sectionTitle || 'seccion');
  const comp = `${toPascal(sectionTitle || 'Seccion')}Page`;

  const labels = new Map<string, string>();
  boxes.forEach((b, i) => labels.set(b.id, b.label || `Box ${i + 1}`));

  const L = normalizeLayout(layouts.lg ?? []);
  const ordered = sortByCoords(L);

  const items = ordered.map((it) => {
    const label = labels.get(it.i) || it.i;
    return `
      {/* ${label} */}
      <div
        style={{
          gridColumn: '${it.x + 1} / span ${it.w}',
          gridRow: '${it.y + 1} / span ${it.h}',
          border: '1px solid rgba(16,24,40,.12)',
          borderRadius: 12,
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#555',
          minHeight: 120
        }}
      >
        ${label}
      </div>`;
  }).join('\n');

  return `'use client';

import React from 'react';

// app/${slug}/page.tsx
export default function ${comp}() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>${sectionTitle || 'Sección'}</h1>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Esqueleto generado con GOVUI Container Builder.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          gridAutoRows: '${rowHPx}px',
          gap: '${gapPx}px',
          marginTop: '2rem'
        }}
      >
${items}
      </div>
    </main>
  );
}
`;
}

/* ──────────────────────────────────────────────────────────
   2) Sección suelta (componente portable) en CSS Grid
   ────────────────────────────────────────────────────────── */
export function makeSectionFlexTsx(
  sectionTitle: string,
  boxLabel?: string,
  spanCols: number = 12
) {
  const comp = `${toPascal(sectionTitle || 'Seccion')}Section`;
  const label = boxLabel || sectionTitle || 'Sección';
  const span = Math.max(1, Math.min(12, spanCols));

  return `'use client';

import React from 'react';

export default function ${comp}(){
  return (
    <section style={{ padding: '1.5rem 0' }}>
      {/* ${label} */}
      <div
        style={{
          display:'grid',
          gridTemplateColumns:'repeat(12, minmax(0,1fr))',
          gap:'24px'
        }}
      >
        <div
          style={{
            gridColumn: 'span ${span} / span ${span}',
            minHeight: 160,
            background:'#fff',
            borderRadius: 12,
            border:'1px solid rgba(16,24,40,.12)',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'#555'
          }}
        >
          ${label}
        </div>
      </div>
    </section>
  );
}
`;
}

/* ──────────────────────────────────────────────────────────
   3) Página Next.js + CSS Module (dos archivos)
   ────────────────────────────────────────────────────────── */
export function makeNextPageWithCssModule(
  sectionTitle: string,
  boxes: Box[],
  layouts: RLayouts,
  gapPx: number,
  rowHPx: number
) {
  const slug   = toSlug(sectionTitle || 'seccion');
  const pascal = toPascal(sectionTitle || 'Seccion');
  const cssFile = `${pascal}.module.css`;
  const tsxFile = `${slug}.page.tsx`;

  const labels = new Map<string, string>();
  boxes.forEach((b, i) => labels.set(b.id, b.label || `Box ${i + 1}`));

  const L = normalizeLayout(layouts.lg ?? []);
  const ordered = sortByCoords(L);

  // TSX
  const itemsTsx = ordered.map(it => {
    const label = labels.get(it.i) || it.i;
    return `      {/* ${label} */}
      <div className={\`\${styles.box} \${styles['i-${it.i}']}\`}>${label}</div>`;
  }).join('\n');

  const tsx = `'use client';

import React from 'react';
import styles from './${cssFile}';

// app/${slug}/page.tsx
export default function ${pascal}Page() {
  return (
    <main className={styles.container}>
${itemsTsx}
    </main>
  );
}
`;

  // CSS
  const itemsCss = ordered.map(it => {
    const colStart = it.x + 1;
    const rowStart = it.y + 1;
    return `.i-${it.i}{
  grid-column: ${colStart} / span ${it.w};
  grid-row: ${rowStart} / span ${it.h};
}`;
  }).join('\n\n');

  const css = `/* ${cssFile} — generado por GOVUI Container Builder */
.container{
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: ${rowHPx}px;
  gap: ${gapPx}px;
  padding: 20px;
}

.box{
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  min-height: 150px;
  border: 1px solid rgba(16,24,40,.12);
}

/* Posiciones por item (x,y,w,h) */
${itemsCss}
`;

  return { tsxFile, tsx, cssFile, css };
}
