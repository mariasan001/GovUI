import type { Variante } from "./types";
import { Layers, Bell, User, Settings, MoreHorizontal, PieChart } from "lucide-react";

/* Helper: mini chips */
const Chip = ({children}:{children:React.ReactNode}) => <span className="chip">{children}</span>;

/* ========== 1) BÁSICAS ========== */
// 1.1 underline brand
function TabsUnderline(){
  return (
    <div className="tabs" role="tablist" aria-label="Pestañas básicas">
      <div className="tablist">
        <button className="tab" role="tab" aria-selected="true">General</button>
        <button className="tab" role="tab" aria-selected="false">Detalles</button>
        <button className="tab" role="tab" aria-selected="false">Actividad</button>
      </div>
    </div>
  );
}
const TabsUnderlineTSX =
`export default function TabsUnderline(){
  return (
    <div className="tabs" role="tablist" aria-label="Pestañas básicas">
      <div className="tablist">
        <button className="tab" role="tab" aria-selected="true">General</button>
        <button className="tab" role="tab" aria-selected="false">Detalles</button>
        <button className="tab" role="tab" aria-selected="false">Actividad</button>
      </div>
    </div>
  );
}`;

// 1.2 cards bordered
function TabsCards(){
  return (
    <div className="tabs tabs--cards">
      <div className="tablist" role="tablist" aria-label="Pestañas en tarjetas">
        <button className="tab" role="tab" aria-selected="true">Resumen</button>
        <button className="tab" role="tab" aria-selected="false">Métricas</button>
        <button className="tab" role="tab" aria-selected="false">Historial</button>
      </div>
    </div>
  );
}
const TabsCardsTSX =
`export default function TabsCards(){
  return (
    <div className="tabs tabs--cards">
      <div className="tablist" role="tablist" aria-label="Pestañas en tarjetas">
        <button className="tab" role="tab" aria-selected="true">Resumen</button>
        <button className="tab" role="tab" aria-selected="false">Métricas</button>
        <button className="tab" role="tab" aria-selected="false">Historial</button>
      </div>
    </div>
  );
}`;

/* ========== 2) PILLS ========== */
// 2.1 pills suaves
function TabsPillsSoft(){
  return (
    <div className="tabs tabs--pills">
      <div className="tablist" role="tablist">
        <button className="tab" role="tab" aria-selected="true">Activas</button>
        <button className="tab" role="tab" aria-selected="false">En revisión</button>
        <button className="tab" role="tab" aria-selected="false">Archivadas</button>
      </div>
    </div>
  );
}
const TabsPillsSoftTSX =
`export default function TabsPillsSoft(){
  return (
    <div className="tabs tabs--pills">
      <div className="tablist" role="tablist">
        <button className="tab" role="tab" aria-selected="true">Activas</button>
        <button className="tab" role="tab" aria-selected="false">En revisión</button>
        <button className="tab" role="tab" aria-selected="false">Archivadas</button>
      </div>
    </div>
  );
}`;

// 2.2 pills sólidas
function TabsPillsSolid(){
  return (
    <div className="tabs tabs--solid">
      <div className="tablist" role="tablist">
        <button className="tab" role="tab" aria-selected="true">Mes</button>
        <button className="tab" role="tab" aria-selected="false">Trimestre</button>
        <button className="tab" role="tab" aria-selected="false">Año</button>
      </div>
    </div>
  );
}
const TabsPillsSolidTSX =
`export default function TabsPillsSolid(){
  return (
    <div className="tabs tabs--solid">
      <div className="tablist" role="tablist">
        <button className="tab" role="tab" aria-selected="true">Mes</button>
        <button className="tab" role="tab" aria-selected="false">Trimestre</button>
        <button className="tab" role="tab" aria-selected="false">Año</button>
      </div>
    </div>
  );
}`;

// 2.3 segmented
function TabsSegmented(){
  return (
    <div className="tabs tabs--seg">
      <div className="tablist" role="tablist" aria-label="Segmentadas">
        <button className="tab" role="tab" aria-selected="true">Todo</button>
        <button className="tab" role="tab" aria-selected="false">Pendiente</button>
        <button className="tab" role="tab" aria-selected="false">Hecho</button>
      </div>
    </div>
  );
}
const TabsSegmentedTSX =
`export default function TabsSegmented(){
  return (
    <div className="tabs tabs--seg">
      <div className="tablist" role="tablist" aria-label="Segmentadas">
        <button className="tab" role="tab" aria-selected="true">Todo</button>
        <button className="tab" role="tab" aria-selected="false">Pendiente</button>
        <button className="tab" role="tab" aria-selected="false">Hecho</button>
      </div>
    </div>
  );
}`;

