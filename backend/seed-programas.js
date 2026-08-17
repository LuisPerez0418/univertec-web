import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Programa from './models/Programa.js';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/univertec';

const programasData = [
  {
    titulo: 'Técnico Laboral en Atención a la Primera Infancia',
    cno: '6372',
    duracion_meses: 6,
    duracion_horas: 1000,
    certificacion: 'Técnico Laboral por Competencias en Atención a la Primera Infancia',
    objetivos: [
      'Orientar prácticas educativas en niños y niñas hasta los 6 años según el plan de atención integral a la primera infancia.',
      'Desarrollar actividades lúdicas y pedagógicas para el desarrollo integral del infante.',
      'Promover la protección y restauración de derechos de la primera infancia según la legislación vigente.',
      'Promover la participación de los niños y niñas en entornos de desarrollo social, familiar e institucional.'
    ],
    modulos: [
      { nombre: 'Introducción a la formación en primera infancia', codigo_interno: 'TL01-01', horas: 50 },
      { nombre: 'Psicología infantil', codigo_interno: 'TL01-02', horas: 50 },
      { nombre: 'Pedagogía y didáctica infantil', codigo_interno: 'TL01-03', horas: 50 },
      { nombre: 'Salud y nutrición', codigo_interno: 'TL01-04', horas: 50 },
      { nombre: 'Psicomotricidad y estimulación infantil', codigo_interno: 'TL01-05', horas: 50 },
      { nombre: 'El juego y las artes', codigo_interno: 'TL01-06', horas: 50 },
      { nombre: 'Primeros auxilios', codigo_interno: 'TL01-07', horas: 50 },
      { nombre: 'Lectoescritura', codigo_interno: 'TL01-08', horas: 80 },
      { nombre: 'Seminario', codigo_interno: 'TL01-09', horas: 400 }
    ],
    tipo: 'Técnico',
    estado: true
  },
  {
    titulo: 'Técnico Laboral en Saneamiento Básico',
    cno: '3257',
    duracion_meses: 6,
    duracion_horas: 1280,
    certificacion: 'Técnico Laboral por Competencias en Saneamiento Básico',
    objetivos: [
      'Formar estudiantes en el Programa de Técnico Laboral por Competencia en Auxiliar de Saneamiento Básico para desempeñarse en inspección, vigilancia y control de factores de riesgo ambiental.',
      'Educar y capacitar al estudiante en aspectos técnicos, científicos y procedimentales del saneamiento básico.'
    ],
    modulos: [
      { nombre: 'Limpieza de equipos', codigo_interno: '220201086', horas: 200 },
      { nombre: 'Especies forestales', codigo_interno: '270301025', horas: 200 },
      { nombre: 'Tratamiento de aguas', codigo_interno: '280201242', horas: 200 },
      { nombre: 'Salud laboral', codigo_interno: '220601072', horas: 100 },
      { nombre: 'Residuos líquidos', codigo_interno: '220201080', horas: 200 }
    ],
    tipo: 'Técnico',
    estado: true
  },
  {
    titulo: 'Técnico Laboral en Tránsito y Seguridad Vial',
    cno: '6381',
    duracion_meses: 6,
    duracion_horas: 670,
    certificacion: 'Técnico Laboral por Competencias en Tránsito y Seguridad Vial',
    objetivos: [
      'Formar a los estudiantes para desarrollar actividades en vías públicas, con competencias y conocimientos para orientar la circulación vehicular y peatonal.',
      'Educar y capacitar sobre aspectos académicos, científicos y procedimentales de la normatividad de tránsito y su aplicación.'
    ],
    modulos: [
      { nombre: 'Normatividad', codigo_interno: 'TL03-01', horas: 100 },
      { nombre: 'Autoridad de Tránsito', codigo_interno: 'TL03-02', horas: 100 },
      { nombre: 'Ética', codigo_interno: 'TL03-03', horas: 50 },
      { nombre: 'Criminalística y hechos de tránsito', codigo_interno: 'TL03-04', horas: 100 },
      { nombre: 'Habilidades comunicativas', codigo_interno: 'TL03-05', horas: 100 },
      { nombre: 'Educación y pedagogía', codigo_interno: 'TL03-06', horas: 50 },
      { nombre: 'Seguridad Vial', codigo_interno: 'TL03-07', horas: 100 }
    ],
    tipo: 'Técnico',
    estado: true
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB...');
    
    // Eliminar programas existentes para reemplazar por los correctos del documento
    await Programa.deleteMany({});
    console.log('Programas anteriores eliminados.');

    // Insertar los programas del documento
    await Programa.insertMany(programasData);
    console.log('Nuevos Programas (Técnicos) insertados con éxito.');

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error al poblar la base de datos de programas:', err);
    mongoose.connection.close();
  });
