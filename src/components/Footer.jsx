import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Footer = () => {
  return (
    <footer className="bg-institucional-verde text-gray-300 py-12 px-4 sm:px-8 border-t border-institucional-verdeClaro/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Identidad Institucional */}
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={logo}
              alt="UNIVERTEC"
              className="h-16 mb-4 object-contain bg-white/5 p-1.5 rounded-lg"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Formamos personas competentes, emprendedoras y comprometidas con el desarrollo social y económico de la región Caribe.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4 tracking-wide">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {/* WhatsApp */}
            <li className="flex items-center space-x-2.5">
              <svg
                className="w-5 h-5 fill-current text-institucional-amarillo shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.999 2C6.478 2 1.999 6.479 1.999 12c0 1.77.46 3.498 1.339 5.016L2 22l5.123-1.341c1.464.798 3.118 1.218 4.876 1.218 5.521 0 10-4.479 10-10s-4.479-10-10-10zm0 18.156c-1.523 0-3.013-.409-4.316-1.185l-.309-.184-3.208.841.856-3.128-.201-.321c-.854-1.36-1.305-2.929-1.305-4.551 0-4.686 3.812-8.498 8.483-8.498 4.671 0 8.483 3.812 8.483 8.498 0 4.686-3.812 8.498-8.483 8.498zm4.649-6.388c-.255-.128-1.509-.745-1.742-.83-.233-.085-.403-.128-.573.128-.17.255-.658.83-.807.999-.149.17-.297.191-.552.064-.255-.128-1.077-.397-2.051-1.266-.757-.674-1.268-1.507-1.417-1.762-.149-.255-.016-.393.112-.52.115-.115.255-.297.382-.446.128-.149.17-.255.255-.425.085-.17.042-.319-.021-.446-.064-.128-.573-1.382-.786-1.892-.207-.497-.417-.43-.573-.438-.149-.008-.319-.008-.489-.008-.17 0-.446.064-.679.319-.233.255-.892.872-.892 2.126 0 1.254.914 2.466 1.041 2.636.128.17 1.799 2.748 4.358 3.852.609.263 1.085.42 1.456.538.612.195 1.169.167 1.609.102.492-.073 1.509-.616 1.722-1.212.212-.596.212-1.106.149-1.212-.064-.106-.233-.17-.489-.297z" />
              </svg>
              <span>
                <strong className="text-white font-medium">WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/573011028224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-institucional-amarillo transition-colors"
                >
                  +57 301 1028224
                </a>
              </span>
            </li>

            {/* Horario */}
            <li className="flex items-center space-x-2.5">
              <svg
                className="w-5 h-5 text-institucional-amarillo shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong className="text-white font-medium">Horario:</strong> Lunes a Viernes, 8:00 a.m. – 5:00 p.m.
              </span>
            </li>
          </ul>
        </div>

        {/* Columna 3: Enlaces de Interés */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg tracking-wide">
            Accesos Rápidos
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                to="/transparencia"
                className="hover:text-institucional-amarillo transition-colors duration-200 inline-flex items-center space-x-1.5"
              >
                <span className="text-institucional-amarillo text-xs">▸</span>
                <span>Transparencia y Legalidad</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-institucional-amarillo transition-colors duration-200 inline-flex items-center space-x-1.5"
              >
                <span className="text-institucional-amarillo text-xs">▸</span>
                <span>PQRS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-institucional-amarillo transition-colors duration-200 inline-flex items-center space-x-1.5"
              >
                <span className="text-institucional-amarillo text-xs">▸</span>
                <span>Consulta SIET</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-institucional-amarillo transition-colors duration-200 inline-flex items-center space-x-1.5"
              >
                <span className="text-institucional-amarillo text-xs">▸</span>
                <span>Plataforma Q10</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Franja Inferior (Copyright) */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-xs sm:text-sm text-gray-400">
        © 2026 Fundación Universal de Estudios Técnicos – UNIVERTEC. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
