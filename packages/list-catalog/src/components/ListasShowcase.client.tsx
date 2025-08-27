"use client";


import { useState } from "react";
;
import { GRUPOS as GROUPS } from "../variants/types";
import { VARIANTS } from "../variants";

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
    setOk(true); setTimeout(()=>setOk(false), 900);
  }
  return <button className="l-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function ListasShowcase() {
  return (
     <main className="u-stack u-container" style={{ gap: 16 }}>
      <h1 className="display-hero" style={{ margin: 0 }}>LISTAS</h1>
      <p className="u-text-muted">contadore, tipo  totales, integraciones .</p>
      {GROUPS.map(g=>{
        const items = VARIANTS.filter(v=>v.idGrupo===g.id);
        if(!items.length) return null;
        return (
          <section key={g.id} className="l-section">
            <header className="l-section__head"><h3>{g.titulo}</h3></header>
            <div className="l-grid">
              {items.map(v=>(
                <article key={v.id} className="l-card">
                  <div className="l-card__preview">{v.vistaPrevia}</div>
                  <footer className="l-card__foot">
                    <span className="l-card__label">{v.etiqueta}</span>
                    <CopyBtn code={v.tsx}/>
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
