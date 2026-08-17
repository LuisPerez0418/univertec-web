import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Programa from './models/Programa.js';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/univertec';

// Helper to extract number from string like "120 horas"
const parseHoras = (str) => parseInt(str.replace(/\D/g, ''), 10) || 0;

const crearRegistros = (lista, tipo) => {
  return lista.map(item => ({
    titulo: item.nombre,
    duracion_horas: parseHoras(item.horas),
    duracion_meses: Math.ceil(parseHoras(item.horas) / 160) || 1,
    certificacion: `Certificado de asistencia en ${item.nombre}`,
    tipo: tipo,
    estado: true,
    objetivos: [],
    modulos: []
  }));
};

const diplomadosAdmin = [
  { nombre: 'Gestión Administrativa y Organizacional', horas: '120 horas' },
  { nombre: 'Gestión del Talento Humano', horas: '120 horas' },
  { nombre: 'Nómina y Seguridad Social', horas: '100 horas' },
  { nombre: 'Emprendimiento y Creación de Empresa', horas: '80 horas' },
  { nombre: 'Servicio al Cliente y Gestión Comercial', horas: '100 horas' },
];

const cursosAdmin = [
  { nombre: 'Atención al cliente y manejo de PQRS', horas: '40 horas' },
  { nombre: 'Archivo y gestión documental', horas: '40 horas' },
  { nombre: 'Herramientas ofimáticas (Word, Excel y PowerPoint)', horas: '60 horas' },
  { nombre: 'Excel básico, intermedio y avanzado', horas: '80 horas' },
  { nombre: 'Facturación y manejo de documentos contables', horas: '40 horas' },
  { nombre: 'Comunicación efectiva y trabajo en equipo', horas: '30 horas' },
  { nombre: 'Liderazgo y habilidades blandas', horas: '40 horas' },
  { nombre: 'Primeros auxilios básicos', horas: '40 horas' },
];

const diplomadosInfancia = [
  { nombre: 'Diplomado en Atención Integral a la Primera Infancia', horas: '120 horas' },
  { nombre: 'Diplomado en Estrategias Pedagógicas para el Desarrollo Infantil', horas: '100 horas' },
  { nombre: 'Diplomado en Inclusión Educativa y Atención a la Diversidad', horas: '80 horas' },
];

const cursosInfancia = [
  { nombre: 'Estimulación temprana', horas: '40 horas' },
  { nombre: 'Actividades lúdico-pedagógicas para niños', horas: '40 horas' },
  { nombre: 'Desarrollo socioemocional en la infancia', horas: '40 horas' },
  { nombre: 'Escuela de padres y acompañamiento familiar', horas: '30 horas' },
  { nombre: 'Prevención del maltrato infantil', horas: '40 horas' },
  { nombre: 'Diseño de material didáctico', horas: '40 horas' },
];

const diplomadosAmbiental = [
  { nombre: 'Diplomado en Gestión Ambiental Empresarial', horas: '120 horas' },
  { nombre: 'Diplomado en Gestión Integral de Residuos Sólidos', horas: '100 horas' },
  { nombre: 'Diplomado en Saneamiento Básico y Salud Ambiental', horas: '120 horas' },
  { nombre: 'Diplomado en Educación Ambiental y Desarrollo Sostenible', horas: '80 horas' },
];

const cursosAmbiental = [
  { nombre: 'Manejo adecuado de residuos sólidos', horas: '40 horas' },
  { nombre: 'Separación en la fuente y aprovechamiento de residuos', horas: '30 horas' },
  { nombre: 'Educación ambiental comunitaria', horas: '40 horas' },
  { nombre: 'Gestión del recurso hídrico', horas: '40 horas' },
  { nombre: 'Buenas prácticas ambientales empresariales', horas: '40 horas' },
  { nombre: 'Introducción a la gestión ambiental', horas: '30 horas' },
];

const todosLosDiplomados = [...diplomadosAdmin, ...diplomadosInfancia, ...diplomadosAmbiental];
const todosLosCursos = [...cursosAdmin, ...cursosInfancia, ...cursosAmbiental];

const registrosFinales = [
  ...crearRegistros(todosLosDiplomados, 'Diplomado'),
  ...crearRegistros(todosLosCursos, 'Curso')
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB...');
    
    // NOTA: NO HACEMOS deleteMany para no borrar los Técnicos.
    // Solo borramos los Cursos y Diplomados previamente insertados en caso de duplicados, 
    // pero si es la primera vez, deleteMany por tipo.
    await Programa.deleteMany({ tipo: { $in: ['Curso', 'Diplomado'] } });
    console.log('Cursos y Diplomados anteriores (si los había) eliminados para evitar duplicados.');

    await Programa.insertMany(registrosFinales);
    console.log(`${registrosFinales.length} Cursos y Diplomados insertados con éxito.`);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error al poblar la base de datos:', err);
    mongoose.connection.close();
  });
