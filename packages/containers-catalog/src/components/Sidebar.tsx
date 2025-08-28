import ActionBar from './ActionBar';
import type { Box } from '../utils/types';
import type { Layout } from 'react-grid-layout';

type Props = {
  boxes: Box[];
  selected: string | null;
  selectedLayout?: Layout;
  msg?: string | null;

  rowH: number; setRowH: (n: number) => void;
  gap: number;  setGap:  (n: number) => void;
  showGrid: boolean; setShowGrid: (b: boolean) => void;

  renameSelected: (v: string) => void;
  setSelected: (id: string) => void;

  // actions
  addBox: () => void;
  delSelected: () => void;
  clearAll: () => void;
  copyPageTsx: () => void;
  copySectionTsx: () => void;
  downloadPageTsx: () => void;
  downloadSectionTsx: () => void;
};

export default function Sidebar({
  boxes, selected, selectedLayout, msg,
  rowH, setRowH, gap, setGap, showGrid, setShowGrid,
  renameSelected, setSelected,
  addBox, delSelected, clearAll,
  copyPageTsx, copySectionTsx, downloadPageTsx, downloadSectionTsx
}: Props){
  return (
    <aside className="cb-side" aria-label="Inspector de layout">
      <div className="cb-section">
        <h4>Acciones</h4>
        <ActionBar
          onAdd={addBox}
          onCopyPage={copyPageTsx}
          onCopySection={copySectionTsx}
          onExportPage={downloadPageTsx}
          onExportSection={downloadSectionTsx}
          onDelete={delSelected}
          onClear={clearAll}
          hasSelection={!!selected}
        />
      </div>

      <div className="cb-section">
        <h4>Lienzo</h4>
        <div className="cb-row">
          <label className="cb-switch">
            <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
            Ver cuadrícula
          </label>
        </div>
        <div className="cb-row">
          <div style={{ flex: 1 }}>
            <label className="cb-help">Row height</label>
            <input className="cb-number" type="number" value={rowH}
              min={16} max={96} step={2}
              onChange={(e) => setRowH(Number(e.target.value))} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="cb-help">Gap</label>
            <input className="cb-number" type="number" value={gap}
              min={0} max={24} step={1}
              onChange={(e) => setGap(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div className="cb-section">
        <h4>Seleccionado</h4>
        {selected ? (
          <>
            <input
              className="cb-input"
              value={boxes.find(b => b.id === selected)?.label ?? ''}
              onChange={(e) => renameSelected(e.target.value)}
            />
            <p className="cb-help" style={{ marginTop: 6 }}>
              id: <b>{selected}</b>{' '}
              {selectedLayout && <>• w:{selectedLayout.w} • h:{selectedLayout.h}</>}
            </p>
          </>
        ) : (
          <p className="cb-help">Selecciona un contenedor en el lienzo.</p>
        )}
      </div>

      <div className="cb-section">
        <h4>Capas</h4>
        <div className="cb-list">
          {boxes.length === 0 && <p className="cb-help">Aún no hay contenedores.</p>}
          {boxes.map(b => (
            <div key={b.id}
              className={`cb-item ${selected === b.id ? 'cb-item--active' : ''}`}
              onClick={() => setSelected(b.id)}
            >
              <b>{b.label}</b>
              <small>{b.id}</small>
            </div>
          ))}
        </div>
      </div>

      <div role="status" aria-live="polite" className="cb-help" style={{ opacity: msg ? 1 : 0 }}>
        {msg || ' '}
      </div>
    </aside>
  );
}
