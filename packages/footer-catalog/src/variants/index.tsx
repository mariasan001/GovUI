"use client";

import type { Variante } from "./types";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Globe } from "lucide-react";

/* ====== 1. Básico oscuro ====== */
function FooterBasicDark(){
  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div>© {new Date().getFullYear()} Gobierno del Estado</div>
          <nav aria-label="Legal">
            <a href="#">Privacidad</a> · <a href="#">Términos</a> · <a href="#">Contacto</a>
          </nav>
        </div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}
const FooterBasicDarkTSX =
`export default function FooterBasicDark(){
  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div>© ${new Date().getFullYear()} Gobierno del Estado</div>
          <nav aria-label="Legal">
            <a href="#">Privacidad</a> · <a href="#">Términos</a> · <a href="#">Contacto</a>
          </nav>
        </div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}`;

/* ====== 2. Básico claro ====== */
function FooterBasicLight(){
  return (
    <footer className="footer footer--light" role="contentinfo">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div>© {new Date().getFullYear()} Gobierno del Estado</div>
          <nav className="f-legal is-dark" aria-label="Legal">
            <a href="#">Privacidad</a> · <a href="#">Términos</a> · <a href="#">Contacto</a>
          </nav>
        </div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}
const FooterBasicLightTSX =
`export default function FooterBasicLight(){
  return (
    <footer className="footer footer--light" role="contentinfo">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div>© ${new Date().getFullYear()} Gobierno del Estado</div>
          <nav aria-label="Legal" style={{color:"#4b5563"}}>
            <a href="#">Privacidad</a> · <a href="#">Términos</a> · <a href="#">Contacto</a>
          </nav>
        </div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}`;

/* ====== 3. Sticky (tarjeta demo) ====== */
function FooterSticky(){
  return (
    <footer className="footer footer--brand footer--sticky">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div>Portal de Servicios</div>
          <div className="kpis">
            <div className="kpi">Disponibilidad: 99.95%</div>
            <div className="kpi">Tiempo de respuesta: 120ms</div>
          </div>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">© {new Date().getFullYear()} Gobierno · <a href="#">Aviso de privacidad</a></div>
      </div>
    </footer>
  );
}
const FooterStickyTSX =
`export default function FooterSticky(){
  return (
    <footer className="footer footer--brand footer--sticky">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div>Portal de Servicios</div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <div className="kpi">Disponibilidad: 99.95%</div>
            <div className="kpi">Tiempo de respuesta: 120ms</div>
          </div>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">© ${new Date().getFullYear()} Gobierno · <a href="#">Aviso de privacidad</a></div>
      </div>
    </footer>
  );
}`;

/* ====== 4. Navegación simple ====== */
function FooterNavSimple(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <strong>Gobierno del Estado</strong>
          <nav aria-label="Secciones">
            <a href="#">Trámites</a> · <a href="#">Transparencia</a> · <a href="#">Contactos</a>
          </nav>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">© {new Date().getFullYear()} · <a href="#">Privacidad</a> · <a href="#">Términos</a></div>
      </div>
    </footer>
  );
}
const FooterNavSimpleTSX =
`export default function FooterNavSimple(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <strong>Gobierno del Estado</strong>
          <nav aria-label="Secciones">
            <a href="#">Trámites</a> · <a href="#">Transparencia</a> · <a href="#">Contactos</a>
          </nav>
        </div>
        <div className="f-sep"/><div className="f-legal">© ${new Date().getFullYear()} · <a href="#">Privacidad</a> · <a href="#">Términos</a></div>
      </div>
    </footer>
  );
}`;

