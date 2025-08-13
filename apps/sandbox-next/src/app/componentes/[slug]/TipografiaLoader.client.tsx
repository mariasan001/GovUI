"use client";
import dynamic from "next/dynamic";

const TypographyShowcase = dynamic(
  () => import("@features/typography").then(m => m.TypographyShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando tipografía…</div> }
);

export default function TipografiaLoader() {
  return <TypographyShowcase />;
}
