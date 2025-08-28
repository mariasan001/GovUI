import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Layout, Layouts } from 'react-grid-layout';
import { BREAKPOINTS, type BpKey } from '../utils/grid';
import type { Box, RLayouts } from '../utils/types';
import { makeNextPageRouteTsx, makeSectionFlexTsx, makeNextPageWithCssModule } from '../utils/codegen';
import { copyToClipboard, downloadTSX, downloadText } from '../utils/io';

const STORAGE_KEY = 'govui-container-builder-v1';
const uid = () => Math.random().toString(36).slice(2, 9);
const slugify = (s: string) =>
  s.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export function useContainerEditor(){
  const [boxes, setBoxes]       = useState<Box[]>([]);
  const [layouts, setLayouts]   = useState<RLayouts>({ lg: [], md: [], sm: [], xs: [], xxs: [] });
  const [selected, setSelected] = useState<string | null>(null);

  const [bp, setBp] = useState<BpKey>('lg');
  const [msg, setMsg] = useState<string | null>(null);
  const [rowH, setRowH] = useState<number>(32);
  const [gap, setGap]   = useState<number>(8);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { boxes: Box[]; layouts: RLayouts };
      if (parsed.boxes && parsed.layouts) { setBoxes(parsed.boxes); setLayouts(parsed.layouts); }
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ boxes, layouts }));
  }, [boxes, layouts]);

  const toast = (t: string) => { setMsg(t); setTimeout(()=>setMsg(null), 1600); };

  const currentLayout = useMemo(() => layouts[bp] || [], [layouts, bp]);
  const selectedLayout = useMemo(
    () => selected ? currentLayout.find(l => l.i === selected) : undefined,
    [selected, currentLayout]
  );

  const addBox = useCallback(() => {
    const id = uid();
    const label = `Box ${boxes.length + 1}`;
    const def: Layout = { i: id, x: 0, y: Infinity, w: 3, h: 4, minW: 2, minH: 2 };
    setBoxes(prev => [...prev, { id, label }]);
    setLayouts(prev => ({
      lg: [...prev.lg, def],
      md: [...prev.md, { ...def, w: 3 }],
      sm: [...prev.sm, { ...def, w: 4 }],
      xs: [...prev.xs, { ...def, w: 3 }],
      xxs:[...prev.xxs,{ ...def, w: 4 }],
    }));
    setSelected(id);
  }, [boxes.length]);

  const delSelected = useCallback(() => {
    if (!selected) return;
    setBoxes(prev => prev.filter(b => b.id !== selected));
    setLayouts(prev => ({
      lg: prev.lg.filter(l => l.i !== selected),
      md: prev.md.filter(l => l.i !== selected),
      sm: prev.sm.filter(l => l.i !== selected),
      xs: prev.xs.filter(l => l.i !== selected),
      xxs: prev.xxs.filter(l => l.i !== selected),
    }));
    setSelected(null);
  }, [selected]);

  const clearAll = useCallback(() => {
    setBoxes([]); setLayouts({ lg: [], md: [], sm: [], xxs: [], xs: [] }); setSelected(null);
  }, []);

  const renameSelected = useCallback((val: string) => {
    if (!selected) return;
    setBoxes(prev => prev.map(b => (b.id === selected ? { ...b, label: val } : b)));
  }, [selected]);

  const onLayoutChange = useCallback((_l: Layout[], all: Layouts) => setLayouts(all as RLayouts), []);
  const onBreakpointChange = useCallback((name: string) => setBp(name as BpKey), []);

  /* ===== Exportadores (3 modos) ===== */

  // 1) Copiar PÁGINA con CSS inline (grid exacto)
  const copyPageTsx = useCallback(() => {
    const name = window.prompt('Nombre de la página/sección (para app/<slug>/page.tsx):', 'Sección Tal') || 'Sección Tal';
    const code = makeNextPageRouteTsx(name, boxes, layouts, gap, rowH);
    copyToClipboard(code).then(()=>toast('Página copiada (.tsx)')).catch(()=>toast('No se pudo copiar'));
  }, [boxes, layouts, gap, rowH]);

  // 2) Descargar PÁGINA con CSS inline (una sola .tsx)
  const downloadPageTsx = useCallback(() => {
    const name = window.prompt('Nombre de la página/sección (para app/<slug>/page.tsx):', 'Sección Tal') || 'Sección Tal';
    const code = makeNextPageRouteTsx(name, boxes, layouts, gap, rowH);
    const file = `${slugify(name)}.page.tsx`;
    downloadTSX(file, code);
  }, [boxes, layouts, gap, rowH]);

  // 3) Descargar PÁGINA (tsx) + CSS Module (css) — **dos archivos**
  const exportPageWithCssModule = useCallback(() => {
    const name = window.prompt('Nombre de la página/sección (para app/<slug>/page.tsx y .module.css):', 'Sección Tal') || 'Sección Tal';
    const { tsxFile, tsx, cssFile, css } = makeNextPageWithCssModule(name, boxes, layouts, gap, rowH);
    // Dispara dos descargas
    downloadTSX(tsxFile, tsx);
    downloadText(cssFile, css, 'text/css;charset=utf-8');
    toast('Descargando TSX + CSS Module');
  }, [boxes, layouts, gap, rowH]);

  // SECCIÓN suelta
  const copySectionTsx = useCallback(() => {
    if (!selected) return;
    const name = window.prompt('Nombre de la sección (archivo .tsx):', 'Sección Tal') || 'Sección Tal';
    const selLabel = boxes.find(b=>b.id===selected)?.label;
    const li = layouts.lg.find(l => l.i === selected);
    const span = li?.w ?? 12;
    const code = makeSectionFlexTsx(name, selLabel, span);
    copyToClipboard(code).then(()=>toast('Sección copiada (.tsx)')).catch(()=>toast('No se pudo copiar'));
  }, [selected, boxes, layouts.lg]);

  const downloadSectionTsx = useCallback(() => {
    if (!selected) return;
    const name = window.prompt('Nombre de la sección (archivo .tsx):', 'Sección Tal') || 'Sección Tal';
    const selLabel = boxes.find(b=>b.id===selected)?.label;
    const li = layouts.lg.find(l => l.i === selected);
    const span = li?.w ?? 12;
    const code = makeSectionFlexTsx(name, selLabel, span);
    const file = `${slugify(name)}.section.tsx`;
    downloadTSX(file, code);
  }, [selected, boxes, layouts.lg]);

  // JSON del editor
  const downloadJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify({ boxes, layouts }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'govui-container-layout.json'; a.click();
    URL.revokeObjectURL(url);
  }, [boxes, layouts]);

  return {
    // state
    boxes, layouts, selected, bp, msg, rowH, gap, showGrid, selectedLayout,
    // setters
    setSelected, setShowGrid, setRowH, setGap,
    // handlers
    addBox, delSelected, clearAll, renameSelected,
    onLayoutChange, onBreakpointChange,
    // actions
    copyPageTsx, downloadPageTsx, exportPageWithCssModule,
    copySectionTsx, downloadSectionTsx, downloadJSON,
  };
}
