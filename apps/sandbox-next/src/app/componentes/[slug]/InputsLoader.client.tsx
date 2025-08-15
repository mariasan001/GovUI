// apps/sandbox-next/src/app/componentes/[slug]/InputsLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const InputsShowcase = dynamic(
  () => import("@govui/inputs-catalog/next").then(m => m.InputsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando inputs…</div> }
);

export default function InputsLoader() {
  return <InputsShowcase />;
}