/* ====== 5. 3 columnas ====== */
function Footer3Cols(){
  return (
    <footer className="footer footer--light">
      <div className="wrap">
        <div className="f-cols">
          <div className="f-col">
            <strong>Dependencias</strong>
            <a href="#">Educación</a><a href="#">Salud</a><a href="#">Seguridad</a>
          </div>
          <div className="f-col">
            <strong>Servicios</strong>
            <a href="#">Citas</a><a href="#">Pagos</a><a href="#">Verificación</a>
          </div>
          <div className="f-col">
            <strong>Ayuda</strong>
            <a href="#">Preguntas</a><a href="#">Soporte</a><a href="#">Accesibilidad</a>
          </div>
        </div>
        <div className="f-sep is-light"/>
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-legal is-dark">© {new Date().getFullYear()} Gobierno</div>
          <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
        </div>
      </div>
    </footer>
  );
}
const Footer3ColsTSX =
`export default function Footer3Cols(){
  return (
    <footer className="footer footer--light">
      <div className="wrap">
        <div className="f-cols">
          <div className="f-col"><strong>Dependencias</strong><a href="#">Educación</a><a href="#">Salud</a><a href="#">Seguridad</a></div>
          <div className="f-col"><strong>Servicios</strong><a href="#">Citas</a><a href="#">Pagos</a><a href="#">Verificación</a></div>
          <div className="f-col"><strong>Ayuda</strong><a href="#">Preguntas</a><a href="#">Soporte</a><a href="#">Accesibilidad</a></div>
        </div>
        <div className="f-sep is-light"/><div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div style={{fontSize:12,color:"#4b5563"}}>© ${new Date().getFullYear()} Gobierno</div>
          <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
        </div>
      </div>
    </footer>
  );
}`;

/* ====== 6. Mega con 4 columnas ====== */
function FooterMega(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-cols" style={{gridTemplateColumns:"2fr 1fr 1fr 1fr"}}>
          <div className="f-col">
            <strong>Portal Estatal</strong>
            <p style={{opacity:.85,maxWidth:"46ch"}}>Información y servicios para la ciudadanía. Trámites, programas y comunicación oficial.</p>
            <div className="social" aria-label="Redes sociales">
              <a href="#" aria-label="Facebook"><Facebook size={16}/></a>
              <a href="#" aria-label="X / Twitter"><Twitter size={16}/></a>
              <a href="#" aria-label="Instagram"><Instagram size={16}/></a>
              <a href="#" aria-label="YouTube"><Youtube size={16}/></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16}/></a>
            </div>
          </div>
          <div className="f-col"><strong>Transparencia</strong><a href="#">Infomex</a><a href="#">Obligaciones</a><a href="#">POG</a></div>
          <div className="f-col"><strong>Participación</strong><a href="#">Denuncias</a><a href="#">Encuestas</a><a href="#">Foros</a></div>
          <div className="f-col"><strong>Contacto</strong><a href="#">Directorio</a><a href="#">Oficinas</a><a href="#">Soporte</a></div>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">© {new Date().getFullYear()} Gobierno · <a href="#">Privacidad</a> · <a href="#">Términos</a></div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}
const FooterMegaTSX =
`import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
export default function FooterMega(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-cols" style={{gridTemplateColumns:"2fr 1fr 1fr 1fr"}}>
          <div className="f-col">
            <strong>Portal Estatal</strong>
            <p style={{opacity:.85,maxWidth:"46ch"}}>Información y servicios para la ciudadanía. Trámites, programas y comunicación oficial.</p>
            <div className="social" aria-label="Redes sociales">
              <a href="#" aria-label="Facebook"><Facebook size={16}/></a>
              <a href="#" aria-label="X / Twitter"><Twitter size={16}/></a>
              <a href="#" aria-label="Instagram"><Instagram size={16}/></a>
              <a href="#" aria-label="YouTube"><Youtube size={16}/></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16}/></a>
            </div>
          </div>
          <div className="f-col"><strong>Transparencia</strong><a href="#">Infomex</a><a href="#">Obligaciones</a><a href="#">POG</a></div>
          <div className="f-col"><strong>Participación</strong><a href="#">Denuncias</a><a href="#">Encuestas</a><a href="#">Foros</a></div>
          <div className="f-col"><strong>Contacto</strong><a href="#">Directorio</a><a href="#">Oficinas</a><a href="#">Soporte</a></div>
        </div>
        <div className="f-sep"/><div className="f-legal">© ${new Date().getFullYear()} Gobierno · <a href="#">Privacidad</a> · <a href="#">Términos</a></div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}`;

