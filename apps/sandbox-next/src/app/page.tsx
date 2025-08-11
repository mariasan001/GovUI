export default function Page() {
  return (
    <main className="u-container u-stack" /* usa 16px por defecto */>
      <h1>Hola, GovUI 👋</h1>

      <div className="u-cluster">
        <button className="gov-btn gov-btn--primary">Guardar</button>
        <button className="gov-btn gov-btn--secondary">Cancelar</button>
      </div>

      <section className="u-grid" /* 2 cols por defecto */>
        <div className="demo-card">Tarjeta 1</div>
        <div className="demo-card">Tarjeta 2</div>
        <div className="demo-card">Tarjeta 3</div>
        <div className="demo-card">Tarjeta 4</div>
      </section>
    </main>
  );
}
