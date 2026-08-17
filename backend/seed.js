import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Banner from './models/Banner.js';
import Proyecto from './models/Proyecto.js';
import SiteContent from './models/SiteContent.js';
import Admin from './models/Admin.js';
import bcrypt from 'bcryptjs';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/univertec';

const bannersIniciales = [
  { titulo: "Banner 1", imagenUrl: "/src/assets/banner6.jpeg", orden: 1, activo: true },
  { titulo: "Banner 2", imagenUrl: "/src/assets/banner8.jpeg", orden: 2, activo: true },
  { titulo: "Banner 14 años", imagenUrl: "/src/assets/univertecbanner14ano.png", orden: 3, activo: true },
  { titulo: "Banner 4", imagenUrl: "/src/assets/banner10.jpeg", orden: 4, activo: true },
  { titulo: "Banner 5", imagenUrl: "/src/assets/banner11.jpeg", orden: 5, activo: true }
];

const proyectosIniciales = [
  {
    titulo: 'Prácticas Pedagógicas',
    descripcion: 'Nuestros estudiantes de Primera Infancia aplicando metodologías lúdicas en centros de desarrollo infantil.',
    categoria: 'Prácticas Pedagógicas',
    imagenUrl: '/src/assets/evento1.jpeg'
  },
  {
    titulo: 'Jornadas de Saneamiento',
    descripcion: 'Campañas de concientización, recolección de residuos y cuidado del medio ambiente lideradas por el área ambiental.',
    categoria: 'Otros',
    imagenUrl: '/src/assets/evento2.jpeg'
  },
  {
    titulo: 'Talleres de Liderazgo',
    descripcion: 'Fortalecimiento de habilidades blandas, trabajo en equipo y resolución de conflictos para el ámbito laboral.',
    categoria: 'Otros',
    imagenUrl: '/src/assets/evento3.jpeg'
  },
  {
    titulo: 'Intervención Comunitaria',
    descripcion: 'Proyectos de impacto social y apoyo integral dirigidos a poblaciones vulnerables de la región.',
    categoria: 'Víctimas',
    imagenUrl: '/src/assets/evento4.jpeg'
  }
];

const contenidosIniciales = [
  {
    seccion: 'nosotros-historia',
    contenido: `La Fundación Universal de Estudios Técnicos – UNIVERTEC nació el 3 de julio de 2012 en la ciudad de Barranquilla, como el proyecto de una profesional emprendedora enfocada en ofrecer educación para el trabajo de alta calidad.

Con el objetivo de expandir nuestro impacto y cobertura institucional, estamos Certificados en el área metropolitana de Barranquilla (Malambo), operando bajo la Licencia de Funcionamiento No. 973 del 10 de agosto de 2022.`
  },
  {
    seccion: 'nosotros-mision',
    contenido: 'Orientar el quehacer académico, organizacional y administrativo de UNIVERTEC, buscando insertar a nuestros egresados en el mundo laboral, formando técnicos de nivel superior que cuenten con las capacidades, habilidades y valores necesarios para incorporarse de manera efectiva en la comunidad.'
  },
  {
    seccion: 'nosotros-vision',
    contenido: 'Para el año 2030, seremos una institución dirigente en la prestación de servicios de formación laboral, reconocida en el sector productivo como una organización con altos niveles de innovación, productividad y comprometida con el desarrollo integral de la sociedad.'
  },
  {
    seccion: 'admisiones-inscripcion',
    contenido: `Si ya elegiste el programa de formación que deseas estudiar, te invitamos a revisar cuidadosamente toda la información relacionada con el plan de estudios, los requisitos de ingreso, las fechas de inicio, los costos...

Antes de iniciar el proceso de matrícula, es importante que conozcas y aceptes el Reglamento Estudiantil...

Pasos:
1. Diligencia el formulario.
2. Adjunta la documentación.
3. Realiza el pago.
4. Efectúa el pago del programa.`
  },
  {
    seccion: 'admisiones-requisitos',
    contenido: `- Copia legible del documento de identidad.
- Copia del diploma de bachiller o acta de grado (o certificado de noveno grado).
- Comprobante de pago del carné institucional y del seguro estudiantil.

Nota: Una vez formalizada la matrícula, el estudiante deberá asistir a la jornada de inducción institucional, cuya participación es obligatoria.`
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a MongoDB para poblar datos iniciales...');

    // Limpiar colecciones
    await Banner.deleteMany({});
    await Proyecto.deleteMany({});
    await SiteContent.deleteMany({});
    await Admin.deleteMany({});
    console.log('Colecciones limpiadas.');

    // Insertar Admin por defecto
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    await Admin.create({
      email: 'admin@univertec.com',
      password: hashedPassword
    });
    console.log('Usuario Admin creado: admin@univertec.com / admin123');

    // Insertar datos
    await Banner.insertMany(bannersIniciales);
    await Proyecto.insertMany(proyectosIniciales);
    await SiteContent.insertMany(contenidosIniciales);
    
    console.log('¡Datos iniciales poblados con éxito!');
    process.exit(0);
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedDB();
