import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import MisRutas from "./pages/MisRutas";
import Comunidad from "./pages/Comunidad";
import Ayuda from "./pages/Ayuda";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/mis-rutas" element={<MisRutas />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
