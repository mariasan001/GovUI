"use client";
import React from "react";
import { COLORS, type ColorKey } from "../constants/colors";
import { safeCopy } from "../lib/copy";

type Tone = "soft" | "muted" | "solid";

// Genera fondos accesibles con color-mix (ligeros para contenido)
function backgroundFor(color: string, tone: Tone) {
  if (tone === "solid") return color;
  if (tone === "soft")  return `color-mix(in oklab, ${color} 10%, #fff)`;
  return `color-mix(in oklab, ${color} 18%, #fff)`; // muted
}

export default function BackgroundGenerator() {
  const [key, setKey] = React.useState<ColorKey>("ginge");
  const [tone, setTone] = React.useState<Tone>("soft");

  const bg = backgroundFor(COLORS[key], tone);
  const tsx = `export default function ColorBg(){return <div style={{background:"${bg}",minHeight:200}}/>}`;

  return (
    <section className="u-stack" style={{ ["--stack-space" as any]: "12px" }}>
      <header className="u-cluster" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>Generador de fondo</h3>
        <button className="gov-btn gov-btn--secondary" onClick={() => safeCopy(tsx)}>Copiar .tsx</button>
      </header>

      <div className="u-cluster" style={{ gap: 16, flexWrap: "wrap" }}>
        <label className="u-cluster" style={{ gap: 8 }}>
          <span className="u-text-muted">Color</span>
          <select value={key} onChange={e => setKey(e.target.value as ColorKey)}>
            {Object.keys(COLORS).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </label>

        <fieldset className="u-cluster" style={{ gap: 8, border: 0, margin: 0 }}>
          <legend className="u-visually-hidden">Intensidad</legend>
          {(["soft","muted","solid"] as Tone[]).map(t => (
            <label key={t} className="u-cluster" style={{ gap: 6 }}>
              <input type="radio" name="tone" value={t} checked={tone===t} onChange={() => setTone(t)} />
              <span className="u-text-muted">{t}</span>
            </label>
          ))}
        </fieldset>
      </div>

      <div style={{ height: 140, borderRadius: 12, background: bg }} />
      <code className="u-text-muted" style={{ fontSize: 12, userSelect: "all" }}>background: {bg};</code>
    </section>
  );
}
