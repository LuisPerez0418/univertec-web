import React from 'react';

const OfertaAcademica = () => {
  const tecnicosLaborales = [
    {
      id: 1,
      titulo: 'Movilidad y Seguridad Vial',
      descripcion:
        'Orientadores en la circulación vehicular y peatonal contribuyendo a la organización del sistema vial.',
      icono: (
        <svg
          className="w-8 h-8 text-institucional-verde"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
    },
    {
      id: 2,
      titulo: 'Salud Ambiental',
      descripcion:
        'Construcción de una sociedad justa y equilibrada, con sólidos componentes humanísticos y desarrollo sostenible.',
      icono: (
        <svg
          className="w-8 h-8 text-institucional-verde"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      titulo: 'Atención Integral a la Primera Infancia',
      descripcion:
        'Herramientas necesarias para el desarrollo emocional, cognitivo y psicológico de niños y niñas.',
      icono: (
        <svg
          className="w-8 h-8 text-institucional-verde"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const diplomados = [
    {
      id: 1,
      titulo: 'Orientaciones Pedagógicas en Movilidad Segura',
      horas: '135 Horas',
      creditos: '3 Créditos',
      convenio: 'Normal Superior del Distrito de Barranquilla',
    },
    {
      id: 2,
      titulo: 'Desarrollo Integral para la Atención en la Primera Infancia',
      horas: '325 Horas',
      creditos: '7 Créditos',
      convenio: 'Normal Superior del Distrito de Barranquilla',
    },
    {
      id: 3,
      titulo: 'Para Profesionales No Licenciados en Educación',
      horas: '600 Horas',
      creditos: '13 Créditos',
    },
    {
      id: 4,
      titulo: 'Plan de Ordenamiento Territorial (P.O.T.)',
      horas: '100 Horas',
    },
  ];

  const cursosCortos = [
    'Policía Judicial',
    'Facilitadores de Movilidad',
    'Manejo y Gestión de Residuos Sólidos',
  ];

  return (
    <div className="w-full py-12">
      {/* Encabezado de página (Hero pequeño) */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-institucional-verde rounded-3xl p-8 md:p-14 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-institucional-amarillo/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-institucional-amarillo/20 text-institucional-amarillo text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-4 border border-institucional-amarillo/30">
              Portafolio Educativo
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Nuestra Oferta Académica
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Formación para el trabajo y el desarrollo humano orientada a potenciar tus competencias éticas y laborales. Nuestros programas están diseñados para responder a los retos y demandas reales del sector productivo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 1: Programas Técnicos Laborales */}
      <section className="container mx-auto px-4 mb-20">
        <div className="mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-institucional-verde tracking-tight">
            Programas Técnicos Laborales
          </h2>
          <p className="text-gray-600 mt-2 text-base">
            Prepárate con altas competencias y proyección laboral en programas de excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tecnicosLaborales.map((progr) => (
            <div
              key={progr.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Pequeño banner superior */}
              <div className="bg-institucional-amarillo px-5 py-2 flex items-center justify-between">
                <span className="text-institucional-verde font-bold text-xs uppercase tracking-wider">
                  Técnico Laboral
                </span>
                <span className="w-2 h-2 rounded-full bg-institucional-verde/40 animate-pulse" />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-institucional-amarillo/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {progr.icono}
                  </div>
                  <h3 className="text-xl font-bold text-institucional-verde mb-3 leading-snug group-hover:text-institucional-verdeClaro transition-colors">
                    {progr.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {progr.descripcion}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Presencial / Semipresencial
                  </span>
                  <div className="text-institucional-verde font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Ver más</span>
                    <svg
                      className="w-4 h-4 text-institucional-amarillo"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 2: Diplomados */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200/70 shadow-sm">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-institucional-verde/60 bg-white px-3 py-1 rounded-full border border-gray-200 inline-block mb-3">
              Actualización Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-institucional-verde tracking-tight">
              Diplomados
            </h2>
            <p className="text-gray-600 mt-2 text-base">
              Programas de profundización y especialización con convenios estratégicos de alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diplomados.map((dip) => (
              <div
                key={dip.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/80 flex flex-col sm:flex-row items-start gap-4 group"
              >
                {/* Ícono a la izquierda */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-institucional-verde text-institucional-amarillo flex items-center justify-center group-hover:bg-institucional-amarillo group-hover:text-institucional-verde transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>

                {/* Contenido a la derecha */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-institucional-verde mb-3 leading-snug group-hover:text-institucional-verdeClaro transition-colors">
                    {dip.titulo}
                  </h3>

                  {/* Badges / Etiquetas */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {dip.horas && (
                      <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold inline-flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {dip.horas}
                      </span>
                    )}
                    {dip.creditos && (
                      <span className="bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-semibold inline-flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {dip.creditos}
                      </span>
                    )}
                  </div>

                  {dip.convenio && (
                    <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 inline-block">
                      <span className="font-semibold text-gray-700">Convenio:</span> {dip.convenio}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: Cursos Cortos y Capacitación */}
      <section className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-institucional-verde tracking-tight">
            Cursos Cortos y Capacitación
          </h2>
          <p className="text-gray-600 mt-2 text-base">
            Opciones de aprendizaje ágiles diseñadas para el fortalecimiento de habilidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cursosCortos.map((curso, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-r-xl border border-gray-100 border-l-4 border-l-institucional-amarillo shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group hover:translate-x-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-institucional-verde group-hover:bg-institucional-amarillo/20 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-base sm:text-lg group-hover:text-institucional-verde transition-colors">
                  {curso}
                </h3>
              </div>

              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-institucional-verde transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfertaAcademica;
