import Proyecto from '../models/Proyecto.js';

export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find().sort({ fecha: -1 });
    return res.status(200).json({ success: true, data: proyectos });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al obtener proyectos', error: error.message });
  }
};

export const createProyecto = async (req, res) => {
  try {
    const proyectoData = { ...req.body };
    if (req.file) {
      proyectoData.imagenUrl = `/uploads/${req.file.filename}`;
    }
    
    const nuevoProyecto = new Proyecto(proyectoData);
    const guardado = await nuevoProyecto.save();
    return res.status(201).json({ success: true, data: guardado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al crear proyecto', error: error.message });
  }
};

export const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyectoData = { ...req.body };
    if (req.file) {
      proyectoData.imagenUrl = `/uploads/${req.file.filename}`;
    }

    const actualizado = await Proyecto.findByIdAndUpdate(id, proyectoData, { new: true });
    if (!actualizado) return res.status(404).json({ success: false, message: 'Proyecto no encontrado' });
    return res.status(200).json({ success: true, data: actualizado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al actualizar proyecto', error: error.message });
  }
};

export const deleteProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Proyecto.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ success: false, message: 'Proyecto no encontrado' });
    return res.status(200).json({ success: true, message: 'Proyecto eliminado' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al eliminar proyecto', error: error.message });
  }
};
