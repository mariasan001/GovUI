"use client";


import { useState } from "react";
import { VARIANTS } from "../variants";
import { GRUPOS as GROUPS } from "../variants/types";

import InteractiveAlerts from "./InteractiveAlerts.client";
import FullView from "../components/_share/FullView.client";

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
  return <button className="a-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function AlertsShowcase(){
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="a-shell u-container">
      {GROUPS.map(g=>{
        const items = VARIANTS.filter(v=>v.idGrupo===g.id);
        if(!items.length) return null;
        return (
          <section key={g.id} className="a-section">
            <header className="a-section__head"><h3>{g.titulo}</h3></header>
            <div className="a-grid">
              {items.map(v=>(
                <article key={v.id} className="a-card">
                  <div className="a-card__preview">{v.vistaPrevia}</div>
                  <footer className="a-card__foot">
                    <span className="a-card__label">{v.etiqueta}</span>
                    <div style={{display:"flex", gap:8}}>
                      <button className="a-view" onClick={()=>setOpenId(v.id)}>Ver completo</button>
                      <CopyBtn code={v.tsx}/>
                    </div>
                  </footer>

                  <FullView
                    open={openId === v.id}
                    onClose={()=>setOpenId(null)}
                    title={`Vista completa · ${v.etiqueta}`}
                  >
                    <InteractiveAlerts variantId={v.id}/>
                  </FullView>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
