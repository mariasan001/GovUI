"use client";


import { useState } from "react";
import { VARIANTS } from "../variants";
import { GRUPOS as GROUPS } from "../variants/types";
import { ModalPreview } from "./live/ModalPreview.client";

function CopyBtn({ code }: { code: string }) {
  const [ok, setOk] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText(code); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = code; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
    }
    setOk(true); setTimeout(() => setOk(false), 900);
  }
  return <button className="c-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function ModalsShowcase() {
  return (
    <main className="u-stack u-container" style={{ gap: 16 }}>
      <h1 className="display-hero" style={{ margin: 0 }}>MODALES</h1>
      <p className="u-text-muted">contadore, tipo  totales, integraciones .</p>

      {GROUPS.map(g => {
        const items = VARIANTS.filter(v => v.idGrupo === g.id);
        if (!items.length) return null;
        return (
          <section key={g.id} className="m-section">
            <header className="m-section__head"><h3>{g.titulo}</h3></header>
            <div className="m-grid">
              {items.map(v => (
                <article key={v.id} className="m-card">
                  <div className="m-card__preview">
                    <ModalPreview kind={v.demo.kind} title={v.demo.title} text={v.demo.text} label={`Abrir “${v.etiqueta}”`} />
                  </div>
                  <footer className="m-card__foot">
                    <span className="m-card__label">{v.etiqueta}</span>
                    <CopyBtn code={v.tsx} />
                  </footer>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
