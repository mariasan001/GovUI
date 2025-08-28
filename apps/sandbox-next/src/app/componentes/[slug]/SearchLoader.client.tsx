// apps/sandbox-next/src/app/componentes/[slug]/SearchLoader.client.tsx
"use client";
import dynamic from "next/dynamic";

const SearchShowcase = dynamic(
  () => import("@govui/search-catalog/next").then(m => m.SearchShowcase),
  { ssr:false, loading: () => <div className="demo-card">Cargando buscadores…</div> }
);

export default function SearchLoader(){ return <SearchShowcase/>; }
