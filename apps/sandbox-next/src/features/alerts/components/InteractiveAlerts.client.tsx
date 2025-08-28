"use client";

import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { Info, CheckCircle2, AlertTriangle, AlertOctagon, ShieldAlert } from "lucide-react";

export default function InteractiveAlerts({ variantId }: { variantId: string }) {
  // Monta un Toaster local por si el root no lo tiene (no duplica los de fuera)
  useEffect(()=>{},[]);
  const RootToaster = <Toaster richColors position="top-right" />;

  function Banner({ kind }:{ kind:"info"|"success"|"warn"|"danger"|"gold" }){
    const map = {
      info:   { cls:"alrt alrt--info",    Ico:Info,          t:"Información",        d:"Actualizamos el panel el próximo lunes a las 10:00." },
      success:{ cls:"alrt alrt--success", Ico:CheckCircle2,  t:"Operación exitosa",  d:"Se guardó correctamente." },
      warn:   { cls:"alrt alrt--warn",    Ico:AlertTriangle, t:"Advertencia",        d:"Faltan campos por completar." },
      danger: { cls:"alrt alrt--danger",  Ico:AlertOctagon,  t:"Error crítico",      d:"No pudimos conectar con el servidor." },
      gold:   { cls:"alrt alrt--gold",    Ico:ShieldAlert,   t:"Aviso institucional",d:"Este panel es de uso oficial." },
    }[kind];
    const Ico = map.Ico;
    return (
      <div className={map.cls}>
        <Ico className="alrt__ico" />
        <div className="alrt__body"><div className="alrt__title">{map.t}</div><div className="alrt__desc">{map.d}</div></div>
        {kind==="danger" && (
          <div className="alrt__actions">
            <button className="alrt__btn" onClick={()=>toast("Reintentando…")}>Reintentar</button>
            <button className="alrt__btn alrt__btn--brand" onClick={()=>toast.success("Reporte enviado")}>Reportar</button>
          </div>
        )}
      </div>
    );
  }

  if (variantId.startsWith("banner-")) {
    const k = variantId.replace("banner-","") as any;
    return (<div style={{display:"grid", gap:12}}>{RootToaster}<Banner kind={k}/></div>);
  }

  if (variantId === "inline-form") {
    return (
      <div style={{display:"grid", gap:12}}>
        {RootToaster}
        <div className="form-error">El campo CURP es obligatorio.</div>
        <button className="alrt__btn alrt__btn--brand" onClick={()=>toast.error("Completa los campos requeridos")}>Validar</button>
      </div>
    );
  }

  // Toasts
  const DemoButtons = (
    <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
      <button className="alrt__btn alrt__btn--brand" onClick={()=>toast.success("Guardado")}>Éxito</button>
      <button className="alrt__btn" onClick={()=>toast.error("Algo salió mal")}>Error</button>
      <button className="alrt__btn" onClick={()=>{
        toast("¿Deshacer eliminación?", { action: { label:"Deshacer", onClick:()=>toast.success("Acción revertida") } });
      }}>Acción</button>
      <button className="alrt__btn" onClick={async ()=>{
        const p = new Promise(res=>setTimeout(res,1200));
        toast.promise(p, { loading:"Guardando…", success:"Guardado", error:"Fallo" }); await p;
      }}>Promise</button>
      <button className="alrt__btn" onClick={()=>{
        const id = toast.loading("Procesando…");
        setTimeout(()=>toast.success("Hecho",{ id }), 1200);
      }}>Loading→Done</button>
    </div>
  );

  return <div style={{display:"grid", gap:12}}>{RootToaster}{DemoButtons}</div>;
}
