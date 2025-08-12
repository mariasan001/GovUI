'use client';
import React from 'react';
import { icons as lucideIcons, type LucideProps } from 'lucide-react';
import "@/app/componentes/[slug]/components.css"
/* helpers */
const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/_/g, '-').toLowerCase();

/* ES → EN */
const ES_SYNONYMS: Record<string, string[]> = {
    flecha: ['arrow', 'chevron'], derecha: ['right', 'east'], izquierda: ['left', 'west'], arriba: ['up', 'north'], abajo: ['down', 'south'],
    calendario: ['calendar', 'date'], agenda: ['calendar'], reloj: ['clock', 'time', 'watch', 'timer', 'alarm'],
    usuario: ['user', 'person', 'profile', 'account'], personas: ['users', 'group', 'team'],
    buscar: ['search'], inicio: ['home', 'house'], cerrar: ['x', 'close'],
    aceptar: ['check', 'ok', 'success', 'done'], advertencia: ['alert-triangle', 'warning'],
    info: ['info', 'information', 'circle-help'], error: ['bug', 'x', 'ban', 'alert-octagon'],
    agregar: ['plus', 'add', 'new', 'create'], quitar: ['minus', 'remove'], borrar: ['trash', 'delete', 'bin'],
    editar: ['edit', 'pencil'], guardar: ['save', 'floppy'],
    subir: ['upload'], descargar: ['download'], reproducir: ['play'], pausar: ['pause'], detener: ['stop', 'square'],
    correo: ['mail', 'email', 'envelope'], telefono: ['phone', 'call'],
    candado: ['lock', 'unlock', 'shield', 'key'], ver: ['eye', 'view', 'reveal'], ocultar: ['eye-off', 'hide'],
    favorito: ['star', 'heart', 'bookmark'], 'me-gusta': ['thumbs-up', 'like'], 'no-me-gusta': ['thumbs-down'],
    mapa: ['map'], ubicacion: ['map-pin', 'pin', 'navigation', 'locate'], marcador: ['bookmark', 'map-pin'],
    archivo: ['file', 'document', 'note'], carpeta: ['folder'],
    grafica: ['chart', 'bar-chart', 'line-chart', 'pie-chart'], estadistica: ['chart', 'analytics'],
    campana: ['bell', 'notification'], nube: ['cloud'], enlace: ['link', 'chain'], compartir: ['share'],
    camara: ['camera'], imagen: ['image', 'picture', 'photo'],
};

/* paleta limitada */
const COLORS = {
    negro: '#0b1220',
    blanco: '#ffffff',
    ginge: '#d97706',
    cafe: '#7c4a21',
    vino: '#7b1e3d',
} as const;
type ColorKey = keyof typeof COLORS;

type IconEntry = { name: string; label: string; Comp: React.ComponentType<LucideProps> };

