"use client";


import { useState } from "react";
import { VARIANTS } from "../variants";
import { GRUPOS as GROUPS } from "../variants/types";
import FullView from "./_share/FullView.client";


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
  return <button className="f-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function FooterShowcase() {
  // estado local por tarjeta abierta (id o null)
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="f-shell u-container">
      {GROUPS.map(g => {
        const items = VARIANTS.filter(v => v.idGrupo === g.id);
        if (!items.length) return null;
        return (
          <section key={g.id} className="f-section">
            <header className="f-section__head"><h3>{g.titulo}</h3></header>
            <div className="f-grid">
              {items.map(v => (
                <article key={v.id} className="f-card">
                  <div className="f-card__preview">{v.vistaPrevia}</div>
                  <footer className="f-card__foot">
                    <span className="f-card__label">{v.etiqueta}</span>
                    <div style={{display:"flex", gap:8}}>
                      <button className="f-view" onClick={()=>setOpenId(v.id)}>Ver completo</button>
                      <CopyBtn code={v.tsx}/>
                    </div>
                  </footer>

                  {/* Modal por tarjeta (sólo se monta si coincide el id) */}
                  <FullView
                    open={openId === v.id}
                    onClose={()=>setOpenId(null)}
                    title={`Vista completa · ${v.etiqueta}`}
                  >
                    {/* Reusamos la misma vista pero con un contenedor amplio */}
                    <div style={{minHeight:320}}>
                      {v.vistaPrevia}
                    </div>
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
