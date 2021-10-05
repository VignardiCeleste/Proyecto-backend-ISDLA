import {Router} from 'express'

import { createNewAlumno, getAlumno } from '../controllers/alumno.controllers'

const router = Router()

/*definir las rutas*/

router.get('/alumno', getAlumno);

router.post('/alumno', createNewAlumno);

router.get('/alumno');

router.delete('/alumno');

router.put('/alumno');





export default router;