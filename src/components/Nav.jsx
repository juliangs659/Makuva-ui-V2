import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Nav.css';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faRoute, faMagnifyingGlassLocation, faCircleInfo, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <nav className="nav-css">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className='sidebar-container'>
        <div className='burger-menu' onClick={() => setSidebarOpen(true)} aria-label="Abrir menú lateral" tabIndex={0} role="button" style={{display: 'flex'}}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>
      <div className='logo-container'>
        <img src="/public/Makuva logo.png" alt="makuva logo" className='logo-makuva'/>
      </div>
      <ul className="nav-ul">
        <li><Link to="/"><FontAwesomeIcon icon={faHouse} /> Inicio</Link></li>
        <li><Link to="/mis-rutas"><FontAwesomeIcon icon={faRoute} /> Mis Rutas</Link></li>
        <li><Link to="/explorar"><FontAwesomeIcon icon={faMagnifyingGlassLocation} /> Explorar</Link></li>
        <li><Link to="/ayuda"><FontAwesomeIcon icon={faCircleInfo} /> Ayuda</Link></li>
        <li><Link to="/comunidad"><FontAwesomeIcon icon={faHandshake} /> Comunidad</Link></li>
        <button>Iniciar sesión</button>
      </ul>
    </nav>
    </>
  )
}