import type { Variante } from "./types";
import { Info, CheckCircle2, AlertTriangle, AlertOctagon, ShieldAlert } from "lucide-react";

/* ===== Previews (sólo markup) ===== */
function BannerInfo(){ return (
  <div className="alrt alrt--info">
    <Info className="alrt__ico" />
    <div className="alrt__body">
      <div className="alrt__title">Información</div>
      <div className="alrt__desc">Actualizamos el panel el próximo lunes a las 10:00.</div>
    </div>
  </div>
);}
const BannerInfoTSX=
`import { Info } from "lucide-react";
export default function BannerInfo(){
  return (<div className="alrt alrt--info">
    <Info className="alrt__ico"/><div className="alrt__body">
      <div className="alrt__title">Información</div>
      <div className="alrt__desc">Actualizamos el panel el próximo lunes a las 10:00.</div>
    </div></div>);
}`;

function BannerSuccess(){ return (
  <div className="alrt alrt--success">
    <CheckCircle2 className="alrt__ico" />
    <div className="alrt__body">
      <div className="alrt__title">Operación exitosa</div>
      <div className="alrt__desc">Tu registro fue guardado correctamente.</div>
    </div>
  </div>
);}
const BannerSuccessTSX=
`import { CheckCircle2 } from "lucide-react";
export default function BannerSuccess(){ return (<div className="alrt alrt--success"><CheckCircle2 className="alrt__ico"/><div className="alrt__body"><div className="alrt__title">Operación exitosa</div><div className="alrt__desc">Tu registro fue guardado correctamente.</div></div></div>); }`;

function BannerWarn(){ return (
  <div className="alrt alrt--warn">
    <AlertTriangle className="alrt__ico" />
    <div className="alrt__body">
      <div className="alrt__title">Advertencia</div>
      <div className="alrt__desc">Hay campos sin completar en tu formulario.</div>
    </div>
  </div>
);}
const BannerWarnTSX=
`import { AlertTriangle } from "lucide-react";
export default function BannerWarn(){ return (<div className="alrt alrt--warn"><AlertTriangle className="alrt__ico"/><div className="alrt__body"><div className="alrt__title">Advertencia</div><div className="alrt__desc">Hay campos sin completar en tu formulario.</div></div></div>); }`;

function BannerDanger(){ return (
  <div className="alrt alrt--danger">
    <AlertOctagon className="alrt__ico" />
    <div className="alrt__body">
      <div className="alrt__title">Error crítico</div>
      <div className="alrt__desc">No pudimos conectar con el servidor.</div>
    </div>
    <div className="alrt__actions">
      <button className="alrt__btn">Reintentar</button>
      <button className="alrt__btn alrt__btn--brand">Reportar</button>
    </div>
  </div>
);}
const BannerDangerTSX=
`import { AlertOctagon } from "lucide-react";
export default function BannerDanger(){ return (<div className="alrt alrt--danger"><AlertOctagon className="alrt__ico"/><div className="alrt__body"><div className="alrt__title">Error crítico</div><div className="alrt__desc">No pudimos conectar con el servidor.</div></div><div className="alrt__actions"><button className="alrt__btn">Reintentar</button><button className="alrt__btn alrt__btn--brand">Reportar</button></div></div>); }`;

function BannerGold(){ return (
  <div className="alrt alrt--gold">
    <ShieldAlert className="alrt__ico" />
    <div className="alrt__body">
      <div className="alrt__title">Aviso institucional</div>
      <div className="alrt__desc">Este panel es de uso oficial. Mantén tu sesión segura.</div>
    </div>
  </div>
);}
const BannerGoldTSX=
`import { ShieldAlert } from "lucide-react";
export default function BannerGold(){ return (<div className="alrt alrt--gold"><ShieldAlert className="alrt__ico"/><div className="alrt__body"><div className="alrt__title">Aviso institucional</div><div className="alrt__desc">Este panel es de uso oficial. Mantén tu sesión segura.</div></div></div>); }`;

