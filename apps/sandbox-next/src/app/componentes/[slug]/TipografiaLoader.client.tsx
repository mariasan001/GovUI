"use client";
import dynamic from "next/dynamic";

const TypographyShowcase = dynamic(
  () => import("@govui/typography-catalog/next").then(m => m.TypographyShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando tipografía…</div> }
);

export default function TipografiaLoader() {
  return <TypographyShowcase />;
}
