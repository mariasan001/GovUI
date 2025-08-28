
// apps/sandbox-next/src/app/componentes/[slug]/CalendarsLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const CalendarsShowcase = dynamic(
  () => import("@govui/calendars-catalog/next").then(m => m.CalendarsShowcase),
  { ssr:false, loading: () => <div className="demo-card">Cargando calendarios…</div> }
);

export default function CalendarsLoader(){ return <CalendarsShowcase/>; }