import React from 'react';
import fotoFundadora from '../assets/fundadora.jpeg';

const Nosotros = () => {
  const valores = [
    {
      titulo: 'Innovación',
      descripcion: 'Búsqueda constante de mejores ideas y soluciones.',
    },
    {
      titulo: 'Compromiso',
      descripcion: 'Responsabilidad en cada decisión que impacta a la comunidad.',
    },
    {
      titulo: 'Trabajo en Equipo',
      descripcion: 'Crecer como unidad, logrando cosas grandiosas juntos.',
    },
    {
      titulo: 'Ética',
      descripcion: 'Operar bajo las leyes, respetando la integridad humana.',
    },
  ];

  // Configuración de placeholders para la Galería asimétrica / Masonry
  const galeriaPlaceholders = [
    { id: 1, colSpan: 'md:col-span-2', minHeight: 'min-h-[280px]' },
    { id: 2, colSpan: 'md:col-span-1', minHeight: 'min-h-[280px]' },
    { id: 3, colSpan: 'md:col-span-1', minHeight: 'min-h-[250px]' },
    { id: 4, colSpan: 'md:col-span-1', minHeight: 'min-h-[250px]' },
    { id: 5, colSpan: 'md:col-span-1', minHeight: 'min-h-[250px]' },
    { id: 6, colSpan: 'md:col-span-3', minHeight: 'min-h-[300px]' },
  ];

  return (
    <div className="w-full">
      {/* Sección 1: Historia Institucional (Hero / Intro) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna Izquierda (Textos) */}
          <div>
            <h1 className="text-4xl font-bold text-institucional-verde mb-6">
              Nuestra Historia
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              La Fundación Universal de Estudios Técnicos – UNIVERTEC nació el 3 de julio de 2012 en la ciudad de Barranquilla, como el proyecto de una profesional emprendedora enfocada en ofrecer educación para el trabajo de alta calidad.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Con el objetivo de expandir nuestro impacto y cobertura institucional, estamos <strong className="text-institucional-verde font-bold underline decoration-institucional-amarillo decoration-2">Certificados en el área metropolitana de Barranquilla (Malambo)</strong>, operando bajo la Licencia de Funcionamiento No. 973 del 10 de agosto de 2022.
            </p>
          </div>

          {/* Columna Derecha (Imagen) */}
          <div>
            <img src={fotoFundadora} alt="Marjorie Elena Amaya Villalobos" className="w-full max-w-sm mx-auto rounded-xl shadow-lg object-cover" />
            <div className="text-center mt-4">
              <p className="font-bold text-institucional-azul text-lg">Marjorie Elena Amaya Villalobos</p>
              <p className="text-gray-600 text-sm font-medium">Fundadora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Misión y Visión (Bloque Oscuro) */}
      <section className="bg-institucional-verde py-16 text-white relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-institucional-amarillo/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Tarjeta Misión */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl hover:border-institucional-amarillo/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-institucional-amarillo text-2xl font-bold mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
                Orientar el quehacer académico, organizacional y administrativo de UNIVERTEC, buscando insertar a nuestros egresados en el mundo laboral, formando técnicos de nivel superior que cuenten con las capacidades, habilidades y valores necesarios para incorporarse de manera efectiva en la comunidad.
              </p>
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl hover:border-institucional-amarillo/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-institucional-amarillo text-2xl font-bold mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
                Para el año 2030, seremos una institución dirigente en la prestación de servicios de formación laboral, reconocida en el sector productivo como una organización con altos niveles de innovación, productividad y comprometida con el desarrollo integral de la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Valores Institucionales (Grid de Tarjetas) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-institucional-verde text-center mb-12">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-t-4 border-institucional-amarillo hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-institucional-verde mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Galería de la Comunidad (Grid asimétrico / Masonry) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-institucional-verde/10 text-institucional-verde text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-3 border border-institucional-verde/20">
              Vida Universitaria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-institucional-verde">
              Nuestra Comunidad
            </h2>
            <div className="w-16 h-1.5 bg-institucional-amarillo mx-auto rounded-full mt-3"></div>
            <p className="text-gray-600 mt-4 text-base sm:text-lg">
              Momentos, aprendizajes e impacto social en nuestras aulas y talleres prácticos.
            </p>
          </div>

          {/* Grid de Placeholders de Fotos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galeriaPlaceholders.map((item) => (
              <div
                key={item.id}
                className={`bg-gray-200 rounded-xl ${item.colSpan} ${item.minHeight} border border-gray-300/60 shadow-sm flex flex-col items-center justify-center p-6 hover:scale-[1.02] hover:shadow-xl hover:border-institucional-verdeClaro/50 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                {/* Ícono de foto/imagen */}
                <div className="w-16 h-16 rounded-full bg-white/70 flex items-center justify-center text-gray-400 group-hover:text-institucional-verde group-hover:bg-white transition-colors duration-300 shadow-sm mb-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <span className="font-bold text-gray-500 text-base sm:text-lg group-hover:text-institucional-verde transition-colors">
                  Foto Institucional
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  Espacio disponible para imagen {item.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
