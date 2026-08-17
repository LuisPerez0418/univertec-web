import mongoose from 'mongoose';

const proyectoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, required: true },
  imagenUrl: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
}, { timestamps: true });

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

export default Proyecto;
