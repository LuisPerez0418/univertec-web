import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import fundacionImg from './assets/Fundacion Universal.png';

const Nosotros = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12">
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-institucional-dark mb-2">Nosotros</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Conoce nuestra historia, filosofía y compromiso con el desarrollo educativo de la región. En UNIVERTEC formamos líderes técnicos con altas competencias éticas y laborales.
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={fundacionImg}
        alt="Fundación Universal"
        className="max-h-96 w-auto rounded-xl shadow-lg object-contain bg-white p-4 border border-gray-100"
      />
    </div>
  </div>
);

const OfertaAcademica = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-institucional-dark mb-2">Oferta Académica</h1>
    <p className="text-lg text-gray-500">Programas técnicos laborales diseñados para las exigencias del sector productivo.</p>
  </div>
);

const Admisiones = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-institucional-dark mb-2">Admisiones</h1>
    <p className="text-lg text-gray-500">Información de requisitos, fechas y proceso de inscripción.</p>
  </div>
);

const Transparencia = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-institucional-dark mb-2">Transparencia y Legalidad</h1>
    <p className="text-lg text-gray-500">Acceso a documentos públicos, resoluciones y normatividad vigente.</p>
  </div>
);

const Contacto = () => (
  <div className="container mx-auto max-w-7xl min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-institucional-dark mb-2">Contacto</h1>
    <p className="text-lg text-gray-500">Líneas de atención, sede principal y formulario de contacto.</p>
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
