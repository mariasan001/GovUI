// apps/sandbox-next/src/features/tabs/components/InteractiveTabs.client.tsx
"use client";

import { useMemo, useState, useCallback, type JSX } from "react";
import { Layers, Bell, User, Settings, MoreHorizontal, PieChart } from "lucide-react";

type Props = { variantId: string };

type TabItem = { id: string; label: string; icon?: JSX.Element; chip?: string };

function useRovingTabs(items: TabItem[], initial = 0) {
  const [idx, setIdx] = useState(initial);
  const onKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); setIdx(i => (i + 1) % items.length); }
    if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   { e.preventDefault(); setIdx(i => (i - 1 + items.length) % items.length); }
    if (e.key === "Home") { e.preventDefault(); setIdx(0); }
    if (e.key === "End")  { e.preventDefault(); setIdx(items.length - 1); }
  }, [items.length]);
  return { idx, setIdx, onKey };
}

export default function InteractiveTabs({ variantId }: Props) {
  const view = useMemo(() => variantId, [variantId]);

  // dataset base para demos
  const base: TabItem[] = [
    { id:"t1", label:"General" },
    { id:"t2", label:"Detalles" },
    { id:"t3", label:"Actividad" },
  ];
  const withIcons: TabItem[] = [
    { id:"p1", label:"Proyectos", icon:<Layers size={16}/> },
    { id:"p2", label:"Alertas",   icon:<Bell size={16}/>   },
    { id:"p3", label:"Usuarios",  icon:<User size={16}/>   },
  ];
  const withChips: TabItem[] = [
    { id:"c1", label:"Abiertas",   chip:"12"  },
    { id:"c2", label:"En curso",   chip:"5"   },
    { id:"c3", label:"Cerradas",   chip:"103" },
  ];

  // popover “Más”
  const [moreOpen, setMoreOpen] = useState(false);

  function renderTabs(kind: "underline"|"cards"|"pills-soft"|"pills-solid"|"seg"|"icons"|"chips"|"vertical"|"with-panel"|"compact"|"overflow") {
    const items =
      kind === "icons"  ? withIcons :
      kind === "chips"  ? withChips :
      kind === "overflow" ? [...base, { id:"t4", label:"Inventario" }] :
      base;

    const { idx, setIdx, onKey } = useRovingTabs(items);

    const tabClasses =
      kind === "pills-soft" ? "tabs tabs--pills" :
      kind === "pills-solid"? "tabs tabs--solid" :
      kind === "seg"        ? "tabs tabs--seg"   :
      kind === "cards"      ? "tabs tabs--cards" :
      kind === "vertical"   ? "tabs tabs--vertical" :
      "tabs";

    // vertical agrega panel a la derecha
    if (kind === "vertical") {
      return (
        <div className={tabClasses}>
          <div className="tablist" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
            {[
              { id:"v1", label:"Tablero",  icon:<PieChart size={16}/> },
              { id:"v2", label:"Usuarios",  icon:<User size={16}/>     },
              { id:"v3", label:"Ajustes",   icon:<Settings size={16}/> },
            ].map((t, i)=>(
              <button
                key={t.id}
                className="tab"
                role="tab"
                aria-selected={idx===i}
                onClick={()=>setIdx(i)}
              >
                <span className="ico">{t.icon}</span>{t.label}
              </button>
            ))}
          </div>
          <div className="tabpanel" role="tabpanel">
            {idx===0 && <>Contenido del tablero…</>}
            {idx===1 && <>Gestión de usuarios…</>}
            {idx===2 && <>Preferencias y configuración…</>}
          </div>
        </div>
      );
    }

    // overflow “Más”
    if (kind === "overflow") {
      const display = items.slice(0,3);
      const more   = items.slice(3);
      return (
        <div className="tabs tabs--solid tabs--overflow">
          <div className="tablist" role="tablist" onKeyDown={onKey}>
            {display.map((t, i)=>(
              <button key={t.id} className="tab" role="tab" aria-selected={idx===i} onClick={()=>setIdx(i)}>
                {t.label}
              </button>
            ))}
            <div className="more" style={{ position:"relative" }}>
              <button
                className="tab"
                aria-haspopup="menu"
                aria-expanded={moreOpen}
                onClick={()=>setMoreOpen(o=>!o)}
              >
                <MoreHorizontal size={16}/> Más
              </button>
              {moreOpen && (
                <div className="tb-menu" role="menu">
                  {more.map((m)=>(<button key={m.id} className="tb-menu__item" role="menuitem" onClick={()=>setMoreOpen(false)}>{m.label}</button>))}
                </div>
              )}
            </div>
          </div>
          <div className="tabpanel" role="tabpanel">Panel de: {display[idx]?.label}</div>
        </div>
      );
    }

    // compact altera altura inline
    const btnStyle = kind === "compact" ? {height:30} : undefined;

    // genérico horizontal
    return (
      <div className={tabClasses}>
        <div className="tablist" role="tablist" onKeyDown={onKey}>
          {items.map((t, i)=>(
            <button
              key={t.id}
              className="tab"
              style={btnStyle}
              role="tab"
              aria-selected={idx===i}
              onClick={()=>setIdx(i)}
            >
              {t.icon && <span className="ico">{t.icon}</span>}
              {t.label}
              {t.chip && <span className="chip">{t.chip}</span>}
            </button>
          ))}
        </div>
        {(kind === "with-panel") && (
          <div className="tabpanel" role="tabpanel">
            Panel de “{items[idx].label}”: aquí puedes colocar formulario/tabla/etc.
          </div>
        )}
      </div>
    );
  }

  switch (view) {
    case "tabs-underline":  return renderTabs("underline");
    case "tabs-cards":      return renderTabs("cards");
    case "tabs-pills-soft": return renderTabs("pills-soft");
    case "tabs-pills-solid":return renderTabs("pills-solid");
    case "tabs-segmented":  return renderTabs("seg");
    case "tabs-icons":      return renderTabs("icons");
    case "tabs-counters":   return renderTabs("chips");
    case "tabs-vertical":   return renderTabs("vertical");
    case "tabs-with-panel": return renderTabs("with-panel");
    case "tabs-compact":    return renderTabs("compact");
    case "tabs-overflow":   return renderTabs("overflow");
    case "tabs-gold":       return renderTabs("pills-solid");
    default:                return renderTabs("underline");
  }
}
