import express from 'express'
import { actualizarCapacidad, crearViaje, getViajeByEmail, getViajeById, getViajes } from '../controllers/viajeController'

const router = express.Router()

router.post('/crear_viaje', crearViaje)
router.get('/viaje/:email', getViajeByEmail)
router.get('/viaje_id/:id', getViajeById)
router.get('/all_viajes', getViajes)
router.put('/capacidad/:id', actualizarCapacidad)

export default router