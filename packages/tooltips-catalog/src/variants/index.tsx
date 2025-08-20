import { GROUPS, type Variant } from "./types";

// util para snippets (import + css)
const IMPORTS = `import "./tooltips.css";`;

const Card = (id: string, label: string, inner: string) => ({
  id,
  label,
  tsx:
`${IMPORTS}

export default function Demo() {
  return (
${inner.replace(/^/gm, "    ")}
  );
}
`,
});

export const VARIANTS: Variant[] = [
  // === BÁSICOS ===
  {
    ...Card(
      "basic-1",
      "Básico (hover/focus)",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-basic-1">Guardar</button>
  <div className="tooltip" id="tt-basic-1" role="tooltip">Guardar cambios</div>
</div>`
    ),
    groupId: "basic",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-basic-1">Guardar</button>
        <div className="tooltip" id="tt-basic-1" role="tooltip">Guardar cambios</div>
      </div>
    ),
  },
  {
    ...Card(
      "basic-2",
      "Con icono",
      `<div className="t-wrap" data-placement="top">
  <a className="t-anchor" aria-describedby="tt-basic-2" href="#0" aria-label="Favorito">★</a>
  <div className="tooltip" id="tt-basic-2" role="tooltip">Añadir a favoritos</div>
</div>`
    ),
    groupId: "basic",
    preview: (
      <div className="t-wrap" data-placement="top">
        <a className="t-anchor" aria-describedby="tt-basic-2" href="#0" aria-label="Favorito">★</a>
        <div className="tooltip" id="tt-basic-2" role="tooltip">Añadir a favoritos</div>
      </div>
    ),
  },

  // === POSICIONES ===
  {
    ...Card(
      "pos-top",
      "Arriba (top)",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-top">Top</button>
  <div className="tooltip" id="tt-top" role="tooltip">Se muestra arriba</div>
</div>`
    ),
    groupId: "placement",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-top">Top</button>
        <div className="tooltip" id="tt-top" role="tooltip">Se muestra arriba</div>
      </div>
    ),
  },
  {
    ...Card(
      "pos-right",
      "Derecha (right)",
      `<div className="t-wrap" data-placement="right">
  <button className="t-anchor" aria-describedby="tt-right">Right</button>
  <div className="tooltip" id="tt-right" role="tooltip">A la derecha</div>
</div>`
    ),
    groupId: "placement",
    preview: (
      <div className="t-wrap" data-placement="right">
        <button className="t-anchor" aria-describedby="tt-right">Right</button>
        <div className="tooltip" id="tt-right" role="tooltip">A la derecha</div>
      </div>
    ),
  },
  {
    ...Card(
      "pos-bottom",
      "Abajo (bottom)",
      `<div className="t-wrap" data-placement="bottom">
  <button className="t-anchor" aria-describedby="tt-bottom">Bottom</button>
  <div className="tooltip" id="tt-bottom" role="tooltip">Abajo del trigger</div>
</div>`
    ),
    groupId: "placement",
    preview: (
      <div className="t-wrap" data-placement="bottom">
        <button className="t-anchor" aria-describedby="tt-bottom">Bottom</button>
        <div className="tooltip" id="tt-bottom" role="tooltip">Abajo del trigger</div>
      </div>
    ),
  },
  {
    ...Card(
      "pos-left",
      "Izquierda (left)",
      `<div className="t-wrap" data-placement="left">
  <button className="t-anchor" aria-describedby="tt-left">Left</button>
  <div className="tooltip" id="tt-left" role="tooltip">A la izquierda</div>
</div>`
    ),
    groupId: "placement",
    preview: (
      <div className="t-wrap" data-placement="left">
        <button className="t-anchor" aria-describedby="tt-left">Left</button>
        <div className="tooltip" id="tt-left" role="tooltip">A la izquierda</div>
      </div>
    ),
  },

  // === ESTADOS / COLORES ===
  {
    ...Card(
      "status-info",
      "Info",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-info">i</button>
  <div className="tooltip" id="tt-info" role="tooltip" data-variant="info">Información útil</div>
</div>`
    ),
    groupId: "status",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-info">i</button>
        <div className="tooltip" id="tt-info" role="tooltip" data-variant="info">f Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
      </div>
    ),
  },
  {
    ...Card(
      "status-success",
      "Success",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-ok">✓</button>
  <div className="tooltip" id="tt-ok" role="tooltip" data-variant="success">Listo para enviar</div>
</div>`
    ),
    groupId: "status",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-ok">✓</button>
        <div className="tooltip" id="tt-ok" role="tooltip" data-variant="success">Listo para enviar</div>
      </div>
    ),
  },
  {
    ...Card(
      "status-warning",
      "Warning",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-warn">!</button>
  <div className="tooltip" id="tt-warn" role="tooltip" data-variant="warning">Revisa los campos requeridos</div>
</div>`
    ),
    groupId: "status",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-warn">!</button>
        <div className="tooltip" id="tt-warn" role="tooltip" data-variant="warning">Revisa los campos requeridos</div>
      </div>
    ),
  },
  {
    ...Card(
      "status-danger",
      "Danger",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-danger">✕</button>
  <div className="tooltip" id="tt-danger" role="tooltip" data-variant="danger">Error al guardar</div>
</div>`
    ),
    groupId: "status",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-danger">✕</button>
        <div className="tooltip" id="tt-danger" role="tooltip" data-variant="danger">Error al guardar</div>
      </div>
    ),
  },

  // === RICOS ===
  {
    ...Card(
      "rich-kbd",
      "Con atajo (kbd)",
      `<div className="t-wrap" data-placement="top">
  <button className="t-anchor" aria-describedby="tt-kbd">Buscar</button>
  <div className="tooltip" id="tt-kbd" role="tooltip">
    Presiona <kbd>Ctrl</kbd> + <kbd>K</kbd> para buscar
  </div>
</div>`
    ),
    groupId: "rich",
    preview: (
      <div className="t-wrap" data-placement="top">
        <button className="t-anchor" aria-describedby="tt-kbd">Buscar</button>
        <div className="tooltip" id="tt-kbd" role="tooltip">
          Presiona <kbd>Ctrl</kbd> + <kbd>K</kbd> para buscar
        </div>
      </div>
    ),
  },
  {
    ...Card(
      "rich-avatar",
      "Con avatar",
      `<div className="t-wrap" data-placement="right">
  <button className="t-anchor" aria-describedby="tt-ava">@ana</button>
  <div className="tooltip" id="tt-ava" role="tooltip" data-rich="true">
    <img className="t-ava" src="/img/avatar.jpg" alt="" />
    <div>
      <strong>Ana López</strong><br/>
      Product Manager
    </div>
  </div>
</div>`
    ),
    groupId: "rich",
    preview: (
      <div className="t-wrap" data-placement="right">
        <button className="t-anchor" aria-describedby="tt-ava">@ana</button>
        <div className="tooltip" id="tt-ava" role="tooltip" data-rich="true">
          <img className="t-ava" src="/img/avatar.jpg" alt="" />
          <div>
            <strong>Ana López</strong><br/>
            Product Manager
          </div>
        </div>
      </div>
    ),
  },

  // === AVANZADOS ===
  {
    ...Card(
      "adv-delay",
      "Con delay suave",
      `<div className="t-wrap" data-placement="bottom" data-delay="true">
  <button className="t-anchor" aria-describedby="tt-delay">Delay</button>
  <div className="tooltip" id="tt-delay" role="tooltip">Aparece con un pequeño retardo</div>
</div>`
    ),
    groupId: "advanced",
    preview: (
      <div className="t-wrap" data-placement="bottom" data-delay="true">
        <button className="t-anchor" aria-describedby="tt-delay">Delay</button>
        <div className="tooltip" id="tt-delay" role="tooltip">Aparece con un pequeño retardo</div>
      </div>
    ),
  },
  {
    ...Card(
      "adv-always",
      "Siempre visible (demo)",
      `<div className="t-wrap" data-placement="top" data-open="true">
  <button className="t-anchor" aria-describedby="tt-open">Siempre</button>
  <div className="tooltip" id="tt-open" role="tooltip">Tooltip siempre abierto (demo)</div>
</div>`
    ),
    groupId: "advanced",
    preview: (
      <div className="t-wrap" data-placement="top" data-open="true">
        <button className="t-anchor" aria-describedby="tt-open">Siempre</button>
        <div className="tooltip" id="tt-open" role="tooltip">Tooltip siempre abierto (demo)</div>
      </div>
    ),
  },
];
