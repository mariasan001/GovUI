// Tipado mínimo estable para react-grid-layout v1.x
// (evita errores al compilar el package)
declare module 'react-grid-layout' {
  import * as React from 'react';

  export interface Layout {
    i: string;
    x: number;
    y: number | any; // RGL puede usar Infinity; lo normalizamos en codegen
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
    isDraggable?: boolean;
    isResizable?: boolean;
    static?: boolean;
  }

  export interface Layouts {
    lg?: Layout[];
    md?: Layout[];
    sm?: Layout[];
    xs?: Layout[];
    xxs?: Layout[];
    [key: string]: Layout[] | undefined;
  }

  export interface ResponsiveProps {
    className?: string;
    layouts: Layouts;
    breakpoints: Record<string, number>;
    cols: Record<string, number>;
    rowHeight?: number;
    margin?: [number, number];
    compactType?: 'vertical' | 'horizontal' | null;
    isDraggable?: boolean;
    isResizable?: boolean;
    isBounded?: boolean;
    draggableHandle?: string;
    onLayoutChange?: (layout: Layout[], layouts: Layouts) => void;
    onBreakpointChange?: (newBreakpoint: string, newCols: number) => void;
    [key: string]: any;
  }

  export class Responsive extends React.Component<ResponsiveProps> {}
  export function WidthProvider<T>(ComposedComponent: T): T;

  const ReactGridLayout: React.ComponentType<any>;
  export default ReactGridLayout;
}
