"use client";
import React from "react";
import { COLORS, type ColorKey } from "../constants/colors";
import { safeCopy } from "../lib/copy";
import { Copy } from "lucide-react";

export default function GradientGenerator() {
  const [a, setA] = React.useState<ColorKey>("vino");
  const [b, setB] = React.useState<ColorKey>("ginge");
  const [angle, setAngle] = React.useState(120);

  const css = `linear-gradient(${angle}deg, ${COLORS[a]} 0%, ${COLORS[b]} 100%)`;
  const tsx = `export default function GradientBg(){return <div style={{background:"${css}",minHeight:200}}/>}`;

  return (
    <section className="panel u-stack" style={{ ["--stack-space" as any]: "12px" }}>
      <header className="u-cluster" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="section-title">Generador de degradados</h3>
        <button className="gov-btn gov-btn--secondary btn-ghost" onClick={() => safeCopy(tsx)}>
          <Copy size={16} /><span style={{ marginInlineStart: 6 }}>Copiar .tsx</span>
        </button>
      </header>

      <div className="toolbar u-cluster">
        <label className="field">
          <span>Color A</span>
          <select value={a} onChange={(e) => setA(e.target.value as ColorKey)}>
            {Object.keys(COLORS).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </label>

        <label className="field">
          <span>Color B</span>
          <select value={b} onChange={(e) => setB(e.target.value as ColorKey)}>
            {Object.keys(COLORS).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </label>

        <label className="field">
          <span>Ángulo</span>
          <input type="range" min={0} max={360} value={angle} onChange={e => setAngle(+e.target.value)} />
          <output>{angle}°</output>
        </label>
      </div>

      <div className="preview-lg" style={{ background: css }} />
      <code className="code-inline">background: {css};</code>
    </section>
  );
}
