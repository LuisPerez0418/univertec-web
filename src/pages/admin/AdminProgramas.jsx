import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminProgramas = () => {
  const [programas, setProgramas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [programaEditando, setProgramaEditando] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    duracion_horas: '',
    certificacion: '',
    tipo: 'Técnico'
  });

  // Función para obtener los programas
  const fetchProgramas = async () => {
    try {
      const response = await fetch('https://api.univertec.org/api/programas');
      if (!response.ok) throw new Error('Error al obtener los programas');
      
      const result = await response.json();
      if (result.success) {
        setProgramas(result.data);
      }
    } catch (error) {
      console.error('Error fetching programas:', error);
    }
  };

  useEffect(() => {
    fetchProgramas();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = programaEditando 
        ? `https://api.univertec.org/api/programas/${programaEditando._id}` 
        : 'https://api.univertec.org/api/programas';
      const method = programaEditando ? 'PUT' : 'POST';

      const token = sessionStorage.getItem('tokenUnivertec');
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          duracion_horas: Number(formData.duracion_horas),
          duracion_meses: Math.ceil(Number(formData.duracion_horas) / 160) || 1, 
        })
      });

      if (!response.ok) throw new Error(`Error al ${programaEditando ? 'actualizar' : 'crear'} el programa`);

      cerrarModal();
      fetchProgramas();
      
    } catch (error) {
      console.error('Error submitting programa:', error);
    }
  };

  const abrirModalEditar = (programa) => {
    setProgramaEditando(programa);
    setFormData({
      titulo: programa.titulo || '',
      duracion_horas: programa.duracion_horas || '',
      certificacion: programa.certificacion || '',
      tipo: programa.tipo || 'Técnico'
    });
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setFormData({
      titulo: '',
      duracion_horas: '',
      certificacion: '',
      tipo: 'Técnico'
    });
    setProgramaEditando(null);
    setIsModalOpen(false);
  };

  const eliminarPrograma = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este programa?")) {
      try {
        const token = sessionStorage.getItem('tokenUnivertec');
        const response = await fetch(`https://api.univertec.org/api/programas/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) throw new Error('Error al eliminar');
        fetchProgramas(); // Recargar la lista
      } catch (error) {
        console.error('Error eliminando programa:', error);
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
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#006039]">
          Gestión de Programas Académicos
        </h1>
        <button 
          onClick={() => { cerrarModal(); setIsModalOpen(true); }}
          className="bg-[#006039] hover:bg-[#004d2d] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo Programa
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Título</th>
                <th className="p-4 font-semibold">Tipo</th>
                <th className="p-4 font-semibold">Duración (Horas)</th>
                <th className="p-4 font-semibold">Estado</th>
                <th className="p-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {programas.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No hay programas registrados.
                  </td>
                </tr>
              ) : (
                programas.map((programa) => (
                  <tr key={programa._id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-800 font-medium">{programa.titulo}</td>
                    <td className="p-4">
                      <span className="bg-[#facc15]/20 text-[#006039] px-3 py-1 rounded-full text-xs font-bold border border-[#facc15]/50">
                        {programa.tipo}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{programa.duracion_horas}h</td>
                    <td className="p-4">
                      {programa.estado ? (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                          Activo
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                          Inactivo
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        {/* Botón Editar */}
                        <button 
                          onClick={() => abrirModalEditar(programa)}
                          className="text-blue-600 hover:text-blue-800 transition-colors" 
                          title="Editar"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        {/* Botón Eliminar */}
                        <button 
                          onClick={() => eliminarPrograma(programa._id)}
                          className="text-red-500 hover:text-red-700 transition-colors" 
                          title="Desactivar"
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

      {/* Modal de Creación */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-[#006039] text-white p-5">
              <h2 className="text-xl font-bold">{programaEditando ? 'Editar Programa' : 'Crear Nuevo Programa'}</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Título del Programa</label>
                  <input
                    type="text"
                    name="titulo"
                    required
                    value={formData.titulo}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all"
                    placeholder="Ej: Técnico en Sistemas"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Duración (Horas)</label>
                    <input
                      type="number"
                      name="duracion_horas"
                      required
                      min="1"
                      value={formData.duracion_horas}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all"
                      placeholder="Ej: 1200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo</label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] focus:border-transparent bg-white transition-all"
                    >
                      <option value="Técnico">Técnico</option>
                      <option value="Curso">Curso</option>
                      <option value="Diplomado">Diplomado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Certificación Otorgada</label>
                  <input
                    type="text"
                    name="certificacion"
                    required
                    value={formData.certificacion}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all"
                    placeholder="Ej: Técnico Laboral por Competencias..."
                  />
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
                  Guardar Programa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProgramas;
