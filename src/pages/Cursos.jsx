import React from 'react';

const CourseItem = ({ nombre, horas }) => (
  <li className="flex justify-between items-center text-sm gap-2">
    <span className="text-gray-700">{nombre}</span>
    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold shrink-0">
      {horas}
    </span>
  </li>
);

const Cursos = () => {
  const areaAdministrativa = {
    diplomados: [
      { nombre: 'Gestión Administrativa y Organizacional', horas: '120 horas' },
      { nombre: 'Gestión del Talento Humano', horas: '120 horas' },
      { nombre: 'Nómina y Seguridad Social', horas: '100 horas' },
      { nombre: 'Emprendimiento y Creación de Empresa', horas: '80 horas' },
      { nombre: 'Servicio al Cliente y Gestión Comercial', horas: '100 horas' },
    ],
    cursosCortos: [
      { nombre: 'Atención al cliente y manejo de PQRS', horas: '40 horas' },
      { nombre: 'Archivo y gestión documental', horas: '40 horas' },
      { nombre: 'Herramientas ofimáticas (Word, Excel y PowerPoint)', horas: '60 horas' },
      { nombre: 'Excel básico, intermedio y avanzado', horas: '80 horas' },
      { nombre: 'Facturación y manejo de documentos contables', horas: '40 horas' },
      { nombre: 'Comunicación efectiva y trabajo en equipo', horas: '30 horas' },
      { nombre: 'Liderazgo y habilidades blandas', horas: '40 horas' },
      { nombre: 'Primeros auxilios básicos', horas: '40 horas' },
    ],
  };

  const areaPrimeraInfancia = {
    diplomados: [
      { nombre: 'Diplomado en Atención Integral a la Primera Infancia', horas: '120 horas' },
      { nombre: 'Diplomado en Estrategias Pedagógicas para el Desarrollo Infantil', horas: '100 horas' },
      { nombre: 'Diplomado en Inclusión Educativa y Atención a la Diversidad', horas: '80 horas' },
    ],
    cursosCortos: [
      { nombre: 'Estimulación temprana', horas: '40 horas' },
      { nombre: 'Actividades lúdico-pedagógicas para niños', horas: '40 horas' },
      { nombre: 'Desarrollo socioemocional en la infancia', horas: '40 horas' },
      { nombre: 'Escuela de padres y acompañamiento familiar', horas: '30 horas' },
      { nombre: 'Prevención del maltrato infantil', horas: '40 horas' },
      { nombre: 'Diseño de material didáctico', horas: '40 horas' },
    ],
  };

  const areaAmbiental = {
    diplomados: [
      { nombre: 'Diplomado en Gestión Ambiental Empresarial', horas: '120 horas' },
      { nombre: 'Diplomado en Gestión Integral de Residuos Sólidos', horas: '100 horas' },
      { nombre: 'Diplomado en Saneamiento Básico y Salud Ambiental', horas: '120 horas' },
      { nombre: 'Diplomado en Educación Ambiental y Desarrollo Sostenible', horas: '80 horas' },
    ],
    cursosCortos: [
      { nombre: 'Manejo adecuado de residuos sólidos', horas: '40 horas' },
      { nombre: 'Separación en la fuente y aprovechamiento de residuos', horas: '30 horas' },
      { nombre: 'Educación ambiental comunitaria', horas: '40 horas' },
      { nombre: 'Gestión del recurso hídrico', horas: '40 horas' },
      { nombre: 'Buenas prácticas ambientales empresariales', horas: '40 horas' },
      { nombre: 'Introducción a la gestión ambiental', horas: '30 horas' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <h1 className="text-institucional-verde font-bold text-3xl md:text-4xl mb-4 text-center">
        Diplomados y Cursos Cortos
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
        {/* Tarjeta 1: Área Administrativa */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <div className="bg-institucional-verde text-white p-4 text-center font-bold text-xl">
            Área Administrativa
          </div>
          <div className="p-6 space-y-6 flex-grow">
            <div>
              <h2 className="text-institucional-amarillo font-bold text-lg border-b border-gray-200 pb-2 mb-3">
                Diplomados
              </h2>
              <ul className="space-y-2">
                {areaAdministrativa.diplomados.map((item, index) => (
                  <CourseItem key={index} nombre={item.nombre} horas={item.horas} />
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-institucional-amarillo font-bold text-lg border-b border-gray-200 pb-2 mb-3">
                Cursos Cortos
              </h2>
              <ul className="space-y-2">
                {areaAdministrativa.cursosCortos.map((item, index) => (
                  <CourseItem key={index} nombre={item.nombre} horas={item.horas} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 2: Área Primera Infancia */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <div className="bg-institucional-verde text-white p-4 text-center font-bold text-xl">
            Área de Primera Infancia
          </div>
          <div className="p-6 space-y-6 flex-grow">
            <div>
              <h2 className="text-institucional-amarillo font-bold text-lg border-b border-gray-200 pb-2 mb-3">
                Diplomados
              </h2>
              <ul className="space-y-2">
                {areaPrimeraInfancia.diplomados.map((item, index) => (
                  <CourseItem key={index} nombre={item.nombre} horas={item.horas} />
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-institucional-amarillo font-bold text-lg border-b border-gray-200 pb-2 mb-3">
                Cursos Cortos
              </h2>
              <ul className="space-y-2">
                {areaPrimeraInfancia.cursosCortos.map((item, index) => (
                  <CourseItem key={index} nombre={item.nombre} horas={item.horas} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 3: Área Ambiental y Saneamiento */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <div className="bg-institucional-verde text-white p-4 text-center font-bold text-xl">
            Área Ambiental y Saneamiento
          </div>
          <div className="p-6 space-y-6 flex-grow">
            <div>
              <h2 className="text-institucional-amarillo font-bold text-lg border-b border-gray-200 pb-2 mb-3">
                Diplomados
              </h2>
              <ul className="space-y-2">
                {areaAmbiental.diplomados.map((item, index) => (
                  <CourseItem key={index} nombre={item.nombre} horas={item.horas} />
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-institucional-amarillo font-bold text-lg border-b border-gray-200 pb-2 mb-3">
                Cursos Cortos
              </h2>
              <ul className="space-y-2">
                {areaAmbiental.cursosCortos.map((item, index) => (
                  <CourseItem key={index} nombre={item.nombre} horas={item.horas} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
