"use client";
import * as React from "react";
import { Menu, X, Search as SearchIcon } from "lucide-react";
import "../nav.css";
import "../sidebar.css";

export type NavLink = { label: string; href?: string };
type Props = {
  brand?: React.ReactNode;
  links?: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  withSearch?: boolean;
  dark?: boolean;
  sticky?: boolean;
};

export default function NavBar({
  brand = "LOGO",
  links = [{ label: "About" }, { label: "Portfolio" }, { label: "Blog" }, { label: "Contact" }],
  ctaLabel,
  onCtaClick,
  withSearch,
  dark,
  sticky,
}: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className={`gov-nav ${dark ? "is-dark" : ""} ${sticky ? "is-sticky" : ""}`}>
      <div className="gov-nav__inner">
        <a className="gov-nav__brand" href="#">{brand}</a>

        {withSearch && (
          <div className="gov-nav__search">
            <SearchIcon size={16} aria-hidden />
            <input placeholder="Buscar…" />
          </div>
        )}

        <ul className="gov-nav__links">
          {links.map((l, i) => (
            <li key={i}><a href={l.href || "#"}>{l.label}</a></li>
          ))}
        </ul>

        {ctaLabel && (
          <button className="gov-btn gov-btn--solid gov-btn--primary" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}

        <button
          className="gov-nav__menu-btn"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile */}
      <div className={`gov-nav__mobile ${open ? "is-open" : ""}`}>
        {withSearch && (
          <div className="gov-nav__m-search">
            <SearchIcon size={16} aria-hidden />
            <input placeholder="Buscar…" />
          </div>
        )}
        <ul className="gov-nav__m-links">
          {links.map((l, i) => (
            <li key={i}><a href={l.href || "#"} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
        {ctaLabel && (
          <button className="gov-btn gov-btn--solid gov-btn--primary w-100" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    </nav>
  );
}
