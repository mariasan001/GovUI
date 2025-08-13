"use client";
import dynamic from "next/dynamic";

const ColorsShowcase = dynamic(
  () => import("@features/colors").then(m => m.ColorsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando colores…</div> }
);

export default function ColoresLoader() {
  return <ColorsShowcase />;
}
