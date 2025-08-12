import type { LucideProps } from "lucide-react";

export type { LucideProps };

export interface IconEntry {
  name: string;   // PascalCase
  label: string;  // kebab-case
  Comp: React.ComponentType<LucideProps>;
}
