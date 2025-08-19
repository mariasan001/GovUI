"use client";

export { default as LoadersShowcase } from "./components/LoadersShowcase.client";
export { default as PageLoader } from "./components/PageLoader.client";

// Importa el CSS aquí para que tsup emita `dist/next.css`
import "./components/loaders.css";
