"use client";

import type { Variante } from "./types";
import { useState } from "react";
import { Check, ChevronRight, ChevronDown, Bell, User, Star, Folder, File, Circle } from "lucide-react";

/* ===== Datos demo ===== */
const people = [
  { id:1, nombre:"Ana", rol:"Diseño" },
  { id:2, nombre:"Bruno", rol:"QA" },
  { id:3, nombre:"Carla", rol:"Data" },
];

const tasks = [
  { id:1, t:"Revisar PR #245", meta:"hoy 16:00" },
  { id:2, t:"Deploy staging", meta:"mañana" },
  { id:3, t:"Sync producto", meta:"viernes" },
];

/* ====== 1. Lista simple (bullets) ====== */
function BulletsPreview(){
  return (
    <ul className="bullets">
      <li>Elementos accesibles</li>
      <li>Tokens del DS</li>
      <li>Componentes server-safe</li>
    </ul>
  );
}
const BulletsTSX = 
`export default function ListaBullets(){
  return (<ul className="bullets">
    <li>Elementos accesibles</li>
    <li>Tokens del DS</li>
    <li>Componentes server-safe</li>
  </ul>);
}`;

/* ====== 2. Numerada ====== */
function NumbersPreview(){
  return (
    <ol className="numbers">
      <li>Registrar usuario</li>
      <li>Confirmar correo</li>
      <li>Completar perfil</li>
    </ol>
  );
}
const NumbersTSX =
`export default function ListaNumerada(){
  return (<ol className="numbers">
    <li>Registrar usuario</li><li>Confirmar correo</li><li>Completar perfil</li>
  </ol>);
}`;

/* ====== 3. Lista simple (cards) ====== */
function SimpleCardsPreview(){
  return (
    <ul className="list">
      {tasks.map(x=>(
        <li key={x.id} className="item">
          <span className="icon"><Star size={16}/></span>
          <div><div>{x.t}</div><div className="meta">{x.meta}</div></div>
        </li>
      ))}
    </ul>
  );
}
const SimpleCardsTSX =
`import { Star } from "lucide-react";
const data=[{id:1,t:"Revisar PR #245",meta:"hoy 16:00"},{id:2,t:"Deploy staging",meta:"mañana"},{id:3,t:"Sync producto",meta:"viernes"}];
export default function ListaSimple(){
  return (<ul className="list">
    {data.map(x=>(<li key={x.id} className="item">
      <span className="icon"><Star size={16}/></span>
      <div><div>{x.t}</div><div className="meta">{x.meta}</div></div>
    </li>))}
  </ul>);
}`;

/* ====== 4. Iconos a la izquierda + chevron ====== */
function IconChevronPreview(){
  return (
    <ul className="list">
      {["Dashboard","Proyectos","Equipo"].map((t,i)=>(
        <li key={i} className="item">
          <Circle size={16}/><span>{t}</span>
          <ChevronRight className="chev" size={16}/>
        </li>
      ))}
    </ul>
  );
}
const IconChevronTSX =
`import { Circle, ChevronRight } from "lucide-react";
export default function ListaChevron(){
  const items=["Dashboard","Proyectos","Equipo"];
  return (<ul className="list">
    {items.map((t,i)=>(<li key={i} className="item">
      <Circle size={16}/><span>{t}</span><ChevronRight className="chev" size={16}/>
    </li>))}
  </ul>);
}`;

/* ====== 5. Avatares ====== */
function AvataresPreview(){
  return (
    <ul className="list">
      {people.map(p=>(
        <li key={p.id} className="item">
          <span className="ava" aria-hidden="true" />
          <div><div>{p.nombre}</div><div className="meta">{p.rol}</div></div>
          <span className="badge">online</span>
        </li>
      ))}
    </ul>
  );
}
const AvataresTSX =
`const people=[{id:1,nombre:"Ana",rol:"Diseño"},{id:2,nombre:"Bruno",rol:"QA"},{id:3,nombre:"Carla",rol:"Data"}];
export default function ListaAvatares(){
  return (<ul className="list">
    {people.map(p=>(<li key={p.id} className="item">
      <span className="ava" aria-hidden="true"/><div><div>{p.nombre}</div><div className="meta">{p.rol}</div></div>
      <span className="badge">online</span>
    </li>))}
  </ul>);
}`;

