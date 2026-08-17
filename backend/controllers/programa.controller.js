import Programa from '../models/Programa.js';

// Obtener todos los programas activos
export const getProgramas = async (req, res) => {
  try {
    const programas = await Programa.find({ estado: true });
    return res.status(200).json({ success: true, data: programas });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al obtener los programas', error: error.message });
  }
};

// Obtener un programa por ID
export const getProgramaById = async (req, res) => {
  try {
    const { id } = req.params;
    const programa = await Programa.findById(id);
    
    if (!programa || !programa.estado) {
      return res.status(404).json({ success: false, message: 'Programa no encontrado o inactivo' });
    }
    
    return res.status(200).json({ success: true, data: programa });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al obtener el programa', error: error.message });
  }
};

// Crear un programa nuevo
export const createPrograma = async (req, res) => {
  try {
    const nuevoPrograma = new Programa(req.body);
    const programaGuardado = await nuevoPrograma.save();
    return res.status(201).json({ success: true, data: programaGuardado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al crear el programa', error: error.message });
  }
};

// Actualizar un programa
export const updatePrograma = async (req, res) => {
  try {
    const { id } = req.params;
    const actualizado = await Programa.findByIdAndUpdate(id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ success: false, message: 'Programa no encontrado' });
    return res.status(200).json({ success: true, data: actualizado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al actualizar el programa', error: error.message });
  }
};

// Borrado lógico (actualizar estado a false)
export const deletePrograma = async (req, res) => {
  try {
    const { id } = req.params;
    const programaEliminado = await Programa.findByIdAndUpdate(
      id, 
      { estado: false }, 
      { new: true }
    );
    
    if (!programaEliminado) {
      return res.status(404).json({ success: false, message: 'Programa no encontrado' });
    }
    
    return res.status(200).json({ success: true, message: 'Programa eliminado correctamente', data: programaEliminado });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al eliminar el programa', error: error.message });
  }
};
