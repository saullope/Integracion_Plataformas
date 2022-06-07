import { Router } from "express";
import { getDocentes } from '../controllers/docenteController'

const router = Router();

router.get('/docente', getDocentes);
    
export default router