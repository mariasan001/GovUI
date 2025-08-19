"use client";
import dynamic from "next/dynamic";

const LoadersShowcase = dynamic(
  () => import("@govui/loaders-catalog/next").then(m => m.LoadersShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando loaders…</div> }
);

export default function LoadersLoader() {
  return <LoadersShowcase />;
}
  