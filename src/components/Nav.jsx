import '../assets/styles/Nav.css';

export default function Nav() {
  return (
    <>
    <nav className="nav-css">
      <div className='sidebar-container'>
        <div className='burger-menu'> 
        </div>

      </div>
      <div className='logo-container'>
        <img src="/public/Makuva logo.png" alt="makuva logo" className='logo-makuva'/>
      </div>
      <ul className="nav-ul">
        <li><a href="">Inicio</a></li>
        <li><a href="">Mis Rutas</a></li>
        <li><a href="">Explorar</a></li>
        <li><a href="">Explorar</a></li>
        <button>Iniciar sesión</button>
      </ul>
    </nav>
    </>
  )
}