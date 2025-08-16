import React from "react";
import { notFound } from "next/navigation";
import { ITEMS } from "@/data/items";
import IconosLoader from "./IconosLoader.client";
import ColoresLoader from "./ColoresLoader.client";
import TipografiaLoader from "./TipografiaLoader.client";
import TarjetasLoader from "./TarjetasLoader.client";
import ButtonsShowcase from "./bottonLoader.client";
import InputsLoader from "./InputsLoader.client";
import NavLoader from "./NavLoader.client";


type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ITEMS.map(i => ({ slug: i.slug }));
}

export default function Page({ params }: Props) {
  const item = ITEMS.find(i => i.slug === params.slug);
  if (!item) notFound();

  if (params.slug === "iconos")  return <IconosLoader />;
  if (params.slug === "colores") return <ColoresLoader />;
  if (params.slug === "tipografia") return <TipografiaLoader />;
  if (params.slug === "tarjetas") return <TarjetasLoader />;
  if (params.slug === "botones") return <ButtonsShowcase />;
  if (params.slug === "inputs") return <InputsLoader />;
  if (params.slug === "navegacion") return <NavLoader />;

  return (
    <main className="u-container u-stack" style={{ ["--stack-space" as any]: "16px" }}>
      <h1 className="gov-title">{item.title}</h1>
      <p className="u-text-muted">{item.variations} variaciones</p>
      <div className="demo-card">Aún no hay variaciones para este componente.</div>
    </main>
  );
}
