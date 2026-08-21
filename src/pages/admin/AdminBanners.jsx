import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminBanners = () => {
  const [banners, setBanners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerEditando, setBannerEditando] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    subtitulo: '',
    enlace: '',
    orden: 0,
    activo: true,
    archivoImagen: null, // Guardar el archivo seleccionado
    imagenUrl: '' // Para mostrar el preview de la imagen existente
  });

  const fetchBanners = async () => {
    try {
      const response = await fetch('https://api.univertec.org/api/banners');
      if (!response.ok) throw new Error('Error al obtener los banners');
      const result = await response.json();
      if (result.success) {
        setBanners(result.data);
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  useEffect(() => {
    fetchBanners();
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
      const url = bannerEditando 
        ? `https://api.univertec.org/api/banners/${bannerEditando._id}` 
        : 'https://api.univertec.org/api/banners';
      const method = bannerEditando ? 'PUT' : 'POST';

      const token = sessionStorage.getItem('tokenUnivertec');
      
      const payload = new FormData();
      payload.append('titulo', formData.titulo);
      payload.append('subtitulo', formData.subtitulo || '');
      payload.append('enlace', formData.enlace || '');
      payload.append('orden', Number(formData.orden));
      payload.append('activo', formData.activo);
      
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

      if (!response.ok) throw new Error(`Error al ${bannerEditando ? 'actualizar' : 'crear'} el banner`);

      cerrarModal();
      fetchBanners();
      
    } catch (error) {
      console.error('Error submitting banner:', error);
    }
  };

  const abrirModalEditar = (banner) => {
    setBannerEditando(banner);
    setFormData({
      titulo: banner.titulo || '',
      subtitulo: banner.subtitulo || '',
      enlace: banner.enlace || '',
      orden: banner.orden !== undefined ? banner.orden : 0,
      activo: banner.activo !== undefined ? banner.activo : true,
      archivoImagen: null,
      imagenUrl: banner.imagenUrl || ''
    });
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setFormData({
      titulo: '',
      subtitulo: '',
      enlace: '',
      orden: 0,
      activo: true,
      archivoImagen: null,
      imagenUrl: ''
    });
    setBannerEditando(null);
    setIsModalOpen(false);
  };

  const eliminarBanner = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este banner permanentemente?")) {
      try {
        const token = sessionStorage.getItem('tokenUnivertec');
        const response = await fetch(`https://api.univertec.org/api/banners/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) throw new Error('Error al eliminar el banner');
        fetchBanners();
      } catch (error) {
        console.error('Error deleting banner:', error);
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
          Gestión de Banners
        </h1>
        <button 
          onClick={() => { cerrarModal(); setIsModalOpen(true); }}
          className="bg-[#006039] hover:bg-[#004d2d] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo Banner
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold w-24">Imagen</th>
                <th className="p-4 font-semibold">Título</th>
                <th className="p-4 font-semibold">Orden</th>
                <th className="p-4 font-semibold">Estado</th>
                <th className="p-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {banners.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No hay banners registrados.
                  </td>
                </tr>
              ) : (
                banners.map((banner) => (
                  <tr key={banner._id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <img 
                        src={banner.imagenUrl.startsWith('/uploads') ? `https://api.univertec.org${banner.imagenUrl}` : banner.imagenUrl} 
                        alt={banner.titulo} 
                        className="w-16 h-10 object-cover rounded shadow-sm border border-gray-200"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Error'; }}
                      />
                    </td>
                    <td className="p-4 text-gray-800 font-medium">
                      {banner.titulo}
                      {banner.subtitulo && <p className="text-xs text-gray-500 mt-1">{banner.subtitulo}</p>}
                    </td>
                    <td className="p-4 text-gray-600 font-bold">{banner.orden}</td>
                    <td className="p-4">
                      {banner.activo ? (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Activo</span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">Inactivo</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button 
                          onClick={() => abrirModalEditar(banner)}
                          className="text-blue-600 hover:text-blue-800 transition-colors" 
                          title="Editar"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => eliminarBanner(banner._id)}
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
              <h2 className="text-xl font-bold">{bannerEditando ? 'Editar Banner' : 'Crear Nuevo Banner'}</h2>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subtítulo (Opcional)</label>
                  <input
                    type="text"
                    name="subtitulo"
                    value={formData.subtitulo}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen del Banner</label>
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Enlace (Opcional)</label>
                    <input
                      type="text"
                      name="enlace"
                      value={formData.enlace}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all"
                      placeholder="/contacto"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Orden de aparición</label>
                    <input
                      type="number"
                      name="orden"
                      value={formData.orden}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] transition-all"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="activo"
                    name="activo"
                    checked={formData.activo}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#006039] border-gray-300 rounded focus:ring-[#006039]"
                  />
                  <label htmlFor="activo" className="text-sm font-semibold text-gray-700 cursor-pointer">
                    Banner Activo (Visible en el sitio)
                  </label>
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

export default AdminBanners;
