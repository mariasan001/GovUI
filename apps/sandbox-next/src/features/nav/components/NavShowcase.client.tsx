"use client";
import * as React from "react";
import { VARIANTS } from "../variants";
import "../nav.css";
import { Copy, Check } from "lucide-react";

function CopyBtn({ code }: { code: string }) {
  const [ok, setOk] = React.useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setOk(true); setTimeout(() => setOk(false), 1200);
  };
  return (
    <button className="gov-btn gov-btn--outline gov-btn--sm" onClick={onCopy}>
      {ok ? <Check size={16}/> : <Copy size={16}/>} {ok ? "Copiado" : "Copiar .tsx"}
    </button>
  );
}

export default function NavShowcase() {
  return (
    <main className="u-stack u-container" style={{ gap: 16 }}>
      <h1 className="display-hero" style={{ margin: 0 }}>Nav</h1>
      <p className="u-text-muted">Topbars, búsqueda, oscuro y móvil.</p>

      <div className="u-stack" style={{ gap: 16 }}>
        {VARIANTS.map(v => (
          <section key={v.id} className="panel" style={{ padding: 16 }}>
            <header className="u-cluster" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <strong>{v.name}</strong>
              <CopyBtn code={v.tsx} />
            </header>
            <div>{v.preview}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
