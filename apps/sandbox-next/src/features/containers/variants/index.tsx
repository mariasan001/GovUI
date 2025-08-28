import React from 'react';
import type { Variant } from './types';

/* Previews server-safe con CSS Grid (sin interactividad) */
const V3ColsPreview = (
  <div className="cb-skeleton cb-3cols">
    <div className="cb-skel-item" />
    <div className="cb-skel-item" />
    <div className="cb-skel-item" />
  </div>
);

const HeroSidebarPreview = (
  <div className="cb-skeleton cb-hero-sidebar">
    <div className="cb-skel-item" style={{ height: 96 }} />
    <div className="cb-skel-item" />
  </div>
);

const V3ColsTsx = `export default function ThreeColumns(){
  return (
    <section className="grid gap-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <div className="card" />
      <div className="card" />
      <div className="card" />
    </section>
  )
}`;

const HeroSidebarTsx = `export default function HeroWithSidebar(){
  return (
    <section className="grid gap-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
      <div className="card" style={{ height: 96 }} />
      <div className="card" />
    </section>
  )
}`;

export const VARIANTS: Variant[] = [
  { id: '3-cols',       title: '3 columnas',      group: 'examples',  preview: V3ColsPreview,      tsx: V3ColsTsx },
  { id: 'hero-sidebar', title: 'Hero + Sidebar',  group: 'templates', preview: HeroSidebarPreview, tsx: HeroSidebarTsx },
];
