


import type { Variante } from "./types";
import { Search, Mic, SlidersHorizontal } from "lucide-react";

/* Helpers visuales para preview */
const Ico = ({children}:{children:React.ReactNode}) => <span className="srch__icon">{children}</span>;

/* 1) Básico */
function SBasic(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar…" />
      </div>
    </div>
  );
}
const SBasicTSX =
`import { Search } from "lucide-react";
export default function SearchBasic(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Buscar…" />
      </div>
    </div>
  );
}`;

/* 2) Input + botón */
function SWithButton(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar reportes…" />
        <button className="srch__btn srch__btn--brand">Buscar</button>
      </div>
    </div>
  );
}
const SWithButtonTSX =
`import { Search } from "lucide-react";
export default function SearchWithButton(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Buscar reportes…" />
        <button className="srch__btn srch__btn--brand">Buscar</button>
      </div>
    </div>
  );
}`;

/* 3) Con micro (UI) */
function SWithMic(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar (voz)…" />
        <button className="srch__btn" aria-label="Dictar"><Mic size={16}/></button>
      </div>
    </div>
  );
}
const SWithMicTSX =
`import { Search, Mic } from "lucide-react";
export default function SearchWithMic(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Buscar (voz)…" />
        <button className="srch__btn" aria-label="Dictar"><Mic size={16}/></button>
      </div>
    </div>
  );
}`;

/* 4) Chips de filtros */
function SChips(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:8}}>
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar proyectos…" />
        <button className="srch__btn"><SlidersHorizontal size={16}/> Filtros</button>
      </div>
      <div className="srch__chips">
        <button className="chip" data-on="true">Activos</button>
        <button className="chip">Prioridad Alta</button>
        <button className="chip">Etiqueta: Finanzas</button>
      </div>
    </div>
  );
}
const SChipsTSX =
`import { Search, SlidersHorizontal } from "lucide-react";
export default function SearchChips(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:8}}>
      <div className="srch__wrap" role="search">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Buscar proyectos…" />
        <button className="srch__btn"><SlidersHorizontal size={16}/> Filtros</button>
      </div>
      <div className="srch__chips">
        <button className="chip" data-on="true">Activos</button>
        <button className="chip">Prioridad Alta</button>
        <button className="chip">Etiqueta: Finanzas</button>
      </div>
    </div>
  );
}`;

/* 5) Segmentado All/Docs/Personas */
function SSegmented(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:8}}>
      <div className="s-seg" role="tablist" aria-label="Categorías">
        <button role="tab" data-on="true">Todo</button>
        <button role="tab">Documentos</button>
        <button role="tab">Personas</button>
      </div>
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar en Todo…" />
      </div>
    </div>
  );
}
const SSegmentedTSX =
`export default function SearchSegmented(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:8}}>
      <div className="s-seg" role="tablist" aria-label="Categorías">
        <button role="tab" data-on="true">Todo</button>
        <button role="tab">Documentos</button>
        <button role="tab">Personas</button>
      </div>
      <div className="srch__wrap" role="search">
        <span className="srch__icon">🔎</span>
        <input className="srch__input" placeholder="Buscar en Todo…" />
      </div>
    </div>
  );
}`;

/* 6) Sugerencias (preview de listbox) */
function SSuggest(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="combobox" aria-expanded="true" aria-owns="sug1-listbox">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Escribe para sugerencias…" aria-controls="sug1-listbox" />
      </div>
      <div className="srch__pop" role="listbox" id="sug1-listbox">
        <div className="pop__list">
          <div className="pop__item" role="option" aria-selected="true">Reporte mensual <span className="pop__meta">Documento</span></div>
          <div className="pop__item" role="option">Equipo Finanzas <span className="pop__meta">Persona</span></div>
          <div className="pop__item" role="option">Presupuesto 2025 <span className="pop__meta">Documento</span></div>
        </div>
      </div>
    </div>
  );
}
const SSuggestTSX =
`import { Search } from "lucide-react";
export default function SearchSuggestPreview(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="combobox" aria-expanded="true" aria-owns="sug1-listbox">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Escribe para sugerencias…" aria-controls="sug1-listbox" />
      </div>
      <div className="srch__pop" role="listbox" id="sug1-listbox">
        <div className="pop__list">
          <div className="pop__item" role="option" aria-selected="true">Reporte mensual <span className="pop__meta">Documento</span></div>
          <div className="pop__item" role="option">Equipo Finanzas <span className="pop__meta">Persona</span></div>
          <div className="pop__item" role="option">Presupuesto 2025 <span className="pop__meta">Documento</span></div>
        </div>
      </div>
    </div>
  );
}`;

/* 7) Resultados embebidos simples */
function SInlineResults(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:10}}>
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar y ver resultados abajo…" />
      </div>
      <div className="srch-results">
        <div>• Reporte mensual (PDF)</div>
        <div>• Guía de estilos (DOC)</div>
        <div>• Equipo Finanzas (Perfil)</div>
      </div>
    </div>
  );
}
const SInlineResultsTSX =
`import { Search } from "lucide-react";
export default function SearchInlineResults(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:10}}>
      <div className="srch__wrap" role="search">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Buscar y ver resultados abajo…" />
      </div>
      <div className="srch-results">
        <div>• Reporte mensual (PDF)</div>
        <div>• Guía de estilos (DOC)</div>
        <div>• Equipo Finanzas (Perfil)</div>
      </div>
    </div>
  );
}`;

