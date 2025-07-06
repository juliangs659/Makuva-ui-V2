import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapLocationDot,
  faCalendarDays,
  faClock,
  faHeart,
  faShare,
  faBookmark,
  faStar,
  faFire
} from '@fortawesome/free-solid-svg-icons';

export default function RouteCard({ ruta }) {
  return (
    <div className="route-card">
      {ruta.isPopular && (
        <div className="popular-badge">
          <FontAwesomeIcon icon={faFire} />
          Popular
        </div>
      )}
      
      <div className="route-image">
        <img src={ruta.imagen} alt={ruta.titulo} />
        <div className="route-actions">
          <button className="action-button">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="action-button">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
          <button className="action-button">
            <FontAwesomeIcon icon={faShare} />
          </button>
        </div>
      </div>

      <div className="route-content">
        <div className="route-header">
          <h3>{ruta.titulo}</h3>
          <div className="route-rating">
            <FontAwesomeIcon icon={faStar} />
            {ruta.rating}
          </div>
        </div>

        <p className="route-location">
          <FontAwesomeIcon icon={faMapLocationDot} />
          {ruta.ubicacion}
        </p>

        <p className="route-description">{ruta.descripcion}</p>

        <div className="route-tags">
          {ruta.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="route-details">
          <div className="detail-item">
            <FontAwesomeIcon icon={faClock} />
            <span>{ruta.duracion}</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>{ruta.fechaProxima}</span>
          </div>
        </div>

        <div className="route-footer">
          <div className="difficulty-badge">
            {ruta.dificultad}
          </div>
          <button className="join-button">
            Explorar esta ruta
          </button>
        </div>
      </div>
    </div>
  );
}
