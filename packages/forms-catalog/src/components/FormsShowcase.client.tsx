"use client";

import { VARIANTS } from "../variants";
import { GROUPS } from "../variants/types";
import { useState } from "react";

function CopyBtn({ code }: { code: string }) {
    const [ok, setOk] = useState(false);
    async function copy() {
        try { await navigator.clipboard.writeText(code); }
        catch {
            const ta = document.createElement("textarea");
            ta.value = code; ta.style.position = "fixed"; ta.style.opacity = "0";
            document.body.appendChild(ta); ta.select();
            try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
        }
        setOk(true); setTimeout(() => setOk(false), 1000);
    }
    return <button className="f-copy" onClick={copy}>{ok ? "¡Copiado ✓!" : "Copiar .tsx"}</button>;
}

export function FormsShowcase() {
    return (
        <main className="u-stack u-container" style={{ gap: 16 }}>
            <h1 className="display-hero" style={{ margin: 0 }}>Froms</h1>
            <p className="u-text-muted">Variantes, tamaños, estados e iconos.</p>

            {GROUPS.map(g => {
                const items = VARIANTS.filter(v => v.groupId === g.id);
                if (!items.length) return null;
                return (
                    <section key={g.id} className="f-section">
                        <header className="f-section__head"><h3>{g.title}</h3></header>
                        <div className="f-grid">
                            {items.map(v => (
                                <article key={v.id} className="f-card">
                                    <div className="f-card__preview">{v.preview}</div>
                                    <footer className="f-card__foot">
                                        <span className="f-card__label">{v.label}</span>
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
 