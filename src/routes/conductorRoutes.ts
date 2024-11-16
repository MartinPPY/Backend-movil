import express from 'express'
import { getAllConductores, loginConductor, registroConductor, updatePassword } from '../controllers/conductorController'

const router = express.Router()

router.get('/conductor', getAllConductores)
router.post('/conductor/registro', registroConductor)
router.post('/conductor/login', loginConductor)
router.put('/conductor/reset_password/:email', updatePassword)

export default router