import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes,
  faRoute,
  faClock,
  faUsers,
  faGlobe,
  faLock,
  faMountain,
  faWater,
  faTree,
  faUsers as faCultural
} from '@fortawesome/free-solid-svg-icons';

export default function RouteSettings({ settings, setSettings, onClose, onSave }) {
  const categories = [
    { id: 'mountain', name: 'Montaña', icon: faMountain },
    { id: 'water', name: 'Acuática', icon: faWater },
    { id: 'forest', name: 'Bosque', icon: faTree },
    { id: 'cultural', name: 'Cultural', icon: faCultural }
  ];

  const difficulties = [
    { id: 'Principiante', name: 'Principiante', color: '#28a745' },
    { id: 'Intermedio', name: 'Intermedio', color: '#ffc107' },
    { id: 'Avanzado', name: 'Avanzado', color: '#dc3545' }
  ];

  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="route-settings-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            <FontAwesomeIcon icon={faRoute} />
            Configuración de Ruta
          </h3>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label>Título de la Ruta *</label>
            <input
              type="text"
              value={settings.titulo}
              onChange={(e) => handleChange('titulo', e.target.value)}
              placeholder="Ej: Mi aventura en el Cocuy"
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
              value={settings.descripcion}
              onChange={(e) => handleChange('descripcion', e.target.value)}
              placeholder="Describe tu ruta, qué incluye, recomendaciones..."
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Categoría</label>
              <div className="category-selector">
                {categories.map(category => (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-option ${settings.categoria === category.id ? 'active' : ''}`}
                    onClick={() => handleChange('categoria', category.id)}
                  >
                    <FontAwesomeIcon icon={category.icon} />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Dificultad</label>
              <div className="difficulty-selector">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty.id}
                    type="button"
                    className={`difficulty-option ${settings.dificultad === difficulty.id ? 'active' : ''}`}
                    onClick={() => handleChange('dificultad', difficulty.id)}
                    style={{ '--difficulty-color': difficulty.color }}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Duración Estimada</label>
              <input
                type="text"
                value={settings.duracionEstimada}
                onChange={(e) => handleChange('duracionEstimada', e.target.value)}
                placeholder="Ej: 2 días, 6 horas"
              />
            </div>

            <div className="form-group">
              <label>Visibilidad</label>
              <div className="visibility-selector">
                <button
                  type="button"
                  className={`visibility-option ${settings.esPublica ? 'active' : ''}`}
                  onClick={() => handleChange('esPublica', true)}
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  Pública
                </button>
                <button
                  type="button"
                  className={`visibility-option ${!settings.esPublica ? 'active' : ''}`}
                  onClick={() => handleChange('esPublica', false)}
                >
                  <FontAwesomeIcon icon={faLock} />
                  Privada
                </button>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              <FontAwesomeIcon icon={faRoute} />
              Guardar Configuración
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
