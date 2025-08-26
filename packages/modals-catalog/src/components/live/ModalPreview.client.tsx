"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { DemoKind } from "../../variants/types";

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
}

export function ModalPreview({
  kind,
  title,
  text,
  label = "Abrir",
}: { kind: DemoKind; title?: string; text?: string; label?: string }) {
  const [open, setOpen] = useState(false);

  // ESC + lock scrollbar
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>{label}</button>

      {/* BASIC / SCROLL / CONFIRM / DANGER / FORM / ALERT */}
      {open && kind !== "fullscreen" && kind !== "lightbox" && kind !== "drawer-right" && kind !== "bottom-sheet" && (
        <Portal>
          <div className="m-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
            <div
              className={`m-modal ${kind==="scroll" ? "m--md": kind==="alert" ? "m--xs": (kind==="confirm"||kind==="danger"||kind==="form-login") ? "m--sm": ""} ${kind==="danger" ? "is-danger": ""}`}
              onClick={e => e.stopPropagation()}
            >
              {kind!=="alert" && (
                <header className="m-head">
                  <h3 className="m-title">{title ?? "Modal"}</h3>
                  <button className="m-close" aria-label="Cerrar" onClick={() => setOpen(false)}>×</button>
                </header>
              )}
              <div className={`m-body ${kind==="scroll" ? "m-body--scroll": ""}`}>
                {kind === "basic" && <p>{text ?? "Contenido breve para decisiones rápidas."}</p>}
                {kind === "scroll" && Array.from({length:10}).map((_,i)=><p key={i}>Párrafo {i+1}. Texto de ejemplo…</p>)}
                {kind === "confirm" && <p>{text ?? "¿Confirmas esta acción?"}</p>}
                {kind === "danger" && <p>{text ?? "Esta acción es destructiva y no se puede deshacer."}</p>}
                {kind === "form-login" && (
                  <>
                    <label className="f-label" htmlFor="email">Correo</label>
                    <input id="email" className="f-input" type="email" placeholder="tucorreo@dominio.com" defaultValue="@hector.talavera" />
                    <label className="f-label" htmlFor="pwd">Contraseña</label>
                    <input id="pwd" className="f-input" type="password" placeholder="••••••••" defaultValue="••••••••" />
                  </>
                )}
                {kind === "alert" && <p><strong>{title ?? "Listo"}.</strong> {text ?? "Acción completada."}</p>}
              </div>
              <footer className="m-foot">
                {kind === "basic" && (<><button className="btn" onClick={()=>setOpen(false)}>Cancelar</button><button className="btn btn--primary" onClick={()=>setOpen(false)}>Aceptar</button></>)}
                {kind === "scroll" && (<button className="btn" onClick={()=>setOpen(false)}>Entendido</button>)}
                {kind === "confirm" && (<><button className="btn" onClick={()=>setOpen(false)}>Cancelar</button><button className="btn btn--danger" onClick={()=>setOpen(false)}>Eliminar</button></>)}
                {kind === "danger" && (<><button className="btn" onClick={()=>setOpen(false)}>Cancelar</button><button className="btn btn--danger" onClick={()=>setOpen(false)}>Desactivar</button></>)}
                {kind === "form-login" && (<><button className="btn" onClick={()=>setOpen(false)}>Cancelar</button><button className="btn btn--primary" onClick={()=>setOpen(false)}>Entrar</button></>)}
                {kind === "alert" && (<button className="btn btn--primary" onClick={()=>setOpen(false)}>Aceptar</button>)}
              </footer>
            </div>
          </div>
        </Portal>
      )}

      {/* DRAWER */}
      {open && kind === "drawer-right" && (
        <Portal>
          <div className="m-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
            <aside className="m-drawer m-drawer--right" onClick={e=>e.stopPropagation()}>
              <header className="m-head">
                <h3 className="m-title">{title ?? "Detalle"}</h3>
                <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
              </header>
              <div className="m-body">
                <p>Nombre: Alex Torres</p><p>Rol: Admin</p><p>Último acceso: hoy 09:31</p>
              </div>
              <footer className="m-foot"><button className="btn" onClick={()=>setOpen(false)}>Cerrar</button></footer>
            </aside>
          </div>
        </Portal>
      )}

      {/* BOTTOM SHEET */}
      {open && kind === "bottom-sheet" && (
        <Portal>
          <div className="m-overlay m-overlay--light" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
            <div className="m-sheet" onClick={e=>e.stopPropagation()}>
              <div className="m-sheet__grab" aria-hidden />
              <ul className="m-list">
                <li><button className="m-list__btn">Compartir</button></li>
                <li><button className="m-list__btn">Duplicar</button></li>
                <li><button className="m-list__btn is-danger">Eliminar</button></li>
              </ul>
            </div>
          </div>
        </Portal>
      )}

      {/* FULLSCREEN */}
      {open && kind === "fullscreen" && (
        <Portal>
          <div className="m-full" role="dialog" aria-modal="true">
            <header className="m-full__bar">
              <h3 className="m-title">{title ?? "Editor"}</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-full__body">
              <textarea className="f-input" style={{height:"260px"}} placeholder="Escribe aquí…" />
            </div>
            <footer className="m-full__foot">
              <button className="btn" onClick={()=>setOpen(false)}>Cerrar</button>
              <button className="btn btn--primary" onClick={()=>setOpen(false)}>Guardar</button>
            </footer>
          </div>
        </Portal>
      )}

      {/* LIGHTBOX */}
      {open && kind === "lightbox" && (
        <Portal>
          <div className="m-overlay m-overlay--dark" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
            <figure className="m-lightbox" onClick={e=>e.stopPropagation()}>
              <img src="https://picsum.photos/seed/govui/1200/800" alt="imagen" />
              <figcaption>Descripción de la imagen</figcaption>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </figure>
          </div>
        </Portal>
      )}
    </>
  );
}
