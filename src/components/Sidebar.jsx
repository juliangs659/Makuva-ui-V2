import '../assets/styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUser, faGear, faMagnifyingGlassLocation, faMagnifyingGlass, faHeart, faInfo } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ open, onClose }) {
  // Simulación de datos de usuario
  const user = {
    nombre: 'Julian Gutierrez',
    email: 'julian@email.com',
    fecha: new Date().toLocaleDateString(),
  };

  return (
    <aside className={`sidebar${open ? ' sidebar--open' : ''}`}>
      <button className="sidebar__close" onClick={onClose} aria-label="Cerrar menú lateral">
        <FontAwesomeIcon icon={faClose}/>
      </button>
      <div className="sidebar__user-info">
        <div className="sidebar__avatar">{user.nombre[0]}</div>
        <div>
          <div className="sidebar__user-name">{user.nombre}</div>
          <div className="sidebar__user-email">{user.email}</div>
        </div>
      </div>
      <div className="sidebar__date">{user.fecha}</div>
      <div className="sidebar__search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="sidebar__actions">
        <button className="sidebar__action"><FontAwesomeIcon icon={faUser} /> Editar perfil</button>
        <button className="sidebar__action"><FontAwesomeIcon icon={faGear}/> Configurar</button>
        <Link to="/mis-rutas" className="sidebar__action" onClick={onClose}><FontAwesomeIcon icon={faMagnifyingGlassLocation} /> Mis rutas</Link>
        <Link to="/explorar" className="sidebar__action" onClick={onClose}><FontAwesomeIcon icon={faMagnifyingGlass} /> Explorar rutas</Link>
        <button className="sidebar__action"><FontAwesomeIcon icon={faHeart}/> Favoritos</button>
        <Link to="/ayuda" className="sidebar__action" onClick={onClose}><FontAwesomeIcon icon={faInfo} /> Ayuda</Link>
      </div>
      <div className="sidebar__divider">
        <button className="sidebar__logout"><FontAwesomeIcon icon={faClose}/> Cerrar sesión</button>
        <div className="sidebar__info">
          <small>Versión 1.0 · Proyecto React · {user.fecha}</small>
        </div>
      </div>
    </aside>
  );
}