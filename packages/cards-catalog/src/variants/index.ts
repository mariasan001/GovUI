import type { Variant } from "./types";
export type { Variant } from "./types";
export { GROUPS } from "./types";

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
  appInfoVariant
];

export const VARIANTS_BY_ID = Object.fromEntries(
  VARIANTS.map(v => [v.id, v] as const)
) as Record<(typeof VARIANTS)[number]["id"], Variant>;

export {
  messageVariant,
  inboxWelcomeVariant,
  articleFeatureVariant,
  articleCompactVariant,
  webinarVariant,
  appInfoVariant
};
