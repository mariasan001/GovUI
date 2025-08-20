"use client";
import dynamic from "next/dynamic";

const TooltipShowcase = dynamic(
  () => import("@govui/tooltips-catalog/next").then(m => m.TooltipShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando tooltips…</div> }
);

export default function TooltipsLoader() {
  return <TooltipShowcase />;
}
