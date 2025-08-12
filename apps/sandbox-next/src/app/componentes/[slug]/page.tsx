import React from 'react';
import { notFound } from 'next/navigation';
import { ITEMS } from '@/data/items';
import IconsGallery from './icons-gallery.client';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ITEMS.map(i => ({ slug: i.slug }));
}

export default function Page({ params }: Props) {
  const item = ITEMS.find(i => i.slug === params.slug);
  if (!item) notFound();

  // Vista especial: iconos
  if (params.slug === 'iconos') {
    return <IconsGallery />;
  }

  // Cascarón por defecto para otros componentes (lo iremos llenando con variaciones)
  return (
    <main className="u-container u-stack" style={{ '--stack-space': '16px' } as React.CSSProperties}>
      <h1 className="gov-title">{item.title}</h1>
      <p className="u-text-muted">{item.variations} variaciones</p>
      <div className="demo-card">Aún no hay variaciones para este componente.</div>
    </main>
  );
}
