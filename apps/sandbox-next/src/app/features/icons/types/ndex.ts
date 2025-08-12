import type { LucideProps } from 'lucide-react';

export type IconEntry = {
  name: string;
  label: string;
  Comp: React.ComponentType<LucideProps>;
};

export type ColorKey = 'negro' | 'blanco' | 'ginge' | 'cafe' | 'vino';
