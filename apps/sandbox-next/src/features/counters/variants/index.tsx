import type { Variante } from "./types";

/* Sparklines inline (server-safe) */
const SparkArriba = (
  <svg className="spark" viewBox="0 0 100 40" aria-hidden="true">
    <path d="M0,30 L12,28 L24,26 L36,22 L48,18 L60,20 L72,14 L84,18 L96,10" />
  </svg>
);
const SparkAbajo = (
  <svg className="spark spark--down" viewBox="0 0 100 40" aria-hidden="true">
    <path d="M0,12 L12,16 L24,22 L36,26 L48,30 L60,28 L72,32 L84,30 L96,34" />
  </svg>
);

export const VARIANTS: Variante[] = [
  /* ===== KPIs / MINI ===== */
  {
    id: "kpi-tiempo-productivo",
    idGrupo: "metricas",
    etiqueta: "KPI + spark (sube)",
    vistaPrevia: (
      <div className="kpi">
        <div className="kpi__meta"><span>Tiempo productivo / día</span><span>23%</span></div>
        <div className="kpi__value">12.4 <span className="u">hr</span></div>
        {SparkArriba}
        <span className="kpi__chip kpi__chip--up"><span>▲</span> +23% vs semana pasada</span>
      </div>
    ),
    tsx:
`export default function KpiTiempoProductivo(){
  return (
    <div className="kpi">
      <div className="kpi__meta"><span>Tiempo productivo / día</span><span>23%</span></div>
      <div className="kpi__value">12.4 <span className="u">hr</span></div>
      <svg className="spark" viewBox="0 0 100 40" aria-hidden="true">
        <path d="M0,30 L12,28 L24,26 L36,22 L48,18 L60,20 L72,14 L84,18 L96,10" />
      </svg>
      <span className="kpi__chip kpi__chip--up"><span>▲</span> +23% vs semana pasada</span>
    </div>
  );
}`
  },
  {
    id: "kpi-tiempo-enfocado",
    idGrupo: "metricas",
    etiqueta: "KPI + spark (baja)",
    vistaPrevia: (
      <div className="kpi">
        <div className="kpi__meta"><span>Tiempo enfocado / día</span><span>18%</span></div>
        <div className="kpi__value">8.5 <span className="u">hr</span></div>
        {SparkAbajo}
        <span className="kpi__chip kpi__chip--down"><span>▼</span> −18% vs semana pasada</span>
      </div>
    ),
    tsx:
`export default function KpiTiempoEnfocado(){
  return (
    <div className="kpi">
      <div className="kpi__meta"><span>Tiempo enfocado / día</span><span>18%</span></div>
      <div className="kpi__value">8.5 <span className="u">hr</span></div>
      <svg className="spark spark--down" viewBox="0 0 100 40" aria-hidden="true">
        <path d="M0,12 L12,16 L24,22 L36,26 L48,30 L60,28 L72,32 L84,30 L96,34" />
      </svg>
      <span className="kpi__chip kpi__chip--down"><span>▼</span> −18% vs semana pasada</span>
    </div>
  );
}`
  },
  {
    id: "kpi-tiempo-disponible",
    idGrupo: "metricas",
    etiqueta: "KPI disponible",
    vistaPrevia: (
      <div className="kpi">
        <div className="kpi__meta"><span>Tiempo disponible / día</span><span>15%</span></div>
        <div className="kpi__value">6.5 <span className="u">hr</span></div>
        {SparkArriba}
        <span className="kpi__chip kpi__chip--up"><span>▲</span> +15% vs semana pasada</span>
      </div>
    ),
    tsx:
`export default function KpiTiempoDisponible(){
  return (
    <div className="kpi">
      <div className="kpi__meta"><span>Tiempo disponible / día</span><span>15%</span></div>
      <div className="kpi__value">6.5 <span className="u">hr</span></div>
      <svg className="spark" viewBox="0 0 100 40" aria-hidden="true">
        <path d="M0,30 L12,28 L24,26 L36,22 L48,18 L60,20 L72,14 L84,18 L96,10" />
      </svg>
      <span className="kpi__chip kpi__chip--up"><span>▲</span> +15% vs semana pasada</span>
    </div>
  );
}`
  },

  /* ===== INGRESOS ===== */
  {
    id: "ingreso-airbnb",
    idGrupo: "ingresos",
    etiqueta: "Tarjeta de ingresos (positivo)",
    vistaPrevia: (
      <div className="row">
        <div className="row__logo">A</div>
        <div className="row__meta">
          <div className="row__title">Airbnb</div>
          <div className="row__sub">Viajes y turismo</div>
        </div>
        <div className="row__aside">
          <div className="row__value">$ 33.2k</div>
          <div className="block__badge">+37% Ingreso recurrente</div>
        </div>
      </div>
    ),
    tsx:
`export default function IngresoAirbnb(){
  return (
    <div className="row">
      <div className="row__logo">A</div>
      <div className="row__meta">
        <div className="row__title">Airbnb</div>
        <div className="row__sub">Viajes y turismo</div>
      </div>
      <div className="row__aside">
        <div className="row__value">$ 33.2k</div>
        <div className="block__badge">+37% Ingreso recurrente</div>
      </div>
    </div>
  );
}`
  },
  {
    id: "ingreso-mailchimp",
    idGrupo: "ingresos",
    etiqueta: "Tarjeta de ingresos (negativo)",
    vistaPrevia: (
      <div className="row">
        <div className="row__logo" style={{background:"var(--accent-9)"}}>M</div>
        <div className="row__meta">
          <div className="row__title">MailChimp</div>
          <div className="row__sub">Email marketing</div>
        </div>
        <div className="row__aside">
          <div className="row__value">$ 3.2k</div>
          <div className="kpi__chip kpi__chip--down"><span>▼</span> −23% Recurrente</div>
        </div>
      </div>
    ),
    tsx:
`export default function IngresoMailchimp(){
  return (
    <div className="row">
      <div className="row__logo" style={{background:"var(--accent-9)"}}>M</div>
      <div className="row__meta">
        <div className="row__title">MailChimp</div>
        <div className="row__sub">Email marketing</div>
      </div>
      <div className="row__aside">
        <div className="row__value">$ 3.2k</div>
        <div className="kpi__chip kpi__chip--down"><span>▼</span> −23% Recurrente</div>
      </div>
    </div>
  );
}`
  },

  /* ===== RESUMEN ===== */
  {
    id: "total-eventos",
    idGrupo: "resumen",
    etiqueta: "Eventos totales",
    vistaPrevia: (
      <div className="block">
        <div className="block__title">Eventos totales</div>
        <div className="block__value">32</div>
        <div className="block__badge">+20% vs semana pasada</div>
      </div>
    ),
    tsx:
`export default function TotalEventos(){
  return (
    <div className="block">
      <div className="block__title">Eventos totales</div>
      <div className="block__value">32</div>
      <div className="block__badge">+20% vs semana pasada</div>
    </div>
  );
}`
  },
  {
    id: "total-horas",
    idGrupo: "resumen",
    etiqueta: "Horas totales",
    vistaPrevia: (
      <div className="block">
        <div className="block__title">Horas totales</div>
        <div className="block__value">38.2 hr</div>
        <div className="kpi__chip kpi__chip--down"><span>▼</span> −8% vs semana pasada</div>
      </div>
    ),
    tsx:
`export default function TotalHoras(){
  return (
    <div className="block">
      <div className="block__title">Horas totales</div>
      <div className="block__value">38.2 hr</div>
      <div className="kpi__chip kpi__chip--down"><span>▼</span> −8% vs semana pasada</div>
    </div>
  );
}`
  },
  {
    id: "tiempo-concentracion",
    idGrupo: "resumen",
    etiqueta: "Tiempo de concentración",
    vistaPrevia: (
      <div className="block">
        <div className="block__title">Tiempo de concentración</div>
        <div className="block__value">16.8 hr</div>
        <div className="block__badge">+12% vs semana pasada</div>
      </div>
    ),
    tsx:
`export default function TiempoConcentracion(){
  return (
    <div className="block">
      <div className="block__title">Tiempo de concentración</div>
      <div className="block__value">16.8 hr</div>
      <div className="block__badge">+12% vs semana pasada</div>
    </div>
  );
}`
  },

  /* ===== AGENDA ===== */
  {
    id: "reunion-sprint",
    idGrupo: "agenda",
    etiqueta: "Reunión de sprint (equipo)",
    vistaPrevia: (
      <div className="meeting row">
        <div className="meeting__body">
          <div className="meeting__title">Sprint Setup – Equipo de producto</div>
          <div className="meeting__time">04:30 – 5:30 p. m.</div>
          <div className="avatars">
            <span className="ava">AT</span><span className="ava">JL</span>
            <span className="ava">MG</span><span className="badge">+2</span>
          </div>
        </div>
        <div className="meeting__actions"><button className="btn btn--ghost">⋯</button></div>
      </div>
    ),
    tsx:
`export default function ReunionSprint(){
  return (
    <div className="meeting row">
      <div className="meeting__body">
        <div className="meeting__title">Sprint Setup – Equipo de producto</div>
        <div className="meeting__time">04:30 – 5:30 p. m.</div>
        <div className="avatars">
          <span className="ava">AT</span><span className="ava">JL</span>
          <span className="ava">MG</span><span className="badge">+2</span>
        </div>
      </div>
      <div className="meeting__actions"><button className="btn btn--ghost">⋯</button></div>
    </div>
  );
}`
  },

  /* ===== INTEGRACIONES ===== */
  {
    id: "integracion-hubspot",
    idGrupo: "integraciones",
    etiqueta: "Integración (Conectar)",
    vistaPrevia: (
      <div className="integration">
        <div className="row">
          <div className="row__logo">H</div>
          <div className="row__meta">
            <div className="row__title">HubSpot</div>
            <div className="row__sub">Activa el soporte de tu CRM</div>
          </div>
        </div>
        <button className="btn btn--ghost">Conectar</button>
      </div>
    ),
    tsx:
`export default function IntegracionHubspot(){
  return (
    <div className="integration">
      <div className="row">
        <div className="row__logo">H</div>
        <div className="row__meta">
          <div className="row__title">HubSpot</div>
          <div className="row__sub">Activa el soporte de tu CRM</div>
        </div>
      </div>
      <button className="btn btn--ghost">Conectar</button>
    </div>
  );
}`
  },
  {
    id: "integracion-intercom",
    idGrupo: "integraciones",
    etiqueta: "Integración (Conectado)",
    vistaPrevia: (
      <div className="integration">
        <div className="row">
          <div className="row__logo" style={{background:"var(--accent-9)"}}>I</div>
          <div className="row__meta">
            <div className="row__title">Intercom</div>
            <div className="row__sub">Conecta con tus clientes</div>
          </div>
        </div>
        <button className="btn btn--primary">Conectado</button>
      </div>
    ),
    tsx:
`export default function IntegracionIntercom(){
  return (
    <div className="integration">
      <div className="row">
        <div className="row__logo" style={{background:"var(--accent-9)"}}>I</div>
        <div className="row__meta">
          <div className="row__title">Intercom</div>
          <div className="row__sub">Conecta con tus clientes</div>
        </div>
      </div>
      <button className="btn btn--primary">Conectado</button>
    </div>
  );
}`
  },
];