/* ========== 3) ICONOS / CONTADORES ========== */
// 3.1 con iconos
function TabsIcons(){
  return (
    <div className="tabs tabs--solid">
      <div className="tablist" role="tablist" aria-label="Con iconos">
        <button className="tab" role="tab" aria-selected="true"><Layers className="ico" size={16}/>Proyectos</button>
        <button className="tab" role="tab" aria-selected="false"><Bell className="ico" size={16}/>Alertas</button>
        <button className="tab" role="tab" aria-selected="false"><User className="ico" size={16}/>Usuarios</button>
      </div>
    </div>
  );
}
const TabsIconsTSX =
`import { Layers, Bell, User } from "lucide-react";
export default function TabsIcons(){
  return (
    <div className="tabs tabs--solid">
      <div className="tablist" role="tablist" aria-label="Con iconos">
        <button className="tab" role="tab" aria-selected="true"><Layers className="ico" size={16}/>Proyectos</button>
        <button className="tab" role="tab" aria-selected="false"><Bell className="ico" size={16}/>Alertas</button>
        <button className="tab" role="tab" aria-selected="false"><User className="ico" size={16}/>Usuarios</button>
      </div>
    </div>
  );
}`;

// 3.2 con contadores (chips)
function TabsCounters(){
  return (
    <div className="tabs tabs--pills">
      <div className="tablist" role="tablist" aria-label="Con contadores">
        <button className="tab" role="tab" aria-selected="true">Abiertas <Chip>12</Chip></button>
        <button className="tab" role="tab" aria-selected="false">En curso <Chip>5</Chip></button>
        <button className="tab" role="tab" aria-selected="false">Cerradas <Chip>103</Chip></button>
      </div>
    </div>
  );
}
const TabsCountersTSX =
`export default function TabsCounters(){
  return (
    <div className="tabs tabs--pills">
      <div className="tablist" role="tablist" aria-label="Con contadores">
        <button className="tab" role="tab" aria-selected="true">Abiertas <span className="chip">12</span></button>
        <button className="tab" role="tab" aria-selected="false">En curso <span className="chip">5</span></button>
        <button className="tab" role="tab" aria-selected="false">Cerradas <span className="chip">103</span></button>
      </div>
    </div>
  );
}`;

/* ========== 4) AVANZADAS ========== */
// 4.1 overflow (Más)
function TabsOverflow(){
  return (
    <div className="tabs tabs--solid tabs--overflow">
      <div className="tablist" role="tablist" aria-label="Con overflow">
        <button className="tab" role="tab" aria-selected="true">Resumen</button>
        <button className="tab" role="tab" aria-selected="false">Ventas</button>
        <button className="tab" role="tab" aria-selected="false">Clientes</button>
        <button className="tab" role="tab" aria-selected="false">Inventario</button>
        <div className="more">
          <button className="tab" aria-haspopup="menu" aria-expanded="false"><MoreHorizontal size={16}/> Más</button>
        </div>
      </div>
    </div>
  );
}
const TabsOverflowTSX =
`import { MoreHorizontal } from "lucide-react";
export default function TabsOverflow(){
  return (
    <div className="tabs tabs--solid tabs--overflow">
      <div className="tablist" role="tablist" aria-label="Con overflow">
        <button className="tab" role="tab" aria-selected="true">Resumen</button>
        <button className="tab" role="tab" aria-selected="false">Ventas</button>
        <button className="tab" role="tab" aria-selected="false">Clientes</button>
        <button className="tab" role="tab" aria-selected="false">Inventario</button>
        <div className="more">
          <button className="tab" aria-haspopup="menu" aria-expanded="false"><MoreHorizontal size={16}/> Más</button>
        </div>
      </div>
    </div>
  );
}`;

// 4.2 vertical con iconos
function TabsVertical(){
  return (
    <div className="tabs tabs--vertical">
      <div className="tablist" role="tablist" aria-orientation="vertical">
        <button className="tab" role="tab" aria-selected="true"><PieChart className="ico" size={16}/>Tablero</button>
        <button className="tab" role="tab" aria-selected="false"><User className="ico" size={16}/>Usuarios</button>
        <button className="tab" role="tab" aria-selected="false"><Settings className="ico" size={16}/>Ajustes</button>
      </div>
      <div className="tabpanel" role="tabpanel">Contenido del tablero…</div>
    </div>
  );
}
const TabsVerticalTSX =
`import { PieChart, User, Settings } from "lucide-react";
export default function TabsVertical(){
  return (
    <div className="tabs tabs--vertical">
      <div className="tablist" role="tablist" aria-orientation="vertical">
        <button className="tab" role="tab" aria-selected="true"><PieChart className="ico" size={16}/>Tablero</button>
        <button className="tab" role="tab" aria-selected="false"><User className="ico" size={16}/>Usuarios</button>
        <button className="tab" role="tab" aria-selected="false"><Settings className="ico" size={16}/>Ajustes</button>
      </div>
      <div className="tabpanel" role="tabpanel">Contenido del tablero…</div>
    </div>
  );
}`;

