import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ExplorarHeader({ filteredCount }) {
  return (
    <div className="explorar-header">
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} />
        Volver
      </Link>
      <h1>Explorar Aventuras</h1>
      <div className="header-stats">
        <span>{filteredCount} rutas disponibles</span>
      </div>
    </div>
  );
}
