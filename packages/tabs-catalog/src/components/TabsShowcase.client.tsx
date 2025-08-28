// apps/sandbox-next/src/features/tabs/components/TabsShowcase.client.tsx
"use client";

import { VARIANTS } from "../variants";
import { GRUPOS as GROUPS } from "../variants/types";
import { useState } from "react";
import FullView from "./_share/FullView.client";
import InteractiveTabs from "./InteractiveTabs.client";


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
  const [openId, setOpenId] = useState<string | null>(null);

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
                    <div style={{display:"flex", gap:8}}>
                      <button className="tb-view" onClick={()=>setOpenId(v.id)}>Ver completo</button>
                      <CopyBtn code={v.tsx}/>
                    </div>
                  </footer>

                  <FullView
                    open={openId === v.id}
                    onClose={()=>setOpenId(null)}
                    title={`Vista completa · ${v.etiqueta}`}
                  >
                    {/* Vista interactiva según la variante */}
                    <InteractiveTabs variantId={v.id}/>
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
