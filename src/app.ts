import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import pasajeroRoutes from './routes/pasajeroRoutes'
import conductorRoutes from './routes/conductorRoutes'
import usuarioRoutes from './routes/userRoutes'
import viajesRoutes from './routes/viajesRoutes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

//RUTAS O ENDPOINTS
app.use('/users', pasajeroRoutes)
app.use('/users', conductorRoutes)
app.use('/users', usuarioRoutes)
app.use('/viajes', viajesRoutes)


console.log("iniciando el servidor!")
export default app
