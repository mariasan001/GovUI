
"use client";

import { useMemo, useState } from "react";

type Props = { variantId: string };

function buildMonth(year:number, month:number){
  // retorna 42 celdas (6x7) con {date, muted}
  const first = new Date(year, month, 1);
  const startDow = (first.getDay()+6)%7; // L=0..D=6
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const daysPrev = startDow;
  const grid: {d:Date; muted:boolean}[] = [];
  for(let i=0;i<42;i++){
    const dayNum = i - daysPrev + 1;
    const d = new Date(year, month, dayNum);
    const muted = dayNum<1 || dayNum>daysInMonth;
    grid.push({ d, muted });
  }
  return grid;
}

export default function InteractiveCalendar({ variantId }: Props){
  const now = new Date();
  const [ym, setYm] = useState<{y:number; m:number}>({ y: now.getFullYear(), m: now.getMonth() });
  const [selected, setSelected] = useState<Date|null>(null);
  const [start, setStart] = useState<Date|null>(null);
  const [end, setEnd] = useState<Date|null>(null);

  const grid = useMemo(()=>buildMonth(ym.y, ym.m), [ym]);
  const isSameDay = (a:Date,b:Date)=> a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
  const inRange = (d:Date)=> start && end && d>=start && d<=end;

  function prev(){ setYm(v=>({ y: v.m===0? v.y-1 : v.y, m: v.m===0? 11 : v.m-1 })); }
  function next(){ setYm(v=>({ y: v.m===11? v.y+1 : v.y, m: v.m===11? 0 : v.m+1 })); }

  function onPickDay(d:Date){
    if(variantId==="cal-range" || variantId==="cal-datetime"){
      if(!start || (start && end)){ setStart(d); setEnd(null); }
      else if(start && !end){
        if(d < start){ setEnd(start); setStart(d); }
        else setEnd(d);
      }
    } else {
      setSelected(d);
    }
  }

  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  // Plantillas por variante
  function renderMonth({ mini=false }={}){
    return (
      <div className={`cal${mini?" cal--mini":""}`}>
        <div className="cal__toolbar">
          <span className="cal__title">{months[ym.m]} {ym.y}</span>
          <div className="cal__nav">
            <button className="cal__btn" onClick={prev}>◀</button>
            <button className="cal__btn" onClick={next}>▶</button>
          </div>
        </div>
        <div className="cal__grid">
          {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(d=><div key={d} className="cal__dow">{d}</div>)}
        </div>
        <div className="cal__grid">
          {grid.map(({d, muted},i)=>{
            const today = isSameDay(d, now);
            const isSel = selected && isSameDay(d, selected);
            const startSel = start && isSameDay(d,start);
            const endSel = end && isSameDay(d,end!);
            const range = inRange(d!);
            return (
              <button
                key={i}
                className={"cal__day"+(muted?" is-muted":"")+(today?" is-today":"")+(isSel||startSel||endSel?" is-selected":"")+(range?" in-range":"")}
                onClick={()=>onPickDay(d)}
                style={{ textAlign:"left" }}
              >
                <span className="cal__num">{d.getDate()}</span>
                {(variantId==="cal-events-dots" && d.getDate()%5===0) && <span className="cal__dot" />}
                {(variantId==="cal-events-badges" && d.getDate()===16) && <span className="cal__badge">Reunión</span>}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if(variantId==="cal-twomonths"){
    const nextYm = ym.m===11 ? {y:ym.y+1,m:0} : {y:ym.y,m:ym.m+1};
    const grid2 = buildMonth(nextYm.y, nextYm.m);
    return (
      <div className="cal--twomonths">
        {renderMonth({mini:false})}
        {/* Segundo mes (solo lectura) */}
        <div className="cal cal--mini">
          <div className="cal__toolbar"><span className="cal__title">{months[nextYm.m]} {nextYm.y}</span></div>
          <div className="cal__grid">
            {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(d=><div key={d} className="cal__dow">{d}</div>)}
          </div>
          <div className="cal__grid">
            {grid2.map(({d,muted},i)=>(
              <div key={i} className={"cal__day"+(muted?" is-muted":"")}>
                <span className="cal__num">{d.getDate()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if(variantId==="cal-week"){
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

  if(variantId==="cal-agenda"){
    return (
      <div className="agenda">
        <div className="agenda__item">
          <div><div className="agenda__title">Sprint review</div><div className="agenda__when">Lun 10:00–10:45</div></div>
          <span className="cal__badge">Sala A</span>
        </div>
        <div className="agenda__item">
          <div><div className="agenda__title">Onboarding</div><div className="agenda__when">Mar 12:00–13:00</div></div>
          <span className="cal__badge">Remoto</span>
        </div>
      </div>
    );
  }

  if(variantId==="cal-datetime"){
    return (
      <div className="datetime">
        {renderMonth({mini:true})}
        <div className="timecol">
          {["09:00","09:30","10:00","10:30","11:00","11:30","12:00"].map(t=>(
            <button key={t}>{t}</button>
          ))}
        </div>
      </div>
    );
  }

  // por defecto: todas las variantes mensuales
  return renderMonth({ mini: variantId==="cal-mini" });
}


