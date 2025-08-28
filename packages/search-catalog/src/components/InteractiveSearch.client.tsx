

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Mic, SlidersHorizontal } from "lucide-react";

type Props = { variantId: string };

const DATA = [
  { id:"d1", title:"Reporte mensual", type:"documento" },
  { id:"d2", title:"Guía de estilos", type:"documento" },
  { id:"p1", title:"Ana López",       type:"persona"   },
  { id:"p2", title:"Carlos Ruiz",     type:"persona"   },
  { id:"t1", title:"Tablero Ventas",  type:"tablero"   },
];

export default function InteractiveSearch({ variantId }: Props){
  const [q, setQ] = useState("");
  const [seg, setSeg] = useState<"todo"|"documentos"|"personas"|"tableros">("todo");
  const [chips, setChips] = useState<{[k:string]:boolean}>({ activos:true, prioridad:false, finanzas:false });
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(()=>{
    let arr = DATA.filter(x => x.title.toLowerCase().includes(q.toLowerCase()));
    if (seg!=="todo") {
      const map:any = { documentos:"documento", personas:"persona", tableros:"tablero" };
      arr = arr.filter(x=>x.type===map[seg]);
    }
    if (chips.prioridad) arr = arr.map(x=>x); // demo: sin cambio
    if (chips.finanzas) arr = arr.filter(x=>/reporte|ventas|finanzas/i.test(x.title));
    return arr.slice(0,5);
  }, [q, seg, chips]);

  useEffect(()=>{ if(q) setOpen(true); else setOpen(false); setIdx(0); }, [q]);

  function onKey(e: React.KeyboardEvent<HTMLInputElement>){
    if(!open) return;
    if(e.key==="ArrowDown"){ e.preventDefault(); setIdx(i=>Math.min(i+1, filtered.length-1)); }
    if(e.key==="ArrowUp"){ e.preventDefault(); setIdx(i=>Math.max(i-1, 0)); }
    if(e.key==="Enter" && filtered[idx]){ setQ(filtered[idx].title); setOpen(false); }
    if(e.key==="Escape"){ setOpen(false); }
  }

  function toggleChip(k:"activos"|"prioridad"|"finanzas"){ setChips(v=>({...v, [k]:!v[k]})); }

  // plantillas por variante
  const baseInput = (
    <div className="srch__wrap" role="combobox" aria-expanded={open} aria-owns="sug-list">
      <span className="srch__icon"><Search size={16}/></span>
      <input
        className="srch__input"
        placeholder="Buscar…"
        value={q}
        onChange={e=>setQ(e.target.value)}
        onKeyDown={onKey}
        aria-controls="sug-list"
      />
      {(variantId==="s-with-button") && <button className="srch__btn srch__btn--brand" onClick={()=>setOpen(true)}>Buscar</button>}
      {(variantId==="s-with-mic") && <button className="srch__btn" aria-label="Dictar"><Mic size={16}/></button>}
      {(variantId==="s-chips") && <button className="srch__btn"><SlidersHorizontal size={16}/> Filtros</button>}
    </div>
  );

  const listBox = open && filtered.length>0 && (
    <div className="srch__pop" role="listbox" id="sug-list" ref={listRef}>
      <div className="pop__list">
        {filtered.map((it,i)=>(
          <div
            key={it.id}
            role="option"
            className="pop__item"
            aria-selected={i===idx}
            onMouseDown={(e)=>{ e.preventDefault(); setQ(it.title); setOpen(false); }}
          >
            <span>{it.title}</span>
            <span className="pop__meta">{it.type}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if(variantId==="s-segmented" || variantId==="s-tabs-top"){
    return (
      <div className="srch srch--full" style={{display:"grid", gap:8}}>
        <div className="s-seg" role="tablist">
          <button role="tab" data-on={seg==="todo"} onClick={()=>setSeg("todo")}>Todo</button>
          <button role="tab" data-on={seg==="documentos"} onClick={()=>setSeg("documentos")}>Documentos</button>
          <button role="tab" data-on={seg==="personas"} onClick={()=>setSeg("personas")}>Personas</button>
          <button role="tab" data-on={seg==="tableros"} onClick={()=>setSeg("tableros")}>Tableros</button>
        </div>
        {baseInput}
        {listBox}
      </div>
    );
  }

  if(variantId==="s-chips"){
    return (
      <div className="srch srch--full" style={{display:"grid", gap:8}}>
        {baseInput}
        <div className="srch__chips">
          <button className="chip" data-on={chips.activos}   onClick={()=>toggleChip("activos")}>Activos</button>
          <button className="chip" data-on={chips.prioridad} onClick={()=>toggleChip("prioridad")}>Prioridad Alta</button>
          <button className="chip" data-on={chips.finanzas}  onClick={()=>toggleChip("finanzas")}>Etiqueta: Finanzas</button>
        </div>
        {listBox}
      </div>
    );
  }

  if(variantId==="s-inline"){
    return (
      <div className="srch srch--full" style={{display:"grid", gap:10}}>
        {baseInput}
        <div className="srch-results">
          {filtered.length===0 ? "Sin resultados…" : filtered.map(it=>(
            <div key={it.id}>• {it.title} <span style={{color:"#6b7280"}}>({it.type})</span></div>
          ))}
        </div>
      </div>
    );
  }

  if(variantId==="s-people"){
    return (
      <div className="srch srch--full">
        {baseInput}
        {open && (
          <div className="srch__pop" role="listbox">
            <div className="pop__list">
              {filtered.map((it,i)=>(
                <div key={it.id} role="option" className="pop__item" aria-selected={i===idx}
                  onMouseDown={(e)=>{ e.preventDefault(); setQ(it.title); setOpen(false); }}>
                  <img src={`https://i.pravatar.cc/24?u=${it.id}`} alt="" width="24" height="24" style={{borderRadius:999}} />
                  <span>{it.title}</span><span className="pop__meta">{it.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if(variantId==="s-command"){
    // Simula la paleta siempre abierta
    return (
      <div className="cmd">
        <div style={{display:"flex", alignItems:"center", gap:8}}>
          <span className="srch__icon"><Search size={16}/></span>
          <input className="srch__input" placeholder="Ir a…, Crear…, Invitar…" value={q} onChange={e=>setQ(e.target.value)}/>
          <span className="cmd__kbd">Ctrl/Cmd K</span>
        </div>
        <div className="srch__pop" style={{position:"relative", inset:"auto", boxShadow:"none", border:"0"}}>
          <div className="pop__list">
            {["Ir a Dashboard", "Crear reporte", "Invitar usuario"].filter(x=>x.toLowerCase().includes(q.toLowerCase())).map((x,i)=>(
              <div key={i} className="pop__item">{x}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // básicos
  return (
    <div className="srch srch--full">
      {baseInput}
      {listBox}
    </div>
  );
}


