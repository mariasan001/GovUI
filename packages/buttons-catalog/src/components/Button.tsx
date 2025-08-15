'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';

type Variant = 'solid' | 'outline' | 'ghost' | 'soft' | 'link';
type Color   = 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
type Size    = 'sm' | 'md' | 'lg';
type Radius  = 'default' | 'pill' | 'square';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  radius?: Radius;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  /** Si hay icon y no hay children => botón sólo icono */
  icon?: React.ReactNode;
  loading?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}


export default function GovButton({
  variant = 'solid',
  size = 'md',
  radius = 'default',
  startIcon,
  endIcon,
  icon,
  loading = false,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  const isIconOnly = !!icon && !children;
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      aria-busy={loading || undefined}
      disabled={isDisabled}
      className={cx(
        'gov-btn',
        `gov-btn--${variant}`,
        size !== 'md' && `gov-btn--${size}`,
        radius !== 'default' && `gov-btn--${radius}`,
        isIconOnly && 'gov-btn--icon',
        loading && 'is-loading',
        className
      )}
      {...rest}
    >
      {/* Sólo-icono */}
      {isIconOnly ? (
        <span className="gov-btn__icon" aria-hidden>
          {icon}
        </span>
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
          {!loading && endIcon && (
            <span className="gov-btn__icon" aria-hidden>{endIcon}</span>
          )}
        </>
      )}
    </button>
  );
}
