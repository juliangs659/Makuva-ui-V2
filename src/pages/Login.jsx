import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
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
            <h1>Bienvenido a Makuva</h1>
            <p>Únete a nuestra comunidad de aventureros</p>
          </div>
          
          <div className="login-form">
            <h2>Iniciar Sesión</h2>
            
            <div className="oauth-buttons">
              <button className="oauth-button google">
                <FontAwesomeIcon icon={faGoogle} />
                Continuar con Google
              </button>
              
              <button className="oauth-button facebook">
                <FontAwesomeIcon icon={faFacebook} />
                Continuar con Facebook
              </button>
              
              <button className="oauth-button apple">
                <FontAwesomeIcon icon={faApple} />
                Continuar con Apple
              </button>
            </div>
            
            <div className="divider">
              <span>o</span>
            </div>
            
            <form className="traditional-form">
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
              
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Recordarme</span>
                </label>
                <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
              </div>
              
              <button type="submit" className="login-submit">
                Iniciar Sesión
              </button>
            </form>
            
            <div className="signup-link">
              <p>¿No tienes cuenta? 
                <Link to="/registro" className="signup-btn">
                  <FontAwesomeIcon icon={faUserPlus} />
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="login-footer">
          <p>Al continuar, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a></p>
        </div>
      </div>
    </div>
  );
}
