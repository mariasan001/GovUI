"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function FullView({ open, onClose, title = "Vista completa", children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Cerrar con ESC y bloquear scroll del body
  useEffect(() => {
    function onKey(e: KeyboardEvent){ if (e.key === "Escape") onClose(); }
    if (open) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
    }
  }, [open, onClose]);

  // Auto-focus al abrir
  useEffect(() => {
    if (open) {
      const t = setTimeout(()=>panelRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fv" role="dialog" aria-modal="true" aria-label={title}>
      <div className="fv__overlay" onClick={onClose} />
      <div
        className="fv__panel"
        ref={panelRef}
        tabIndex={-1}
      >
        <header className="fv__head">
          <h2 className="fv__title">{title}</h2>
          <button className="fv__close" onClick={onClose} aria-label="Cerrar vista completa">✕</button>
        </header>
        <div className="fv__content">
          {children}
        </div>
      </div>
    </div>
  );
}
