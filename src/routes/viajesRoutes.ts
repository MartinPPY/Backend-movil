import express from 'express'
import { crearViaje, getViajeByEmail } from '../controllers/viajeController'

const router = express.Router()

router.post('/crear_viaje', crearViaje)
router.get('/viaje/:email', getViajeByEmail)

export default router