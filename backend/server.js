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
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/univertec';

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'https://univertec.org', 'https://www.univertec.org', 'https://api.univertec.org'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
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
  res.status(200).json({
    status: 'ok',
    message: 'Backend is running'
  });
});

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conectado correctamente a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    // El servidor Express no se detiene
  }
};
connectDB();

// Iniciar servidor
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(` Servidor corriendo en el puerto ${PORT}`);
});
