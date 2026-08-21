import React, { useState, useEffect } from 'react';
import banner7 from '../assets/banner7.jpeg';

const Programas = () => {
  const [programas, setProgramas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/programas');
        const data = await response.json();
        if (data.success) {
          // Filtrar solo los de tipo Técnico que estén activos
          const tecnicos = data.data.filter(p => p.tipo === 'Técnico' && p.estado);
          setProgramas(tecnicos);
        }
      } catch (error) {
        console.error('Error al cargar programas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramas();
  }, []);

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

        {loading ? (
          <div className="text-center text-gray-500 py-10">
            <svg className="animate-spin h-10 w-10 text-[#006039] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p>Cargando programas técnicos...</p>
          </div>
        ) : programas.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No hay programas técnicos registrados en este momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {programas.map((programa) => (
              <div key={programa._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="bg-institucional-verde text-white p-6">
                  <h2 className="text-xl md:text-2xl font-bold leading-snug">
                    {programa.titulo}
                  </h2>
                </div>

                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                      Nivel: Técnico Laboral
                    </span>
                    <span className="bg-institucional-amarillo text-institucional-verde font-bold rounded-full px-3 py-1 text-xs">
                      Duración: {programa.duracion_horas} horas
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Certificación: {programa.certificacion}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-gray-100 mt-2">
                    <div>
                      <h3 className="font-bold text-institucional-verde text-base mb-2">
                        Objetivos del Programa
                      </h3>
                      {programa.objetivos && programa.objetivos.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                          {programa.objetivos.map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">No hay objetivos registrados.</p>
                      )}
                    </div>

                    {programa.modulos && programa.modulos.length > 0 && (
                      <div className="pt-4">
                        <h3 className="font-bold text-institucional-verde text-base mb-2">
                          Módulos Principales
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {programa.modulos.slice(0, 6).map((mod, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              {mod.nombre}
                            </span>
                          ))}
                          {programa.modulos.length > 6 && (
                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">
                              +{programa.modulos.length - 6} más...
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Programas;
