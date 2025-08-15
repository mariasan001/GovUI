'use client';

import * as React from 'react';
import { VARIANTS } from '../variants';
import GovButton from './Button';
import { Copy, Check } from 'lucide-react';
import '../styles.css';

function useCopy() {
  const [ok, setOk] = React.useState(false);
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1200);
    } catch {}
  };
  return { ok, copy };
}

export default function ButtonsShowcase() {
  const { ok, copy } = useCopy();

  return (
    <main className="u-stack u-container" style={{ gap: 16 }}>
         <h1 className="display-hero" style={{ margin: 0 }}>Botones</h1>
      <p className="u-text-muted">Variantes, tamaños, estados e íconos.</p>

      <div className="grid " style={{ display: 'grid', gap: 16 }}>
        {VARIANTS.map(v => (
          <section key={v.id} className="panel" style={{ padding: 16 }}>
            <header className="u-cluster" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <strong>{v.name}</strong>
              <GovButton
                variant="outline"
                size="sm"
                onClick={() => copy(v.tsx)}
                startIcon={ok ? <Check size={16}/> : <Copy size={16}/>}
              >
                {ok ? 'Copiado' : 'Copiar .tsx'}
              </GovButton>
            </header>
            <div>{v.preview}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
