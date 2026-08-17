import Banner from '../models/Banner.js';

export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ orden: 1 });
    return res.status(200).json({ success: true, data: banners });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al obtener banners', error: error.message });
  }
};

export const createBanner = async (req, res) => {
  try {
    const bannerData = { ...req.body };
    if (req.file) {
      // Si el servidor está en producción, usaríamos req.protocol + req.get('host')
      bannerData.imagenUrl = `/uploads/${req.file.filename}`;
    }
    
    const nuevoBanner = new Banner(bannerData);
    const guardado = await nuevoBanner.save();
    return res.status(201).json({ success: true, data: guardado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al crear banner', error: error.message });
  }
};

export const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const bannerData = { ...req.body };
    if (req.file) {
      bannerData.imagenUrl = `/uploads/${req.file.filename}`;
    }

    const actualizado = await Banner.findByIdAndUpdate(id, bannerData, { new: true });
    if (!actualizado) return res.status(404).json({ success: false, message: 'Banner no encontrado' });
    return res.status(200).json({ success: true, data: actualizado });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Error al actualizar banner', error: error.message });
  }
};

export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Banner.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ success: false, message: 'Banner no encontrado' });
    return res.status(200).json({ success: true, message: 'Banner eliminado' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al eliminar banner', error: error.message });
  }
};
