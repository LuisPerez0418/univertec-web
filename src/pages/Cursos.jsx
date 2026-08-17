import React, { useState, useEffect } from 'react';

const CourseItem = ({ nombre, horas }) => (
  <li className="flex justify-between items-center text-sm gap-2">
    <span className="text-gray-700">{nombre}</span>
    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold shrink-0">
      {horas}h
    </span>
  </li>
);

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [diplomados, setDiplomados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await fetch('https://api.univertec.org/api/programas');
        const data = await response.json();
        if (data.success) {
          const activos = data.data.filter(p => p.estado);
          
          setDiplomados(activos.filter(p => p.tipo === 'Diplomado'));
          setCursos(activos.filter(p => p.tipo === 'Curso'));
        }
      } catch (error) {
        console.error('Error al cargar cursos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramas();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <h1 className="text-institucional-verde font-bold text-3xl md:text-4xl mb-4 text-center">
        Diplomados y Cursos Cortos
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explora nuestra oferta de educación continua diseñada para fortalecer tus habilidades profesionales y potenciar tu perfil laboral.
      </p>

      {loading ? (
        <div className="text-center text-gray-500 py-10">
          <svg className="animate-spin h-10 w-10 text-[#006039] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Cargando oferta académica...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Columna Diplomados */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="bg-institucional-verde text-white p-4 text-center font-bold text-xl flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Nuestros Diplomados
            </div>
            <div className="p-6 space-y-6 flex-grow">
              {diplomados.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Aún no hay diplomados disponibles.</p>
              ) : (
                <ul className="space-y-4">
                  {diplomados.map((item) => (
                    <li key={item._id} className="border-b border-gray-100 pb-3 last:border-0">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <span className="text-gray-800 font-bold">{item.titulo}</span>
                        <span className="bg-institucional-amarillo text-[#006039] px-2 py-0.5 rounded text-xs font-bold shrink-0">
                          {item.duracion_horas}h
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">Certificación: {item.certificacion}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Columna Cursos */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="bg-institucional-verde text-white p-4 text-center font-bold text-xl flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Nuestros Cursos Cortos
            </div>
            <div className="p-6 space-y-6 flex-grow">
              {cursos.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Aún no hay cursos disponibles.</p>
              ) : (
                <ul className="space-y-4">
                  {cursos.map((item) => (
                    <li key={item._id} className="border-b border-gray-100 pb-3 last:border-0">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <span className="text-gray-800 font-bold">{item.titulo}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-semibold shrink-0">
                          {item.duracion_horas}h
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">Certificación: {item.certificacion}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cursos;
