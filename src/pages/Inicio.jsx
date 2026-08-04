import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import conocimientosAcademicos from '../assets/conocimientos-academicos.png';
import banner from '../assets/banner.jpg';
import evento1 from '../assets/evento1.jpeg';
import evento2 from '../assets/evento2.jpeg';
import evento3 from '../assets/evento3.jpeg';
import evento4 from '../assets/evento4.jpeg';
import alcaldiaB from '../assets/alcaldiaBLogo.png';
import fundacionN from '../assets/fundacionNLogo.png';
import gobernacionA from '../assets/gobernacionALogo.webp';

const Inicio = () => {
  // Arreglo de diapositivas en el orden estrictamente especificado
  const slides = [logo, conocimientosAcademicos, banner];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones de navegación manual para flechas (Ciclo infinito)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Temporizador para cambio automático cada 4.5 segundos con su limpieza
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4500);

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
      {/* Sección 1: Hero Banner / Slider principal "Encapsulado" */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-institucional-verde rounded-[2rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-institucional-verdeClaro/30 relative overflow-hidden">
          {/* Luz y formas decorativas (Reemplazadas de amarillo a verdeClaro) */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-institucional-verdeClaro/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-institucional-verdeClaro/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">
            {/* Izquierda: Textos y Botones */}
            <div className="flex flex-col items-start text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Transforma a la nueva ciudad
              </h1>
              <p className="text-institucional-verdeClaro font-semibold text-lg sm:text-xl md:text-2xl mt-4 tracking-wide">
                Del caribe colombiano, nacional e internacionalmente
              </p>
              <p className="text-gray-200 text-base md:text-lg mt-4 leading-relaxed">
                En la Fundación Universal de Estudios Técnicos – UNIVERTEC, brindamos educación para el trabajo y el desarrollo humano (ETDH) con programas pertinentes, accesibles y orientados a las necesidades productivas de la región.
              </p>

              {/* Botones */}
              <div className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto">
                <Link
                  to="/admisiones"
                  className="bg-institucional-amarillo text-institucional-verde font-bold px-7 py-3.5 rounded-xl shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all text-center flex-1 sm:flex-initial"
                >
                  Inscripciones Abiertas
                </Link>
                <Link
                  to="/oferta-academica"
                  className="bg-transparent border-2 border-institucional-verdeClaro text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-institucional-verdeClaro/20 hover:-translate-y-0.5 transition-all text-center flex-1 sm:flex-initial"
                >
                  Solicita Información
                </Link>
              </div>
            </div>

            {/* Derecha: Carrusel (Slider Dinámico con Flechas y Tamaño Dinámico) */}
            <div className="flex justify-center items-center py-2 sm:py-4 w-full">
              <div className="w-full flex justify-center items-center bg-institucional-verde overflow-hidden relative rounded-2xl py-4 sm:py-6 min-h-[250px] sm:min-h-[350px]">
                {/* Flecha Izquierda */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-black/30 hover:bg-black/50 transition-colors rounded-full p-2 sm:p-3 text-white focus:outline-none"
                  aria-label="Diapositiva anterior"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Imagen del Slide Activo */}
                <img
                  src={slides[currentIndex]}
                  alt={`Slide ${currentIndex + 1} UNIVERTEC`}
                  className={`h-auto max-h-[40vh] md:max-h-[75vh] object-contain object-center transition-all duration-500 ease-in-out ${
                    currentIndex === 0
                      ? 'w-auto max-w-[250px] md:max-w-[450px]'
                      : 'w-full'
                  }`}
                />

                {/* Flecha Derecha */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-black/30 hover:bg-black/50 transition-colors rounded-full p-2 sm:p-3 text-white focus:outline-none"
                  aria-label="Diapositiva siguiente"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Indicadores (Puntos / Dots) */}
                <div className="absolute bottom-4 flex gap-2 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? 'bg-institucional-amarillo scale-125'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir al slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
