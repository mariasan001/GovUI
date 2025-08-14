"use client";
import React from "react";
import { COLORS, USAGE } from "../constants/colors";
import { ColorCard } from "./ColorCard";
import GradientGenerator from "./GradientGenerator.client";
import BackgroundGenerator from "./BackgroundGenerator.client";

export default function ColorsGuide() {
  return (
    <main className="u-container u-stack page-colors" style={{ ["--stack-space" as any]: "18px", paddingBlock: 16 }}>
      <header className="u-stack hero" style={{ ["--stack-space" as any]: "6px" }}>
        <h1 className="display-hero" style={{ margin: 0 }}>Colores</h1>
        <p className="lead u-text-muted" style={{ margin: 0 }}>
          Paleta oficial, guía de uso y generadores listos para copiar en TSX.
        </p>
      </header>

      <section className="grid-12">
        <div className="col-span-8 u-stack" style={{ ["--stack-space" as any]: "12px" }}>
          <h3 className="section-title">Paleta oficial</h3>
          <div className="swatch-grid">
            {Object.entries(COLORS).map(([name, hex]) => (
              <ColorCard key={name} name={name} hex={hex} />
            ))}
          </div>
        </div>

        <aside className="col-span-4">
          <div className="panel">
            <h3 className="section-title" style={{ marginBottom: 10 }}>Guía sugerida</h3>
            <ul className="u-text-muted guide-list">
              <li><strong>Títulos:</strong> {USAGE.title} ({COLORS[USAGE.title]})</li>
              <li><strong>Texto:</strong> {USAGE.body} ({COLORS[USAGE.body]})</li>
              <li><strong>Secundario:</strong> {USAGE.subtle} @ 65% opacidad</li>
              <li><strong>Enlace:</strong> {USAGE.link} ({COLORS[USAGE.link]})</li>
              <li><strong>Accent/Badges:</strong> {USAGE.accent} ({COLORS[USAGE.accent]})</li>
              <li><strong>Superficie:</strong> {USAGE.surface} ({COLORS[USAGE.surface]})</li>
              <li><strong>Borde:</strong> {USAGE.border} @ 12% opacidad</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="grid-12">
        <div className="col-span-6"><GradientGenerator /></div>
        <div className="col-span-6"><BackgroundGenerator /></div>
      </section>

      {/* CSS de la vista (puedes mover esto a tu CSS global/core) */}
      <style>{`
        .page-colors { --panel-radius: 16px; --panel-bg: #fff; --panel-br: color-mix(in oklab,#000 8%, transparent);
                       --shadow-sm: 0 1px 0 rgba(17,17,17,.06);
                       --shadow-lg: 0 12px 28px rgba(17,17,17,.06); }
        .panel { background: var(--panel-bg); border: 1px solid var(--panel-br);
                 border-radius: var(--panel-radius); padding: 14px 16px; box-shadow: var(--shadow-sm), var(--shadow-lg); }
        .panel--hover { transition: transform .12s ease, box-shadow .12s ease; }
        .panel--hover:hover { transform: translateY(-1px); box-shadow: 0 1px 0 rgba(17,17,17,.04), 0 18px 38px rgba(17,17,17,.10); }
        .swatch-hero { height: 88px; border-radius: 12px; border: 1px solid color-mix(in oklab, #000 12%, transparent); }
        .swatch-grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); }
        .section-title { font-size: 16px; font-weight: 700; letter-spacing: .2px; }
        .guide-list { margin: 0; padding-inline-start: 18px; display: grid; gap: 6px; }
        .toolbar { gap: 14px; flex-wrap: wrap; align-items: center; }
        .field { display: grid; gap: 6px; align-items: center; }
        .field > span { font-size: 12px; color: var(--color-muted, #6b7280); }
        .preview-lg { height: 160px; border-radius: 14px; border: 1px solid color-mix(in oklab,#000 10%, transparent); }
        .chip { font-size: 12px; padding: 4px 8px; border-radius: 999px; background: color-mix(in oklab,#111 8%, #fff); color: #374151; }
        .btn-ghost { display: inline-flex; align-items: center; gap: 4px; }
        .grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
        .col-span-6 { grid-column: span 6; } .col-span-8 { grid-column: span 8; } .col-span-4 { grid-column: span 4; }
        @media (max-width: 960px) { .col-span-6, .col-span-8, .col-span-4 { grid-column: 1 / -1; } }
      `}</style>
    </main>
  );
}
