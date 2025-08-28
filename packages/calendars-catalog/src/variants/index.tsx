
import type { Variante } from "./types";

/* Helpers de preview (mudo) */
function Dow(){ return (
  <>
    <div className="cal__dow">Lun</div><div className="cal__dow">Mar</div><div className="cal__dow">Mié</div>
    <div className="cal__dow">Jue</div><div className="cal__dow">Vie</div><div className="cal__dow">Sáb</div><div className="cal__dow">Dom</div>
  </>
); }
function DaysSimple(){
  // 6 filas * 7 cols de ejemplo (algunas mutedas)
  const cells = Array.from({length:42}, (_,i)=>{
    const num = (i+26)%30 + 1; // demo
    const muted = i<3 || i>33;
    const today = i===17;
    const selected = i===20;
    return (
      <div key={i} className={"cal__day"+(muted?" is-muted":"")+(today?" is-today":"")+(selected?" is-selected":"")}>
        <span className="cal__num">{num}</span>
      </div>
    );
  });
  return <>{cells}</>;
}

/* 1) Básico: mes subrayado */
function CalBasic(){
  return (
    <div className="cal">
      <div className="cal__toolbar"><span className="cal__title">Marzo 2025</span></div>
      <div className="cal__grid"><Dow/></div>
      <div className="cal__grid"><DaysSimple/></div>
    </div>
  );
}
const CalBasicTSX = `export default function CalBasic(){
  return (
    <div className="cal">
      <div className="cal__toolbar"><span className="cal__title">Marzo 2025</span></div>
      <div className="cal__grid"><div className="cal__dow">Lun</div><div className="cal__dow">Mar</div><div className="cal__dow">Mié</div><div className="cal__dow">Jue</div><div className="cal__dow">Vie</div><div className="cal__dow">Sáb</div><div className="cal__dow">Dom</div></div>
      {/* ...celdas 42 (simplificadas para el ejemplo) */}
    </div>
  );
}`;

/* 2) Básico compacto (mini) */
function CalMini(){
  return (
    <div className="cal cal--mini">
      <div className="cal__toolbar"><span className="cal__title">Mar 2025</span></div>
      <div className="cal__grid"><Dow/></div>
      <div className="cal__grid"><DaysSimple/></div>
    </div>
  );
}
const CalMiniTSX = `export default function CalMini(){ /* igual que CalBasic con clase cal--mini */ return (<div className="cal cal--mini">...</div>); }`;

/* 3) Dos meses lado a lado */
function CalTwoMonths(){
  return (
    <div className="cal--twomonths">
      <CalBasic/><CalMini/>
    </div>
  );
}
const CalTwoMonthsTSX = `import CalBasic from "./CalBasic"; import CalMini from "./CalMini";
export default function CalTwoMonths(){ return (<div className="cal--twomonths"><CalBasic/><CalMini/></div>); }`;

/* 4) Selección simple (día marcado) */
function CalSelectOne(){ return <CalBasic/>; }
const CalSelectOneTSX = `export default function CalSelectOne(){ return (<CalBasic/>); }`;

/* 5) Rango (in-range visual) */
function CalRange(){
  // Igual que DaysSimple pero con clase in-range en algunas celdas
  const cells = Array.from({length:42}, (_,i)=>{
    const num = (i+26)%30 + 1;
    const muted = i<3 || i>33;
    const start = i===14, end=i===20;
    const inRange = i>14 && i<20;
    return (
      <div key={i} className={"cal__day"+(muted?" is-muted":"")+(inRange?" in-range":"")+(start?" is-selected":"")+(end?" is-selected":"")}>
        <span className="cal__num">{num}</span>
      </div>
    );
  });
  return (
    <div className="cal">
      <div className="cal__toolbar"><span className="cal__title">Abril 2025</span></div>
      <div className="cal__grid"><Dow/></div>
      <div className="cal__grid">{cells}</div>
    </div>
  );
}
const CalRangeTSX = `export default function CalRange(){ /* marcar celdas con .in-range + .is-selected al inicio/fin */ return (<div className="cal">...</div>); }`;

/* 6) Eventos (puntos) */
function CalEventsDots(){
  const cells = Array.from({length:42}, (_,i)=>{
    const num = (i+26)%30 + 1;
    const has = [6,10,17,23].includes(i);
    return (
      <div key={i} className="cal__day">
        <span className="cal__num">{num}</span>
        {has && <span className="cal__dot" />}
      </div>
    );
  });
  return (
    <div className="cal">
      <div className="cal__toolbar"><span className="cal__title">Mayo 2025</span></div>
      <div className="cal__grid"><Dow/></div>
      <div className="cal__grid">{cells}</div>
    </div>
  );
}
const CalEventsDotsTSX = `export default function CalEventsDots(){ /* usa .cal__dot dentro de cada día con evento */ return (<div className="cal">...</div>); }`;

