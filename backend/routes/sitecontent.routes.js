import { Router } from 'express';
import { getAllContent, updateContent } from '../controllers/sitecontent.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', getAllContent);
router.put('/:seccion', verifyToken, updateContent);

export default router;
