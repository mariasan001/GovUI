import * as React from "react";
import type { Variant } from "./types";

/* ────────────────────────────────────────────────────────────────────────── */
/* Markup mudo para PREVIEW (server-safe)                                     */
/* ────────────────────────────────────────────────────────────────────────── */

/* TOPBAR */
function TopbarBasic() {
    return (
        <nav className="gov-nav">
            <div className="gov-nav__inner">
                <a className="gov-nav__brand" href="#">LOGO</a>
                <ul className="gov-nav__links">
                    <li><a href="#">Acerca</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <button className="gov-btn gov-btn--solid gov-btn--primary">Registrarse</button>
                <button className="gov-nav__menu-btn" aria-hidden>≡</button>
            </div>
        </nav>
    );
}

function TopbarSearch() {
    return (
        <nav className="gov-nav">
            <div className="gov-nav__inner">
                <a className="gov-nav__brand" href="#">LOGO</a>
                <div className="gov-nav__search">
                    <span aria-hidden style={{ width: 16 }} />
                    <input placeholder="Buscar…" />
                </div>
                <ul className="gov-nav__links">
                    <li><a href="#">Acerca</a></li>
                    <li><a href="#">Portafolio</a></li>
                </ul>
                <button className="gov-nav__menu-btn" aria-hidden>≡</button>
            </div>
        </nav>
    );
}

function TopbarDark() {
    return (
        <nav className="gov-nav is-dark">
            <div className="gov-nav__inner">
                <a className="gov-nav__brand" href="#">LOGO</a>
                <ul className="gov-nav__links">
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <button className="gov-btn gov-btn--solid gov-btn--primary">Comenzar</button>
                <button className="gov-nav__menu-btn" aria-hidden>≡</button>
            </div>
        </nav>
    );
}

function MobilePanelOpen() {
    return (
        <nav className="gov-nav">
            <div className="gov-nav__inner">
                <a className="gov-nav__brand" href="#">LOGO</a>
                <button className="gov-nav__menu-btn" aria-hidden>×</button>
            </div>
            <div className="gov-nav__mobile is-open">
                <div className="gov-nav__m-search">
                    <span aria-hidden style={{ width: 16 }} />
                    <input placeholder="Buscar…" />
                </div>
                <ul className="gov-nav__m-links">
                    <li><a href="#">Acerca</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <button className="gov-btn gov-btn--solid gov-btn--primary w-100">Registrarse</button>
            </div>
        </nav>
    );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Variants                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

const vBasic: Variant = {
    id: "nav-basic",
    name: "Topbar básica",
    group: "topbar",
    preview: <TopbarBasic />,
    tsx: `<GovNav brand="LOGO" ctaLabel="Registrarse" />`,
};

const vSearch: Variant = {
    id: "nav-search",
    name: "Topbar + búsqueda",
    group: "search",
    preview: <TopbarSearch />,
    tsx: `<GovNav brand="LOGO" withSearch links={[{label:"Acerca"},{label:"Portafolio"}]} />`,
};

const vDark: Variant = {
    id: "nav-dark",
    name: "Topbar oscura",
    group: "dark",
    preview: <TopbarDark />,
    tsx: `<GovNav brand="LOGO" dark ctaLabel="Comenzar" />`,
};

const vMobile: Variant = {
    id: "nav-mobile",
    name: "Menú móvil (abierto)",
    group: "mobile",
    preview: <MobilePanelOpen />,
    tsx: `<GovNav brand="LOGO" withSearch ctaLabel="Registrarse" />`,
};



export const VARIANTS: Variant[] = [
    vBasic, vSearch, vDark, vMobile,
];

export const VARIANTS_BY_ID = Object.fromEntries(
    VARIANTS.map(v => [v.id, v] as const)
) as Record<(typeof VARIANTS)[number]["id"], Variant>;