/* 7) Eventos con badges */
function CalEventsBadges(){
  const cells = Array.from({length:42}, (_,i)=>{
    const num = (i+26)%30 + 1;
    const info = ({16:"Capacitación", 18:"Deploy v2"} as any)[num];
    return (
      <div key={i} className="cal__day">
        <span className="cal__num">{num}</span>
        {info && <span className="cal__badge">{info}</span>}
      </div>
    );
  });
  return (
    <div className="cal">
      <div className="cal__toolbar"><span className="cal__title">Junio 2025</span></div>
      <div className="cal__grid"><Dow/></div>
      <div className="cal__grid">{cells}</div>
    </div>
  );
}
const CalEventsBadgesTSX = `export default function CalEventsBadges(){ /* usa .cal__badge para texto corto */ return (<div className="cal">...</div>); }`;

/* 8) Vista semana (slots) */
function WeekView(){
  return (
    <div className="week">
      <div>
        {["08:00","09:00","10:00","11:00","12:00","13:00"].map(h=>(
          <div key={h} className="week__hour">{h}</div>
        ))}
      </div>
      <div className="week__grid">
        {Array.from({length:6*7}).map((_,i)=>(<div key={i} className="week__cell" />))}
      </div>
    </div>
  );
}
const WeekViewTSX = `export default function WeekView(){ /* grilla simple de horas x días */ return (<div className="week">...</div>); }`;

/* 9) Agenda (lista) */
function AgendaList(){
  return (
    <div className="agenda">
      <div className="agenda__item">
        <div><div className="agenda__title">Reunión de avance</div><div className="agenda__when">Lun 10:00–10:45</div></div>
        <span className="cal__badge">Sala A</span>
      </div>
      <div className="agenda__item">
        <div><div className="agenda__title">Onboarding</div><div className="agenda__when">Mar 12:00–13:00</div></div>
        <span className="cal__badge">Remoto</span>
      </div>
    </div>
  );
}
const AgendaListTSX = `export default function AgendaList(){ return (<div className="agenda">...</div>); }`;

/* 10) DateTime picker (fecha + hora) */
function DateTime(){
  return (
    <div className="datetime">
      <CalMini/>
      <div className="timecol">
        {["09:00","09:30","10:00","10:30","11:00","11:30","12:00"].map(t=>(
          <button key={t}>{t}</button>
        ))}
      </div>
    </div>
  );
}
const DateTimeTSX = `export default function DateTime(){ return (<div className="datetime">...</div>); }`;

export const VARIANTS: Variante[] = [
  { id:"cal-basic",         idGrupo:"basicos", etiqueta:"Mes básico",           vistaPrevia:<CalBasic/>,        tsx:CalBasicTSX },
  { id:"cal-mini",          idGrupo:"basicos", etiqueta:"Mini mensual",         vistaPrevia:<CalMini/>,         tsx:CalMiniTSX },
  { id:"cal-twomonths",     idGrupo:"basicos", etiqueta:"Dos meses",            vistaPrevia:<CalTwoMonths/>,    tsx:CalTwoMonthsTSX },

  { id:"cal-select-one",    idGrupo:"rango",   etiqueta:"Selección de día",     vistaPrevia:<CalSelectOne/>,    tsx:CalSelectOneTSX },
  { id:"cal-range",         idGrupo:"rango",   etiqueta:"Rango (start–end)",    vistaPrevia:<CalRange/>,        tsx:CalRangeTSX },

  { id:"cal-events-dots",   idGrupo:"eventos", etiqueta:"Eventos (puntos)",     vistaPrevia:<CalEventsDots/>,   tsx:CalEventsDotsTSX },
  { id:"cal-events-badges", idGrupo:"eventos", etiqueta:"Eventos (badges)",     vistaPrevia:<CalEventsBadges/>, tsx:CalEventsBadgesTSX },

  { id:"cal-week",          idGrupo:"vistas",  etiqueta:"Vista semana",         vistaPrevia:<WeekView/>,        tsx:WeekViewTSX },
  { id:"cal-agenda",        idGrupo:"vistas",  etiqueta:"Agenda (lista)",       vistaPrevia:<AgendaList/>,      tsx:AgendaListTSX },
  { id:"cal-datetime",      idGrupo:"vistas",  etiqueta:"Fecha + hora",         vistaPrevia:<DateTime/>,        tsx:DateTimeTSX },
];

