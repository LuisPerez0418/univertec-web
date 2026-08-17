import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import programaRoutes from './routes/programa.routes.js';
import bannerRoutes from './routes/banner.routes.js';
import proyectoRoutes from './routes/proyecto.routes.js';
import sitecontentRoutes from './routes/sitecontent.routes.js';
import authRoutes from './routes/auth.routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/univertec';

// Middlewares
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/programas', programaRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/content', sitecontentRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

// Database connection and Server initialization
const startServer = async () => {
  try {
    // Intentamos establecer la conexión con la base de datos
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conexión exitosa a la base de datos MongoDB sincronizada.');
    
    // Si es exitoso, levantamos el servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo de forma robusta en http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error crítico al conectar a MongoDB:', error.message);
    console.log('⚠️ Iniciando servidor en modo de fallback (sin base de datos) para desarrollo...');
    
    // En caso de fallo, levantamos en modo de prueba/fallback
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://127.0.0.1:${PORT} (Modo Fallback)`);
    });
  }
};

startServer();
