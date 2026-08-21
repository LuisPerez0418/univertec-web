import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proyectoEditando, setProyectoEditando] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    activo: true,
    archivoImagen: null,
    imagenUrl: '',
    categoria: 'Negocios Verdes'
  });

  const fetchProyectos = async () => {
    try {
      const response = await fetch('https://api.univertec.org/api/proyectos');
      if (!response.ok) throw new Error('Error al obtener los proyectos');
      const result = await response.json();
      if (result.success) {
        setProyectos(result.data);
      }
    } catch (error) {
      console.error('Error fetching proyectos:', error);
    }
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        archivoImagen: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = proyectoEditando 
        ? `https://api.univertec.org/api/proyectos/${proyectoEditando._id}` 
        : 'https://api.univertec.org/api/proyectos';
      const method = proyectoEditando ? 'PUT' : 'POST';

      const token = sessionStorage.getItem('tokenUnivertec');
      
      const payload = new FormData();
      payload.append('titulo', formData.titulo);
      payload.append('descripcion', formData.descripcion || '');
      payload.append('fecha', formData.fecha || '');
      payload.append('activo', formData.activo);
      payload.append('categoria', formData.categoria);
      
      if (formData.archivoImagen) {
        payload.append('archivoImagen', formData.archivoImagen);
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: payload
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del backend:', errorData);
        throw new Error(`Error al ${proyectoEditando ? 'actualizar' : 'crear'} el proyecto`);
      }

      cerrarModal();
      fetchProyectos();
      
    } catch (error) {
      console.error('Error submitting proyecto:', error);
    }
  };

  const abrirModalEditar = (proyecto) => {
    setProyectoEditando(proyecto);
    setFormData({
      titulo: proyecto.titulo || '',
      descripcion: proyecto.descripcion || '',
      fecha: proyecto.fecha ? new Date(proyecto.fecha).toISOString().split('T')[0] : '',
      activo: proyecto.activo !== undefined ? proyecto.activo : true,
      archivoImagen: null,
      imagenUrl: proyecto.imagenUrl || '',
      categoria: proyecto.categoria || 'Negocios Verdes'
    });
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setFormData({
      titulo: '',
      descripcion: '',
      fecha: '',
      activo: true,
      archivoImagen: null,
      imagenUrl: '',
      categoria: 'Negocios Verdes'
    });
    setProyectoEditando(null);
    setIsModalOpen(false);
  };

  const eliminarProyecto = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto de la galería permanentemente?")) {
      try {
        const token = sessionStorage.getItem('tokenUnivertec');
        const response = await fetch(`https://api.univertec.org/api/proyectos/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) throw new Error('Error al eliminar el proyecto');
        fetchProyectos();
      } catch (error) {
        console.error('Error deleting proyecto:', error);
      }
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen bg-gray-50">
      <div className="mb-4">
        <Link to="/admin" className="text-[#006039] hover:underline flex items-center gap-1 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Volver al Dashboard
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#006039]">
          Gestión de Galería y Proyectos
        </h1>
        <button 
          onClick={() => { cerrarModal(); setIsModalOpen(true); }}
          className="bg-[#006039] hover:bg-[#004d2d] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Subir Proyecto
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold w-24">Imagen</th>
                <th className="p-4 font-semibold">Título</th>
                <th className="p-4 font-semibold">Categoría</th>
                <th className="p-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {proyectos.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    No hay proyectos registrados.
                  </td>
                </tr>
              ) : (
                proyectos.map((proyecto) => (
                  <tr key={proyecto._id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <img 
                        src={proyecto.imagenUrl.startsWith('/uploads') ? `https://api.univertec.org${proyecto.imagenUrl}` : proyecto.imagenUrl} 
                        alt={proyecto.titulo} 
                        className="w-16 h-12 object-cover rounded shadow-sm border border-gray-200"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Error'; }}
                      />
                    </td>
                    <td className="p-4 text-gray-800 font-medium">
                      {proyecto.titulo}
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{proyecto.descripcion}</p>
                    </td>
                    <td className="p-4">
                      <span className="bg-[#006039]/10 text-[#006039] px-3 py-1 rounded-full text-xs font-bold">
                        {proyecto.categoria}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button 
                          onClick={() => abrirModalEditar(proyecto)}
                          className="text-blue-600 hover:text-blue-800 transition-colors" 
                          title="Editar"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => eliminarProyecto(proyecto._id)}
                          className="text-red-500 hover:text-red-700 transition-colors" 
                          title="Eliminar"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-[#006039] text-white p-5">
              <h2 className="text-xl font-bold">{proyectoEditando ? 'Editar Proyecto' : 'Subir Nuevo Proyecto'}</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Título</label>
                  <input
                    type="text"
                    name="titulo"
                    required
                    value={formData.titulo}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción</label>
                  <textarea
                    name="descripcion"
                    required
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all resize-none"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Categoría</label>
                    <select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] bg-white transition-all"
                    >
                      <option value="Negocios Verdes">Negocios Verdes</option>
                      <option value="Ecoturismo">Ecoturismo</option>
                      <option value="Víctimas">Víctimas</option>
                      <option value="Prácticas Pedagógicas">Prácticas Pedagógicas</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen del Proyecto</label>
                  <input
                    type="file"
                    name="archivoImagen"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all bg-white"
                  />
                  {formData.archivoImagen ? (
                    <div className="mt-2 text-sm text-gray-600">
                      Archivo seleccionado: {formData.archivoImagen.name}
                    </div>
                  ) : formData.imagenUrl && (
                    <div className="mt-2">
                      <span className="text-xs text-gray-500 mb-1 block">Imagen actual:</span>
                      <img 
                        src={formData.imagenUrl.startsWith('http') ? formData.imagenUrl : `https://api.univertec.org${formData.imagenUrl.startsWith('/uploads') ? formData.imagenUrl : ''}`}
                        alt="Vista previa" 
                        className="h-20 w-auto object-cover rounded border border-gray-200"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={cerrarModal}
                  className="px-5 py-2.5 text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#006039] text-white font-bold rounded-lg hover:bg-[#004d2d] transition-colors shadow-md"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProyectos;
