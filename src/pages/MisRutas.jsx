import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faRoute, 
  faCalendarDays, 
  faMapLocationDot, 
  faPlus,
  faClock,
  faFire,
  faUsers,
  faCamera,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/MisRutas.css';

export default function MisRutas() {
  // Datos simulados
  const stats = {
    completadas: 12,
    kmRecorridos: 345,
    proxima: "Ruta Cafetera",
    aventurasEsteAño: 8
  };

  const rutasActivas = [
    {
      id: 1,
      titulo: "Ruta Cafetera",
      ubicacion: "Manizales, Caldas",
      fecha: "15 Jul 2025",
      progreso: 75,
      imagen: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      titulo: "Sendero Amazónico",
      ubicacion: "Leticia, Amazonas",
      fecha: "22 Jul 2025",
      progreso: 30,
      imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const rutasCompletadas = [
    {
      id: 1,
      titulo: "Laguna de Guatavita",
      ubicacion: "Guatavita, Cundinamarca",
      fecha: "28 Jun 2025",
      duracion: "6 horas",
      fotos: 24,
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      titulo: "Páramo de Sumapaz",
      ubicacion: "Bogotá, Cundinamarca",
      fecha: "15 Jun 2025",
      duracion: "8 horas",
      fotos: 18,
      imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      titulo: "Cocuy Nacional",
      ubicacion: "Boyacá, Colombia",
      fecha: "02 Jun 2025",
      duracion: "3 días",
      fotos: 156,
      imagen: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="mis-rutas-container">
      {/* Header de la página */}
      <div className="mis-rutas-header">
        <Link to="/" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver
        </Link>
        <h1>Mis Rutas</h1>
        <div className="user-avatar">JG</div>
      </div>

      {/* Estadísticas principales */}
      <div className="stats-section">
        <div className="stat-card primary">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faRoute} />
          </div>
          <div className="stat-content">
            <h3>{stats.completadas}</h3>
            <p>Rutas Completadas</p>
          </div>
        </div>
        
        <div className="stat-card secondary">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faMapLocationDot} />
          </div>
          <div className="stat-content">
            <h3>{stats.kmRecorridos}km</h3>
            <p>Recorridos</p>
          </div>
        </div>
        
        <div className="stat-card accent">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faFire} />
          </div>
          <div className="stat-content">
            <h3>{stats.aventurasEsteAño}</h3>
            <p>Este Año</p>
          </div>
        </div>
        
        <div className="stat-card next">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          <div className="stat-content">
            <h3>Próxima</h3>
            <p>{stats.proxima}</p>
          </div>
        </div>
      </div>

      {/* Rutas activas */}
      <div className="section">
        <div className="section-header">
          <h2>Rutas en Progreso</h2>
          <span className="section-count">{rutasActivas.length}</span>
        </div>
        
        <div className="rutas-activas">
          {rutasActivas.map(ruta => (
            <div key={ruta.id} className="ruta-activa-card">
              <div className="ruta-image">
                <img src={ruta.imagen} alt={ruta.titulo} />
                <div className="ruta-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${ruta.progreso}%` }}
                    ></div>
                  </div>
                  <span>{ruta.progreso}%</span>
                </div>
              </div>
              <div className="ruta-info">
                <h3>{ruta.titulo}</h3>
                <p><FontAwesomeIcon icon={faMapLocationDot} /> {ruta.ubicacion}</p>
                <p><FontAwesomeIcon icon={faCalendarDays} /> {ruta.fecha}</p>
                <div className="ruta-actions">
                  <button className="btn-secondary">
                    <FontAwesomeIcon icon={faClock} /> Continuar
                  </button>
                  <button className="btn-outline">
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historial de rutas */}
      <div className="section">
        <div className="section-header">
          <h2>Rutas Completadas</h2>
          <span className="section-count">{rutasCompletadas.length}</span>
        </div>
        
        <div className="rutas-completadas">
          {rutasCompletadas.map(ruta => (
            <div key={ruta.id} className="ruta-completada-card">
              <div className="ruta-image">
                <img src={ruta.imagen} alt={ruta.titulo} />
                <div className="ruta-badge">
                  <FontAwesomeIcon icon={faCamera} />
                  {ruta.fotos}
                </div>
              </div>
              <div className="ruta-info">
                <h4>{ruta.titulo}</h4>
                <p><FontAwesomeIcon icon={faMapLocationDot} /> {ruta.ubicacion}</p>
                <div className="ruta-meta">
                  <span><FontAwesomeIcon icon={faCalendarDays} /> {ruta.fecha}</span>
                  <span><FontAwesomeIcon icon={faClock} /> {ruta.duracion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón flotante para crear ruta */}
      <Link to="/crear-ruta" className="fab">
        <FontAwesomeIcon icon={faPlus} />
        <span>Nueva Ruta</span>
      </Link>
    </div>
  );
}
