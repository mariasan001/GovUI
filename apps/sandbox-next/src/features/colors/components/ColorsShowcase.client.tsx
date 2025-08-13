"use client";
import React from "react";
import { COLORS, type ColorKey } from "../constants/colors";
import { safeCopy } from "../lib/copy";
import { Copy, Check } from "lucide-react";

/* ---------- helpers ---------- */
const mix = (base: string, pct: number, withColor = "#fff") =>
  `color-mix(in oklab, ${base} ${pct}%, ${withColor})`;

function useCopyFeedback() {
  const [ok, setOk] = React.useState(false);
  const copy = async (t: string) => {
    const res = await safeCopy(t);
    if (res) {
      setOk(true);
      setTimeout(() => setOk(false), 1000);
    }
  };
  return { ok, copy };
}

/* ---------- piezas ---------- */
function SwatchBig({ name, hex }: { name: string; hex: string }) {
  const { ok, copy } = useCopyFeedback();
  return (
    <article className="panel panel--hover swatch-big">
      <div className="swatch-big__color" style={{ background: hex }} />
      <footer className="swatch-big__meta">
        <div className="meta__name">@{name}</div>
        <div className="meta__hex">{hex}</div>
        <button className="btn-ghost" onClick={() => copy(hex)}>
          {ok ? <Check size={16} /> : <Copy size={16} />} Copiar HEX
        </button>
      </footer>
    </article>
  );
}

function ScaleRow({
  label,
  steps,
  on = "tint", // "tint" mezcla con blanco, "shade" mezcla con negro
  base,
}: {
  label: string;
  steps: number;
  on?: "tint" | "shade";
  base: string;
}) {
  const withColor = on === "tint" ? "#fff" : "#000";
  const cells = Array.from({ length: steps }).map((_, i) => {
    const pct = on === "tint" ? 15 + i * (65 / (steps - 1)) : 10 + i * (70 / (steps - 1));
    return mix(base, pct, withColor);
  });

  return (
    <div className="scale-row">
      <div className="scale-row__label">{label}</div>
      <div className="scale-row__track">
        {cells.map((bg, idx) => (
          <button
            key={idx}
            className="scale-cell"
            style={{ background: bg }}
            title={bg}
            onClick={() => safeCopy(bg)}
          />
        ))}
      </div>
    </div>
  );
}

function GradientCard({
  a, b, angle = 120, title,
}: { a: string; b: string; angle?: number; title: string }) {
  const css = `linear-gradient(${angle}deg, ${a} 0%, ${b} 100%)`;
  const tsx = `export default function Gradient(){return <div style={{background:"${css}",minHeight:160,borderRadius:12}}/>}`;
  const { ok, copy } = useCopyFeedback();
  return (
    <article className="panel panel--hover gradient-card">
      <div className="gradient-card__preview" style={{ background: css }} />
      <footer className="gradient-card__meta">
        <div className="meta__name">{title}</div>
        <button className="btn-ghost" onClick={() => copy(tsx)}>
            {ok ? <Check size={16}/> : <Copy size={16}/>} Copiar .tsx
        </button>
      </footer>
    </article>
  );
}

/* ---------- página ---------- */
export default function ColorsShowcase() {
  // PRIMARIOS (ajusta el orden a tu identidad)
  const PRIMARY: Array<{ key: ColorKey; hex: string }> = [
    { key: "vino", hex: COLORS.vino },
    { key: "negro", hex: COLORS.negro },
    { key: "blanco", hex: COLORS.blanco },
    // si quieres, agrega { key: "cafe", hex: COLORS.cafe },
  ];

  return (
    <main className=" u-container  page-colors u-stack" style={{ ["--stack-space" as any]: "28px", paddingBlock: 20 }}>
      {/* Primary */}
      <section className="u-stack" style={{ ["--stack-space" as any]: "14px" }}>
        <h2 className="section-heading">Primary colors</h2>
        <div className="grid-primary">
          {PRIMARY.map(p => <SwatchBig key={p.key} name={`${p.key}`} hex={p.hex} />)}
        </div>
      </section>

      {/* Secondary */}
      <section className="u-stack" style={{ ["--stack-space" as any]: "14px" }}>
        <h2 className="section-heading">Secondary colors</h2>
        <div className="grid-secondary">
          <ScaleRow label="Vino"   steps={9} base={COLORS.vino}   on="tint" />
          <ScaleRow label="Cafe"   steps={9} base={COLORS.cafe}   on="tint" />
          <ScaleRow label="Ginge"  steps={9} base={COLORS.ginge}  on="tint" />
          <ScaleRow label="Neutral" steps={12} base={COLORS.negro} on="tint" />
        </div>
      </section>

      {/* Gradients */}
      <section className="u-stack" style={{ ["--stack-space" as any]: "14px" }}>
        <h2 className="section-heading">Gradients</h2>
        <div className="grid-gradients">
          <GradientCard title="Vino → Café"   a={COLORS.vino}  b={COLORS.cafe} />
          <GradientCard title="Café → Ginge"  a={COLORS.cafe}  b={COLORS.ginge} />
          <GradientCard title="Vino → Ginge"  a={COLORS.vino}  b={COLORS.ginge} />
          <GradientCard title="Neutral → Vino" a={mix(COLORS.negro, 15)} b={COLORS.vino} />
        </div>
      </section>


    </main>
  );
}
