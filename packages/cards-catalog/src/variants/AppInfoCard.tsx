"use client";
import React from "react";
import type { Variant } from "./types";
import { ImageIcon, MoreVertical } from "lucide-react";

function AppInfoCard() {
  return (
    <article className="app-card panel">
      <button className="app-menu" aria-label="Más opciones">
        <MoreVertical size={16} strokeWidth={1.75} />
      </button>

      {/* Placeholder de imagen (no marca real) */}
      <div className="app-badge" role="img" aria-label="Imagen de la aplicación">
        <ImageIcon size={28} strokeWidth={1.75} />
      </div>

      <h3 className="app-title">Slack</h3>
      <p className="app-desc u-text-muted">
        Slack es donde fluye el trabajo. Es el lugar para la gente, la información
        que compartes y las herramientas que usas para que todo se haga.
      </p>
    </article>
  );
}

export const appInfoVariant: Variant = {
  id: "app-info",
  name: "Aplicación (Info)",
  group: "basic",
  preview: <AppInfoCard />,
  tsx: `import React from "react";
import { Image as ImageIcon, MoreVertical } from "@govui/icons-catalog/next";
export default function CardAppInfo(){
  return (
    <article className="app-card panel">
      <button className="app-menu" aria-label="Más opciones">
        <MoreVertical size={16} strokeWidth={1.75} />
      </button>
      <div className="app-badge" role="img" aria-label="Imagen de la aplicación">
        <ImageIcon size={28} strokeWidth={1.75} />
      </div>
      <h3 className="app-title">Slack</h3>
      <p className="app-desc u-text-muted">
        Slack es donde fluye el trabajo. Es el lugar para la gente, la información
        que compartes y las herramientas que usas para que todo se haga.
      </p>
    </article>
  );
}`};
