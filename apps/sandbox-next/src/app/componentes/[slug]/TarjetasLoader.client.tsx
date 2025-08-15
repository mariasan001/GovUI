// apps/sandbox-next/src/app/componentes/[slug]/TarjetasLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const CardsShowcase = dynamic(
  () => import("@govui/cards-catalog/next").then(m => m.CardsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando tarjetas…</div> }
);

export default function TarjetasLoader() {
  return <CardsShowcase />;
}