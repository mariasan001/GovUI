'use client';
import { Responsive, WidthProvider } from 'react-grid-layout';
import type { Layouts } from 'react-grid-layout';
import { BREAKPOINTS, COLS } from '../utils/grid';
import type { Box, RLayouts } from '../utils/types';

const ResponsiveGridLayout = WidthProvider(Responsive);

type Props = {
  boxes: Box[];
  layouts: RLayouts;
  rowH: number;
  gap: number;
  showGrid: boolean;
  onLayoutChange: (l: any, all: Layouts) => void;
  onBreakpointChange: (name: string) => void;
  onSelect: (id: string) => void;
  onDeleteSelected: () => void;
};

export default function Canvas({
  boxes, layouts, rowH, gap, showGrid,
  onLayoutChange, onBreakpointChange, onSelect, onDeleteSelected
}: Props){
  return (
    <div className={`cb-canvas ${showGrid ? 'cb-canvas--grid' : ''}`}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        breakpoints={BREAKPOINTS}
        cols={COLS}
        rowHeight={rowH}
        margin={[gap, gap]}
        compactType="vertical"
        isBounded
        draggableHandle=".cb-handle"
      >
        {boxes.map(b => (
          <div
            key={b.id}
            className="cb-box"
            tabIndex={0}
            onClick={() => onSelect(b.id)}
            onKeyDown={(e) => { if (e.key === 'Delete') onDeleteSelected(); }}
          >
            <div className="cb-handle" aria-hidden>⠿</div>
            <span>{b.label}</span>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
