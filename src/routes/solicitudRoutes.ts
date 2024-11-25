import express from 'express'
import { crearSolicitud, solicitudesByPasajero } from '../controllers/solicitudController'

const router = express.Router()

router.post('/crear_solicitud', crearSolicitud)
router.get('/solicitudes_pasajero/:email', solicitudesByPasajero)

export default router