// packages/cards-catalog/src/hook/useCopy.ts
'use client';
import { useCallback, useState } from "react";
import { copyToClipboard } from "../lib/copy";

export default function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (txt: string) => {
    const ok = await copyToClipboard(txt);
    setCopied(ok);
    return ok;
  }, []);
  return { copied, copy };
}
