import React from 'react';
import banner7 from '../assets/banner7.jpeg';

const Programas = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Banner Superior */}
      <div className="w-full">
        <img
          src={banner7}
          alt="Banner Programas Técnicos"
          className="w-full h-auto block shadow-md"
        />
      </div>

      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <h1 className="text-institucional-verde font-bold text-3xl md:text-4xl mb-10 text-center">
          Nuestros Programas Técnicos
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Tarjeta 1: Primera Infancia */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <div className="bg-institucional-verde text-white p-6">
            <h2 className="text-xl md:text-2xl font-bold leading-snug">
              Técnico Laboral por Competencias en Atención Integral a la Primera Infancia
            </h2>
          </div>

          <div className="p-6 flex flex-col gap-4 flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                Nivel: Técnico Laboral
              </span>
              <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                Modalidad: Presencial
              </span>
              <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                Duración: 1.000 horas
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Formar Técnicos Laborales por Competencias en Atención Integral a la Primera Infancia con las capacidades necesarias para desarrollar procesos de acompañamiento, cuidado, protección y formación de niños y niñas, mediante la implementación de estrategias pedagógicas, lúdicas y metodológicas.
            </p>

            <div className="space-y-4 pt-2 border-t border-gray-100 mt-2">
              <div>
                <h3 className="font-bold text-institucional-verde text-base mb-1.5">
                  Perfil del egresado
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Apoyar procesos de atención</li>
                  <li>Implementar actividades lúdicas</li>
                  <li>Promover ambientes seguros</li>
                  <li>Aplicar estrategias de estimulación</li>
                  <li>Participar en protección de derechos</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-institucional-verde text-base mb-1.5">
                  Competencias
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Brindar atención integral</li>
                  <li>Ejecutar actividades pedagógicas</li>
                  <li>Aplicar protocolos de cuidado e higiene</li>
                  <li>Reconocer derechos de la primera infancia</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-institucional-verde text-base mb-1.5">
                  Campo laboral
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Jardines infantiles</li>
                  <li>Instituciones educativas</li>
                  <li>Fundaciones</li>
                  <li>Hogares comunitarios</li>
                  <li>Programas públicos/privados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta 2: Saneamiento Ambiental */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <div className="bg-institucional-verde text-white p-6">
            <h2 className="text-xl md:text-2xl font-bold leading-snug">
              Técnico Laboral por Competencias en Saneamiento Ambiental
            </h2>
          </div>

          <div className="p-6 flex flex-col gap-4 flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                Nivel: Técnico Laboral
              </span>
              <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                Duración: 1.280 horas
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Formar Técnicos Laborales con conocimientos, habilidades y capacidades técnicas para apoyar procesos relacionados con la prevención, control y mitigación de riesgos ambientales, contribuyendo a la protección de los ecosistemas, la salud pública y el bienestar de la comunidad.
            </p>

            <div className="space-y-4 pt-2 border-t border-gray-100 mt-2">
              <div>
                <h3 className="font-bold text-institucional-verde text-base mb-1.5">
                  Perfil ocupacional
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Asistente de saneamiento ambiental</li>
                  <li>Técnico en salud ambiental</li>
                  <li>Técnico en análisis de agua</li>
                  <li>Asistente en gestión de residuos</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-institucional-verde text-base mb-1.5">
                  Competencias
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Apoyar prevención de riesgos</li>
                  <li>Participar en saneamiento básico</li>
                  <li>Aplicar procedimientos de manejo de residuos</li>
                  <li>Promover prácticas sostenibles</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-institucional-verde text-base mb-1.5">
                  Campo laboral
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Empresas de servicios públicos</li>
                  <li>Entidades ambientales</li>
                  <li>Empresas de gestión de residuos</li>
                  <li>Laboratorios de control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Programas;
