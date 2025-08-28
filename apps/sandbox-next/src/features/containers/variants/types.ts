import type { ReactNode } from 'react';

export type GroupId = 'examples' | 'templates';

export type Variant = {
  id: string;
  title: string;
  group: GroupId;
  preview: ReactNode;  // server-safe markup (sin hooks)
  tsx: string;         // string del ejemplo (para botón "copiar")
};

export const GROUPS = [
  { id: 'examples',  title: 'Ejemplos'  },
  { id: 'templates', title: 'Plantillas'}
] as const;
