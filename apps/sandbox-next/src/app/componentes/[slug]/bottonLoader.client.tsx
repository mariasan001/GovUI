// apps/sandbox-next/src/app/componentes/[slug]/BotonesLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const ButtonsShowcase = dynamic(
  () => import("@govui/buttons-catalog/next").then(m => m.ButtonsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando botones…</div> }
);

export default function BotonesLoader() {
  return <ButtonsShowcase />;
}
