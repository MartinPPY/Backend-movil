import express from 'express'
import { getAllPasajeros, loginPasajero, registroPasajero, updatePassword } from '../controllers/pasajeroController'


const router = express.Router()

//RUTAS DE PASAJEROS
router.get('/pasajeros', getAllPasajeros)
router.post('/pasajeros/registro', registroPasajero)
router.post('/pasajeros/login', loginPasajero)
router.put('/pasajeros/reset_password/:email', updatePassword)

export default router