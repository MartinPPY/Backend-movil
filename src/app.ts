import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import pasajeroRoutes from './routes/pasajeroRoutes'
import conductorRoutes from './routes/conductorRoutes'
import usuarioRoutes from './routes/userRoutes'
import viajesRoutes from './routes/viajesRoutes'
import solicitudRoutes from './routes/solicitudRoutes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

//RUTAS O ENDPOINTS
app.use('/users', pasajeroRoutes)
app.use('/users', conductorRoutes)
app.use('/users', usuarioRoutes)
app.use('/viajes', viajesRoutes)
app.use('/solicitud', solicitudRoutes)


console.log("iniciando el servidor!")
export default app
