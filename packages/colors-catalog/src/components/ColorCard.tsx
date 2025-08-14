"use client";
import React from "react";
import { safeCopy } from "../lib/copy";
import { contrastRatio } from "../lib/contrast";
import { Copy, Check } from "lucide-react";

export function ColorCard({ name, hex }: { name: string; hex: string }) {
  const [copied, setCopied] = React.useState(false);

  const crOnWhite = contrastRatio(hex, "#ffffff").toFixed(2);
  const crOnBlack = contrastRatio(hex, "#000000").toFixed(2);

  async function copyHex() {
    const ok = await safeCopy(hex);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <article className="panel panel--hover u-stack" style={{ ["--stack-space" as any]: "10px" }}>
      <div
        className="swatch-hero"
        aria-label={`${name} ${hex}`}
        style={{ background: hex }}
      />
      <header className="u-cluster" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 700, textTransform: "lowercase" }}>{name}</div>
          <div className="u-text-muted" style={{ fontSize: 12 }}>{hex}</div>
        </div>
        <button
          type="button"
          className="gov-btn gov-btn--secondary btn-ghost"
          onClick={copyHex}
          aria-live="polite"
        >
          {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          <span style={{ marginInlineStart: 6 }}>{copied ? "Copiado" : "Copiar HEX"}</span>
        </button>
      </header>

      <div className="u-cluster" style={{ gap: 8, flexWrap: "wrap" }}>
        <span className="chip">Contraste sobre blanco: <strong>{crOnWhite}</strong></span>
        <span className="chip">Contraste sobre negro: <strong>{crOnBlack}</strong></span>
      </div>
    </article>
  );
}
