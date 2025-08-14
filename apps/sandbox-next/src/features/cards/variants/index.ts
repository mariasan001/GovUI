// variants/index.ts
import type { Variant } from "./types";
import { messageVariant } from "./message";
import { inboxWelcomeVariant } from "./WelcomeMessageCard";
import { articleFeatureVariant } from "./ArticleFeatureCard";
import { articleCompactVariant } from "./ArticleCompactCard";
import { webinarVariant } from "./WebinarCard";
import { appInfoVariant } from "./AppInfoCard";

export const VARIANTS: Variant[] = [
  messageVariant,
  inboxWelcomeVariant,
  articleFeatureVariant,
  articleCompactVariant,
  webinarVariant,
  appInfoVariant,
];

// (opcional) acceso directo por id
export const VARIANTS_BY_ID: Record<string, Variant> = Object.fromEntries(
  VARIANTS.map((v) => [v.id, v] as const)
);
