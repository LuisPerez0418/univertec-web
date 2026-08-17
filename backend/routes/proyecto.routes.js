import { Router } from 'express';
import { getProyectos, createProyecto, updateProyecto, deleteProyecto } from '../controllers/proyecto.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = Router();

// Rutas
router.get('/', getProyectos);
router.post('/', verifyToken, upload.single('archivoImagen'), createProyecto);
router.put('/:id', verifyToken, upload.single('archivoImagen'), updateProyecto);
router.delete('/:id', verifyToken, deleteProyecto);

export default router;
