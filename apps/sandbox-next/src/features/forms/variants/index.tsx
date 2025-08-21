import { GROUPS, type Variant } from "./types";

const IMPORTS = `import { useState } from "react";
import "./forms.css";`;

const card = (id: string, label: string, inner: string, imports = IMPORTS) => ({
  id, label,
  tsx:
`${imports}

export default function Demo() {
  ${inner.includes("useState(") ? "" : "// "}
  return (
${inner.replace(/^/gm, "    ")}
  );
}
`,
});

// Previews server-safe (markup mudo)
const P = {
  Label: (t: string) => <label className="f-label">{t}</label>,
  Input: (ph = "Texto") => <input className="f-input" placeholder={ph} />,
  Btn: (t="Guardar") => <button className="f-btn">{t}</button>,
};

export const VARIANTS: Variant[] = [
  // BASICS
  {
    ...card("basic-text", "Texto + Email", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <label className="f-label" htmlFor="name">Nombre</label>
      <input id="name" className="f-input" placeholder="Tu nombre" />

      <label className="f-label" htmlFor="email">Email</label>
      <input id="email" type="email" className="f-input" placeholder="tu@correo.com" />

      <button className="f-btn" type="submit">Guardar</button>
    </form>
  );
}
`),
    groupId: "basics",
    preview: (
      <form className="f-form">
        {P.Label("Nombre")} {P.Input("Tu nombre")}
        {P.Label("Email")}  <input className="f-input" type="email" placeholder="tu@correo.com" />
        {P.Btn("Guardar")}
      </form>
    ),
  },

  {
    ...card("basic-textarea", "Textarea + contador (client)", `
${IMPORTS}
export default function Demo(){
  const [v,setV] = useState("");
  const max = 160;
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <label className="f-label" htmlFor="msg">Mensaje</label>
      <textarea id="msg" className="f-textarea" rows={4}
        value={v} onChange={e=>setV(e.target.value)} placeholder="Escribe tu mensaje..." />
      <div className="f-hint">{v.length}/{max} caracteres</div>
      <button className="f-btn" type="submit">Enviar</button>
    </form>
  );
}
`),
    groupId: "basics",
    preview: (
      <form className="f-form">
        {P.Label("Mensaje")} <textarea className="f-textarea" rows={4} placeholder="Escribe..." />
        <div className="f-hint">0/160 caracteres</div>
        {P.Btn("Enviar")}
      </form>
    ),
  },

  // VALIDATION
  {
    ...card("val-inline", "Inline (error/success)", `
