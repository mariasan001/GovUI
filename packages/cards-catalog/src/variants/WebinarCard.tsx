"use client";
import React from "react";
import type { Variant } from "./types";
import { Calendar, Clock, ImageIcon } from "lucide-react";

function WebinarCard() {
  return (
    <article className="webinar-card panel">
      {/* Media: placeholder (no persona) */}
      <div className="wb-media" role="img" aria-label="Imagen del webinar">
        <ImageIcon size={40} strokeWidth={1.75} />
      </div>

      {/* Texto */}
      <h3 className="wb-title">Próximo webinar</h3>
      <p className="wb-desc u-text-muted">
        Arquitectura Frontend de nueva generación con Layout Engine y React Native Web.
      </p>

      {/* Metadatos */}
      <div className="wb-meta">
        <div className="wb-metaitem">
          <span className="wb-iconbox"><Calendar size={16} strokeWidth={1.75} /></span>
          <div className="wb-metatext">
            <div className="wb-metavalue">17 nov 2023</div>
            <div className="wb-metalabel">Fecha</div>
          </div>
        </div>
        <div className="wb-metaitem">
          <span className="wb-iconbox"><Clock size={16} strokeWidth={1.75} /></span>
          <div className="wb-metatext">
            <div className="wb-metavalue">32 minutos</div>
            <div className="wb-metalabel">Duración</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="wb-cta" type="button">Unirme al evento</button>
    </article>
  );
}

export const webinarVariant: Variant = {
  id: "webinar",
  name: "Webinar",
  group: "basic",
  preview: <WebinarCard />,
  tsx: `import React from "react";
import { Image as ImageIcon, Calendar, Clock } from "@govui/icons-catalog/next";
export default function CardWebinar(){
  return (
    <article className="webinar-card panel">
      <div className="wb-media" role="img" aria-label="Imagen del webinar">
        <ImageIcon size={40} strokeWidth={1.75} />
      </div>
      <h3 className="wb-title">Próximo webinar</h3>
      <p className="wb-desc u-text-muted">
        Arquitectura Frontend de nueva generación con Layout Engine y React Native Web.
      </p>
      <div className="wb-meta">
        <div className="wb-metaitem">
          <span className="wb-iconbox"><Calendar size={16} strokeWidth={1.75} /></span>
          <div className="wb-metatext">
            <div className="wb-metavalue">17 nov 2023</div>
            <div className="wb-metalabel">Fecha</div>
          </div>
        </div>
        <div className="wb-metaitem">
          <span className="wb-iconbox"><Clock size={16} strokeWidth={1.75} /></span>
          <div className="wb-metatext">
            <div className="wb-metavalue">32 minutos</div>
            <div className="wb-metalabel">Duración</div>
          </div>
        </div>
      </div>
      <button className="wb-cta" type="button">Unirme al evento</button>
    </article>
  );
}`};
