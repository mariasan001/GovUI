'use client';
import React from 'react';
import { icons as lucideIcons, type LucideProps } from 'lucide-react';
import { fold, kebab } from '../lib/text';
import { ES_SYNONYMS } from '../lib/synonyms.es';
import type { IconEntry } from '../types/ndex';

const expand = (t: string) => ES_SYNONYMS[fold(t)] ?? [fold(t)];
const matches = (label: string, query: string) => {
  const tokens = fold(query).split(/\s+/).filter(Boolean);
  if (!tokens.length) return true;
  return tokens.every(tok => expand(tok).some(o => label.includes(o)));
};

export function useIconSearch(query: string) {
  const [allIcons] = React.useState<IconEntry[]>(() => {
    const map = lucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
    return Object.entries(map)
      .map(([name, Comp]) => ({ name, label: kebab(name), Comp }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  return React.useMemo(
    () => (!query.trim() ? allIcons : allIcons.filter(({ label }) => matches(label, query))),
    [query, allIcons]
  );
}