/* ====== 7. Newsletter CTA ====== */
function FooterNewsletter(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div>
            <strong>Suscríbete a novedades</strong>
            <div style={{fontSize:12,opacity:.9}}>Boletines mensuales sobre servicios y convocatorias.</div>
          </div>
          <form className="news" aria-label="Suscripción">
            <input type="email" placeholder="tu@correo.mx" aria-label="Correo electrónico"/>
            <button type="button">Suscribirme</button>
          </form>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">© {new Date().getFullYear()} Gobierno</div>
      </div>
    </footer>
  );
}
const FooterNewsletterTSX =
`export default function FooterNewsletter(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div><strong>Suscríbete a novedades</strong><div style={{fontSize:12,opacity:.9}}>Boletines mensuales sobre servicios y convocatorias.</div></div>
          <form className="news" aria-label="Suscripción">
            <input type="email" placeholder="tu@correo.mx" aria-label="Correo electrónico"/><button type="button">Suscribirme</button>
          </form>
        </div>
        <div className="f-sep"/><div className="f-legal">© ${new Date().getFullYear()} Gobierno</div>
      </div>
    </footer>
  );
}`;

/* ====== 8. Selector de idioma ====== */
function FooterLang(){
  return (
    <footer className="footer footer--light">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-legal is-dark">© {new Date().getFullYear()} Gobierno</div>
          <div className="f-row">
            <Globe size={16} aria-hidden/>
            <select aria-label="Idioma" style={{border:"1px solid var(--border)",borderRadius:10,height:32,padding:"0 8px",background:"#fff"}}>
              <option>Español</option>
              <option>English</option>
            </select>
          </div>
        </div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}
const FooterLangTSX =
`import { Globe } from "lucide-react";
export default function FooterLang(){
  return (
    <footer className="footer footer--light">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div style={{fontSize:12,color:"#4b5563"}}>© ${new Date().getFullYear()} Gobierno</div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <Globe size={16} aria-hidden/><select aria-label="Idioma" style={{border:"1px solid var(--border)",borderRadius:10,height:32,padding:"0 8px",background:"#fff"}}>
              <option>Español</option><option>English</option>
            </select>
          </div>
        </div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}`;

/* ====== 9. Split legal + nav ====== */
function FooterSplit(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <nav aria-label="Secciones">
            <a href="#">Inicio</a> · <a href="#">Gobierno</a> · <a href="#">Noticias</a> · <a href="#">Contacto</a>
          </nav>
          <div>© {new Date().getFullYear()}</div>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">Privacidad · Términos · Accesibilidad · Mapa de sitio</div>
      </div>
    </footer>
  );
}
const FooterSplitTSX =
`export default function FooterSplit(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <nav aria-label="Secciones"><a href="#">Inicio</a> · <a href="#">Gobierno</a> · <a href="#">Noticias</a> · <a href="#">Contacto</a></nav>
          <div>© ${new Date().getFullYear()}</div>
        </div>
        <div className="f-sep"/><div className="f-legal">Privacidad · Términos · Accesibilidad · Mapa de sitio</div>
      </div>
    </footer>
  );
}`;

/* ====== 10. GOV: franja institucional ====== */
function FooterGovStrip(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-row" style={{gap:10}}>
            <img src="/img/escudo.png" alt="Escudo" style={{height:34}}/>
            <strong>Gobierno del Estado de México</strong>
          </div>
          <div className="kpis">
            <div className="kpi">Transparencia</div>
            <div className="kpi">Datos abiertos</div>
          </div>
        </div>
        <div className="f-sep"/>
        <div className="f-legal">© {new Date().getFullYear()} · <a href="#">Aviso de privacidad</a></div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}
