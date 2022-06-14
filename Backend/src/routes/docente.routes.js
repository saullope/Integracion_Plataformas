import { Router } from "express";
import 
    { getEducator, 
        sessionEducator, 
        getEmailEducator, 
        getStudentTeacher 
    } from '../controllers/docenteController'

const router = Router();

router.get('/educador', getEducator);
router.post('/educador', getEmailEducator)
router.post('/session', sessionEducator)
router.post('/estudianteEducador', getStudentTeacher);


export default router