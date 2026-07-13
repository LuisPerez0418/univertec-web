import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="w-full">
      {/* Sección 1: Hero Banner "Encapsulado" */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-institucional-dark rounded-[2rem] p-10 md:p-16 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Luz decorativa suave de fondo */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-institucional-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Izquierda: Textos y Botones */}
            <div className="flex flex-col items-start text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-institucional-yellow leading-tight tracking-tight">
                Formamos el talento que transforma el futuro
              </h1>
              <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
                En la Fundación Universal de Estudios Técnicos – UNIVERTEC, brindamos educación para el trabajo y el desarrollo humano (ETDH) con programas pertinentes, accesibles y orientados a las necesidades del sector productivo del Caribe colombiano.
              </p>
              
              {/* Botones */}
              <div className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto">
                <Link
                  to="/admisiones"
                  className="bg-institucional-yellow text-institucional-dark font-bold px-7 py-3.5 rounded-xl shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all text-center flex-1 sm:flex-initial"
                >
                  Inscripciones Abiertas
                </Link>
                <Link
                  to="/oferta-academica"
                  className="bg-transparent border border-white text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all text-center flex-1 sm:flex-initial"
                >
                  Solicita Información
                </Link>
              </div>
            </div>

            {/* Derecha: Imagen Principal */}
            <div className="flex justify-center items-center py-4">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src="/imagen_2.jpg"
                  alt="Estudiantes UNIVERTEC"
                  className="w-full h-auto object-contain md:h-96 md:object-cover rounded-xl shadow-2xl transform md:-rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Accesos Rápidos Circulares (Estilo UniAtlántico) */}
      <section className="container mx-auto px-4 mt-16 mb-16">
        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Ítem 1: Inscripciones */}
          <Link to="/admisiones" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-yellow hover:-translate-y-2 transition-transform text-institucional-dark group-hover:text-institucional-yellow">
              {/* Ícono Usuario/Registro */}
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-dark transition-colors">
              Inscripciones
            </span>
          </Link>

          {/* Ítem 2: Estudiantes (Q10) */}
          <a href="#q10" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-yellow hover:-translate-y-2 transition-transform text-institucional-dark group-hover:text-institucional-yellow">
              {/* Ícono Libro / Personas */}
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-dark transition-colors">
              Estudiantes (Q10)
            </span>
          </a>

          {/* Ítem 3: Consulta SIET */}
          <a href="#siet" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-yellow hover:-translate-y-2 transition-transform text-institucional-dark group-hover:text-institucional-yellow">
              {/* Ícono Lupa/Documento */}
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-dark transition-colors">
              Consulta SIET
            </span>
          </a>

          {/* Ítem 4: Egresados */}
          <a href="#egresados" className="flex flex-col items-center group cursor-pointer w-32">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-b-4 border-institucional-yellow hover:-translate-y-2 transition-transform text-institucional-dark group-hover:text-institucional-yellow">
              {/* Ícono Birrete */}
              <svg className="w-10 h-10 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <span className="mt-4 font-semibold text-gray-800 text-center text-sm md:text-base group-hover:text-institucional-dark transition-colors">
              Egresados
            </span>
          </a>
        </div>
      </section>

      {/* Sección 3: ¿Quiénes Somos? (Breve) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-institucional-dark">
            ¿Quiénes Somos?
          </h2>
          <div className="w-16 h-1.5 bg-institucional-yellow mx-auto rounded-full"></div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            La Fundación Universal de Estudios Técnicos – UNIVERTEC es una Institución de Educación para el Trabajo y el Desarrollo Humano (ETDH), con sede principal en el municipio de Malambo, Atlántico.
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
