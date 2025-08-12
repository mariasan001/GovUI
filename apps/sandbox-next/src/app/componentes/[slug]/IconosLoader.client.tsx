"use client";
import dynamic from "next/dynamic";

const Gallery = dynamic(
  () => import("@govui/icons-catalog/next").then(m => m.IconsGallery),
  { ssr: false, loading: () => <div className="demo-card">Cargando íconos…</div> }
);

export default function IconosLoader() {
  return <Gallery />;
}
