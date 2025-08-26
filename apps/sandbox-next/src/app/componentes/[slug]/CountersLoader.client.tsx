"use client";
import dynamic from "next/dynamic";

const CountersShowcase = dynamic(
  () => import("@govui/counters-catalog/next").then(m => m.CountersShowcase),
  { ssr:false, loading: () => <div className="demo-card">Cargando contadores…</div> }
);

export default function CountersLoader(){ return <CountersShowcase />; }
