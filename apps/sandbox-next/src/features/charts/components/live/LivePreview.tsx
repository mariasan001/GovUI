"use client";

import {
    ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine,
    LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart,
    PieChart, Pie, Cell, RadialBarChart, RadialBar, RadarChart, Radar,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ScatterChart, Scatter, ZAxis, FunnelChart, Funnel, LabelList
} from "recharts";

// ===== Datos demo comunes =====
const months = [
    { name: "Ene", a: 400, b: 240, c: 240 },
    { name: "Feb", a: 300, b: 139, c: 221 },
    { name: "Mar", a: 200, b: 980, c: 229 },
    { name: "Abr", a: 278, b: 390, c: 200 },
    { name: "May", a: 189, b: 480, c: 218 },
    { name: "Jun", a: 239, b: 380, c: 250 },
    { name: "Jul", a: 349, b: 430, c: 210 },
];

const pieData = [{ name: "A", value: 40 }, { name: "B", value: 30 }, { name: "C", value: 30 }];
const colors = ["var(--primary-9)", "var(--info-9)", "var(--ok-9)"];

const scatterData = [{ x: 10, y: 30 }, { x: 20, y: 18 }, { x: 30, y: 12 }, { x: 40, y: 22 }, { x: 50, y: 9 }];
const bubbleData = [{ x: 10, y: 30, z: 60 }, { x: 20, y: 18, z: 120 }, { x: 30, y: 12, z: 80 }, { x: 40, y: 22, z: 160 }, { x: 50, y: 9, z: 40 }];

const radarData = [
    { x: "UI", a: 120 }, { x: "API", a: 98 }, { x: "DB", a: 86 }, { x: "QA", a: 99 }, { x: "Ops", a: 85 }
];

const funnelSteps = [
    { stage: "Visitas", v: 1000 },
    { stage: "Registro", v: 620 },
    { stage: "Verificación", v: 420 },
    { stage: "Compra", v: 210 },
];

// Advanced datasets
const rangeData = [
    { name: "Ene", min: 100, max: 400 }, { name: "Feb", min: 120, max: 380 },
    { name: "Mar", min: 80, max: 420 }, { name: "Abr", min: 110, max: 360 },
    { name: "May", min: 140, max: 390 }, { name: "Jun", min: 160, max: 410 },
];

const histValues = [3, 5, 7, 10, 6, 8, 9, 2, 4, 6, 7, 8, 10, 11, 13, 8, 6, 5, 4, 3, 2];
function bins(arr: number[], size = 3) {
    const out: { x: string; n: number }[] = [];
    const max = Math.max(...arr);
    for (let i = 0; i <= max; i += size) {
        const j = i + size - 1;
        out.push({ x: `${i}-${j}`, n: arr.filter(v => v >= i && v <= j).length });
    }
    return out;
}
const histData = bins(histValues, 3);

// Waterfall con base+valor
const steps = [
    { name: "Inicio", v: 500 },
    { name: "Ventas", v: 300 },
    { name: "Costos", v: -180 },
    { name: "Impuestos", v: -70 },
    { name: "Fin", v: 0 },
];

let acc = 0;
const wf = steps.map((s, i) => {
    if (i === 0) { acc = s.v; return { name: s.name, base: 0, value: acc, color: "var(--ok-9)" }; }
    if (s.name === "Fin") { return { name: s.name, base: 0, value: acc, color: "var(--muted-ink)" }; }
    const start = acc; acc += s.v;
    return {
        name: s.name,
        base: Math.min(start, acc),
        value: Math.abs(s.v),
        color: s.v >= 0 ? "var(--ok-9)" : "var(--danger-9)"
    };
});

const spark = [3, 4, 3, 6, 5, 7, 8, 7, 9, 11, 9, 12].map((v, i) => ({ i, v }));
const bullet = [{ name: "", actual: 72, objetivo: 90 }];

