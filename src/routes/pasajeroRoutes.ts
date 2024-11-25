import express from 'express'
import { getAllPasajeros, loginPasajero, registroPasajero, traerPasajeroByEmail, updatePassword } from '../controllers/pasajeroController'


const router = express.Router()

//RUTAS DE PASAJEROS
router.get('/pasajeros', getAllPasajeros)
router.get('/pasajero/:email', traerPasajeroByEmail)
router.post('/pasajero/registro', registroPasajero)
router.post('/pasajero/login', loginPasajero)
router.put('/pasajero/reset_password/:email', updatePassword)

export default router