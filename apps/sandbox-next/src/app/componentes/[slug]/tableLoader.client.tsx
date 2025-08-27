"use client";
import dynamic from "next/dynamic";

const TablesShowcase = dynamic(
  () => import("@govui/tables-catalog/next").then(m => m.TablesShowcase),
  { ssr:false, loading: () => <div className="demo-card">Cargando tablas…</div> }
);

export default function TablesLoader(){ return <TablesShowcase/>; }
