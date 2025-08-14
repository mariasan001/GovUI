"use client";
import React from "react";

export function Dialog({
  title, children, onClose,
}: { title: string; children: React.ReactNode; onClose: () => void }) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <header className="dialog__head u-cluster" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <strong>{title}</strong>
          <button className="btn-ghost" aria-label="Cerrar" onClick={onClose}>✕</button>
        </header>
        <div className="dialog__stage">{children}</div>
      </div>
    </div>
  );
}
