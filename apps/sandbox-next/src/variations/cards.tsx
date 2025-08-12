'use client';
import React from 'react';
import type { Variation } from './';

export const variations: Variation[] = [
  { id: 'base',      title: 'Base',       Preview: () => <article className="gov-card"><div className="gov-card__body">Contenido</div></article> },
  { id: 'clickable', title: 'Clickeable', Preview: () => <article className="gov-card gov-card--clickable"><div className="gov-card__body">Hover/active</div></article> },
  { id: 'emphasis',  title: 'Énfasis',    Preview: () => <article className="gov-card gov-card--emphasis"><div className="gov-card__body">Énfasis</div></article> },
];