export default function IconsGallery() {
    const [q, setQ] = React.useState('');
    const [size, setSize] = React.useState(28);
    const [stroke, setStroke] = React.useState(1.5);
    const [colorKey, setColorKey] = React.useState<ColorKey>('negro');
    const colorValue = COLORS[colorKey];

    /* todos los íconos */
    const allIcons = React.useMemo<IconEntry[]>(() => {
        const map = lucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
        return Object.entries(map)
            .map(([name, Comp]) => ({ name, label: kebab(name), Comp }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, []);

    /* búsqueda ES */
    const expand = (t: string) => ES_SYNONYMS[fold(t)] ?? [fold(t)];
    const matches = (label: string, query: string) => {
        const tokens = fold(query).split(/\s+/).filter(Boolean);
        if (!tokens.length) return true;
        return tokens.every(tok => expand(tok).some(o => label.includes(o)));
    };
    const filtered = React.useMemo(
        () => (!q.trim() ? allIcons : allIcons.filter(({ label }) => matches(label, q))),
        [q, allIcons]
    );

    const copy = async (text: string) => { try { await navigator.clipboard.writeText(text); } catch { } };

    const previewBg =
        colorKey === 'blanco'
            ? 'color-mix(in oklab, var(--color-neutral-900,#0b1220) 86%, #fff)'
            : 'color-mix(in oklab, var(--color-neutral-800,#1f2937) 8%, #fff)';

    return (
        <main className="u-container u-stack" style={{ '--stack-space': '20px', paddingBlockStart: 16 } as React.CSSProperties}>
            {/* Hero: título + subtítulo (izquierda) / buscador (derecha) */}
            <header
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr minmax(280px, 460px)',
                    gap: 16,
                    alignItems: 'end',
                }}
            >
                <div className="u-stack" style={{ '--stack-space': '8px' } as React.CSSProperties}>
                    <h1 className="display-hero" style={{ margin: 0 }}>Íconos</h1>
                    <p className="lead u-text-muted" style={{ margin: 0 }}>
                        Explora y copia nombres, imports o JSX de la librería de íconos para proyectos GovUI.
                    </p>
                </div>

                {/* Buscador alineado a la derecha */}
                <div className="gov-field gov-field--search" style={{ justifySelf: 'end' }}>
                    <i className="gov-icon gov-icon--search gov-input__icon" aria-hidden="true" />
                    <label htmlFor="icon-search" className="u-visually-hidden">Buscar íconos</label>
                    <input
                        id="icon-search"
                        className="gov-input"
                        placeholder="Buscar (p. ej., flecha derecha, calendario, usuario…) "
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>
            </header>

            {/* Toolbar: tamaño, trazo, color */}
            <div
                className="u-cluster"
                style={{ justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
            >
                <div className="u-cluster" style={{ gap: 20, flexWrap: 'wrap' }}>
                    <label className="u-cluster" style={{ gap: 8 }}>
                        <span className="u-text-muted">Tamaño</span>
                        <input type="range" min={16} max={64} value={size} onChange={(e) => setSize(+e.target.value)} />
                        <span>{size}px</span>
                    </label>
                    <label className="u-cluster" style={{ gap: 8 }}>
                        <span className="u-text-muted">Trazo</span>
                        <input type="range" min={1} max={3} step={0.5} value={stroke} onChange={(e) => setStroke(+e.target.value)} />
                        <span>{stroke}</span>
                    </label>
                </div>

                {/* Color picker (swatches) */}
                <fieldset className="color-picker" style={{ border: 0, margin: 0 }}>
                    <legend className="u-visually-hidden">Color del icono</legend>
                    {(Object.keys(COLORS) as ColorKey[]).map((key) => (
                        <label
                            key={key}
                            className={`swatch ${colorKey === key ? 'is-selected' : ''}`}
                            style={{ ['--swatch' as any]: COLORS[key] }}
                        >
                            <input
                                className="u-visually-hidden"
                                type="radio"
                                name="icon-color"
                                value={key}
                                checked={colorKey === key}
                                onChange={() => setColorKey(key)}
                            />
                            <span className="dot" aria-hidden="true" />
                            <span className="name">{key[0].toUpperCase() + key.slice(1)}</span>
                        </label>
                    ))}
                </fieldset>
            </div>

            {/* Grid */}
            <section className="u-grid u-grid--auto" style={{ '--grid-gap': '16px', '--tile-min': '180px' } as React.CSSProperties}>
                {filtered.map(({ name, label, Comp }) => {
                    const jsx = `<${name} size={${size}} strokeWidth={${stroke}} color="${colorValue}" />`;
                    const importLine = `import { ${name} } from 'lucide-react'`;

                    return (
                        <div
                            key={name}
                            role="button"
                            tabIndex={0}
                            className="gov-card"
                            onClick={() => copy(label)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copy(label); }
                            }}
                            title={`Copiar nombre: ${label}`}
                            style={{ textAlign: 'center', padding: 12, cursor: 'pointer' }}
                        >
                            <div
                                style={{
                                    inlineSize: '100%',
                                    blockSize: 110,
                                    display: 'grid',
                                    placeItems: 'center',
                                    borderRadius: 12,
                                    background: previewBg,
                                    marginBottom: 10,
                                }}
                            >
                                <Comp size={size} strokeWidth={stroke} color={colorValue} aria-hidden="true" />
                            </div>

                            <div className="u-text-muted" style={{ fontSize: 14 }}>{label}</div>

                            <div className="u-cluster" style={{ justifyContent: 'center', marginTop: 6, gap: 8 }}>
                                <button
                                    type="button"
                                    className="gov-btn gov-btn--secondary"
                                    onClick={(e) => { e.stopPropagation(); copy(jsx); }}
                                >
                                    Copiar JSX
                                </button>
                            </div>
                        </div>
                    );
                })}

                {filtered.length === 0 && (
                    <div className="demo-card" style={{ gridColumn: '1 / -1' }}>
                        Sin resultados para <strong>{q || '…'}</strong>.
                    </div>
                )}
            </section>
        </main>
    );
}
