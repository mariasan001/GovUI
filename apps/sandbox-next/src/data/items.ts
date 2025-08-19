export type Item = {
  key: string;
  slug: string;
  title: string;
  variations: number;    
  keywords?: string[];
};

export const ITEMS: Item[] = [
  { key: 'colors',    slug: 'colores',     title: 'Colores',             variations: 0 },
  { key: 'tipografia',slug: 'tipografia',  title: 'tipografia',          variations: 0 },
  { key: 'texts',     slug: 'textos',      title: 'Textos',              variations: 0 },
  { key: 'cards',     slug: 'tarjetas',    title: 'Tarjetas',            variations: 3 },
  { key: 'nav',       slug: 'navegacion',  title: 'Navegación',          variations: 0 },
  { key: 'inputs',    slug: 'inputs',      title: 'inputs',              variations: 0 },
  { key: 'footer',    slug: 'pie',         title: 'Pie de página',       variations: 0 },
  { key: 'tabs',      slug: 'pestanas',    title: 'Pestañas',            variations: 0 },
  { key: 'alerts',    slug: 'alertas',     title: 'Alertas',             variations: 4 },
  { key: 'buttons',   slug: 'botones',     title: 'Botones',             variations: 3 },
  { key: 'layout',    slug: 'layout',      title: 'Layout',              variations: 0 },
  { key: 'forms',     slug: 'formularios', title: 'Formularios',         variations: 0 },
  { key: 'search',    slug: 'buscador',    title: 'Buscador',            variations: 0 },
  { key: 'charts',    slug: 'graficas',    title: 'Gráficas',            variations: 0 },
  { key: 'calendars', slug: 'calendarios', title: 'Calendarios',         variations: 0 },
  { key: 'tooltips',  slug: 'tooltips',    title: 'Tooltips',            variations: 0 },
  { key: 'icons',     slug: 'iconos',      title: 'Íconos',              variations: 0 },
  { key: 'loader',    slug: 'cargador',    title: 'Cargador de página',  variations: 0 },
  { key: 'modals',    slug: 'modales',     title: 'Modales',             variations: 0 },
  { key: 'lists',     slug: 'listas',      title: 'Listas',              variations: 0 },
  { key: 'carousels', slug: 'carruseles',  title: 'Carruseles',          variations: 0 },
  { key: 'counters',  slug: 'contadores',  title: 'Contadores',          variations: 0 },
  { key: 'login',     slug: 'login',       title: 'login',               variations: 0 },
]; 
