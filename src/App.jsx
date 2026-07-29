import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import Inicio from './pages/Inicio';
import OfertaAcademica from './pages/OfertaAcademica';
import Nosotros from './pages/Nosotros';
import Transparencia from './pages/Transparencia';
import Contacto from './pages/Contacto';
import Admisiones from './pages/Admisiones';
import Programas from './pages/Programas';
import Cursos from './pages/Cursos';

const Donaciones = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-institucional-verde mb-4">Apoya a UNIVERTEC</h1>
    <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-6">
      Tu donación contribuye directamente al desarrollo de programas técnicos y becas de apoyo para nuestros estudiantes.
    </p>
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md w-full">
      <h2 className="text-xl font-bold text-institucional-verde mb-4">Canales Institucionales</h2>
      <p className="text-gray-600 text-sm mb-6">Contáctanos con nuestro equipo administrativo para conocer los métodos habilitados de aportes y donaciones.</p>
      <a
        href="https://wa.me/573011028224"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-institucional-amarillo text-institucional-verde font-bold px-6 py-3 rounded-xl shadow inline-flex items-center justify-center gap-2 w-full hover:brightness-105 transition-all"
      >
        <span>Contactar por WhatsApp</span>
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans relative">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/oferta-academica" element={<OfertaAcademica />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/admisiones" element={<Admisiones />} />
            <Route path="/donaciones" element={<Donaciones />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </Router>
  );
}

export default App;
