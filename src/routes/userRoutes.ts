import express from 'express'
import { getUsuarioByEmail } from '../controllers/userController'

const router = express.Router()

router.get('/buscar_usuarios/:email', getUsuarioByEmail)

export default router