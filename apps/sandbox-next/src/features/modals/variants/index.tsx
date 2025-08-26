import type { Variante } from "./types";

export const VARIANTS: Variante[] = [
  // ===== Básicos =====
  {
    id: "modal-basico",
    idGrupo: "basicos",
    etiqueta: "Modal básico (título + acciones)",
    demo: { kind: "basic", title: "Título del modal", text: "Contenido breve para decisiones rápidas." },
    tsx:
`"use client";
import { useState } from "react";

export default function ModalBasico(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Abrir modal</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" aria-labelledby="mbasic-title" onClick={()=>setOpen(false)}>
          <div className="m-modal" onClick={e=>e.stopPropagation()}>
            <header className="m-head">
              <h3 id="mbasic-title" className="m-title">Título del modal</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-body">
              <p>Contenido del modal. Usa esto para mostrar información breve.</p>
            </div>
            <footer className="m-foot">
              <button className="btn" onClick={()=>setOpen(false)}>Cancelar</button>
              <button className="btn btn--primary" onClick={()=>setOpen(false)}>Aceptar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}`
  },
  {
    id: "modal-contenido-largo",
    idGrupo: "basicos",
    etiqueta: "Modal con scroll interno",
    demo: { kind: "scroll", title: "Políticas y términos" },
    tsx:
`"use client";
import { useState } from "react";

export default function ModalLargo(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Abrir</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <div className="m-modal m--md" onClick={e=>e.stopPropagation()}>
            <header className="m-head">
              <h3 className="m-title">Políticas y términos</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-body m-body--scroll">
              {Array.from({length:18}).map((_,i)=><p key={i}>Párrafo {i+1}. Texto de ejemplo…</p>)}
            </div>
            <footer className="m-foot">
              <button className="btn" onClick={()=>setOpen(false)}>Entendido</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}`
  },

  // ===== Confirmaciones =====
  {
    id: "confirm-basica",
    idGrupo: "confirmaciones",
    etiqueta: "Confirmar acción",
    demo: { kind: "confirm", title: "¿Eliminar archivo?", text: "Esta acción no se puede deshacer." },
    tsx:
`"use client";
import { useState } from "react";

export default function ConfirmarBasico(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn--primary" onClick={()=>setOpen(true)}>Eliminar archivo</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <div className="m-modal m--sm" onClick={e=>e.stopPropagation()}>
            <header className="m-head">
              <h3 className="m-title">¿Eliminar archivo?</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-body"><p>Esta acción no se puede deshacer.</p></div>
            <footer className="m-foot">
              <button className="btn" onClick={()=>setOpen(false)}>Cancelar</button>
              <button className="btn btn--danger" onClick={()=>setOpen(false)}>Eliminar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}`
  },
  {
    id: "confirm-peligro",
    idGrupo: "confirmaciones",
    etiqueta: "Destructivo con énfasis",
    demo: { kind: "danger", title: "Desactivar cuenta", text: "Perderás acceso inmediato a tus datos." },
    tsx:
`"use client";
import { useState } from "react";

export default function ConfirmarPeligro(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn--danger" onClick={()=>setOpen(true)}>Desactivar cuenta</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <div className="m-modal m--sm is-danger" onClick={e=>e.stopPropagation()}>
            <header className="m-head">
              <h3 className="m-title">Desactivar cuenta</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-body"><p>Perderás acceso inmediato a tus datos.</p></div>
            <footer className="m-foot">
              <button className="btn" onClick={()=>setOpen(false)}>Cancelar</button>
              <button className="btn btn--danger" onClick={()=>setOpen(false)}>Entiendo, desactivar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}`
  },

  // ===== Formularios =====
  {
    id: "form-login",
    idGrupo: "formularios",
    etiqueta: "Formulario (login)",
    demo: { kind: "form-login", title: "Iniciar sesión" },
    tsx:
`"use client";
import { useState } from "react";

export default function ModalLogin(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Iniciar sesión</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <form className="m-modal m--sm" onClick={e=>e.stopPropagation()} onSubmit={(e)=>{e.preventDefault(); setOpen(false);}}>
            <header className="m-head">
              <h3 className="m-title">Iniciar sesión</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-body">
              <label className="f-label" htmlFor="email">Correo</label>
              <input id="email" className="f-input" type="email" placeholder="tucorreo@dominio.com" />
              <label className="f-label" htmlFor="pwd">Contraseña</label>
              <input id="pwd" className="f-input" type="password" placeholder="••••••••" />
            </div>
            <footer className="m-foot">
              <button className="btn" type="button" onClick={()=>setOpen(false)}>Cancelar</button>
              <button className="btn btn--primary" type="submit">Entrar</button>
            </footer>
          </form>
        </div>
      )}
    </>
  );
}`
  },

  // ===== Paneles / Drawers =====
  {
    id: "drawer-derecha",
    idGrupo: "paneles",
    etiqueta: "Drawer derecha (detalles)",
    demo: { kind: "drawer-right", title: "Detalle del usuario" },
    tsx:
`"use client";
import { useState } from "react";

export default function DrawerDerecha(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Ver detalles</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <aside className="m-drawer m-drawer--right" onClick={e=>e.stopPropagation()}>
            <header className="m-head">
              <h3 className="m-title">Detalle del usuario</h3>
              <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
            </header>
            <div className="m-body">
              <p>Nombre: Alex Torres</p>
              <p>Rol: Admin</p>
              <p>Último acceso: hoy 09:31</p>
            </div>
            <footer className="m-foot">
              <button className="btn" onClick={()=>setOpen(false)}>Cerrar</button>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}`
  },

  // ===== Móvil / Bottom Sheet =====
  {
    id: "bottom-sheet",
    idGrupo: "movil",
    etiqueta: "Bottom sheet (acciones rápidas)",
    demo: { kind: "bottom-sheet", title: "Acciones" },
    tsx:
`"use client";
import { useState, useEffect } from "react";

export default function BottomSheet(){
  const [open, setOpen] = useState(false);
  useEffect(()=>{ if(!open) return; const onEsc=(e:KeyboardEvent)=> e.key==="Escape" && setOpen(false); window.addEventListener("keydown", onEsc); return ()=>window.removeEventListener("keydown", onEsc); },[open]);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Abrir acciones</button>
      {open && (
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
      )}
    </>
  );
}`
  },

  // ===== Avanzados =====
  {
    id: "wizard-pasos",
    idGrupo: "avanzados",
    etiqueta: "Wizard (2 pasos)",
    demo: { kind: "wizard", title: "Crear proyecto" },
    tsx:
`"use client";
import { useState } from "react";

export default function WizardPasos(){
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const close = ()=>{ setOpen(false); setStep(1); };
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Nuevo proyecto</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={close}>
          <div className="m-modal m--md" onClick={e=>e.stopPropagation()}>
            <header className="m-head">
              <h3 className="m-title">Crear proyecto</h3>
              <span className="m-step">Paso {step} de 2</span>
              <button className="m-close" aria-label="Cerrar" onClick={close}>×</button>
            </header>
            <div className="m-body">
              {step===1 ? (
                <>
                  <label className="f-label" htmlFor="name">Nombre</label>
                  <input id="name" className="f-input" placeholder="Proyecto X" />
                </>
              ) : (
                <>
                  <label className="f-label" htmlFor="team">Equipo</label>
                  <input id="team" className="f-input" placeholder="Core / Frontend" />
                </>
              )}
            </div>
            <footer className="m-foot">
              <button className="btn" onClick={close}>Cancelar</button>
              {step>1 && <button className="btn" onClick={()=>setStep(step-1)}>Atrás</button>}
              <button className="btn btn--primary" onClick={()=> step===1? setStep(2): close()}>
                {step===1? "Siguiente":"Crear"}
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}`
  },
  {
    id: "fullscreen",
    idGrupo: "avanzados",
    etiqueta: "Modal pantalla completa",
    demo: { kind: "fullscreen", title: "Editor" },
    tsx:
`"use client";
import { useState } from "react";

export default function ModalFull(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Abrir editor</button>
      {open && (
        <div className="m-full" role="dialog" aria-modal="true">
          <header className="m-full__bar">
            <h3 className="m-title">Editor</h3>
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
      )}
    </>
  );
}`
  },
  {
    id: "lightbox-imagen",
    idGrupo: "avanzados",
    etiqueta: "Lightbox (imagen)",
    demo: { kind: "lightbox", title: "Vista previa" },
    tsx:
`"use client";
import { useState } from "react";

export default function Lightbox(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <img src="https://picsum.photos/seed/govui/360/220" alt="preview" style={{borderRadius:12, cursor:"zoom-in"}} onClick={()=>setOpen(true)} />
      {open && (
        <div className="m-overlay m-overlay--dark" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <figure className="m-lightbox" onClick={e=>e.stopPropagation()}>
            <img src="https://picsum.photos/seed/govui/1200/800" alt="imagen" />
            <figcaption>Descripción de la imagen</figcaption>
            <button className="m-close" aria-label="Cerrar" onClick={()=>setOpen(false)}>×</button>
          </figure>
        </div>
      )}
    </>
  );
}`
  },
  {
    id: "alerta-minima",
    idGrupo: "avanzados",
    etiqueta: "Alerta / Notificación modal",
    demo: { kind: "alert", title: "Listo", text: "Tu reporte se generó correctamente." },
    tsx:
`"use client";
import { useState } from "react";

export default function AlertaModal(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setOpen(true)}>Mostrar alerta</button>
      {open && (
        <div className="m-overlay" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
          <div className="m-modal m--xs" onClick={e=>e.stopPropagation()}>
            <div className="m-body">
              <p><strong>Listo.</strong> Tu reporte se generó correctamente.</p>
            </div>
            <footer className="m-foot">
              <button className="btn btn--primary" onClick={()=>setOpen(false)}>Aceptar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}`
  },
];