// 4.3 con panel de contenido
function TabsWithPanel(){
  return (
    <div className="tabs">
      <div className="tablist" role="tablist">
        <button className="tab" role="tab" aria-selected="true">Información</button>
        <button className="tab" role="tab" aria-selected="false">Documentos</button>
        <button className="tab" role="tab" aria-selected="false">Historial</button>
      </div>
      <div className="tabpanel" role="tabpanel">
        Panel de “Información”: aquí podría vivir un formulario o tabla pequeña.
      </div>
    </div>
  );
}
const TabsWithPanelTSX =
`export default function TabsWithPanel(){
  return (
    <div className="tabs">
      <div className="tablist" role="tablist">
        <button className="tab" role="tab" aria-selected="true">Información</button>
        <button className="tab" role="tab" aria-selected="false">Documentos</button>
        <button className="tab" role="tab" aria-selected="false">Historial</button>
      </div>
      <div className="tabpanel" role="tabpanel">
        Panel de “Información”: aquí podría vivir un formulario o tabla pequeña.
      </div>
    </div>
  );
}`;

// 4.4 compactas (mini)
function TabsCompact(){
  return (
    <div className="tabs tabs--pills">
      <div className="tablist" role="tablist" aria-label="Compactas">
        <button className="tab" style={{height:30}} role="tab" aria-selected="true">Perfil</button>
        <button className="tab" style={{height:30}} role="tab" aria-selected="false">Seguridad</button>
        <button className="tab" style={{height:30}} role="tab" aria-selected="false">Notificaciones</button>
      </div>
    </div>
  );
}
const TabsCompactTSX =
`export default function TabsCompact(){
  return (
    <div className="tabs tabs--pills">
      <div className="tablist" role="tablist" aria-label="Compactas">
        <button className="tab" style={{height:30}} role="tab" aria-selected="true">Perfil</button>
        <button className="tab" style={{height:30}} role="tab" aria-selected="false">Seguridad</button>
        <button className="tab" style={{height:30}} role="tab" aria-selected="false">Notificaciones</button>
      </div>
    </div>
  );
}`;

// 4.5 con estado (badge dorado)
function TabsGold(){
  return (
    <div className="tabs tabs--solid">
      <div className="tablist" role="tablist" aria-label="Estado">
        <button className="tab" role="tab" aria-selected="true">General</button>
        <button className="tab" role="tab" aria-selected="false">Premium <span className="chip" style={{background:"var(--gold-2)", color:"#4b2f10"}}>NEW</span></button>
        <button className="tab" role="tab" aria-selected="false">Historial</button>
      </div>
    </div>
  );
}
const TabsGoldTSX =
`export default function TabsGold(){
  return (
    <div className="tabs tabs--solid">
      <div className="tablist" role="tablist" aria-label="Estado">
        <button className="tab" role="tab" aria-selected="true">General</button>
        <button className="tab" role="tab" aria-selected="false">Premium <span className="chip" style={{background:"var(--gold-2)", color:"#4b2f10"}}>NEW</span></button>
        <button className="tab" role="tab" aria-selected="false">Historial</button>
      </div>
    </div>
  );
}`;

/* ==== Exportar todas las variantes ==== */
export const VARIANTS: Variante[] = [
  { id:"tabs-underline", idGrupo:"basicas", etiqueta:"Subrayadas (brand)", vistaPrevia:<TabsUnderline/>, tsx:TabsUnderlineTSX },
  { id:"tabs-cards",     idGrupo:"basicas", etiqueta:"Tipo tarjeta (borde)", vistaPrevia:<TabsCards/>, tsx:TabsCardsTSX },

  { id:"tabs-pills-soft",  idGrupo:"pills", etiqueta:"Píldoras suaves", vistaPrevia:<TabsPillsSoft/>, tsx:TabsPillsSoftTSX },
  { id:"tabs-pills-solid", idGrupo:"pills", etiqueta:"Píldoras sólidas", vistaPrevia:<TabsPillsSolid/>, tsx:TabsPillsSolidTSX },
  { id:"tabs-segmented",   idGrupo:"pills", etiqueta:"Segmentadas (toggle)", vistaPrevia:<TabsSegmented/>, tsx:TabsSegmentedTSX },

  { id:"tabs-icons",       idGrupo:"iconos", etiqueta:"Con iconos", vistaPrevia:<TabsIcons/>, tsx:TabsIconsTSX },
  { id:"tabs-counters",    idGrupo:"iconos", etiqueta:"Con contadores", vistaPrevia:<TabsCounters/>, tsx:TabsCountersTSX },

  { id:"tabs-overflow",    idGrupo:"avanzadas", etiqueta:"Con overflow (“Más”)", vistaPrevia:<TabsOverflow/>, tsx:TabsOverflowTSX },
  { id:"tabs-vertical",    idGrupo:"avanzadas", etiqueta:"Vertical + panel", vistaPrevia:<TabsVertical/>, tsx:TabsVerticalTSX },
  { id:"tabs-with-panel",  idGrupo:"avanzadas", etiqueta:"Horizontal + panel", vistaPrevia:<TabsWithPanel/>, tsx:TabsWithPanelTSX },
  { id:"tabs-compact",     idGrupo:"avanzadas", etiqueta:"Compactas", vistaPrevia:<TabsCompact/>, tsx:TabsCompactTSX },
  { id:"tabs-gold",        idGrupo:"avanzadas", etiqueta:"Sólidas + badge dorado", vistaPrevia:<TabsGold/>, tsx:TabsGoldTSX },
];