function InlineFormErr(){ return (
  <div className="form-error">El campo CURP es obligatorio.</div>
);}
const InlineFormErrTSX=
`export default function FormError(){ return (<div className="form-error">El campo CURP es obligatorio.</div>); }`;

/* ===== Toasts (previews solo muestran un banner "Demostración") ===== */
function ToastsPreview(){ return (
  <div className="alrt"><div className="alrt__body">
    <div className="alrt__title">Toasts Sonner</div>
    <div className="alrt__desc">Ver “Ver completo” para probarlos en vivo.</div>
  </div></div>
);}

const ToastSuccessTSX =
`"use client";
import { toast } from "sonner";
export default function Demo(){ return <button onClick={()=>toast.success("Listo","Se guardó correctamente")}>Probar</button>; }`;

const ToastErrorTSX =
`"use client";
import { toast } from "sonner";
export default function Demo(){ return <button onClick={()=>toast.error("Error al guardar")}>Probar</button>; }`;

const ToastActionTSX =
`"use client";
import { toast } from "sonner";
export default function Demo(){
  return <button onClick={()=>{
    toast("¿Deshacer eliminación?", { action: { label:"Deshacer", onClick:()=>toast.success("Acción revertida") } });
  }}>Probar</button>;
}`;

const ToastPromiseTSX =
`"use client";
import { toast } from "sonner";
export default function Demo(){
  async function save(){
    const p = new Promise((res)=>setTimeout(res,1500));
    toast.promise(p, { loading:"Guardando…", success:"Guardado", error:"Fallo" });
    await p;
  }
  return <button onClick={save}>Probar</button>;
}`;

const ToastLoadingTSX =
`"use client";
import { toast } from "sonner";
export default function Demo(){
  return <button onClick={()=>{
    const id = toast.loading("Procesando…");
    setTimeout(()=>toast.success("Hecho",{ id }), 1200);
  }}>Probar</button>;
}`;

export const VARIANTS: Variante[] = [
  // Banners
  { id:"banner-info",     idGrupo:"banners", etiqueta:"Info",            vistaPrevia:<BannerInfo/>,    tsx:BannerInfoTSX },
  { id:"banner-success",  idGrupo:"banners", etiqueta:"Éxito",           vistaPrevia:<BannerSuccess/>, tsx:BannerSuccessTSX },
  { id:"banner-warn",     idGrupo:"banners", etiqueta:"Advertencia",     vistaPrevia:<BannerWarn/>,    tsx:BannerWarnTSX },
  { id:"banner-danger",   idGrupo:"banners", etiqueta:"Error + acciones",vistaPrevia:<BannerDanger/>, tsx:BannerDangerTSX },
  { id:"banner-gold",     idGrupo:"banners", etiqueta:"Institucional (oro)", vistaPrevia:<BannerGold/>, tsx:BannerGoldTSX },

  // Inline
  { id:"inline-form",     idGrupo:"inline",  etiqueta:"Error de formulario", vistaPrevia:<InlineFormErr/>, tsx:InlineFormErrTSX },

  // Toasts (solo preview; el TSX muestra cómo dispararlos)
  { id:"toast-success",   idGrupo:"toasts", etiqueta:"Toast éxito",     vistaPrevia:<ToastsPreview/>, tsx:ToastSuccessTSX },
  { id:"toast-error",     idGrupo:"toasts", etiqueta:"Toast error",     vistaPrevia:<ToastsPreview/>, tsx:ToastErrorTSX },
  { id:"toast-action",    idGrupo:"toasts", etiqueta:"Toast con acción",vistaPrevia:<ToastsPreview/>, tsx:ToastActionTSX },
  { id:"toast-promise",   idGrupo:"toasts", etiqueta:"Toast promise()", vistaPrevia:<ToastsPreview/>, tsx:ToastPromiseTSX },
  { id:"toast-loading",   idGrupo:"toasts", etiqueta:"Toast loading→done", vistaPrevia:<ToastsPreview/>, tsx:ToastLoadingTSX },
];
