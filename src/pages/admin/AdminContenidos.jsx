import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminContenidos = () => {
  const [content, setContent] = useState({
    'nosotros-historia': '',
    'nosotros-mision': '',
    'nosotros-vision': '',
    'admisiones-inscripcion': '',
    'admisiones-requisitos': ''
  });

  const [savingStatus, setSavingStatus] = useState({});

  const fetchContent = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/content');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setContent(prev => ({
            ...prev,
            ...result.data
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching contenidos:', error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleChange = (seccion, value) => {
    setContent(prev => ({
      ...prev,
      [seccion]: value
    }));
  };

  const handleSave = async (seccion) => {
    setSavingStatus(prev => ({ ...prev, [seccion]: 'Guardando...' }));
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5001/api/content/${seccion}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ contenido: content[seccion] })
      });
      if (!response.ok) throw new Error('Error al guardar');
      
      setSavingStatus(prev => ({ ...prev, [seccion]: '¡Guardado!' }));
      setTimeout(() => {
        setSavingStatus(prev => ({ ...prev, [seccion]: '' }));
      }, 2000);
      
    } catch (error) {
      console.error('Error saving content:', error);
      setSavingStatus(prev => ({ ...prev, [seccion]: 'Error' }));
      setTimeout(() => {
        setSavingStatus(prev => ({ ...prev, [seccion]: '' }));
      }, 2000);
    }
  };

  const FieldEditor = ({ title, seccion, rows = 5 }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <span className="text-sm font-semibold text-[#006039]">{savingStatus[seccion]}</span>
      </div>
      <textarea
        value={content[seccion]}
        onChange={(e) => handleChange(seccion, e.target.value)}
        rows={rows}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all resize-y"
        placeholder={`Escribe el contenido para ${title}...`}
      ></textarea>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleSave(seccion)}
          className="bg-[#006039] hover:bg-[#004d2d] text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto min-h-screen bg-gray-50">
      <div className="mb-4">
        <Link to="/admin" className="text-[#006039] hover:underline flex items-center gap-1 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Volver al Dashboard
        </Link>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#006039]">
          Gestión de Contenidos Estáticos
        </h1>
        <p className="text-gray-600 mt-2">
          Edita la información institucional y de admisiones que aparece en el sitio web público.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">Página: Nosotros</h2>
          <FieldEditor title="Nuestra Historia" seccion="nosotros-historia" rows={6} />
          <FieldEditor title="Nuestra Misión" seccion="nosotros-mision" rows={4} />
          <FieldEditor title="Nuestra Visión" seccion="nosotros-vision" rows={4} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">Página: Admisiones</h2>
          <FieldEditor title="Formaliza tu Inscripción" seccion="admisiones-inscripcion" rows={5} />
          <FieldEditor title="Requisitos de Ingreso" seccion="admisiones-requisitos" rows={5} />
        </section>
      </div>
    </div>
  );
};

export default AdminContenidos;
