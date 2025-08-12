import React from "react";
import { icons as lucideIcons } from "lucide-react";
import { fold, kebab } from "../lib/text";
import { ES_SYNONYMS } from "../lib/synonyms.es";
import type { IconEntry } from "../types";
import type { LucideProps } from "lucide-react";

const ALL_ICONS: IconEntry[] =
  (Object.entries(lucideIcons) as [string, React.ComponentType<LucideProps>][])

    .filter(([name]) => /^[A-Z]/.test(name)) 
    .map(([name, Comp]) => ({ name, label: kebab(name), Comp }))
    .sort((a, b) => a.name.localeCompare(b.name));

const expand = (t: string) => ES_SYNONYMS[fold(t)] ?? [fold(t)];

const matches = (label: string, query: string) => {
  const tokens = fold(query).split(/\s+/).filter(Boolean);
  if (!tokens.length) return true;
  return tokens.every(tok => expand(tok).some(o => label.includes(o)));
};

export function useIconSearch(query: string) {
  return React.useMemo(
    () => (!query.trim() ? ALL_ICONS : ALL_ICONS.filter(({ label }) => matches(label, query))),
    [query]
  );
}
