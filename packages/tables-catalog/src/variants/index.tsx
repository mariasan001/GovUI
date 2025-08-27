"use client";

import type { Variante } from "./types";
import { useMemo, useState } from "react";

/* ====== Datos demo comunes ====== */
type Row = {
  id: number;
  nombre: string;
  equipo: string;
  estado: "Activo" | "Pendiente" | "Bloqueado";
  creado: string;   // YYYY-MM-DD
  puntos: number;
  serie?: number[]; // para sparkline
};

const BASE: Row[] = [
  { id:1, nombre:"Alicia", equipo:"Core",   estado:"Activo",    creado:"2024-07-10", puntos: 92, serie:[3,6,5,8,7,9,11,9] },
  { id:2, nombre:"Bruno",  equipo:"QA",     estado:"Pendiente", creado:"2024-11-22", puntos: 71, serie:[2,2,3,4,5,6,6,7] },
  { id:3, nombre:"Clara",  equipo:"Data",   estado:"Activo",    creado:"2025-01-05", puntos: 84, serie:[4,5,5,6,7,7,8,10] },
  { id:4, nombre:"Damián", equipo:"Core",   estado:"Bloqueado", creado:"2024-09-01", puntos: 40, serie:[8,7,5,4,4,3,2,2] },
  { id:5, nombre:"Elisa",  equipo:"ML",     estado:"Activo",    creado:"2025-02-12", puntos: 95, serie:[5,6,7,8,9,10,12,13] },
  { id:6, nombre:"Fede",   equipo:"QA",     estado:"Pendiente", creado:"2024-12-01", puntos: 63, serie:[3,4,3,4,5,6,5,6] },
  { id:7, nombre:"Gina",   equipo:"Core",   estado:"Activo",    creado:"2025-03-03", puntos: 88, serie:[6,7,8,7,9,10,11,12] },
  { id:8, nombre:"Hugo",   equipo:"Data",   estado:"Activo",    creado:"2025-01-21", puntos: 79, serie:[5,4,6,7,8,9,9,10] },
  { id:9, nombre:"Iván",   equipo:"ML",     estado:"Pendiente", creado:"2024-10-08", puntos: 54, serie:[2,3,3,4,5,5,6,7] },
  { id:10,nombre:"Julia",  equipo:"Core",   estado:"Bloqueado", creado:"2024-06-20", puntos: 31, serie:[6,5,4,3,3,2,2,1] },
];

/* ====== Utilidades comunes ====== */
function useSort<T>(rows: T[], compare: (a:T,b:T)=>number) {
  const [dir, setDir] = useState<"asc"|"desc">("asc");
  const sorted = useMemo(() => {
    const arr = [...rows].sort(compare);
    return dir === "asc" ? arr : arr.reverse();
  }, [rows, compare, dir]);
  return { sorted, dir, toggle: ()=>setDir(d=>d==="asc"?"desc":"asc") };
}
function paginate<T>(rows: T[], page: number, size: number) {
  const start = (page-1)*size; return rows.slice(start, start+size);
}
const fmtDate = (s: string) => new Date(s).toLocaleDateString();

