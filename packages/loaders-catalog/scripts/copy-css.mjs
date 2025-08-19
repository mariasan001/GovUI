import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const cssPath = new URL("../src/styles.css", import.meta.url);
const css = await readFile(cssPath);

const out = resolve(process.cwd(), "dist", "next.css");
await mkdir(dirname(out), { recursive: true });
await writeFile(out, css);

console.log("✅ CSS copiado a dist/next.css");
