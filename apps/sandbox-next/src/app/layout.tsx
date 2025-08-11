import '@govui/design-tokens/css/tokens.css';
import '@govui/css-reset/reset.css';
import '@govui/css-core/core.css';
import '@govui/css-components/components.css';
import '@govui/themes/edomex.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-brand="edomex" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
