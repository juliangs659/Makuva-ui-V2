import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import MisRutas from "./pages/MisRutas";
import CrearRuta from "./pages/CrearRuta";
import Comunidad from "./pages/Comunidad";
import Ayuda from "./pages/Ayuda";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

function AppContent() {
  const location = useLocation();
  const hideNavRoutes = ['/login', '/registro', '/mis-rutas', '/explorar', '/crear-ruta'];
  const hideFooterRoutes = ['/login', '/registro', '/mis-rutas', '/explorar', '/crear-ruta'];
  
  const shouldHideNav = hideNavRoutes.includes(location.pathname);
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  
  return (
    <>
      {!shouldHideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/mis-rutas" element={<MisRutas />} />
        <Route path="/crear-ruta" element={<CrearRuta />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
