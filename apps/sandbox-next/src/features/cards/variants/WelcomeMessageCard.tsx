"use client";
import React from "react";
import type { Variant } from "./types";
import { MessageSquare, Image as ImageIcon } from "lucide-react";

function WelcomeMessageCard() {
  return (
    <div className="notif-card panel">
      {/* Encabezado */}
      <header className="notif-head">
        <div className="notif-title">
          <div className="welcome">¡Bienvenida de vuelta!</div>
          <div className="person-name">Samantha Lusan</div>
        </div>

        {/* Placeholder de imagen (no persona) */}
        <div className="avatar avatar--placeholder" role="img" aria-label="Imagen">
          <ImageIcon size={18} strokeWidth={1.75} />
        </div>
      </header>

      {/* Meta */}
      <div className="notif-meta">
        <span className="date u-text-muted">Ayer, 10:12 am</span>
        <button className="mark-read" type="button">Marcar como leído</button>
      </div>

      {/* Vista previa del mensaje */}
      <div className="notif-msgrow">
        <div className="msg-icon" aria-hidden="true">
          <MessageSquare size={18} strokeWidth={1.75} />
        </div>
        <div className="msg-bubble">
          Agendemos esta semana para revisar el progreso al integrar las nuevas funciones de iOS en Tailwag.
        </div>
      </div>
    </div>
  );
}

export const inboxWelcomeVariant: Variant = {
  id: "inbox-welcome",
  name: "Mensaje (Bienvenida)",
  group: "basic",
  preview: <WelcomeMessageCard />,
  tsx: `import React from "react";
import { MessageSquare, Image as ImageIcon } from "lucide-react";
export default function CardInboxWelcome(){
  return (
    <div className="notif-card panel">
      <header className="notif-head">
        <div className="notif-title">
          <div className="welcome">¡Bienvenida de vuelta!</div>
          <div className="person-name">Samantha Lusan</div>
        </div>
        <div className="avatar avatar--placeholder" role="img" aria-label="Imagen">
          <ImageIcon size={18} strokeWidth={1.75} />
        </div>
      </header>

      <div className="notif-meta">
        <span className="date u-text-muted">Ayer, 10:12 am</span>
        <button className="mark-read" type="button">Marcar como leído</button>
      </div>

      <div className="notif-msgrow">
        <div className="msg-icon" aria-hidden="true">
          <MessageSquare size={18} strokeWidth={1.75} />
        </div>
        <div className="msg-bubble">
          Agendemos esta semana para revisar el progreso al integrar las nuevas funciones de iOS en Tailwag.
        </div>
      </div>
    </div>
  );
}`};
