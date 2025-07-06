export default function Explorar() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>Explora Nuevas Aventuras</h1>
      <p>Descubre increíbles rutas y destinos por toda Colombia</p>
      <div style={{ marginTop: '40px' }}>
        <h3>🔍 Próximamente:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>🏔️ Filtros por tipo de aventura</li>
          <li>📍 Búsqueda por ubicación</li>
          <li>⭐ Filtros por calificación</li>
          <li>📅 Disponibilidad por fechas</li>
        </ul>
      </div>
    </div>
  );
}
