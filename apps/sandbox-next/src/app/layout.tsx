import '@govui/design-tokens/css/tokens.css';
import '@govui/css-reset/reset.css';
import '@govui/css-core/core.css';
import '@govui/css-components/components.css';
import '@govui/themes/edomex.css';
import './globals.css';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Toaster } from 'sonner';

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="es" data-brand="edomex" data-theme="light">
      <body>
        <header className="gov-topbar">
          <div className="u-container gov-topbar__inner">
            <div className="gov-topbar__brand">v0.1 • GovUI</div>
            <nav className="gov-topbar__nav" aria-label="Principal">
              <Link className="gov-topbar__link" href="/component">
                <svg className="gov-topbar__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Componentes
              </Link>
              <Link className="gov-topbar__link" href="/docs">
                <svg className="gov-topbar__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 19h16M7 19V5h10v14" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Documentación
              </Link>
              <Link className="gov-topbar__link" href="/descarga">
                <svg className="gov-topbar__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
                Descarga
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <Toaster richColors position="top-right" closeButton expand duration={3500} theme="light" />
      </body>
    </html>
  );
}
