import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import OfertaAcademica from './pages/OfertaAcademica';
import Nosotros from './pages/Nosotros';
import Transparencia from './pages/Transparencia';
import Contacto from './pages/Contacto';


const Admisiones = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-institucional-dark mb-2">Admisiones</h1>
    <p className="text-lg text-gray-500">Información de requisitos, fechas y proceso de inscripción.</p>
  </div>
);





function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/oferta-academica" element={<OfertaAcademica />} />
            <Route path="/admisiones" element={<Admisiones />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
