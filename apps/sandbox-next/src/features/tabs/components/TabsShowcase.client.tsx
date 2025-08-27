"use client";

import "./tabas.css";
import { VARIANTS } from "../variants";
import { GRUPOS as GROUPS } from "../variants/types";
import { useState } from "react";

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
  return <button className="tb-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function TabsShowcase(){
  return (
    <main className="tb-shell u-container">
      {GROUPS.map(g=>{
        const items = VARIANTS.filter(v=>v.idGrupo===g.id);
        if(!items.length) return null;
        return (
          <section key={g.id} className="tb-section">
            <header className="tb-section__head"><h3>{g.titulo}</h3></header>
            <div className="tb-grid">
              {items.map(v=>(
                <article key={v.id} className="tb-card">
                  <div className="tb-card__preview">{v.vistaPrevia}</div>
                  <footer className="tb-card__foot">
                    <span className="tb-card__label">{v.etiqueta}</span>
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
