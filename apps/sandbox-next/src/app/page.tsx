'use client';

import Link from 'next/link';
import { LibraryBig, ChevronRight, BookOpenText } from 'lucide-react';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.logo}><LibraryBig size={28} /></div>

        <h1 className={styles.headline}>GOVUI</h1>

        <p className={styles.sub}>
          Librería de componentes para <strong>Next.js</strong>, pensada para
          construir interfaces institucionales de forma rápida y consistente.
        </p>

        <div className={styles.actions}>
          <Link href="/componentes" className={styles.btnPrimary}>
            Ver componentes <ChevronRight />
          </Link>
          <Link href="/docs" className={styles.btnSecondary}>
            Documentación <BookOpenText />
          </Link>
        </div>

        <div className={styles.meta}>v0.1 • Monorepo • Dual export</div>
      </section>
    </main>
  );
}
