import { Router } from "express";
import { getEducator, sessionEducator, getEmailEducator } from '../controllers/docenteController'

const router = Router();

router.get('/educador', getEducator);
router.post('/educador', getEmailEducator)
//router.post('/educador', createNewEducator)
router.post('/session', sessionEducator)



export default router