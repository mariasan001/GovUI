"use client";
import * as React from "react";
import { VARIANTS } from "../varinats/index";
import "../styles.css";
import { Copy, Check } from "lucide-react";

/** Estado aislado por botón */
function CopyTsxButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200); // solo este botón
    } catch {
      // opcional: toast de error
    }
  };

  return (
    <button className="gov-btn gov-btn--outline gov-btn--sm" onClick={onCopy}>
      {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
      {copied ? "Copiado" : "Copiar .tsx"}
    </button>
  );
}

export default function InputsShowcase() {
  return (
    <main className="u-stack u-container" style={{ gap: 16 }}>
     <h1 className="display-hero" style={{ margin: 0 }}>Inputs</h1>
      <p className="u-text-muted">Variantes, tamaños, estados e iconos.</p>

      <div className="grid" style={{ display: "grid", gap: 16 }}>
        {VARIANTS.map(v => (
          <section key={v.id} className="panel" style={{ padding: 16 }}>
            <header
              className="u-cluster"
              style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}
            >
              <strong>{v.name}</strong>
              <CopyTsxButton code={v.tsx} />
            </header>
            <div>{v.preview}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
