'use client';
import React from 'react';
import { COLORS } from '../constants/colors';
import type { ColorKey } from '../types/ndex';


export function ColorPicker({ value, onChange }: { value: ColorKey; onChange: (c: ColorKey) => void }) {
  return (
    <fieldset className="color-picker" style={{ border: 0, margin: 0 }}>
      <legend className="u-visually-hidden">Color del icono</legend>
      {(Object.keys(COLORS) as ColorKey[]).map((key) => (
        <label key={key} className={`swatch ${value === key ? 'is-selected' : ''}`} style={{ ['--swatch' as any]: COLORS[key] }}>
          <input className="u-visually-hidden" type="radio" name="icon-color" value={key}
            checked={value === key} onChange={() => onChange(key)} />
          <span className="dot" aria-hidden="true" />
          <span className="name">{key[0].toUpperCase() + key.slice(1)}</span>
        </label>
      ))}
    </fieldset>
  );
}