/* ====== 1. Básica: orden + búsqueda + paginación ====== */
function TablaBasicaPreview() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return !t ? BASE : BASE.filter(r =>
      [r.nombre, r.equipo, r.estado].some(v => v.toLowerCase().includes(t))
    );
  }, [q]);

  const { sorted, dir, toggle } = useSort(filtered, (a, b) => a.nombre.localeCompare(b.nombre));
  const pageRows = paginate(sorted, page, size);
  const totalPages = Math.max(1, Math.ceil(sorted.length / size));

  return (
    <div className="tb-card">
      <div className="tb-toolbar">
        <input className="tb-input" placeholder="Buscar…" value={q} onChange={e=>{setQ(e.target.value); setPage(1);}} />
        <div className="spacer" />
        <select className="tb-select" value={size} onChange={e=>{setSize(+e.target.value); setPage(1);}}>
          <option value={5}>5 / pág.</option>
          <option value={10}>10 / pág.</option>
        </select>
      </div>

      <div className="tb-table-wrap">
        <table className="tb-table">
          <thead>
            <tr>
              <th className="is-sortable" onClick={toggle}>
                Nombre <span className={`sort ${dir}`} />
              </th>
              <th>Equipo</th>
              <th>Estado</th>
              <th>Creado</th>
              <th className="is-num">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map(r => (
              <tr key={r.id}>
                <td>{r.nombre}</td>
                <td>{r.equipo}</td>
                <td><span className={`chip chip--${r.estado.toLowerCase()}`}>{r.estado}</span></td>
                <td>{fmtDate(r.creado)}</td>
                <td className="is-num">{r.puntos}</td>
              </tr>
            ))}
            {!pageRows.length && <tr><td colSpan={5} className="tb-empty">Sin resultados</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="tb-pager">
        <span>Mostrando {(page-1)*size + 1}–{Math.min(page*size, sorted.length)} de {sorted.length}</span>
        <div className="tb-pager__btns">
          <button disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Anterior</button>
          <button disabled={page>=totalPages} onClick={()=>setPage(p=>p+1)}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
const TablaBasicaTSX = `"use client";
import { useMemo, useState } from "react";
type Row = { id:number; nombre:string; equipo:string; estado:"Activo"|"Pendiente"|"Bloqueado"; creado:string; puntos:number; };
const DATA: Row[] = ${JSON.stringify(BASE.map(({serie, ...r})=>r))}
function useSort<T>(rows:T[], compare:(a:T,b:T)=>number){const[dir,setDir]=useState<"asc"|"desc">("asc");const sorted=useMemo(()=>{const arr=[...rows].sort(compare);return dir==="asc"?arr:arr.reverse();},[rows,compare,dir]);return{sorted,dir,toggle:()=>setDir(d=>d==="asc"?"desc":"asc")}}
const fmtDate=(s:string)=>new Date(s).toLocaleDateString();
export default function TablaBasica(){
  const[q,setQ]=useState("");const[page,setPage]=useState(1);const[size,setSize]=useState(5);
  const filtered=useMemo(()=>{const t=q.trim().toLowerCase();return!t?DATA:DATA.filter(r=>[r.nombre,r.equipo,r.estado].some(v=>v.toLowerCase().includes(t)));},[q]);
  const{sorted,dir,toggle}=useSort(filtered,(a,b)=>a.nombre.localeCompare(b.nombre));
  const start=(page-1)*size;const rows=sorted.slice(start,start+size);const totalPages=Math.max(1,Math.ceil(sorted.length/size));
  return(<div className="tb-card">
    <div className="tb-toolbar">
      <input className="tb-input" placeholder="Buscar…" value={q} onChange={e=>{setQ(e.target.value);setPage(1);}}/>
      <div className="spacer"/><select className="tb-select" value={size} onChange={e=>{setSize(+e.target.value);setPage(1);}}>
        <option value={5}>5 / pág.</option><option value={10}>10 / pág.</option></select></div>
    <div className="tb-table-wrap"><table className="tb-table"><thead><tr>
      <th className="is-sortable" onClick={toggle}>Nombre <span className={"sort "+dir}/></th>
      <th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th></tr></thead>
      <tbody>{rows.map(r=>(<tr key={r.id}><td>{r.nombre}</td><td>{r.equipo}</td>
        <td><span className={"chip chip--"+r.estado.toLowerCase()}>{r.estado}</span></td>
        <td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td></tr>))}
        {!rows.length&&<tr><td colSpan={5} className="tb-empty">Sin resultados</td></tr>}
      </tbody></table></div>
    <div className="tb-pager"><span>Mostrando {(page-1)*size+1}–{Math.min(page*size,sorted.length)} de {sorted.length}</span>
      <div className="tb-pager__btns"><button disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Anterior</button>
      <button disabled={page>=totalPages} onClick={()=>setPage(p=>p+1)}>Siguiente</button></div></div></div>);
}`;

/* ====== 2. Selección + acciones masivas + sticky ====== */
function TablaSeleccionPreview() {
  const [sel, setSel] = useState<number[]>([]);
  const all = sel.length === BASE.length;
  const toggleAll = () => setSel(all ? [] : BASE.map(r => r.id));
  const toggle = (id:number) => setSel(s => s.includes(id) ? s.filter(i=>i!==id) : [...s, id]);

  return (
    <div className="tb-card">
      {sel.length > 0 && (
        <div className="tb-bulkbar">
          <span>{sel.length} seleccionadas</span>
          <div className="spacer" />
          <button>Exportar CSV</button>
          <button className="danger">Eliminar</button>
        </div>
      )}
      <div className="tb-table-wrap">
        <table className="tb-table tb-table--sticky">
          <thead>
            <tr>
              <th style={{width:36}}><input type="checkbox" checked={all} onChange={toggleAll} aria-label="Seleccionar todo" /></th>
              <th>Nombre</th><th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {BASE.map(r => (
              <tr key={r.id} className={sel.includes(r.id) ? "is-selected" : ""}>
                <td><input type="checkbox" checked={sel.includes(r.id)} onChange={()=>toggle(r.id)} aria-label={`Seleccionar ${r.nombre}`} /></td>
                <td>{r.nombre}</td><td>{r.equipo}</td>
                <td><span className={`chip chip--${r.estado.toLowerCase()}`}>{r.estado}</span></td>
                <td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const TablaSeleccionTSX = `"use client";
import { useState } from "react";
type Row={ id:number; nombre:string; equipo:string; estado:"Activo"|"Pendiente"|"Bloqueado"; creado:string; puntos:number; };
const DATA: Row[] = ${JSON.stringify(BASE.map(({serie, ...r})=>r))}
const fmtDate=(s:string)=>new Date(s).toLocaleDateString();
export default function TablaSeleccion(){
  const[sel,setSel]=useState<number[]>([]);
  const all=sel.length===DATA.length; const toggleAll=()=>setSel(all?[]:DATA.map(r=>r.id));
  const toggle=(id:number)=>setSel(s=>s.includes(id)?s.filter(i=>i!==id):[...s,id]);
  return(<div className="tb-card">
    {sel.length>0&&(<div className="tb-bulkbar"><span>{sel.length} seleccionadas</span><div className="spacer"/><button>Exportar CSV</button><button className="danger">Eliminar</button></div>)}
    <div className="tb-table-wrap"><table className="tb-table tb-table--sticky"><thead><tr>
      <th style={{width:36}}><input type="checkbox" checked={all} onChange={toggleAll} aria-label="Seleccionar todo"/></th>
      <th>Nombre</th><th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th></tr></thead>
      <tbody>{DATA.map(r=>(<tr key={r.id} className={sel.includes(r.id)?"is-selected":""}>
        <td><input type="checkbox" checked={sel.includes(r.id)} onChange={()=>toggle(r.id)} aria-label={"Seleccionar "+r.nombre}/></td>
        <td>{r.nombre}</td><td>{r.equipo}</td><td><span className={"chip chip--"+r.estado.toLowerCase()}>{r.estado}</span></td>
        <td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td></tr>))}</tbody></table></div></div>);
}`;

/* ====== 3. Filtros avanzados (estado + rango fecha) ====== */
function TablaFiltrosPreview() {
  const [estado, setEstado] = useState<"Todos" | Row["estado"]>("Todos");
  const [desde, setDesde] = useState<string>("");
  const [hasta, setHasta] = useState<string>("");

  const filtered = useMemo(() => {
    return BASE.filter(r => {
      if (estado !== "Todos" && r.estado !== estado) return false;
      if (desde && r.creado < desde) return false;
      if (hasta && r.creado > hasta) return false;
      return true;
    });
  }, [estado, desde, hasta]);

  return (
    <div className="tb-card">
      <div className="tb-toolbar">
        <select className="tb-select" value={estado} onChange={e=>setEstado(e.target.value as any)}>
          <option>Todos</option><option>Activo</option><option>Pendiente</option><option>Bloqueado</option>
        </select>
        <input className="tb-input" type="date" value={desde} onChange={e=>setDesde(e.target.value)} />
        <input className="tb-input" type="date" value={hasta} onChange={e=>setHasta(e.target.value)} />
        <div className="spacer" />
        <button className="ghost" onClick={()=>{setEstado("Todos"); setDesde(""); setHasta("");}}>Limpiar</button>
      </div>

      <div className="tb-table-wrap">
        <table className="tb-table">
          <thead><tr><th>Nombre</th><th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th></tr></thead>
          <tbody>
            {filtered.map(r=>(
              <tr key={r.id}>
                <td>{r.nombre}</td><td>{r.equipo}</td>
                <td><span className={`chip chip--${r.estado.toLowerCase()}`}>{r.estado}</span></td>
                <td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td>
              </tr>
            ))}
            {!filtered.length && <tr><td colSpan={5} className="tb-empty">Sin resultados</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const TablaFiltrosTSX = `"use client";
import { useMemo, useState } from "react";
type Row={ id:number; nombre:string; equipo:string; estado:"Activo"|"Pendiente"|"Bloqueado"; creado:string; puntos:number; };
const DATA: Row[] = ${JSON.stringify(BASE.map(({serie, ...r})=>r))}
const fmtDate=(s:string)=>new Date(s).toLocaleDateString();
export default function TablaFiltros(){
  const[estado,setEstado]=useState<"Todos"|Row["estado"]>("Todos");
  const[desde,setDesde]=useState("");const[hasta,setHasta]=useState("");
  const rows=useMemo(()=>DATA.filter(r=>{ if(estado!=="Todos"&&r.estado!==estado) return false; if(desde&&r.creado<desde) return false; if(hasta&&r.creado>hasta) return false; return true; }),[estado,desde,hasta]);
  return(<div className="tb-card">
    <div className="tb-toolbar"><select className="tb-select" value={estado} onChange={e=>setEstado(e.target.value as any)}>
      <option>Todos</option><option>Activo</option><option>Pendiente</option><option>Bloqueado</option></select>
      <input className="tb-input" type="date" value={desde} onChange={e=>setDesde(e.target.value)}/>
      <input className="tb-input" type="date" value={hasta} onChange={e=>setHasta(e.target.value)}/>
      <div className="spacer"/><button className="ghost" onClick={()=>{setEstado("Todos");setDesde("");setHasta("");}}>Limpiar</button></div>
    <div className="tb-table-wrap"><table className="tb-table"><thead><tr><th>Nombre</th><th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th></tr></thead>
      <tbody>{rows.map(r=>(<tr key={r.id}><td>{r.nombre}</td><td>{r.equipo}</td><td><span className={"chip chip--"+r.estado.toLowerCase()}>{r.estado}</span></td><td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td></tr>))}
        {!rows.length&&<tr><td colSpan={5} className="tb-empty">Sin resultados</td></tr>}</tbody></table></div></div>);
}`;

/* ====== 4. Avanzada: expandibles + sparkline ====== */
function Spark({ data = [] as number[] }) {
  const w = 120, h = 36;
  if (!data.length) return null;
  const min = Math.min(...data), max = Math.max(...data);
  const nx = (i:number) => (i/(data.length-1)) * (w-4) + 2;
  const ny = (v:number) => h - ((v-min)/(max-min||1)) * (h-6) - 3;
  const d = data.map((v,i)=>`${i===0?"M":"L"}${nx(i)},${ny(v)}`).join(" ");
  return (
    <svg width={w} height={h} className="spark">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function TablaExpandiblePreview() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (id:number) => setOpen(o => o===id ? null : id);

  return (
    <div className="tb-card">
      <div className="tb-table-wrap">
        <table className="tb-table">
          <thead><tr><th style={{width:36}}></th><th>Nombre</th><th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th></tr></thead>
          <tbody>
            {BASE.map(r=>(
              <>
                <tr key={r.id} onClick={()=>toggle(r.id)} className="is-clickable">
                  <td>{open===r.id?"▾":"▸"}</td>
                  <td>{r.nombre}</td><td>{r.equipo}</td>
                  <td><span className={`chip chip--${r.estado.toLowerCase()}`}>{r.estado}</span></td>
                  <td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td>
                </tr>
                {open===r.id && (
                  <tr className="tb-detail"><td></td>
                    <td colSpan={5}>
                      <div className="detail-row">
                        <div>
                          <strong>Evolución</strong>
                          <Spark data={r.serie ?? []} />
                        </div>
                        <div className="meta">
                          <span className="muted">ID:</span> {r.id} · <span className="muted">Alta:</span> {fmtDate(r.creado)}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const TablaExpandibleTSX = `"use client";
import { useState } from "react";
type Row={ id:number; nombre:string; equipo:string; estado:"Activo"|"Pendiente"|"Bloqueado"; creado:string; puntos:number; serie?:number[]; };
const DATA: Row[] = ${JSON.stringify(BASE)}
const fmtDate=(s:string)=>new Date(s).toLocaleDateString();
function Spark({data=[]}:{data:number[]}){const w=120,h=36;if(!data.length)return null;const min=Math.min(...data),max=Math.max(...data);const nx=(i:number)=>i/(data.length-1)*(w-4)+2;const ny=(v:number)=>h-((v-min)/(max-min||1))*(h-6)-3;const d=data.map((v,i)=>\`\${i===0?"M":"L"}\${nx(i)},\${ny(v)}\`).join(" ");return(<svg width={w} height={h} className="spark"><path d={d} fill="none" stroke="currentColor" strokeWidth="2"/></svg>)}
export default function TablaExpandible(){const[open,setOpen]=useState<number|null>(null);const toggle=(id:number)=>setOpen(o=>o===id?null:id);
  return(<div className="tb-card"><div className="tb-table-wrap"><table className="tb-table"><thead><tr><th style={{width:36}}></th><th>Nombre</th><th>Equipo</th><th>Estado</th><th>Creado</th><th className="is-num">Puntos</th></tr></thead>
    <tbody>{DATA.map(r=>(<>
      <tr key={r.id} onClick={()=>toggle(r.id)} className="is-clickable"><td>{open===r.id?"▾":"▸"}</td><td>{r.nombre}</td><td>{r.equipo}</td>
        <td><span className={"chip chip--"+r.estado.toLowerCase()}>{r.estado}</span></td><td>{fmtDate(r.creado)}</td><td className="is-num">{r.puntos}</td></tr>
      {open===r.id&&(<tr className="tb-detail"><td></td><td colSpan={5}><div className="detail-row"><div><strong>Evolución</strong><Spark data={r.serie??[]}/></div>
        <div className="meta"><span className="muted">ID:</span> {r.id} · <span className="muted">Alta:</span> {fmtDate(r.creado)}</div></div></td></tr>)}</>))}</tbody></table></div></div>);
}`;

/* ====== Export de variantes ====== */
export const VARIANTS: Variante[] = [
  { id:"t-basic", idGrupo:"basicas", etiqueta:"Búsqueda + orden + paginación", vistaPrevia:<TablaBasicaPreview/>, tsx:TablaBasicaTSX },
  { id:"t-select", idGrupo:"seleccion", etiqueta:"Selección por filas + acciones masivas", vistaPrevia:<TablaSeleccionPreview/>, tsx:TablaSeleccionTSX },
  { id:"t-filtros", idGrupo:"filtros", etiqueta:"Filtros (estado + rango de fechas)", vistaPrevia:<TablaFiltrosPreview/>, tsx:TablaFiltrosTSX },
  { id:"t-expand", idGrupo:"avanzadas", etiqueta:"Expandibles + sparkline", vistaPrevia:<TablaExpandiblePreview/>, tsx:TablaExpandibleTSX },
];
