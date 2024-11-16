import { Request, Response } from 'express';
import prisma from '../models/prisma/pasajeroPrisma'
import { cifrarPassword, compararCifrado, generarToken } from '../services/authServices';
import pasajero from '../models/prisma/pasajeroPrisma';

//GET ALL
export const getAllPasajeros = async (req: Request, res: Response): Promise<void> => {

    try {

        const pasajeros = await prisma.findMany()

        res.status(200).json({ pasajeros })

    } catch (error: any) {

        res.status(500).json({ message: error })

    }

}

//REGISTRO
export const registroPasajero = async (req: Request, res: Response): Promise<void> => {

    const { username, email, password } = req.body

    try {

        if (!username) {
            res.status(400).json({ message: 'Nombre de usuario Requerido!' })
            return
        }
        if (!email) {
            res.status(400).json({ message: 'Email de usuario Requerido!' })
            return
        }
        if (!password) {
            res.status(400).json({ message: 'Contraseña de usuario Requerida!' })
            return
        }

        const hashedPassword = await cifrarPassword(password)

        await prisma.create({
            data: {
                email: email,
                password: hashedPassword,
                username: username
            }
        })

        res.status(200).json({ message: 'Registro exitoso!' })

    } catch (error: any) {

        if (error.code == 'P2002' && error.meta.target.includes('username')) {
            res.status(400).json({ message: 'Nombre de usuario ya registrado!' })
            return
        }

        if (error.code == 'P2002' && error.meta.target.includes('email')) {
            res.status(400).json({ message: 'Email ya registrado!' })
            return
        }

        res.status(500).json({ message: error })

    }

}

//LOGIN
export const loginPasajero = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body

    try {

        if (!email) {
            res.status(400).json({ message: 'Email de usuario Requerido!' })
            return
        }
        if (!password) {
            res.status(400).json({ message: 'Contraseña de usuario Requerida!' })
            return
        }

        const pasajero = await prisma.findUnique({ where: { email } })

        if (!pasajero) {
            res.status(404).json({ message: 'El usuario no existe!' })
            return
        }

        const passwordMatch = await compararCifrado(password, pasajero.password)

        if (!passwordMatch) {
            res.status(404).json({ message: 'Credenciales incorrectas!' })
            return
        }

        const token = generarToken(pasajero)

        res.status(200).json({ token })


    } catch (error: any) {

        res.status(500).json({ message: error })

    }

}


//RESET PASSWORD
export const updatePassword = async (req: Request, res: Response) => {

    try {

        const userEmail = req.params.email
        const { password } = req.body
        let dataToUpdate = { ...req.body }

        if (password) {
            const hashedPassword = await cifrarPassword(password)
            dataToUpdate.password = hashedPassword
        }

        await pasajero.update({
            where: { email: userEmail },
            data: dataToUpdate
        })

        res.status(200).json({ message: 'Contraseña actualizada!' })

    } catch (error: any) {

        res.status(500).json({ message: 'error en el servidor!', error: error })
        console.log(error)



    }

}