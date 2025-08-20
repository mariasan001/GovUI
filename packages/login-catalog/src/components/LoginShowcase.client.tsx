"use client";

import { useState } from "react";
import Image from "next/image";
import "./login.css";
import { Eye, EyeOff, Lock } from "lucide-react";

/** Snippet listo para pegar en cualquier proyecto (incluye imports) */
const LOGIN_TSX = `\"use client\";
import { useState } from "react";
import Image from "next/image";
import "./login.css";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <section className="login-shell" aria-label="Inicio de sesión">
      <div className="login-left">
        <div className="login-left__curve" aria-hidden="true" />
        <div className="login-left__content">
          <h2 className="login-left__title">¡Bienvenido de nuevo! 👋</h2>
          <p className="login-left__subtitle">
            Inicia sesión para acceder a tu panel, administrar tus actividades y seguir
            avanzando en tus proyectos. Siempre estamos aquí para apoyarte.
          </p>
        </div>
      </div>

      <div className="login-right">
        <header className="login-brand">
          <Image src="/img/escudo.png" alt="Escudo Estado de México" width={100} height={40} priority />
        </header>

        <h1 className="login-title">Iniciar Sesión</h1>
        <p className="login-desc">
          Accede con tu cuenta para continuar. Si tienes algún problema, no dudes en
          contactar al soporte.
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label className="login-label" htmlFor="usuario">Usuario</label>
          <input className="login-input" id="usuario" name="usuario" type="text" placeholder="tu.usuario" autoComplete="username" />

          <label className="login-label" htmlFor="password">Contraseña</label>
          <div className="input-group">
            <span className="input-icon" aria-hidden="true"><Lock size={18} /></span>
            <input className="login-input input-with-icon" id="password" name="password" type={show ? "text" : "password"} placeholder="••••••••" autoComplete="current-password" />
            <button type="button" className="icon-btn" aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"} aria-pressed={show} onClick={() => setShow(v => !v)}>
              {show ? <EyeOff size={18} /> : <Eye size={18} />} <span className="sr-only">{show ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
            </button>
          </div>

          <div className="decor-cinta" aria-hidden="true" />
          <button className="btn-primary" type="submit">Ingresar al Sistema</button>
          <button className="link-muted" type="button">solicitar acceso</button>
        </form>
      </div>
    </section>
  );
}
`;

export default function LoginShowcase() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(LOGIN_TSX);
    } catch {
      // Fallback (Safari/HTTP)
      const ta = document.createElement("textarea");
      ta.value = LOGIN_TSX;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <section className="login-shell" aria-label="Inicio de sesión">
      {/* Toolbar flotante */}
      <div className="login-toolbar">
        <button className="copy-btn" onClick={handleCopy} aria-live="polite">
          {copied ? "¡Copiado ✓!" : "Copiar .tsx"}
        </button>
      </div>

      {/* IZQUIERDA */}
      <div className="login-left">
        <div className="login-left__curve" aria-hidden="true" />
        <div className="login-left__content">
          <h2 className="login-left__title">¡Bienvenido de nuevo! 👋</h2>
          <p className="login-left__subtitle">
            Inicia sesión para acceder a tu panel, administrar tus actividades y seguir
            avanzando en tus proyectos. Siempre estamos aquí para apoyarte.
          </p>
        </div>
      </div>

      {/* DERECHA */}
      <div className="login-right">
        <header className="login-brand">
          <Image
            src="/img/escudo.png"
            alt="Escudo Estado de México"
            width={100}
            height={40}
            priority
          />
        </header>

        <h1 className="login-title">Iniciar Sesión</h1>
        <p className="login-desc">
          Accede con tu cuenta para continuar. Si tienes algún problema, no dudes en
          contactar al soporte.
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label className="login-label" htmlFor="usuario">Usuario</label>
          <input
            className="login-input"
            id="usuario"
            name="usuario"
            type="text"
            placeholder="tu.usuario"
            autoComplete="username"
          />

          <label className="login-label" htmlFor="password">Contraseña</label>
          <div className="input-group">
            <span className="input-icon" aria-hidden="true">
              <Lock size={18} />
            </span>

            <input
              className="login-input input-with-icon"
              id="password"
              name="password"
              type={show ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <button
              type="button"
              className="icon-btn"
              aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
              aria-pressed={show}
              onClick={() => setShow(v => !v)}
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
              <span className="sr-only">{show ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
            </button>
          </div>

          <div className="decor-cinta" aria-hidden="true" />
          <button className="btn-primary" type="submit">Ingresar al Sistema</button>
          <button className="link-muted" type="button">solicitar acceso</button>
        </form>
      </div>
    </section>
  );
}
