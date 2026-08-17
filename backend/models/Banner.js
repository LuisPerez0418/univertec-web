import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  subtitulo: { type: String },
  imagenUrl: { type: String, required: true },
  enlace: { type: String },
  orden: { type: Number, default: 0 },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;
