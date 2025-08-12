'use client';
import React from 'react';
import { useIconSearch } from '../hooks/useIconSearch';
import { ColorPicker } from './ColorPicker';


import { COLORS } from '../constants/colors';

import { IconCard } from './IconCard';
import type { ColorKey } from '../types/ndex';


export default function IconsGallery() {
  const [q, setQ] = React.useState('');
  const [size, setSize] = React.useState(28);
  const [stroke, setStroke] = React.useState(1.5);
  const [colorKey, setColorKey] = React.useState<ColorKey>('negro');
  const colorValue = COLORS[colorKey];

  const filtered = useIconSearch(q);

  const copy = async (t: string) => { try { await navigator.clipboard.writeText(t); } catch {} };

  const previewBg =
    colorKey === 'blanco'
      ? 'color-mix(in oklab, var(--color-neutral-900,#0b1220) 86%, #fff)'
      : 'color-mix(in oklab, var(--color-neutral-800,#1f2937) 8%, #fff)';

  return (
    <main className="u-container u-stack" style={{ '--stack-space': '20px', paddingBlockStart: 16 } as React.CSSProperties}>
      {/* Hero */}
      <header style={{ display:'grid', gridTemplateColumns:'1fr minmax(280px,460px)', gap:16, alignItems:'end' }}>
        <div className="u-stack" style={{ '--stack-space': '8px' } as React.CSSProperties}>
          <h1 className="display-hero" style={{ margin: 0 }}>Íconos</h1>
          <p className="lead u-text-muted" style={{ margin: 0 }}>
            Explora y copia nombres, imports o JSX de la librería de íconos para proyectos GovUI.
          </p>
        </div>
        <div className="gov-field gov-field--search" style={{ justifySelf: 'end' }}>
          <i className="gov-icon gov-icon--search gov-input__icon" aria-hidden="true" />
          <label htmlFor="icon-search" className="u-visually-hidden">Buscar íconos</label>
          <input id="icon-search" className="gov-input" placeholder="Buscar (p. ej., flecha derecha, calendario, usuario…)"
            value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </header>

      {/* Toolbar */}
      <div className="u-cluster" style={{ justifyContent:'space-between', alignItems:'center', gap:16, flexWrap:'wrap' }}>
        <div className="u-cluster" style={{ gap:20, flexWrap:'wrap' }}>
          <label className="u-cluster" style={{ gap:8 }}>
            <span className="u-text-muted">Tamaño</span>
            <input type="range" min={16} max={64} value={size} onChange={(e) => setSize(+e.target.value)} />
            <span>{size}px</span>
          </label>
          <label className="u-cluster" style={{ gap:8 }}>
            <span className="u-text-muted">Trazo</span>
            <input type="range" min={1} max={3} step={0.5} value={stroke} onChange={(e) => setStroke(+e.target.value)} />
            <span>{stroke}</span>
          </label>
        </div>
        <ColorPicker value={colorKey} onChange={setColorKey} />
      </div>

      {/* Grid */}
      <section className="u-grid u-grid--auto" style={{ '--grid-gap': '16px', '--tile-min': '180px' } as React.CSSProperties}>
        {filtered.map(({ name, label, Comp }) => {
          const jsx = `<${name} size={${size}} strokeWidth={${stroke}} color="${colorValue}" />`;
          const importLine = `import { ${name} } from 'lucide-react'`;

          return (
            <IconCard
              key={name}
              name={name}
              label={label}
              Comp={Comp}
              previewBg={previewBg}
              size={size}
              stroke={stroke}
              color={colorValue}
              onCopyName={() => copy(label)}
              onCopyJsx={() => copy(jsx)}
              onCopyImport={() => copy(importLine)}
            />
          );
        })}

        {filtered.length === 0 && (
          <div className="demo-card" style={{ gridColumn: '1 / -1' }}>
            Sin resultados para <strong>{q || '…'}</strong>.
          </div>
        )}
      </section>
    </main>
  );
}
