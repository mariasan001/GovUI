// apps/sandbox-next/src/features/footer/components/FooterLoader.client.tsx
"use client";

import dynamic from "next/dynamic";

const FooterShowcase = dynamic(
  () => import("@govui/footer-catalog/next").then(m => m.FooterShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando pies de página…</div> }
);

export default function FooterLoader() {
  return <FooterShowcase />;
}
