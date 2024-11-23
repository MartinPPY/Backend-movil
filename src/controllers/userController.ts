import { Request, Response } from "express";
import usuario from '../models/prisma/usuarioPrisma'

export const getUsuarioByEmail = async (req: Request, res: Response) => {

    const userEmail = req.params.email

    try {

        if (!userEmail) {
            res.status(400).json({ message: 'Email es requerido!' })
            return
        }

        const user = await usuario.findUnique({ where: { email: userEmail } })

        if (!user) {
            res.status(400).json({ message: 'Usuario no encontrado!' })
            return
        }

        res.status(200).json({ user })

    } catch (error: any) {

        res.status(500).json({ message: 'Error en el servidor' })
        console.log(error)

    }

}