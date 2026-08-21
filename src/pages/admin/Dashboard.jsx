import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('tokenUnivertec');
    navigate('/login');
  };

  const modules = [
    {
      title: 'Banners (Inicio)',
      description: 'Gestiona las imágenes deslizantes de la página principal.',
      path: '/admin/banners',
      icon: (
        <svg className="w-8 h-8 text-[#006039]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Galería de Proyectos',
      description: 'Sube fotos y descripciones de las actividades de los estudiantes.',
      path: '/admin/proyectos',
      icon: (
        <svg className="w-8 h-8 text-[#006039]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Contenidos Estáticos',
      description: 'Edita la Misión, Visión e información de Admisiones.',
      path: '/admin/contenidos',
      icon: (
        <svg className="w-8 h-8 text-[#006039]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'Programas Académicos',
      description: 'Crea, edita o elimina los técnicos laborales y diplomados.',
      path: '/admin/programas',
      icon: (
        <svg className="w-8 h-8 text-[#006039]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[#006039]">Panel de Control (CMS)</h1>
            <p className="text-gray-600 mt-2">Bienvenido. ¿Qué deseas gestionar hoy?</p>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-4 md:mt-0 flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar Sesión
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, index) => (
            <Link 
              key={index}
              to={mod.path}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-[#006039]/30 transition-all group flex items-start gap-4"
            >
              <div className="p-3 bg-green-50 rounded-xl group-hover:bg-[#006039]/10 transition-colors">
                {mod.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#006039] transition-colors">{mod.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{mod.description}</p>
                <div className="mt-4 text-[#006039] font-semibold text-sm flex items-center gap-1">
                  Gestionar <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
