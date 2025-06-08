import '../assets/styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div  className="footer-logo-container">

              <img src="/public/Makuva logo.png" 
              alt="Makuva Logo" className="footer-logo" />
            </div>
            <p className="footer-desc">
              Descubre tu camino con Makuva. Planifica tus aventuras, crea recuerdos inolvidables.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="footer-social-link"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.28l.72-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="Twitter" className="footer-social-link"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.5 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.36 4.07 3.6 1.64 0.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 5v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg></a>
              <a href="#" aria-label="Instagram" className="footer-social-link"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
              <a href="#" aria-label="Youtube" className="footer-social-link"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.7 4.6C19.13 4 12 4 12 4s-7.13 0-8.7.6A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.3 19.4C4.87 20 12 20 12 20s7.13 0 8.7-.6a2.78 2.78 0 0 0 1.84-1.82A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/rutas">Mis Rutas</a></li>
              <li><a href="/explorar">Explorar</a></li>
              <li><a href="/about">Acerca de</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Soporte</h3>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos de servicio</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Makuva. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}