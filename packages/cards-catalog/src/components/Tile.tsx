// packages/cards-catalog/src/components/Tile.tsx
'use client';

import React from 'react';
import { Maximize2, Copy as CopyIcon, Check as CheckIcon } from 'lucide-react';
import type { Variant } from '../variants/types';
import useCopy from '../hook/useCopy';

type TileProps = {
  variant: Variant;
  tileBg: string;
  onExpand: () => void;
};

export default function Tile({ variant, tileBg, onExpand }: TileProps) {
  const { copied, copy } = useCopy(); // 👈 coincide con el hook (copied + copy)

  const handleCopy = React.useCallback(() => {
    void copy(variant.tsx);
  }, [copy, variant.tsx]);

  return (
    <article className="panel tile">
      <header
        className="tile__head u-cluster"
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div style={{ fontWeight: 700 }}>{variant.name}</div>

        <button
          type="button"
          className="btn-ghost"
          onClick={onExpand}
          aria-label="Ver completo"
        >
          <Maximize2 size={16} /> Ver completo
        </button>
      </header>

      <div className="tile__stage" style={{ ['--tile-bg' as any]: tileBg }}>
        {variant.preview}
      </div>

      <footer className="tile__foot u-cluster" style={{ justifyContent: 'end' }}>
        <button
          type="button"
          className="gov-btn gov-btn--secondary"
          onClick={handleCopy}
          aria-live="polite"
        >
          {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          <span style={{ marginInlineStart: 6 }}>
            {copied ? 'Copiado' : 'Copiar .tsx'}
          </span>
        </button>
      </footer>
    </article>
  );
}
