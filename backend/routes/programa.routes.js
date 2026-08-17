import { Router } from 'express';
import { getProgramas, getProgramaById, createPrograma, updatePrograma, deletePrograma } from '../controllers/programa.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

// Rutas para los programas
router.get('/', getProgramas);
router.get('/:id', getProgramaById);
router.post('/', verifyToken, createPrograma);
router.put('/:id', verifyToken, updatePrograma);
router.delete('/:id', verifyToken, deletePrograma); // Borrado lógico

export default router;
