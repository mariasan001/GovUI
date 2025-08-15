"use client";
import React from "react";
import type { Variant } from "./types";
import { Bookmark, ImageIcon } from "lucide-react";
// Si los re-exportas desde tu paquete, usa esta línea:
// (si no, cambia a: import { Image as ImageIcon, Bookmark } from "lucide-react";)

function ArticleFeatureCard() {
  return (
    <article className="article-card panel">
      <div className="article-grid">
        {/* Imagen / placeholder (no persona) */}
        <div className="article-media" role="img" aria-label="Imagen del artículo">
          <ImageIcon size={28} strokeWidth={1.75} />
        </div>

        {/* Contenido */}
        <div className="article-content">
          <h3 className="article-title">
            Las plantas verdes podrían extinguirse 500 veces más rápido de lo esperado, según estudio
          </h3>

          <p className="article-excerpt u-text-muted">
            Si eres de las personas a las que se les dificulta mantener una planta con vida, no estás sola.
            Un nuevo estudio publicado el 10 de junio en la revista Nature sugiere que la pérdida de especies se acelera.
          </p>

          <div className="article-footer">
            <div className="author">
              <div className="avatar avatar--placeholder" aria-hidden="true">
                <ImageIcon size={16} strokeWidth={1.75} />
              </div>
              <div className="byline">
                <div className="author-name">Alexander Parkinson</div>
                <div className="date u-text-muted">20 de junio de 2019</div>
              </div>
            </div>

            <button className="iconbtn" aria-label="Guardar artículo">
              <Bookmark size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export const articleFeatureVariant: Variant = {
  id: "article-feature",
  name: "Artículo destacado",
  group: "basic",
  preview: <ArticleFeatureCard />,
  tsx: `import React from "react";
import { Image as ImageIcon, Bookmark } from "@govui/icons-catalog/next";
export default function CardArticuloDestacado(){
  return (
    <article className="article-card panel">
      <div className="article-grid">
        <div className="article-media" role="img" aria-label="Imagen del artículo">
          <ImageIcon size={28} strokeWidth={1.75} />
        </div>
        <div className="article-content">
          <h3 className="article-title">
            Las plantas verdes podrían extinguirse 500 veces más rápido de lo esperado, según estudio
          </h3>
          <p className="article-excerpt u-text-muted">
            Si eres de las personas a las que se les dificulta mantener una planta con vida, no estás sola.
            Un nuevo estudio publicado el 10 de junio en la revista Nature sugiere que la pérdida de especies se acelera.
          </p>
          <div className="article-footer">
            <div className="author">
              <div className="avatar avatar--placeholder" aria-hidden="true">
                <ImageIcon size={16} strokeWidth={1.75} />
              </div>
              <div className="byline">
                <div className="author-name">Alexander Parkinson</div>
                <div className="date u-text-muted">20 de junio de 2019</div>
              </div>
            </div>
            <button className="iconbtn" aria-label="Guardar artículo">
              <Bookmark size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}`};
