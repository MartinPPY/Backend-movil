import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import pasajeroRoutes from './routes/pasajeroRoutes'
import conductorRoutes from './routes/conductorRoutes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({
    origin: ["http://localhost:8100"],
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true

}))

//RUTAS O ENDPOINTS
app.use('/users', pasajeroRoutes)
app.use('/users', conductorRoutes)


console.log("iniciando el servidor!")
export default app
