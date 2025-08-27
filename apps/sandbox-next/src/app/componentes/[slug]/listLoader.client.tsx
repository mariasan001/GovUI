"use client";
import dynamic from "next/dynamic";

const ListasShowcase = dynamic(
  () => import("@govui/listas-catalog/next").then(m => m.ListasShowcase),
  { ssr:false, loading: () => <div className="demo-card">Cargando tablas…</div> }
);

export default function TablesLoader(){ return <ListasShowcase/>; }
