import * as React from "react";
import type { Variant } from "./types";
import { ArrowLeft, ArrowRight, Check, Plus, Trash2, Loader2, Download } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────── */
/* utils                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */
const cx = (...p: Array<string | false | null | undefined>) => p.filter(Boolean).join(" ");

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="u-cluster" style={{ gap: 12, flexWrap: "wrap" }}>{children}</div>
);

// Botón mudo para PREVIEW (markup + clases; sin hooks)
type BProps = {
  variant?: "solid" | "outline" | "ghost" | "soft" | "link" | "gradient";
  color?: "primary" | "secondary" | "neutral" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "default" | "pill" | "square";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
};
function B({
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "default",
  startIcon,
  endIcon,
  icon,
  loading,
  disabled,
  block,
  className,
  children,
}: BProps) {
  const isIconOnly = !!icon && !children;
  return (
    <button
      type="button"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx(
        "gov-btn",
        `gov-btn--${variant}`,
        `gov-btn--${color}`,
        size !== "md" && `gov-btn--${size}`,
        radius !== "default" && `gov-btn--${radius}`,
        isIconOnly && "gov-btn--icon",
        block && "w-100",
        loading && "is-loading",
        className
      )}
      style={block ? { width: "100%" } : undefined}
    >
      {isIconOnly ? (
        <span className="gov-btn__icon" aria-hidden>{icon}</span>
      ) : (
        <>
          {loading ? (
            <span className="gov-btn__spinner" aria-hidden>
              <Loader2 size={16} className="spin" />
            </span>
          ) : (
            startIcon && <span className="gov-btn__icon" aria-hidden>{startIcon}</span>
          )}
          <span className="gov-btn__label">{children}</span>
          {!loading && endIcon && <span className="gov-btn__icon" aria-hidden>{endIcon}</span>}
        </>
      )}
    </button>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Variants                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

/* 1) Estilos básicos */
const vStyles: Variant = {
  id: "btn-styles",
  name: "Estilos básicos",
  group: "styles",
  preview: (
    <Row>
      <B variant="solid"  color="primary">Primario</B>
      <B variant="solid"  color="secondary">Secundario</B>
      <B variant="outline" color="primary">Outline</B>
      <B variant="soft"   color="primary">Soft</B>
      <B variant="ghost">Ghost</B>
      <B variant="link" color="primary" endIcon={<ArrowRight size={16}/>}>Link</B>
    </Row>
  ),
  tsx: `// imports sugeridos:
// import GovButton from "@govui/buttons-catalog/next";
// import { ArrowRight } from "lucide-react";
<>
  <GovButton variant="solid" color="primary">Primario</GovButton>
  <GovButton variant="solid" color="secondary">Secundario</GovButton>
  <GovButton variant="outline" color="primary">Outline</GovButton>
  <GovButton variant="soft" color="primary">Soft</GovButton>
  <GovButton variant="ghost">Ghost</GovButton>
  <GovButton variant="link" color="primary" endIcon={<ArrowRight size={16}/>}>Link</GovButton>
</>`,
};

/* 2) Tamaños y formas */
const vSizes: Variant = {
  id: "btn-sizes",
  name: "Tamaños y formas",
  group: "sizes",
  preview: (
    <Row>
      <B size="sm">Pequeño</B>
      <B>Mediano</B>
      <B size="lg">Grande</B>
      <B radius="pill">Píldora</B>
      <B radius="square">Cuadrado</B>
    </Row>
  ),
  tsx: `<>
  <GovButton size="sm">Pequeño</GovButton>
  <GovButton>Mediano</GovButton>
  <GovButton size="lg">Grande</GovButton>
  <GovButton radius="pill">Píldora</GovButton>
  <GovButton radius="square">Cuadrado</GovButton>
</>`,
};

/* 3) Estados */
const vStates: Variant = {
  id: "btn-states",
  name: "Estados",
  group: "states",
  preview: (
    <Row>
      <B loading endIcon={<ArrowRight size={16}/>}>Cargando</B>
      <B variant="outline" disabled>Deshabilitado</B>
      <B variant="solid" color="danger" startIcon={<Trash2 size={16}/>}>Eliminar</B>
      <B variant="solid" color="success" startIcon={<Check size={16}/>}>Listo</B>
    </Row>
  ),
  tsx: `<>
  <GovButton loading endIcon={<ArrowRight size={16}/>}>Cargando</GovButton>
  <GovButton variant="outline" disabled>Deshabilitado</GovButton>
  <GovButton variant="solid" color="danger" startIcon={<Trash2 size={16}/>}>Eliminar</GovButton>
  <GovButton variant="solid" color="success" startIcon={<Check size={16}/>}>Listo</GovButton>
</>`,
};

/* 4) Íconos (posiciones + solo icono) */
const vIcons: Variant = {
  id: "btn-icons",
  name: "Íconos",
  group: "icons",
  preview: (
    <Row>
      <B startIcon={<Plus size={16}/>}>Agregar</B>
      <B endIcon={<ArrowRight size={16}/>}>Continuar</B>
      <B icon={<Download size={16}/>} aria-label="Descargar" />
    </Row>
  ),
  tsx: `<>
  <GovButton startIcon={<Plus size={16}/>}>Agregar</GovButton>
  <GovButton endIcon={<ArrowRight size={16}/>}>Continuar</GovButton>
  <GovButton icon={<Download size={16}/>} aria-label="Descargar" />
</>`,
};

/* 5) Layout (block/full width) */
const vLayout: Variant = {
  id: "btn-layout",
  name: "Layout",
  group: "layout",
  preview: (
    <div style={{ width: 320 }}>
      <B block>Continuar</B>
      <div style={{ height: 8 }} />
      <B variant="outline" color="neutral" block startIcon={<ArrowRight size={16}/>}>Siguiente paso</B>
    </div>
  ),
  tsx: `<div style={{ width: 320 }}>
  <GovButton style={{ width: "100%" }}>Continuar</GovButton>
  <GovButton variant="outline" color="neutral" startIcon={<ArrowRight size={16}/>} style={{ width: "100%", marginTop: 8 }}>
    Siguiente paso
  </GovButton>
</div>`,
};

/* 6) Solo icono + tamaños */
const vIconOnly: Variant = {
  id: "btn-icon-only",
  name: "Solo ícono (tamaños)",
  group: "icons",
  preview: (
    <Row>
      <B icon={<Plus size={16}/>} aria-label="Agregar (sm)" size="sm" />
      <B icon={<Plus size={18}/>} aria-label="Agregar (md)" />
      <B icon={<Plus size={20}/>} aria-label="Agregar (lg)" size="lg" />
    </Row>
  ),
  tsx: `<>
  <GovButton icon={<Plus size={16}/>} aria-label="Agregar (sm)" size="sm" />
  <GovButton icon={<Plus size={18}/>} aria-label="Agregar (md)" />
  <GovButton icon={<Plus size={20}/>} aria-label="Agregar (lg)" size="lg" />
</>`,
};

/* 7) Degradados */
const vGradients: Variant = {
  id: "btn-gradients",
  name: "Gradientes",
  group: "styles",
  preview: (
    <Row>
      <B variant="gradient" color="primary">Primario</B>
      <B variant="gradient" color="primary" startIcon={<ArrowRight size={16}/>}>Continuar</B>
    </Row>
  ),
  tsx: `<>
  <GovButton variant="gradient" color="primary">Primario</GovButton>
  <GovButton variant="gradient" color="primary" startIcon={<ArrowRight size={16}/>}>Continuar</GovButton>
</>`,
};

/* 8) Paginación (botones + desplazador segmentado) */
const vPagination: Variant = {
  id: "btn-pagination",
  name: "Paginación",
  group: "layout",
  preview: (
    <Row>
      {/* Botones sueltos estilo paginación */}
      <B variant="outline" color="neutral" className="gov-btn--pagination" startIcon={<ArrowLeft size={16}/>}>Anterior</B>
      <B variant="outline" color="neutral" className="gov-btn--pagination" endIcon={<ArrowRight size={16}/>}>Siguiente</B>

      {/* Desplazador segmentado */}
      <div className="gov-pagination" aria-label="Paginación">
        <button className="gov-page-btn" aria-label="Anterior" disabled>‹</button>
        <button className="gov-page-btn">1</button>
        <button className="gov-page-btn is-active" aria-current="page">2</button>
        <button className="gov-page-btn">3</button>
        <button className="gov-page-btn" aria-label="Siguiente">›</button>
      </div>
    </Row>
  ),
  tsx: `<>
  {/* Botones sueltos */}
  <GovButton variant="outline" color="neutral" className="gov-btn--pagination" startIcon={<ArrowLeft size={16}/>}>Anterior</GovButton>
  <GovButton variant="outline" color="neutral" className="gov-btn--pagination" endIcon={<ArrowRight size={16}/>}>Siguiente</GovButton>

  {/* Desplazador segmentado */}
  <div className="gov-pagination" aria-label="Paginación">
    <button className="gov-page-btn" aria-label="Anterior" disabled>‹</button>
    <button className="gov-page-btn">1</button>
    <button className="gov-page-btn is-active" aria-current="page">2</button>
    <button className="gov-page-btn">3</button>
    <button className="gov-page-btn" aria-label="Siguiente">›</button>
  </div>
</>`,
};

/* ────────────────────────────────────────────────────────────────────────── */

export const VARIANTS: Variant[] = [
  vStyles, vSizes, vStates, vIcons, vLayout, vIconOnly, vGradients, vPagination
];

export const VARIANTS_BY_ID = Object.fromEntries(
  VARIANTS.map(v => [v.id, v] as const)
) as Record<(typeof VARIANTS)[number]["id"], Variant>;
