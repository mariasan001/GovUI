
"use client";

import "./calendars.css";
import { useState } from "react";
import { VARIANTS } from "../variants";
import { GRUPOS as GROUPS } from "../variants/types";
// Reusa el FullView compartido de tu proyecto

import InteractiveCalendar from "./InteractiveCalendar.client";
import FullView from "@/features/footer/components/_share/FullView.client";

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
  return <button className="ca-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function CalendarsShowcase(){
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="ca-shell u-container">
      {GROUPS.map(g=>{
        const items = VARIANTS.filter(v=>v.idGrupo===g.id);
        if(!items.length) return null;
        return (
          <section key={g.id} className="ca-section">
            <header className="ca-section__head"><h3>{g.titulo}</h3></header>
            <div className="ca-grid">
              {items.map(v=>(
                <article key={v.id} className="ca-card">
                  <div className="ca-card__preview">{v.vistaPrevia}</div>
                  <footer className="ca-card__foot">
                    <span className="ca-card__label">{v.etiqueta}</span>
                    <div style={{display:"flex", gap:8}}>
                      <button className="ca-view" onClick={()=>setOpenId(v.id)}>Ver completo</button>
                      <CopyBtn code={v.tsx}/>
                    </div>
                  </footer>

                  <FullView
                    open={openId === v.id}
                    onClose={()=>setOpenId(null)}
                    title={`Vista completa · ${v.etiqueta}`}
                  >
                    <InteractiveCalendar variantId={v.id}/>
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
