import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Registro() {
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-overlay"></div>
      </div>
      
      <div className="login-content">
        <div className="login-header">
          <Link to="/" className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver al inicio
          </Link>
        </div>
        
        <div className="login-card">
          <div className="login-logo">
            <img src="/public/Makuva logo.png" alt="Makuva Logo" />
            <h1>Únete a Makuva</h1>
            <p>Comienza tu aventura con nosotros</p>
          </div>
          
          <div className="login-form">
            <h2>Crear Cuenta</h2>
            
            <div className="oauth-buttons">
              <button className="oauth-button google">
                <FontAwesomeIcon icon={faGoogle} />
                Registrarse con Google
              </button>
              
              <button className="oauth-button facebook">
                <FontAwesomeIcon icon={faFacebook} />
                Registrarse con Facebook
              </button>
              
              <button className="oauth-button apple">
                <FontAwesomeIcon icon={faApple} />
                Registrarse con Apple
              </button>
            </div>
            
            <div className="divider">
              <span>o</span>
            </div>
            
            <form className="traditional-form">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" required />
                  <span>Acepto los términos y condiciones</span>
                </label>
              </div>
              
              <button type="submit" className="login-submit">
                Crear Cuenta
              </button>
            </form>
            
            <div className="signup-link">
              <p>¿Ya tienes cuenta? 
                <Link to="/login" className="signup-btn">
                  <FontAwesomeIcon icon={faUser} />
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="login-footer">
          <p>Al registrarte, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a></p>
        </div>
      </div>
    </div>
  );
}
