"use client";
import React from "react";
import type { Variant } from "./types";
import { ImageIcon } from "lucide-react";

function ArticleCompactCard() {
  return (
    <article className="mini-article-card panel">
      {/* Media (placeholder, no persona) */}
      <div className="mini-media" role="img" aria-label="Imagen del artículo">
        <ImageIcon size={28} strokeWidth={1.75} />
      </div>

      {/* Contenido */}
      <h3 className="mini-title">
        Cómo preparar el café perfecto por la mañana, según la ciencia
      </h3>

      <div className="mini-footer">
        <div className="mini-author">
          <div className="avatar avatar--placeholder" aria-hidden="true">
            <ImageIcon size={14} strokeWidth={1.75} />
          </div>
          <div className="byline">
            <div className="author-name">Tara Gibson</div>
            <div className="date u-text-muted">13 de julio de 2019</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export const articleCompactVariant: Variant = {
  id: "article-compact",
  name: "Artículo compacto",
  group: "basic",
  preview: <ArticleCompactCard />,
  tsx: `import React from "react";
import { Image as ImageIcon } from "@govui/icons-catalog/next";
export default function CardArticuloCompacto(){
  return (
    <article className="mini-article-card panel">
      <div className="mini-media" role="img" aria-label="Imagen del artículo">
        <ImageIcon size={28} strokeWidth={1.75} />
      </div>
      <h3 className="mini-title">
        Cómo preparar el café perfecto por la mañana, según la ciencia
      </h3>
      <div className="mini-footer">
        <div className="mini-author">
          <div className="avatar avatar--placeholder" aria-hidden="true">
            <ImageIcon size={14} strokeWidth={1.75} />
          </div>
          <div className="byline">
            <div className="author-name">Tara Gibson</div>
            <div className="date u-text-muted">13 de julio de 2019</div>
          </div>
        </div>
      </div>
    </article>
  );
}`};
