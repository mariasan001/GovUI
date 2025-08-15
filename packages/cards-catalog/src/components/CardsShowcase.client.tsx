"use client";
import React from "react";
import "./styles.css";
import { VARIANTS } from "../variants";
import { GROUPS, type Variant } from "../variants/types";
import Tile from "./Tile"; // ✅
import { Dialog } from "./Dialog";

export default function CardsShowcase() {
    const [group, setGroup] = React.useState<(typeof GROUPS)[number]["id"]>("all");
    const [bg, setBg] = React.useState<"plain" | "neutral">("neutral");
    const [expanded, setExpanded] = React.useState<Variant | null>(null);

    const filtered = group === "all" ? VARIANTS : VARIANTS.filter(v => v.group === group);
    const tileBg = bg === "neutral" ? "linear-gradient(180deg, #fafafa, #f5f6f8)" : "#fff";

    return (
        <main className="u-container u-stack page-cards" style={{ ["--stack-space" as any]: "20px", paddingBlock: 16 }}>
            <header className="u-stack" style={{ ["--stack-space" as any]: "6px" }}>
                <h1 className="display-hero" style={{ margin: 0 }}>Tarjetas</h1>
                <p className="lead u-text-muted" style={{ margin: 0 }}>
                    Catálogo de cards (3 por fila). Copia el código o míralos a pantalla completa.
                </p>
            </header>

            <div className="toolbar u-cluster" style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <fieldset className="segmented" style={{ margin: 0 }}>
                    {GROUPS.map(g => (
                        <label key={g.id} className={group === g.id ? "is-active" : ""}>
                            <input className="u-visually-hidden" type="radio" name="grp" value={g.id}
                                checked={group === g.id} onChange={() => setGroup(g.id as any)} />
                            {g.label}
                        </label>
                    ))}
                </fieldset>

                <fieldset className="segmented" style={{ margin: 0 }}>
                    {(["neutral", "plain"] as const).map(k => (
                        <label key={k} className={bg === k ? "is-active" : ""}>
                            <input className="u-visually-hidden" type="radio" name="bg" value={k}
                                checked={bg === k} onChange={() => setBg(k)} />
                            {k === "neutral" ? "Fondo neutro" : "Fondo blanco"}
                        </label>
                    ))}
                </fieldset>
            </div>

            <section className="grid-cards">
                {filtered.map(v => (
                    <Tile key={v.id} variant={v} tileBg={tileBg} onExpand={() => setExpanded(v)} />
                ))}
            </section>

            {expanded && (
                <Dialog title={expanded.name} onClose={() => setExpanded(null)}>
                    {/* OJO: no envolvemos en otro .panel: el preview ya lo trae */}
                    {expanded.preview}
                </Dialog>
            )}
        </main>
    );
}
