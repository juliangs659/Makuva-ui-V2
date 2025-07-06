import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMap,
  faLocationDot,
  faRoute,
  faExpand,
  faCompass,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

export default function MapContainer({ selectedPoints, onPointClick, searchQuery }) {
  // Simulación del mapa - aquí se integrará Google Maps
  const mapCenter = selectedPoints.length > 0 
    ? { lat: selectedPoints[0].lat, lng: selectedPoints[0].lng }
    : { lat: 4.6097, lng: -74.0817 }; // Bogotá por defecto

  return (
    <div className="map-container">
      <div className="map-header">
        <h3>
          <FontAwesomeIcon icon={faMap} />
          Mapa de Ruta
        </h3>
        <div className="map-controls">
          <button className="map-control-btn" title="Centrar mapa">
            <FontAwesomeIcon icon={faCompass} />
          </button>
          <button className="map-control-btn" title="Capas">
            <FontAwesomeIcon icon={faLayerGroup} />
          </button>
          <button className="map-control-btn" title="Pantalla completa">
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
      </div>

      <div className="map-content">
        {/* Placeholder para el mapa de Google */}
        <div className="map-placeholder">
          <div className="map-info">
            <FontAwesomeIcon icon={faMap} className="map-icon" />
            <h4>Mapa Interactivo</h4>
            <p>Aquí se mostrará el mapa de Google Maps</p>
            {selectedPoints.length > 0 && (
              <div className="map-stats">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {selectedPoints.length} puntos agregados
                </p>
                <p>
                  <FontAwesomeIcon icon={faRoute} />
                  Ruta trazada automáticamente
                </p>
              </div>
            )}
          </div>

          {/* Simulación de marcadores */}
          {selectedPoints.map((point, index) => (
            <div 
              key={point.id}
              className="map-marker"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 3) * 20}%`
              }}
            >
              <div className="marker-pin">
                <span>{point.orden}</span>
              </div>
              <div className="marker-tooltip">
                <strong>{point.nombre}</strong>
                <p>{point.ubicacion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instrucciones de uso */}
        <div className="map-instructions">
          <div className="instruction-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Haz clic en el mapa para agregar puntos</span>
          </div>
          <div className="instruction-item">
            <FontAwesomeIcon icon={faRoute} />
            <span>Arrastra los puntos para reordenar la ruta</span>
          </div>
        </div>
      </div>

      {/* Información de la ruta */}
      {selectedPoints.length > 1 && (
        <div className="route-info">
          <h4>Información de la Ruta</h4>
          <div className="route-details">
            <div className="detail-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Inicio: {selectedPoints[0].nombre}</span>
            </div>
            <div className="detail-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Fin: {selectedPoints[selectedPoints.length - 1].nombre}</span>
            </div>
            <div className="detail-item">
              <FontAwesomeIcon icon={faRoute} />
              <span>Paradas: {selectedPoints.length - 2}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
