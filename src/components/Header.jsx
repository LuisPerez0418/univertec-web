import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* 1. Top Bar (Franja superior de accesos rápidos inspirada en U. del Atlántico) */}
      <div className="bg-institucional-yellow text-institucional-dark text-xs sm:text-sm font-bold px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Izquierda: Teléfono/WhatsApp */}
          <div className="flex items-center space-x-2">
            <a
              href="https://wa.me/573011028224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity"
            >
              {/* Ícono SVG Teléfono/WhatsApp */}
              <svg
                className="w-4 h-4 fill-current text-institucional-dark shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.999 2C6.478 2 1.999 6.479 1.999 12c0 1.77.46 3.498 1.339 5.016L2 22l5.123-1.341c1.464.798 3.118 1.218 4.876 1.218 5.521 0 10-4.479 10-10s-4.479-10-10-10zm0 18.156c-1.523 0-3.013-.409-4.316-1.185l-.309-.184-3.208.841.856-3.128-.201-.321c-.854-1.36-1.305-2.929-1.305-4.551 0-4.686 3.812-8.498 8.483-8.498 4.671 0 8.483 3.812 8.483 8.498 0 4.686-3.812 8.498-8.483 8.498zm4.649-6.388c-.255-.128-1.509-.745-1.742-.83-.233-.085-.403-.128-.573.128-.17.255-.658.83-.807.999-.149.17-.297.191-.552.064-.255-.128-1.077-.397-2.051-1.266-.757-.674-1.268-1.507-1.417-1.762-.149-.255-.016-.393.112-.52.115-.115.255-.297.382-.446.128-.149.17-.255.255-.425.085-.17.042-.319-.021-.446-.064-.128-.573-1.382-.786-1.892-.207-.497-.417-.43-.573-.438-.149-.008-.319-.008-.489-.008-.17 0-.446.064-.679.319-.233.255-.892.872-.892 2.126 0 1.254.914 2.466 1.041 2.636.128.17 1.799 2.748 4.358 3.852.609.263 1.085.42 1.456.538.612.195 1.169.167 1.609.102.492-.073 1.509-.616 1.722-1.212.212-.596.212-1.106.149-1.212-.064-.106-.233-.17-.489-.297z" />
              </svg>
              <span>+57 301 1028224</span>
            </a>
          </div>

          {/* Derecha: Enlaces de texto separados por barra | */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/transparencia"
              className="hover:underline transition-all"
            >
              Transparencia y Legalidad
            </Link>
            <span className="opacity-40">|</span>
            <a
              href="#"
              className="hover:underline transition-all"
            >
              LOGIN Q10
            </a>
            <span className="opacity-40">|</span>
            <a
              href="#"
              className="hover:underline transition-all"
            >
              Consulta SIET
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation (Barra principal blanca) */}
      <nav className="bg-white px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Izquierda: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={logo}
                alt="UNIVERTEC"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
            </Link>
          </div>

          {/* Derecha (Menú Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 font-semibold text-base hover:text-institucional-yellow transition-colors duration-200"
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              className="text-gray-700 font-semibold text-base hover:text-institucional-yellow transition-colors duration-200"
            >
              Nosotros
            </Link>

            {/* Oferta Académica con ícono de flecha hacia abajo */}
            <Link
              to="/oferta-academica"
              className="text-gray-700 font-semibold text-base hover:text-institucional-yellow transition-colors duration-200 inline-flex items-center gap-1.5 group"
            >
              <span>Oferta Académica</span>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:text-institucional-yellow transition-transform duration-200 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            <Link
              to="/admisiones"
              className="text-gray-700 font-semibold text-base hover:text-institucional-yellow transition-colors duration-200"
            >
              Admisiones
            </Link>

            <Link
              to="/contacto"
              className="text-gray-700 font-semibold text-base hover:text-institucional-yellow transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>

          {/* Botón Hamburguesa (Móviles) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-institucional-dark hover:bg-gray-100 focus:outline-none transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? (
                // Ícono Cerrar (X)
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ícono Menú Hamburguesa
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Desplegable (Mobile) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 pt-3 pb-6 space-y-3">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-institucional-yellow border-b border-gray-100 transition-colors"
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              onClick={closeMobileMenu}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-institucional-yellow border-b border-gray-100 transition-colors"
            >
              Nosotros
            </Link>

            <Link
              to="/oferta-academica"
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-2 text-base font-semibold text-gray-700 hover:text-institucional-yellow border-b border-gray-100 transition-colors"
            >
              <span>Oferta Académica</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            <Link
              to="/admisiones"
              onClick={closeMobileMenu}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-institucional-yellow border-b border-gray-100 transition-colors"
            >
              Admisiones
            </Link>

            <Link
              to="/contacto"
              onClick={closeMobileMenu}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-institucional-yellow transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
