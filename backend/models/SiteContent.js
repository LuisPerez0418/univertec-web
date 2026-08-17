import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
  seccion: { type: String, required: true, unique: true },
  contenido: { type: String, required: true }
}, { timestamps: true });

const SiteContent = mongoose.model('SiteContent', siteContentSchema);

export default SiteContent;
