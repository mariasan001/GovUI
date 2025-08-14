"use client";
import React from "react";
import { safeCopy } from "../lib/safeCopy";

export function useCopy() {
  const [ok, setOk] = React.useState(false);
  const copy = async (t: string) => {
    const done = await safeCopy(t);
    if (done) { setOk(true); setTimeout(() => setOk(false), 900); }
  };
  return { ok, copy };
}
