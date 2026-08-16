import mongoose from 'mongoose';

const moduloSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo_interno: { type: String, required: true },
  horas: { type: Number, required: true }
}, { _id: false });

const programaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  cno: { type: String }, // Opcional
  duracion_meses: { type: Number, required: true },
  duracion_horas: { type: Number, required: true },
  certificacion: { type: String, required: true },
  objetivos: [{ type: String }],
  modulos: [moduloSchema],
  tipo: { 
    type: String, 
    enum: ['Técnico', 'Curso', 'Diplomado'], 
    default: 'Técnico' 
  },
  estado: { type: Boolean, default: true }
}, { timestamps: true });

const Programa = mongoose.model('Programa', programaSchema);

export default Programa;
