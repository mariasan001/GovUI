"use client";
import React from "react";

import { useIconSearch } from "../hooks/useIconSearch";
import { COLORS, type ColorKey } from "../constants/colors";
import IconCard from "./IconCard";

export default function IconsGallery() {
  
  const [q, setQ] = React.useState("");
  const [size, setSize] = React.useState(28);
  const [stroke, setStroke] = React.useState(1.5);
  const [colorKey, setColorKey] = React.useState<ColorKey>("negro");
  const colorValue = COLORS[colorKey];

  const data = useIconSearch(q);

  const previewBg =
    colorKey === "blanco"
      ? "color-mix(in oklab, var(--color-neutral-900,#0b1220) 86%, #fff)"
      : "color-mix(in oklab, var(--color-neutral-800,#1f2937) 8%, #fff)";

  return (
    <main className="u-container u-stack" style={{ ["--stack-space" as any]: "20px", paddingBlockStart: 16 }}>
      {/* Hero */}
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(280px, 460px)",
          gap: 16,
          alignItems: "end"
        }}
      >
        <div className="u-stack" style={{ ["--stack-space" as any]: "8px" }}>
          <h1 className="display-hero" style={{ margin: 0 }}>Íconos</h1>
          <p className="lead u-text-muted" style={{ margin: 0 }}>
            Explora y copia nombres, imports o JSX de la librería de íconos para proyectos GovUI.
          </p>
        </div>

        {/* Buscador */}
        <div className="gov-field gov-field--search" style={{ justifySelf: "end" }}>
          <i className="gov-icon gov-icon--search gov-input__icon" aria-hidden="true" />
          <label htmlFor="icon-search" className="u-visually-hidden">Buscar íconos</label>
          <input
            id="icon-search"
            className="gov-input"
            placeholder="Buscar (p. ej., flecha derecha, calendario, usuario…)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </header>

      {/* Toolbar */}
      <div className="u-cluster" style={{ justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div className="u-cluster" style={{ gap: 20, flexWrap: "wrap" }}>
          <label className="u-cluster" style={{ gap: 8 }}>
            <span className="u-text-muted">Tamaño</span>
            <input type="range" min={16} max={64} value={size} onChange={(e) => setSize(+e.target.value)} />
            <span>{size}px</span>
          </label>
          <label className="u-cluster" style={{ gap: 8 }}>
            <span className="u-text-muted">Trazo</span>
            <input type="range" min={1} max={3} step={0.5} value={stroke} onChange={(e) => setStroke(+e.target.value)} />
            <span>{stroke}</span>
          </label>
        </div>

        {/* Color */}
        {/* Puedes reemplazar por <ColorPicker value={colorKey} onChange={setColorKey} /> cuando quieras */}
        <fieldset className="color-picker" style={{ border: 0, margin: 0 }}>
          <legend className="u-visually-hidden">Color del icono</legend>
          {(Object.keys(COLORS) as ColorKey[]).map((key) => (
            <label
              key={key}
              className={`swatch ${colorKey === key ? "is-selected" : ""}`}
              style={{ ["--swatch" as any]: COLORS[key] }}
            >
              <input
                className="u-visually-hidden"
                type="radio"
                name="icon-color"
                value={key}
                checked={colorKey === key}
                onChange={() => setColorKey(key)}
              />
              <span className="dot" aria-hidden="true" />
              <span className="name">{key[0].toUpperCase() + key.slice(1)}</span>
            </label>
          ))}
        </fieldset>
      </div>

      {/* Grid */}
      <section className="u-grid u-grid--auto" style={{ ["--grid-gap" as any]: "16px", ["--tile-min" as any]: "180px" }}>
        {data.map((entry) => (
          <IconCard
            key={entry.name}
            entry={entry}
            size={size}
            stroke={stroke}
            color={COLORS[colorKey]}
          />
        ))}
        {data.length === 0 && (
          <div className="demo-card" style={{ gridColumn: "1 / -1" }}>
            Sin resultados para <strong>{q || "…"}</strong>.
          </div>
        )}
      </section>

      {/* Fondo de preview para todas las tarjetas */}
      <style>{`.icon-preview{background:${previewBg};}`}</style>
    </main>
  );
}