/* 8) Resultado con avatar y meta */
function SPeople(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar personas…" />
      </div>
      <div className="srch__pop" role="listbox">
        <div className="pop__list">
          <div className="pop__item" role="option" aria-selected="true">
            <img src="https://i.pravatar.cc/24?img=12" alt="" width="24" height="24" style={{borderRadius:999}} />
            <span>Ana López</span><span className="pop__meta">Analista</span>
          </div>
          <div className="pop__item" role="option">
            <img src="https://i.pravatar.cc/24?img=25" alt="" width="24" height="24" style={{borderRadius:999}} />
            <span>Carlos Ruiz</span><span className="pop__meta">PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
const SPeopleTSX =
`import { Search } from "lucide-react";
export default function SearchPeoplePreview(){
  return (
    <div className="srch srch--full">
      <div className="srch__wrap" role="search">
        <span className="srch__icon"><Search size={16}/></span>
        <input className="srch__input" placeholder="Buscar personas…" />
      </div>
      <div className="srch__pop" role="listbox">
        <div className="pop__list">
          <div className="pop__item" role="option" aria-selected="true">
            <img src="https://i.pravatar.cc/24?img=12" alt="" width="24" height="24" style={{borderRadius:999}} />
            <span>Ana López</span><span className="pop__meta">Analista</span>
          </div>
          <div className="pop__item" role="option">
            <img src="https://i.pravatar.cc/24?img=25" alt="" width="24" height="24" style={{borderRadius:999}} />
            <span>Carlos Ruiz</span><span className="pop__meta">PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}`;

/* 9) Búsqueda + tabs de categoría arriba */
function STabsTop(){
  return (
    <div className="srch srch--full" style={{display:"grid", gap:8}}>
      <div className="s-seg" role="tablist">
        <button role="tab" data-on="true">Todo</button>
        <button role="tab">Reportes</button>
        <button role="tab">Tableros</button>
      </div>
      <div className="srch__wrap">
        <Ico><Search size={16}/></Ico>
        <input className="srch__input" placeholder="Buscar en Reportes, Tableros…" />
      </div>
    </div>
  );
}
const STabsTopTSX =
`export default function SearchTabsTop(){ return (<div className="srch srch--full" style={{display:"grid", gap:8}}><div className="s-seg" role="tablist"><button role="tab" data-on="true">Todo</button><button role="tab">Reportes</button><button role="tab">Tableros</button></div><div className="srch__wrap"><span className="srch__icon">🔎</span><input className="srch__input" placeholder="Buscar en Reportes, Tableros…" /></div></div>); }`;

/* 10) Command palette (Ctrl/Cmd K) */
function SCommand(){
  return (
    <div className="cmd">
      <div style={{display:"flex", alignItems:"center", gap:8}}>
        <Ico><Search size={16}/></Ico>
        <span style={{fontWeight:700}}>Abrir paleta de comandos</span>
        <span className="cmd__kbd">Ctrl/Cmd K</span>
      </div>
      <div className="srch__pop" style={{position:"relative", inset:"auto", boxShadow:"none", border:"0"}}>
        <div className="pop__list">
          <div className="pop__item">Ir a Dashboard</div>
          <div className="pop__item">Crear reporte</div>
          <div className="pop__item">Invitar usuario</div>
        </div>
      </div>
    </div>
  );
}
const SCommandTSX =
`import { Search } from "lucide-react";
export default function SearchCommandPalette(){
  return (
    <div className="cmd">
      <div style={{display:"flex", alignItems:"center", gap:8}}>
        <span className="srch__icon"><Search size={16}/></span>
        <span style={{fontWeight:700}}>Abrir paleta de comandos</span>
        <span className="cmd__kbd">Ctrl/Cmd K</span>
      </div>
      <div className="srch__pop" style={{position:"relative", inset:"auto", boxShadow:"none", border:"0"}}>
        <div className="pop__list">
          <div className="pop__item">Ir a Dashboard</div>
          <div className="pop__item">Crear reporte</div>
          <div className="pop__item">Invitar usuario</div>
        </div>
      </div>
    </div>
  );
}`;

export const VARIANTS: Variante[] = [
  { id:"s-basic",        idGrupo:"basicos",    etiqueta:"Básico",                      vistaPrevia:<SBasic/>,         tsx:SBasicTSX },
  { id:"s-with-button",  idGrupo:"basicos",    etiqueta:"Input + botón",               vistaPrevia:<SWithButton/>,    tsx:SWithButtonTSX },
  { id:"s-with-mic",     idGrupo:"basicos",    etiqueta:"Con mic (UI)",                vistaPrevia:<SWithMic/>,       tsx:SWithMicTSX },

  { id:"s-chips",        idGrupo:"filtros",    etiqueta:"Chips de filtros",            vistaPrevia:<SChips/>,         tsx:SChipsTSX },
  { id:"s-segmented",    idGrupo:"categorias", etiqueta:"Segmentado (Todo/Docs/People)", vistaPrevia:<SSegmented/>,  tsx:SSegmentedTSX },
  { id:"s-suggest",      idGrupo:"resultados", etiqueta:"Sugerencias (listbox)",       vistaPrevia:<SSuggest/>,       tsx:SSuggestTSX },
  { id:"s-inline",       idGrupo:"resultados", etiqueta:"Resultados embebidos",        vistaPrevia:<SInlineResults/>, tsx:SInlineResultsTSX },
  { id:"s-people",       idGrupo:"resultados", etiqueta:"Resultados con avatar",       vistaPrevia:<SPeople/>,        tsx:SPeopleTSX },
  { id:"s-tabs-top",     idGrupo:"categorias", etiqueta:"Tabs de categoría",           vistaPrevia:<STabsTop/>,       tsx:STabsTopTSX },
  { id:"s-command",      idGrupo:"power",      etiqueta:"Command palette (Ctrl/Cmd K)",vistaPrevia:<SCommand/>,       tsx:SCommandTSX },
];
