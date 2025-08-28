"use client";

import dynamic from "next/dynamic";

/** Carga diferida del Showcase de Alertas (feature mode) */
const AlertsShowcase = dynamic(
  () => import("@govui/alerts-catalog/next").then(m => m.AlertsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando alertas…</div> }
);

export default function AlertLoader() {
  return <AlertsShowcase />;
}
