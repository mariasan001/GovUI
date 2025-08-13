"use client";
import React from "react";
import { Copy, Check } from "lucide-react";
import { FONT_FAMILY, TYPO_TOKENS, WEIGHTS } from "../constants/typography";
import { safeCopy } from "../lib/copy";

/* ───────────────── Row ───────────────── */
function RowCard({
  name, className, tag, weight, size, line, tracking, transform, sample
}: typeof TYPO_TOKENS[number]) {
  const [copied, setCopied] = React.useState<"cls"|"tsx"|null>(null);
  const Tag = tag as any;

  const styleInline: React.CSSProperties = {
    fontFamily: FONT_FAMILY,
    fontWeight: weight,
    fontSize: size,
    lineHeight: `${line}px`,
    letterSpacing: tracking,
    textTransform: transform,
    margin: 0
  };

  const tsx = `<${tag} className="${className}">${sample}</${tag}>`;
  const doCopy = async (t: string, which: "cls"|"tsx") => {
    const ok = await safeCopy(t);
    if (ok) { setCopied(which); setTimeout(() => setCopied(null), 1100); }
  };

  return (
    <article className="panel typo-grid">
      {/* 1) Nombre (render real) */}
      <div className="cell name">
        <Tag style={styleInline}>{sample}</Tag>
      </div>

      {/* 2) Clase */}
      <div className="cell">
        <span className="meta-pill">.{className}</span>
      </div>

      {/* 3–6) Peso / Tamaño / Interlínea / Tracking */}
      <div className="cell"><span className="meta-pill">{weight}</span></div>
      <div className="cell"><span className="meta-pill">{size}px</span></div>
      <div className="cell"><span className="meta-pill">{line}px</span></div>
      <div className="cell"><span className="meta-pill">{tracking ?? "0px"}</span></div>

      {/* 7) Acciones */}
      <div className="cell actions">
        <button className="btn-ghost" onClick={() => doCopy(className, "cls")}>
          {copied === "cls" ? <Check size={16}/> : <Copy size={16}/>}  clase
        </button>
        <button className="btn-ghost" onClick={() => doCopy(tsx, "tsx")}>
          {copied === "tsx" ? <Check size={16}/> : <Copy size={16}/>}  .tsx
        </button>
      </div>
    </article>
  );
}


export default function TypographyShowcase() {
  return (
    <main className="u-container page-typo u-stack" style={{ ["--stack-space" as any]: "24px", paddingBlock: 20 }}>
      {/* HERO */}
      <section className="hero-typo">
        <div className="hero-typo__glyph" aria-hidden>Aa</div>
        <div className="hero-typo__meta">
          <h2 className="hero-typo__family">Poppins</h2>
          <div className="hero-typo__weights">
            {WEIGHTS.map(w => (
              <span key={w.weight} style={{ fontWeight: w.weight, fontFamily: FONT_FAMILY }}>{w.label}</span>
            ))}
          </div>
          <p className="hero-typo__alphabet" style={{ fontFamily: FONT_FAMILY }}>
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn<br/>
            Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          </p>
        </div>
      </section>

      {/* TABLE */}
      <section className="u-stack" style={{ ["--stack-space" as any]: "12px" }}>
        <header className="typo-head">
          <div>Nombre</div>
          <div>Clase</div>
          <div>Peso</div>
          <div>Tamaño</div>
          <div>Interlínea</div>
          <div>Tracking</div>
          <div>Acciones</div>
        </header>

        <div className="typo-rows">
          {TYPO_TOKENS.map(t => <RowCard key={t.className} {...t} />)}
        </div>
      </section>

      {/* estilos locales */}
      <style>{`
        .page-typo { --panel-radius:16px; --panel-br: color-mix(in oklab,#000 8%, transparent);
                     --shadow-sm: 0 1px 0 rgba(17,17,17,.05); --shadow-lg: 0 10px 26px rgba(17,17,17,.06);
                     --typo-cols: 2fr 1.2fr .8fr .8fr .9fr .9fr 1.4fr; } 

        .panel { background:#fff; border:1px solid var(--panel-br); border-radius:var(--panel-radius);
                 box-shadow: var(--shadow-sm), var(--shadow-lg); }

        .btn-ghost { display:inline-flex; align-items:center; gap:6px; padding:6px 10px; border-radius:10px;
                     border:1px solid var(--panel-br); background:#fff; }

        /* HERO */
        .hero-typo { display:grid; grid-template-columns:minmax(0,1fr) 420px; gap:24px; align-items:center; }
        .hero-typo__glyph { font-family:${FONT_FAMILY}; font-weight:700; font-size:160px; line-height:1; letter-spacing:-0.8px; }
        .hero-typo__family { margin:0 0 8px 0; font-size:28px; font-weight:700; }
        .hero-typo__weights { display:flex; gap:16px; color:#6b7280; font-size:14px; flex-wrap:wrap; }
        .hero-typo__alphabet { color:#6b7280; margin:12px 0 0 0; }
        @media (max-width: 980px) { .hero-typo { grid-template-columns: 1fr; } }

        /* HEAD (usa la misma grilla) */
        .typo-head { display:grid; grid-template-columns: var(--typo-cols);
                     font-size:12px; color:#6b7280; padding-inline:10px; }
        @media (max-width: 880px) { .typo-head { display:none; } }

        /* ROWS (misma grilla) */
        .typo-rows { display:grid; gap:12px; }
        .typo-grid{ display:grid; grid-template-columns: var(--typo-cols); align-items:center; gap:12px; }
        .typo-grid .cell { padding:12px; }
        .typo-grid .cell.name{ padding:18px 16px; border-right:1px solid var(--panel-br); }
        .typo-grid .cell.actions{ justify-self:end; display:flex; gap:8px; }

        .meta-pill { font-size:12px; color:#374151; background: color-mix(in oklab,#111 6%, #fff);
                     border:1px solid var(--panel-br); border-radius:10px; padding:6px 8px; text-align:center; }

        @media (max-width: 880px) {
          .typo-grid{ grid-template-columns: 1fr; }
          .typo-grid .cell.name{ border-right:none; border-bottom:1px solid var(--panel-br); }
          .typo-grid .cell.actions{ justify-self:start; }
        }

        /* utilitarias (puedes mover a tu core) */
        .gov-h1{ font-family:${FONT_FAMILY}; font-weight:700; font-size:48px; line-height:56px; letter-spacing:0; margin:0; }
        .gov-h2{ font-family:${FONT_FAMILY}; font-weight:600; font-size:36px; line-height:44px; letter-spacing:0; margin:0; }
        .gov-h3{ font-family:${FONT_FAMILY}; font-weight:600; font-size:24px; line-height:32px; letter-spacing:0; margin:0; }
        .gov-h4{ font-family:${FONT_FAMILY}; font-weight:700; font-size:18px; line-height:28px; letter-spacing:0.2px; margin:0; }
        .gov-p { font-family:${FONT_FAMILY}; font-weight:400; font-size:16px; line-height:24px; margin:0; }
        .gov-label{ font-family:${FONT_FAMILY}; font-weight:700; font-size:12px; line-height:16px; letter-spacing:0.5px; text-transform:uppercase; }
        .gov-small{ font-family:${FONT_FAMILY}; font-weight:600; font-size:12px; line-height:16px; letter-spacing:0.2px; }
      `}</style>
    </main>
  );
}
