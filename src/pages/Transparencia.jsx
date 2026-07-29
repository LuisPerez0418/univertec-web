import React from 'react';

const Transparencia = () => {
  const documentos = [
    {
      id: 1,
      titulo: 'Proyecto Educativo Institucional (PEI)',
      descripcion:
        'Documento marco que define la identidad, principios, modelo pedagógico y reglamentos de nuestra institución.',
      enlace: '/pei-univertec.pdf',
    },
    {
      id: 2,
      titulo: 'Licencia de Funcionamiento',
      descripcion:
        'Resolución No. 973 del 10 de agosto de 2022, expedida por la Secretaría de Educación municipal.',
      enlace: '/licencia-funcionamiento.pdf',
    },
    {
      id: 3,
      titulo: 'Aprobación de Programas Técnicos',
      descripcion:
        'Resolución oficial de la Secretaría de Educación que avala nuestros programas de Educación para el Trabajo y el Desarrollo Humano.',
      enlace: '/aprobacion-programas.pdf',
    },
    {
      id: 4,
      titulo: 'Manual de Convivencia',
      descripcion:
        'Normatividad interna, derechos, deberes y protocolos para garantizar una sana convivencia en nuestra comunidad educativa.',
      enlace: '/pei-univertec.pdf',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Cabecera (Header de la página) */}
      <section className="bg-institucional-verde text-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl font-bold text-institucional-amarillo mb-4">
            Transparencia y Legalidad
          </h1>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            En cumplimiento de la normatividad vigente, la Fundación UNIVERTEC pone a disposición de la comunidad educativa y el público en general sus documentos institucionales y resoluciones oficiales.
          </p>
        </div>
      </section>

      {/* 2. Grid de Documentos (Contenido Principal) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentos.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-md p-8 border-l-4 border-institucional-amarillo hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Ícono SVG del documento */}
                <div className="w-14 h-14 shrink-0 rounded-xl bg-institucional-verde/5 flex items-center justify-center text-institucional-verde group-hover:bg-institucional-amarillo/20 transition-colors duration-300">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                {/* Información y botón de descarga */}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-xl font-bold text-institucional-verde group-hover:text-institucional-verdeClaro transition-colors">
                      {doc.titulo}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
                      {doc.descripcion}
                    </p>
                  </div>

                  <div>
                    <a
                      href={doc.enlace}
                      download
                      className="bg-institucional-amarillo text-institucional-verde px-4 py-2 rounded font-semibold inline-flex items-center gap-2 mt-4 hover:bg-yellow-500 transition-colors shadow-sm hover:shadow"
                    >
                      <span>Descargar PDF</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transparencia;
