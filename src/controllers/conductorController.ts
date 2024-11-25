import { Request, Response } from 'express';
import pasajero from '../models/prisma/pasajeroPrisma'
import conductor from '../models/prisma/conductorPrisma'
import auto from '../models/prisma/auto'
import user from '../models/prisma/usuarioPrisma'
import { cifrarPassword, compararCifrado, generarToken } from '../services/authServices';


//GET ALL
export const getAllConductores = async (req: Request, res: Response): Promise<void> => {

    try {

        const usuarios = await conductor.findMany()

        res.status(200).json({ usuarios })

    } catch (error: any) {

        res.status(500).json({ message: error })

    }

}

//REGISTRO
export const registroConductor = async (req: Request, res: Response): Promise<void> => {

    const { username, email, password, patente, marca, tipoUsuario } = req.body
    const datos: any = { username: username, email: email, password: password, patente: patente, marca: marca }
    const datosProcesar = Object.keys(datos)

    try {

        for (let i = 0; i < datosProcesar.length; i++) {
            const dato = datos[datosProcesar[i]]
            if (!dato) {
                res.status(400).json({ message: `${datosProcesar[i]} es requerido!` })
                return
            }
        }

        const autos = await auto.findMany()
        for (let i = 0; i < autos.length; i++) {
            if (patente == autos[i].patente) {
                res.status(400).json({ message: 'Patente ya registrada!' })
                return
            }
        }

        const pasajeros = await pasajero.findMany()

        for (let i = 0; i < pasajeros.length; i++) {
            if (pasajeros[i].email == email) {
                res.status(400).json({ message: 'Usuario ya registrado!' })
                return
            }
            if (pasajeros[i].username == username) {
                res.status(400).json({ message: 'Usuario ya registrado!' })
                return
            }
        }

        const hashedPassword = await cifrarPassword(password)

        await conductor.create({
            data: {
                email: email,
                password: hashedPassword,
                username: username,
                auto: patente,
                tipoUsuario: 'conductor'
            }
        })

        await user.create({
            data: {
                email: email,
                password: hashedPassword,
                username: username,
                tipoUsuario: 'conductor'
            }
        })

        await auto.create({
            data: {
                conductor: email,
                marca: marca,
                patente: patente
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

        if (error.code == 'P2002' && error.meta.target.includes('patente')) {
            res.status(400).json({ message: 'Patente ya registrada!' })
            return
        }

        res.status(500).json({ message: error })

    }

}

//LOGIN
export const loginConductor = async (req: Request, res: Response): Promise<void> => {

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

        const user = await conductor.findUnique({ where: { email } })

        if (!user) {
            res.status(404).json({ message: 'El usuario no existe!' })
            return
        }

        const passwordMatch = await compararCifrado(password, user.password)

        if (!passwordMatch) {
            res.status(404).json({ message: 'Credenciales incorrectas!' })
            return
        }

        const token = generarToken(user)

        res.status(200).json({ token: token, user: user })


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

        await conductor.update({
            where: { email: userEmail },
            data: dataToUpdate
        })

        res.status(200).json({ message: 'Contraseña actualizada!' })

    } catch (error: any) {

        res.status(500).json({ message: 'error en el servidor!', error: error })
        console.log(error)



    }

}

//GET BY EMAIL
export const getConductorByEmail = async (req: Request, res: Response) => {
    const userEmail = req.params.email
    try {
        const user = await conductor.findUnique({ where: { email: userEmail } })
        res.status(200).json({ user })
    } catch (error: any) {
        res.status(500).json({ message: 'Error en el servidor' })
        console.log(error)
    }

}