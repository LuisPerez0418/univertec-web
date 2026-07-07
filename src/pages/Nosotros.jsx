import React from 'react';

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

  return (
    <div className="w-full">
      {/* Sección 1: Historia Institucional (Hero / Intro) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda (Textos) */}
          <div>
            <h1 className="text-4xl font-bold text-institucional-dark mb-6">
              Nuestra Historia
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              La Fundación Universal de Estudios Técnicos – UNIVERTEC nació el 3 de julio de 2012 en la ciudad de Barranquilla, como el proyecto de una profesional emprendedora enfocada en ofrecer educación para el trabajo de alta calidad.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Con el objetivo de expandir nuestro impacto, nos trasladamos al municipio de Malambo, donde actualmente operamos desde dos sedes estratégicas (Administrativa en El Concord y Educativa en El Carmen). Operamos bajo la Licencia de Funcionamiento No. 973 del 10 de agosto de 2022, expedida por la Secretaría de Educación de Malambo.
            </p>
          </div>

          {/* Columna Derecha (Imagen) */}
          <div>
            <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center text-gray-400 shadow-lg">
              <span className="font-medium text-base sm:text-lg">Foto Histórica Institucional</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Misión y Visión (Bloque Oscuro) */}
      <section className="bg-institucional-dark py-16 text-white relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-institucional-yellow/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Tarjeta Misión */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl hover:border-institucional-yellow/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-institucional-yellow text-2xl font-bold mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
                Orientar el quehacer académico, organizacional y administrativo de UNIVERTEC, buscando insertar a nuestros egresados en el mundo laboral, formando técnicos de nivel superior que cuenten con las capacidades, habilidades y valores necesarios para incorporarse de manera efectiva en la comunidad.
              </p>
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl hover:border-institucional-yellow/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-institucional-yellow text-2xl font-bold mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
                Para el año 2030, seremos una institución líder en la prestación de servicios de formación laboral, reconocida en el sector productivo como una organización con altos niveles de innovación, productividad y comprometida con el desarrollo integral de la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Valores Institucionales (Grid de Tarjetas) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-institucional-dark text-center mb-12">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-t-4 border-institucional-yellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-institucional-dark mb-3">
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
    </div>
  );
};

export default Nosotros;
