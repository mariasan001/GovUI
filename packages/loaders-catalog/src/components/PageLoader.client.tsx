"use client";
import * as React from "react";
import "./loaders.css";

// Helper de tipo: CSSProperties + variables CSS personalizadas (--foo)
type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

export function GovLoader({
  variant = "ring",
  size = 28,
  color,
  stroke = 3,
}: {
  variant?: "ring" | "ring-dashed" | "dots" | "pulse" | "ball" | "clock" | "wifi";
  size?: number;
  color?: string;
  stroke?: number;
}) {
  const style: CSSVars = {
    "--size": `${size}px`,
    "--stroke": `${stroke}px`,
  };
  if (color) style["--color"] = color;

  if (variant === "dots") {
    return (
      <span className="gov-loader gov-loader--dots" style={style}>
        <i /> <i /> <i />
      </span>
    );
  }
  if (variant === "wifi") {
    return (
      <span className="gov-loader gov-loader--wifi" style={style}>
        <i /> <i /> <i />
      </span>
    );
  }
  return <span className={`gov-loader gov-loader--${variant}`} style={style} />;
}

export default function GovPageLoader({
  open = true,
  message = "Cargando…",
  title = "Un momento",
}: {
  open?: boolean;
  message?: string;
  title?: string;
}) {
  if (!open) return null;
  return (
    <div className="gov-page-loader" role="status" aria-live="polite">
      <div className="gov-page-loader__card">
        <GovLoader variant="ring" size={36} />
        <div className="gov-page-loader__title">{title}</div>
        <div className="gov-page-loader__msg">{message}</div>
      </div>
    </div>
  );
}
/* */