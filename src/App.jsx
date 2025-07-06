import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import MisRutas from "./pages/MisRutas";
import Comunidad from "./pages/Comunidad";
import Ayuda from "./pages/Ayuda";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/*" element={
          <>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explorar" element={<Explorar />} />
              <Route path="/mis-rutas" element={<MisRutas />} />
              <Route path="/comunidad" element={<Comunidad />} />
              <Route path="/ayuda" element={<Ayuda />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
