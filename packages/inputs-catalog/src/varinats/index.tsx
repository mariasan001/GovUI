import * as React from "react";
import type { Variant } from "./types";
import { Mail, Search, Lock, CheckCircle2, AlertCircle, Eye } from "lucide-react";

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="u-cluster" style={{ gap: 12, flexWrap: "wrap" }}>{children}</div>
);
const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 360 }}>{children}</div>
);

// Markup mudo con clases deterministas
function Input({
  label, placeholder, left, right, variant="outline", size="md", helper, state, addonRight
}: {
  label?: string; placeholder?: string; left?: React.ReactNode; right?: React.ReactNode;
  variant?: "outline"|"filled"|"ghost"; size?: "sm"|"md"|"lg";
  helper?: string; state?: "success"|"error"; addonRight?: React.ReactNode;
}) {
  const id = React.useId();
  const cls =
    `gov-input gov-input--${variant} gov-input--${size}` +
    (state ? ` is-${state}` : "") +
    (left ? " with-left" : "") +
    (right ? " with-right" : "") +
    (addonRight ? " with-addon-right" : "");
  return (
    <div className="gov-field">
      {label && <label className="gov-label" htmlFor={id}>{label}</label>}
      <div className={cls}>
        {left  && <span className="gov-input__icon is-left" aria-hidden>{left}</span>}
        <input id={id} className="gov-input__control" placeholder={placeholder} />
        {right && <span className="gov-input__icon is-right" aria-hidden>{right}</span>}
        {addonRight}
      </div>
      {helper && <div className={`gov-help ${state ? `is-${state}` : ""}`}>{helper}</div>}
    </div>
  );
}

/* 1) Básicos */
const vBasic: Variant = {
  id: "in-basic",
  name: "Básicos",
  group: "basic",
  preview: (
    <Row>
      <Box><Input label="Correo" placeholder="tu@correo.com" left={<Mail size={16}/>} /></Box>
      <Box><Input label="Búsqueda" placeholder="Buscar…" right={<Search size={16}/>} variant="filled" /></Box>
      <Box><Input label="Solo texto" placeholder="Escribe aquí…" variant="ghost" /></Box>
    </Row>
  ),
  tsx: `<>
  <GovInput label="Correo" placeholder="tu@correo.com" leftIcon={<Mail size={16} />} />
  <GovInput label="Búsqueda" placeholder="Buscar…" variant="filled" rightIcon={<Search size={16} />} />
  <GovInput label="Solo texto" placeholder="Escribe aquí…" variant="ghost" />
</>`,
};

/* 2) Estados (validación) */
const vStates: Variant = {
  id: "in-states",
  name: "Estados",
  group: "states",
  preview: (
    <Row>
      <Box>
        <Input
          label="OK"
          placeholder="Todo bien"
          state="success"
          right={<CheckCircle2 size={16}/>}
          helper="Se ve correcto"
        />
      </Box>
      <Box>
        <Input
          label="Error"
          placeholder="Algo va mal"
          state="error"
          right={<AlertCircle size={16}/>}
          helper="Revisa el formato"
        />
      </Box>
      <Box>
        <Input
          label="Password"
          placeholder="••••••••"
          left={<Lock size={16}/>}                                  
          addonRight={                                                /* ojo a la derecha */
            <button type="button" className="gov-input__addon is-right" aria-label="Ver contraseña">
              <Eye size={16} />
            </button>
          }
        />
      </Box>
    </Row>
  ),
  tsx: `<>
  <GovInput label="OK" placeholder="Todo bien" status="success" rightIcon={<CheckCircle2 size={16} />} helperText="Se ve correcto" />
  <GovInput label="Error" placeholder="Algo va mal" status="error" rightIcon={<AlertCircle size={16} />} helperText="Revisa el formato" />
  {/* Password con visor (interactivo en el componente real con prop reveal) */}
  <GovInput label="Contraseña" type="password" reveal placeholder="••••••••" />
</>`,
};

/* 3) Tamaños */
const vSizes: Variant = {
  id: "in-sizes",
  name: "Tamaños",
  group: "sizes",
  preview: (
    <Row>
      <Box><Input label="Pequeño" size="sm" placeholder="sm" /></Box>
      <Box><Input label="Mediano" size="md" placeholder="md" /></Box>
      <Box><Input label="Grande"  size="lg" placeholder="lg" /></Box>
    </Row>
  ),
  tsx: `<>
  <GovInput label="Pequeño" size="sm" placeholder="sm" />
  <GovInput label="Mediano" size="md" placeholder="md" />
  <GovInput label="Grande"  size="lg" placeholder="lg" />
</>`,
};

/* 4) Iconos / Addons */
const vAddons: Variant = {
  id: "in-addons",
  name: "Iconos / Addons",
  group: "addons",
  preview: (
    <Row>
      <Box><Input label="Con icono" placeholder="usuario" left={<Mail size={16} />} /></Box>
      <Box><Input label="Con acciones" placeholder="buscar…" right={<Search size={16} />} variant="outline" /></Box>
    </Row>
  ),
  tsx: `<>
  <GovInput label="Con icono" placeholder="usuario" leftIcon={<Mail size={16} />} />
  <GovInput label="Con acciones" placeholder="buscar…" rightIcon={<Search size={16} />} />
</>`,
};

/* 5) Textarea */
const vTextarea: Variant = {
  id: "in-textarea",
  name: "Textarea",
  group: "basic",
  preview: (
    <Box>
      <div className="gov-field">
        <label className="gov-label" htmlFor="bio">Bio</label>
        <textarea id="bio" className="gov-textarea gov-textarea--filled" placeholder="Cuéntanos algo…"></textarea>
        <div className="gov-help">Máx. 280 caracteres</div>
      </div>
    </Box>
  ),
  tsx: `<div className="gov-field">
  <label className="gov-label" htmlFor="bio">Bio</label>
  <textarea id="bio" className="gov-textarea gov-textarea--filled" placeholder="Cuéntanos algo…"></textarea>
  <div className="gov-help">Máx. 280 caracteres</div>
</div>`,
};

export const VARIANTS: Variant[] = [vBasic, vStates, vSizes, vAddons, vTextarea];

export const VARIANTS_BY_ID = Object.fromEntries(
  VARIANTS.map(v => [v.id, v] as const)
) as Record<(typeof VARIANTS)[number]["id"], Variant>;
