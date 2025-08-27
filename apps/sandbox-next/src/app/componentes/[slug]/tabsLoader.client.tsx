// apps/sandbox-next/src/features/tabs/components/tabsLoader.client.tsx
"use client";

import dynamic from "next/dynamic";

const TabsShowcase = dynamic(
  () => import("@features/tabs").then(m => m.TabsShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando pies de página…</div> }
);

export default function TabsLoader() {
  return <TabsShowcase />;
}