${IMPORTS}
export default function Demo(){
  const [email,setEmail]=useState(""); const [touched,setTouched]=useState(false);
  const isValid = /.+@.+\\..+/.test(email);
  const showErr = touched && !isValid;
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <label className="f-label" htmlFor="email">Email</label>
      <input id="email" className={"f-input"+(showErr?" is-invalid":isValid?" is-valid":"")}
        type="email" value={email} onChange={e=>setEmail(e.target.value)}
        onBlur={()=>setTouched(true)} aria-invalid={showErr||undefined}
        aria-describedby="email-help email-err" placeholder="tu@correo.com" />
      <div id="email-help" className="f-hint">Usa tu correo institucional.</div>
      {showErr && <div id="email-err" className="f-error">Formato inválido</div>}
      <button className="f-btn">Continuar</button>
    </form>
  );
}
`),
    groupId: "validation",
    preview: (
      <form className="f-form">
        {P.Label("Email")}
        <input className="f-input is-invalid" placeholder="tu@correo.com" aria-invalid />
        <div className="f-hint">Usa tu correo institucional.</div>
        <div className="f-error">Formato inválido</div>
        {P.Btn("Continuar")}
      </form>
    ),
  },

  // LAYOUTS
  {
    ...card("layout-2col", "2 columnas responsive", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form f-grid-2" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <label className="f-label" htmlFor="name">Nombre</label>
        <input id="name" className="f-input" placeholder="Nombre" />
      </div>
      <div>
        <label className="f-label" htmlFor="lastname">Apellidos</label>
        <input id="lastname" className="f-input" placeholder="Apellidos" />
      </div>
      <div>
        <label className="f-label" htmlFor="street">Calle</label>
        <input id="street" className="f-input" placeholder="Calle y número" />
      </div>
      <div className="f-row">
        <div className="f-col">
          <label className="f-label" htmlFor="cp">CP</label>
          <input id="cp" className="f-input" placeholder="00000" />
        </div>
        <div className="f-col">
          <label className="f-label" htmlFor="city">Ciudad</label>
          <input id="city" className="f-input" placeholder="Ciudad" />
        </div>
      </div>
      <button className="f-btn">Guardar dirección</button>
    </form>
  );
}
`),
    groupId: "layout",
    preview: (
      <form className="f-form f-grid-2">
        <div>{P.Label("Nombre")} {P.Input("Nombre")}</div>
        <div>{P.Label("Apellidos")} {P.Input("Apellidos")}</div>
        <div>{P.Label("Calle")} {P.Input("Calle y número")}</div>
        <div className="f-row">
          <div className="f-col">{P.Label("CP")} {P.Input("00000")}</div>
          <div className="f-col">{P.Label("Ciudad")} {P.Input("Ciudad")}</div>
        </div>
        {P.Btn("Guardar dirección")}
      </form>
    ),
  },

  // COLLECTIONS
  {
    ...card("coll-check-radio", "Checkboxes + Radios", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <fieldset className="f-fieldset">
        <legend className="f-legend">Intereses</legend>
        <label className="f-check">
          <input type="checkbox" /> Noticias
        </label>
        <label className="f-check">
          <input type="checkbox" /> Eventos
        </label>
        <label className="f-check">
          <input type="checkbox" /> Ofertas
        </label>
      </fieldset>

      <fieldset className="f-fieldset">
        <legend className="f-legend">Preferencia</legend>
        <label className="f-radio">
          <input type="radio" name="pref" defaultChecked /> Email
        </label>
        <label className="f-radio">
          <input type="radio" name="pref" /> SMS
        </label>
      </fieldset>

      <button className="f-btn">Guardar</button>
    </form>
  );
}
`),
    groupId: "collections",
    preview: (
      <form className="f-form">
        <fieldset className="f-fieldset">
          <div className="f-legend">Intereses</div>
          <label className="f-check"><input type="checkbox" /> Noticias</label>
          <label className="f-check"><input type="checkbox" /> Eventos</label>
          <label className="f-check"><input type="checkbox" /> Ofertas</label>
        </fieldset>
        <fieldset className="f-fieldset">
          <div className="f-legend">Preferencia</div>
          <label className="f-radio"><input type="radio" /> Email</label>
          <label className="f-radio"><input type="radio" /> SMS</label>
        </fieldset>
        {P.Btn("Guardar")}
      </form>
    ),
  },

  {
    ...card("select-prefix", "Select + prefix/suffix", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <label className="f-label" htmlFor="country">País</label>
      <div className="f-input-wrap">
        <span className="f-prefix">🌎</span>
        <select id="country" className="f-input f-select" defaultValue="mx">
          <option value="mx">México</option>
          <option value="co">Colombia</option>
          <option value="ar">Argentina</option>
        </select>
        <span className="f-suffix">▼</span>
      </div>
      <button className="f-btn">Continuar</button>
    </form>
  );
}
`),
    groupId: "collections",
    preview: (
      <form className="f-form">
        {P.Label("País")}
        <div className="f-input-wrap">
          <span className="f-prefix">🌎</span>
          <select className="f-input f-select"><option>México</option></select>
          <span className="f-suffix">▼</span>
        </div>
        {P.Btn("Continuar")}
      </form>
    ),
  },

  // UPLOAD
  {
    ...card("upload-basic", "Subir archivo (drag & drop)", `
${IMPORTS}
export default function Demo(){
  const [file,setFile] = useState<File|null>(null);
  function onDrop(e: React.DragEvent){ e.preventDefault(); const f = e.dataTransfer.files?.[0]; if(f) setFile(f); }
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <label className="f-label">Archivo</label>
      <div className="f-drop" onDragOver={e=>e.preventDefault()} onDrop={onDrop}>
        <input type="file" onChange={e=>setFile(e.target.files?.[0]??null)} />
        <p>Arrastra y suelta o <span className="f-link">elige un archivo</span></p>
        {file && <div className="f-hint">Seleccionado: {file.name}</div>}
      </div>
      <button className="f-btn" disabled={!file}>Subir</button>
    </form>
  );
}
`),
    groupId: "upload",
    preview: (
      <form className="f-form">
        {P.Label("Archivo")}
        <div className="f-drop"><p>Arrastra y suelta o <span className="f-link">elige un archivo</span></p></div>
        <button className="f-btn" disabled>Subir</button>
      </form>
    ),
  },

  // DATETIME
  {
    ...card("date-range", "Rango de fechas", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form f-row" onSubmit={(e)=>e.preventDefault()}>
      <div className="f-col">
        <label className="f-label" htmlFor="from">Desde</label>
        <input id="from" type="date" className="f-input" />
      </div>
      <div className="f-col">
        <label className="f-label" htmlFor="to">Hasta</label>
        <input id="to" type="date" className="f-input" />
      </div>
      <button className="f-btn">Aplicar</button>
    </form>
  );
}
`),
    groupId: "datetime",
    preview: (
      <form className="f-form f-row">
        <div className="f-col">{P.Label("Desde")} <input className="f-input" type="date" /></div>
        <div className="f-col">{P.Label("Hasta")} <input className="f-input" type="date" /></div>
        {P.Btn("Aplicar")}
      </form>
    ),
  },

  // AUTH
  {
    ...card("auth-login", "Login compacto", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <label className="f-label" htmlFor="email">Email</label>
      <input id="email" type="email" className="f-input" placeholder="tu@correo.com" />
      <label className="f-label" htmlFor="pass">Contraseña</label>
      <input id="pass" type="password" className="f-input" placeholder="••••••••" />
      <label className="f-check f-inline"><input type="checkbox" /> Recuérdame</label>
      <button className="f-btn">Entrar</button>
    </form>
  );
}
`),
    groupId: "auth",
    preview: (
      <form className="f-form">
        {P.Label("Email")} <input className="f-input" placeholder="tu@correo.com" />
        {P.Label("Contraseña")} <input className="f-input" placeholder="••••••••" />
        <label className="f-check f-inline"><input type="checkbox" /> Recuérdame</label>
        {P.Btn("Entrar")}
      </form>
    ),
  },

  // ADVANCED
  {
    ...card("stepper", "Multi-step (2 pasos)", `
${IMPORTS}
export default function Demo(){
  const [step,setStep]=useState(1);
  return (
    <form className="f-form" onSubmit={(e)=>e.preventDefault()}>
      <div className="f-steps"><div className={step===1?"is-active":""}>1</div><div className={step===2?"is-active":""}>2</div></div>
      {step===1 && <>
        <label className="f-label">Nombre</label><input className="f-input" />
        <label className="f-label">Email</label><input type="email" className="f-input" />
        <button className="f-btn" type="button" onClick={()=>setStep(2)}>Siguiente</button>
      </>}
      {step===2 && <>
        <label className="f-label">Contraseña</label><input type="password" className="f-input" />
        <label className="f-label">Confirmar</label><input type="password" className="f-input" />
        <div className="f-row">
          <button className="f-btn f-ghost" type="button" onClick={()=>setStep(1)}>Atrás</button>
          <button className="f-btn">Crear cuenta</button>
        </div>
      </>}
    </form>
  );
}
`),
    groupId: "advanced",
    preview: (
      <form className="f-form">
        <div className="f-steps"><div className="is-active">1</div><div>2</div></div>
        {P.Label("Nombre")} {P.Input()}
        {P.Label("Email")} {P.Input("tu@correo.com")}
        {P.Btn("Siguiente")}
      </form>
    ),
  },

  {
    ...card("filterbar", "Barra de filtros (CRUD)", `
${IMPORTS}
export default function Demo(){
  return (
    <form className="f-form f-row" onSubmit={(e)=>e.preventDefault()}>
      <div className="f-input-wrap">
        <span className="f-prefix">🔎</span>
        <input className="f-input" placeholder="Buscar..." />
      </div>
      <select className="f-input f-select" defaultValue="">
        <option value="">Estado</option>
        <option value="act">Activo</option>
        <option value="ina">Inactivo</option>
      </select>
      <input className="f-input" type="date" />
      <button className="f-btn">Aplicar</button>
    </form>
  );
}
`),
    groupId: "advanced",
    preview: (
      <form className="f-form f-row">
        <div className="f-input-wrap"><span className="f-prefix">🔎</span><input className="f-input" placeholder="Buscar..." /></div>
        <select className="f-input f-select"><option>Estado</option></select>
        <input className="f-input" type="date" />
        {P.Btn("Aplicar")}
      </form>
    ),
  },
];
