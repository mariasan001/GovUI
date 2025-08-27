'use client';
import React from 'react';

type Item = {
  key: string;
  slug: string;
  title: string;
  variations: number;   
  keywords?: string[];
};

export const ITEMS: Item[] = [
  { key: 'iconos',    slug: 'iconos',      title: 'Iconos',              variations: 1000,  keywords:['iconos'] },
  { key: 'colors',    slug: 'colores',     title: 'Colores',             variations: 3,     keywords:['paleta','tokens','theme'] },
  { key: 'tipografia',slug: 'tipografia',  title: 'tipografia',          variations: 7,     keywords:['headings','h1','tipografia'] },
  { key: 'cards',     slug: 'tarjetas',    title: 'Tarjetas',            variations: 6,     keywords:['card','panel','contenedor'] },
  { key: 'nav',       slug: 'navegacion',  title: 'Navegación',          variations: 4,     keywords:['navbar','menu','tabs'] },
  { key: 'inputs',    slug: 'inputs',      title: 'inputs',              variations: 6,     keywords:['inputs','campo','editable'] },
  { key: 'footer',    slug: 'pie',         title: 'Pie de página',       variations: 10,     keywords:['footer'] },
  { key: 'tabs',      slug: 'pestanas',    title: 'Pestañas',            variations: 0,     keywords:['tabs','segmentos'] },
  { key: 'alerts',    slug: 'alertas',     title: 'Alertas',             variations: 0,     keywords:['notificaciones','estado'] },
  { key: 'buttons',   slug: 'botones',     title: 'Botones',             variations: 8,     keywords:['cta','acciones'] },
  { key: 'layout',    slug: 'layout',      title: 'Layout',              variations: 0,     keywords:['grid','stack','container'] },
  { key: 'forms',     slug: 'formularios', title: 'Formularios',         variations: 11,     keywords:['inputs','select','checkbox'] },
  { key: 'search',    slug: 'buscador',    title: 'Buscador',            variations: 0,     keywords:['search','filtros'] },
  { key: 'charts',    slug: 'graficas',    title: 'Gráficas',            variations: 24,     keywords:['charts','sparkline'] },
  { key: 'calendars', slug: 'calendarios', title: 'Calendarios',         variations: 0,     keywords:['date','calendar'] },
  { key: 'tooltips',  slug: 'tooltips',    title: 'Tooltips',            variations: 14,     keywords:['ayuda','hint'] },
  { key: 'loader',    slug: 'cargador',    title: 'Cargador de página',  variations: 8,     keywords:['spinner','loading'] },
  { key: 'modals',    slug: 'modales',     title: 'Modales',             variations: 11,     keywords:['dialog','overlay'] },
  { key: 'lists',     slug: 'listas',      title: 'Listas',              variations: 15,     keywords:['items','ul','ol'] },
  { key: 'tablas',    slug: 'tablas',      title: 'tablas',              variations: 4,     keywords:['tablas','table'] },
  { key: 'counters',  slug: 'contadores',  title: 'Contadores',          variations: 11,     keywords:['badge','kpi','metricas'] },
  { key: 'login',     slug: 'login',       title: 'login',               variations: 1,     keywords:['login', 'iniciar'] },
];

// Quita diacríticos y baja a minúsculas
const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export default function Page() {
  const [q, setQ] = React.useState('');
  const filtered = React.useMemo(() => {
    const s = fold(q.trim());
    if (!s) return ITEMS;
    return ITEMS.filter((i) => {
      const title = fold(i.title);
      const key = fold(i.key);
      return title.includes(s) || key.includes(s);
    });
  }, [q]);

  return (
    <main className="u-container u-stack" style={{ '--stack-space': '20px' } as React.CSSProperties}>

      {/* Título + texto */}
      <header className="u-stack u-center">
        <h1 className="display-hero">Componentes de GovUI</h1>
        <p className="lead">
          Explora la colección de componentes accesibles y consistentes. Busca por nombre y entra al detalle.
        </p>
      </header>

      {/* Barra de búsqueda */}
      <div className="gov-field gov-field--search">
        <i className="gov-icon gov-icon--search gov-input__icon" aria-hidden="true"></i>
        <label htmlFor="search" className="u-visually-hidden">Buscar componentes</label>
        <input
          id="search"
          className="gov-input"
          type="search"
          placeholder="Buscar (p. ej., Botones, Tarjetas...)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
          aria-label="Buscar componentes"
        />
      </div>

      {/* Grid de tiles */}
      <section
        className="u-grid u-grid--auto"
        style={{ '--grid-gap': '16px', '--tile-min': '240px' } as React.CSSProperties}
      >
        {filtered.map((item) => (
          <a key={item.key} className="gov-tile"  href={`/componentes/${item.slug}`}>
            <div className="gov-tile__row">
              <div>
                <div className="gov-tile__title">{item.title}</div>
                {item.variations != null && (
                  <div className="gov-tile__meta">{item.variations} variaciones</div>
                )}
              </div>
              <svg className="gov-tile__arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}

        {filtered.length === 0 && (
          <div className="demo-card" style={{ gridColumn: '1 / -1' }}>
            Sin resultados para <strong>{q}</strong>. Prueba con otro término.
          </div>
        )}
      </section>
    </main>
  );
}

