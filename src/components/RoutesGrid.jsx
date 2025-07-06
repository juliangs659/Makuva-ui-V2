import RouteCard from './RouteCard';

export default function RoutesGrid({ rutas, title = "Aventuras Destacadas" }) {
  return (
    <div className="routes-section">
      <div className="section-header">
        <h2>{title}</h2>
        <span className="results-count">{rutas.length} resultados</span>
      </div>

      <div className="routes-grid">
        {rutas.map(ruta => (
          <RouteCard key={ruta.id} ruta={ruta} />
        ))}
      </div>
    </div>
  );
}
