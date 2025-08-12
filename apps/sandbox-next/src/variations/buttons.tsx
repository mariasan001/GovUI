'use client';
import React from 'react';
import type { Variation } from './';

export const variations: Variation[] = [
  { id: 'primary',   title: 'Primario',   Preview: () => <button className="gov-btn gov-btn--primary">Guardar</button> },
  { id: 'secondary', title: 'Secundario', Preview: () => <button className="gov-btn gov-btn--secondary">Cancelar</button> },
  { id: 'ghost',     title: 'Ghost',      Preview: () => <button className="gov-btn">Ghost</button> },
];
