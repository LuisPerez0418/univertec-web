import { Router } from 'express';
import { 
  getProgramas, 
  getProgramaById, 
  createPrograma, 
  deletePrograma 
} from '../controllers/programa.controller.js';

const router = Router();

// Rutas para los programas
router.get('/', getProgramas);
router.get('/:id', getProgramaById);
router.post('/', createPrograma);
router.delete('/:id', deletePrograma); // Borrado lógico

export default router;
