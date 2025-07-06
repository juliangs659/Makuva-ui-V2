import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGripVertical,
  faTrash,
  faMapLocationDot,
  faStar,
  faFlag,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

export default function PointOfInterestCard({ 
  point, 
  index, 
  onRemove, 
  onReorder,
  isFirst,
  isLast 
}) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const hoverIndex = index;
    
    if (dragIndex !== hoverIndex) {
      onReorder(dragIndex, hoverIndex);
    }
  };

  return (
    <div 
      className={`point-card ${isFirst ? 'first-point' : ''} ${isLast ? 'last-point' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="point-order">
        <div className="order-number">
          {isFirst ? (
            <FontAwesomeIcon icon={faFlag} className="start-flag" />
          ) : isLast ? (
            <FontAwesomeIcon icon={faLocationDot} className="end-marker" />
          ) : (
            point.orden
          )}
        </div>
        <div className="drag-handle">
          <FontAwesomeIcon icon={faGripVertical} />
        </div>
      </div>

      <div className="point-image">
        <img src={point.imagen} alt={point.nombre} />
      </div>

      <div className="point-info">
        <h4>{point.nombre}</h4>
        <p>
          <FontAwesomeIcon icon={faMapLocationDot} />
          {point.ubicacion}
        </p>
        <div className="point-meta">
          <span className="point-type">{point.tipo}</span>
          <span className="point-rating">
            <FontAwesomeIcon icon={faStar} />
            {point.rating}
          </span>
        </div>
        {point.descripcion && (
          <p className="point-description">{point.descripcion}</p>
        )}
      </div>

      <button 
        className="remove-button"
        onClick={() => onRemove(point.id)}
        title="Eliminar punto"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
