'use client';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './containers.css';

import Canvas from './Canvas';
import Sidebar from './Sidebar';
import { useContainerEditor } from '../hooks/useContainerEditor';

export default function ContainerBuilderShowcase(){
  const ed = useContainerEditor();

  return (
    <div>
      <div className="cb-header">
        <h3 style={{ margin: 0 }}>Container Builder</h3>
      </div>

      <div className="cb-editor">
        <Canvas
          boxes={ed.boxes}
          layouts={ed.layouts}
          rowH={ed.rowH}
          gap={ed.gap}
          showGrid={ed.showGrid}
          onLayoutChange={ed.onLayoutChange}
          onBreakpointChange={ed.onBreakpointChange}
          onSelect={ed.setSelected}
          onDeleteSelected={ed.delSelected}
        />

        <Sidebar
          boxes={ed.boxes}
          selected={ed.selected}
          selectedLayout={ed.selectedLayout}
          msg={ed.msg}
          rowH={ed.rowH} setRowH={ed.setRowH}
          gap={ed.gap}   setGap={ed.setGap}
          showGrid={ed.showGrid} setShowGrid={ed.setShowGrid}
          renameSelected={ed.renameSelected}
          setSelected={ed.setSelected}
          addBox={ed.addBox}
          delSelected={ed.delSelected}
          clearAll={ed.clearAll}
          copyPageTsx={ed.copyPageTsx}
          copySectionTsx={ed.copySectionTsx}
          downloadPageTsx={ed.downloadPageTsx}
          downloadSectionTsx={ed.downloadSectionTsx}
        />
      </div>
    </div>
  );
}

