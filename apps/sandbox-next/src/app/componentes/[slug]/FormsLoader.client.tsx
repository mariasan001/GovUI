// apps/sandbox-next/src/app/componentes/[slug]/FormsLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const FormsShowcase = dynamic(
  () => import("@govui/forms-catalog/next").then(m => m.FormsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando formularios…</div> }
);

export default function FormsLoader(){ return <FormsShowcase />; }
