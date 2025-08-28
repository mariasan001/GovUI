import type { Layout, Layouts } from 'react-grid-layout';

export type Box = { id: string; label: string };

export type RLayouts = Layouts & {
  lg: Layout[];
  md: Layout[];
  sm: Layout[];
  xs: Layout[];
  xxs: Layout[];
};

export type MsgSetter = (t: string) => void;
