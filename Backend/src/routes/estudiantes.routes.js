import { Router } from 'express'
import {
    getStudents
} from '../controllers/estudiantecontroller'

const router = Router();

router.get('/estudiantes', getStudents)

export default router