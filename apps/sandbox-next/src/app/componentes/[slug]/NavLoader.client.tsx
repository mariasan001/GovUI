"use client";
import dynamic from "next/dynamic";

const NavShowcase = dynamic(
  () => import("@govui/nav-catalog/next").then(m => m.NavShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando nav…</div> }
);

export default function NavLoader(){ return <NavShowcase />; }
