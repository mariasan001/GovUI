// apps/sandbox-next/src/app/componentes/[slug]/ChartsLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const ChartsShowcase = dynamic(
  () => import("@features/charts").then(m => m.ChartsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando gráficas…</div> }
);

export default function ChartsLoader(){ return <ChartsShowcase />; }
