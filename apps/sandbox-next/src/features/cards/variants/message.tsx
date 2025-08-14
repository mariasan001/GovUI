"use client";
import React from "react";
import type { Variant } from "./types";
// Lucide re-export en tu catálogo

import { Bookmark, ImageIcon, Reply, Trash2 } from "lucide-react";

function MessageCard() {
  return (
    <div className="message-card panel">
      <div className="msg-head">
        {/* Placeholder de imagen (no persona) */}
        <div className="msg-avatar msg-avatar--placeholder" role="img" aria-label="Imagen">
          <ImageIcon size={18} strokeWidth={1.75} />
        </div>

        <div className="msg-id">
          <div className="msg-name">Samantha Lusan</div>
          <div className="msg-email">samantha@icloud.com</div>
        </div>

        <div className="msg-meta">
          <span className="msg-date u-text-muted">Ayer, 10:12 am</span>
          <div className="msg-actions" role="toolbar" aria-label="Acciones de mensaje">
            <button className="iconbtn" aria-label="Responder">
              <Reply size={16} strokeWidth={1.75} />
            </button>
            <button className="iconbtn" aria-label="Guardar">
              <Bookmark size={16} strokeWidth={1.75} />
            </button>
            <button className="iconbtn" aria-label="Eliminar">
              <Trash2 size={16} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      <p className="msg-text">
        Se han introducido nuevas APIs para animaciones más suaves. Las mejoras al framework de animación
        harán más fácil crear experiencias de usuario más envolventes.
      </p>

      <hr className="msg-divider" />

      <div className="msg-inputrow">
        <input className="gov-input msg-input" placeholder="Escribe aquí…" />
        <div className="msg-reactions" role="group" aria-label="Reacciones rápidas">
          <button className="pillbtn" aria-label="Carita">😊</button>
          <button className="pillbtn" aria-label="Corazón">❤️</button>
          <button className="pillbtn" aria-label="Rayo">⚡</button>
          <button className="pillbtn" aria-label="Fuego">🔥</button>
          <button className="pillbtn" aria-label="Más">＋</button>
        </div>
      </div>
    </div>
  );
}

export const messageVariant: Variant = {
  id: "message",
  name: "Mensaje",
  group: "basic",
  preview: <MessageCard />,
  tsx: `import React from "react";
import { Reply, Bookmark, Trash2, Image as ImageIcon } from "@govui/icons-catalog/next";
export default function CardMensaje(){
  return (
    <div className="message-card panel">
      <div className="msg-head">
        <div className="msg-avatar msg-avatar--placeholder" role="img" aria-label="Imagen">
          <ImageIcon size={18} strokeWidth={1.75} />
        </div>
        <div className="msg-id">
          <div className="msg-name">Samantha Lusan</div>
          <div className="msg-email">samantha@icloud.com</div>
        </div>
        <div className="msg-meta">
          <span className="msg-date u-text-muted">Ayer, 10:12 am</span>
          <div className="msg-actions" role="toolbar" aria-label="Acciones de mensaje">
            <button className="iconbtn" aria-label="Responder"><Reply size={16} strokeWidth={1.75} /></button>
            <button className="iconbtn" aria-label="Guardar"><Bookmark size={16} strokeWidth={1.75} /></button>
            <button className="iconbtn" aria-label="Eliminar"><Trash2 size={16} strokeWidth={1.75} /></button>
          </div>
        </div>
      </div>
      <p className="msg-text">Se han introducido nuevas APIs para animaciones más suaves…</p>
      <hr className="msg-divider" />
      <div className="msg-inputrow">
        <input className="gov-input msg-input" placeholder="Escribe aquí…" />
        <div className="msg-reactions" role="group" aria-label="Reacciones rápidas">
          <button className="pillbtn">😊</button><button className="pillbtn">❤️</button>
          <button className="pillbtn">⚡</button><button className="pillbtn">🔥</button>
          <button className="pillbtn">＋</button>
        </div>
      </div>
    </div>
  );
}`
};
