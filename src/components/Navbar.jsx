import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-white">
      {/* 1. Top Bar (Franja superior de accesos rápidos) */}
      <div className="bg-institucional-verde text-white text-xs sm:text-sm font-bold px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Izquierda: Celular/WhatsApp */}
          <div className="flex items-center space-x-2">
            <a
              href="https://wa.me/573011028224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity"
            >
              <svg
                className="w-4 h-4 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.999 2C6.478 2 1.999 6.479 1.999 12c0 1.77.46 3.498 1.339 5.016L2 22l5.123-1.341c1.464.798 3.118 1.218 4.876 1.218 5.521 0 10-4.479 10-10s-4.479-10-10-10zm0 18.156c-1.523 0-3.013-.409-4.316-1.185l-.309-.184-3.208.841.856-3.128-.201-.321c-.854-1.36-1.305-2.929-1.305-4.551 0-4.686 3.812-8.498 8.483-8.498 4.671 0 8.483 3.812 8.483 8.498 0 4.686-3.812 8.498-8.483 8.498zm4.649-6.388c-.255-.128-1.509-.745-1.742-.83-.233-.085-.403-.128-.573.128-.17.255-.658.83-.807.999-.149.17-.297.191-.552.064-.255-.128-1.077-.397-2.051-1.266-.757-.674-1.268-1.507-1.417-1.762-.149-.255-.016-.393.112-.52.115-.115.255-.297.382-.446.128-.149.17-.255.255-.425.085-.17.042-.319-.021-.446-.064-.128-.573-1.382-.786-1.892-.207-.497-.417-.43-.573-.438-.149-.008-.319-.008-.489-.008-.17 0-.446.064-.679.319-.233.255-.892.872-.892 2.126 0 1.254.914 2.466 1.041 2.636.128.17 1.799 2.748 4.358 3.852.609.263 1.085.42 1.456.538.612.195 1.169.167 1.609.102.492-.073 1.509-.616 1.722-1.212.212-.596.212-1.106.149-1.212-.064-.106-.233-.17-.489-.297z" />
              </svg>
              <span className="text-white">+57 301 1028224</span>
            </a>
          </div>

          {/* Derecha: Enlaces rápidos */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link to="/transparencia" className="text-white hover:underline transition-all">
              Transparencia y Legalidad
            </Link>
            <span className="opacity-40 text-white">|</span>
            <a
              href="[INSERTA_AQUI_EL_LINK_DEL_SIET]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-all"
            >
              Consulta SIET
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation (Barra principal blanca) */}
      <nav className="bg-white px-4 sm:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Izquierda: Logo y Branding Siempre Visible */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2.5 sm:gap-3 group">
              <img
                src={logo}
                alt="Logo UNIVERTEC"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-institucional-verde leading-none">
                  UNIVERTEC
                </span>
                <span className="text-[9px] sm:text-xs font-semibold text-gray-500 tracking-wider mt-0.5">
                  FUNDACIÓN UNIVERSAL
                </span>
              </div>
            </Link>
          </div>

          {/* Derecha (Menú Desktop) */}
          {/* Derecha (Menú Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              to="/"
              className="text-gray-700 font-semibold text-base hover:text-institucional-verde transition-colors duration-200"
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              className="text-gray-700 font-semibold text-base hover:text-institucional-verde transition-colors duration-200"
            >
              Nosotros
            </Link>

            {/* Oferta Académica Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 font-semibold text-base hover:text-institucional-verde transition-colors duration-200"
              >
                Oferta Académica
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/programas"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-institucional-verde hover:text-white transition-colors"
                >
                  Programas Técnicos
                </Link>
                <Link
                  to="/cursos"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-institucional-verde hover:text-white transition-colors"
                >
                  Educación Continua
                </Link>
              </div>
            </div>

            <Link
              to="/admisiones"
              className="text-gray-700 font-semibold text-base hover:text-institucional-verde transition-colors duration-200"
            >
              Admisiones
            </Link>

            <Link
              to="/contacto"
              className="text-gray-700 font-semibold text-base hover:text-institucional-verde transition-colors duration-200"
            >
              Contacto
            </Link>

            {/* Botón de Donaciones */}
            <Link
              to="/donaciones"
              className="bg-institucional-amarillo text-institucional-verde font-bold px-5 py-2.5 rounded-xl shadow-sm hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200"
            >
              Donaciones
            </Link>
          </div>

          {/* Botón Hamburguesa (Móviles) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-lg text-gray-700 hover:text-institucional-verde hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-institucional-verde/20 transition-all"
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? (
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

      {/* Menú Desplegable Responsivo (Mobile) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl transition-all duration-300">
          <div className="px-6 py-5 space-y-2 flex flex-col">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-institucional-verde hover:bg-gray-50 transition-all"
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-institucional-verde hover:bg-gray-50 transition-all"
            >
              Nosotros
            </Link>

            <div className="space-y-1">
              <div className="block px-4 py-2 text-base font-semibold text-institucional-verde">
                Oferta Académica
              </div>
              <Link
                to="/programas"
                onClick={closeMobileMenu}
                className="block pl-8 pr-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-institucional-verde hover:bg-gray-50 transition-all"
              >
                - Programas Técnicos
              </Link>
              <Link
                to="/cursos"
                onClick={closeMobileMenu}
                className="block pl-8 pr-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-institucional-verde hover:bg-gray-50 transition-all"
              >
                - Educación Continua
              </Link>
            </div>

            <Link
              to="/admisiones"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-institucional-verde hover:bg-gray-50 transition-all"
            >
              Admisiones
            </Link>

            <Link
              to="/contacto"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-institucional-verde hover:bg-gray-50 transition-all"
            >
              Contacto
            </Link>

            <div className="pt-2">
              <Link
                to="/donaciones"
                onClick={closeMobileMenu}
                className="block w-full text-center py-3.5 px-6 rounded-xl bg-institucional-amarillo text-institucional-verde font-bold shadow-md hover:brightness-105 transition-all"
              >
                Donaciones
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
