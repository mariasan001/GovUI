"use client";

import "./counters.css";
import { VARIANTS } from "../variants";
import { GROUPS } from "../variants/types"; // alias de GRUPOS
import { useState } from "react";

function CopyBtn({ code }: { code: string }) {
  const [ok, setOk] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
    }
    setOk(true);
    setTimeout(() => setOk(false), 900);
  }
  return <button className="c-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function CountersShowcase() {
  return (
         <main className="u-stack u-container" style={{ gap: 16 }}>
            <h1 className="display-hero" style={{ margin: 0 }}>CONTADORES</h1>
            <p className="u-text-muted">contadore, tipo  totales, integraciones .</p>

      {GROUPS.map(g => {
        const items = VARIANTS.filter(v => v.idGrupo === g.id);
        if (!items.length) return null;

        return (
          <section key={g.id} className="c-section">
            <header className="c-section__head">
              <h3>{g.titulo}</h3>
            </header>

            <div className="c-grid">
              {items.map(v => (
                <article key={v.id} className="c-card">
                  <div className="c-card__preview">{v.vistaPrevia}</div>
                  <footer className="c-card__foot">
                    <span className="c-card__label">{v.etiqueta}</span>
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
