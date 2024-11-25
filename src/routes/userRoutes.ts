import express from 'express'
import { getUsuarioByEmail } from '../controllers/userController'

const router = express.Router()

router.get('/buscar_user/:email', getUsuarioByEmail)

export default router