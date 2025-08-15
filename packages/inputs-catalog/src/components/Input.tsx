import * as React from "react";

type Variant = "outline" | "filled" | "ghost";
type Size = "sm" | "md" | "lg";
type Status = "default" | "success" | "error";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  variant?: Variant;
  size?: Size;
  status?: Status;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  /** Si es "password", muestra toggle de visibilidad */
  reveal?: boolean;
}

function cx(...p: Array<string | false | undefined | null>) {
  return p.filter(Boolean).join(" ");
}

export default function GovInput({
  id,
  label,
  helperText,
  className,
  variant = "outline",
  size = "md",
  status = "default",
  leftIcon,
  rightIcon,
  fullWidth,
  type = "text",
  reveal = true,
  ...rest
}: InputProps) {
  const [show, setShow] = React.useState(false);
  const inputId = id ?? React.useId();
  const isPwd = type === "password";
  const actualType = isPwd && reveal ? (show ? "text" : "password") : type;

  return (
    <div className={cx("gov-field", fullWidth && "w-100")}>
      {label && (
        <label className="gov-label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={cx(
          "gov-input",
          `gov-input--${variant}`,
          `gov-input--${size}`,
          status !== "default" && `is-${status}`,
          className
        )}
      >
        {leftIcon && <span className="gov-input__icon" aria-hidden>{leftIcon}</span>}

        <input id={inputId} type={actualType} className="gov-input__control" {...rest} />

        {isPwd && reveal ? (
          <button
            type="button"
            className="gov-input__addon"
            aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
            onClick={() => setShow(s => !s)}
          >
            {show ? "🙈" : "👁️"}
          </button>
        ) : (
          rightIcon && <span className="gov-input__icon" aria-hidden>{rightIcon}</span>
        )}
      </div>

      {helperText && (
        <div className={cx("gov-help", status !== "default" && `is-${status}`)}>{helperText}</div>
      )}
    </div>
  );
}
