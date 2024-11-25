import { Request, Response } from "express";
import viaje from '../models/prisma/viaje'


//POST
export const crearViaje = async (req: Request, res: Response): Promise<void> => {

    const { fechaInic, horaInic, capacidad, conductor, destino, salida } = req.body
    const datos: any = { fechaInic: fechaInic, horaInic: horaInic, capacidad: capacidad, conductor: conductor }
    const datosProcesar = Object.keys(datos)

    try {

        for (let i = 0; i < datosProcesar.length; i++) {
            const dato = datos[datosProcesar[i]]
            if (!dato) {
                res.status(400).json({ message: `${datosProcesar[i]} es requerido!` })
                return
            }
        }

        await viaje.create({
            data: {
                capacidad: parseInt(capacidad),
                conductor: conductor,
                fechainicio: fechaInic,
                horainicio: horaInic,
                destino: destino,
                salida: salida
            }
        })

        res.status(200).json({ message: 'Viaje Creado!' })

    } catch (error: any) {

        res.status(500).json({ message: 'Error en el servidor!', error: error })
        console.log(error)

    }


}

//GET:CORREO
export const getViajeByEmail = async (req: Request, res: Response) => {

    const userEmail = req.params.email

    try {

        const getViaje = await viaje.findMany({ where: { conductor: userEmail } })

        if (!getViaje) {
            res.status(404).json({ message: 'Aun no hay viajes de este usuario!' })
            return
        }

        res.status(200).json({ getViaje })


    } catch (error: any) {
        res.status(500).json({ message: 'error en el servidor!', error: error })
        console.log(error)
    }

}

//GET:CORREO
export const getViajeById = async (req: Request, res: Response) => {

    const viajeId = parseInt(req.params.id)

    try {

        const getViaje = await viaje.findUnique({ where: { id: viajeId } })

        if (!getViaje) {
            res.status(404).json({ message: 'Aun no hay viajes de este usuario!' })
            return
        }

        res.status(200).json({ getViaje })

    } catch (error: any) {
        res.status(500).json({ message: 'error en el servidor!', error: error })
        console.log(error)
    }

}

//GET ALL
export const getViajes = async (req: Request, res: Response): Promise<void> => {
    try {
        const viajes = await viaje.findMany()
        res.status(200).json(viajes)
    } catch (error: any) {
        res.status(500).json({ message: 'error en el servidor!' })
        console.log(error)
    }
}

//PUT CAPACIDAD
export const actualizarCapacidad = async (req: Request, res: Response): Promise<void> => {
    try {
        const viajeId = parseInt(req.params.id)
        let dataToUpdate: any = { ...req.body }

        await viaje.update({
            where: { id: viajeId },
            data: dataToUpdate
        })

        res.status(200).json({ message: 'Registro actualizado!' })

    } catch (error: any) {
        res.status(500).json({ message: 'error en el servidor!' })
        console.log(error)
    }
}