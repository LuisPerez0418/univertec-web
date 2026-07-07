import React, { useState } from 'react';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Sección 1: Cabecera (Hero Pequeño) */}
      <section className="bg-institucional-dark text-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl font-bold text-institucional-yellow mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Estamos aquí para resolver tus dudas y guiarte en tu proceso de formación técnica. Escríbenos o visítanos en nuestras sedes.
          </p>
        </div>
      </section>

      {/* Sección 2: Contenedor Principal (Grid de 2 columnas) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna Izquierda: Información y Sedes */}
          <div className="bg-white p-8 rounded-xl shadow-md h-fit">
            <h2 className="text-2xl font-bold text-institucional-dark mb-6">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              {/* Sede Administrativa */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-institucional-dark/5 text-institucional-dark flex items-center justify-center shrink-0">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    Sede Administrativa
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    Calle 12 No. 26B-51, barrio El Concord, Malambo (segundo piso).
                  </p>
                </div>
              </div>

              {/* Sede Educativa */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-institucional-dark/5 text-institucional-dark flex items-center justify-center shrink-0">
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
                <div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    Sede Educativa
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    Carrera 1C No. 12-37, barrio El Carmen, Malambo.
                  </p>
                </div>
              </div>

              {/* Teléfono / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-institucional-dark/5 text-institucional-dark flex items-center justify-center shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    Teléfono / WhatsApp
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    +57 301 1028224
                  </p>
                </div>
              </div>

              {/* Correos Electrónicos */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-institucional-dark/5 text-institucional-dark flex items-center justify-center shrink-0">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    Correos Electrónicos
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    info@univertec.com / univertecbq@gmail.com
                  </p>
                </div>
              </div>

              {/* Horario de Atención */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-institucional-dark/5 text-institucional-dark flex items-center justify-center shrink-0">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    Lunes a Viernes, 8:00 a.m. – 5:00 p.m.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-institucional-dark mb-6">
              Envíanos un Mensaje
            </h2>

            {enviado && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm sm:text-base flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre Completo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-institucional-yellow focus:border-institucional-yellow transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ej: juan.perez@correo.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-institucional-yellow focus:border-institucional-yellow transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Teléfono / Celular */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono / Celular
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: +57 301 1028224"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-institucional-yellow focus:border-institucional-yellow transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Programa de Interés */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Programa de Interés
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-institucional-yellow focus:border-institucional-yellow transition-colors text-gray-800 bg-white"
                >
                  <option value="" disabled>
                    Selecciona un programa...
                  </option>
                  <option value="Primera Infancia">Primera Infancia</option>
                  <option value="Saneamiento Básico">Saneamiento Básico</option>
                  <option value="Tránsito y Seguridad Vial">
                    Tránsito y Seguridad Vial
                  </option>
                  <option value="Diplomados / Cursos">Diplomados / Cursos</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escribe tu mensaje o inquietud aquí..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-institucional-yellow focus:border-institucional-yellow transition-colors text-gray-800 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                className="bg-institucional-yellow text-institucional-dark font-bold w-full py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <span>Enviar Mensaje</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
