import { Router } from 'express';
import { getBanners, createBanner, updateBanner, deleteBanner } from '../controllers/banner.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = Router();

// Rutas
router.get('/', getBanners);
router.post('/', verifyToken, upload.single('archivoImagen'), createBanner);
router.put('/:id', verifyToken, upload.single('archivoImagen'), updateBanner);
router.delete('/:id', verifyToken, deleteBanner);

export default router;
