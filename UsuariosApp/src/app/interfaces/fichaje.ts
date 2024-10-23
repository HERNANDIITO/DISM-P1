export interface Fichaje {
    IdFichaje: number,
    FechaHoraEntrada: string,
    FechaHoraSalida: string,
    HorasTrabajadas: number,
    IdTrabajo: number,
    IdUsuario: number,
    GeolocalizacionLatitud: number,
    GeolocalizacionLongitud: number 
}

export interface NewFichaje {
    FechaHoraEntrada: string,
    FechaHoraSalida: string,
    HorasTrabajadas: number,
    IdTrabajo: number,
    IdUsuario: number,
    GeolocalizacionLatitud: number,
    GeolocalizacionLongitud: number 
}
