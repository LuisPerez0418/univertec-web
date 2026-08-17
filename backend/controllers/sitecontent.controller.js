import SiteContent from '../models/SiteContent.js';

export const getAllContent = async (req, res) => {
  try {
    const contents = await SiteContent.find();
    // Lo transformamos a un objeto clave-valor para facilitar el consumo en React
    const contentMap = {};
    contents.forEach(item => {
      contentMap[item.seccion] = item.contenido;
    });
    return res.status(200).json({ success: true, data: contentMap });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al obtener contenidos', error: error.message });
  }
};

export const updateContent = async (req, res) => {
  try {
    const { seccion } = req.params;
    const { contenido } = req.body;
    
    // Upsert: Si no existe, lo crea. Si existe, lo actualiza.
    const actualizado = await SiteContent.findOneAndUpdate(
      { seccion },
      { contenido },
      { new: true, upsert: true }
    );
    
    return res.status(200).json({ success: true, data: actualizado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al actualizar contenido', error: error.message });
  }
};
