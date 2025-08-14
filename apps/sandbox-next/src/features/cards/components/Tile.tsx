"use client";
import React from "react";
import { Maximize2, Copy, Check } from "lucide-react";
import type { Variant } from "../variants/types";
import { useCopy } from "../hook/useCopy";


export function Tile({
  variant, tileBg, onExpand,
}: { variant: Variant; tileBg: string; onExpand: () => void }) {
  const { ok, copy } = useCopy();

  return (
    <article className="panel tile">
      <header className="tile__head u-cluster" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 700 }}>{variant.name}</div>
        <button className="btn-ghost" onClick={onExpand} aria-label="Ver completo">
          <Maximize2 size={16}/> Ver completo
        </button>
      </header>

      <div className="tile__stage" style={{ ["--tile-bg" as any]: tileBg }}>
        {variant.preview}
      </div>

      <footer className="tile__foot u-cluster" style={{ justifyContent: "end" }}>
        <button className="gov-btn gov-btn--secondary" onClick={() => copy(variant.tsx)}>
          {ok ? <Check size={16}/> : <Copy size={16}/>} <span style={{ marginInlineStart: 6 }}>Copiar .tsx</span>
        </button>
      </footer>
    </article>
  );
}