/* ====== 6. Con checkboxes (selección múltiple) ====== */
function CheckListPreview(){
  const [sel, setSel] = useState<number[]>([]);
  const toggle = (id:number)=>setSel(s=>s.includes(id)?s.filter(i=>i!==id):[...s,id]);
  return (
    <ul className="list">
      {tasks.map(x=>(
        <li key={x.id} className="item">
          <input type="checkbox" checked={sel.includes(x.id)} onChange={()=>toggle(x.id)} />
          <span>{x.t}</span>
          <span className="meta">{x.meta}</span>
        </li>
      ))}
    </ul>
  );
}
const CheckListTSX =
`"use client";
import { useState } from "react";
const data=[{id:1,t:"Revisar PR #245",meta:"hoy 16:00"},{id:2,t:"Deploy staging",meta:"mañana"},{id:3,t:"Sync producto",meta:"viernes"}];
export default function ListaChecks(){
  const[sel,setSel]=useState<number[]>([]);
  const toggle=(id:number)=>setSel(s=>s.includes(id)?s.filter(i=>i!==id):[...s,id]);
  return (<ul className="list">{data.map(x=>(<li key={x.id} className="item">
    <input type="checkbox" checked={sel.includes(x.id)} onChange={()=>toggle(x.id)}/>
    <span>{x.t}</span><span className="meta">{x.meta}</span>
  </li>))}</ul>);
}`;

/* ====== 7. Con radios (selección única) ====== */
function RadioListPreview(){
  const [sel, setSel] = useState(1);
  return (
    <ul className="list">
      {people.map(p=>(
        <li key={p.id} className="item">
          <input type="radio" name="u" checked={sel===p.id} onChange={()=>setSel(p.id)} />
          <span>{p.nombre}</span><span className="meta">{p.rol}</span>
        </li>
      ))}
    </ul>
  );
}
const RadioListTSX =
`"use client";
import { useState } from "react";
const people=[{id:1,nombre:"Ana",rol:"Diseño"},{id:2,nombre:"Bruno",rol:"QA"},{id:3,nombre:"Carla",rol:"Data"}];
export default function ListaRadios(){
  const[sel,setSel]=useState(1);
  return (<ul className="list">{people.map(p=>(<li key={p.id} className="item">
    <input type="radio" name="u" checked={sel===p.id} onChange={()=>setSel(p.id)}/>
    <span>{p.nombre}</span><span className="meta">{p.rol}</span>
  </li>))}</ul>);
}`;

/* ====== 8. Lista con switches ====== */
function ToggleListPreview(){
  return (
    <ul className="list">
      {["Notificaciones","Modo oscuro","Recordatorios"].map((t,i)=>(
        <li key={i} className="item">
          <span>{t}</span>
          <input className="ctrl" type="checkbox" role="switch" aria-label={t}/>
        </li>
      ))}
    </ul>
  );
}
const ToggleListTSX =
`export default function ListaToggles(){
  const items=["Notificaciones","Modo oscuro","Recordatorios"];
  return (<ul className="list">{items.map((t,i)=>(<li key={i} className="item">
    <span>{t}</span><input className="ctrl" type="checkbox" role="switch" aria-label={t}/>
  </li>))}</ul>);
}`;

/* ====== 9. Lista de acciones (leading icon + trailing) ====== */
function ActionListPreview(){
  return (
    <ul className="list">
      {[{i:<User size={16}/>,t:"Perfil"},{i:<Bell size={16}/>,t:"Alertas"}].map((x,idx)=>(
        <li key={idx} className="item" role="button" tabIndex={0}>
          <span className="icon">{x.i}</span><span>{x.t}</span>
          <ChevronRight className="chev" size={16}/>
        </li>
      ))}
    </ul>
  );
}
const ActionListTSX =
`import { User, Bell, ChevronRight } from "lucide-react";
export default function ListaAcciones(){
  const items=[{i:<User size={16}/>,t:"Perfil"},{i:<Bell size={16}/>,t:"Alertas"}];
  return (<ul className="list">{items.map((x,i)=>(<li key={i} className="item" role="button" tabIndex={0}>
    <span className="icon">{x.i}</span><span>{x.t}</span><ChevronRight className="chev" size={16}/>
  </li>))}</ul>);
}`;

