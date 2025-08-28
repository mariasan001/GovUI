import { Plus, Clipboard, ClipboardCheck, FileCode, Download, Trash2, Eraser } from 'lucide-react';

type Props = {
  onAdd: () => void;
  onCopyPage: () => void;
  onCopySection: () => void;
  onExportPage: () => void;
  onExportSection: () => void;
  onDelete: () => void;
  onClear: () => void;
  hasSelection: boolean;
};

export default function ActionBar({
  onAdd, onCopyPage, onCopySection, onExportPage, onExportSection, onDelete, onClear, hasSelection
}: Props){
  return (
    <div className="cb-actions">
      <div className="cb-actions__group">
        <button className="cb-act cb-act--primary" onClick={onAdd} title="Añadir contenedor">
          <Plus /> Añadir
        </button>
        <button className="cb-act" onClick={onCopyPage} title="Copiar página (.tsx)">
          <Clipboard /> Copiar página
        </button>
        <button className="cb-act" onClick={onCopySection} disabled={!hasSelection} title="Copiar sección (.tsx)">
          <ClipboardCheck /> Copiar sección
        </button>
      </div>
      <div className="cb-actions__group">
        <button className="cb-act" onClick={onExportPage} title="Descargar page.tsx">
          <FileCode /> Exportar página
        </button>
        <button className="cb-act" onClick={onExportSection} disabled={!hasSelection} title="Descargar section.tsx">
          <Download /> Exportar sección
        </button>
      </div>
      <div className="cb-actions__group">
        <button className="cb-act cb-act--danger" onClick={onDelete} disabled={!hasSelection} title="Eliminar seleccionado">
          <Trash2 /> Eliminar
        </button>
        <button className="cb-act cb-act--ghost" onClick={onClear} title="Limpiar lienzo">
          <Eraser /> Limpiar
        </button>
      </div>
    </div>
  );
}