export function LivePreview({ id }: { id: string }) {
    return (
        <div className="chart-box">
            <ResponsiveContainer width="100%" height={240}>
                {(() => {
                    switch (id) {
                        // === Básicos
                        case "line-basic":
                            return (
                                <LineChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip />
                                    <Line type="monotone" dataKey="a" stroke="var(--primary-9)" strokeWidth={2} dot={false} />
                                </LineChart>
                            );

                        case "area-basic":
                            return (
                                <AreaChart data={months}>
                                    <defs>
                                        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="var(--primary-9)" stopOpacity={0.35} />
                                            <stop offset="100%" stopColor="var(--primary-9)" stopOpacity={0.05} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip />
                                    <Area type="monotone" dataKey="a" stroke="var(--primary-9)" fill="url(#g1)" />
                                </AreaChart>
                            );

                        case "bar-basic":
                            return (
                                <BarChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip />
                                    <Bar dataKey="a" radius={[6, 6, 0, 0]} fill="var(--primary-9)" />
                                </BarChart>
                            );

                        // === Barras
                        case "bar-horizontal":
                            return (
                                <BarChart data={months} layout="vertical" margin={{ left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" /><YAxis type="category" dataKey="name" />
                                    <Tooltip />
                                    <Bar dataKey="a" fill="var(--primary-9)" radius={[0, 6, 6, 0]} />
                                </BarChart>
                            );

                        case "bar-grouped":
                            return (
                                <BarChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                                    <Bar dataKey="a" fill="var(--primary-9)" radius={[6, 6, 0, 0]} />
                                    <Bar dataKey="b" fill="var(--info-9)" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            );

                        case "bar-stacked":
                            return (
                                <BarChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                                    <Bar dataKey="a" stackId="s" fill="var(--primary-9)" />
                                    <Bar dataKey="b" stackId="s" fill="var(--ok-9)" />
                                    <Bar dataKey="c" stackId="s" fill="var(--warning-9)" />
                                </BarChart>
                            );

                        // === Líneas / Áreas
                        case "line-multi":
                            return (
                                <LineChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                                    <Line type="monotone" dataKey="a" stroke="var(--primary-9)" dot={false} />
                                    <Line type="monotone" dataKey="b" stroke="var(--info-9)" dot={false} />
                                </LineChart>
                            );

                        case "area-stacked":
                            return (
                                <AreaChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                                    <Area type="monotone" stackId="1" dataKey="a" stroke="var(--primary-9)" fill="var(--primary-9)" fillOpacity={0.25} />
                                    <Area type="monotone" stackId="1" dataKey="b" stroke="var(--info-9)" fill="var(--info-9)" fillOpacity={0.25} />
                                </AreaChart>
                            );

                        case "line-step":
                            return (
                                <LineChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip />
                                    <Line type="step" dataKey="a" stroke="var(--primary-9)" dot={false} />
                                </LineChart>
                            );

                        case "composed":
                            return (
                                <ComposedChart data={months}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                                    <Bar dataKey="b" fill="var(--info-9)" radius={[6, 6, 0, 0]} />
                                    <Line type="monotone" dataKey="a" stroke="var(--primary-9)" dot={false} />
                                </ComposedChart>
                            );

                        // === Pie / Donut
                        case "pie-donut":
                            return (
                                <PieChart>
                                    <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} stroke="none">
                                        {pieData.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            );

                        case "pie-semi":
                            return (
                                <PieChart>
                                    <Pie
                                        data={[{ name: "Progreso", value: 72 }, { name: "Restante", value: 28 }]}
                                        dataKey="value" startAngle={180} endAngle={0}
                                        innerRadius={60} outerRadius={80} stroke="none"
                                    >
                                        <Cell fill="var(--primary-9)" />
                                        <Cell fill="var(--surface-3)" />
                                        <LabelList dataKey="value" position="center" formatter={() => "72%"} />
                                    </Pie>
                                </PieChart>
                            );

                        // === Radiales / Radar
                        case "radial-progress":
                            return (
                                <RadialBarChart
                                    data={[{ name: "Avance", value: 68, fill: "var(--primary-9)" }]}
                                    innerRadius={60} outerRadius={80} startAngle={90} endAngle={-270}
                                >
                                    <RadialBar dataKey="value" cornerRadius={10} />
                                    <LabelList dataKey="value" position="center" formatter={(v) => v + "%"} />
                                </RadialBarChart>
                            );

                        case "radar":
                            return (
                                <RadarChart data={radarData} outerRadius={80}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="x" />
                                    <PolarRadiusAxis angle={30} />
                                    <Radar dataKey="a" stroke="var(--primary-9)" fill="var(--primary-9)" fillOpacity={0.25} />
                                    <Tooltip />
                                </RadarChart>
                            );

                        // === XY
                        case "scatter":
                            return (
                                <ScatterChart>
                                    <CartesianGrid /><XAxis dataKey="x" /><YAxis dataKey="y" /><Tooltip />
                                    <Scatter data={scatterData} fill="var(--primary-9)" />
                                </ScatterChart>
                            );

                        case "bubble":
                            return (
                                <ScatterChart>
                                    <CartesianGrid /><XAxis dataKey="x" /><YAxis dataKey="y" /><ZAxis dataKey="z" range={[60, 400]} />
                                    <Tooltip />
                                    <Scatter data={bubbleData} fill="var(--info-9)" />
                                </ScatterChart>
                            );

                        // === Jerarquía / Embudo
                        // === Jerarquía / Embudo
                        case "funnel":
                            return (
                                <FunnelChart>
                                    <Tooltip
                                        formatter={(v: number, _n, ctx: any) => {
                                            const pct = (v / funnelSteps[0].v) * 100;
                                            return [`${v}`, `${ctx?.payload?.stage} — ${pct.toFixed(0)}%`];
                                        }}
                                    />
                                    <Funnel
                                        dataKey="v"
                                        data={funnelSteps}
                                        isAnimationActive
                                        stroke="var(--surface)" strokeWidth={2}  // separador blanco
                                    >
                                        {[
                                            "var(--primary-9)",  // #7b1e3d
                                            "var(--primary-10)", // #671a34
                                            "var(--accent-9)",   // #b48954
                                            "var(--accent-10)",  // #d3bf9d
                                        ].map((c, i) => (
                                            <Cell key={i} fill={c} />
                                        ))}

                                        <LabelList
                                            dataKey="stage"
                                            position="right"
                                            fill="var(--ink)"                      // #1a1a1a
                                        />
                                    </Funnel>
                                </FunnelChart>
                            );


                        // === Avanzados
                        case "range-area":
                            return (
                                <ComposedChart data={rangeData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip />
                                    <Area type="monotone" dataKey="max" stroke="none" fill="var(--info-9)" fillOpacity={0.25} />
                                    <Area type="monotone" dataKey="min" stroke="none" fill="var(--surface)" />
                                    <Line type="monotone" dataKey="max" stroke="var(--info-9)" dot={false} />
                                    <Line type="monotone" dataKey="min" stroke="var(--info-9)" dot={false} />
                                </ComposedChart>
                            );

                        case "histogram":
                            return (
                                <BarChart data={histData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="x" /><YAxis allowDecimals={false} /><Tooltip />
                                    <Bar dataKey="n" fill="var(--primary-9)" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            );

                        case "waterfall-lite":
                            return (
                                <ComposedChart data={wf}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" /><YAxis /><Tooltip />
                                    <Bar dataKey="base" stackId="wf" fill="transparent" />
                                    <Bar dataKey="value" stackId="wf" radius={[6, 6, 0, 0]}>
                                        {wf.map((it, i) => <Cell key={i} fill={it.color} />)}
                                    </Bar>
                                    <ReferenceLine y={0} stroke="var(--muted-ink)" />
                                </ComposedChart>
                            );

                        case "sparkline":
                            return (
                                <ComposedChart data={spark}>
                                    <XAxis dataKey="i" hide /><YAxis hide domain={["dataMin-2", "dataMax+2"]} />
                                    <Area type="monotone" dataKey="v" stroke="var(--primary-9)" fill="var(--primary-9)" fillOpacity={0.18} />
                                </ComposedChart>
                            );

                        case "kpi-spark":
                            return (
                                <ComposedChart data={spark}>
                                    <XAxis dataKey="i" hide /><YAxis hide domain={["dataMin-2", "dataMax+2"]} />
                                    <Area type="monotone" dataKey="v" stroke="var(--primary-9)" fill="var(--primary-9)" fillOpacity={0.18} />
                                </ComposedChart>
                            );

                        case "bullet":
                            return (
                                <ComposedChart data={bullet} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
                                    <XAxis type="number" domain={[0, 100]} hide />
                                    <YAxis type="category" dataKey="name" hide />
                                    <Bar dataKey="actual" barSize={18} radius={[9, 9, 9, 9]} fill="var(--primary-9)" />
                                    <ReferenceLine x={90} stroke="var(--muted-ink)" strokeDasharray="4 3" />
                                </ComposedChart>
                            );

                        default:
                            return <></>;
                    }
                })()}
            </ResponsiveContainer>
        </div>
    );
}
