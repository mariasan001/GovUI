"use client";

import "./tooltips.css";
import { VARIANTS } from "../variants";
import { GROUPS } from "../variants/types";
import { useState } from "react";

function CopyBtn({ code }: { code: string }) {
    const [ok, setOk] = useState(false);
    async function copy() {
        try {
            await navigator.clipboard.writeText(code);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = code; ta.style.position = "fixed"; ta.style.opacity = "0";
            document.body.appendChild(ta); ta.select();
            try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
        }
        setOk(true); setTimeout(() => setOk(false), 1100);
    }
    return (
        <button className="t-copy" onClick={copy}>
            {ok ? "¡Copiado ✓!" : "Copiar .tsx"}
        </button>
    );
}

export function TooltipShowcase() {
    return (
        <main className="u-stack u-container" style={{ gap: 16 }}>
            <h1 className="display-hero" style={{ margin: 0 }}>Tooltip</h1>
            <p className="u-text-muted">Variantes, tamaños, estados e iconos.</p>
            {GROUPS.map((g) => {
                const items = VARIANTS.filter(v => v.groupId === g.id);
                if (!items.length) return null;
                return (
                    <section key={g.id} className="t-section">
                        <header className="t-section__head">
                            <h3>{g.title}</h3>
                        </header>
                        <div className="t-grid">
                            {items.map(v => (
                                <article key={v.id} className="t-card">
                                    <div className="t-card__preview">{v.preview}</div>
                                    <footer className="t-card__foot">
                                        <span className="t-card__label">{v.label}</span>
                                        <CopyBtn code={v.tsx} />
                                    </footer>
                                </article>
                            ))}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
/**muy bien..!!  aun qur yo mejorario el css cre que s epuedne ve rmucho mas cooll los tooltiy mas modernos 
 * muy aprigados al ui 
 */