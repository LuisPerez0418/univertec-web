import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imágenes de eventos y logos
import evento1 from '../assets/evento1.jpeg';
import evento2 from '../assets/evento2.jpeg';
import evento3 from '../assets/evento3.jpeg';
import evento4 from '../assets/evento4.jpeg';
import alcaldiaB from '../assets/alcaldiaBLogo.png';
import fundacionN from '../assets/fundacionNLogo.png';
import gobernacionA from '../assets/gobernacionALogo.webp';
import secretariaM from '../assets/secretariaDeMalambo.png';

// Importaciones de imágenes del Hero Slider
import banner6 from '../assets/banner6.jpeg';
import banner7 from '../assets/banner7.jpeg';
import banner8 from '../assets/banner8.jpeg';
import logo14anos from '../assets/univertecbanner14ano.png';
import banner10 from '../assets/banner10.jpeg';
import banner11 from '../assets/banner11.jpeg';

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Arreglo de datos del slider
  const slides = [
    { id: 6, image: banner6, title: "" },
    { id: 8, image: banner8, title: "" },
    { id: 9, image: logo14anos, title: "" },
    { id: 10, image: banner10, title: "" },
    { id: 11, image: banner11, title: "" }
  ];

  // Funciones de navegación manual para el slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Autoplay del slider cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Datos para Proyectos y Actividades Realizadas
  const actividades = [
    {
      id: '001',
      titulo: 'Prácticas Pedagógicas',
      descripcion:
        'Nuestros estudiantes de Primera Infancia aplicando metodologías lúdicas en centros de desarrollo infantil.',
      imagen: evento1,
    },
    {
      id: '002',
      titulo: 'Jornadas de Saneamiento',
      descripcion:
        'Campañas de concientización, recolección de residuos y cuidado del medio ambiente lideradas por el área ambiental.',
      imagen: evento2,
    },
    {
      id: '003',
      titulo: 'Talleres de Liderazgo',
      descripcion:
        'Fortalecimiento de habilidades blandas, trabajo en equipo y resolución de conflictos para el ámbito laboral.',
      imagen: evento3,
    },
    {
      id: '004',
      titulo: 'Intervención Comunitaria',
      descripcion:
        'Proyectos de impacto social y apoyo integral dirigidos a poblaciones vulnerables de la región.',
      imagen: evento4,
    },
  ];

  return (
    <div className="w-full">
      {/* Sección 1: Hero Slider */}
      <section className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] bg-[#0b1727] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out"
            />
          </div>
        ))}

        {/* Controles de Navegación Izquierda */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 text-white/70 hover:text-white text-2xl md:text-4xl p-1 md:p-4 cursor-pointer transition-colors z-30"
          aria-label="Anterior"
        >
          &#10094;
        </button>

        {/* Controles de Navegación Derecha */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 text-white/70 hover:text-white text-2xl md:text-4xl p-1 md:p-4 cursor-pointer transition-colors z-30"
          aria-label="Siguiente"
        >
          &#10095;
        </button>

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-institucional-azul w-4 h-4' : 'bg-white/50 w-3 h-3'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Sección 2: Accesos Rápidos Circulares */}
      <section className="container mx-auto px-4 mt-16 mb-16">
        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Ítem 1: Inscripciones */}
          <Link to="/admisiones" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-verdeClaro hover:-translate-y-2 transition-transform text-institucional-verde group-hover:text-institucional-verdeClaro">
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-verde transition-colors">
              Inscripciones
            </span>
          </Link>

          {/* Ítem 2: Estudiantes (Q10) */}
          <a href="#q10" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-verdeClaro hover:-translate-y-2 transition-transform text-institucional-verde group-hover:text-institucional-verdeClaro">
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-verde transition-colors">
              Estudiantes
            </span>
          </a>

          {/* Ítem 3: Consulta SIET */}
          <a href="https://siet.mineducacion.gov.co/siet/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-verdeClaro hover:-translate-y-2 transition-transform text-institucional-verde group-hover:text-institucional-verdeClaro">
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-verde transition-colors">
              Consulta SIET
            </span>
          </a>

          {/* Ítem 4: Egresados */}
          <a href="#egresados" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-verdeClaro hover:-translate-y-2 transition-transform text-institucional-verde group-hover:text-institucional-verdeClaro">
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-verde transition-colors">
              Egresados
            </span>
          </a>
        </div>
      </section>

      {/* Sección 3: Proyectos y Actividades Realizadas */}
      <section className="container mx-auto px-4 mt-16 mb-20">
        <div className="mb-8 text-left sm:text-center max-w-3xl mx-auto">
          <span className="inline-block bg-institucional-verde/10 text-institucional-verde text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-3 border border-institucional-verde/20">
            Experiencia
          </span>
          <h2 className="text-institucional-azul font-bold text-3xl md:text-4xl tracking-tight">
            Proyectos y Actividades Realizadas
          </h2>
          <p className="text-gray-600 mb-8 mt-3 text-base sm:text-lg leading-relaxed">
            Conoce las experiencias prácticas y el impacto de nuestra comunidad educativa en su entorno.
          </p>
        </div>

        {/* Banner Galería Inclusiva */}
        <div className="mb-8">
          <img
            src={banner11}
            alt="Banner Galería Inclusiva"
            className="w-full h-auto block rounded-lg shadow-md mb-8"
          />
        </div>

        {/* Grid responsivo de actividades */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {actividades.map((item) => (
            <div key={item.id} className="relative group">
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sección 4: Portafolio y Colaboraciones */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-gray-200/70 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-institucional-verde tracking-tight">
              Portafolio de Empresas y Colaboraciones
            </h2>
            <div className="w-16 h-1.5 bg-institucional-verdeClaro mx-auto rounded-full mt-3"></div>
            <p className="text-gray-600 mt-4 text-base sm:text-lg">
              Trabajamos de la mano con organizaciones y empresas aliadas que respaldan nuestra excelencia formativa.
            </p>
          </div>

          {/* Logos Aliados */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mt-8">
            <img src={alcaldiaB} alt="Alcaldía de Barranquilla" className="h-20 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105" />
            <img src={fundacionN} alt="Fundación Nueva Ciudad" className="h-24 md:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105 bg-institucional-verde p-3 md:p-4 rounded-2xl shadow-md" />
            <img src={gobernacionA} alt="Gobernación del Atlántico" className="h-20 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105" />
            <img src={secretariaM} alt="Secretaría de Malambo" className="h-20 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Sección 5: ¿Quiénes Somos? */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-institucional-verde">
            ¿Quiénes Somos?
          </h2>
          <div className="w-16 h-1.5 bg-institucional-verdeClaro mx-auto rounded-full"></div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            La Fundación Universal de Estudios Técnicos – UNIVERTEC es una Institución de Educación para el Trabajo y el Desarrollo Humano (ETDH). Certificados en el área metropolitana de Barranquilla (Malambo).
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Contamos con licencia de funcionamiento y programas académicos debidamente autorizados, comprometidos con la formación integral, la ética y el liderazgo productivo en nuestra comunidad.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
