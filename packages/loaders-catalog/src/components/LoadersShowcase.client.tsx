"use client";
import * as React from "react";
import { VARIANTS } from "../variants";
import { GROUPS, type Group } from "../variants/types";
import "./loaders.css";
import { Copy, Check } from "lucide-react";

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ");

// Botón de copia con estado local (no afecta a las otras tarjetas)
function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = React.useState(false);

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } finally {
      setOk(true);
      const t = window.setTimeout(() => setOk(false), 1100);
      return () => window.clearTimeout(t);
    }
  }, [text]);

  return (
    <button type="button" className="gov-btn gov-btn--secondary" onClick={onCopy} aria-live="polite">
      {ok ? <Check size={16} /> : <Copy size={16} />}
      <span style={{ marginInlineStart: 6 }}>Copiar .tsx</span>
    </button>
  );
}

export default function LoadersShowcase() {
  return (
    <main className="u-container u-stack">
      <h1 className="display-hero" style={{ margin: 0 }}>Cargador</h1>
      <p className="u-text-muted">Encuentra varios tipos de cargadores de página.</p>

      {GROUPS.map((g: Group) => (
        <section key={g.id} className="u-stack">
          <div className="loaders-grid-3">
            {VARIANTS.filter(v => v.group === g.id).map(v => (
              <article key={v.id} className="loader-card panel">
                <div className="loader-card__header">
                  <h4 className="loader-title">{v.name}</h4>
                  <p className="loader-desc">Pequeño indicador para operaciones en progreso.</p>
                </div>

                <div className={cx("tile__stage", "loader-stage")}>
                  {v.preview}
                </div>

                <div className="loader-card__actions">
                  <CopyButton text={v.tsx} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
