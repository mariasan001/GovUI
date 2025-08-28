'use client';
import dynamic from 'next/dynamic';

const ContainerBuilderShowcase = dynamic(
  () => import('@govui/containers-catalog/next').then(m => m.ContainerBuilderShowcase),
  { ssr: false, loading: () => <div className="cb-canvas">Cargando…</div> }
);

export default function ContainersLoader() {
  return <ContainerBuilderShowcase />;
}
