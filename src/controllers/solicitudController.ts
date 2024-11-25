import { Request, Response } from "express";
import solicitud from "../models/prisma/solicitud";

export const crearSolicitud = async (req: Request, res: Response): Promise<void> => {
    const { salida, destino, fechainicio, horainicio, capacidad, conductor, pasajero } = req.body
    try {
        await solicitud.create({
            data: {
                capacidad: capacidad,
                conductor: conductor,
                destino: destino,
                fechainicio: fechainicio,
                horainicio: horainicio,
                pasajero: pasajero,
                salida: salida
            }
        })

        res.status(201).json({ message: 'Solicitud enviada!' })

    } catch (error: any) {
        res.status(500).json({ message: 'error en el servidor!' })
        console.log(error)
    }
}

//GET:PASAJERO
export const solicitudesByPasajero = async (req: Request, res: Response): Promise<void> => {
    const pasajero = req.params.email
    try {
        const solicitudes = await solicitud.findMany({ where: { pasajero: pasajero } })

        res.status(200).json({ solicitudes })

    } catch (error: any) {
        res.status(500).json({ message: 'error en el servidor!' })
        console.log(error)
    }
}