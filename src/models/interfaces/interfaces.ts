export interface user {
    id: number,
    username: string,
    email: string,
    password: string
}

export interface conductor {
    id: number,
    username: string,
    email: string,
    password: string
    auto: number
}

export interface auto {
    id: number,
    patente: string,
    marca: string,
    conductor: number
}

export interface viaje {
    id: number
    fechainicio: string
    horainicio: string
    fechatermino: string
    horatermino: string
    capacidad: number
    conductor: number
    pasajero: number
}