const FooterGovStripTSX =
`export default function FooterGovStrip(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <img src="/img/escudo.png" alt="Escudo" style={{height:34}}/><strong>Gobierno del Estado de México</strong>
          </div>
          <div className="kpis"><div className="kpi">Transparencia</div><div className="kpi">Datos abiertos</div></div>
        </div>
        <div className="f-sep"/><div className="f-legal">© ${new Date().getFullYear()} · <a href="#">Aviso de privacidad</a></div>
        <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
      </div>
    </footer>
  );
}`;

/* ====== 11. GOV: 2 filas (nav + legal) ====== */
function FooterGovTwoRows(){
  return (
    <footer className="footer footer--light">
      <div className="wrap">
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-row" style={{gap:10}}>
            <img src="/img/escudo.png" alt="Escudo" style={{height:28}}/>
            <strong>Gobierno del Estado</strong>
          </div>
          <nav aria-label="Secciones" className="f-legal is-dark">
            <a href="#">Trámites</a> · <a href="#">Servicios</a> · <a href="#">Programas</a>
          </nav>
        </div>
        <div className="f-sep is-light"/>
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-legal is-dark">© {new Date().getFullYear()} · <a href="#">Privacidad</a> · <a href="#">Términos</a></div>
          <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
        </div>
      </div>
    </footer>
  );
}
const FooterGovTwoRowsTSX =
`export default function FooterGovTwoRows(){
  return (
    <footer className="footer footer--light">
      <div className="wrap">
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <img src="/img/escudo.png" alt="Escudo" style={{height:28}}/><strong>Gobierno del Estado</strong>
          </div>
          <nav aria-label="Secciones" style={{fontSize:12,color:"#4b5563"}}>
            <a href="#">Trámites</a> · <a href="#">Servicios</a> · <a href="#">Programas</a>
          </nav>
        </div>
        <div className="f-sep is-light"/>
        <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div style={{fontSize:12,color:"#4b5563"}}>© ${new Date().getFullYear()} · <a href="#">Privacidad</a> · <a href="#">Términos</a></div>
          <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
        </div>
      </div>
    </footer>
  );
}`;

/* ====== 12. GOV: Mega + social + newsletter ====== */
function FooterGovMegaFull(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div className="f-cols" style={{gridTemplateColumns:"2fr 1fr 1fr 1fr"}}>
          <div className="f-col">
            <div className="f-row" style={{gap:10}}>
              <img src="/img/escudo.png" alt="Escudo" style={{height:38}}/>
              <div>
                <strong>Gobierno del Estado de México</strong>
                <div style={{fontSize:12,opacity:.9}}>Portal oficial de servicios y trámites.</div>
              </div>
            </div>
            <form className="news" aria-label="Boletín" style={{marginTop:10}}>
              <input type="email" placeholder="tu@correo.mx" aria-label="Correo"/>
              <button type="button">Suscribirme</button>
            </form>
          </div>
          <div className="f-col"><strong>Trámites</strong><a href="#">Citas</a><a href="#">Pagos</a><a href="#">Licencias</a></div>
          <div className="f-col"><strong>Programas</strong><a href="#">Educación</a><a href="#">Salud</a><a href="#">Vivienda</a></div>
          <div className="f-col">
            <strong>Síguenos</strong>
            <div className="social" style={{marginTop:6}}>
              <a href="#" aria-label="Facebook"><Facebook size={16}/></a>
              <a href="#" aria-label="X / Twitter"><Twitter size={16}/></a>
              <a href="#" aria-label="Instagram"><Instagram size={16}/></a>
              <a href="#" aria-label="YouTube"><Youtube size={16}/></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16}/></a>
            </div>
          </div>
        </div>
        <div className="f-sep"/>
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-legal">© {new Date().getFullYear()} · Privacidad · Términos · Accesibilidad</div>
          <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
        </div>
      </div>
    </footer>
  );
}
const FooterGovMegaFullTSX =
`import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
export default function FooterGovMegaFull(){
  return (
    <footer className="footer footer--brand">
      <div className="wrap">
        <div className="f-cols" style={{gridTemplateColumns:"2fr 1fr 1fr 1fr"}}>
          <div className="f-col">
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <img src="/img/escudo.png" alt="Escudo" style={{height:38}}/>
              <div><strong>Gobierno del Estado de México</strong><div style={{fontSize:12,opacity:.9}}>Portal oficial de servicios y trámites.</div></div>
            </div>
            <form className="news" aria-label="Boletín" style={{marginTop:10}}>
              <input type="email" placeholder="tu@correo.mx" aria-label="Correo"/><button type="button">Suscribirme</button>
            </form>
          </div>
          <div className="f-col"><strong>Trámites</strong><a href="#">Citas</a><a href="#">Pagos</a><a href="#">Licencias</a></div>
          <div className="f-col"><strong>Programas</strong><a href="#">Educación</a><a href="#">Salud</a><a href="#">Vivienda</a></div>
          <div className="f-col"><strong>Síguenos</strong>
            <div className="social" style={{marginTop:6}}>
              <a href="#" aria-label="Facebook"><Facebook size={16}/></a>
              <a href="#" aria-label="X / Twitter"><Twitter size={16}/></a>
              <a href="#" aria-label="Instagram"><Instagram size={16}/></a>
              <a href="#" aria-label="YouTube"><Youtube size={16}/></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16}/></a>
            </div>
          </div>
        </div>
        <div className="f-sep"/><div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
          <div className="f-legal">© ${new Date().getFullYear()} · Privacidad · Términos · Accesibilidad</div>
          <div className="f-credit">Desarrollado por la <b>Dirección de Sistemas y Tecnologías de la Información</b></div>
        </div>
      </div>
    </footer>
  );
}`;

