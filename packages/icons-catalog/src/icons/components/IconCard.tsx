"use client";
import React from "react";
import type { IconEntry, LucideProps } from "../types";

type Props = {
  entry: IconEntry;
  size: number;
  stroke: number;
  color: string;
};

export default function IconCard({ entry, size, stroke, color }: Props) {
  const { name, label, Comp } = entry;

  const copy = async (text: string) => {
    try {
      // Camino ideal: Clipboard API en contexto seguro (https o localhost)
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
    } catch {
      // seguimos al fallback
    }

    // Fallback para http/IP o navegadores más quisquillosos (execCommand)
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy"); // deprecated, pero funciona como red de seguridad
      document.body.removeChild(ta);
    } catch {
      // último recurso: prompt (al menos no falla silenciosamente)
      window.prompt("Copia manualmente:", text);
    }
  };


  const jsx = `<${name} size={${size}} strokeWidth={${stroke}} color="${color}" />`;
  const importLine = `import { ${name} } from 'lucide-react'`;

  return (
    <div
      role="button"
      tabIndex={0}
      className="gov-card"
      onClick={() => copy(label)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copy(label); }
      }}
      title={`Copiar nombre: ${label}`}
      style={{ textAlign: "center", padding: 12, cursor: "pointer" }}
    >
      <div
        className="icon-preview"
        style={{
          inlineSize: "100%",
          blockSize: 110,
          display: "grid",
          placeItems: "center",
          borderRadius: 12,
          marginBottom: 10
        }}
      >
        <Comp size={size} strokeWidth={stroke} color={color} aria-hidden="true" />
      </div>
      <div className="u-text-muted" style={{ fontSize: 14 }}>{label}</div>
      <div className="u-cluster" style={{ justifyContent: "center", marginTop: 6, gap: 8 }}>
        <button
          type="button"
          className="gov-btn gov-btn--secondary"
          onClick={(e) => { e.stopPropagation(); copy(jsx); }}
        >
          Copiar JSX
        </button>
      </div>
    </div>
  );
}
