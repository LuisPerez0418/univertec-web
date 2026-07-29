import React from 'react';

const Admisiones = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-institucional-verde mb-8">
          Admisiones y Procesos Institucionales
        </h1>

        {/* Sección 1: Formaliza tu inscripción */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Formaliza tu inscripción</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3 space-y-3">
            <p className="text-gray-700 leading-relaxed">
              Si ya elegiste el programa de formación que deseas estudiar, te invitamos a revisar cuidadosamente toda la información relacionada con el plan de estudios, los requisitos de ingreso, las fechas de inicio, los costos...
            </p>
            <p className="text-gray-700 leading-relaxed">
              Antes de iniciar el proceso de matrícula, es importante que conozcas y aceptes el Reglamento Estudiantil...
            </p>
            <p className="font-semibold text-gray-800 pt-2">Pasos:</p>
            <ol className="list-decimal list-inside space-y-2 mt-4 text-gray-700">
              <li>1. Diligencia el formulario.</li>
              <li>2. Adjunta la documentación.</li>
              <li>3. Realiza el pago.</li>
              <li>4. Efectúa el pago del programa.</li>
            </ol>
          </div>
        </details>

        {/* Sección 2: Requisitos de ingreso */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Requisitos de ingreso</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>Copia legible del documento de identidad.</li>
              <li>Copia del diploma de bachiller o acta de grado (o certificado de noveno grado).</li>
              <li>Comprobante de pago del carné institucional y del seguro estudiantil.</li>
            </ul>
            <p className="mt-4 p-3 bg-gray-50 rounded-md border-l-4 border-institucional-verde text-gray-700 leading-relaxed">
              <span className="font-semibold">Nota:</span> Una vez formalizada la matrícula, el estudiante deberá asistir a la jornada de inducción institucional, cuya participación es obligatoria.
            </p>
          </div>
        </details>

        {/* Sección 3: Medios de pago */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Medios de pago</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>Pago en efectivo en las instalaciones.</li>
              <li>Transferencia bancaria.</li>
              <li>Consignación bancaria.</li>
              <li>Pago con tarjeta débito o crédito.</li>
              <li>Financiación o pago por cuotas.</li>
            </ul>
          </div>
        </details>

        {/* Sección 4: Financiación y Modalidades de pago */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Financiación y Modalidades de pago</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>
                <span className="font-semibold">Pago de contado:</span> Cancelación del valor total al momento de formalizar la matrícula.
              </li>
              <li>
                <span className="font-semibold">Pago por cuotas:</span> Financiación directa con la institución.
              </li>
              <li>
                <span className="font-semibold">Convenios de financiación:</span> Con entidades financieras o empresas.
              </li>
            </ul>
          </div>
        </details>

        {/* Sección 5: Proceso de certificación */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Proceso de certificación</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>Aprobar todos los módulos.</li>
              <li>Cumplir con las horas de formación y prácticas.</li>
              <li>Encontrarse a paz y salvo por todo concepto.</li>
              <li>Presentar la documentación adicional.</li>
            </ul>
          </div>
        </details>

        {/* Sección 6: Proceso de reintegro */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Proceso de reintegro</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>Presentar la solicitud de reintegro en los plazos establecidos.</li>
              <li>Actualizar la información.</li>
              <li>Encontrarse a paz y salvo.</li>
              <li>Realizar el pago de los derechos de reintegro.</li>
            </ul>
          </div>
        </details>

        {/* Sección 7: Homologaciones */}
        <details className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4 group transition-all duration-200">
          <summary className="font-bold cursor-pointer text-gray-900 text-lg md:text-xl flex items-center justify-between py-1 select-none outline-none group-open:text-institucional-verde transition-colors">
            <span>Homologaciones</span>
            <svg
              className="w-5 h-5 text-institucional-verde transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <p className="text-gray-700 font-semibold mt-2">El interesado deberá:</p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>Presentar la solicitud.</li>
              <li>Aportar los certificados de estudio.</li>
              <li>Cumplir con los requisitos y plazos.</li>
              <li>Realizar el pago de los derechos.</li>
            </ul>
            <p className="mt-4 p-3 bg-amber-50 rounded-md border-l-4 border-institucional-amarillo text-gray-700 leading-relaxed">
              La aprobación de una homologación no es automática y estará sujeta al análisis de la documentación presentada.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Admisiones;