/* ====== 10. Acordeón básico (details) ====== */
function AccordionPreview(){
  return (
    <div>
      <details className="ac"><summary><ChevronRight size={14}/> ¿Qué es GovUI?</summary>
        <div className="meta">Catálogo de UI componetizada y empaquetable.</div>
      </details>
      <details className="ac"><summary><ChevronRight size={14}/> ¿Cómo instalo?</summary>
        <div className="meta">Importa desde el paquete @govui/*-catalog.</div>
      </details>
    </div>
  );
}
const AccordionTSX =
`import { ChevronRight } from "lucide-react";
export default function AcordeonBasico(){
  return (<div>
    <details className="ac"><summary><ChevronRight size={14}/> ¿Qué es GovUI?</summary>
      <div className="meta">Catálogo de UI componetizada y empaquetable.</div>
    </details>
    <details className="ac"><summary><ChevronRight size={14}/> ¿Cómo instalo?</summary>
      <div className="meta">Importa desde el paquete @govui/*-catalog.</div>
    </details>
  </div>);
}`;

/* ====== 11. Acordeón múltiple con lista dentro ====== */
function AccordionRichPreview(){
  return (
    <details className="ac" open>
      <summary><ChevronDown size={14}/> Tareas de hoy</summary>
      <ul className="list" style={{marginTop:8}}>
        {tasks.map(x=>(
          <li key={x.id} className="item">
            <Check size={16}/><span>{x.t}</span><span className="meta">{x.meta}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
const AccordionRichTSX =
`import { ChevronDown, Check } from "lucide-react";
const data=[{id:1,t:"Revisar PR #245",meta:"hoy 16:00"},{id:2,t:"Deploy staging",meta:"mañana"},{id:3,t:"Sync producto",meta:"viernes"}];
export default function AcordeonLista(){
  return (<details className="ac" open>
    <summary><ChevronDown size={14}/> Tareas de hoy</summary>
    <ul className="list" style={{marginTop:8}}>
      {data.map(x=>(<li key={x.id} className="item"><Check size={16}/><span>{x.t}</span><span className="meta">{x.meta}</span></li>))}
    </ul>
  </details>);
}`;

/* ====== 12. Árbol / Tree con <details> ====== */
function TreePreview(){
  return (
    <div className="tree" role="tree">
      <details className="ac" open>
        <summary className="node"><Folder size={16}/> src</summary>
        <div className="tree" role="group">
          <div className="node"><File size={16}/> index.ts</div>
          <details className="ac">
            <summary className="node"><Folder size={16}/> components</summary>
            <div className="tree" role="group">
              <div className="node"><File size={16}/> Button.tsx</div>
            </div>
          </details>
        </div>
      </details>
    </div>
  );
}
const TreeTSX =
`import { Folder, File } from "lucide-react";
export default function Arbol(){
  return (<div className="tree" role="tree">
    <details className="ac" open>
      <summary className="node"><Folder size={16}/> src</summary>
      <div className="tree" role="group">
        <div className="node"><File size={16}/> index.ts</div>
        <details className="ac">
          <summary className="node"><Folder size={16}/> components</summary>
          <div className="tree" role="group">
            <div className="node"><File size={16}/> Button.tsx</div>
          </div>
        </details>
      </div>
    </details>
  </div>);
}`;

/* ====== 13. Timeline ====== */
function TimelinePreview(){
  const items=[{t:"Creado",d:"2025-03-01"},{t:"En revisión",d:"2025-03-02"},{t:"Aprobado",d:"2025-03-05"}];
  return (
    <div className="timeline">
      {items.map((x,i)=>(
        <div key={i} style={{position:"relative"}}>
          <span className="dot" aria-hidden />
          <div style={{marginLeft:16}}><strong>{x.t}</strong><div className="meta">{x.d}</div></div>
        </div>
      ))}
    </div>
  );
}
const TimelineTSX =
`export default function Timeline(){
  const items=[{t:"Creado",d:"2025-03-01"},{t:"En revisión",d:"2025-03-02"},{t:"Aprobado",d:"2025-03-05"}];
  return (<div className="timeline">
    {items.map((x,i)=>(<div key={i} style={{position:"relative"}}>
      <span className="dot" aria-hidden/><div style={{marginLeft:16}}><strong>{x.t}</strong><div className="meta">{x.d}</div></div>
    </div>))}
  </div>);
}`;

/* ====== 14. Notificaciones (dismiss) ====== */
function NotifPreview(){
  const [items, setItems] = useState([
    {id:1, t:"Nueva mención", i: <Bell size={16}/>},
    {id:2, t:"Usuario agregado", i: <User size={16}/>},
  ]);
  return (
    <div style={{display:"grid", gap:8}}>
      {items.map(n=>(
        <div key={n.id} className="note">
          <span className="icon">{n.i}</span><span>{n.t}</span>
          <button className="close" onClick={()=>setItems(s=>s.filter(x=>x.id!==n.id))}>Cerrar</button>
        </div>
      ))}
    </div>
  );
}
const NotifTSX =
`"use client";
import { useState } from "react";
import { Bell, User } from "lucide-react";
export default function Notificaciones(){
  const[items,setItems]=useState([{id:1,t:"Nueva mención",i:<Bell size={16}/>},{id:2,t:"Usuario agregado",i:<User size={16}/> }]);
  return (<div style={{display:"grid",gap:8}}>
    {items.map(n=>(<div key={n.id} className="note">
      <span className="icon">{n.i}</span><span>{n.t}</span>
      <button className="close" onClick={()=>setItems(s=>s.filter(x=>x.id!==n.id))}>Cerrar</button>
    </div>))}
  </div>);
}`;

/* ====== 15. Lista paginada ====== */
function PagedPreview(){
  const data = Array.from({length:22},(_,i)=>({id:i+1,t:`Elemento ${i+1}`}));
  const [page,setPage]=useState(1); const size=5;
  const max = Math.ceil(data.length/size);
  const rows = data.slice((page-1)*size,page*size);
  return (
    <div>
      <ul className="list">
        {rows.map(x=>(<li key={x.id} className="item"><Circle size={14}/>{x.t}</li>))}
      </ul>
      <div className="pager">
        <button disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Anterior</button>
        <button disabled={page>=max} onClick={()=>setPage(p=>p+1)}>Siguiente</button>
      </div>
    </div>
  );
}
const PagedTSX =
`"use client";
import { useState } from "react";
import { Circle } from "lucide-react";
export default function ListaPaginada(){
  const data=Array.from({length:22},(_,i)=>({id:i+1,t:\`Elemento \${i+1}\`}));
  const[page,setPage]=useState(1); const size=5; const max=Math.ceil(data.length/size);
  const rows=data.slice((page-1)*size,page*size);
  return (<div>
    <ul className="list">{rows.map(x=>(<li key={x.id} className="item"><Circle size={14}/>{x.t}</li>))}</ul>
    <div className="pager">
      <button disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Anterior</button>
      <button disabled={page>=max} onClick={()=>setPage(p=>p+1)}>Siguiente</button>
    </div>
  </div>);
}`;

/* ===== Exportar todas las variantes ===== */
export const VARIANTS: Variante[] = [
  { id:"l-bullets",  idGrupo:"basicas",   etiqueta:"Lista con viñetas",                      vistaPrevia:<BulletsPreview/>,        tsx:BulletsTSX },
  { id:"l-numbers",  idGrupo:"basicas",   etiqueta:"Lista numerada",                         vistaPrevia:<NumbersPreview/>,        tsx:NumbersTSX },
  { id:"l-simple",   idGrupo:"basicas",   etiqueta:"Items tipo card",                        vistaPrevia:<SimpleCardsPreview/>,    tsx:SimpleCardsTSX },

  { id:"l-chev",     idGrupo:"iconos",    etiqueta:"Icono + chevron",                        vistaPrevia:<IconChevronPreview/>,    tsx:IconChevronTSX },
  { id:"l-avatars",  idGrupo:"iconos",    etiqueta:"Avatares + badge",                       vistaPrevia:<AvataresPreview/>,       tsx:AvataresTSX },

  { id:"l-checks",   idGrupo:"seleccion", etiqueta:"Selección múltiple (checkbox)",          vistaPrevia:<CheckListPreview/>,      tsx:CheckListTSX },
  { id:"l-radios",   idGrupo:"seleccion", etiqueta:"Selección única (radio)",                vistaPrevia:<RadioListPreview/>,      tsx:RadioListTSX },
  { id:"l-toggles",  idGrupo:"seleccion", etiqueta:"Preferencias (switches)",                vistaPrevia:<ToggleListPreview/>,     tsx:ToggleListTSX },

  { id:"l-acc",      idGrupo:"acordeones", etiqueta:"Acordeón básico (details)",             vistaPrevia:<AccordionPreview/>,      tsx:AccordionTSX },
  { id:"l-acc-rich", idGrupo:"acordeones", etiqueta:"Acordeón con lista dentro",             vistaPrevia:<AccordionRichPreview/>,  tsx:AccordionRichTSX },
  { id:"l-tree",     idGrupo:"acordeones", etiqueta:"Árbol de carpetas",                     vistaPrevia:<TreePreview/>,           tsx:TreeTSX },

  { id:"l-timeline", idGrupo:"especiales", etiqueta:"Timeline / Historial",                  vistaPrevia:<TimelinePreview/>,       tsx:TimelineTSX },
  { id:"l-notes",    idGrupo:"especiales", etiqueta:"Notificaciones (dismiss)",              vistaPrevia:<NotifPreview/>,          tsx:NotifTSX },
  { id:"l-paged",    idGrupo:"especiales", etiqueta:"Lista paginada",                        vistaPrevia:<PagedPreview/>,          tsx:PagedTSX },
  { id:"l-actions",  idGrupo:"especiales", etiqueta:"Lista de acciones navegables",          vistaPrevia:<ActionListPreview/>,     tsx:ActionListTSX },
];
