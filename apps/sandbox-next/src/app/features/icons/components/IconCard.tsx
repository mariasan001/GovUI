'use client';
import React from 'react';
import type { LucideProps } from 'lucide-react';

export function IconCard({
    label, name, Comp, previewBg, size, stroke, color, onCopyName, onCopyJsx, onCopyImport,
}: {
    label: string; name: string; Comp: React.ComponentType<LucideProps>;
    previewBg: string; size: number; stroke: number; color: string;
    onCopyName: () => void; onCopyJsx: () => void; onCopyImport: () => void;
}) {
    return (
        <div
            role="button" tabIndex={0} className="gov-card"
            onClick={onCopyName}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCopyName(); } }}
            style={{ textAlign: 'center', padding: 12, cursor: 'pointer' }}
            title={`Copiar nombre: ${label}`}
        >
            <div style={{
                inlineSize: '100%', blockSize: 110, display: 'grid', placeItems: 'center',
                borderRadius: 12, background: previewBg, marginBottom: 10
            }}>
                <Comp size={size} strokeWidth={stroke} color={color} aria-hidden="true" />
            </div>

            <div className="u-text-muted" style={{ fontSize: 14 }}>{label}</div>

            <div className="u-cluster" style={{ justifyContent: 'center', marginTop: 6, gap: 8 }}>
                <button type="button" className="gov-btn gov-btn--secondary" onClick={(e) => { e.stopPropagation(); onCopyJsx(); }}>
                    Copiar JSX
                </button>
                <button type="button" className="gov-btn" onClick={(e) => { e.stopPropagation(); onCopyImport(); }}>
                    Copiar import
                </button>
            </div>
        </div>
    );
}
