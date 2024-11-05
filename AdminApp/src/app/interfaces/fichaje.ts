export interface Fichaje {
    IdFichaje: string   ,
    FechaHoraEntrada: string,
    FechaHoraSalida: string,
    HorasTrabajadas: number,
    IdTrabajo: string,
    IdUsuario: string,
    GeolocalizacionLatitud: number,
    GeolocalizacionLongitud: number 
}

export interface NewFichaje {
    FechaHoraEntrada: string,
    FechaHoraSalida: string,
    HorasTrabajadas: number,
    IdTrabajo: string,
    IdUsuario: string,
    GeolocalizacionLatitud: number,
    GeolocalizacionLongitud: number 
}
