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
    try { await navigator.clipboard.writeText(text); } catch {}
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