/* ===== Export ===== */
export const VARIANTS: Variante[] = [
  { id:"f-basic-dark",  idGrupo:"basicos",  etiqueta:"Básico oscuro",              vistaPrevia:<FooterBasicDark/>,     tsx:FooterBasicDarkTSX },
  { id:"f-basic-light", idGrupo:"basicos",  etiqueta:"Básico claro",               vistaPrevia:<FooterBasicLight/>,    tsx:FooterBasicLightTSX },
  { id:"f-sticky",      idGrupo:"basicos",  etiqueta:"Sticky (tarjeta demo)",      vistaPrevia:<FooterSticky/>,        tsx:FooterStickyTSX },

  { id:"f-nav-simple",  idGrupo:"navegacion", etiqueta:"Navegación simple",        vistaPrevia:<FooterNavSimple/>,     tsx:FooterNavSimpleTSX },
  { id:"f-3cols",       idGrupo:"navegacion", etiqueta:"3 columnas",               vistaPrevia:<Footer3Cols/>,         tsx:Footer3ColsTSX },
  { id:"f-mega",        idGrupo:"navegacion", etiqueta:"Mega footer 4 columnas",   vistaPrevia:<FooterMega/>,          tsx:FooterMegaTSX },

  { id:"f-news",        idGrupo:"acciones",   etiqueta:"Newsletter CTA",           vistaPrevia:<FooterNewsletter/>,    tsx:FooterNewsletterTSX },
  { id:"f-lang",        idGrupo:"acciones",   etiqueta:"Selector de idioma",       vistaPrevia:<FooterLang/>,          tsx:FooterLangTSX },
  { id:"f-split",       idGrupo:"acciones",   etiqueta:"Split nav + legal",        vistaPrevia:<FooterSplit/>,         tsx:FooterSplitTSX },

  { id:"f-gov-strip",   idGrupo:"gov",        etiqueta:"Franja institucional",     vistaPrevia:<FooterGovStrip/>,      tsx:FooterGovStripTSX },
  { id:"f-gov-2rows",   idGrupo:"gov",        etiqueta:"2 filas (nav + legal)",    vistaPrevia:<FooterGovTwoRows/>,    tsx:FooterGovTwoRowsTSX },
  { id:"f-gov-mega",    idGrupo:"gov",        etiqueta:"Mega + social + boletín",  vistaPrevia:<FooterGovMegaFull/>,   tsx:FooterGovMegaFullTSX },
];
