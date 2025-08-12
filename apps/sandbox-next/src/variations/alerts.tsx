'use client';
import React from 'react';
import type { Variation } from './';

export const variations: Variation[] = [
  { id: 'info',    title: 'Informativa', Preview: () =>
      <div className="gov-alert"><span className="gov-alert__title">Info</span><span className="gov-alert__desc">Mensaje informativo.</span></div> },
  { id: 'success', title: 'Éxito',       Preview: () =>
      <div className="gov-alert gov-alert--success"><span className="gov-alert__title">Listo</span><span className="gov-alert__desc">Proceso finalizado.</span></div> },
  { id: 'warning', title: 'Advertencia', Preview: () =>
      <div className="gov-alert gov-alert--warning"><span className="gov-alert__title">Atención</span><span className="gov-alert__desc">Revisa los campos.</span></div> },
  { id: 'danger',  title: 'Error',       Preview: () =>
      <div className="gov-alert gov-alert--danger"><span className="gov-alert__title">Error</span><span className="gov-alert__desc">Algo salió mal.</span></div> },
];
