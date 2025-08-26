"use client";
import dynamic from "next/dynamic";

const ModalsShowcase = dynamic(
  () => import("@govui/modals-catalog/next").then(m => m.ModalsShowcase),
  { ssr:false, loading:()=> <div className="demo-card">Cargando modales…</div> }
);

export default function ModalsLoader(){ return <ModalsShowcase/>; }
