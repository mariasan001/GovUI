"use client";
import dynamic from "next/dynamic";

const LoginShowcase = dynamic(
  () => import("@govui/login-catalog/next").then(m => m.LoginShowcase),
  { ssr: false, loading: () => <div className="demo-card">Cargando login…</div> }
);

export default function LoginLoader() {
  return <LoginShowcase />;
}
