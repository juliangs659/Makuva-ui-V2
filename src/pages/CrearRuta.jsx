import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faSearch, 
  faMapLocationDot,
  faPlus,
  faSave,
  faRoute,
  faTrash,
  faGripVertical,
  faClock,
  faCamera,
  faFlag,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';
import PointOfInterestCard from '../components/PointOfInterestCard';
import MapContainer from '../components/MapContainer';
import RouteSettings from '../components/RouteSettings';
import '../assets/styles/CrearRuta.css';

export default function CrearRuta() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [routeSettings, setRouteSettings] = useState({
    titulo: '',
    descripcion: '',
    dificultad: 'Principiante',
    categoria: 'mountain',
    duracionEstimada: '',
    esPublica: true
  });
  const [showSettings, setShowSettings] = useState(false);

  // Datos simulados de lugares encontrados
  const searchResults = [
    {
      id: 1,
      nombre: "Monserrate",
      ubicacion: "Bogotá, Colombia",
      tipo: "Montaña",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1464822759844-d150baec7fb5?auto=format&fit=crop&w=300&q=80",
      lat: 4.6056,
      lng: -74.0547,
      descripcion: "Cerro emblemático de Bogotá con vistas panorámicas"
    },
    {
      id: 2,
      nombre: "Laguna de Guatavita",
      ubicacion: "Guatavita, Cundinamarca",
      tipo: "Laguna",
      rating: 4.5,
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80",
      lat: 4.9806,
      lng: -73.7731,
      descripcion: "Laguna sagrada de los muiscas, origen de la leyenda de El Dorado"
    },
    {
      id: 3,
      nombre: "Catedral de Sal",
      ubicacion: "Zipaquirá, Cundinamarca",
      tipo: "Atracción Cultural",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80",
      lat: 5.0211,
      lng: -74.0081,
      descripcion: "Maravilla arquitectónica construida en las minas de sal"
    }
  ];

  const handleAddPoint = (point) => {
    if (!selectedPoints.find(p => p.id === point.id)) {
      setSelectedPoints([...selectedPoints, { ...point, orden: selectedPoints.length + 1 }]);
    }
  };

  const handleRemovePoint = (pointId) => {
    setSelectedPoints(selectedPoints.filter(p => p.id !== pointId));
  };

  const handleReorderPoints = (dragIndex, hoverIndex) => {
    const draggedPoint = selectedPoints[dragIndex];
    const newPoints = [...selectedPoints];
    newPoints.splice(dragIndex, 1);
    newPoints.splice(hoverIndex, 0, draggedPoint);
    
    // Actualizar el orden
    const reorderedPoints = newPoints.map((point, index) => ({
      ...point,
      orden: index + 1
    }));
    
    setSelectedPoints(reorderedPoints);
  };

  const handleSaveRoute = () => {
    if (!routeSettings.titulo || selectedPoints.length < 2) {
      alert('Por favor, agrega un título y al menos 2 puntos de interés');
      return;
    }
    
    const routeData = {
      ...routeSettings,
      puntos: selectedPoints,
      fechaCreacion: new Date().toISOString(),
      distanciaEstimada: calculateDistance()
    };
    
    console.log('Guardando ruta:', routeData);
    // Aquí se enviaría a la API
    alert('Ruta guardada exitosamente!');
  };

  const calculateDistance = () => {
    // Simulación del cálculo de distancia
    return `${(selectedPoints.length * 5.2).toFixed(1)} km`;
  };

  const filteredResults = searchResults.filter(place => 
    place.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.ubicacion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="crear-ruta-container">
      {/* Header */}
      <div className="crear-ruta-header">
        <Link to="/mis-rutas" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver
        </Link>
        <div className="header-title">
          <h1>Crear Nueva Ruta</h1>
          <p>Diseña tu próxima aventura</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn-settings"
            onClick={() => setShowSettings(true)}
          >
            <FontAwesomeIcon icon={faRoute} />
            Configurar
          </button>
          <button 
            className="btn-save"
            onClick={handleSaveRoute}
            disabled={selectedPoints.length < 2}
          >
            <FontAwesomeIcon icon={faSave} />
            Guardar Ruta
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Buscar ciudades, lugares, puntos de interés..."
        results={filteredResults}
        onSelectResult={handleAddPoint}
      />

      {/* Main Content */}
      <div className="crear-ruta-content">
        {/* Sidebar - Puntos de Interés */}
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>
              <FontAwesomeIcon icon={faMapLocationDot} />
              Puntos de Interés
            </h3>
            <span className="points-count">{selectedPoints.length} puntos</span>
          </div>

          <div className="points-container">
            {selectedPoints.length === 0 ? (
              <div className="empty-state">
                <FontAwesomeIcon icon={faLocationDot} className="empty-icon" />
                <h4>No hay puntos agregados</h4>
                <p>Busca y agrega lugares para crear tu ruta</p>
              </div>
            ) : (
              <div className="points-list">
                {selectedPoints.map((point, index) => (
                  <PointOfInterestCard
                    key={point.id}
                    point={point}
                    index={index}
                    onRemove={handleRemovePoint}
                    onReorder={handleReorderPoints}
                    isFirst={index === 0}
                    isLast={index === selectedPoints.length - 1}
                  />
                ))}
              </div>
            )}
          </div>

          {selectedPoints.length > 0 && (
            <div className="route-summary">
              <div className="summary-item">
                <FontAwesomeIcon icon={faRoute} />
                <span>Distancia estimada: {calculateDistance()}</span>
              </div>
              <div className="summary-item">
                <FontAwesomeIcon icon={faClock} />
                <span>Duración: {routeSettings.duracionEstimada || 'No especificada'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Map Container */}
        <div className="map-section">
          <MapContainer 
            selectedPoints={selectedPoints}
            onPointClick={handleAddPoint}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      {/* Route Settings Modal */}
      {showSettings && (
        <RouteSettings 
          settings={routeSettings}
          setSettings={setRouteSettings}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveRoute}
        />
      )}
    </div>
  );
}
